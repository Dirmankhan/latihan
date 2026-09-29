(function () {
  'use strict';

  const CFG = window.LMS_CONFIG || {};
  const HURUF = ['A', 'B', 'C', 'D', 'E'];
  const KUNCI = { profil: 'lms_profil', riwayat: 'lms_riwayat', antrian: 'lms_antrian', soalSheet: 'lms_soal_sheet', tab: 'lms_tab', kompetisi: 'lms_kompetisi' };
  const KATEGORI = {
    pelajaran: { label: 'Materi Pelajaran', ikon: '📘', ajakan: 'Pelajari materi sekolah dan latih pemahamanmu.' },
    lomba: { label: 'Persiapan Lomba', ikon: '🏆', ajakan: 'Latihan soal per kompetisi (KMSI, KSM, dan lainnya). Semangat, calon juara!' },
  };

  const $ = (sel) => document.querySelector(sel);
  const el = (tag, attrs = {}, html = '') => {
    const n = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => (k === 'class' ? (n.className = v) : n.setAttribute(k, v)));
    if (html) n.innerHTML = html;
    return n;
  };

  // ---------- Penyimpanan lokal (aman jika localStorage tidak tersedia) ----------
  const simpan = {
    get(k, def) {
      try { const v = localStorage.getItem(k); return v ? JSON.parse(v) : def; } catch (e) { return def; }
    },
    set(k, v) {
      try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* abaikan */ }
    },
  };

  const state = { profil: simpan.get(KUNCI.profil, null), bank: [], topikAktif: null, sesi: null, timer: null, tab: simpan.get(KUNCI.tab, 'pelajaran'), kompetisi: simpan.get(KUNCI.kompetisi, '') };

  // ---------- Utilitas ----------
  function esc(s) {
    return String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  }
  function acak(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function normal(s) {
    return String(s ?? '').toLowerCase().replace(/\s+/g, ' ').replace(/,/g, '.').replace(/[−–]/g, '-').trim();
  }
  function formatWaktu(detik) {
    const m = Math.floor(detik / 60), s = detik % 60;
    return String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  }
  function formatTanggal(t) {
    const d = new Date(t);
    if (isNaN(d)) return esc(t);
    return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) +
      ' ' + d.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }
  function idTopik(kategori, kompetisi, mapel, topik) { return [kategori || 'pelajaran', kompetisi || '', mapel, topik].join('::'); }
  // Nama mapel lengkap untuk tampilan, mis. "KMSI 2026 · Matematika".
  function judulMapel(kompetisi, mapel) { return kompetisi ? kompetisi + ' · ' + mapel : mapel; }
  function infoKompetisi(nama) { return (window.INFO_KOMPETISI || {})[nama] || {}; }
  // "lomba", "Persiapan Lomba", "KSM", "OSN" → lomba; selain itu → pelajaran.
  function kodeKategori(k) { return /lomba|ksm|osn|olimpiade/.test(normal(k)) ? 'lomba' : 'pelajaran'; }
  function idSesiBaru() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 8); }

  // Markdown mini: paragraf, daftar "- ", **tebal**.
  function renderMateri(teks) {
    const blok = esc(teks).split(/\n\s*\n/);
    return blok.map((b) => {
      const baris = b.split('\n').map((x) => x.trim()).filter(Boolean);
      const tebal = (x) => x.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
      if (baris.length && baris.every((x) => x.startsWith('- '))) {
        return '<ul>' + baris.map((x) => '<li>' + tebal(x.slice(2)) + '</li>').join('') + '</ul>';
      }
      const out = [];
      let daftar = [];
      baris.forEach((x) => {
        if (x.startsWith('- ')) { daftar.push('<li>' + tebal(x.slice(2)) + '</li>'); return; }
        if (daftar.length) { out.push('<ul>' + daftar.join('') + '</ul>'); daftar = []; }
        out.push('<p>' + tebal(x) + '</p>');
      });
      if (daftar.length) out.push('<ul>' + daftar.join('') + '</ul>');
      return out.join('');
    }).join('');
  }

  // ---------- Bank soal: bawaan + dari Google Sheet ----------
  function gabungBank(dariSheet) {
    const bank = JSON.parse(JSON.stringify(window.BANK_SOAL || []));
    bank.forEach((m) => {
      m.kompetisi = m.kompetisi ? String(m.kompetisi) : '';
      m.kategori = m.kompetisi ? 'lomba' : kodeKategori(m.kategori);
    });
    const cariMapel = (nama, kategori, kompetisi) => {
      let m = bank.find((x) => normal(x.mapel) === normal(nama) && x.kategori === kategori && normal(x.kompetisi) === normal(kompetisi));
      if (!m) {
        // Samakan penulisan nama kompetisi dengan yang sudah ada (mis. "kmsi 2026" → "KMSI 2026").
        const ada = bank.find((x) => normal(x.kompetisi) === normal(kompetisi));
        m = { mapel: String(nama), kategori, kompetisi: ada ? ada.kompetisi : String(kompetisi || ''), ikon: kategori === 'lomba' ? '🏆' : '📘', topik: [] };
        bank.push(m);
      }
      return m;
    };
    const cariTopik = (mapel, nama, kelas, kategori, kompetisi) => {
      kompetisi = String(kompetisi ?? '').trim();
      const m = cariMapel(mapel, kompetisi ? 'lomba' : kodeKategori(kategori), kompetisi);
      let t = m.topik.find((x) => normal(x.nama) === normal(nama));
      if (!t) { t = { nama: String(nama), kelas: String(kelas || ''), materi: '', soal: [] }; m.topik.push(t); }
      return t;
    };
    if (dariSheet) {
      (dariSheet.materi || []).forEach((r) => {
        if (!r[0] || !r[1]) return;
        cariTopik(r[0], r[1], r[2], r[4], r[5]).materi = String(r[3] || '');
      });
      (dariSheet.soal || []).forEach((r) => {
        const [mapel, topik, kelas, tipe, pertanyaan, a, b, c, d, jawaban, pembahasan, kategori, kompetisi] = r;
        if (!mapel || !topik || !pertanyaan) return;
        const t = cariTopik(mapel, topik, kelas, kategori, kompetisi);
        const jenis = normal(tipe) === 'isian' ? 'isian' : 'pg';
        const soal = { tipe: jenis, pertanyaan: String(pertanyaan), jawaban: String(jawaban ?? '').trim(), pembahasan: String(pembahasan || '') };
        if (jenis === 'pg') soal.pilihan = [a, b, c, d].map((x) => String(x ?? '')).filter((x) => x !== '');
        t.soal.push(soal);
      });
    }
    // Topik simulasi berisi semua soal dari topik lain pada mapel yang sama,
    // termasuk soal tambahan dari Google Sheet.
    bank.forEach((m) => m.topik.filter((t) => t.simulasi).forEach((t) => {
      const sudah = new Set();
      t.soal = m.topik.filter((x) => !x.simulasi).flatMap((x) => x.soal)
        .filter((q) => !sudah.has(q.pertanyaan) && sudah.add(q.pertanyaan));
    }));
    // Urutkan mapel pelajaran sesuai urutan rapor (file soal-buku dimuat setelah bank-soal).
    const urutan = window.URUTAN_MAPEL || [];
    const posisi = (m) => { const i = urutan.indexOf(m.mapel); return i === -1 ? urutan.length : i; };
    const pelajaran = bank.filter((m) => m.kategori === 'pelajaran').sort((a, b) => posisi(a) - posisi(b));
    const hasil = pelajaran.concat(bank.filter((m) => m.kategori !== 'pelajaran'));
    return hasil.filter((m) => m.topik.some((t) => t.soal.length || t.materi));
  }

  async function muatBank() {
    state.bank = gabungBank(simpan.get(KUNCI.soalSheet, null));
    if (!CFG.APPS_SCRIPT_URL) return;
    try {
      const url = CFG.APPS_SCRIPT_URL + '?action=soal&token=' + encodeURIComponent(CFG.TOKEN);
      const res = await fetch(url);
      const data = await res.json();
      if (data.ok) {
        simpan.set(KUNCI.soalSheet, { soal: data.soal, materi: data.materi });
        state.bank = gabungBank(data);
      }
    } catch (e) { /* offline: pakai cache */ }
  }

  function cariTopik(id) {
    for (const m of state.bank) for (const t of m.topik) if (idTopik(m.kategori, m.kompetisi, m.mapel, t.nama) === id) return { mapel: m, topik: t };
    return null;
  }

  // ---------- Pengiriman ke Google Sheet (dengan antrian offline) ----------
  async function kirimSatu(payload) {
    const body = JSON.stringify(Object.assign({ token: CFG.TOKEN }, payload));
    try {
      // Tanpa header Content-Type → text/plain, sehingga tidak butuh preflight CORS.
      const res = await fetch(CFG.APPS_SCRIPT_URL, { method: 'POST', body });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || 'Gagal');
      return true;
    } catch (e) {
      if (e instanceof TypeError) {
        // Beberapa browser memblokir pembacaan respons; kirim tanpa membaca balasan.
        await fetch(CFG.APPS_SCRIPT_URL, { method: 'POST', mode: 'no-cors', body });
        return true;
      }
      throw e;
    }
  }

  async function kirimAntrian() {
    if (!CFG.APPS_SCRIPT_URL) return { terkirim: 0, sisa: 0 };
    let antrian = simpan.get(KUNCI.antrian, []);
    let terkirim = 0;
    for (const item of antrian.slice()) {
      try {
        await kirimSatu(item);
        antrian = antrian.filter((x) => x.idSesi !== item.idSesi);
        simpan.set(KUNCI.antrian, antrian);
        terkirim++;
      } catch (e) { break; }
    }
    tampilStatusSync();
    return { terkirim, sisa: antrian.length };
  }

  function tampilStatusSync() {
    const box = $('#status-sync');
    const n = simpan.get(KUNCI.antrian, []).length;
    if (!CFG.APPS_SCRIPT_URL || !n) { box.hidden = true; return; }
    box.hidden = false;
    box.innerHTML = `${n} hasil latihan belum terkirim ke Google Sheet. <button class="btn sm" type="button" id="btn-kirim-ulang">Kirim sekarang</button>`;
    $('#btn-kirim-ulang').onclick = () => kirimAntrian();
  }

  // ---------- Navigasi tampilan ----------
  function tampil(nama) {
    document.querySelectorAll('.view').forEach((v) => (v.hidden = v.id !== 'v-' + nama));
    $('#nav').hidden = !state.profil;
    if (nama !== 'kuis') hentikanTimer();
    window.scrollTo(0, 0);
    if (nama === 'beranda') renderBeranda();
    if (nama === 'riwayat') renderRiwayat();
  }

  function pergi(nama) {
    if (state.sesi && !state.sesi.selesai && $('#v-kuis').hidden === false && nama !== 'kuis') {
      if (!confirm('Latihan belum selesai. Keluar dan batalkan latihan ini?')) return;
      state.sesi = null;
    }
    tampil(state.profil ? nama : 'masuk');
  }

  // ---------- Beranda ----------
  function statistik() {
    const semua = simpan.get(KUNCI.riwayat, []).filter((r) => r.nama === state.profil.nama);
    const riwayat = semua.filter((r) => kodeKategori(r.kategori) === state.tab &&
      (state.tab !== 'lomba' || !kompetisiAktif() || normal(r.kompetisi) === normal(kompetisiAktif())));
    const terbaik = {};
    riwayat.forEach((r) => {
      const id = idTopik(kodeKategori(r.kategori), r.kompetisi, r.mapel, r.topik);
      terbaik[id] = Math.max(terbaik[id] ?? 0, r.nilai);
    });
    const hari = new Set(semua.map((r) => new Date(r.waktu).toDateString()));
    let beruntun = 0;
    const d = new Date();
    if (!hari.has(d.toDateString())) d.setDate(d.getDate() - 1);
    while (hari.has(d.toDateString())) { beruntun++; d.setDate(d.getDate() - 1); }
    const rata = riwayat.length ? Math.round(riwayat.reduce((s, r) => s + r.nilai, 0) / riwayat.length) : 0;
    return { riwayat, terbaik, beruntun, rata };
  }

  // Kompetisi yang dipilih di tab Lomba ('' = semua); diabaikan jika sudah tidak ada.
  function kompetisiAktif() {
    const ada = state.bank.some((m) => m.kategori === 'lomba' && m.kompetisi === state.kompetisi);
    return ada ? state.kompetisi : '';
  }

  function renderBeranda() {
    const p = state.profil;
    const st = statistik();
    const jam = new Date().getHours();
    const salam = jam < 11 ? 'Selamat pagi' : jam < 15 ? 'Selamat siang' : jam < 18 ? 'Selamat sore' : 'Selamat malam';
    $('#teks-sapaan').textContent = `${salam}, ${p.nama.split(' ')[0]}! 🌟`;
    const motivasi = ['Sedikit demi sedikit, lama-lama jadi bukit.', 'Belajar hari ini, hebat esok hari!',
      'Salah itu wajar, yang penting terus mencoba.', 'Ayo kalahkan nilai terbaikmu sendiri!'];
    $('#teks-motivasi').textContent = motivasi[new Date().getDate() % motivasi.length];

    const tabs = $('#tabs');
    tabs.innerHTML = '';
    Object.entries(KATEGORI).forEach(([kode, k]) => {
      const jumlah = state.bank.filter((m) => m.kategori === kode).reduce((n, m) => n + m.topik.length, 0);
      const b = el('button', { type: 'button', role: 'tab', class: 'tab' + (state.tab === kode ? ' aktif' : ''), 'aria-selected': String(state.tab === kode) },
        `${k.ikon} ${k.label} <span class="jumlah">${jumlah}</span>`);
      b.onclick = () => { state.tab = kode; simpan.set(KUNCI.tab, kode); renderBeranda(); };
      tabs.appendChild(b);
    });
    $('#teks-kategori').textContent = KATEGORI[state.tab].ajakan;

    // Filter kompetisi (hanya di tab Lomba).
    const saring = $('#filter-kompetisi');
    const daftarKompetisi = [...new Set(state.bank.filter((m) => m.kategori === 'lomba').map((m) => m.kompetisi || 'Lainnya'))];
    saring.innerHTML = '';
    saring.hidden = state.tab !== 'lomba' || daftarKompetisi.length < 2;
    ['', ...daftarKompetisi].forEach((k) => {
      const b = el('button', { type: 'button', class: 'chip-pilih' + (kompetisiAktif() === k ? ' aktif' : '') }, esc(k || 'Semua kompetisi'));
      b.onclick = () => { state.kompetisi = k; simpan.set(KUNCI.kompetisi, k); renderBeranda(); };
      saring.appendChild(b);
    });

    const tuntas = Object.values(st.terbaik).filter((n) => n >= CFG.KKTP).length;
    $('#stats').innerHTML = [
      [st.riwayat.length, 'Latihan selesai'],
      [st.rata, 'Rata-rata nilai'],
      [tuntas, 'Topik tuntas'],
      [st.beruntun + ' 🔥', 'Hari beruntun'],
    ].map(([b, s]) => `<div class="stat"><b>${b}</b><span>${s}</span></div>`).join('');

    const wadah = $('#daftar-mapel');
    wadah.innerHTML = '';
    const daftar = state.bank.filter((m) => m.kategori === state.tab &&
      (state.tab !== 'lomba' || !kompetisiAktif() || m.kompetisi === kompetisiAktif()));
    if (!daftar.length) {
      wadah.innerHTML = `<div class="card kosong">Belum ada materi ${esc(KATEGORI[state.tab].label.toLowerCase())}. Tambahkan soal di sheet "BankSoal" (kolom Kategori: ${state.tab}).</div>`;
      return;
    }
    let kompetisiTerakhir = null;
    daftar.slice().sort((a, b) => (a.kompetisi > b.kompetisi) - (a.kompetisi < b.kompetisi)).forEach((m) => {
      if (state.tab === 'lomba' && m.kompetisi !== kompetisiTerakhir) {
        kompetisiTerakhir = m.kompetisi;
        const info = infoKompetisi(m.kompetisi);
        wadah.appendChild(el('div', { class: 'kompetisi-kepala' },
          `<h2>🏆 ${esc(m.kompetisi || 'Lomba lainnya')}</h2>${info.nama ? `<p><b>${esc(info.nama)}</b></p>` : ''}${info.keterangan ? `<p class="muted small">${esc(info.keterangan)}</p>` : ''}`));
      }
      const sec = el('div', { class: 'mapel' });
      sec.appendChild(el('h2', {}, `${esc(m.ikon || '📘')} ${esc(m.mapel)}`));
      const grid = el('div', { class: 'topik-grid' });
      const urut = m.topik.slice().sort((a, b) => (String(a.kelas) === p.kelas ? -1 : 0) - (String(b.kelas) === p.kelas ? -1 : 0));
      urut.forEach((t) => {
        const id = idTopik(m.kategori, m.kompetisi, m.mapel, t.nama);
        const nilai = st.terbaik[id];
        const badge = nilai === undefined ? '<span class="badge baru">Belum dicoba</span>'
          : nilai >= CFG.KKTP ? `<span class="badge tuntas">Tuntas · ${nilai}</span>`
            : `<span class="badge belum">Terbaik ${nilai}</span>`;
        const kartu = el('div', { class: 'topik' }, `
          <h3>${esc(t.nama)}</h3>
          <div class="meta">${t.kelas ? (/^\d/.test(t.kelas) ? 'Kelas ' : '') + esc(t.kelas) + ' · ' : ''}${t.soal.length} soal${t.soalPerSesi ? ' · ' + Math.min(t.soalPerSesi, t.soal.length) + ' soal per sesi' : ''}</div>
          ${t.sumber ? `<div class="sumber">📚 ${esc(t.sumber)}</div>` : ''}
          <div>${badge}</div>
          <div class="tombol"></div>`);
        const tombol = kartu.querySelector('.tombol');
        if (t.materi) {
          const b = el('button', { class: 'btn sm', type: 'button' }, '📖 Materi');
          b.onclick = () => bukaMateri(id);
          tombol.appendChild(b);
        }
        if (t.soal.length) {
          const b = el('button', { class: 'btn sm primary', type: 'button' }, '✏️ Latihan');
          b.onclick = () => mulaiKuis(id);
          tombol.appendChild(b);
        }
        grid.appendChild(kartu);
      });
      sec.appendChild(grid);
      wadah.appendChild(sec);
    });
  }

  // ---------- Materi ----------
  function bukaMateri(id) {
    const x = cariTopik(id);
    if (!x) return;
    state.topikAktif = id;
    $('#materi-mapel').textContent = `${KATEGORI[x.mapel.kategori].ikon} ${x.mapel.kompetisi ? '' : KATEGORI[x.mapel.kategori].label + ' · '}${judulMapel(x.mapel.kompetisi, x.mapel.mapel)}`;
    $('#materi-judul').textContent = x.topik.nama;
    $('#materi-isi').innerHTML = renderMateri(x.topik.materi || 'Belum ada materi untuk topik ini.');
    $('#btn-mulai-dari-materi').hidden = !x.topik.soal.length;
    tampil('materi');
  }

  // ---------- Kuis ----------
  function siapkanSoal(s) {
    if (s.tipe === 'isian') return Object.assign({}, s, { kunciTeks: s.jawaban });
    const idx = HURUF.indexOf(String(s.jawaban).trim().toUpperCase());
    const kunciTeks = s.pilihan[idx] ?? s.jawaban;
    return Object.assign({}, s, { pilihanAcak: acak(s.pilihan), kunciTeks });
  }

  function mulaiKuis(id, daftarSoal) {
    const x = cariTopik(id);
    if (!x) return;
    state.topikAktif = id;
    const sumber = daftarSoal || acak(x.topik.soal).slice(0, x.topik.soalPerSesi || CFG.SOAL_PER_SESI || 10);
    state.sesi = {
      idSesi: idSesiBaru(), kategori: x.mapel.kategori, kompetisi: x.mapel.kompetisi, mapel: x.mapel.mapel, topik: x.topik.nama,
      soal: sumber.map(siapkanSoal), jawaban: [], indeks: 0, mulai: Date.now(), selesai: false,
    };
    tampil('kuis');
    mulaiTimer();
    renderSoal();
  }

  function mulaiTimer() {
    hentikanTimer();
    state.timer = setInterval(() => {
      if (!state.sesi) return;
      $('#kuis-timer').textContent = '⏱ ' + formatWaktu(Math.floor((Date.now() - state.sesi.mulai) / 1000));
    }, 1000);
    $('#kuis-timer').textContent = '⏱ 00:00';
  }
  function hentikanTimer() { if (state.timer) clearInterval(state.timer); state.timer = null; }

  function terjawab(i) {
    const j = state.sesi.jawaban[i];
    return j !== undefined && String(j).trim() !== '';
  }

  function renderSoal() {
    const s = state.sesi;
    const soal = s.soal[s.indeks];
    const total = s.soal.length;
    $('#kuis-info').textContent = `${KATEGORI[s.kategori].ikon} ${judulMapel(s.kompetisi, s.mapel)} · ${s.topik} — Soal ${s.indeks + 1} dari ${total}`;
    $('#kuis-progress').style.width = (s.jawaban.filter((_, i) => terjawab(i)).length / total * 100) + '%';

    const nomor = $('#kuis-nomor');
    nomor.innerHTML = '';
    s.soal.forEach((_, i) => {
      const b = el('button', { type: 'button', class: (terjawab(i) ? 'terjawab ' : '') + (i === s.indeks ? 'aktif' : '') }, String(i + 1));
      b.onclick = () => { s.indeks = i; renderSoal(); };
      nomor.appendChild(b);
    });

    // Soal bacaan: teks sebelum paragraf terakhir ditampilkan sebagai kotak bacaan.
    const potong = soal.pertanyaan.lastIndexOf('\n\n');
    $('#kuis-bacaan').hidden = potong === -1;
    $('#kuis-bacaan').textContent = potong === -1 ? '' : soal.pertanyaan.slice(0, potong);
    $('#kuis-pertanyaan').textContent = potong === -1 ? soal.pertanyaan : soal.pertanyaan.slice(potong + 2);
    const wadah = $('#kuis-jawaban');
    wadah.innerHTML = '';
    if (soal.tipe === 'isian') {
      const inp = el('input', { type: 'text', placeholder: 'Tulis jawabanmu di sini', autocomplete: 'off' });
      inp.value = s.jawaban[s.indeks] ?? '';
      inp.oninput = () => { s.jawaban[s.indeks] = inp.value; perbaruiProgres(); };
      inp.onkeydown = (e) => { if (e.key === 'Enter') $('#btn-berikut').click(); };
      wadah.appendChild(inp);
      setTimeout(() => inp.focus(), 50);
    } else {
      soal.pilihanAcak.forEach((teks, i) => {
        const b = el('button', { type: 'button', class: 'pilihan' + (s.jawaban[s.indeks] === teks ? ' dipilih' : '') },
          `<span class="huruf">${HURUF[i]}</span><span>${esc(teks)}</span>`);
        b.onclick = () => { s.jawaban[s.indeks] = teks; renderSoal(); };
        wadah.appendChild(b);
      });
    }
    $('#btn-sebelum').disabled = s.indeks === 0;
    $('#btn-berikut').textContent = s.indeks === total - 1 ? 'Selesai ✅' : 'Berikutnya →';
  }

  function perbaruiProgres() {
    const s = state.sesi;
    $('#kuis-progress').style.width = (s.jawaban.filter((_, i) => terjawab(i)).length / s.soal.length * 100) + '%';
    const tombol = $('#kuis-nomor').children[s.indeks];
    if (tombol) tombol.classList.toggle('terjawab', terjawab(s.indeks));
  }

  function cekJawaban(soal, jawaban) {
    if (jawaban === undefined) return false;
    if (soal.tipe === 'isian') return String(soal.kunciTeks).split('|').some((k) => normal(k) === normal(jawaban));
    return jawaban === soal.kunciTeks;
  }

  async function selesaiKuis() {
    const s = state.sesi;
    const kosong = s.soal.filter((_, i) => !terjawab(i)).length;
    if (kosong && !confirm(`Masih ada ${kosong} soal yang belum dijawab. Tetap selesai?`)) return;
    hentikanTimer();
    s.selesai = true;

    const rincian = s.soal.map((soal, i) => ({
      pertanyaan: soal.pertanyaan, jawabanAnak: s.jawaban[i] ?? '', kunci: String(soal.kunciTeks).split('|')[0],
      benar: cekJawaban(soal, s.jawaban[i]),
    }));
    const benar = rincian.filter((r) => r.benar).length;
    const hasil = {
      idSesi: s.idSesi, waktu: new Date().toISOString(), nama: state.profil.nama, kelas: state.profil.kelas,
      kategori: s.kategori, kategoriLabel: KATEGORI[s.kategori].label, kompetisi: s.kompetisi || '', mapel: s.mapel, topik: s.topik, jumlahSoal: s.soal.length, benar, salah: s.soal.length - benar,
      nilai: Math.round(benar / s.soal.length * 100), durasiDetik: Math.round((Date.now() - s.mulai) / 1000), rincian,
    };

    const riwayat = simpan.get(KUNCI.riwayat, []);
    riwayat.push(Object.assign({}, hasil, { rincian: undefined }));
    simpan.set(KUNCI.riwayat, riwayat.slice(-500));

    renderHasil(hasil);

    if (CFG.APPS_SCRIPT_URL) {
      const antrian = simpan.get(KUNCI.antrian, []);
      antrian.push(hasil);
      simpan.set(KUNCI.antrian, antrian);
      $('#hasil-sync').textContent = 'Menyimpan ke Google Sheet…';
      const r = await kirimAntrian();
      $('#hasil-sync').textContent = r.sisa ? '⚠️ Belum tersimpan ke Google Sheet (akan dicoba lagi otomatis).' : '✅ Tersimpan ke Google Sheet.';
    } else {
      $('#hasil-sync').textContent = 'Mode offline: hasil hanya tersimpan di perangkat ini.';
    }
  }

  function renderHasil(h) {
    const n = h.nilai;
    const bintang = n >= 90 ? 3 : n >= CFG.KKTP ? 2 : n >= 50 ? 1 : 0;
    $('#hasil-bintang').textContent = '⭐'.repeat(bintang) + '☆'.repeat(3 - bintang);
    $('#hasil-nilai').textContent = n;
    $('#hasil-pesan').innerHTML = `Benar <b>${h.benar}</b> dari ${h.jumlahSoal} soal · waktu ${formatWaktu(h.durasiDetik)}<br>` +
      (n === 100 ? 'Sempurna! Luar biasa! 🎉' : n >= CFG.KKTP ? 'Hebat, kamu sudah tuntas! 👍' : n >= 50 ? 'Bagus, sedikit lagi! Baca pembahasannya ya. 💪' : 'Tidak apa-apa, ayo baca materinya lalu coba lagi. 📖');
    $('#btn-ulang-salah').hidden = h.salah === 0;

    const s = state.sesi;
    $('#hasil-pembahasan').innerHTML = s.soal.map((soal, i) => {
      const r = h.rincian[i];
      return `<li class="${r.benar ? 'benar' : 'salah'}">
        <div class="q">${esc(soal.pertanyaan)}</div>
        <div class="a">${r.benar ? '✅' : '❌'} Jawabanmu: <b>${esc(r.jawabanAnak || '(kosong)')}</b>${r.benar ? '' : ` · Kunci: <b>${esc(r.kunci)}</b>`}</div>
        ${soal.pembahasan ? `<div class="a">💡 ${esc(soal.pembahasan)}</div>` : ''}
      </li>`;
    }).join('');
    tampil('hasil');
  }

  // ---------- Riwayat ----------
  async function renderRiwayat() {
    const isi = $('#riwayat-isi');
    const lokal = simpan.get(KUNCI.riwayat, []).filter((r) => r.nama === state.profil.nama);
    const tulis = (data, sumber) => {
      $('#riwayat-sumber').textContent = sumber;
      if (!data.length) { isi.innerHTML = '<tr><td colspan="5" class="kosong">Belum ada latihan.</td></tr>'; return; }
      isi.innerHTML = data.slice().reverse().map((r) => `<tr>
        <td>${formatTanggal(r.waktu)}</td><td>${KATEGORI[kodeKategori(r.kategori)].ikon} ${esc(judulMapel(r.kompetisi, r.mapel))}</td><td>${esc(r.topik)}</td>
        <td>${esc(r.benar)}/${esc(r.jumlahSoal)}</td>
        <td><span class="badge ${Number(r.nilai) >= CFG.KKTP ? 'tuntas' : 'belum'}">${esc(r.nilai)}</span></td></tr>`).join('');
    };
    tulis(lokal, 'Data dari perangkat ini.');
    if (!CFG.APPS_SCRIPT_URL) return;
    try {
      const url = CFG.APPS_SCRIPT_URL + '?action=riwayat&token=' + encodeURIComponent(CFG.TOKEN) + '&nama=' + encodeURIComponent(state.profil.nama);
      const data = await (await fetch(url)).json();
      if (data.ok && !$('#v-riwayat').hidden) {
        // Gabungkan data sheet dengan yang belum terkirim.
        const ada = new Set(data.riwayat.map((r) => r.idSesi));
        const belum = lokal.filter((r) => !ada.has(r.idSesi) && simpan.get(KUNCI.antrian, []).some((a) => a.idSesi === r.idSesi));
        const semua = data.riwayat.concat(belum).sort((a, b) => new Date(a.waktu) - new Date(b.waktu));
        tulis(semua, 'Data dari Google Sheet (semua perangkat).');
      }
    } catch (e) { /* tetap tampilkan data lokal */ }
  }

  // ---------- Event ----------
  function pasangEvent() {
    document.addEventListener('click', (e) => {
      const go = e.target.closest('[data-go]');
      if (go) pergi(go.dataset.go);
    });
    $('#form-masuk').onsubmit = (e) => {
      e.preventDefault();
      state.profil = { nama: $('#in-nama').value.trim().replace(/\s+/g, ' '), kelas: $('#in-kelas').value };
      if (!state.profil.nama) return;
      simpan.set(KUNCI.profil, state.profil);
      tampil('beranda');
    };
    $('#btn-keluar').onclick = () => {
      if (!confirm('Ganti nama pengguna?')) return;
      state.profil = null;
      simpan.set(KUNCI.profil, null);
      tampil('masuk');
    };
    $('#btn-mulai-dari-materi').onclick = () => mulaiKuis(state.topikAktif);
    $('#btn-sebelum').onclick = () => { if (state.sesi.indeks > 0) { state.sesi.indeks--; renderSoal(); } };
    $('#btn-berikut').onclick = () => {
      const s = state.sesi;
      if (s.indeks < s.soal.length - 1) { s.indeks++; renderSoal(); } else selesaiKuis();
    };
    $('#btn-ulang').onclick = () => mulaiKuis(state.topikAktif);
    $('#btn-ulang-salah').onclick = () => {
      const s = state.sesi;
      const salah = s.soal.filter((soal, i) => !cekJawaban(soal, s.jawaban[i]));
      mulaiKuis(state.topikAktif, salah);
    };
    window.addEventListener('online', kirimAntrian);
  }

  async function init() {
    document.title = CFG.JUDUL || 'Belajar Mandiri';
    $('#judul-app').textContent = CFG.JUDUL || 'Belajar Mandiri';
    pasangEvent();
    if (state.profil) { $('#in-nama').value = state.profil.nama; $('#in-kelas').value = state.profil.kelas; }
    state.bank = gabungBank(simpan.get(KUNCI.soalSheet, null));
    tampil(state.profil ? 'beranda' : 'masuk');
    await muatBank();
    if (state.profil && !$('#v-beranda').hidden) renderBeranda();
    kirimAntrian();
  }

  init();
})();
