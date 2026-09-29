// Impor soal dari teks (tempel dari Word/Google Docs), file .docx, .pdf, atau .txt.
// Format yang dikenali (lihat CONTOH di bawah):
//   1. Pertanyaan ...          ← nomor soal
//   A. pilihan  B. pilihan     ← pilihan (per baris atau sebaris)
//   Kunci: B                   ← atau tanda * pada pilihan benar, atau daftar kunci di akhir
//   Pembahasan: ...            ← opsional
// Soal tanpa pilihan dianggap soal isian (kunci berupa teks).
(function () {
  'use strict';

  const CONTOH = `1. Hasil dari −8 + 5 adalah ...
A. −13
B. −3
C. 3
D. 13
Kunci: B
Pembahasan: Tanda berbeda → kurangkan: 8 − 5 = 3, ikut tanda bilangan yang lebih besar (−).

2. Ibu kota Provinsi NTB adalah ...
A. Bima  B. Mataram  C. Sumbawa  D. Praya
Kunci: B

3. Air membeku pada suhu ... °C
Kunci: 0|nol

4. Planet terbesar di tata surya adalah ...
A. Bumi
B. Mars
C. Jupiter *
D. Saturnus`;

  const RE_SOAL = /^(\d{1,3})\s*[.)]\s*(.*)$/;
  const RE_PILIHAN = /^\(?([A-Ea-e])\s*[.)]\s*(.*)$/;
  const RE_KUNCI = /^(?:kunci\s*jawaban|kunci|jawaban(?:\s*benar)?|jawab)\s*[:=]\s*(.+)$/i;
  const RE_BAHAS = /^(?:pembahasan|penjelasan|pembahasan\s*soal)\s*[:=]\s*(.*)$/i;
  // Judul bagian kunci di akhir dokumen, mis. "Kunci Jawaban" atau "KUNCI JAWABAN:".
  const RE_JUDUL_KUNCI = /^(?:kunci\s*jawaban|kunci)\s*:?\s*$/i;

  // "A. satu B. dua C. tiga" dalam satu baris → beberapa pilihan.
  function pecahSebaris(baris) {
    const awal = baris.match(/^\(?([A-Ea-e])[.)]\s/);
    if (!awal) return null;
    // Huruf besar semua atau kecil semua, sesuai huruf pertama.
    const besar = awal[1] === awal[1].toUpperCase();
    const pola = besar ? /(?:^|\s)\(?([A-E])[.)]\s+/g : /(?:^|\s)\(?([a-e])[.)]\s+/g;
    const cocok = [...baris.matchAll(pola)];
    // Minimal dua pilihan dan hurufnya berurutan (A, B, C, …).
    if (cocok.length < 2 || cocok.some((m, i) => m[1].toUpperCase() !== 'ABCDE'[i])) return null;
    return cocok.map((m, i) => {
      const awal = m.index + m[0].length;
      const akhir = i + 1 < cocok.length ? cocok[i + 1].index : baris.length;
      return { huruf: m[1], teks: baris.slice(awal, akhir).trim() };
    });
  }

  // Daftar kunci di akhir dokumen: "1. B  2. C" atau "1) B", "1-B", "1 = 50".
  function bacaDaftarKunci(baris) {
    const kunci = {};
    baris.forEach((b) => {
      for (const m of b.matchAll(/(\d{1,3})\s*[.)\-:=]\s*(.+?)(?=\s+\d{1,3}\s*[.)\-:=]\s*|$)/g)) kunci[Number(m[1])] = m[2].trim();
    });
    return kunci;
  }

  function parse(teks) {
    let baris = String(teks || '').replace(/\r/g, '').replace(/ /g, ' ').split('\n').map((b) => b.trim());

    // Pisahkan bagian daftar kunci di akhir (jika ada).
    let daftarKunci = {};
    const iJudul = baris.findIndex((b) => RE_JUDUL_KUNCI.test(b));
    if (iJudul !== -1) {
      daftarKunci = bacaDaftarKunci(baris.slice(iJudul + 1).filter(Boolean));
      baris = baris.slice(0, iJudul);
    }

    const hasil = [];
    let q = null;
    let bagian = 'tanya'; // tanya | pilihan | bahas
    const tutup = () => { if (q) hasil.push(q); };
    baris.forEach((b) => {
      if (!b) { if (q && bagian === 'tanya' && q.pertanyaan && !q.pertanyaan.endsWith('\n')) q.pertanyaan += '\n\n'; return; }
      const mSoal = b.match(RE_SOAL);
      // Nomor baru dianggap soal baru jika belum di tengah pilihan tanpa kunci, atau nomornya berurutan.
      if (mSoal && (!q || Number(mSoal[1]) === q.nomor + 1 || bagian !== 'tanya')) {
        tutup();
        q = { nomor: Number(mSoal[1]), pertanyaan: mSoal[2], pilihan: [], jawaban: '', pembahasan: '', tanda: -1 };
        bagian = 'tanya';
        return;
      }
      if (!q) return; // teks sebelum soal pertama (judul, petunjuk) diabaikan
      const mKunci = b.match(RE_KUNCI);
      if (mKunci) { q.jawaban = mKunci[1].trim(); bagian = 'kunci'; return; }
      const mBahas = b.match(RE_BAHAS);
      if (mBahas) { q.pembahasan = mBahas[1].trim(); bagian = 'bahas'; return; }
      if (bagian === 'bahas') { q.pembahasan += (q.pembahasan ? ' ' : '') + b; return; }
      const sebaris = pecahSebaris(b);
      const mPil = b.match(RE_PILIHAN);
      if (sebaris || (mPil && (bagian === 'pilihan' || /^[Aa]$/.test(mPil[1])))) {
        (sebaris || [{ huruf: mPil[1], teks: mPil[2] }]).forEach((p) => {
          let t = p.teks;
          if (/^\*|\*$|\(benar\)$|✓$/i.test(t)) { q.tanda = q.pilihan.length; t = t.replace(/^\*\s*|\s*\*$|\s*\(benar\)$|\s*✓$/gi, ''); }
          q.pilihan.push(t.trim());
        });
        bagian = 'pilihan';
        return;
      }
      if (bagian === 'pilihan' && q.pilihan.length) { q.pilihan[q.pilihan.length - 1] += ' ' + b; return; }
      if (bagian === 'tanya') q.pertanyaan += (q.pertanyaan && !q.pertanyaan.endsWith('\n') ? '\n' : '') + b;
    });
    tutup();

    return hasil.map((q) => {
      const peringatan = [];
      const pertanyaan = q.pertanyaan.replace(/\n{3,}/g, '\n\n').trim();
      let jawaban = q.jawaban || daftarKunci[q.nomor] || '';
      if (q.pilihan.length >= 2) {
        let pilihan = q.pilihan;
        let idx = q.tanda;
        if (idx === -1 && jawaban) {
          const huruf = jawaban.match(/^\(?([A-Ea-e])\)?[.)]?(?:\s|$)/);
          idx = huruf ? 'ABCDE'.indexOf(huruf[1].toUpperCase())
            : pilihan.findIndex((p) => p.toLowerCase() === jawaban.toLowerCase());
        }
        if (pilihan.length > 4) {
          peringatan.push(`Soal ini punya ${pilihan.length} pilihan; hanya A–D yang dipakai.`);
          pilihan = pilihan.slice(0, 4);
          if (idx >= 4) idx = -1;
        }
        if (idx < 0 || idx >= pilihan.length) peringatan.push('Kunci jawaban belum terbaca — pilih kunci secara manual.');
        return { nomor: q.nomor, tipe: 'pg', pertanyaan, pilihan, jawaban: idx >= 0 && idx < pilihan.length ? 'ABCD'[idx] : '', pembahasan: q.pembahasan, peringatan };
      }
      if (q.pilihan.length === 1) peringatan.push('Hanya satu pilihan terbaca; soal dijadikan isian.');
      if (!jawaban) peringatan.push('Kunci jawaban belum terbaca — isi secara manual.');
      return { nomor: q.nomor, tipe: 'isian', pertanyaan, jawaban, pembahasan: q.pembahasan, peringatan };
    }).filter((q) => q.pertanyaan);
  }

  // ---------- Membaca file ----------
  function muatSkrip(src) {
    return new Promise((ok, gagal) => {
      if (document.querySelector(`script[data-lib="${src}"]`)) { ok(); return; }
      const s = document.createElement('script');
      s.src = src;
      s.dataset.lib = src;
      s.onload = () => ok();
      s.onerror = () => gagal(new Error('Gagal memuat ' + src));
      document.head.appendChild(s);
    });
  }

  // HTML dari Word → teks. Penomoran otomatis Word (daftar bernomor) ditulis ulang:
  // tingkat pertama menjadi 1., 2., …; tingkat kedua menjadi A., B., …
  function htmlKeTeks(html) {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const keluar = [];
    let nomor = 0;
    const jalan = (node, tingkat) => {
      node.childNodes.forEach((n) => {
        if (n.nodeType !== 1) return;
        const tag = n.tagName;
        if (tag === 'OL' || tag === 'UL') {
          let huruf = 0;
          [...n.children].filter((c) => c.tagName === 'LI').forEach((li) => {
            const teksLi = [...li.childNodes].filter((c) => !(c.nodeType === 1 && /^(OL|UL)$/.test(c.tagName))).map((c) => c.textContent).join('').trim();
            const awalan = tingkat === 0 ? `${++nomor}. ` : `${'ABCDE'[huruf++] || '-'}. `;
            // Jangan beri nomor ganda jika teks sudah diawali nomor/huruf yang diketik manual.
            keluar.push(RE_SOAL.test(teksLi) || RE_PILIHAN.test(teksLi) ? teksLi : awalan + teksLi);
            [...li.children].filter((c) => /^(OL|UL)$/.test(c.tagName)).forEach((sub) => jalan({ childNodes: [sub] }, tingkat + 1));
          });
          return;
        }
        if (tag === 'TABLE') {
          n.querySelectorAll('tr').forEach((tr) => {
            [...tr.children].forEach((td) => { const t = td.innerText || td.textContent; t.split('\n').forEach((x) => keluar.push(x.trim())); });
          });
          return;
        }
        if (/^(P|H[1-6])$/.test(tag)) {
          keluar.push(n.textContent.trim());
          if (!n.textContent.trim()) keluar.push('');
          return;
        }
        jalan(n, tingkat);
      });
    };
    jalan(doc.body, 0);
    return keluar.join('\n');
  }

  async function bacaDocx(file) {
    await muatSkrip('js/vendor/mammoth.browser.min.js');
    const hasil = await window.mammoth.convertToHtml({ arrayBuffer: await file.arrayBuffer() });
    return htmlKeTeks(hasil.value);
  }

  async function bacaPdf(file) {
    await muatSkrip('js/vendor/pdf.min.js');
    const lib = window.pdfjsLib;
    lib.GlobalWorkerOptions.workerSrc = 'js/vendor/pdf.worker.min.js';
    const pdf = await lib.getDocument({ data: new Uint8Array(await file.arrayBuffer()) }).promise;
    const semua = [];
    for (let i = 1; i <= pdf.numPages; i++) {
      const isi = await (await pdf.getPage(i)).getTextContent();
      // Kelompokkan potongan teks per baris berdasarkan posisi vertikal.
      const barisMap = new Map();
      isi.items.forEach((it) => {
        if (!it.str) return;
        const y = Math.round(it.transform[5]);
        const kunci = [...barisMap.keys()].find((k) => Math.abs(k - y) <= 2) ?? y;
        if (!barisMap.has(kunci)) barisMap.set(kunci, []);
        barisMap.get(kunci).push(it);
      });
      [...barisMap.entries()].sort((a, b) => b[0] - a[0]).forEach(([, items]) => {
        items.sort((a, b) => a.transform[4] - b.transform[4]);
        let teks = '';
        let akhirX = null;
        items.forEach((it) => {
          const x = it.transform[4];
          if (akhirX !== null && x - akhirX > 1 && !teks.endsWith(' ') && !it.str.startsWith(' ')) teks += ' ';
          teks += it.str;
          akhirX = x + (it.width || 0);
        });
        semua.push(teks.trim());
      });
      semua.push('');
    }
    const hasil = semua.join('\n');
    if (!hasil.replace(/\s/g, '')) throw new Error('PDF ini tidak berisi teks (kemungkinan hasil scan/gambar). Ketik ulang atau gunakan file Word.');
    return hasil;
  }

  async function bacaFile(file) {
    const nama = file.name.toLowerCase();
    if (nama.endsWith('.docx')) return bacaDocx(file);
    if (nama.endsWith('.pdf')) return bacaPdf(file);
    if (nama.endsWith('.txt')) return file.text();
    if (nama.endsWith('.doc')) throw new Error('File .doc (Word lama) belum didukung. Buka di Word lalu "Simpan Sebagai" .docx, atau salin-tempel teksnya.');
    throw new Error('Format file belum didukung. Gunakan .docx, .pdf, atau .txt.');
  }

  window.IMPOR_SOAL = { parse, bacaFile, htmlKeTeks, CONTOH };
})();
