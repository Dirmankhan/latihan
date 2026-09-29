// Pengaturan LMS — isi setelah Google Apps Script di-deploy (lihat README.md).
window.LMS_CONFIG = {
  // URL Aplikasi Web Apps Script, diakhiri /exec. Kosongkan untuk mode offline.
  APPS_SCRIPT_URL: '',
  // Harus sama persis dengan TOKEN di apps-script/Code.gs.
  TOKEN: 'ganti-dengan-kode-rahasia',
  // Nama aplikasi yang tampil di layar.
  JUDUL: 'Belajar Mandiri',
  // Nilai minimal agar topik dianggap "Tuntas".
  KKTP: 75,
  // Jumlah soal maksimal per sesi latihan (soal diambil acak).
  SOAL_PER_SESI: 10,
};
