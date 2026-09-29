/**
 * Backend LMS Belajar Mandiri — Google Apps Script
 *
 * Cara pakai singkat (detail di README.md):
 * 1. Buat Google Sheet baru → Ekstensi → Apps Script → tempel seluruh isi file ini.
 * 2. Ubah TOKEN di bawah (samakan dengan js/config.js).
 * 3. Jalankan fungsi `setup` sekali (izinkan akses).
 * 4. Deploy → Deployment baru → Aplikasi web → Jalankan sebagai: Saya,
 *    Yang memiliki akses: Siapa saja → salin URL /exec ke js/config.js.
 */

// Kode rahasia sederhana agar tidak sembarang orang bisa mengirim data.
const TOKEN = 'ganti-dengan-kode-rahasia';

const SHEET_HASIL = 'Hasil';
const SHEET_RINCIAN = 'Rincian';
const SHEET_SOAL = 'BankSoal';
const SHEET_MATERI = 'Materi';
const SHEET_RINGKASAN = 'Ringkasan';

const HEADER_HASIL = ['Waktu', 'Nama', 'Kelas', 'Mapel', 'Topik', 'Jumlah Soal',
  'Benar', 'Salah', 'Nilai', 'Durasi (menit)', 'ID Sesi', 'Kategori', 'Kompetisi'];
const HEADER_RINCIAN = ['Waktu', 'Nama', 'Mapel', 'Topik', 'No', 'Pertanyaan',
  'Jawaban Anak', 'Kunci', 'Hasil', 'ID Sesi', 'Kategori', 'Kompetisi'];
const HEADER_SOAL = ['Mapel', 'Topik', 'Kelas', 'Tipe (pg/isian)', 'Pertanyaan',
  'A', 'B', 'C', 'D', 'Jawaban', 'Pembahasan', 'Kategori (pelajaran/lomba)', 'Kompetisi (khusus lomba)'];
const HEADER_MATERI = ['Mapel', 'Topik', 'Kelas', 'Materi', 'Kategori (pelajaran/lomba)', 'Kompetisi (khusus lomba)'];

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

  let ringkasan = ss.getSheetByName(SHEET_RINGKASAN);
  if (!ringkasan) ringkasan = ss.insertSheet(SHEET_RINGKASAN);
  ringkasan.clear();
  ringkasan.getRange('A1').setValue('Rekap per Kategori, Mapel & Topik').setFontWeight('bold');
  ringkasan.getRange('A2').setFormula(
    '=IFERROR(QUERY(Hasil!A:M,"select B, L, M, D, E, count(I), avg(I), max(I), max(A) ' +
    'where B is not null group by B, L, M, D, E ' +
    'label count(I) \'Jumlah Latihan\', avg(I) \'Rata-rata Nilai\', ' +
    'max(I) \'Nilai Tertinggi\', max(A) \'Terakhir Latihan\'",1),"Belum ada data")');
  ringkasan.getRange('L1').setValue('Soal yang Paling Sering Salah').setFontWeight('bold');
  ringkasan.getRange('L2').setFormula(
    '=IFERROR(QUERY(Rincian!A:L,"select L, C, D, F, count(I) where I = \'Salah\' ' +
    'group by L, C, D, F order by count(I) desc limit 20 ' +
    'label count(I) \'Jumlah Salah\'",1),"Belum ada data")');
}

function siapkanSheet_(ss, nama, header) {
  let sh = ss.getSheetByName(nama);
  if (!sh) sh = ss.insertSheet(nama);
  if (sh.getLastRow() === 0 || sh.getLastColumn() < header.length) {
    // Sheet baru, atau sheet lama yang belum punya kolom terbaru (mis. Kategori).
    sh.getRange(1, 1, 1, header.length).setValues([header]);
    sh.getRange(1, 1, 1, header.length).setFontWeight('bold').setBackground('#dbeafe');
    sh.setFrozenRows(1);
  }
  return sh;
}

/** Menerima hasil latihan dari aplikasi. */
function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    if (data.token !== TOKEN) return json_({ ok: false, error: 'Token salah' });

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const ss = SpreadsheetApp.getActiveSpreadsheet();
      const hasil = siapkanSheet_(ss, SHEET_HASIL, HEADER_HASIL);

      // Cegah data ganda jika aplikasi mengirim ulang sesi yang sama.
      const ids = hasil.getLastRow() > 1
        ? hasil.getRange(2, 11, hasil.getLastRow() - 1, 1).getValues().flat()
        : [];
      if (ids.indexOf(data.idSesi) !== -1) return json_({ ok: true, duplikat: true });

      const waktu = new Date(data.waktu || Date.now());
      hasil.appendRow([waktu, data.nama, data.kelas, data.mapel, data.topik,
        data.jumlahSoal, data.benar, data.salah, data.nilai,
        Math.round((data.durasiDetik || 0) / 6) / 10, data.idSesi,
        data.kategoriLabel || 'Materi Pelajaran', data.kompetisi || '']);

      const rincian = siapkanSheet_(ss, SHEET_RINCIAN, HEADER_RINCIAN);
      const baris = (data.rincian || []).map(function (r, i) {
        return [waktu, data.nama, data.mapel, data.topik, i + 1, r.pertanyaan,
          r.jawabanAnak, r.kunci, r.benar ? 'Benar' : 'Salah', data.idSesi,
          data.kategoriLabel || 'Materi Pelajaran', data.kompetisi || ''];
      });
      if (baris.length) {
        rincian.getRange(rincian.getLastRow() + 1, 1, baris.length, baris[0].length)
          .setValues(baris);
      }
    } finally {
      lock.releaseLock();
    }
    return json_({ ok: true });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/** ?action=soal → bank soal & materi dari sheet; ?action=riwayat&nama=X → riwayat nilai. */
function doGet(e) {
  const p = e.parameter || {};
  if (p.token !== TOKEN) return json_({ ok: false, error: 'Token salah' });
  const ss = SpreadsheetApp.getActiveSpreadsheet();

  if (p.action === 'soal') {
    return json_({ ok: true, soal: bacaTabel_(ss, SHEET_SOAL), materi: bacaTabel_(ss, SHEET_MATERI) });
  }
  if (p.action === 'riwayat') {
    const nama = String(p.nama || '').toLowerCase();
    const baris = bacaTabel_(ss, SHEET_HASIL)
      .filter(function (r) { return String(r[1]).toLowerCase() === nama; })
      .slice(-100)
      .map(function (r) {
        return { waktu: r[0], mapel: r[3], topik: r[4], jumlahSoal: r[5],
          benar: r[6], nilai: r[8], idSesi: r[10], kategori: r[11] || 'pelajaran', kompetisi: r[12] || '' };
      });
    return json_({ ok: true, riwayat: baris });
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
