// Matematika — berdasarkan buku "Matematika untuk SMP/MTs Kelas VII"
// (Dicky Susanto dkk., Kemendikbudristek 2022, ISBN 978-602-244-883-9).
(function () {
  const { pg, isian, tambah } = window.BUKU;
  const SUMBER = 'Buku Siswa Matematika Kelas VII';

  tambah('Matematika', '🔢', [
    {
      nama: 'Bab 1A · Bilangan Bulat dan Operasinya',
      kelas: '7', sumber: SUMBER + ', Bab 1, hlm. 1–21',
      materi: `**Bilangan bulat** terdiri atas bilangan bulat negatif, bilangan nol, dan bilangan bulat positif (hlm. 7).

- Bilangan nol dan bilangan bulat positif disebut **bilangan cacah**; bilangan bulat positif disebut juga **bilangan asli** (hlm. 8)
- Pada garis bilangan, makin ke kanan nilainya makin besar. Pada bilangan negatif, makin besar angkanya justru makin kecil nilainya: −8 < −3 (hlm. 10–11)
- Tanda negatif dipakai untuk suhu di bawah nol, kedalaman di bawah permukaan laut, utang, atau kerugian (hlm. 3, 8)
- Penjumlahan dan perkalian bilangan bulat bersifat **komutatif** (a + b = b + a) dan **asosiatif** ((a + b) + c = a + (b + c)); pengurangan dan pembagian tidak (hlm. 16, 20)
- Mengurangi bilangan negatif sama dengan menambah: −(−1) = +1 (hlm. 13)
- Perkalian/pembagian dua bilangan bertanda **sama** hasilnya positif; bertanda **berbeda** hasilnya negatif (hlm. 18–21)`,
      soal: [
        pg('Bilangan bulat terdiri atas ...', ['bilangan asli dan nol', 'bilangan bulat negatif, nol, dan bilangan bulat positif', 'bilangan pecahan dan desimal', 'bilangan cacah saja'], 'B', 'Bilangan bulat = bulat negatif, nol, dan bulat positif.', 7),
        isian('Bilangan nol dan bilangan bulat positif disebut bilangan ...', 'cacah|bilangan cacah', 'Nol dan bilangan bulat positif disebut bilangan cacah.', 8),
        pg('Bilangan bulat positif disebut juga bilangan ...', ['cacah', 'asli', 'rasional', 'prima'], 'B', 'Bilangan bulat positif (1, 2, 3, ...) disebut juga bilangan asli.', 8),
        pg('"Kapal selam menyelam di kedalaman 100 meter di bawah permukaan laut." Dalam bilangan bulat ditulis ...', ['100', '+100', '−100', '0,100'], 'C', 'Di bawah permukaan laut dinyatakan dengan bilangan negatif: −100 m.', 8),
        pg('Prediksi suhu: Oymyakon −31 °C, Titlis −14 °C, Seoul −2 °C, Tokyo 6 °C. Kota yang paling dingin adalah ...', ['Tokyo', 'Seoul', 'Titlis', 'Oymyakon'], 'D', 'Suhu terendah −31 °C, yaitu Oymyakon.', 9),
        pg('Tanda yang tepat untuk −8 ... −3 adalah ...', ['>', '<', '=', '≥'], 'B', '−8 berada di sebelah kiri −3 pada garis bilangan, jadi −8 < −3.', 10),
        pg('Pada bilangan bulat negatif, semakin besar angkanya, nilainya semakin ...', ['besar', 'kecil', 'tetap', 'positif'], 'B', 'Contoh: −14 lebih besar daripada −31.', 11),
        pg('Dalam aturan transfer pemain, "melepaskan satu pemain buruk" ditulis −(−1). Efeknya bagi performa klub adalah ...', ['performa turun', 'performa naik', 'performa tetap', 'tidak dapat ditentukan'], 'B', 'Melepas pemain buruk: −(−1) = +1, performa naik.', 13),
        pg('Sifat a + b = b + a pada penjumlahan bilangan bulat disebut sifat ...', ['asosiatif', 'distributif', 'komutatif', 'invers'], 'C', 'Pertukaran urutan tanpa mengubah hasil disebut sifat komutatif.', 16),
        pg('Sifat komutatif TIDAK berlaku pada operasi ...', ['penjumlahan', 'perkalian', 'pengurangan', 'penjumlahan dan perkalian'], 'C', 'Contoh: 5 − 3 = 2, tetapi 3 − 5 = −2.', 16),
        pg('Hasil dari (−2) × (−5) adalah ...', ['−10', '10', '−7', '7'], 'B', 'Dua bilangan negatif dikalikan hasilnya positif: 10.', 19),
        pg('Ibu Ratih meminjam Rp1.000.000,00 dan baru mengembalikan Rp750.000,00. Sisa utangnya dalam bilangan bulat adalah ...', ['Rp250.000,00', '−Rp250.000,00', '−Rp750.000,00', 'Rp1.750.000,00'], 'B', 'Utang dinyatakan negatif: −1.000.000 + 750.000 = −250.000.', 20),
        isian('Seorang YouTuber kehilangan 200 subscriber dalam 4 bulan dengan jumlah sama tiap bulan. Perubahan subscriber tiap bulan adalah ... (tulis dengan tanda)', '-50|−50', '−200 : 4 = −50 subscriber per bulan.', 21),
        pg('Tes 30 soal: benar diberi 5, salah diberi −2, tidak dijawab 0. Saka mengerjakan 25 soal dan 20 di antaranya benar. Nilai Saka adalah ...', ['100', '90', '95', '110'], 'B', '(20 × 5) + (5 × (−2)) = 100 − 10 = 90. (Mirip Latihan 1.2 no. 3)', 20),
        isian('Suhu sekarang 0 °C dan turun 3 °C setiap jam. Suhu empat jam kemudian adalah ... °C', '-12|−12', '4 × (−3) = −12 °C.', 32),
        pg('Kapal selam mencapai kedalaman 180 m di bawah permukaan laut dalam 3 jam. Posisinya setelah 1 jam adalah ...', ['60 m', '−60 m', '−180 m', '−540 m'], 'B', '−180 : 3 = −60 m.', 32),
      ],
    },
    {
      nama: 'Bab 1B · Faktor, KPK, dan FPB',
      kelas: '7', sumber: SUMBER + ', Bab 1, hlm. 22–34',
      materi: `- **Faktor** suatu bilangan adalah bilangan yang dapat membaginya habis. Faktor 12: 1, 2, 3, 4, 6, 12 (hlm. 24)
- **Pasangan faktor** bisa positif atau negatif: pasangan faktor 12 antara lain (1, 12), (−2, −6), (−3, −4) (hlm. 24)
- **Faktorisasi prima** menuliskan bilangan sebagai perkalian bilangan prima, misalnya dengan **pohon faktor**: bagi dengan bilangan prima terkecil (2), lalu 3, 5, 7, ... (hlm. 25). 12 = 2² × 3
- **FPB** = faktor persekutuan terbesar. FPB(16, 24) = 8 (hlm. 28)
- **KPK** = kelipatan persekutuan terkecil. KPK(6, 10) = 30 (hlm. 29)
- Kata kunci: "dibagi sama banyak sebanyak-banyaknya" → FPB; "bersamaan lagi" → KPK`,
      soal: [
        pg('Faktor dari 12 adalah ...', ['1, 2, 3, 4, 6, 12', '2, 4, 6, 8, 10, 12', '1, 2, 3, 4, 5, 6', '12, 24, 36'], 'A', 'Bilangan yang membagi habis 12.', 24),
        pg('Berikut yang termasuk pasangan faktor dari 12 adalah ...', ['(−2, 6)', '(3, −4)', '(−3, −4)', '(−1, 12)'], 'C', '(−3) × (−4) = 12. Pilihan lain hasilnya −12.', 24),
        pg('Faktorisasi prima dari 12 adalah ...', ['2 × 6', '3 × 4', '2² × 3', '2 × 3²'], 'C', '12 = 2 × 2 × 3 = 2² × 3.', 25),
        pg('Langkah pertama membuat pohon faktor adalah membagi bilangan dengan ...', ['bilangan ganjil terkecil', 'bilangan prima terkecil, yaitu 2', 'bilangan 1', 'bilangan terbesar'], 'B', 'Mulai dari bilangan prima terkecil, 2, lalu 3, 5, 7, dan seterusnya.', 25),
        pg('Anita punya 16 jeruk dan 24 apel yang akan dibagikan sama banyak. Banyak kerabat paling banyak yang dapat menerima buah adalah ...', ['4', '6', '8', '48'], 'C', 'FPB(16, 24) = 8.', 28),
        isian('Anita mendapat tambahan 36 mangga. Dengan 16 jeruk, 24 apel, dan 36 mangga, banyak kerabat paling banyak yang dapat menerima buah adalah ...', '4', 'FPB(16, 24, 36) = 4.', 27),
        pg('Anita berbagi makanan setiap 4 hari dan Rossa setiap 6 hari. Mereka berbagi bersama lagi setiap ... hari.', ['2', '10', '12', '24'], 'C', 'KPK(4, 6) = 12.', 27),
        pg('Anita (tiap 4 hari), Rossa (tiap 6 hari), dan Aldi (tiap 8 hari) berbagi bersama pada Senin, 8 Agustus 2022. Mereka berbagi bersama lagi pada tanggal ...', ['20 Agustus 2022', '1 September 2022', '8 September 2022', '24 Agustus 2022'], 'B', 'KPK(4, 6, 8) = 24 hari. 8 Agustus + 24 hari = 1 September 2022.', 28),
        isian('KPK dari 6 dan 10 adalah ...', '30', 'Kelipatan 6: 6, 12, 18, 24, 30. Kelipatan 10: 10, 20, 30. KPK = 30.', 29),
        isian('Klub sains beranggotakan 24 siswa perempuan dan 32 siswa laki-laki. Setiap kelompok berisi jumlah yang sama. Banyak kelompok paling banyak adalah ...', '8', 'FPB(24, 32) = 8.', 30),
        isian('Arjuna bersepeda setiap 12 hari dan berenang setiap 14 hari. Keduanya dilakukan bersamaan lagi setelah ... hari.', '84', 'KPK(12, 14) = 84.', 30),
        pg('Sasha memanggang 30 kue nastar dan 48 kue kastengel untuk dibagi ke wadah dengan isi sama sebanyak mungkin. Banyak wadah yang disiapkan adalah ...', ['3', '6', '8', '12'], 'B', 'FPB(30, 48) = 6.', 30),
        pg('Tiga bus tiba setiap 6, 10, dan 15 menit. Jika berangkat bersamaan pukul 06.30, mereka berhenti bersamaan lagi pukul ...', ['06.45', '07.00', '07.30', '08.00'], 'B', 'KPK(6, 10, 15) = 30 menit. 06.30 + 30 menit = 07.00.', 30),
        isian('Bioskop memberi minuman gratis kepada setiap pelanggan ke-25 dan popcorn kepada setiap pelanggan ke-30. Dari 1.500 pelanggan, banyak orang yang menerima keduanya adalah ...', '10', 'KPK(25, 30) = 150. 1.500 : 150 = 10 orang.', 32),
        pg('Jika dua bilangan prima berbeda, maka FPB-nya ...', ['sama dengan bilangan terbesar', 'selalu 1', 'sama dengan hasil kalinya', 'selalu 2'], 'B', 'Dua bilangan prima berbeda hanya punya faktor persekutuan 1; KPK-nya adalah hasil kali keduanya.', 30),
      ],
    },
    {
      nama: 'Bab 2 · Bilangan Rasional',
      kelas: '7', sumber: SUMBER + ', Bab 2, hlm. 35–82',
      materi: `- **Bilangan rasional** adalah bilangan yang dapat dinyatakan sebagai a/b, dengan a dan b bilangan bulat dan b ≠ 0 (hlm. 43)
- Bilangan rasional dapat ditulis dalam bentuk pecahan atau desimal; desimalnya **terbatas** (1/4 = 0,25) atau **tak terbatas berulang** (1/3 = 0,333...) (hlm. 44–45)
- Bilangan yang tidak dapat dinyatakan a/b disebut **irasional**, misalnya √2, π, dan e (hlm. 46)
- Hubungan: bilangan asli ⊂ cacah ⊂ bulat ⊂ rasional ⊂ real (hlm. 40, 47)
- Membandingkan pecahan: samakan penyebut lalu bandingkan pembilangnya, atau ubah ke desimal (hlm. 48–51)
- Menjumlahkan/mengurangkan pecahan: samakan penyebut dulu (hlm. 55–58)`,
      soal: [
        pg('Bilangan rasional adalah bilangan yang dapat dinyatakan dalam bentuk a/b dengan ...', ['a dan b bilangan asli', 'a dan b bilangan bulat, b ≠ 0', 'a bilangan bulat, b = 0', 'a dan b bilangan desimal'], 'B', 'Definisi bilangan rasional pada Eksplorasi 2.1.', 43),
        pg('Pada bentuk a/b, nilai b tidak boleh nol karena ...', ['b harus lebih besar dari a', 'pembagian dengan nol tidak terdefinisi', 'nol bukan bilangan', 'hasilnya selalu nol'], 'B', 'Tidak ada bilangan yang dikalikan 0 menghasilkan a (untuk a ≠ 0), jadi pembagian dengan nol tidak terdefinisi.', 43),
        pg('Bilangan berikut yang termasuk bilangan irasional adalah ...', ['0,4', '−1/2', '22/7', 'π'], 'D', 'π = 3,14159... desimalnya tak terbatas dan tidak berulang. 22/7 hanya pendekatan π dan merupakan bilangan rasional.', 46),
        pg('√2 = 1,414213562... termasuk bilangan ...', ['bulat', 'rasional', 'irasional', 'cacah'], 'C', 'Desimalnya tak terbatas dan tidak berulang, jadi irasional.', 46),
        pg('Bilangan −0,5 dapat ditulis dalam bentuk pecahan ...', ['−1/5', '−1/2', '−5/1', '1/2'], 'B', '−0,5 = −5/10 = −1/2.', 44),
        isian('Bentuk desimal dari 3/8 adalah ... (gunakan koma)', '0,375|0.375', '3 : 8 = 0,375 (desimal terbatas).', 44),
        pg('Bentuk desimal dari 1/3 adalah 0,333... Desimal seperti ini disebut desimal ...', ['terbatas', 'tak terbatas dan berulang', 'tak terbatas dan tidak berulang', 'bulat'], 'B', 'Angka 3 berulang terus-menerus.', 45),
        pg('Urutan himpunan bilangan dari yang terkecil cakupannya adalah ...', ['bulat – cacah – asli – rasional', 'asli – cacah – bulat – rasional', 'rasional – bulat – cacah – asli', 'cacah – asli – bulat – rasional'], 'B', 'Bilangan asli bagian dari cacah, cacah bagian dari bulat, bulat bagian dari rasional (diagram Venn).', 47),
        pg('Bilangan yang lebih besar antara 3/5 dan 3/8 adalah ...', ['3/5', '3/8', 'keduanya sama', 'tidak dapat dibandingkan'], 'A', 'Pembilang sama, penyebut lebih kecil berarti nilainya lebih besar: 3/5 = 0,6 > 3/8 = 0,375.', 48),
        pg('Suhu kota A −2,5 °C dan kota B −8,5 °C. Kota yang terasa lebih hangat adalah ...', ['kota A', 'kota B', 'sama saja', 'tidak dapat ditentukan'], 'A', '−2,5 > −8,5, jadi kota A lebih hangat. (Latihan 2.1 no. 6)', 52),
        pg('Urutan dari yang terkecil untuk 0,22; 1,5; dan 7/8 adalah ...', ['0,22; 1,5; 7/8', '7/8; 0,22; 1,5', '0,22; 7/8; 1,5', '1,5; 7/8; 0,22'], 'C', '7/8 = 0,875, jadi 0,22 < 0,875 < 1,5.', 51),
        pg('Sisa memori ponsel Adi 0,71 GB (1 GB = 1.000 MB). Aplikasi X 200 MB, Y 500 MB, Z 750 MB. Aplikasi yang TIDAK dapat dipasang adalah ...', ['X', 'Y', 'Z', 'semuanya dapat dipasang'], 'C', '0,71 GB = 710 MB, lebih kecil dari 750 MB.', 53),
        pg('Kebutuhan tepung beras untuk tiga kue adalah 1¾, 2⅓, dan ½ cangkir. Total kebutuhannya adalah ...', ['3 7/12 cangkir', '4 7/12 cangkir', '4 1/3 cangkir', '5 1/12 cangkir'], 'B', '1¾ + 2⅓ + ½ = 21/12 + 28/12 + 6/12 = 55/12 = 4 7/12 cangkir.', 55),
        pg('Kebutuhan santan 3½, 2¾, dan 1½ cangkir, sedangkan santan yang tersedia 6½ cangkir. Santan tersebut ...', ['cukup, sisa ¼ cangkir', 'kurang 1¼ cangkir', 'kurang ¾ cangkir', 'pas, tidak bersisa'], 'B', 'Kebutuhan = 7¾ cangkir; 7¾ − 6½ = 1¼ cangkir kurang.', 56),
        isian('Gantungan dinding kuat menahan 4,5 kg. Sudah digantung beban 2,75 kg dan 1,4 kg. Beban yang masih dapat digantungkan adalah ... kg', '0,35|0.35', '2,75 + 1,4 = 4,15; 4,5 − 4,15 = 0,35 kg.', 57),
      ],
    },
    {
      nama: 'Bab 3 · Rasio',
      kelas: '7', sumber: SUMBER + ', Bab 3, hlm. 83–122',
      materi: `**Rasio** adalah perbandingan dua besaran, ditulis a : b. Rasio membandingkan secara **perkalian**, sedangkan **selisih** membandingkan secara pengurangan (hlm. 83–98).

- Rasio disederhanakan seperti pecahan: 4 : 6 = 2 : 3 (hlm. 87–98)
- **Rasio ekuivalen** (senilai) menghasilkan bentuk yang **proporsional**; dua rasio yang ekuivalen membentuk **proporsi**, misalnya 2/3 = 8/12 (hlm. 99–111)
- **Faktor skala**: perbesaran atau pengecilan, misalnya panjang dan lebar sama-sama dikali 1,5 (hlm. 99–111)
- **Skala** peta/denah: skala 1 : 100 artinya 1 cm pada gambar mewakili 100 cm sebenarnya (hlm. 99–111)
- **Laju perubahan satuan**: perbandingan dua besaran berbeda satuan, misalnya harga per kg atau km per jam; berguna untuk memilih yang lebih hemat (hlm. 112–122)`,
      soal: [
        pg('Terdapat 4 gelas susu dan 6 gelas cokelat. Rasio susu terhadap cokelat dalam bentuk paling sederhana adalah ...', ['4 : 6', '2 : 3', '3 : 2', '6 : 4'], 'B', '4 : 6 dibagi 2 menjadi 2 : 3.', '87–98'),
        pg('"Umur Ani 12 tahun, umur adiknya 4 tahun. Umur Ani 3 kali umur adiknya." Perbandingan ini menggunakan ...', ['selisih', 'rasio', 'penjumlahan', 'rata-rata'], 'B', 'Perbandingan secara perkalian ("3 kali") adalah rasio. Jika "Ani 8 tahun lebih tua", itu selisih.', '83–86'),
        pg('Minuman P dibuat dari 3 takar cokelat dan 2 takar susu. Minuman Q dari 2 takar cokelat dan 3 takar susu. Rasa cokelat yang lebih kuat adalah ...', ['P', 'Q', 'sama kuat', 'tidak dapat ditentukan'], 'A', 'Rasio cokelat : susu P = 3 : 2 lebih besar daripada Q = 2 : 3.', '87–98'),
        pg('Gambar asal diubah ukurannya. Perubahan yang tetap proporsional adalah ...', ['panjang 150%, lebar 100%', 'panjang 100%, lebar 125%', 'panjang 200%, lebar 200%', 'panjang 75%, lebar 100%'], 'C', 'Proporsional jika panjang dan lebar diubah dengan faktor yang sama (rasio ekuivalen).', '99–111'),
        pg('Foto berukuran 4 cm × 6 cm diperbesar dengan faktor skala 1,5. Ukuran barunya adalah ...', ['5,5 cm × 7,5 cm', '6 cm × 9 cm', '8 cm × 12 cm', '4 cm × 9 cm'], 'B', '4 × 1,5 = 6 dan 6 × 1,5 = 9.', '99–111'),
        pg('Skala denah rumah 1 : 100 artinya ...', ['1 m pada gambar = 100 m sebenarnya', '1 cm pada gambar = 100 cm sebenarnya', '100 cm pada gambar = 1 cm sebenarnya', '1 cm pada gambar = 100 km sebenarnya'], 'B', 'Skala membandingkan ukuran gambar dengan ukuran sebenarnya dalam satuan yang sama.', '99–111'),
        isian('Pada peta berskala 1 : 250.000, jarak dua kota 4 cm. Jarak sebenarnya adalah ... km', '10', '4 × 250.000 = 1.000.000 cm = 10 km.', '99–111'),
        isian('Denah digambar dengan skala 1 : 200. Panjang kamar sebenarnya 6 m. Panjang kamar pada denah adalah ... cm', '3', '6 m = 600 cm. 600 : 200 = 3 cm.', '99–111'),
        isian('Nilai x pada proporsi 2/3 = x/12 adalah ...', '8', '2/3 = 8/12 karena pembilang dan penyebut dikali 4.', '99–111'),
        pg('Beras A: 3 kg seharga Rp36.000. Beras B: 5 kg seharga Rp55.000. Yang lebih murah per kilogram adalah ...', ['A, Rp12.000/kg', 'B, Rp11.000/kg', 'sama harganya', 'A, Rp11.000/kg'], 'B', 'Laju harga per satuan: A = 12.000/kg, B = 11.000/kg.', '112–122'),
        isian('Sebuah mobil menempuh 120 km dalam 2 jam. Lajunya adalah ... km/jam', '60', '120 : 2 = 60 km/jam (laju perubahan satuan).', '112–122'),
        pg('Kertas seri A (A0, A1, A2, A3, A4) memiliki perbandingan panjang dan lebar yang ...', ['berbeda-beda', 'sama (sebangun)', 'selalu 1 : 2', 'selalu 2 : 3'], 'B', 'Ukuran kertas seri A memiliki rasio panjang : lebar yang sama, sehingga bentuknya proporsional.', '83–86'),
      ],
    },
    {
      nama: 'Bab 4 · Bentuk Aljabar',
      kelas: '7', sumber: SUMBER + ', Bab 4, hlm. 123–158',
      materi: `Pada bentuk aljabar **1 + 3n** (hlm. 126–135):

- **Variabel**: huruf atau simbol yang menyatakan kuantitas yang berubah-ubah atau belum diketahui (n)
- **Koefisien**: bilangan pengali variabel (3)
- **Konstanta**: bilangan yang nilainya tetap (1)
- **Suku**: bilangan, variabel, atau hasil kali bilangan dan variabel yang dipisahkan oleh + atau −

Penemu aljabar adalah **Al-Khawarizmi**, yang dijuluki Bapak Aljabar (hlm. 126–135).

**Sifat distributif**: a(b + c) = ab + ac dan a(b − c) = ab − ac. Sifat ini dipakai untuk menjabarkan, misalnya 4(s + 1) = 4s + 4, dan memfaktorkan (hlm. 136–145).

**Suku sejenis** dapat dijumlahkan/dikurangkan: 5x + 7x = 12x; 15n − 2n = 13n (hlm. 136–145).`,
      soal: [
        pg('Pada bentuk aljabar 1 + 3n, koefisien dari n adalah ...', ['1', '3', 'n', '4'], 'B', 'Koefisien adalah bilangan pengali variabel.', '126–135'),
        pg('Konstanta pada bentuk aljabar 5x − 7 adalah ...', ['5', 'x', '−7', '5x'], 'C', 'Konstanta adalah bilangan yang tidak memuat variabel, termasuk tandanya.', '126–135'),
        pg('Huruf atau simbol yang menyatakan kuantitas yang berubah-ubah atau belum diketahui disebut ...', ['konstanta', 'koefisien', 'variabel', 'suku'], 'C', 'Definisi variabel.', '126–135'),
        pg('Penemu aljabar yang dijuluki Bapak Aljabar adalah ...', ['Pythagoras', 'Al-Khawarizmi', 'Euclid', 'Ibnu Sina'], 'B', 'Abu Abdullah Muhammad bin Musa Al-Khawarizmi.', '126–135'),
        pg('Hasil dari 5x + 7x adalah ...', ['12x²', '12x', '35x', '2x'], 'B', 'Suku sejenis: (5 + 7)x = 12x.', '136–145'),
        isian('Sederhanakan: 15n − 2n = ...', '13n', '(15 − 2)n = 13n.', '136–145'),
        pg('Bentuk jabaran dari 4(s + 1) adalah ...', ['4s + 1', '4s + 4', 's + 4', '5s'], 'B', 'Sifat distributif: 4 × s + 4 × 1.', '136–145'),
        pg('Bentuk faktor dari 6a + 9 adalah ...', ['6(a + 9)', '3(2a + 3)', '9(a + 1)', '3(2a + 9)'], 'B', 'Faktor umum 3: 6a + 9 = 3(2a + 3).', '136–145'),
        pg('Hasil dari 2(3x − 4) adalah ...', ['6x − 4', '6x − 8', '5x − 8', '6x + 8'], 'B', '2 × 3x − 2 × 4 = 6x − 8.', '136–145'),
        pg('Bentuk sederhana dari 3x + 2y − x + 5y adalah ...', ['2x + 7y', '4x + 7y', '2x + 3y', '9xy'], 'A', '(3x − x) + (2y + 5y) = 2x + 7y.', '136–145'),
        isian('Banyak suku pada bentuk aljabar 2x² − 3x + 5 adalah ...', '3|tiga', 'Sukunya: 2x², −3x, dan 5.', '126–135'),
        isian('Nilai dari 4n − 3 untuk n = 5 adalah ...', '17', '4 × 5 − 3 = 17.', '146–158'),
        pg('Harga sebuah pensil p rupiah dan sebuah buku b rupiah. Harga 3 pensil dan 2 buku adalah ...', ['5pb', '3p + 2b', '3b + 2p', '6pb'], 'B', 'Pemodelan dengan bentuk aljabar.', '146–158'),
        pg('Persegi panjang memiliki panjang (x + 3) cm dan lebar x cm. Kelilingnya adalah ...', ['2x + 3', '4x + 3', '4x + 6', 'x² + 3x'], 'C', 'K = 2(x + 3) + 2x = 4x + 6.', '146–158'),
      ],
    },
    {
      nama: 'Bab 5 · Kesebangunan',
      kelas: '7', sumber: SUMBER + ', Bab 5, hlm. 159–184',
      materi: `**Hubungan antarsudut** (hlm. 163–169):
- Sudut **berpelurus** jumlahnya 180° (garis lurus); sudut **berpenyiku** jumlahnya 90°
- Dua garis berpotongan membentuk sudut **bertolak belakang** yang sama besar
- Dua garis sejajar dipotong garis lain: sudut **sehadap**, **dalam berseberangan**, dan **luar berseberangan** sama besar; sudut **dalam sepihak** dan **luar sepihak** jumlahnya 180°

**Kesebangunan** (hlm. 170–184): dua bangun sebangun jika sudut-sudut yang bersesuaian sama besar **dan** sisi-sisi yang bersesuaian sebanding. Contohnya maket rumah adat Bolon dan foto yang diperbesar.`,
      soal: [
        pg('Pelurus dari sudut 65° adalah ...', ['25°', '115°', '125°', '295°'], 'B', 'Sudut berpelurus jumlahnya 180°: 180° − 65° = 115°.', '163–169'),
        isian('Penyiku dari sudut 40° adalah ...°', '50', 'Sudut berpenyiku jumlahnya 90°: 90° − 40° = 50°.', '163–169'),
        pg('Dua garis berpotongan membentuk sudut-sudut bertolak belakang yang ...', ['jumlahnya 90°', 'jumlahnya 180°', 'sama besar', 'selalu siku-siku'], 'C', 'Sudut bertolak belakang sama besar.', '163–169'),
        pg('Dua garis sejajar dipotong oleh garis lain. Pasangan sudut sehadap besarnya ...', ['sama besar', 'jumlahnya 90°', 'jumlahnya 180°', 'selisihnya 90°'], 'A', 'Sudut sehadap sama besar.', '163–169'),
        pg('Pada dua garis sejajar yang dipotong garis lain, sudut dalam sepihak jumlahnya ...', ['90°', '180°', '270°', '360°'], 'B', 'Sudut dalam sepihak saling berpelurus.', '163–169'),
        pg('Pada dua garis sejajar yang dipotong garis lain, salah satu sudut dalam berseberangan 70°. Pasangan sudut dalam berseberangannya adalah ...', ['20°', '70°', '110°', '140°'], 'B', 'Sudut dalam berseberangan sama besar.', '163–169'),
        isian('Dua sudut segitiga besarnya 50° dan 60°. Besar sudut ketiga adalah ...°', '70', 'Jumlah sudut segitiga 180°: 180° − 110° = 70°.', '163–169'),
        pg('Dua bangun dikatakan sebangun jika ...', ['kelilingnya sama', 'luasnya sama', 'sudut-sudut bersesuaian sama besar dan sisi-sisi bersesuaian sebanding', 'hanya sisi-sisinya sama panjang'], 'C', 'Syarat kesebangunan.', '170–174'),
        pg('Persegi panjang berikut yang sebangun dengan persegi panjang 2 × 3 adalah ...', ['3 × 4', '4 × 5', '4 × 6', '5 × 6'], 'C', '4 : 2 = 6 : 3 = 2, sisi-sisinya sebanding.', '170–174'),
        isian('Segitiga bersisi 3 cm, 4 cm, 5 cm sebangun dengan segitiga bersisi 6 cm, 8 cm, dan x cm. Nilai x adalah ...', '10', 'Faktor skala 2, jadi x = 5 × 2 = 10.', '175–184'),
        isian('Tongkat setinggi 1,5 m memiliki bayangan 2 m. Pada saat yang sama, bayangan sebuah pohon 8 m. Tinggi pohon adalah ... m', '6', 'Segitiga sebangun: 1,5/2 = t/8, sehingga t = 6 m.', '175–184'),
        pg('Maket rumah adat Bolon yang dibuat mirip bentuk aslinya dalam ukuran kecil merupakan contoh ...', ['kekongruenan', 'kesebangunan', 'simetri putar', 'pencerminan'], 'B', 'Maket sebangun dengan bangunan aslinya.', '159–162'),
      ],
    },
    {
      nama: 'Bab 6 · Data dan Diagram',
      kelas: '7', sumber: SUMBER + ', Bab 6, hlm. 185–226',
      materi: `**Jenis data** (hlm. 194–199):
- **Data numerik**: selalu berbentuk angka, misalnya tinggi badan, panjang nama, jumlah medali, jumlah gol, suhu badan
- **Data kategorik**: berbentuk kualitatif (bukan bilangan), misalnya warna kesukaan, jenis olahraga, merek

**Penyajian data** (hlm. 200–226): line plot, tabel frekuensi, diagram batang, diagram garis, dan diagram lingkaran.
- **Diagram batang**: tinggi batang menunjukkan frekuensi tiap kategori
- **Diagram garis**: cocok untuk perubahan dari waktu ke waktu
- **Diagram lingkaran**: menunjukkan bagian dari keseluruhan; sudut pusat total **360°**. Persentase = (sudut : 360°) × 100% (hlm. 214–218)`,
      soal: [
        pg('Berikut yang termasuk data numerik adalah ...', ['warna kesukaan', 'jenis olahraga favorit', 'tinggi badan', 'nama sekolah'], 'C', 'Data numerik selalu berbentuk angka.', '194–199'),
        pg('Berikut yang termasuk data kategorik adalah ...', ['suhu badan', 'jumlah gol', 'buah kesukaan', 'panjang nama'], 'C', 'Data kategorik berbentuk kualitatif, bukan bilangan.', '194–199'),
        pg('Banyaknya huruf dalam nama siswa kelas 7A termasuk data ...', ['kategorik', 'numerik', 'kualitatif', 'bukan data'], 'B', 'Panjang nama berupa angka, jadi numerik.', '194–199'),
        pg('Besar sudut pusat seluruh lingkaran pada diagram lingkaran adalah ...', ['90°', '180°', '270°', '360°'], 'D', 'Satu putaran penuh = 360°.', '214–218'),
        pg('Pada diagram lingkaran kapasitas hard disk, bagian "terpakai" bersudut 216°. Persentasenya adalah ...', ['40%', '54%', '60%', '72%'], 'C', '216/360 × 100% = 60%.', '214–218'),
        isian('Sudut bagian "tidak terpakai" pada diagram yang sama adalah 144°. Persentasenya adalah ...%', '40', '144/360 × 100% = 40%.', '214–218'),
        isian('Dari 40 siswa, 10 siswa menyukai sepak bola. Besar sudut juring sepak bola pada diagram lingkaran adalah ...°', '90', '10/40 × 360° = 90°.', '214–218'),
        pg('Diagram yang paling tepat untuk menunjukkan perubahan suhu setiap jam adalah ...', ['diagram lingkaran', 'diagram garis', 'diagram Venn', 'pohon faktor'], 'B', 'Diagram garis cocok untuk data yang berubah dari waktu ke waktu.', '219–226'),
        pg('Diagram yang paling tepat untuk menunjukkan persentase bagian dari keseluruhan adalah ...', ['diagram lingkaran', 'diagram garis', 'line plot', 'tabel frekuensi'], 'A', 'Diagram lingkaran memperlihatkan bagian dari keseluruhan.', '219–226'),
        pg('Pada diagram batang, tinggi batang menunjukkan ...', ['nama kategori', 'frekuensi atau banyaknya data', 'warna data', 'urutan waktu'], 'B', 'Makin tinggi batang, makin besar frekuensinya.', '207–213'),
        isian('Pengguna media sosial di Indonesia naik dari 160 juta (Januari 2020) menjadi 170 juta (Januari 2021). Kenaikannya adalah ... juta', '10', '170 − 160 = 10 juta.', '189–193'),
      ],
    },
  ]);
})();
