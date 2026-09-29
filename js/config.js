// Pengaturan LMS — isi setelah Google Apps Script di-deploy (lihat README.md).
window.LMS_CONFIG = {
  // URL Aplikasi Web Apps Script, diakhiri /exec. Kosongkan untuk mode offline.
  APPS_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbyYjdY7sY3TvYYt1kCF5gWIxeUwIEhSDT9O-krZqFJg-J5Vdt7VU_mBA7V7lEO26wLt/exec',
  // Harus sama persis dengan TOKEN di apps-script/Code.gs.
  TOKEN: 'bilaladam',
  // Nama aplikasi yang tampil di layar.
  JUDUL: 'Belajar Mandiri',
  // Nilai minimal agar topik dianggap "Tuntas".
  KKTP: 75,
  // Jumlah soal maksimal per sesi latihan (soal diambil acak).
  SOAL_PER_SESI: 10,
};
