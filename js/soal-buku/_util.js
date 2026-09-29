// Utilitas soal berbasis buku teks resmi Kurikulum Merdeka Kelas VII.
// Setiap soal menyertakan rujukan halaman agar anak bisa membuka buku aslinya.
(function () {
  const rujuk = (bahas, hlm) => bahas + (hlm ? ` 📖 hlm. ${hlm}` : '');
  window.BUKU = {
    pg: (pertanyaan, pilihan, jawaban, pembahasan, hlm) =>
      ({ tipe: 'pg', pertanyaan, pilihan, jawaban, pembahasan: rujuk(pembahasan, hlm) }),
    isian: (pertanyaan, jawaban, pembahasan, hlm) =>
      ({ tipe: 'isian', pertanyaan, jawaban, pembahasan: rujuk(pembahasan, hlm) }),
    tambah: (mapel, ikon, topik) => {
      const ada = window.BANK_SOAL.find((m) => m.mapel === mapel && (m.kategori || 'pelajaran') === 'pelajaran');
      if (ada) ada.topik = topik.concat(ada.topik);
      else window.BANK_SOAL.push({ mapel, kategori: 'pelajaran', ikon, topik });
    },
  };
  // Urutan mapel di tab Materi Pelajaran.
  window.URUTAN_MAPEL = ['Matematika', 'IPA', 'IPS', 'Bahasa Indonesia', 'Bahasa Inggris',
    'Pendidikan Agama Islam', "Al-Qur'an Hadis", 'Akidah Akhlak', 'Fikih', 'Sejarah Kebudayaan Islam',
    'Bahasa Arab', 'Koding dan Kecerdasan Artifisial'];
})();
