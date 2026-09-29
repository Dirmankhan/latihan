/**
 * Backend LMS Belajar Mandiri — Google Apps Script
 *
 * Cara pakai singkat (detail di README.md):
 * 1. Buat Google Sheet baru → Ekstensi → Apps Script → tempel seluruh isi file ini.
 * 2. Ubah TOKEN (samakan dengan js/config.js) dan ADMIN_PASSWORD di bawah.
 * 3. Jalankan fungsi `setup` sekali (izinkan akses).
 * 4. Deploy → Deployment baru → Aplikasi web → Jalankan sebagai: Saya,
 *    Yang memiliki akses: Siapa saja → salin URL /exec ke js/config.js.
 * 5. Isi daftar siswa (nama, sekolah, kelas, password) di sheet "Siswa".
 */

// Kode rahasia sederhana agar tidak sembarang orang bisa memakai backend ini.
const TOKEN = 'ganti-dengan-kode-rahasia';
// Password untuk masuk sebagai admin (orang tua/guru). Wajib diganti.
const ADMIN_PASSWORD = 'ganti-password-admin';
// Lama login tetap aktif (hari).
const MASA_SESI_SISWA = 365;
const MASA_SESI_ADMIN = 7;

const SHEET_HASIL = 'Hasil';
const SHEET_RINCIAN = 'Rincian';
const SHEET_SOAL = 'BankSoal';
const SHEET_MATERI = 'Materi';
const SHEET_RINGKASAN = 'Ringkasan';
const SHEET_SISWA = 'Siswa';
const SHEET_PAKET = 'Paket';

const HEADER_HASIL = ['Waktu', 'Nama', 'Kelas', 'Mapel', 'Topik', 'Jumlah Soal',
  'Benar', 'Salah', 'Nilai', 'Durasi (menit)', 'ID Sesi', 'Kategori', 'Kompetisi', 'Sekolah'];
const HEADER_RINCIAN = ['Waktu', 'Nama', 'Mapel', 'Topik', 'No', 'Pertanyaan',
  'Jawaban Anak', 'Kunci', 'Hasil', 'ID Sesi', 'Kategori', 'Kompetisi', 'Sekolah'];
const HEADER_SOAL = ['Mapel', 'Topik', 'Kelas', 'Tipe (pg/isian)', 'Pertanyaan',
  'A', 'B', 'C', 'D', 'Jawaban', 'Pembahasan', 'Kategori (pelajaran/lomba)', 'Kompetisi (khusus lomba)'];
const HEADER_MATERI = ['Mapel', 'Topik', 'Kelas', 'Materi', 'Kategori (pelajaran/lomba)', 'Kompetisi (khusus lomba)'];
const HEADER_SISWA = ['Nama', 'Sekolah', 'Kelas', 'Password', 'Aktif (Ya/Tidak)'];
const HEADER_PAKET = ['Berlaku untuk (semua/sekolah/siswa)', 'Sekolah', 'Nama Siswa', 'Topik (diisi dari aplikasi)', 'Diperbarui'];

/** Jalankan sekali dari editor Apps Script untuk menyiapkan semua sheet. */
function setup() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  siapkanSheet_(ss, SHEET_HASIL, HEADER_HASIL);
  siapkanSheet_(ss, SHEET_RINCIAN, HEADER_RINCIAN);

  const soal = siapkanSheet_(ss, SHEET_SOAL, HEADER_SOAL);
  if (soal.getLastRow() === 1) {
    soal.getRange(2, 1, 3, HEADER_SOAL.length).setValues([
      ['Matematika', 'Contoh dari Sheet', '7', 'pg', 'Hasil dari 12 × 5 adalah ...',
        '50', '60', '70', '17', 'B', '12 × 5 = 60.', 'pelajaran', ''],
      ['Matematika', 'Contoh dari Sheet', '7', 'isian', 'Hasil dari 100 − 37 adalah ...',
        '', '', '', '', '63', '100 − 37 = 63.', 'pelajaran', ''],
      ['Matematika', 'Teori Bilangan', 'Level 4', 'isian',
        'Jumlah 1 + 2 + 3 + ... + 50 adalah ...', '', '', '', '', '1275',
        '(50 × 51) : 2 = 1.275.', 'lomba', 'KMSI 2026'],
    ]);
  }
  const materi = siapkanSheet_(ss, SHEET_MATERI, HEADER_MATERI);
  if (materi.getLastRow() === 1) {
    materi.getRange(2, 1, 1, 6).setValues([[
      'Matematika', 'Contoh dari Sheet', '7',
      'Ini contoh materi yang ditulis di Google Sheet.\n\n- Baris yang diawali tanda minus menjadi daftar\n- Gunakan **teks** untuk huruf tebal',
      'pelajaran', '',
    ]]);
  }

  const siswa = siapkanSheet_(ss, SHEET_SISWA, HEADER_SISWA);
  // Kolom Kelas & Password sebagai teks agar angka 0 di depan tidak hilang.
  siswa.getRange('C:D').setNumberFormat('@');
  if (siswa.getLastRow() === 1) {
    siswa.getRange(2, 1, 1, HEADER_SISWA.length).setValues([['Adam', 'MTs Contoh', '7', '1234', 'Ya']]);
  }
  siapkanSheet_(ss, SHEET_PAKET, HEADER_PAKET);
  rahasia_();

  let ringkasan = ss.getSheetByName(SHEET_RINGKASAN);
  if (!ringkasan) ringkasan = ss.insertSheet(SHEET_RINGKASAN);
  ringkasan.clear();
  ringkasan.getRange('A1').setValue('Rekap per Siswa, Kategori, Mapel & Topik').setFontWeight('bold');
  ringkasan.getRange('A2').setFormula(
    '=IFERROR(QUERY(Hasil!A:N,"select B, N, L, M, D, E, count(I), avg(I), max(I), max(A) ' +
    'where B is not null group by B, N, L, M, D, E ' +
    'label N \'Sekolah\', count(I) \'Jumlah Latihan\', avg(I) \'Rata-rata Nilai\', ' +
    'max(I) \'Nilai Tertinggi\', max(A) \'Terakhir Latihan\'",1),"Belum ada data")');
  ringkasan.getRange('M1').setValue('Soal yang Paling Sering Salah').setFontWeight('bold');
  ringkasan.getRange('M2').setFormula(
    '=IFERROR(QUERY(Rincian!A:L,"select L, C, D, F, count(I) where I = \'Salah\' ' +
    'group by L, C, D, F order by count(I) desc limit 20 ' +
    'label count(I) \'Jumlah Salah\'",1),"Belum ada data")');
}

function siapkanSheet_(ss, nama, header) {
  let sh = ss.getSheetByName(nama);
  if (!sh) sh = ss.insertSheet(nama);
  if (sh.getLastRow() === 0 || sh.getLastColumn() < header.length) {
    // Sheet baru, atau sheet lama yang belum punya kolom terbaru (mis. Sekolah).
    sh.getRange(1, 1, 1, header.length).setValues([header]);
    sh.getRange(1, 1, 1, header.length).setFontWeight('bold').setBackground('#dbeafe');
    sh.setFrozenRows(1);
  }
  return sh;
}

// ---------- Sesi login (ditandatangani, tanpa disimpan di server) ----------

/** Kunci rahasia acak, dibuat sekali dan disimpan di Script Properties. */
function rahasia_() {
  const props = PropertiesService.getScriptProperties();
  let r = props.getProperty('RAHASIA_SESI');
  if (!r) { r = Utilities.getUuid() + Utilities.getUuid(); props.setProperty('RAHASIA_SESI', r); }
  return r;
}

function tandaTangan_(teks) {
  return Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(teks, rahasia_()));
}

function buatSesi_(isi, hari) {
  isi.e = Date.now() + hari * 86400000;
  const muatan = Utilities.base64EncodeWebSafe(JSON.stringify(isi), Utilities.Charset.UTF_8);
  return muatan + '.' + tandaTangan_(muatan);
}

/** Mengembalikan isi sesi jika sah dan belum kedaluwarsa, selain itu null. */
function bacaSesi_(sesi) {
  const bagian = String(sesi || '').split('.');
  if (bagian.length !== 2 || tandaTangan_(bagian[0]) !== bagian[1]) return null;
  try {
    const isi = JSON.parse(Utilities.newBlob(Utilities.base64DecodeWebSafe(bagian[0])).getDataAsString('UTF-8'));
    return isi.e > Date.now() ? isi : null;
  } catch (err) {
    return null;
  }
}

function sama_(a, b) {
  return String(a || '').trim().toLowerCase() === String(b || '').trim().toLowerCase();
}

function daftarSiswa_(ss) {
  return bacaTabel_(ss, SHEET_SISWA)
    .filter(function (r) { return String(r[0]).trim() && !sama_(r[4], 'tidak'); })
    .map(function (r) {
      return { nama: String(r[0]).trim(), sekolah: String(r[1]).trim(), kelas: String(r[2]).trim(), password: String(r[3]).trim() };
    });
}

function cariSiswa_(ss, nama, sekolah) {
  return daftarSiswa_(ss).filter(function (s) { return sama_(s.nama, nama) && sama_(s.sekolah, sekolah); })[0] || null;
}

/** Sesi siswa yang sah dan siswanya masih aktif di sheet Siswa. */
function siswaDariSesi_(ss, sesi) {
  const isi = bacaSesi_(sesi);
  if (!isi || isi.p !== 'siswa') return null;
  return cariSiswa_(ss, isi.n, isi.s);
}

function adminDariSesi_(sesi) {
  const isi = bacaSesi_(sesi);
  return !!(isi && isi.p === 'admin');
}

/** Batasi tebakan password: 5 kali salah → dikunci 10 menit. */
function cekPercobaan_(kunci) {
  const n = Number(CacheService.getScriptCache().get('gagal:' + kunci) || 0);
  return n < 5;
}
function catatGagal_(kunci) {
  const cache = CacheService.getScriptCache();
  cache.put('gagal:' + kunci, String(Number(cache.get('gagal:' + kunci) || 0) + 1), 600);
}

// ---------- Paket soal ----------

function bacaPaket_(ss) {
  return bacaTabel_(ss, SHEET_PAKET).map(function (r) {
    let topik = [];
    try { topik = JSON.parse(r[3] || '[]'); } catch (err) { topik = []; }
    return { jenis: String(r[0]).trim().toLowerCase(), sekolah: String(r[1]).trim(), nama: String(r[2]).trim(), topik: topik, diperbarui: r[4] };
  });
}

/** Paket untuk seorang siswa: paket siswa → paket sekolah → paket semua → null (semua topik terbuka). */
function paketUntuk_(ss, siswa) {
  const paket = bacaPaket_(ss);
  const cari = function (f) { return paket.filter(f)[0]; };
  const p = cari(function (x) { return x.jenis === 'siswa' && sama_(x.nama, siswa.nama) && sama_(x.sekolah, siswa.sekolah); }) ||
    cari(function (x) { return x.jenis === 'sekolah' && sama_(x.sekolah, siswa.sekolah); }) ||
    cari(function (x) { return x.jenis === 'semua'; });
  return p ? p.topik : null;
}

function simpanPaket_(ss, data) {
  const sh = siapkanSheet_(ss, SHEET_PAKET, HEADER_PAKET);
  const jenis = String(data.jenis || '').toLowerCase();
  if (['semua', 'sekolah', 'siswa'].indexOf(jenis) === -1) throw new Error('Jenis paket tidak dikenal');
  const sekolah = jenis === 'semua' ? '' : String(data.sekolah || '');
  const nama = jenis === 'siswa' ? String(data.nama || '') : '';
  const nilai = sh.getLastRow() > 1 ? sh.getRange(2, 1, sh.getLastRow() - 1, 3).getValues() : [];
  let baris = -1;
  nilai.forEach(function (r, i) {
    if (sama_(r[0], jenis) && sama_(r[1], sekolah) && sama_(r[2], nama)) baris = i + 2;
  });
  if (data.topik === null) {
    // Hapus paket → siswa kembali memakai paket di atasnya (atau semua topik).
    if (baris > 0) sh.deleteRow(baris);
    return;
  }
  const isi = [jenis, sekolah, nama, JSON.stringify(data.topik || []), new Date()];
  if (baris > 0) sh.getRange(baris, 1, 1, isi.length).setValues([isi]);
  else sh.appendRow(isi);
}

// ---------- Permintaan dari aplikasi ----------

/** Semua permintaan yang memerlukan login dikirim lewat POST (isi JSON). */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.token !== TOKEN) return json_({ ok: false, error: 'Token salah' });
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    const aksi = data.action || 'hasil';

    if (aksi === 'login') {
      const kunci = String(data.nama).toLowerCase() + '|' + String(data.sekolah).toLowerCase();
      if (!cekPercobaan_(kunci)) return json_({ ok: false, error: 'Terlalu banyak percobaan. Tunggu 10 menit.' });
      const s = cariSiswa_(ss, data.nama, data.sekolah);
      if (!s || s.password !== String(data.password || '').trim()) {
        catatGagal_(kunci);
        return json_({ ok: false, error: 'Nama, sekolah, atau password salah.' });
      }
      return json_({ ok: true, peran: 'siswa', nama: s.nama, sekolah: s.sekolah, kelas: s.kelas,
        paket: paketUntuk_(ss, s), sesi: buatSesi_({ p: 'siswa', n: s.nama, s: s.sekolah }, MASA_SESI_SISWA) });
    }

    if (aksi === 'login-admin') {
      if (!cekPercobaan_('admin')) return json_({ ok: false, error: 'Terlalu banyak percobaan. Tunggu 10 menit.' });
      if (ADMIN_PASSWORD === 'ganti-password-admin') return json_({ ok: false, error: 'Ganti ADMIN_PASSWORD di Code.gs terlebih dahulu.' });
      if (String(data.password || '') !== ADMIN_PASSWORD) {
        catatGagal_('admin');
        return json_({ ok: false, error: 'Password admin salah.' });
      }
      return json_({ ok: true, peran: 'admin', sesi: buatSesi_({ p: 'admin' }, MASA_SESI_ADMIN) });
    }

    if (aksi === 'profil' || aksi === 'riwayat') {
      const s = siswaDariSesi_(ss, data.sesi);
      if (!s) return json_({ ok: false, error: 'Sesi berakhir', keluar: true });
      if (aksi === 'profil') return json_({ ok: true, nama: s.nama, sekolah: s.sekolah, kelas: s.kelas, paket: paketUntuk_(ss, s) });
      const baris = bacaTabel_(ss, SHEET_HASIL)
        .filter(function (r) { return sama_(r[1], s.nama) && (!r[13] || sama_(r[13], s.sekolah)); })
        .slice(-100)
        .map(barisHasil_);
      return json_({ ok: true, riwayat: baris });
    }

    if (aksi === 'rekap' || aksi === 'paket-simpan') {
      if (!adminDariSesi_(data.sesi)) return json_({ ok: false, error: 'Sesi admin berakhir', keluar: true });
      if (aksi === 'paket-simpan') {
        const lock = LockService.getScriptLock();
        lock.waitLock(20000);
        try { simpanPaket_(ss, data); } finally { lock.releaseLock(); }
      }
      return json_({
        ok: true,
        url: ss.getUrl(),
        siswa: daftarSiswa_(ss).map(function (s) { return { nama: s.nama, sekolah: s.sekolah, kelas: s.kelas }; }),
        paket: bacaPaket_(ss),
        hasil: aksi === 'rekap' ? bacaTabel_(ss, SHEET_HASIL).slice(-3000).map(barisHasil_) : undefined,
      });
    }

    if (aksi === 'hasil') return simpanHasil_(ss, data);
    return json_({ ok: false, error: 'Aksi tidak dikenal' });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function barisHasil_(r) {
  return { waktu: r[0], nama: r[1], kelas: r[2], mapel: r[3], topik: r[4], jumlahSoal: r[5],
    benar: r[6], nilai: r[8], durasiMenit: r[9], idSesi: r[10], kategori: r[11] || 'pelajaran',
    kompetisi: r[12] || '', sekolah: r[13] || '' };
}

/** Menyimpan hasil latihan siswa yang sudah login. */
function simpanHasil_(ss, data) {
  const s = siswaDariSesi_(ss, data.sesi);
  if (!s) return json_({ ok: false, error: 'Sesi berakhir', keluar: true });

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const hasil = siapkanSheet_(ss, SHEET_HASIL, HEADER_HASIL);

    // Cegah data ganda jika aplikasi mengirim ulang sesi yang sama.
    const ids = hasil.getLastRow() > 1
      ? hasil.getRange(2, 11, hasil.getLastRow() - 1, 1).getValues().flat()
      : [];
    if (ids.indexOf(data.idSesi) !== -1) return json_({ ok: true, duplikat: true });

    const waktu = new Date(data.waktu || Date.now());
    hasil.appendRow([waktu, s.nama, s.kelas, data.mapel, data.topik,
      data.jumlahSoal, data.benar, data.salah, data.nilai,
      Math.round((data.durasiDetik || 0) / 6) / 10, data.idSesi,
      data.kategoriLabel || 'Materi Pelajaran', data.kompetisi || '', s.sekolah]);

    const rincian = siapkanSheet_(ss, SHEET_RINCIAN, HEADER_RINCIAN);
    const baris = (data.rincian || []).map(function (r, i) {
      return [waktu, s.nama, data.mapel, data.topik, i + 1, r.pertanyaan,
        r.jawabanAnak, r.kunci, r.benar ? 'Benar' : 'Salah', data.idSesi,
        data.kategoriLabel || 'Materi Pelajaran', data.kompetisi || '', s.sekolah];
    });
    if (baris.length) {
      rincian.getRange(rincian.getLastRow() + 1, 1, baris.length, baris[0].length)
        .setValues(baris);
    }
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

/** ?action=soal → bank soal & materi; ?action=daftar → nama & sekolah untuk pilihan login. */
function doGet(e) {
  const p = e.parameter || {};
  if (p.token !== TOKEN) return json_({ ok: false, error: 'Token salah' });
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (p.action === 'soal') {
    return json_({ ok: true, soal: bacaTabel_(ss, SHEET_SOAL), materi: bacaTabel_(ss, SHEET_MATERI) });
  }
  if (p.action === 'daftar') {
    return json_({ ok: true, siswa: daftarSiswa_(ss).map(function (s) { return { nama: s.nama, sekolah: s.sekolah }; }) });
  }
  return json_({ ok: true, pesan: 'Backend LMS aktif' });
}

function bacaTabel_(ss, nama) {
  const sh = ss.getSheetByName(nama);
  if (!sh || sh.getLastRow() < 2) return [];
  return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues()
    .filter(function (r) { return r.join('').trim() !== ''; });
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
