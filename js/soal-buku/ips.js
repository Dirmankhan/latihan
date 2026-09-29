// IPS — berdasarkan buku "Ilmu Pengetahuan Sosial untuk SMP/MTs Kelas VII (Edisi Revisi)"
// (Buku Siswa untuk Tema I; Buku Panduan Guru untuk Tema II–IV). Kemendikbudristek.
(function () {
  const { pg, isian, tambah } = window.BUKU;
  const BS = 'Buku Siswa IPS Kelas VII (Edisi Revisi)';
  const BG = 'Buku Panduan Guru IPS Kelas VII (Edisi Revisi)';

  tambah('IPS', '🌏', [
    {
      nama: 'Tema I-A · Lokasi, Konektivitas, dan Perubahan Iklim',
      kelas: '7', sumber: BS + ', Tema I, hlm. 1–23',
      materi: `- **Lokasi absolut**: letak tetap berdasarkan koordinat garis lintang dan bujur. Indonesia terletak pada 6°LU–11°LS dan 95°BT–141°BT (hlm. 4)
- **Lokasi relatif**: letak yang dapat berubah sesuai keadaan sekitarnya, misalnya Kabupaten Tana Tidung pindah dari Kalimantan Timur ke Kalimantan Utara; lokasi dekat jalan raya membuat harga tanah mahal (hlm. 7, 10)
- Garis lintang dipakai untuk membagi iklim; garis bujur untuk pembagian zona waktu. Konferensi Meridian 1884 menetapkan Greenwich sebagai standar waktu; setiap 15° ke timur waktu lebih cepat 1 jam (hlm. 6–7)
- **Interaksi antarwilayah** (Edward Ullman): wilayah saling melengkapi (*regional complementarity*), kesempatan berintervensi (*intervening opportunity*), dan kemudahan pemindahan (*spatial transfer ability*) (hlm. 12–13)
- Perdesaan: agraris dan homogen; perkotaan: nonagraris dan heterogen (hlm. 15)
- **Cuaca**: kondisi udara di wilayah sempit dan waktu singkat; **iklim**: rata-rata cuaca tahunan di wilayah luas. Musim hujan umumnya Oktober–Maret, kemarau April–September (hlm. 19–20)`,
      soal: [
        pg('Letak astronomis (lokasi absolut) Indonesia adalah ...', ['6°LU–11°LS dan 95°BT–141°BT', '6°LS–11°LU dan 95°BT–141°BT', '11°LU–6°LS dan 95°BB–141°BB', '6°LU–11°LS dan 141°BT–195°BT'], 'A', 'Lihat Gambar 1.2 Letak Astronomis Indonesia.', 4),
        pg('Sifat lokasi absolut adalah ...', ['berubah-ubah sesuai keadaan sekitar', 'tetap karena berdasarkan sistem koordinat', 'bergantung pada harga tanah', 'ditentukan oleh jalan raya'], 'B', 'Lokasi absolut tetap selama acuannya ekuator dan meridian Greenwich.', 4),
        pg('Garis bujur dimanfaatkan untuk ...', ['membagi iklim dunia', 'pembagian zona waktu', 'mengukur curah hujan', 'menentukan musim'], 'B', 'Garis lintang untuk iklim, garis bujur untuk zona waktu.', 6),
        pg('Jika bergerak 15° ke arah timur dari Greenwich, waktu menjadi ...', ['1 jam lebih lambat', '1 jam lebih cepat', '15 jam lebih cepat', 'sama saja'], 'B', 'Setiap 15° ke timur, waktu lebih cepat 1 jam.', 7),
        pg('Greenwich ditetapkan sebagai standar waktu internasional pada Konferensi Meridian tahun ...', ['1675', '1884', '1945', '2000'], 'B', 'Konferensi di Washington DC tahun 1884.', 7),
        pg('Kabupaten Tana Tidung dahulu termasuk Kalimantan Timur, kini termasuk Kalimantan Utara. Ini contoh ...', ['lokasi absolut', 'lokasi relatif', 'letak astronomis', 'garis bujur'], 'B', 'Lokasi relatif dapat berubah sesuai keadaan sekitarnya.', 7),
        pg('Harga tanah di sekitar Ibu Kota Nusantara melonjak 5–10 kali lipat. Hal ini dipengaruhi oleh ...', ['lokasi absolut', 'lokasi relatif', 'garis lintang', 'zona waktu'], 'B', 'Nilai suatu objek dipengaruhi keadaan sekitarnya (lokasi relatif).', 10),
        pg('Wilayah A surplus beras dan kekurangan ikan, wilayah B sebaliknya. Faktor interaksi ini disebut ...', ['intervening opportunity', 'regional complementarity', 'spatial transfer ability', 'urbanisasi'], 'B', 'Wilayah yang saling melengkapi (Edward Ullman).', 12),
        pg('Mata pencaharian penduduk perdesaan umumnya bersifat ...', ['nonagraris dan heterogen', 'agraris dan homogen', 'industri dan jasa', 'heterogen dan padat'], 'B', 'Mayoritas penduduk desa bekerja di sektor pertanian.', 15),
        pg('Kabupaten Brebes (bawang merah) dan Wonosobo (kentang) saling mengirim hasil pertanian. Ini contoh ...', ['interaksi antarwilayah', 'lokasi absolut', 'perubahan iklim', 'akulturasi'], 'A', 'Interaksi untuk memenuhi kebutuhan pangan.', 17),
        pg('"Sore ini terjadi hujan lebat disertai angin di Kabupaten Bogor." Pernyataan tersebut menggambarkan ...', ['iklim', 'cuaca', 'musim', 'letak geografis'], 'B', 'Cuaca = wilayah sempit, waktu singkat.', 19),
        pg('Musim hujan di Indonesia umumnya terjadi pada bulan ...', ['April–September', 'Oktober–Maret', 'Januari–Juni', 'Juli–Desember'], 'B', 'Musim kemarau umumnya April–September.', 20),
        pg('Unsur iklim yang membantu penyerbukan tanaman secara alami adalah ...', ['suhu', 'kelembapan', 'angin', 'penyinaran matahari'], 'C', 'Angin membantu penyerbukan dan mengurangi kadar air.', 20),
        pg('Petani menanam padi pada musim hujan dan jagung pada musim kemarau. Ini pengaruh iklim pada bidang ...', ['perhubungan', 'industri', 'pertanian', 'kesehatan'], 'C', 'Iklim menentukan pola tanam.', 21),
        pg('Pancaroba yang menyebabkan radang tenggorokan dan influenza merupakan pengaruh iklim pada bidang ...', ['kesehatan', 'pertanian', 'industri', 'perhubungan'], 'A', 'Peralihan musim berdampak pada kesehatan.', 22),
      ],
    },
    {
      nama: 'Tema I-B · Bencana, Ekonomi, Interaksi Sosial, dan Sejarah',
      kelas: '7', sumber: BS + ', Tema I, hlm. 24–58',
      materi: `- Indonesia dilalui dua jalur pegunungan dunia (Sirkum Pasifik dan Sirkum Mediterania) dan memiliki 127 gunung api aktif. Tiga lempeng: Eurasia (utara), Indo-Australia (selatan), Pasifik (timur). Dampak positifnya tanah subur; dampak negatifnya rawan gempa, tsunami, dan letusan gunung api (hlm. 24–29)
- Kegiatan ekonomi: **produksi** (menambah manfaat/menciptakan barang atau jasa), **distribusi** (langsung, semilangsung, tidak langsung), **konsumsi**. Faktor produksi: alam, tenaga kerja, modal, keahlian (hlm. 30–36)
- **Interaksi sosial** mensyaratkan kontak sosial dan komunikasi (verbal/nonverbal). Bentuk **asosiatif**: kerja sama, akomodasi, akulturasi. Bentuk **disosiatif**: persaingan, kontravensi, pertentangan (hlm. 37–42)
- **Sejarah** berasal dari bahasa Arab *syajaratun* (pohon kayu). Ciri: unik, abadi, penting. Unsur: ruang, waktu, manusia. Sumber: tertulis, benda (artefak), lisan (hlm. 43–45)`,
      soal: [
        pg('Secara geologis, Indonesia dilalui dua jalur pegunungan dunia, yaitu ...', ['Sirkum Pasifik dan Sirkum Mediterania', 'Sirkum Atlantik dan Sirkum Pasifik', 'Himalaya dan Andes', 'Alpen dan Mediterania'], 'A', 'Letak ini menyebabkan banyak gunung api aktif.', 24),
        isian('Jumlah gunung api aktif di Indonesia menurut buku adalah ...', '127', 'Indonesia memiliki 127 gunung api aktif.', 24),
        pg('Lempeng yang berada di sebelah selatan Indonesia adalah ...', ['Eurasia', 'Pasifik', 'Indo-Australia', 'Filipina'], 'C', 'Eurasia di utara, Indo-Australia di selatan, Pasifik di timur.', 24),
        pg('Dampak positif letak geologis Indonesia adalah ...', ['rawan gempa bumi', 'tanah menjadi subur', 'sering tsunami', 'banyak banjir'], 'B', 'Tanah di sekitar gunung berapi kaya unsur hara.', 25),
        pg('Di tengah laut, tsunami dapat menjalar dengan kecepatan mencapai ...', ['90 km/jam', '300 km/jam', '900 km/jam atau lebih', '9.000 km/jam'], 'C', 'Menurut Yanuarto dkk. (2019).', 28),
        pg('Produksi adalah kegiatan ...', ['menghabiskan manfaat barang', 'menyalurkan barang ke konsumen', 'menambah manfaat suatu barang atau menciptakan barang baru', 'membeli barang di pasar'], 'C', 'Definisi produksi.', 31),
        pg('Mesin, gedung, dan peralatan dalam proses produksi termasuk faktor produksi ...', ['alam', 'tenaga kerja', 'modal', 'keahlian'], 'C', 'Faktor modal tidak hanya berupa uang tunai.', 33),
        pg('Penjahit menyerahkan baju langsung kepada pemesannya. Ini contoh distribusi ...', ['langsung', 'semilangsung', 'tidak langsung', 'online'], 'A', 'Tanpa perantara.', 35),
        pg('Produsen ponsel menjual produknya melalui toko resmi miliknya sendiri. Ini contoh distribusi ...', ['langsung', 'semilangsung', 'tidak langsung', 'ekspor'], 'B', 'Perantaranya bagian dari produsen.', 35),
        pg('Syarat terjadinya interaksi sosial adalah ...', ['kontak sosial dan komunikasi', 'kerja sama dan persaingan', 'uang dan barang', 'lokasi dan waktu'], 'A', 'Dua syarat interaksi sosial.', 38),
        pg('Ketua RT menengahi perselisihan warga tentang peternakan ayam. Bentuk interaksi ini adalah ...', ['kontravensi', 'akomodasi', 'persaingan', 'akulturasi'], 'B', 'Akomodasi = upaya meredakan pertentangan.', 40),
        pg('Berpadunya dua kebudayaan menjadi kebudayaan baru tanpa menghilangkan budaya aslinya disebut ...', ['asimilasi', 'akulturasi', 'akomodasi', 'kontravensi'], 'B', 'Budaya asli masih tetap ada.', 41),
        pg('Tawuran antarsuporter yang menimbulkan korban jiwa termasuk interaksi ...', ['asosiatif berupa kerja sama', 'disosiatif berupa persaingan', 'disosiatif berupa pertentangan', 'asosiatif berupa akomodasi'], 'C', 'Pertentangan disertai kekerasan dan ancaman.', 42),
        pg('Kata "sejarah" berasal dari bahasa Arab "syajaratun" yang berarti ...', ['masa lalu', 'pohon kayu', 'cerita', 'peninggalan'], 'B', 'Menggambarkan pertumbuhan dan kesinambungan peristiwa.', 43),
        pg('Peristiwa sejarah hanya terjadi sekali dan tidak terulang. Ciri ini disebut ...', ['abadi', 'penting', 'unik', 'kronologis'], 'C', 'Ciri sejarah: unik, abadi, penting.', 44),
        pg('Prasasti termasuk sumber sejarah ...', ['lisan', 'benda', 'tertulis', 'fotografi'], 'C', 'Candi dan patung termasuk sumber benda.', 44),
      ],
    },
    {
      nama: 'Tema II · Keberagaman Lingkungan Sekitar',
      kelas: '7', sumber: BG + ', Tema II, hlm. 115–151',
      materi: `Tujuan Tema II (Buku Guru hlm. 116): membandingkan fenomena lingkungan sekitar sebagai proses geografis, menjelaskan **dinamika sosial dan perubahan sosial budaya**, mengidentifikasi kehidupan masyarakat **Praaksara**, serta menganalisis **pembangunan berkelanjutan**.

- **Pencemaran** meliputi pencemaran air, udara, dan tanah (hlm. 135)
- Jenis dinamika sosial: difusi, akulturasi, asimilasi, sosialisasi, internalisasi (hlm. 136)
- Zaman Praaksara menurut arkeologi: Paleolitikum, Mesolitikum, Neolitikum, dan zaman Logam (hlm. 141). **Neozoikum** berlangsung sekitar 60 juta tahun lalu dan ditandai berkembangnya mamalia (hlm. 149)
- Syarat **asimilasi** antara lain toleransi, kesempatan ekonomi yang sama, sikap saling menghargai, dan perkawinan antarkelompok (hlm. 149)
- Fenomena **La Nina** dan **El Nino** berkaitan dengan perubahan iklim (hlm. 143)
- **SDGs**: sampah rumah tangga berkaitan dengan pilar lingkungan hidup (air bersih dan sanitasi, ekosistem laut dan darat) (hlm. 149)`,
      soal: [
        pg('Tiga jenis pencemaran yang dibahas pada Tema II adalah pencemaran ...', ['air, udara, dan tanah', 'suara, cahaya, dan panas', 'air, api, dan angin', 'plastik, kertas, dan logam'], 'A', 'Aktivitas 1 Tema II.', 135),
        pg('Berikut yang termasuk jenis dinamika sosial adalah ...', ['difusi dan asimilasi', 'fotosintesis dan respirasi', 'erosi dan abrasi', 'inflasi dan deflasi'], 'A', 'Difusi, akulturasi, asimilasi, sosialisasi, internalisasi.', 136),
        pg('Urutan pembabakan zaman Praaksara secara arkeologis adalah ...', ['Neolitikum – Mesolitikum – Paleolitikum – Logam', 'Paleolitikum – Mesolitikum – Neolitikum – Logam', 'Logam – Neolitikum – Mesolitikum – Paleolitikum', 'Mesolitikum – Paleolitikum – Logam – Neolitikum'], 'B', 'Dari batu tua, batu tengah, batu muda, hingga logam.', 141),
        pg('Zaman yang berlangsung sekitar 60 juta tahun lalu dan ditandai berkembangnya hewan mamalia disebut ...', ['Arkaikum', 'Paleozoikum', 'Mesozoikum', 'Neozoikum'], 'D', 'Pada Neozoikum tanda-tanda kehidupan manusia sudah muncul.', 149),
        pg('Pada masa bercocok tanam, manusia Praaksara ...', ['hanya berburu', 'memanfaatkan alam untuk menghasilkan makanan dan hidup bergotong royong di perkampungan', 'hidup berpindah-pindah tanpa tempat tinggal', 'sudah mengenal tulisan'], 'B', 'Kunci uraian Tema II no. 2.', 149),
        pg('Salah satu faktor pendorong terjadinya asimilasi adalah ...', ['sikap tertutup golongan mayoritas', 'toleransi antarkelompok yang berbeda kebudayaan', 'persaingan ekonomi yang tajam', 'larangan perkawinan antarkelompok'], 'B', 'Kunci uraian Tema II no. 3.', 149),
        pg('Sampah rumah tangga berkaitan dengan SDGs pada pilar ...', ['ekonomi', 'lingkungan hidup', 'hukum', 'pendidikan'], 'B', 'Berhubungan dengan air bersih dan sanitasi serta ekosistem.', 149),
        pg('Cara berburu hiu yang sesuai prinsip pembangunan berkelanjutan adalah ...', ['menangkap sebanyak-banyaknya', 'berburu secara berkala menyesuaikan waktu perkembangbiakan hiu', 'menggunakan bom ikan', 'melarang semua nelayan melaut'], 'B', 'Menjaga populasi dan ekosistem laut.', 149),
        pg('Dua fenomena iklim yang menyebabkan musim hujan dan kemarau sulit diprediksi adalah ...', ['La Nina dan El Nino', 'pasang dan surut', 'monsun dan passat', 'gerhana dan komet'], 'A', 'Aktivitas 9 Tema II.', 143),
      ],
    },
    {
      nama: 'Tema III · Potensi Ekonomi Lingkungan',
      kelas: '7', sumber: BG + ', Tema III, hlm. 153–186',
      materi: `Materi esensial Tema III (Buku Guru hlm. 161–164):
- Perbedaan potensi alam menyebabkan perbedaan aktivitas: dataran tinggi bercocok tanam sayur dan buah; dataran rendah bekerja di kantor/perusahaan; pesisir menjadi nelayan
- Eksploitasi SDA berlebihan karena populasi bertambah menyebabkan pencemaran dan kerusakan lingkungan
- Potensi Indonesia menjadi negara maju: SDA melimpah dan **bonus demografi** (sebagian besar penduduk berusia produktif) menuju Indonesia Maju 2045
- **Toponimi**: studi tentang nama-nama tempat; hasil budaya dari segi sejarah dan simbolis
- **Pasar**: sarana bertemunya penjual dan pembeli, langsung maupun tidak langsung (termasuk internet)
- **Harga**: jumlah uang yang dibayar untuk barang/jasa; harga yang disepakati penjual dan pembeli disebut **harga keseimbangan (harga pasar)**
- Interaksi sosial memunculkan **status sosial** dan **peran sosial**`,
      soal: [
        pg('Masyarakat yang tinggal di dataran tinggi umumnya bekerja sebagai ...', ['nelayan', 'petani sayur dan buah', 'pegawai kantor', 'pedagang ikan'], 'B', 'Potensi alam memengaruhi aktivitas ekonomi.', 161),
        pg('Bonus demografi adalah kondisi ketika ...', ['jumlah penduduk menurun', 'sebagian besar penduduk berada pada usia produktif', 'banyak penduduk lanjut usia', 'angka kelahiran nol'], 'B', 'Peluang menuju Indonesia Maju 2045.', 162),
        pg('Studi tentang nama-nama tempat disebut ...', ['topografi', 'toponimi', 'demografi', 'kartografi'], 'B', 'Toponimi dipengaruhi sejarah dan makna simbolis.', 162),
        pg('Nama Jembatan Ampera di Palembang berasal dari singkatan ...', ['Aman Perkasa', 'Amanat Penderitaan Rakyat', 'Ampel Raya', 'Aliansi Pemuda Rakyat'], 'B', 'Contoh toponimi dalam kunci jawaban.', 182),
        pg('Pasar adalah ...', ['bangunan tempat berjualan saja', 'sarana bertemunya penjual dan pembeli secara langsung atau tidak langsung', 'tempat produksi barang', 'kantor pemerintah'], 'B', 'Transaksi melalui internet juga termasuk pasar.', 163),
        pg('Harga yang telah disepakati antara penjual dan pembeli disebut ...', ['harga pokok', 'harga keseimbangan atau harga pasar', 'harga diskon', 'harga eceran tertinggi'], 'B', 'Definisi pada materi esensial.', 164),
        pg('Eksploitasi sumber daya alam yang berlebihan dapat menyebabkan ...', ['potensi SDA meningkat', 'pencemaran dan kerusakan lingkungan', 'bonus demografi', 'harga turun'], 'B', 'Potensi SDA pun semakin menurun.', 161),
        pg('Dalam produksi tempe, orang yang sedang membuat tempe termasuk faktor produksi ...', ['alam', 'tenaga kerja', 'modal', 'teknologi'], 'B', 'Kunci uraian Tema III no. 4.', 183),
        pg('B. J. Habibie pernah menjabat Menteri Negara Riset dan Teknologi pada tahun ...', ['1945–1950', '1978–1998', '1998–1999', '2004–2009'], 'B', 'Contoh perubahan peran sosial seseorang.', 183),
        pg('Salah satu penyebab hewan hutan masuk ke permukiman penduduk adalah ...', ['reboisasi', 'deforestasi dan perubahan penggunaan lahan', 'turunnya jumlah penduduk', 'pembuatan taman kota'], 'B', 'Habitat alami hewan menyusut.', 180),
      ],
    },
    {
      nama: 'Tema IV · Pemberdayaan Masyarakat',
      kelas: '7', sumber: BG + ', Tema IV, hlm. 187–206',
      materi: `Tujuan Tema IV (Buku Guru hlm. 188–191): menganalisis **keragaman sosial budaya** dan penyebabnya, masalah akibat keragaman beserta solusinya, **pemberdayaan masyarakat** dan peranan komunitas, serta mempraktikkan **literasi keuangan** (uang, pendapatan, tabungan, investasi, pengelolaan keuangan keluarga).

- Perbedaan kondisi lingkungan fisik memengaruhi keragaman budaya. Contoh pengaruh iklim: pakaian tebal di daerah dingin, **sedekah laut** di pesisir, makanan berkuah di daerah bersuhu rendah, atap daun rumbia di Papua (hlm. 203–204)
- Keberagaman adalah kekayaan dan kekuatan bangsa, bukan sumber perpecahan (hlm. 191)
- Upaya kesadaran gender: mengakhiri diskriminasi dan kekerasan terhadap perempuan, melawan pernikahan anak (hlm. 204)
- Narkoba merusak kesehatan dan masa depan pelajar serta melanggar undang-undang (hlm. 205)`,
      soal: [
        pg('Menurut Tema IV, keberagaman budaya Indonesia seharusnya dipandang sebagai ...', ['sumber perpecahan', 'kekayaan dan kekuatan bangsa', 'hambatan pembangunan', 'masalah yang harus dihapus'], 'B', 'Keberagaman dapat dikembangkan secara gotong royong, misalnya untuk pariwisata.', 191),
        pg('Salah satu faktor penyebab keragaman budaya di Indonesia adalah ...', ['perbedaan kondisi lingkungan fisik wilayah', 'persamaan iklim di semua daerah', 'jumlah penduduk yang sama', 'satu bahasa daerah'], 'A', 'Lingkungan fisik memengaruhi budaya setempat.', 191),
        pg('Masyarakat pesisir memiliki tradisi upacara ...', ['ngaben', 'sedekah laut', 'kasada', 'rambu solo'], 'B', 'Contoh pengaruh lingkungan terhadap budaya.', 204),
        pg('Makanan tradisional masyarakat di daerah bersuhu rendah cenderung ...', ['kering dan pedas', 'berkuah untuk menjaga suhu tubuh', 'mentah', 'manis sekali'], 'B', 'Kunci uraian Tema IV no. 1.', 204),
        pg('Atap rumah adat di Papua yang terbuat dari daun rumbia berfungsi agar ...', ['rumah tampak mewah', 'tetap hangat saat hujan dan tidak terlalu panas saat kemarau', 'mudah dibongkar', 'tahan gempa'], 'B', 'Adaptasi terhadap suhu ekstrem.', 204),
        pg('Berikut yang termasuk upaya menciptakan kesadaran gender adalah ...', ['mendukung pernikahan anak', 'mengakhiri diskriminasi terhadap perempuan dan anak perempuan', 'membatasi pendidikan perempuan', 'melarang perempuan bekerja'], 'B', 'Kunci uraian Tema IV no. 2.', 204),
        pg('Uang, pendapatan, tabungan, dan investasi dipelajari dalam materi ...', ['literasi keuangan', 'toponimi', 'praaksara', 'geologi'], 'A', 'Lihat peta konsep Tema IV.', 189),
        pg('Peredaran narkotika menjadi musuh bersama karena ...', ['meningkatkan prestasi', 'menyebabkan ketergantungan dan merusak organ tubuh', 'murah dan mudah didapat', 'diperbolehkan undang-undang'], 'B', 'Kunci uraian Tema IV no. 3.', 205),
      ],
    },
  ]);
})();
