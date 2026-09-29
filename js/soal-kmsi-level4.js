// Soal latihan KMSI 2026 — Babak Penyisihan, LEVEL 4.
// Disusun berdasarkan kisi-kisi resmi penyelenggara (Yayasan Intan Mutia).
// Masuk ke tab "Persiapan Lomba". Topik "Simulasi Penyisihan" mengacak soal
// dari semua indikator pada mapel tersebut.
(function () {
  const pg = (pertanyaan, pilihan, jawaban, pembahasan) => ({ tipe: 'pg', pertanyaan, pilihan, jawaban, pembahasan });
  const isian = (pertanyaan, jawaban, pembahasan) => ({ tipe: 'isian', pertanyaan, jawaban, pembahasan });

  // ======================= MATEMATIKA =======================
  const mtkBilangan = [
    pg('Hasil dari (−12) + 36 : (−4) × 3 adalah ...', ['−39', '−30', '15', '−21'], 'A', 'Kali/bagi dari kiri dulu: 36 : (−4) = −9, lalu −9 × 3 = −27. Kemudian −12 + (−27) = −39.'),
    pg('Hasil dari 3/4 + 2/3 × 1½ adalah ...', ['1¾', '2⅛', '1⅛', '17/12'], 'A', 'Kerjakan perkalian dulu: 2/3 × 3/2 = 1. Lalu 3/4 + 1 = 1¾.'),
    isian('Hasil dari 2⁵ × 2³ : 2⁶ adalah ...', '4', 'Sifat pangkat: 2⁵⁺³⁻⁶ = 2² = 4.'),
    isian('Hasil dari √196 + ∛125 adalah ...', '19', '√196 = 14 dan ∛125 = 5, jadi 14 + 5 = 19.'),
    pg('Hasil dari 0,25 × 48 + 1,5 × 8 adalah ...', ['20', '24', '36', '48'], 'B', '0,25 × 48 = 12 dan 1,5 × 8 = 12. Jadi 12 + 12 = 24.'),
    pg('KPK dari 12, 18, dan 30 adalah ...', ['90', '120', '180', '360'], 'C', '12 = 2² × 3, 18 = 2 × 3², 30 = 2 × 3 × 5. KPK = 2² × 3² × 5 = 180.'),
    pg('Angka satuan dari 3²⁰²⁶ adalah ...', ['1', '3', '7', '9'], 'D', 'Angka satuan 3ⁿ berulang 3, 9, 7, 1 (periode 4). 2026 : 4 bersisa 2, jadi sama dengan 3² → 9.'),
    isian('Banyak bilangan prima antara 20 dan 40 adalah ...', '4|empat', 'Bilangan prima antara 20 dan 40: 23, 29, 31, 37 → ada 4.'),
    isian('Sisa pembagian 5¹⁰⁰ oleh 4 adalah ...', '1|satu', '5 dibagi 4 bersisa 1, sehingga 5¹⁰⁰ bersisa 1¹⁰⁰ = 1.'),
    pg('Lampu A berkedip setiap 6 detik, lampu B setiap 8 detik, dan lampu C setiap 10 detik. Jika ketiganya berkedip bersamaan, mereka akan berkedip bersamaan lagi setelah ...', ['1 menit', '2 menit', '4 menit', '8 menit'], 'B', 'KPK dari 6, 8, 10 = 120 detik = 2 menit.'),
  ];
  const mtkBangun = [
    isian('Sebuah persegi panjang memiliki keliling 40 cm dan panjang 12 cm. Luasnya adalah ... cm².', '96', 'Keliling = 2(p + l) → 40 = 2(12 + l) → l = 8. Luas = 12 × 8 = 96 cm².'),
    pg('Luas lingkaran dengan jari-jari 14 cm adalah ... (π = 22/7)', ['88 cm²', '308 cm²', '616 cm²', '1.232 cm²'], 'C', 'L = πr² = 22/7 × 14 × 14 = 616 cm².'),
    pg('Keliling lingkaran dengan diameter 21 cm adalah ... (π = 22/7)', ['33 cm', '66 cm', '132 cm', '346,5 cm'], 'B', 'K = πd = 22/7 × 21 = 66 cm.'),
    isian('Sebuah segitiga siku-siku memiliki sisi tegak 6 cm dan 8 cm. Panjang sisi miringnya adalah ... cm.', '10', 'Teorema Pythagoras: √(6² + 8²) = √(36 + 64) = √100 = 10 cm.'),
    pg('Sebuah trapesium memiliki sisi sejajar 10 cm dan 16 cm serta tinggi 7 cm. Luasnya adalah ...', ['91 cm²', '112 cm²', '182 cm²', '78 cm²'], 'A', 'L = ½ × (10 + 16) × 7 = 13 × 7 = 91 cm².'),
    pg('Jumlah besar sudut dalam segi enam adalah ...', ['360°', '540°', '720°', '1.080°'], 'C', 'Jumlah sudut dalam segi-n = (n − 2) × 180°. Untuk n = 6: 4 × 180° = 720°.'),
    isian('Volume kubus dengan panjang rusuk 6 cm adalah ... cm³.', '216', 'V = s³ = 6 × 6 × 6 = 216 cm³.'),
    pg('Luas permukaan balok berukuran 10 cm × 6 cm × 5 cm adalah ...', ['140 cm²', '280 cm²', '300 cm²', '600 cm²'], 'B', 'LP = 2(pl + pt + lt) = 2(60 + 50 + 30) = 2 × 140 = 280 cm².'),
    pg('Volume tabung dengan jari-jari 7 cm dan tinggi 10 cm adalah ... (π = 22/7)', ['440 cm³', '770 cm³', '1.540 cm³', '3.080 cm³'], 'C', 'V = πr²t = 22/7 × 7 × 7 × 10 = 1.540 cm³.'),
    pg('Sebuah kubus memiliki volume 512 cm³. Luas permukaan kubus tersebut adalah ...', ['64 cm²', '256 cm²', '384 cm²', '512 cm²'], 'C', 'Rusuk = ∛512 = 8 cm. LP = 6 × 8² = 6 × 64 = 384 cm².'),
  ];
  const mtkAljabar = [
    isian('Nilai x yang memenuhi 3x − 7 = 2x + 5 adalah ...', '12', '3x − 2x = 5 + 7 → x = 12.'),
    pg('Penyelesaian dari 2(x + 3) = 5x − 9 adalah ...', ['x = 3', 'x = 5', 'x = −5', 'x = 1'], 'B', '2x + 6 = 5x − 9 → 6 + 9 = 5x − 2x → 15 = 3x → x = 5.'),
    pg('Umur ayah 3 kali umur anaknya. Jumlah umur mereka 48 tahun. Umur anak tersebut adalah ...', ['10 tahun', '12 tahun', '14 tahun', '16 tahun'], 'B', 'Misal umur anak = a, ayah = 3a. a + 3a = 48 → 4a = 48 → a = 12 tahun.'),
    pg('Himpunan penyelesaian dari 4x − 3 < 13 untuk x bilangan asli adalah ...', ['{1, 2, 3}', '{1, 2, 3, 4}', '{4, 5, 6, ...}', '{0, 1, 2, 3}'], 'A', '4x < 16 → x < 4. Bilangan asli kurang dari 4: {1, 2, 3}.'),
    pg('Suku ke-6 dari barisan 2, 6, 18, 54, ... adalah ...', ['162', '324', '486', '972'], 'C', 'Barisan geometri dengan rasio 3: U₆ = 2 × 3⁵ = 2 × 243 = 486.'),
    pg('Rumus suku ke-n dari barisan 5, 8, 11, 14, ... adalah ...', ['3n + 2', '3n + 5', '5n + 3', '2n + 3'], 'A', 'Beda = 3, sehingga Uₙ = 3n + (5 − 3) = 3n + 2. Cek: U₁ = 5 ✓.'),
    isian('Jumlah 10 suku pertama dari barisan 3, 7, 11, 15, ... adalah ...', '210', 'Sₙ = n/2 × (2a + (n − 1)b) = 10/2 × (6 + 36) = 5 × 42 = 210.'),
    isian('Suku ke-15 dari pola bilangan 1, 4, 9, 16, ... adalah ...', '225', 'Pola bilangan persegi: Uₙ = n². U₁₅ = 15² = 225.'),
    pg('Suku ke-10 dari barisan Fibonacci 1, 1, 2, 3, 5, 8, ... adalah ...', ['34', '55', '89', '21'], 'B', 'Setiap suku = jumlah dua suku sebelumnya: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.'),
  ];
  const mtkSosial = [
    pg('Pedagang membeli barang seharga Rp80.000 dan menjualnya Rp100.000. Persentase keuntungannya adalah ...', ['20%', '25%', '30%', '80%'], 'B', 'Untung = 20.000. Persentase = 20.000/80.000 × 100% = 25% (dihitung dari harga beli).'),
    pg('Sebuah tas seharga Rp150.000 mendapat diskon 20%. Harga yang harus dibayar adalah ...', ['Rp30.000', 'Rp110.000', 'Rp120.000', 'Rp130.000'], 'C', 'Diskon = 20% × 150.000 = 30.000. Bayar = 150.000 − 30.000 = Rp120.000.'),
    pg('Rina menabung Rp2.000.000 dengan bunga tunggal 6% per tahun. Jumlah tabungan Rina setelah 8 bulan adalah ...', ['Rp2.080.000', 'Rp2.120.000', 'Rp2.096.000', 'Rp2.060.000'], 'A', 'Bunga = 2.000.000 × 6% × 8/12 = 80.000. Tabungan = Rp2.080.000.'),
    pg('Sekarung beras memiliki bruto 50 kg dan tara 2%. Neto beras tersebut adalah ...', ['48 kg', '49 kg', '49,5 kg', '52 kg'], 'B', 'Tara = 2% × 50 = 1 kg. Neto = bruto − tara = 50 − 1 = 49 kg.'),
    pg('Sebuah barang dijual Rp45.000 dan mengalami kerugian 10%. Harga pembelian barang tersebut adalah ...', ['Rp40.500', 'Rp49.500', 'Rp50.000', 'Rp55.000'], 'C', 'Harga jual = 90% × harga beli → harga beli = 45.000 : 0,9 = Rp50.000.'),
    isian('Perbandingan kelereng A : B : C = 2 : 3 : 5. Jika jumlah kelereng mereka 120 butir, kelereng C adalah ... butir.', '60', 'C = 5/(2 + 3 + 5) × 120 = 5/10 × 120 = 60 butir.'),
    isian('Jarak sebenarnya dua kota 15 km. Pada peta berskala 1 : 250.000, jarak kedua kota adalah ... cm.', '6', '15 km = 1.500.000 cm. Jarak peta = 1.500.000 : 250.000 = 6 cm.'),
    pg('Suatu pekerjaan dapat diselesaikan 15 orang dalam 24 hari. Agar selesai dalam 18 hari, diperlukan tambahan pekerja sebanyak ...', ['3 orang', '5 orang', '6 orang', '20 orang'], 'B', 'Berbalik nilai: 15 × 24 = 360. 360 : 18 = 20 orang. Tambahan = 20 − 15 = 5 orang.'),
    pg('Sebuah mobil memerlukan 1 liter bensin untuk menempuh 12 km. Untuk menempuh 90 km diperlukan bensin ...', ['6,5 liter', '7 liter', '7,5 liter', '8 liter'], 'C', 'Perbandingan senilai: 90 : 12 = 7,5 liter.'),
  ];
  const mtkStatistika = [
    pg('Modus dari data 6, 7, 8, 8, 9, 7, 8, 5 adalah ...', ['7', '7,5', '8', '9'], 'C', 'Modus = nilai yang paling sering muncul. Angka 8 muncul 3 kali.'),
    pg('Median dari data 6, 7, 8, 8, 9, 7, 8, 5 adalah ...', ['7', '7,25', '7,5', '8'], 'C', 'Urutkan: 5, 6, 7, 7, 8, 8, 8, 9. Dua data tengah 7 dan 8 → median = (7 + 8)/2 = 7,5.'),
    pg('Nilai rata-rata 30 siswa adalah 70. Nilai rata-rata 10 siswa lain adalah 80. Nilai rata-rata gabungan seluruh siswa adalah ...', ['72', '72,5', '75', '77,5'], 'B', '(30 × 70 + 10 × 80) : 40 = (2.100 + 800) : 40 = 2.900 : 40 = 72,5.'),
    isian('Jangkauan dari data 4, 9, 12, 7, 15 adalah ...', '11', 'Jangkauan = data terbesar − data terkecil = 15 − 4 = 11.'),
    pg('Sebuah dadu dilempar sekali. Peluang muncul mata dadu bilangan prima adalah ...', ['1/6', '1/3', '1/2', '2/3'], 'C', 'Bilangan prima pada dadu: 2, 3, 5 → 3 dari 6 = 1/2.'),
    pg('Dua keping uang logam dilempar bersamaan. Peluang muncul keduanya angka adalah ...', ['1/4', '1/3', '1/2', '3/4'], 'A', 'Ruang sampel: AA, AG, GA, GG (4 kemungkinan). Keduanya angka hanya 1 → 1/4.'),
    pg('Dalam kantong terdapat 5 kelereng merah, 3 biru, dan 2 hijau. Jika diambil satu kelereng secara acak, peluang terambil kelereng biru adalah ...', ['1/3', '3/10', '3/7', '1/5'], 'B', 'Peluang = 3/(5 + 3 + 2) = 3/10.'),
    isian('Sebuah dadu dilempar 60 kali. Frekuensi harapan muncul mata dadu ganjil adalah ... kali.', '30', 'P(ganjil) = 3/6 = 1/2. Frekuensi harapan = 1/2 × 60 = 30 kali.'),
  ];

  // ======================= SAINS =======================
  const snsMakhluk = [
    pg('Bagian sel yang dimiliki sel tumbuhan tetapi tidak dimiliki sel hewan adalah ...', ['mitokondria', 'dinding sel', 'ribosom', 'inti sel'], 'B', 'Sel tumbuhan memiliki dinding sel dan kloroplas yang tidak dimiliki sel hewan.'),
    pg('Hasil fotosintesis adalah ...', ['karbon dioksida dan air', 'glukosa dan oksigen', 'oksigen dan air', 'glukosa dan karbon dioksida'], 'B', '6CO₂ + 6H₂O + cahaya → C₆H₁₂O₆ (glukosa) + 6O₂.'),
    pg('Fotosintesis berlangsung di organel ...', ['mitokondria', 'vakuola', 'kloroplas', 'ribosom'], 'C', 'Kloroplas mengandung klorofil yang menangkap energi cahaya.'),
    pg('Hewan vertebrata berdarah dingin yang saat dewasa bernapas dengan paru-paru dan kulit adalah ...', ['ikan', 'amfibi', 'reptil', 'burung'], 'B', 'Amfibi (misalnya katak) bernapas dengan insang saat berudu, lalu paru-paru dan kulit saat dewasa.'),
    pg('Urutan metamorfosis sempurna yang benar adalah ...', ['telur → nimfa → imago', 'telur → larva → pupa → imago', 'telur → pupa → larva → imago', 'larva → telur → pupa → imago'], 'B', 'Metamorfosis sempurna (misalnya kupu-kupu): telur → larva (ulat) → pupa (kepompong) → imago.'),
    pg('Tingkatan takson paling rendah dalam klasifikasi makhluk hidup adalah ...', ['kingdom', 'genus', 'famili', 'spesies'], 'D', 'Urutan takson: kingdom → filum/divisi → kelas → ordo → famili → genus → spesies.'),
    pg('Sistem penamaan ilmiah dengan dua kata (binomial nomenklatur) dicetuskan oleh ...', ['Gregor Mendel', 'Charles Darwin', 'Carolus Linnaeus', 'Robert Hooke'], 'C', 'Carolus Linnaeus memperkenalkan binomial nomenklatur, misalnya Oryza sativa (padi).'),
  ];
  const snsTubuh = [
    pg('Enzim di dalam mulut yang berfungsi mengubah amilum menjadi gula adalah ...', ['pepsin', 'ptialin (amilase)', 'lipase', 'tripsin'], 'B', 'Ptialin (amilase ludah) mengubah amilum menjadi maltosa.'),
    pg('Penyerapan sari-sari makanan terutama terjadi di ...', ['lambung', 'usus halus', 'usus besar', 'kerongkongan'], 'B', 'Dinding usus halus memiliki vili (jonjot) yang menyerap sari makanan.'),
    pg('Pertukaran oksigen dan karbon dioksida di paru-paru terjadi di ...', ['trakea', 'bronkus', 'alveolus', 'laring'], 'C', 'Alveolus (gelembung paru-paru) dikelilingi kapiler darah tempat pertukaran gas.'),
    pg('Pembuluh darah terbesar yang membawa darah kaya oksigen dari jantung ke seluruh tubuh adalah ...', ['vena kava', 'aorta', 'vena pulmonalis', 'kapiler'], 'B', 'Aorta keluar dari bilik kiri jantung dan mengalirkan darah ke seluruh tubuh.'),
    pg('Sel darah yang berperan dalam proses pembekuan darah adalah ...', ['eritrosit', 'leukosit', 'trombosit', 'plasma'], 'C', 'Trombosit (keping darah) berperan dalam pembekuan darah saat terjadi luka.'),
    pg('Kekurangan vitamin C dapat menyebabkan penyakit ...', ['rabun senja', 'sariawan/skorbut', 'rakitis', 'beri-beri'], 'B', 'Vitamin C: skorbut/sariawan. Vitamin A: rabun senja. Vitamin D: rakitis. Vitamin B1: beri-beri.'),
    pg('Kekurangan zat besi dalam tubuh dapat menyebabkan ...', ['anemia', 'gondok', 'diabetes', 'osteoporosis'], 'A', 'Zat besi dibutuhkan untuk membentuk hemoglobin; kekurangannya menyebabkan anemia.'),
  ];
  const snsEkologi = [
    pg('Pada rantai makanan: padi → tikus → ular → elang, yang berperan sebagai konsumen tingkat I adalah ...', ['padi', 'tikus', 'ular', 'elang'], 'B', 'Padi = produsen, tikus = konsumen I, ular = konsumen II, elang = konsumen III.'),
    pg('Hubungan antara benalu dan pohon inangnya disebut simbiosis ...', ['mutualisme', 'komensalisme', 'parasitisme', 'netralisme'], 'C', 'Benalu mengambil air dan mineral dari inang sehingga merugikan inang → parasitisme.'),
    pg('Anggrek yang menempel pada pohon mangga merupakan contoh simbiosis ...', ['mutualisme', 'komensalisme', 'parasitisme', 'amensalisme'], 'B', 'Anggrek untung (mendapat tempat dan cahaya), pohon mangga tidak dirugikan → komensalisme.'),
    pg('Kumpulan makhluk hidup sejenis yang menempati suatu daerah tertentu disebut ...', ['individu', 'populasi', 'komunitas', 'ekosistem'], 'B', 'Populasi = kumpulan individu sejenis; komunitas = kumpulan berbagai populasi.'),
    pg('Organisme yang berperan sebagai pengurai adalah ...', ['rumput dan lumut', 'bakteri dan jamur', 'cacing dan belalang', 'burung dan ikan'], 'B', 'Bakteri dan jamur menguraikan sisa makhluk hidup menjadi zat anorganik.'),
    pg('Gas utama penyebab efek rumah kaca adalah ...', ['oksigen', 'nitrogen', 'karbon dioksida', 'hidrogen'], 'C', 'CO₂ menahan panas di atmosfer sehingga meningkatkan suhu bumi (pemanasan global).'),
    pg('Hujan asam terutama disebabkan oleh gas ...', ['O₂ dan N₂', 'SO₂ dan NOₓ', 'CO₂ dan O₂', 'He dan Ar'], 'B', 'Sulfur dioksida dan nitrogen oksida bereaksi dengan air hujan membentuk asam.'),
    pg('Pada piramida energi, jumlah energi dari satu tingkat trofik ke tingkat berikutnya akan ...', ['bertambah', 'tetap', 'berkurang', 'berlipat ganda'], 'C', 'Hanya sekitar 10% energi yang diteruskan ke tingkat trofik berikutnya; sisanya hilang sebagai panas.'),
  ];
  const snsGenetika = [
    pg('Faktor pembawa sifat keturunan yang terdapat di dalam kromosom disebut ...', ['gen', 'sel', 'enzim', 'hormon'], 'A', 'Gen adalah unit pembawa sifat keturunan yang terletak pada lokus kromosom.'),
    pg('Tokoh yang dikenal sebagai Bapak Genetika adalah ...', ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Carolus Linnaeus'], 'B', 'Gregor Mendel melakukan percobaan persilangan kacang ercis dan menemukan hukum pewarisan sifat.'),
    pg('Persilangan tanaman kacang ercis batang tinggi (Tt) dengan sesamanya (Tt) menghasilkan perbandingan fenotipe ...', ['1 : 1', '1 : 2 : 1', '3 : 1', '9 : 3 : 3 : 1'], 'C', 'Tt × Tt → TT, Tt, Tt, tt. Tinggi (TT, Tt, Tt) : pendek (tt) = 3 : 1.'),
    pg('Perbandingan genotipe dari persilangan Tt × Tt adalah ...', ['TT : Tt : tt = 1 : 2 : 1', 'TT : tt = 3 : 1', 'Tt : tt = 1 : 1', 'TT : Tt = 1 : 1'], 'A', 'Hasil persilangan: 1 TT, 2 Tt, 1 tt.'),
    pg('Persilangan Tt (tinggi) dengan tt (pendek) menghasilkan keturunan pendek sebanyak ...', ['0%', '25%', '50%', '75%'], 'C', 'Tt × tt → Tt, Tt, tt, tt. Pendek (tt) = 2/4 = 50%.'),
    isian('Jumlah kromosom pada sel tubuh (somatis) manusia normal adalah ... buah.', '46|empat puluh enam', 'Sel tubuh manusia memiliki 46 kromosom (23 pasang); sel kelamin memiliki 23 kromosom.'),
  ];
  const snsBioteknologi = [
    pg('Mikroorganisme yang digunakan dalam pembuatan tempe adalah ...', ['Saccharomyces cerevisiae', 'Rhizopus oryzae', 'Lactobacillus bulgaricus', 'Acetobacter xylinum'], 'B', 'Tempe dibuat dengan jamur Rhizopus (misalnya Rhizopus oryzae/oligosporus).'),
    pg('Bakteri yang digunakan dalam pembuatan yoghurt adalah ...', ['Lactobacillus bulgaricus', 'Rhizopus oryzae', 'Aspergillus oryzae', 'Acetobacter xylinum'], 'A', 'Yoghurt dibuat dengan Lactobacillus bulgaricus dan Streptococcus thermophilus.'),
    pg('Ragi yang digunakan untuk membuat roti dan tapai adalah ...', ['Saccharomyces cerevisiae', 'Penicillium notatum', 'Rhizopus oryzae', 'Escherichia coli'], 'A', 'Saccharomyces cerevisiae memfermentasi gula menghasilkan CO₂ (roti mengembang) dan alkohol.'),
    pg('Berikut ini yang merupakan produk bioteknologi modern adalah ...', ['tempe', 'kecap', 'insulin dari bakteri hasil rekayasa genetika', 'tapai'], 'C', 'Bioteknologi modern memanfaatkan rekayasa genetika, misalnya produksi insulin oleh bakteri E. coli.'),
    pg('Teknik kultur jaringan memanfaatkan kemampuan sel tumbuhan untuk tumbuh menjadi individu baru. Sifat ini disebut ...', ['totipotensi', 'mutasi', 'adaptasi', 'fermentasi'], 'A', 'Totipotensi adalah kemampuan setiap sel tumbuhan untuk tumbuh menjadi tumbuhan utuh.'),
    pg('Nata de coco dibuat dengan bantuan bakteri ...', ['Lactobacillus casei', 'Acetobacter xylinum', 'Rhizopus stolonifer', 'Streptococcus lactis'], 'B', 'Acetobacter xylinum mengubah gula dalam air kelapa menjadi selulosa (nata).'),
  ];
  const snsZat = [
    pg('Perhatikan peristiwa berikut. Peristiwa yang termasuk perubahan kimia adalah ...', ['es mencair', 'besi berkarat', 'gula larut dalam air', 'kaca pecah'], 'B', 'Besi berkarat menghasilkan zat baru (karat/oksida besi) → perubahan kimia.'),
    pg('Berikut ini yang termasuk senyawa adalah ...', ['udara', 'air (H₂O)', 'emas (Au)', 'oksigen (O₂)'], 'B', 'Senyawa tersusun atas dua atau lebih unsur berbeda (H dan O). Udara adalah campuran; Au dan O₂ adalah unsur.'),
    pg('Metode pemisahan campuran yang tepat untuk memisahkan komponen warna pada tinta adalah ...', ['filtrasi', 'distilasi', 'kromatografi', 'sublimasi'], 'C', 'Kromatografi memisahkan zat berdasarkan perbedaan kecepatan rambat pada media (misalnya kertas).'),
    pg('Larutan asam memiliki ciri ...', ['pH lebih dari 7 dan mengubah lakmus merah menjadi biru', 'pH kurang dari 7 dan mengubah lakmus biru menjadi merah', 'pH sama dengan 7', 'terasa licin dan pahit'], 'B', 'Asam: pH < 7, rasa masam, mengubah lakmus biru menjadi merah.'),
    isian('Sebuah benda bermassa 300 g dan bervolume 250 cm³. Massa jenisnya adalah ... g/cm³.', '1,2|1.2', 'ρ = m/V = 300/250 = 1,2 g/cm³.'),
    pg('Lambang unsur natrium adalah ...', ['N', 'Na', 'Ne', 'Ni'], 'B', 'Natrium berlambang Na (dari bahasa Latin natrium). N = nitrogen, Ne = neon, Ni = nikel.'),
  ];
  const snsEnergi = [
    isian('Sebuah gaya 20 N digunakan untuk memindahkan benda sejauh 5 m searah gaya. Usaha yang dilakukan adalah ... joule.', '100', 'W = F × s = 20 × 5 = 100 J.'),
    pg('Sebuah bola bermassa 2 kg bergerak dengan kecepatan 3 m/s. Energi kinetiknya adalah ...', ['3 J', '6 J', '9 J', '18 J'], 'C', 'Ek = ½mv² = ½ × 2 × 3² = 9 J.'),
    pg('Buah kelapa bermassa 5 kg berada pada ketinggian 4 m. Jika g = 10 m/s², energi potensialnya adalah ...', ['20 J', '50 J', '200 J', '400 J'], 'C', 'Ep = mgh = 5 × 10 × 4 = 200 J.'),
    pg('Sebuah gaya 60 N bekerja pada bidang seluas 0,3 m². Tekanan yang dihasilkan adalah ...', ['18 N/m²', '20 N/m²', '180 N/m²', '200 N/m²'], 'D', 'P = F/A = 60/0,3 = 200 N/m² (pascal).'),
    pg('Kecepatan 108 km/jam sama dengan ...', ['10 m/s', '18 m/s', '30 m/s', '108 m/s'], 'C', '108 km/jam = 108.000 m / 3.600 s = 30 m/s.'),
    pg('Peristiwa roket meluncur ke atas karena semburan gas ke bawah merupakan penerapan ...', ['Hukum I Newton', 'Hukum II Newton', 'Hukum III Newton', 'Hukum Pascal'], 'C', 'Hukum III Newton (aksi-reaksi): gas didorong ke bawah (aksi), roket terdorong ke atas (reaksi).'),
  ];
  const snsMetode = [
    pg('Seorang siswa menyelidiki pengaruh intensitas cahaya terhadap jumlah gelembung oksigen yang dihasilkan tanaman Hydrilla. Variabel terikat pada percobaan ini adalah ...', ['intensitas cahaya', 'jumlah gelembung oksigen', 'jenis tanaman', 'volume air'], 'B', 'Variabel terikat adalah yang diamati/diukur sebagai hasil: jumlah gelembung oksigen.'),
    pg('Pada percobaan di atas (intensitas cahaya dan tanaman Hydrilla), jenis tanaman dan volume air dibuat sama. Keduanya disebut variabel ...', ['bebas', 'terikat', 'kontrol', 'manipulasi'], 'C', 'Variabel kontrol dibuat tetap agar tidak memengaruhi hasil percobaan.'),
    pg('Langkah metode ilmiah setelah merumuskan hipotesis adalah ...', ['merumuskan masalah', 'melakukan eksperimen', 'menarik kesimpulan', 'melakukan pengamatan awal'], 'B', 'Urutan: masalah → hipotesis → eksperimen → analisis data → kesimpulan.'),
    pg('Pernyataan yang merupakan hipotesis adalah ...', ['Apakah pupuk memengaruhi tinggi tanaman?', 'Jika diberi pupuk, tanaman akan tumbuh lebih tinggi.', 'Tanaman diberi pupuk 10 gram.', 'Tinggi tanaman diukur setiap hari.'], 'B', 'Hipotesis adalah dugaan sementara yang dapat diuji, sering ditulis dengan pola "jika ..., maka ...".'),
  ];

  // ======================= BAHASA INGGRIS =======================
  const TEKS_KOMODO = 'Read the text.\n\n"Komodo dragons are the largest lizards in the world. They live on several islands in East Nusa Tenggara, such as Komodo, Rinca, and Flores. An adult komodo can grow up to 3 meters long and weigh about 70 kilograms. Komodos are carnivores. They eat deer, pigs, and even buffalo. Their saliva contains dangerous bacteria and venom."\n\n';
  const TEKS_HABIBIE = 'Read the text.\n\n"Bacharuddin Jusuf Habibie was born in Parepare, South Sulawesi, on June 25, 1936. After finishing high school, he studied aeronautical engineering in Germany. He worked in the aircraft industry there for many years. In 1998, he became the third President of Indonesia. Because of his work in aircraft technology, he is known as the Father of Technology. He passed away on September 11, 2019."\n\n';
  const TEKS_DATA = 'Read the data.\n\nFavorite sports of Class 7A:\n• Football: 12 students\n• Badminton: 8 students\n• Volleyball: 6 students\n• Basketball: 4 students\n\n';
  const TEKS_PENGUMUMAN = 'Read the text.\n\n"ANNOUNCEMENT\nTo all students,\nThere will be a School Clean-Up Day on Saturday, October 17, 2026, at 7 a.m. Every student must bring a broom and a trash bag. After cleaning, we will plant trees together in the school garden.\nThe Principal"\n\n';
  const TEKS_UNDANGAN = 'Read the text.\n\n"Dear Andi,\nPlease come to my birthday party on Sunday, November 1, 2026, at 4 p.m. at my house, Jl. Pejanggik No. 10, Mataram. Don\'t forget to wear a blue shirt!\nYour friend,\nLina"\n\n';

  const ingVocab = [
    pg('The synonym of "huge" is ...', ['tiny', 'enormous', 'narrow', 'weak'], 'B', 'Huge = sangat besar, sinonimnya enormous.'),
    pg('The antonym of "generous" is ...', ['kind', 'rich', 'stingy', 'friendly'], 'C', 'Generous = dermawan, lawannya stingy (pelit).'),
    pg('The antonym of "ancient" is ...', ['old', 'modern', 'historic', 'antique'], 'B', 'Ancient = kuno, lawannya modern.'),
    pg('"We should protect endangered animals." The synonym of the word "protect" is ...', ['hunt', 'guard', 'sell', 'ignore'], 'B', 'Protect = melindungi, sinonimnya guard.'),
    pg('"She sings beautifully." The word "beautifully" is a/an ...', ['noun', 'verb', 'adjective', 'adverb'], 'D', 'Beautifully menerangkan cara bernyanyi (kata kerja), jadi adverb (kata keterangan).'),
    pg('"The happiness of the children made the teacher smile." The word "happiness" is a/an ...', ['noun', 'verb', 'adjective', 'adverb'], 'A', 'Akhiran -ness membentuk kata benda (noun): happy → happiness.'),
    pg('"The bank of the river was covered with green grass." The word "bank" in the sentence means ...', ['a place to save money', 'the land along the side of a river', 'a type of boat', 'a large building'], 'B', 'Dalam konteks sungai, "bank" berarti tepi sungai.'),
    pg('"My uncle runs a small restaurant in Mataram." The word "runs" means ...', ['jogs', 'manages', 'escapes', 'moves quickly'], 'B', 'Run a restaurant = mengelola/menjalankan restoran (manages).'),
  ];
  const ingGrammar = [
    pg('The English test will be held ... Monday morning.', ['in', 'at', 'on', 'for'], 'C', 'Gunakan "on" untuk hari dan tanggal: on Monday.'),
    pg('I was born ... 2013.', ['in', 'on', 'at', 'since'], 'A', 'Gunakan "in" untuk tahun, bulan, dan musim: in 2013.'),
    pg('She has lived in Lombok ... 2020.', ['for', 'since', 'during', 'at'], 'B', '"Since" diikuti titik waktu awal (2020); "for" diikuti lamanya waktu (for 6 years).'),
    pg('The cat is sleeping ... the table, so we can\'t see it from above.', ['under', 'on', 'above', 'over'], 'A', 'Kucing tidak terlihat dari atas karena berada di bawah meja: under.'),
    isian('Yesterday, I ... (visit) my grandmother in Praya.', 'visited', 'Yesterday → simple past: visit + ed = visited.'),
    isian('She ... (write) a letter to her friend last night.', 'wrote', 'Last night → simple past. Write adalah kata kerja tidak beraturan: write – wrote – written.'),
    pg('When the phone rang, I ... a bath.', ['take', 'was taking', 'have taken', 'am taking'], 'B', 'Kegiatan yang sedang berlangsung di masa lampau lalu disela kejadian lain → past continuous (was taking).'),
    pg('They ... football at 4 p.m. yesterday.', ['play', 'are playing', 'were playing', 'have played'], 'C', 'Kegiatan yang sedang berlangsung pada waktu tertentu di masa lampau → past continuous: were playing.'),
    pg('By the time we arrived at the cinema, the movie ...', ['starts', 'has started', 'had started', 'is starting'], 'C', 'Kejadian yang selesai sebelum kejadian lampau lain → past perfect: had started.'),
    pg('You ... wear a helmet when you ride a motorcycle. It is the rule.', ['must', 'might', 'may', 'could'], 'A', '"Must" menyatakan keharusan/kewajiban.'),
    pg('If it rains tomorrow, we ... at home.', ['stay', 'will stay', 'would stay', 'would have stayed'], 'B', 'Conditional type 1 (mungkin terjadi): If + present, will + V1.'),
    pg('If I were a bird, I ... fly to the sky.', ['will', 'can', 'would', 'shall'], 'C', 'Conditional type 2 (pengandaian yang tidak nyata saat ini): If + past (were), would + V1.'),
    pg('If she had studied harder, she ... the exam.', ['will pass', 'would pass', 'would have passed', 'passes'], 'C', 'Conditional type 3 (pengandaian masa lampau): If + had + V3, would have + V3.'),
    pg('Mount Everest is the ... mountain in the world.', ['high', 'higher', 'highest', 'more high'], 'C', 'Membandingkan dengan semua (in the world) → superlative: the highest.'),
    pg('This novel is ... than the one I read last week.', ['interesting', 'more interesting', 'most interesting', 'interestinger'], 'B', 'Kata sifat panjang (3 suku kata atau lebih) → more + adjective + than.'),
    pg('Rina is as tall ... Sari.', ['than', 'as', 'so', 'like'], 'B', 'Perbandingan setara: as + adjective + as.'),
    pg('Today is the ... day of my life!', ['good', 'better', 'best', 'goodest'], 'C', 'Good – better – best (tidak beraturan). Superlative: the best.'),
  ];
  const ingEkspresi = [
    pg('Dina: "I won the first prize in the speech contest!"\nRudi: "..."', ['I\'m sorry to hear that.', 'Congratulations! You deserve it.', 'Never mind.', 'Get well soon.'], 'B', 'Untuk kabar gembira, ucapkan selamat: Congratulations!'),
    pg('Andi: "My grandfather is in the hospital."\nBudi: "..."', ['Congratulations!', 'That\'s great!', 'I\'m sorry to hear that. I hope he gets better soon.', 'You\'re welcome.'], 'C', 'Ungkapan simpati (sympathy) untuk kabar sedih: I\'m sorry to hear that.'),
    pg('Which expression is used to ask for someone\'s opinion?', ['What do you think about the new library?', 'Can you lend me your pen?', 'Thank you very much.', 'Would you like some tea?'], 'A', '"What do you think about ...?" digunakan untuk menanyakan pendapat.'),
    pg('"Could you help me carry these books, please?"\nThe speaker is ...', ['giving advice', 'asking for help', 'offering something', 'apologizing'], 'B', '"Could you help me ...?" adalah ungkapan meminta bantuan.'),
    pg('Siti: "Thank you for helping me with my homework."\nAni: "..."', ['You\'re welcome.', 'Same to you.', 'I\'m sorry.', 'Congratulations.'], 'A', 'Respons untuk ucapan terima kasih: You\'re welcome / My pleasure.'),
  ];
  const ingReading = [
    pg(TEKS_KOMODO + 'Where do komodo dragons live?', ['In West Java', 'In East Nusa Tenggara', 'In North Sumatra', 'In Papua'], 'B', 'Kalimat kedua: "They live on several islands in East Nusa Tenggara".'),
    pg(TEKS_KOMODO + 'Komodos are carnivores. It means they ...', ['eat plants only', 'eat meat', 'eat plants and meat', 'do not eat'], 'B', 'Carnivore = pemakan daging. Buktinya: they eat deer, pigs, and even buffalo.'),
    pg(TEKS_KOMODO + 'What type of text is it?', ['Recount', 'Narrative', 'Report', 'Procedure'], 'C', 'Teks menjelaskan fakta umum tentang satu jenis hewan (komodo) → report text.'),
    pg(TEKS_KOMODO + 'How heavy can an adult komodo be?', ['About 3 kilograms', 'About 30 kilograms', 'About 70 kilograms', 'About 100 kilograms'], 'C', '"An adult komodo can grow up to 3 meters long and weigh about 70 kilograms."'),
    pg(TEKS_HABIBIE + 'Where was B.J. Habibie born?', ['In Makassar', 'In Parepare', 'In Jakarta', 'In Germany'], 'B', '"...was born in Parepare, South Sulawesi..."'),
    pg(TEKS_HABIBIE + 'What did Habibie study in Germany?', ['Medicine', 'Economics', 'Aeronautical engineering', 'Law'], 'C', '"...he studied aeronautical engineering in Germany."'),
    pg(TEKS_HABIBIE + 'Why is Habibie known as the Father of Technology?', ['Because he was born in 1936', 'Because of his work in aircraft technology', 'Because he became a president', 'Because he lived in Germany'], 'B', '"Because of his work in aircraft technology, he is known as the Father of Technology."'),
    pg(TEKS_HABIBIE + 'The purpose of the text is ...', ['to describe a place', 'to retell the life story of a person', 'to explain how to make something', 'to persuade the readers'], 'B', 'Teks biografi/recount bertujuan menceritakan kembali kisah hidup seseorang.'),
    isian(TEKS_DATA + 'How many students are there in Class 7A? (write the number)', '30|thirty', '12 + 8 + 6 + 4 = 30 students.'),
    pg(TEKS_DATA + 'Which sport is the least favorite?', ['Football', 'Badminton', 'Volleyball', 'Basketball'], 'D', 'Basketball dipilih paling sedikit siswa (4).'),
    isian(TEKS_DATA + 'How many more students like football than volleyball? (write the number)', '6|six', '12 − 6 = 6 students.'),
    pg('You see a sign that says "NO LITTERING". It means ...', ['Do not throw rubbish here.', 'Do not park here.', 'Do not smoke here.', 'Do not run here.'], 'A', 'Litter = membuang sampah sembarangan.'),
    pg('Where can you usually find the sign "Mind the gap"?', ['At a hospital', 'At a train station', 'In a library', 'In a classroom'], 'B', '"Mind the gap" mengingatkan penumpang akan celah antara peron dan kereta.'),
    pg('"Keep off the grass" means ...', ['Please cut the grass.', 'Do not walk on the grass.', 'Water the grass.', 'Sit on the grass.'], 'B', 'Keep off = jangan menginjak/menjauh dari rumput.'),
  ];
  const ingFungsional = [
    pg(TEKS_PENGUMUMAN + 'What will the students do after cleaning?', ['Go home', 'Plant trees', 'Have a party', 'Study in class'], 'B', '"After cleaning, we will plant trees together in the school garden."'),
    pg(TEKS_PENGUMUMAN + 'Who wrote the announcement?', ['The students', 'The teacher', 'The principal', 'The gardener'], 'C', 'Pengumuman ditutup dengan "The Principal" (kepala sekolah).'),
    pg(TEKS_PENGUMUMAN + 'What should every student bring?', ['A book and a pen', 'A broom and a trash bag', 'A plant and a shovel', 'Food and drink'], 'B', '"Every student must bring a broom and a trash bag."'),
    pg(TEKS_UNDANGAN + 'What is the purpose of the text?', ['To invite Andi to a birthday party', 'To thank Andi', 'To ask Andi to buy a shirt', 'To tell Andi about Mataram'], 'A', 'Teks tersebut adalah undangan (invitation) ke pesta ulang tahun.'),
    pg(TEKS_UNDANGAN + 'What should Andi wear to the party?', ['A red shirt', 'A white shirt', 'A blue shirt', 'A school uniform'], 'C', '"Don\'t forget to wear a blue shirt!"'),
    pg('"Happy Eid al-Fitr! Wishing you and your family peace and happiness." This text is a/an ...', ['announcement', 'invitation', 'greeting card', 'recipe'], 'C', 'Ucapan selamat hari raya adalah greeting card.'),
  ];

  const simulasi = (...kelompok) => [].concat(...kelompok);

  window.BANK_SOAL.push(
    {
      mapel: 'KMSI 2026 · Matematika (Level 4)',
      kategori: 'lomba',
      ikon: '🧮',
      topik: [
        { nama: 'Simulasi Penyisihan Matematika', kelas: 'Level 4', soalPerSesi: 25, materi: `Simulasi ini mengambil **25 soal acak** dari semua indikator kisi-kisi KMSI 2026 Level 4:

- Operasi bilangan dan teori bilangan
- Bangun datar dan bangun ruang
- Persamaan, pola, dan barisan
- Aritmetika sosial dan perbandingan
- Statistika dan peluang

Tips: kerjakan soal yang mudah dulu, tandai soal sulit, dan kembali lagi di akhir.`, soal: simulasi(mtkBilangan, mtkBangun, mtkAljabar, mtkSosial, mtkStatistika) },
        { nama: 'Operasi Bilangan dan Teori Bilangan', kelas: 'Level 4', materi: `**Kisi-kisi:** operasi bilangan, teori bilangan.

- Urutan operasi: kurung → pangkat/akar → kali/bagi (kiri ke kanan) → tambah/kurang
- Sifat pangkat: aᵐ × aⁿ = aᵐ⁺ⁿ; aᵐ : aⁿ = aᵐ⁻ⁿ
- KPK = faktor prima dengan pangkat **terbesar**; FPB = faktor prima yang sama dengan pangkat **terkecil**
- Angka satuan perpangkatan berulang (periode ≤ 4): cari sisa pembagian pangkat oleh 4
- Bilangan prima: hanya habis dibagi 1 dan dirinya sendiri (2, 3, 5, 7, 11, 13, ...)`, soal: mtkBilangan },
        { nama: 'Bangun Datar dan Bangun Ruang', kelas: 'Level 4', materi: `**Kisi-kisi:** bangun datar, bangun ruang.

- Persegi panjang: K = 2(p + l), L = p × l
- Segitiga: L = ½ × a × t; Pythagoras c² = a² + b² (tripel: 3-4-5, 6-8-10, 5-12-13)
- Trapesium: L = ½ × (a + b) × t
- Lingkaran: K = πd = 2πr, L = πr² (π = 22/7 atau 3,14)
- Jumlah sudut dalam segi-n = (n − 2) × 180°
- Kubus: V = s³, LP = 6s²
- Balok: V = p × l × t, LP = 2(pl + pt + lt)
- Tabung: V = πr²t`, soal: mtkBangun },
        { nama: 'Persamaan, Pola, dan Barisan', kelas: 'Level 4', materi: `**Kisi-kisi:** persamaan, pola dan barisan.

- Persamaan linear: pindahkan variabel ke satu ruas, konstanta ke ruas lain (tanda berubah)
- Pertidaksamaan: jika dikali/dibagi bilangan **negatif**, tanda ketidaksamaan **dibalik**
- Barisan aritmetika: Uₙ = a + (n − 1)b; Sₙ = n/2 × (2a + (n − 1)b)
- Barisan geometri: Uₙ = a × rⁿ⁻¹
- Pola persegi: n²; pola segitiga: n(n + 1)/2; Fibonacci: suku = jumlah dua suku sebelumnya`, soal: mtkAljabar },
        { nama: 'Aritmetika Sosial dan Perbandingan', kelas: 'Level 4', materi: `**Kisi-kisi:** aritmetika sosial, perbandingan.

- Untung = jual − beli; % untung = untung/beli × 100%
- Rugi = beli − jual; % rugi = rugi/beli × 100%
- Diskon: bayar = harga × (100% − diskon)
- Bunga tunggal = modal × persen × (bulan/12)
- Bruto = neto + tara
- Perbandingan senilai: a₁/b₁ = a₂/b₂; berbalik nilai: a₁ × b₁ = a₂ × b₂
- Skala = jarak peta : jarak sebenarnya (samakan satuan ke cm)`, soal: mtkSosial },
        { nama: 'Statistika dan Peluang', kelas: 'Level 4', materi: `**Kisi-kisi:** statistika dan peluang.

- Mean (rata-rata) = jumlah data : banyak data
- Rata-rata gabungan = (n₁x̄₁ + n₂x̄₂) : (n₁ + n₂)
- Median = nilai tengah setelah data **diurutkan**
- Modus = nilai yang paling sering muncul
- Jangkauan = data terbesar − data terkecil
- Peluang P(A) = banyak kejadian A : banyak ruang sampel
- Frekuensi harapan = P(A) × banyak percobaan`, soal: mtkStatistika },
      ],
    },
    {
      mapel: 'KMSI 2026 · Sains (Level 4)',
      kategori: 'lomba',
      ikon: '🔬',
      topik: [
        { nama: 'Simulasi Penyisihan Sains', kelas: 'Level 4', soalPerSesi: 25, materi: `Simulasi ini mengambil **25 soal acak** dari semua indikator kisi-kisi KMSI 2026 Level 4:

- Makhluk hidup (hewan dan tumbuhan)
- Kesehatan dan tubuh manusia
- Ekologi dan lingkungan
- Genetika dan bioteknologi
- Zat dan perubahan (fisika dan kimia)
- Energi dan gaya
- Metode ilmiah`, soal: simulasi(snsMakhluk, snsTubuh, snsEkologi, snsGenetika, snsBioteknologi, snsZat, snsEnergi, snsMetode) },
        { nama: 'Makhluk Hidup, Kesehatan, dan Tubuh Manusia', kelas: 'Level 4', materi: `**Kisi-kisi:** makhluk hidup (hewan dan tumbuhan), kesehatan dan tubuh manusia.

- Sel tumbuhan punya **dinding sel** dan **kloroplas**; sel hewan tidak
- Fotosintesis: CO₂ + H₂O + cahaya → glukosa + O₂ (di kloroplas)
- Takson: kingdom → filum → kelas → ordo → famili → genus → spesies
- Metamorfosis sempurna: telur → larva → pupa → imago
- Pencernaan: mulut (ptialin) → lambung (pepsin, HCl) → usus halus (penyerapan) → usus besar
- Pernapasan: pertukaran gas di **alveolus**
- Darah: eritrosit (angkut O₂), leukosit (imunitas), trombosit (pembekuan)
- Vitamin A (rabun senja), B1 (beri-beri), C (skorbut), D (rakitis); zat besi (anemia)`, soal: simulasi(snsMakhluk, snsTubuh) },
        { nama: 'Ekologi dan Lingkungan', kelas: 'Level 4', materi: `**Kisi-kisi:** ekologi dan lingkungan.

- Individu → populasi (sejenis) → komunitas (berbagai jenis) → ekosistem (+ lingkungan abiotik)
- Rantai makanan: produsen → konsumen I → konsumen II → ... ; pengurai: bakteri dan jamur
- Simbiosis: **mutualisme** (+,+), **komensalisme** (+,0), **parasitisme** (+,−)
- Hanya ±10% energi berpindah ke tingkat trofik berikutnya
- Efek rumah kaca: CO₂; hujan asam: SO₂ dan NOₓ`, soal: snsEkologi },
        { nama: 'Genetika dan Bioteknologi', kelas: 'Level 4', materi: `**Kisi-kisi:** genetika, bioteknologi.

- Gen terletak pada kromosom; manusia: 46 kromosom (sel tubuh), 23 (sel kelamin)
- Gregor Mendel = Bapak Genetika
- Monohibrid Tt × Tt → genotipe 1 TT : 2 Tt : 1 tt; fenotipe 3 : 1
- Tt × tt → 1 Tt : 1 tt (50% : 50%)
- **Bioteknologi konvensional**: tempe (Rhizopus), tapai/roti (Saccharomyces), yoghurt (Lactobacillus bulgaricus), nata de coco (Acetobacter xylinum), kecap (Aspergillus)
- **Bioteknologi modern**: rekayasa genetika (insulin dari bakteri), tanaman transgenik, kultur jaringan (totipotensi)`, soal: simulasi(snsGenetika, snsBioteknologi) },
        { nama: 'Zat dan Perubahannya', kelas: 'Level 4', materi: `**Kisi-kisi:** zat dan perubahan (fisika dan kimia).

- Unsur (Na, O₂, Au), senyawa (H₂O, NaCl), campuran (udara, air garam)
- Perubahan fisika: tidak ada zat baru. Perubahan kimia: terbentuk zat baru (berkarat, terbakar, membusuk)
- Pemisahan campuran: filtrasi (saring), distilasi (titik didih), kromatografi (warna tinta), sublimasi, evaporasi
- Asam: pH < 7, lakmus biru → merah. Basa: pH > 7, lakmus merah → biru
- Massa jenis ρ = m/V`, soal: snsZat },
        { nama: 'Energi, Gaya, dan Metode Ilmiah', kelas: 'Level 4', materi: `**Kisi-kisi:** energi dan gaya, metode ilmiah.

- Usaha W = F × s; Ek = ½mv²; Ep = mgh
- Tekanan P = F/A (N/m² = Pa)
- km/jam → m/s: kalikan 1000/3600 (bagi 3,6)
- Hukum Newton I (kelembaman), II (F = m × a), III (aksi = −reaksi)
- Metode ilmiah: masalah → hipotesis → eksperimen → analisis → kesimpulan
- Variabel bebas (diubah), terikat (diukur), kontrol (dibuat sama)`, soal: simulasi(snsEnergi, snsMetode) },
      ],
    },
    {
      mapel: 'KMSI 2026 · Bahasa Inggris (Level 4)',
      kategori: 'lomba',
      ikon: '🇬🇧',
      topik: [
        { nama: 'Simulasi Penyisihan Bahasa Inggris', kelas: 'Level 4', soalPerSesi: 25, materi: `This simulation takes **25 random questions** from all KMSI 2026 Level 4 indicators:

- Vocabulary, synonym, antonym, part of speech
- Prepositions, tenses, modals, conditional sentences, comparison
- Speaking expressions
- Reading: report, descriptive, biography/recount, data, public signs
- Functional texts: announcement, invitation, greeting card`, soal: simulasi(ingVocab, ingGrammar, ingEkspresi, ingReading, ingFungsional) },
        { nama: 'Vocabulary and Word Meaning', kelas: 'Level 4', materi: `**Kisi-kisi:** vocabulary, synonym, antonym; part of speech and word meaning in context.

- **Synonym** = kata yang artinya sama (big = large = huge = enormous)
- **Antonym** = kata yang artinya berlawanan (generous ↔ stingy, ancient ↔ modern)
- **Part of speech**: noun (happiness), verb (sing), adjective (beautiful), adverb (beautifully)
- Akhiran penanda: -ness/-tion/-ment (noun), -ful/-ous/-ive (adjective), -ly (adverb)
- Satu kata bisa punya banyak arti; tentukan artinya dari **konteks kalimat** (bank = bank/tepi sungai)`, soal: ingVocab },
        { nama: 'Grammar: Tenses, Modals, Conditionals, Comparison', kelas: 'Level 4', materi: `**Kisi-kisi:** prepositions; simple past, past continuous, past perfect; modals and conditional sentence; comparative and superlative.

- **Prepositions of time**: in (year/month), on (day/date), at (clock time); since (titik waktu), for (lama waktu)
- **Simple past**: S + V2 (visited, wrote)
- **Past continuous**: S + was/were + V-ing (sedang berlangsung di masa lampau)
- **Past perfect**: S + had + V3 (selesai sebelum kejadian lampau lain)
- **Modals**: must (keharusan), should (saran), can (kemampuan), may/might (kemungkinan)
- **Conditional**: Type 1 If + V1, will + V1 · Type 2 If + V2/were, would + V1 · Type 3 If + had V3, would have V3
- **Comparison**: as + adj + as · adj-er / more adj + than · the adj-est / the most adj · good-better-best`, soal: ingGrammar },
        { nama: 'Speaking Expressions and Functional Texts', kelas: 'Level 4', materi: `**Kisi-kisi:** speaking expressions; functional texts (invitation, greeting card, announcement).

- Congratulating: Congratulations! / Well done! → Thank you.
- Sympathy: I'm sorry to hear that. / I hope ... gets better soon.
- Asking opinion: What do you think about ...? → In my opinion / I think ...
- Asking for help: Could you help me ...? → Sure. / Of course.
- Thanking: Thank you. → You're welcome. / My pleasure.
- **Announcement**: informasi untuk umum (apa, kapan, di mana, siapa pembuatnya)
- **Invitation**: ajakan menghadiri acara (acara, waktu, tempat, pengundang)
- **Greeting card**: ucapan selamat (hari raya, ulang tahun, keberhasilan)`, soal: simulasi(ingEkspresi, ingFungsional) },
        { nama: 'Reading: Texts, Data, and Public Signs', kelas: 'Level 4', materi: `**Kisi-kisi:** descriptive/report text; biography/recount text; data reading; public space, environment, and general knowledge.

- **Descriptive text**: menggambarkan orang/tempat/benda **tertentu** (identification → description)
- **Report text**: menjelaskan fakta **umum** tentang suatu jenis (Komodo dragons are ...)
- **Recount/biography**: menceritakan kejadian/kisah hidup masa lampau (orientation → events → reorientation), memakai simple past
- **Data reading**: baca judul, satuan, lalu bandingkan angka (paling banyak/sedikit, selisih, jumlah)
- **Public signs**: No littering, Keep off the grass, Mind the gap, No parking, Exit

Tips: baca pertanyaan dulu, lalu cari kata kuncinya di teks.`, soal: ingReading },
      ],
    },
  );
})();
