(function () {
  'use strict';

  const CFG = window.LMS_CONFIG || {};
  const HURUF = ['A', 'B', 'C', 'D', 'E'];
  const KUNCI = { profil: 'lms_profil', riwayat: 'lms_riwayat', antrian: 'lms_antrian', soalSheet: 'lms_soal_sheet', tab: 'lms_tab', kompetisi: 'lms_kompetisi', daftarSiswa: 'lms_daftar_siswa', rekapAdmin: 'lms_rekap_admin', jejak: 'lms_jejak_soal' };
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

  // Profil tanpa sesi (dari versi lama tanpa password) wajib masuk ulang.
  const profilTersimpan = simpan.get(KUNCI.profil, null);
  const state = { profil: profilTersimpan && profilTersimpan.sesi ? profilTersimpan : null, admin: null, editSoal: null, mapelTerbuka: new Set(), bank: [], topikAktif: null, sesi: null, timer: null, tab: simpan.get(KUNCI.tab, 'pelajaran'), kompetisi: simpan.get(KUNCI.kompetisi, '') };

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
  // Link gambar: tautan berbagi Google Drive diubah menjadi link tampil.
  function urlGambar(u) {
    const s = String(u || '').trim();
    if (!s || s.startsWith('data:image/')) return s;
    const m = s.match(/drive\.google\.com\/(?:file\/d\/|open\?id=|uc\?(?:export=\w+&)?id=)([\w-]{20,})/);
    return m ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w1200` : (/^https?:\/\//.test(s) ? s : '');
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
        const [mapel, topik, kelas, tipe, pertanyaan, a, b, c, d, jawaban, pembahasan, kategori, kompetisi, gambar] = r;
        if (!mapel || !topik || !pertanyaan) return;
        const t = cariTopik(mapel, topik, kelas, kategori, kompetisi);
        const jenis = normal(tipe) === 'isian' ? 'isian' : 'pg';
        const soal = { tipe: jenis, pertanyaan: String(pertanyaan), jawaban: String(jawaban ?? '').trim(), pembahasan: String(pembahasan || ''), gambar: urlGambar(gambar) };
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
      if (data.ok) terimaSoalSheet(data);
    } catch (e) { /* offline: pakai cache */ }
  }

  function terimaSoalSheet(data) {
    // Teks yang diawali "=" disimpan dengan tanda petik agar tidak dibaca sebagai rumus.
    const bersih = (rows) => (rows || []).map((r) => r.map((x) => (typeof x === 'string' ? x.replace(/^'(?==)/, '') : x)));
    const isi = { soal: bersih(data.soal), materi: bersih(data.materi) };
    simpan.set(KUNCI.soalSheet, isi);
    state.bank = gabungBank(isi);
  }

  function cariTopik(id) {
    for (const m of state.bank) for (const t of m.topik) if (idTopik(m.kategori, m.kompetisi, m.mapel, t.nama) === id) return { mapel: m, topik: t };
    return null;
  }

  const peran = () => (state.profil ? state.profil.peran : null);

  // Topik yang boleh dikerjakan siswa sesuai paket dari admin (null = semua topik).
  function bankTampil() {
    const paket = state.profil && state.profil.peran === 'siswa' ? state.profil.paket : null;
    if (!Array.isArray(paket)) return state.bank;
    const boleh = new Set(paket);
    return state.bank
      .map((m) => Object.assign({}, m, { topik: m.topik.filter((t) => boleh.has(idTopik(m.kategori, m.kompetisi, m.mapel, t.nama))) }))
      .filter((m) => m.topik.length);
  }

  // ---------- Permintaan ke Apps Script ----------
  class GalatSesi extends Error {}
  // Tanpa header Content-Type → text/plain, sehingga tidak butuh preflight CORS.
  async function api(action, data) {
    if (!CFG.APPS_SCRIPT_URL) throw new Error('Aplikasi belum terhubung ke Google Sheet (APPS_SCRIPT_URL di js/config.js).');
    const res = await fetch(CFG.APPS_SCRIPT_URL, { method: 'POST', body: JSON.stringify(Object.assign({ token: CFG.TOKEN, action }, data)) });
    const hasil = await res.json();
    if (!hasil.ok) throw hasil.keluar ? new GalatSesi(hasil.error) : new Error(hasil.error || 'Gagal');
    return hasil;
  }

  function sesiBerakhir() {
    alert('Sesi login sudah berakhir. Silakan masuk lagi.');
    keluar();
  }

  // ---------- Pengiriman ke Google Sheet (dengan antrian offline) ----------
  async function kirimSatu(payload) {
    // Hasil lama di antrian yang belum membawa sesi memakai sesi siswa yang sedang masuk.
    if (!payload.sesi && peran() === 'siswa' && payload.nama === state.profil.nama) payload = Object.assign({}, payload, { sesi: state.profil.sesi });
    const body = JSON.stringify(Object.assign({ token: CFG.TOKEN, action: 'hasil' }, payload));
    try {
      // Tanpa header Content-Type → text/plain, sehingga tidak butuh preflight CORS.
      const res = await fetch(CFG.APPS_SCRIPT_URL, { method: 'POST', body });
      const data = await res.json();
      if (!data.ok) throw data.keluar ? new GalatSesi(data.error) : new Error(data.error || 'Gagal');
      return true;
    } catch (e) {
      if (e instanceof TypeError && payload.sesi) {
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
      } catch (e) {
        if (e instanceof GalatSesi) {
          const milikSaya = peran() === 'siswa' && item.nama === state.profil.nama;
          if (milikSaya) { tampilStatusSync(); sesiBerakhir(); return { terkirim, sisa: antrian.length }; }
          continue; // milik akun lain: dikirim saat akun itu masuk lagi
        }
        break;
      }
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
    document.querySelectorAll('#nav [data-peran]').forEach((b) => (b.hidden = b.dataset.peran !== peran()));
    $('#nama-pengguna').textContent = !state.profil ? '' : peran() === 'admin' ? '🛡️ Admin' : `🎒 ${state.profil.nama} · ${state.profil.sekolah}`;
    if (nama !== 'kuis') hentikanTimer();
    window.scrollTo(0, 0);
    if (nama === 'beranda') renderBeranda();
    if (nama === 'riwayat') renderRiwayat();
    if (nama === 'admin') renderAdmin();
    if (nama === 'masuk') siapkanMasuk();
  }

  function pergi(nama) {
    if (state.sesi && !state.sesi.selesai && $('#v-kuis').hidden === false && nama !== 'kuis') {
      if (!confirm('Latihan belum selesai. Keluar dan batalkan latihan ini?')) return;
      state.sesi = null;
    }
    if (!state.profil) nama = 'masuk';
    else if (peran() === 'admin' && nama !== 'admin') nama = 'admin';
    else if (peran() === 'siswa' && nama === 'admin') nama = 'beranda';
    tampil(nama);
  }

  function berandaAwal() { return peran() === 'admin' ? 'admin' : 'beranda'; }

  // ---------- Beranda ----------
  function statistik() {
    const semua = riwayatLokal();
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

  // Jumlah soal berbeda di topik ini yang pernah dikerjakan siswa (di perangkat ini).
  function dicoba(id, t) {
    const j = jejakTopik(id);
    return t.soal.filter((q) => j[kodeSoal(q)]).length;
  }

  function riwayatLokal() {
    const p = state.profil;
    return simpan.get(KUNCI.riwayat, []).filter((r) => r.nama === p.nama && (!r.sekolah || r.sekolah === p.sekolah));
  }

  // Kompetisi yang dipilih di tab Lomba ('' = semua); diabaikan jika sudah tidak ada.
  function kompetisiAktif() {
    const ada = bankTampil().some((m) => m.kategori === 'lomba' && m.kompetisi === state.kompetisi);
    return ada ? state.kompetisi : '';
  }

  function renderBeranda() {
    const p = state.profil;
    const st = statistik();
    const bank = bankTampil();
    const jam = new Date().getHours();
    const salam = jam < 11 ? 'Selamat pagi' : jam < 15 ? 'Selamat siang' : jam < 18 ? 'Selamat sore' : 'Selamat malam';
    $('#teks-sapaan').textContent = `${salam}, ${p.nama.split(' ')[0]}! 🌟`;
    const motivasi = ['Sedikit demi sedikit, lama-lama jadi bukit.', 'Belajar hari ini, hebat esok hari!',
      'Salah itu wajar, yang penting terus mencoba.', 'Ayo kalahkan nilai terbaikmu sendiri!'];
    $('#teks-motivasi').textContent = motivasi[new Date().getDate() % motivasi.length];

    const tabs = $('#tabs');
    tabs.innerHTML = '';
    Object.entries(KATEGORI).forEach(([kode, k]) => {
      const jumlah = bank.filter((m) => m.kategori === kode).reduce((n, m) => n + m.topik.length, 0);
      const b = el('button', { type: 'button', role: 'tab', class: 'tab' + (state.tab === kode ? ' aktif' : ''), 'aria-selected': String(state.tab === kode) },
        `${k.ikon} ${k.label} <span class="jumlah">${jumlah}</span>`);
      b.onclick = () => { state.tab = kode; simpan.set(KUNCI.tab, kode); renderBeranda(); };
      tabs.appendChild(b);
    });
    $('#teks-kategori').textContent = KATEGORI[state.tab].ajakan;

    // Filter kompetisi (hanya di tab Lomba).
    const saring = $('#filter-kompetisi');
    const daftarKompetisi = [...new Set(bank.filter((m) => m.kategori === 'lomba').map((m) => m.kompetisi || 'Lainnya'))];
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
    const daftar = bank.filter((m) => m.kategori === state.tab &&
      (state.tab !== 'lomba' || !kompetisiAktif() || m.kompetisi === kompetisiAktif()));
    if (!daftar.length) {
      wadah.innerHTML = Array.isArray(p.paket)
        ? `<div class="card kosong">Belum ada topik ${esc(KATEGORI[state.tab].label.toLowerCase())} di paket soalmu. Minta admin menambahkannya.</div>`
        : `<div class="card kosong">Belum ada materi ${esc(KATEGORI[state.tab].label.toLowerCase())}. Tambahkan soal di sheet "BankSoal" (kolom Kategori: ${state.tab}).</div>`;
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
      // Topik (paket soal) disembunyikan sampai mata pelajarannya diklik.
      const idMapel = [m.kategori, m.kompetisi, m.mapel].join('::');
      const terbuka = state.mapelTerbuka.has(idMapel);
      const tuntasMapel = m.topik.filter((t) => (st.terbaik[idTopik(m.kategori, m.kompetisi, m.mapel, t.nama)] ?? -1) >= CFG.KKTP).length;
      const sec = el('div', { class: 'mapel' + (terbuka ? ' terbuka' : '') });
      const kepala = el('button', { type: 'button', class: 'mapel-kepala', 'aria-expanded': String(terbuka) },
        `<span class="mapel-ikon">${esc(m.ikon || '📘')}</span>
         <span class="mapel-judul"><b>${esc(m.mapel)}</b><small>${m.topik.length} topik · ${tuntasMapel} tuntas</small></span>
         <span class="panah" aria-hidden="true">▾</span>`);
      sec.appendChild(kepala);
      const grid = el('div', { class: 'topik-grid' });
      grid.hidden = !terbuka;
      kepala.onclick = () => {
        const buka = grid.hidden;
        grid.hidden = !buka;
        sec.classList.toggle('terbuka', buka);
        kepala.setAttribute('aria-expanded', String(buka));
        if (buka) state.mapelTerbuka.add(idMapel); else state.mapelTerbuka.delete(idMapel);
      };
      const urut = m.topik.slice().sort((a, b) => (String(a.kelas) === p.kelas ? -1 : 0) - (String(b.kelas) === p.kelas ? -1 : 0));
      urut.forEach((t) => {
        const id = idTopik(m.kategori, m.kompetisi, m.mapel, t.nama);
        const nilai = st.terbaik[id];
        const badge = nilai === undefined ? '<span class="badge baru">Belum dicoba</span>'
          : nilai >= CFG.KKTP ? `<span class="badge tuntas">Tuntas · ${nilai}</span>`
            : `<span class="badge belum">Terbaik ${nilai}</span>`;
        const kartu = el('div', { class: 'topik' }, `
          <h3>${esc(t.nama)}</h3>
          <div class="meta">${t.kelas ? (/^\d/.test(t.kelas) ? 'Kelas ' : '') + esc(t.kelas) + ' · ' : ''}${t.soal.length} soal${t.soal.length > jumlahPerSesi(t) ? ' · ' + jumlahPerSesi(t) + ' soal per latihan' : ''}</div>
          ${t.soal.length > jumlahPerSesi(t) ? `<div class="meta">Sudah dicoba ${dicoba(id, t)} dari ${t.soal.length} soal</div>` : ''}
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
          const n = jumlahPerSesi(t);
          const b = el('button', { class: 'btn sm primary', type: 'button' }, n < t.soal.length ? `✏️ Latihan (${n})` : '✏️ Latihan');
          b.onclick = () => mulaiKuis(id);
          tombol.appendChild(b);
          if (n < t.soal.length) {
            const semua = el('button', { class: 'btn sm', type: 'button', title: 'Kerjakan semua soal di topik ini' }, `📋 Semua (${t.soal.length})`);
            semua.onclick = () => mulaiKuis(id, acak(t.soal));
            tombol.appendChild(semua);
          }
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

  // ---------- Jejak soal per siswa: soal yang belum pernah keluar diutamakan ----------
  function kodeSoal(q) {
    let h = 0;
    const t = q.pertanyaan + '|' + (q.pilihan || []).join('|');
    for (let i = 0; i < t.length; i++) h = (h * 31 + t.charCodeAt(i)) | 0;
    return (h >>> 0).toString(36);
  }
  function jejakTopik(id) {
    const semua = simpan.get(KUNCI.jejak, {});
    const p = state.profil || {};
    return (semua[p.nama + '|' + p.sekolah] || {})[id] || {};
  }
  function catatJejak(id, soal, benar) {
    const semua = simpan.get(KUNCI.jejak, {});
    const p = state.profil || {};
    const k = p.nama + '|' + p.sekolah;
    semua[k] = semua[k] || {};
    const j = semua[k][id] = semua[k][id] || {};
    soal.forEach((q, i) => { j[kodeSoal(q)] = { b: benar[i] ? 1 : 0, t: Date.now() }; });
    simpan.set(KUNCI.jejak, semua);
  }
  const jumlahPerSesi = (t) => Math.min(t.soalPerSesi || CFG.SOAL_PER_SESI || 10, t.soal.length);

  // Urutan pilihan soal: belum pernah keluar → pernah salah → sudah benar (yang paling lama dulu).
  function pilihSoal(id, daftar, n) {
    const j = jejakTopik(id);
    const grup = [[], [], []];
    acak(daftar).forEach((q) => { const r = j[kodeSoal(q)]; grup[!r ? 0 : r.b ? 2 : 1].push(q); });
    grup[2].sort((a, b) => j[kodeSoal(a)].t - j[kodeSoal(b)].t);
    return acak(grup.flat().slice(0, n));
  }

  function mulaiKuis(id, daftarSoal) {
    const x = cariTopik(id);
    if (!x) return;
    state.topikAktif = id;
    const sumber = daftarSoal || pilihSoal(id, x.topik.soal, jumlahPerSesi(x.topik));
    // Muat semua gambar sesi ini sejak awal agar tidak menunggu saat pindah soal.
    sumber.forEach((q) => { const u = urlGambar(q.gambar); if (u) new Image().src = u; });
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
    const gambar = urlGambar(soal.gambar);
    $('#kuis-gambar-link').hidden = !gambar;
    if (gambar) { $('#kuis-gambar').src = gambar; $('#kuis-gambar-link').href = gambar; } else $('#kuis-gambar').removeAttribute('src');
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
      sekolah: state.profil.sekolah, sesi: state.profil.sesi,
      kategori: s.kategori, kategoriLabel: KATEGORI[s.kategori].label, kompetisi: s.kompetisi || '', mapel: s.mapel, topik: s.topik, jumlahSoal: s.soal.length, benar, salah: s.soal.length - benar,
      nilai: Math.round(benar / s.soal.length * 100), durasiDetik: Math.round((Date.now() - s.mulai) / 1000), rincian,
    };

    catatJejak(state.topikAktif, s.soal, rincian.map((r) => r.benar));
    const riwayat = simpan.get(KUNCI.riwayat, []);
    riwayat.push(Object.assign({}, hasil, { rincian: undefined, sesi: undefined }));
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
        ${urlGambar(soal.gambar) ? `<img class="gambar-bahas" src="${esc(urlGambar(soal.gambar))}" alt="Gambar soal" loading="lazy">` : ''}
        <div class="a">${r.benar ? '✅' : '❌'} Jawabanmu: <b>${esc(r.jawabanAnak || '(kosong)')}</b>${r.benar ? '' : ` · Kunci: <b>${esc(r.kunci)}</b>`}</div>
        ${soal.pembahasan ? `<div class="a">💡 ${esc(soal.pembahasan)}</div>` : ''}
      </li>`;
    }).join('');
    tampil('hasil');
  }

  // ---------- Riwayat ----------
  async function renderRiwayat() {
    const isi = $('#riwayat-isi');
    const lokal = riwayatLokal();
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
      const data = await api('riwayat', { sesi: state.profil.sesi });
      if (!$('#v-riwayat').hidden) {
        // Gabungkan data sheet dengan yang belum terkirim.
        const ada = new Set(data.riwayat.map((r) => r.idSesi));
        const belum = lokal.filter((r) => !ada.has(r.idSesi) && simpan.get(KUNCI.antrian, []).some((a) => a.idSesi === r.idSesi));
        const semua = data.riwayat.concat(belum).sort((a, b) => new Date(a.waktu) - new Date(b.waktu));
        tulis(semua, 'Data dari Google Sheet (semua perangkat).');
      }
    } catch (e) { if (e instanceof GalatSesi) sesiBerakhir(); /* selain itu tetap tampilkan data lokal */ }
  }

  // ---------- Masuk (siswa & admin) ----------
  function isiPilihan(select, nilai, kosong, dipilih) {
    select.innerHTML = `<option value="">${esc(kosong)}</option>` +
      nilai.map((v) => `<option${v === dipilih ? ' selected' : ''}>${esc(v)}</option>`).join('');
  }
  const urutTeks = (arr) => [...new Set(arr)].sort((a, b) => a.localeCompare(b, 'id'));

  // Sekolah yang tersedia mengikuti nama siswa yang dipilih.
  function perbaruiPilihanSekolah() {
    const daftar = simpan.get(KUNCI.daftarSiswa, []);
    const nama = $('#in-nama').value;
    const sekolah = urutTeks(daftar.filter((s) => !nama || s.nama === nama).map((s) => s.sekolah));
    const lama = $('#in-sekolah').value;
    isiPilihan($('#in-sekolah'), sekolah, '— pilih sekolah —', sekolah.length === 1 ? sekolah[0] : lama);
  }

  function tulisDaftarSiswa() {
    const daftar = simpan.get(KUNCI.daftarSiswa, []);
    const lama = $('#in-nama').value;
    isiPilihan($('#in-nama'), urutTeks(daftar.map((s) => s.nama)), daftar.length ? '— pilih nama —' : '— daftar siswa belum tersedia —', lama);
    perbaruiPilihanSekolah();
  }

  async function siapkanMasuk() {
    tulisDaftarSiswa();
    if (!CFG.APPS_SCRIPT_URL) {
      $('#galat-masuk').textContent = 'Aplikasi belum terhubung ke Google Sheet (APPS_SCRIPT_URL di js/config.js).';
      return;
    }
    try {
      const url = CFG.APPS_SCRIPT_URL + '?action=daftar&token=' + encodeURIComponent(CFG.TOKEN);
      const data = await (await fetch(url)).json();
      if (!data.ok) {
        throw new Error(data.error === 'Token salah'
          ? 'TOKEN di Apps Script (Code.gs) tidak sama dengan TOKEN di js/config.js.'
          : data.error || 'Daftar siswa gagal dimuat.');
      }
      // Backend lama tidak mengenal action=daftar dan tidak mengirim daftar siswa.
      if (!Array.isArray(data.siswa)) {
        throw new Error('Apps Script yang aktif masih versi lama. Buka Apps Script → Terapkan (Deploy) → Kelola deployment → ✏️ Edit → Versi: "Versi baru" → Terapkan.');
      }
      simpan.set(KUNCI.daftarSiswa, data.siswa);
      tulisDaftarSiswa();
      $('#galat-masuk').textContent = data.siswa.length ? '' : 'Sheet "Siswa" belum berisi siswa aktif.';
    } catch (e) {
      $('#galat-masuk').textContent = e instanceof TypeError || e instanceof SyntaxError
        ? 'Daftar siswa gagal dimuat. Periksa koneksi internet.' : e.message;
    }
  }

  function pilihTabMasuk(admin) {
    $('#tab-siswa').classList.toggle('aktif', !admin);
    $('#tab-admin').classList.toggle('aktif', admin);
    $('#form-masuk').hidden = admin;
    $('#form-admin').hidden = !admin;
  }

  async function prosesMasuk(form, galat, kerja) {
    const tombol = form.querySelector('button[type=submit]');
    const teks = tombol.textContent;
    tombol.disabled = true;
    tombol.textContent = 'Memeriksa…';
    galat.textContent = '';
    try {
      state.profil = await kerja();
      simpan.set(KUNCI.profil, state.profil);
      form.reset();
      tampil(berandaAwal());
    } catch (e) {
      galat.textContent = e instanceof TypeError ? 'Tidak dapat terhubung. Periksa koneksi internet.' : e.message;
    } finally {
      tombol.disabled = false;
      tombol.textContent = teks;
    }
  }

  function keluar() {
    state.profil = null;
    state.admin = null;
    state.mapelTerbuka.clear();
    simpan.set(KUNCI.rekapAdmin, null);
    simpan.set(KUNCI.profil, null);
    tampil('masuk');
  }

  // Perbarui kelas & paket soal siswa dari sheet (paket bisa diubah admin kapan saja).
  async function segarkanProfil() {
    if (peran() !== 'siswa' || !CFG.APPS_SCRIPT_URL) return;
    try {
      const d = await api('profil', { sesi: state.profil.sesi });
      Object.assign(state.profil, { kelas: d.kelas, paket: d.paket });
      simpan.set(KUNCI.profil, state.profil);
    } catch (e) { if (e instanceof GalatSesi) sesiBerakhir(); }
  }

  // ---------- Admin: rekap hasil ----------
  function tabAdmin(nama) {
    ['rekap', 'paket', 'soal'].forEach((n) => {
      $('#tab-' + n).classList.toggle('aktif', n === nama);
      $('#panel-' + n).hidden = n !== nama;
    });
    if (nama === 'paket') renderPaket();
    if (nama === 'soal') renderPanelSoal();
  }

  async function renderAdmin() {
    // Tampilkan data terakhir dulu agar halaman langsung terisi, lalu perbarui dari Google Sheet.
    const cache = simpan.get(KUNCI.rekapAdmin, null);
    if (cache && !state.admin) terimaDataAdmin(cache);
    const info = $('#admin-info');
    if (state.admin) info.insertAdjacentHTML('beforeend', ' <span class="muted">· memperbarui…</span>');
    else info.textContent = 'Memuat data dari Google Sheet…';
    try {
      const d = await api('rekap', { sesi: state.profil.sesi });
      simpan.set(KUNCI.rekapAdmin, d);
      terimaDataAdmin(d);
    } catch (e) {
      if (e instanceof GalatSesi) { sesiBerakhir(); return; }
      $('#admin-info').textContent = '⚠️ Gagal memuat data: ' + (e instanceof TypeError ? 'periksa koneksi internet.' : e.message);
    }
  }

  function terimaDataAdmin(d) {
    state.admin = Object.assign(state.admin || {}, d);
    const a = state.admin;
    $('#admin-info').innerHTML = `${a.siswa.length} siswa terdaftar · ${a.hasil.length} latihan tercatat` +
      (a.url ? ` · <a href="${esc(a.url)}" target="_blank" rel="noopener">Buka Google Sheet ↗</a>` : '');
    const sekolah = urutTeks(a.siswa.map((s) => s.sekolah).concat(a.hasil.map((h) => h.sekolah)).filter(Boolean));
    isiPilihan($('#f-sekolah'), sekolah, 'Semua sekolah', $('#f-sekolah').value);
    isiFilterSiswa();
    renderRekap();
    if (!$('#panel-paket').hidden) renderPaket();
  }

  const kunciSiswa = (nama, sekolah) => normal(nama) + '|' + normal(sekolah);

  function isiFilterSiswa() {
    const a = state.admin;
    const sek = $('#f-sekolah').value;
    const nama = urutTeks(a.siswa.filter((s) => !sek || s.sekolah === sek).map((s) => s.nama));
    isiPilihan($('#f-siswa'), nama, 'Semua siswa', $('#f-siswa').value);
  }

  function renderRekap() {
    const a = state.admin;
    if (!a) return;
    const sek = $('#f-sekolah').value, nama = $('#f-siswa').value, kat = $('#f-kategori').value;
    const data = a.hasil.filter((h) => (!sek || !h.sekolah || h.sekolah === sek) && (!sek || h.sekolah || a.siswa.some((s) => s.sekolah === sek && normal(s.nama) === normal(h.nama))) &&
      (!nama || normal(h.nama) === normal(nama)) && (!kat || kodeKategori(h.kategori) === kat));
    const nilai = (h) => Number(h.nilai) || 0;
    const rata = (arr) => (arr.length ? Math.round(arr.reduce((t, h) => t + nilai(h), 0) / arr.length) : 0);
    const tuntasDari = (arr) => {
      const terbaik = {};
      arr.forEach((h) => { const id = h.mapel + '::' + h.topik; terbaik[id] = Math.max(terbaik[id] || 0, nilai(h)); });
      return Object.values(terbaik).filter((n) => n >= CFG.KKTP).length;
    };
    const aktif = new Set(data.map((h) => normal(h.nama)));
    $('#rekap-stats').innerHTML = [
      [data.length, 'Latihan'], [rata(data), 'Rata-rata nilai'], [tuntasDari(data), 'Topik tuntas'], [aktif.size, 'Siswa aktif'],
    ].map(([b, t]) => `<div class="stat"><b>${b}</b><span>${t}</span></div>`).join('');

    // Per siswa: termasuk siswa terdaftar yang belum pernah latihan.
    const grup = new Map();
    a.siswa.filter((s) => (!sek || s.sekolah === sek) && (!nama || s.nama === nama))
      .forEach((s) => grup.set(kunciSiswa(s.nama, s.sekolah), { nama: s.nama, sekolah: s.sekolah, kelas: s.kelas, hasil: [] }));
    data.forEach((h) => {
      let k = kunciSiswa(h.nama, h.sekolah);
      if (!h.sekolah) { const s = a.siswa.find((x) => normal(x.nama) === normal(h.nama)); if (s) k = kunciSiswa(s.nama, s.sekolah); }
      if (!grup.has(k)) grup.set(k, { nama: h.nama, sekolah: h.sekolah || '-', kelas: h.kelas, hasil: [] });
      grup.get(k).hasil.push(h);
    });
    const barisSiswa = [...grup.values()].sort((x, y) => x.nama.localeCompare(y.nama, 'id'));
    $('#rekap-siswa').innerHTML = barisSiswa.length ? barisSiswa.map((g) => {
      const akhir = g.hasil.length ? g.hasil.reduce((m, h) => (new Date(h.waktu) > new Date(m.waktu) ? h : m)) : null;
      return `<tr class="klik" data-nama="${esc(g.nama)}" data-sekolah="${esc(g.sekolah)}"><td><b>${esc(g.nama)}</b></td><td>${esc(g.sekolah)}</td><td>${esc(g.kelas)}</td>
        <td>${g.hasil.length}</td><td>${g.hasil.length ? `<span class="badge ${rata(g.hasil) >= CFG.KKTP ? 'tuntas' : 'belum'}">${rata(g.hasil)}</span>` : '-'}</td>
        <td>${tuntasDari(g.hasil)}</td><td>${akhir ? formatTanggal(akhir.waktu) : '<span class="muted">belum latihan</span>'}</td></tr>`;
    }).join('') : '<tr><td colspan="7" class="kosong">Belum ada siswa. Isi sheet "Siswa".</td></tr>';
    document.querySelectorAll('#rekap-siswa tr.klik').forEach((tr) => {
      tr.onclick = () => {
        if (a.siswa.some((s) => s.sekolah === tr.dataset.sekolah)) $('#f-sekolah').value = tr.dataset.sekolah;
        isiFilterSiswa();
        $('#f-siswa').value = tr.dataset.nama;
        renderRekap();
      };
    });

    // Per topik.
    const topik = new Map();
    data.forEach((h) => {
      const k = judulMapel(h.kompetisi, h.mapel) + '::' + h.topik;
      if (!topik.has(k)) topik.set(k, { mapel: judulMapel(h.kompetisi, h.mapel), topik: h.topik, hasil: [] });
      topik.get(k).hasil.push(h);
    });
    const barisTopik = [...topik.values()].sort((x, y) => rata(x.hasil) - rata(y.hasil));
    $('#rekap-topik').innerHTML = barisTopik.length ? barisTopik.map((t) => `<tr><td>${esc(t.mapel)}</td><td>${esc(t.topik)}</td><td>${t.hasil.length}</td>
      <td><span class="badge ${rata(t.hasil) >= CFG.KKTP ? 'tuntas' : 'belum'}">${rata(t.hasil)}</span></td><td>${Math.max(...t.hasil.map(nilai))}</td></tr>`).join('')
      : '<tr><td colspan="5" class="kosong">Belum ada latihan.</td></tr>';

    const terbaru = data.slice().sort((x, y) => new Date(y.waktu) - new Date(x.waktu)).slice(0, 100);
    $('#rekap-detail').innerHTML = terbaru.length ? terbaru.map((h) => `<tr><td>${formatTanggal(h.waktu)}</td><td>${esc(h.nama)}</td>
      <td>${KATEGORI[kodeKategori(h.kategori)].ikon} ${esc(judulMapel(h.kompetisi, h.mapel))}</td><td>${esc(h.topik)}</td><td>${esc(h.benar)}/${esc(h.jumlahSoal)}</td>
      <td><span class="badge ${nilai(h) >= CFG.KKTP ? 'tuntas' : 'belum'}">${esc(h.nilai)}</span></td><td>${esc(h.durasiMenit)} mnt</td></tr>`).join('')
      : '<tr><td colspan="7" class="kosong">Belum ada latihan.</td></tr>';
  }

  // ---------- Admin: tambah / ubah soal ----------
  const kunciTopikSheet = (kategori, kompetisi, mapel, topik) =>
    [String(kompetisi || '').trim() ? 'lomba' : kodeKategori(kategori), normal(kompetisi), normal(mapel), normal(topik)].join('|');

  // Topik yang soal/materinya berasal dari sheet BankSoal & Materi.
  function topikSheet() {
    const data = simpan.get(KUNCI.soalSheet, null) || { soal: [], materi: [] };
    const grup = new Map();
    const ambil = (r, kategori, kompetisi) => {
      const k = kunciTopikSheet(kategori, kompetisi, r[0], r[1]);
      if (!grup.has(k)) grup.set(k, { kategori: String(kompetisi || '').trim() ? 'lomba' : kodeKategori(kategori), kompetisi: String(kompetisi || '').trim(), mapel: String(r[0]), topik: String(r[1]), kelas: String(r[2] || ''), soal: [], materi: '' });
      return grup.get(k);
    };
    (data.soal || []).forEach((r) => { if (r[0] && r[1] && r[4]) ambil(r, r[11], r[12]).soal.push(r); });
    (data.materi || []).forEach((r) => { if (r[0] && r[1]) ambil(r, r[4], r[5]).materi = String(r[3] || ''); });
    return [...grup.values()];
  }

  function nilaiFormTopik() {
    const kategori = $('#s-kategori').value;
    return { kategori, kompetisi: kategori === 'lomba' ? $('#s-kompetisi').value.trim() : '', mapel: $('#s-mapel').value.trim(), topik: $('#s-topik').value.trim() };
  }

  // Cari mapel/topik yang sudah ada di aplikasi (penulisan nama disamakan).
  function topikAda(t) {
    const m = state.bank.find((x) => x.kategori === (t.kompetisi ? 'lomba' : t.kategori) && normal(x.kompetisi) === normal(t.kompetisi) && normal(x.mapel) === normal(t.mapel));
    return { mapel: m, topik: m && m.topik.find((x) => normal(x.nama) === normal(t.topik)) };
  }

  function isiDatalistSoal() {
    const t = nilaiFormTopik();
    $('#s-kompetisi-wadah').hidden = t.kategori !== 'lomba';
    const opsi = (arr) => urutTeks(arr.filter(Boolean)).map((x) => `<option value="${esc(x)}"></option>`).join('');
    $('#dl-kompetisi').innerHTML = opsi(state.bank.filter((m) => m.kategori === 'lomba').map((m) => m.kompetisi));
    $('#dl-mapel').innerHTML = opsi(state.bank.filter((m) => m.kategori === t.kategori && (t.kategori !== 'lomba' || !t.kompetisi || normal(m.kompetisi) === normal(t.kompetisi))).map((m) => m.mapel));
    const ada = topikAda(t);
    $('#dl-topik').innerHTML = opsi(ada.mapel ? ada.mapel.topik.map((x) => x.nama) : []);
    const info = $('#s-info-topik');
    if (state.editSoal) {
      const asal = state.editSoal;
      const kunciAsal = kunciTopikSheet(asal.kategori, asal.kompetisi, asal.mapel, asal.topik);
      const berubah = t.mapel && t.topik && kunciTopikSheet(t.kategori, t.kompetisi, t.mapel, t.topik) !== kunciAsal;
      info.textContent = !berubah
        ? '✏️ Mengubah topik ini: semua soal & materinya di sheet akan diganti dengan isi formulir. Nama topik/mapel juga bisa diperbaiki di atas.'
        : `✏️ Nama akan diubah dari "${judulMapel(asal.kompetisi, asal.mapel)} · ${asal.topik}" menjadi "${judulMapel(t.kompetisi, t.mapel)} · ${t.topik}". Paket soal dan rekap hasil ikut disesuaikan.` +
          (ada.topik ? ` ⚠️ Topik "${t.topik}" sudah ada — soal akan digabung ke topik tersebut.` : '');
    }
    else if (!t.mapel || !t.topik) info.textContent = '';
    else if (ada.topik) {
      info.textContent = `ℹ️ Topik ini sudah ada (${ada.topik.soal.length} soal). Soal baru akan ditambahkan ke topik tersebut.`;
      if (!$('#s-kelas').value && ada.topik.kelas) $('#s-kelas').value = ada.topik.kelas;
    } else info.textContent = ada.mapel ? '🆕 Topik baru di mata pelajaran ini.' : '🆕 Mata pelajaran dan topik baru.';
    $('#s-ke-paket').parentElement.hidden = !!state.editSoal || !!ada.topik;
  }

  function nomoriSoal() {
    document.querySelectorAll('#s-daftar-soal .kartu-soal').forEach((k, i) => (k.querySelector('.no-soal').textContent = `Soal ${i + 1} · ${k.dataset.tipe === 'pg' ? 'Pilihan ganda' : 'Isian'}`));
  }

  function tambahKartuSoal(tipe, isi = {}) {
    const k = el('div', { class: 'kartu-soal' });
    k.dataset.tipe = tipe;
    const nama = 'kunci-' + Math.random().toString(36).slice(2);
    k.innerHTML = `<div class="kepala-soal"><b class="no-soal"></b><button type="button" class="btn sm bahaya hapus-soal">Hapus</button></div>
      <label>Pertanyaan <textarea class="q" rows="2" placeholder="Untuk teks bacaan: tulis bacaan, baris kosong, lalu pertanyaannya."></textarea></label>
      ${tipe === 'pg'
        ? `<div class="small muted">Isi pilihan jawaban, lalu klik bulatan pada jawaban yang benar.</div>` +
          ['A', 'B', 'C', 'D'].map((h) => `<div class="pilihan-edit"><input type="radio" name="${nama}" value="${h}" aria-label="Kunci ${h}"><span class="huruf">${h}</span><input type="text" class="p" data-h="${h}" placeholder="Pilihan ${h}${h > 'B' ? ' (boleh kosong)' : ''}"></div>`).join('')
        : `<label>Kunci jawaban <input type="text" class="kunci-isian" placeholder="Jika ada beberapa jawaban benar, pisahkan dengan | (mis. 63|enam puluh tiga)"></label>`}
      <div class="gambar-edit">
        <img class="pratinjau" alt="Gambar soal" hidden>
        <div class="aksi-gambar">
          <label class="btn sm pilih-gambar">🖼️ <span>Tambah gambar</span><input type="file" accept="image/png,image/jpeg,image/gif,image/webp" hidden></label>
          <button type="button" class="btn sm bahaya hapus-gambar" hidden>Hapus gambar</button>
          <span class="small muted">atau tempel tangkapan layar (Ctrl+V) di kotak pertanyaan</span>
        </div>
      </div>
      <label>Pembahasan (opsional) <textarea class="bahas" rows="2"></textarea></label>`;
    k.querySelector('.q').value = isi.pertanyaan || '';
    k.querySelector('.bahas').value = isi.pembahasan || '';
    if (tipe === 'pg') {
      (isi.pilihan || []).forEach((p, i) => { const inp = k.querySelectorAll('.p')[i]; if (inp) inp.value = p; });
      const r = k.querySelector(`input[type=radio][value="${String(isi.jawaban || '').toUpperCase()}"]`);
      if (r) r.checked = true;
    } else k.querySelector('.kunci-isian').value = isi.jawaban || '';
    k.querySelector('.hapus-soal').onclick = () => { k.remove(); nomoriSoal(); };
    const pasang = (src) => {
      k.dataset.gambar = src || '';
      const img = k.querySelector('.pratinjau');
      img.hidden = !src;
      if (src) img.src = urlGambar(src); else img.removeAttribute('src');
      k.querySelector('.hapus-gambar').hidden = !src;
      k.querySelector('.pilih-gambar span').textContent = src ? 'Ganti gambar' : 'Tambah gambar';
    };
    const dariFile = async (file) => {
      try { pasang(await siapkanGambar(file)); } catch (e) { alert(e.message); }
    };
    k.querySelector('.pilih-gambar input').onchange = (e) => { if (e.target.files[0]) dariFile(e.target.files[0]); e.target.value = ''; };
    k.querySelector('.hapus-gambar').onclick = () => pasang('');
    k.addEventListener('paste', (e) => {
      const item = [...(e.clipboardData?.items || [])].find((x) => x.type.startsWith('image/'));
      if (item) { e.preventDefault(); dariFile(item.getAsFile()); }
    });
    pasang(isi.gambar || '');
    $('#s-daftar-soal').appendChild(k);
    nomoriSoal();
    return k;
  }

  // Baca & periksa formulir. Pilihan kosong dirapatkan dan huruf kuncinya disesuaikan.
  function kumpulkanSoal() {
    return [...document.querySelectorAll('#s-daftar-soal .kartu-soal')].map((k, i) => {
      const pertanyaan = k.querySelector('.q').value.trim();
      const pembahasan = k.querySelector('.bahas').value.trim();
      if (!pertanyaan && !k.dataset.gambar) throw new Error(`Soal ${i + 1}: pertanyaan masih kosong.`);
      if (k.dataset.tipe === 'isian') {
        const jawaban = k.querySelector('.kunci-isian').value.trim();
        if (!jawaban) throw new Error(`Soal ${i + 1}: kunci jawaban masih kosong.`);
        return { tipe: 'isian', pertanyaan, jawaban, pembahasan, gambar: k.dataset.gambar || '' };
      }
      const terisi = [...k.querySelectorAll('.p')].map((inp) => ({ h: inp.dataset.h, v: inp.value.trim() })).filter((x) => x.v);
      if (terisi.length < 2) throw new Error(`Soal ${i + 1}: isi minimal 2 pilihan jawaban.`);
      if (new Set(terisi.map((x) => normal(x.v))).size !== terisi.length) throw new Error(`Soal ${i + 1}: ada pilihan jawaban yang sama.`);
      const kunci = k.querySelector('input[type=radio]:checked');
      const idx = kunci ? terisi.findIndex((x) => x.h === kunci.value) : -1;
      if (idx === -1) throw new Error(`Soal ${i + 1}: pilih kunci jawaban (klik bulatan di samping pilihan yang benar, dan pilihan itu tidak boleh kosong).`);
      return { tipe: 'pg', pertanyaan, pilihan: terisi.map((x) => x.v), jawaban: HURUF[idx], pembahasan, gambar: k.dataset.gambar || '' };
    });
  }

  // Kartu soal yang masih kosong (belum diisi apa pun).
  const kartuKosong = (k) => !k.dataset.gambar && ![...k.querySelectorAll('textarea, input[type=text]')].some((x) => x.value.trim());

  // Gambar dari file/clipboard → data URL. Gambar besar diperkecil (maks. 1200 px, JPEG) agar cepat dimuat.
  function siapkanGambar(file) {
    return new Promise((ok, gagal) => {
      if (!file || !/^image\/(png|jpeg|gif|webp)$/.test(file.type)) { gagal(new Error('Gunakan gambar PNG, JPG, GIF, atau WebP.')); return; }
      const baca = new FileReader();
      baca.onerror = () => gagal(new Error('Gambar tidak dapat dibaca.'));
      baca.onload = () => kecilkanGambar(baca.result, file.size).then(ok, gagal);
      baca.readAsDataURL(file);
    });
  }
  function kecilkanGambar(dataUrl, ukuran) {
    return new Promise((ok) => {
      if ((ukuran ?? dataUrl.length * 0.75) <= 300 * 1024 || dataUrl.startsWith('data:image/gif')) { ok(dataUrl); return; }
      const img = new Image();
      img.onload = () => {
        const skala = Math.min(1, 1200 / Math.max(img.width, img.height));
        const c = document.createElement('canvas');
        c.width = Math.round(img.width * skala);
        c.height = Math.round(img.height * skala);
        const g = c.getContext('2d');
        g.fillStyle = '#fff';
        g.fillRect(0, 0, c.width, c.height);
        g.drawImage(img, 0, 0, c.width, c.height);
        ok(c.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = () => ok(dataUrl);
      img.src = dataUrl;
    });
  }

  async function imporSoal() {
    const pesan = $('#impor-pesan');
    const file = $('#impor-file').files[0];
    let teks = $('#impor-teks').value;
    try {
      if (file) {
        pesan.textContent = `Membaca ${file.name}…`;
        const isi = await window.IMPOR_SOAL.bacaFile(file);
        teks = isi.teks;
        state.gambarImpor = await Promise.all(isi.gambar.map((g) => (/^data:image\/(png|jpeg|webp);/.test(g) ? kecilkanGambar(g) : g)));
        $('#impor-teks').value = teks;
        $('#impor-file').value = '';
      }
      if (!teks.trim()) throw new Error('Pilih file atau tempel teks soal terlebih dahulu.');
      const hasil = window.IMPOR_SOAL.parse(teks, state.gambarImpor || []);
      if (!hasil.length) throw new Error('Tidak ada soal yang terbaca. Pastikan setiap soal diawali nomor, mis. "1." atau "1)".');
      document.querySelectorAll('#s-daftar-soal .kartu-soal').forEach((k) => { if (kartuKosong(k)) k.remove(); });
      let perluCek = 0;
      hasil.forEach((q) => {
        const k = tambahKartuSoal(q.tipe, q);
        if (q.peringatan.length) {
          perluCek++;
          k.classList.add('perlu-cek');
          k.querySelector('.kepala-soal').insertAdjacentHTML('afterend', `<div class="catatan-cek">⚠️ ${q.peringatan.map(esc).join(' ')}</div>`);
        }
      });
      const pg = hasil.filter((q) => q.tipe === 'pg').length;
      pesan.textContent = `✅ ${hasil.length} soal terbaca (${pg} pilihan ganda, ${hasil.length - pg} isian) dan ditambahkan ke formulir di bawah.` +
        (perluCek ? ` ${perluCek} soal ditandai kuning perlu dicek.` : '') + ' Periksa dulu, lalu klik Simpan Soal.';
      $('#s-daftar-soal').scrollIntoView({ behavior: 'smooth' });
    } catch (e) {
      pesan.textContent = '⚠️ ' + (e.message || 'File tidak dapat dibaca.');
    }
  }

  function kosongkanFormSoal() {
    state.editSoal = null;
    $('#form-soal').reset();
    ['#s-kategori', '#s-kompetisi', '#s-mapel', '#s-topik'].forEach((s) => ($(s).disabled = false));
    $('#s-daftar-soal').innerHTML = '';
    $('#soal-judul-form').textContent = 'Tambah Soal';
    tambahKartuSoal('pg');
    isiDatalistSoal();
  }

  function renderPanelSoal() {
    if (!$('#s-daftar-soal').children.length && !state.editSoal) tambahKartuSoal('pg');
    isiDatalistSoal();
    const daftar = topikSheet().sort((a, b) => (a.mapel + a.topik).localeCompare(b.mapel + b.topik, 'id'));
    const tb = $('#s-topik-sheet');
    tb.innerHTML = daftar.length ? '' : '<tr><td colspan="4" class="kosong">Belum ada soal buatan admin.</td></tr>';
    daftar.forEach((t) => {
      const tr = el('tr', {}, `<td>${KATEGORI[t.kategori].ikon} ${esc(judulMapel(t.kompetisi, t.mapel))}</td><td>${esc(t.topik)}</td><td>${t.soal.length}${t.materi ? ' + materi' : ''}</td>
        <td class="aksi-tabel"><button class="btn sm" type="button">✏️ Ubah</button> <button class="btn sm bahaya" type="button">Hapus</button></td>`);
      const [ubah, hapus] = tr.querySelectorAll('button');
      ubah.onclick = () => ubahTopikSheet(t);
      hapus.onclick = () => hapusTopikSheet(t);
      tb.appendChild(tr);
    });
  }

  function ubahTopikSheet(t) {
    state.editSoal = t;
    $('#soal-judul-form').textContent = `Ubah Soal: ${t.topik}`;
    $('#s-kategori').value = t.kategori;
    $('#s-kompetisi').value = t.kompetisi;
    $('#s-mapel').value = t.mapel;
    $('#s-topik').value = t.topik;
    $('#s-kelas').value = t.kelas;
    $('#s-materi').value = t.materi;
    $('#s-daftar-soal').innerHTML = '';
    t.soal.forEach((r) => {
      const [, , , tipe, pertanyaan, a, b, c, d, jawaban, pembahasan, , , gambar] = r;
      if (normal(tipe) === 'isian') tambahKartuSoal('isian', { pertanyaan, jawaban: String(jawaban ?? ''), pembahasan, gambar: urlGambar(gambar) });
      else tambahKartuSoal('pg', { pertanyaan, pilihan: [a, b, c, d].map((x) => String(x ?? '')), jawaban, pembahasan, gambar: urlGambar(gambar) });
    });
    if (!t.soal.length) tambahKartuSoal('pg');
    $('#s-pesan').textContent = '';
    isiDatalistSoal();
    $('#form-soal').scrollIntoView({ behavior: 'smooth' });
  }

  async function hapusTopikSheet(t) {
    if (!confirm(`Hapus semua soal buatan admin di topik "${t.topik}" (${t.soal.length} soal)? Tindakan ini tidak bisa dibatalkan.`)) return;
    try {
      const d = await api('soal-hapus', { sesi: state.profil.sesi, kategori: t.kategori, kompetisi: t.kompetisi, mapel: t.mapel, topik: t.topik });
      terimaSoalSheet(d);
      if (state.admin) state.admin.paket = d.paket;
      if (state.editSoal && kunciTopikSheet(t.kategori, t.kompetisi, t.mapel, t.topik) === kunciTopikSheet(state.editSoal.kategori, state.editSoal.kompetisi, state.editSoal.mapel, state.editSoal.topik)) kosongkanFormSoal();
      renderPanelSoal();
      $('#s-pesan').textContent = `✅ Topik "${t.topik}" dihapus dari sheet.`;
    } catch (e) {
      if (e instanceof GalatSesi) { sesiBerakhir(); return; }
      alert('Gagal menghapus: ' + (e instanceof TypeError ? 'periksa koneksi internet.' : e.message));
    }
  }

  async function simpanSoalAdmin(e) {
    e.preventDefault();
    const pesan = $('#s-pesan');
    const t = nilaiFormTopik();
    let soal;
    try {
      if (!t.mapel || !t.topik) throw new Error('Isi mata pelajaran dan topik.');
      if (t.kategori === 'lomba' && !t.kompetisi) throw new Error('Isi nama kompetisi untuk soal lomba.');
      soal = kumpulkanSoal();
      if (!soal.length && !$('#s-materi').value.trim()) throw new Error('Tambahkan minimal satu soal atau materi.');
    } catch (err) { pesan.textContent = '⚠️ ' + err.message; return; }

    const ada = topikAda(t);
    const nama = { mapel: ada.mapel ? ada.mapel.mapel : t.mapel, topik: ada.topik ? ada.topik.nama : t.topik, kompetisi: ada.mapel ? ada.mapel.kompetisi : t.kompetisi };
    const topikBaru = !ada.topik && !state.editSoal;
    // Saat mengubah: kirim nama lama agar baris lama diganti, paket & rekap ikut diganti namanya.
    let asal = null;
    if (state.editSoal) {
      const e0 = state.editSoal;
      const lama = topikAda(e0);
      asal = { kategori: e0.kategori, kompetisi: e0.kompetisi, mapel: e0.mapel, topik: e0.topik,
        id: idTopik(e0.kategori, lama.mapel ? lama.mapel.kompetisi : e0.kompetisi, lama.mapel ? lama.mapel.mapel : e0.mapel, lama.topik ? lama.topik.nama : e0.topik) };
    }
    const tombol = $('#s-simpan');
    tombol.disabled = true;
    pesan.textContent = 'Menyimpan ke Google Sheet…';
    try {
      const d = await api('soal-simpan', {
        sesi: state.profil.sesi, kategori: t.kategori, kompetisi: nama.kompetisi, mapel: nama.mapel, topik: nama.topik,
        kelas: $('#s-kelas').value.trim(), materi: $('#s-materi').value.trim(), soal, ganti: !!state.editSoal,
        tambahKePaket: topikBaru && $('#s-ke-paket').checked ? idTopik(t.kategori, nama.kompetisi, nama.mapel, nama.topik) : '',
        asal, idBaru: idTopik(t.kategori, nama.kompetisi, nama.mapel, nama.topik),
      });
      const diubah = !!state.editSoal;
      terimaSoalSheet(d);
      if (state.admin) {
        state.admin.paket = d.paket;
        // Nama topik diperbaiki: samakan juga data rekap yang sudah dimuat (server sudah mengubah sheet Hasil).
        if (asal && asal.id !== idTopik(t.kategori, nama.kompetisi, nama.mapel, nama.topik)) {
          (state.admin.hasil || []).forEach((h) => {
            if (kunciTopikSheet(h.kategori, h.kompetisi, h.mapel, h.topik) === kunciTopikSheet(asal.kategori, asal.kompetisi, asal.mapel, asal.topik)) {
              Object.assign(h, { mapel: nama.mapel, topik: nama.topik, kompetisi: nama.kompetisi, kategori: KATEGORI[t.kategori].label });
            }
          });
          simpan.set(KUNCI.rekapAdmin, state.admin);
          renderRekap();
        }
      }
      kosongkanFormSoal();
      renderPanelSoal();
      pesan.textContent = `✅ ${d.jumlah} soal ${diubah ? 'diperbarui' : 'tersimpan'} di topik "${nama.topik}".`;
    } catch (err) {
      if (err instanceof GalatSesi) { sesiBerakhir(); return; }
      pesan.textContent = '⚠️ Gagal menyimpan: ' + (err instanceof TypeError ? 'periksa koneksi internet.' : err.message);
    } finally {
      tombol.disabled = false;
    }
  }

  // ---------- Admin: paket soal ----------
  function targetPaket() {
    try { return JSON.parse($('#paket-target').value); } catch (e) { return { jenis: 'semua', sekolah: '', nama: '' }; }
  }
  function cocokTarget(p, t) {
    return p.jenis === t.jenis && normal(p.sekolah) === normal(t.sekolah) && normal(p.nama) === normal(t.nama);
  }
  function paketTarget(t) { return (state.admin.paket || []).find((p) => cocokTarget(p, t)); }

  function renderPaket() {
    const a = state.admin;
    if (!a) return;
    const pilihan = [{ jenis: 'semua', sekolah: '', nama: '', label: '👥 Semua siswa' }];
    urutTeks(a.siswa.map((s) => s.sekolah)).forEach((sek) => {
      pilihan.push({ jenis: 'sekolah', sekolah: sek, nama: '', label: `🏫 Sekolah: ${sek}` });
      a.siswa.filter((s) => s.sekolah === sek).sort((x, y) => x.nama.localeCompare(y.nama, 'id'))
        .forEach((s) => pilihan.push({ jenis: 'siswa', sekolah: sek, nama: s.nama, label: `　🎒 ${s.nama} (${sek})` }));
    });
    const lama = $('#paket-target').value;
    $('#paket-target').innerHTML = pilihan.map((p) => {
      const v = JSON.stringify({ jenis: p.jenis, sekolah: p.sekolah, nama: p.nama });
      const tanda = paketTarget(p) ? ' ✔' : '';
      return `<option value="${esc(v)}"${v === lama ? ' selected' : ''}>${esc(p.label + tanda)}</option>`;
    }).join('');
    tulisDaftarPaket();
  }

  function tulisDaftarPaket() {
    const t = targetPaket();
    const p = paketTarget(t);
    // Tanpa paket sendiri → tampilkan paket yang sedang berlaku dari tingkat di atasnya.
    const induk = t.jenis === 'siswa' ? paketTarget({ jenis: 'sekolah', sekolah: t.sekolah, nama: '' }) || paketTarget({ jenis: 'semua', sekolah: '', nama: '' })
      : t.jenis === 'sekolah' ? paketTarget({ jenis: 'semua', sekolah: '', nama: '' }) : null;
    const dipakai = p || induk;
    const pilih = new Set(dipakai ? dipakai.topik : state.bank.flatMap((m) => m.topik.map((x) => idTopik(m.kategori, m.kompetisi, m.mapel, x.nama))));
    $('#paket-status').innerHTML = p ? `✔ Paket khusus aktif (${p.topik.length} topik)${p.diperbarui ? ', diperbarui ' + formatTanggal(p.diperbarui) : ''}.`
      : induk ? `Belum ada paket khusus. Saat ini mengikuti paket <b>${esc(induk.jenis === 'semua' ? 'semua siswa' : 'sekolah ' + induk.sekolah)}</b> (${induk.topik.length} topik).`
        : 'Belum ada paket: semua topik terbuka. Centang topik lalu simpan untuk membuat paket.';
    $('#paket-hapus').hidden = !p;
    $('#paket-pesan').textContent = '';

    const wadah = $('#paket-daftar');
    wadah.innerHTML = '';
    Object.entries(KATEGORI).forEach(([kode, k]) => {
      const mapel = state.bank.filter((m) => m.kategori === kode);
      if (!mapel.length) return;
      wadah.appendChild(el('h3', { class: 'grup-kategori' }, `${k.ikon} ${esc(k.label)}`));
      mapel.forEach((m) => {
        const fs = el('fieldset');
        const judul = el('legend', {}, `<label><input type="checkbox" class="cek-mapel"> ${esc(m.ikon || '📘')} ${esc(judulMapel(m.kompetisi, m.mapel))} <span class="jumlah-pilih"></span></label>`);
        fs.appendChild(judul);
        m.topik.forEach((x) => {
          const id = idTopik(m.kategori, m.kompetisi, m.mapel, x.nama);
          const lbl = el('label', { class: 'cek' }, `<input type="checkbox" class="cek-topik"> <span>${esc(x.nama)} <span class="muted small">· ${x.soal.length} soal</span></span>`);
          const cb = lbl.querySelector('input');
          cb.value = id;
          cb.checked = pilih.has(id);
          fs.appendChild(lbl);
        });
        const semuaCek = () => fs.querySelectorAll('.cek-topik');
        const sinkron = () => {
          const n = [...semuaCek()].filter((c) => c.checked).length;
          const induk = judul.querySelector('.cek-mapel');
          induk.checked = n === semuaCek().length;
          induk.indeterminate = n > 0 && n < semuaCek().length;
          judul.querySelector('.jumlah-pilih').textContent = `(${n}/${semuaCek().length})`;
        };
        judul.querySelector('.cek-mapel').onchange = (e) => { semuaCek().forEach((c) => (c.checked = e.target.checked)); sinkron(); };
        semuaCek().forEach((c) => (c.onchange = sinkron));
        sinkron();
        wadah.appendChild(fs);
      });
    });
  }

  function setSemuaPaket(nilai) {
    document.querySelectorAll('#paket-daftar input[type=checkbox]').forEach((c) => { c.checked = nilai; c.indeterminate = false; });
    document.querySelectorAll('#paket-daftar fieldset').forEach((fs) => {
      const n = fs.querySelectorAll('.cek-topik').length;
      fs.querySelector('.jumlah-pilih').textContent = `(${nilai ? n : 0}/${n})`;
    });
  }

  async function simpanPaket(hapus) {
    const t = targetPaket();
    const topik = [...document.querySelectorAll('#paket-daftar .cek-topik:checked')].map((c) => c.value);
    if (!hapus && !topik.length && !confirm('Tidak ada topik yang dicentang. Siswa tidak akan melihat topik apa pun. Tetap simpan?')) return;
    if (hapus && !confirm('Hapus paket ini? Siswa akan kembali memakai paket di atasnya (atau semua topik).')) return;
    const pesan = $('#paket-pesan');
    pesan.textContent = 'Menyimpan…';
    try {
      const d = await api('paket-simpan', Object.assign({ sesi: state.profil.sesi, topik: hapus ? null : topik }, t));
      state.admin.paket = d.paket;
      renderPaket();
      $('#paket-pesan').textContent = hapus ? '✅ Paket dihapus.' : `✅ Paket tersimpan (${topik.length} topik). Siswa melihatnya saat membuka aplikasi berikutnya.`;
    } catch (e) {
      if (e instanceof GalatSesi) { sesiBerakhir(); return; }
      pesan.textContent = '⚠️ Gagal menyimpan: ' + (e instanceof TypeError ? 'periksa koneksi internet.' : e.message);
    }
  }

  // ---------- Event ----------
  function pasangEvent() {
    document.addEventListener('click', (e) => {
      const go = e.target.closest('[data-go]');
      if (go) pergi(go.dataset.go);
    });
    $('#tab-siswa').onclick = () => pilihTabMasuk(false);
    $('#tab-admin').onclick = () => pilihTabMasuk(true);
    $('#in-nama').onchange = perbaruiPilihanSekolah;
    $('#form-masuk').onsubmit = (e) => {
      e.preventDefault();
      prosesMasuk($('#form-masuk'), $('#galat-masuk'), async () => {
        const d = await api('login', { nama: $('#in-nama').value, sekolah: $('#in-sekolah').value, password: $('#in-password').value });
        return { peran: 'siswa', nama: d.nama, sekolah: d.sekolah, kelas: d.kelas, paket: d.paket, sesi: d.sesi };
      });
    };
    $('#form-admin').onsubmit = (e) => {
      e.preventDefault();
      prosesMasuk($('#form-admin'), $('#galat-admin'), async () => {
        const d = await api('login-admin', { password: $('#in-password-admin').value });
        return { peran: 'admin', nama: 'Admin', sesi: d.sesi };
      });
    };
    $('#btn-keluar').onclick = () => {
      if (!confirm('Keluar dari akun ini?')) return;
      keluar();
    };
    $('#tab-rekap').onclick = () => tabAdmin('rekap');
    $('#tab-paket').onclick = () => tabAdmin('paket');
    $('#tab-soal').onclick = () => tabAdmin('soal');
    ['#s-kategori', '#s-kompetisi', '#s-mapel', '#s-topik'].forEach((s) => ($(s).oninput = isiDatalistSoal));
    $('#s-tambah-pg').onclick = () => tambahKartuSoal('pg').querySelector('.q').focus();
    $('#s-tambah-isian').onclick = () => tambahKartuSoal('isian').querySelector('.q').focus();
    $('#s-batal').onclick = () => { if (confirm('Kosongkan formulir?')) { kosongkanFormSoal(); $('#s-pesan').textContent = ''; } };
    $('#form-soal').onsubmit = simpanSoalAdmin;
    $('#impor-baca').onclick = imporSoal;
    $('#impor-file').onchange = imporSoal;
    $('#impor-contoh').onclick = () => { $('#impor-teks').value = window.IMPOR_SOAL.CONTOH; $('#impor-pesan').textContent = 'Contoh format sudah diisi. Klik "Baca soal" untuk mencoba.'; };
    $('#f-sekolah').onchange = () => { isiFilterSiswa(); renderRekap(); };
    $('#f-siswa').onchange = renderRekap;
    $('#f-kategori').onchange = renderRekap;
    $('#paket-target').onchange = tulisDaftarPaket;
    $('#paket-semua').onclick = () => setSemuaPaket(true);
    $('#paket-kosong').onclick = () => setSemuaPaket(false);
    $('#paket-simpan').onclick = () => simpanPaket(false);
    $('#paket-hapus').onclick = () => simpanPaket(true);
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
    state.bank = gabungBank(simpan.get(KUNCI.soalSheet, null));
    tampil(state.profil ? berandaAwal() : 'masuk');
    await Promise.all([muatBank(), segarkanProfil()]);
    if (peran() === 'siswa' && !$('#v-beranda').hidden) renderBeranda();
    if (peran() === 'admin' && !$('#panel-paket').hidden) renderPaket();
    kirimAntrian();
  }

  init();
})();
