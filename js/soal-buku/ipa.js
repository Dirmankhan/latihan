// IPA — berdasarkan buku "Ilmu Pengetahuan Alam untuk SMP/MTs Kelas VII (Edisi Revisi)"
// (Victoriani Inabuy dkk., Kemendikbudristek 2023, ISBN 978-623-118-457-3).
(function () {
  const { pg, isian, tambah } = window.BUKU;
  const S = 'Buku Siswa IPA Kelas VII (Edisi Revisi)';

  tambah('IPA', '🔬', [
    {
      nama: 'Bab I-A · Sains, Laboratorium, dan Metode Ilmiah',
      kelas: '7', sumber: S + ', Bab I, hlm. 1–25',
      materi: `**Sains** (IPA) adalah ilmu pengetahuan sistematis tentang alam dan dunia fisik. Cabangnya antara lain **Biologi** (makhluk hidup), **Fisika** (gejala alam, gerak, energi), **Kimia** (materi dan perubahannya), **Geologi** (Bumi; cabangnya vulkanologi dan seismologi), **Astronomi** (benda langit), dan **Ekologi** (hubungan makhluk hidup dengan lingkungan) (hlm. 5).

**Keselamatan laboratorium**: gunakan kacamata pengaman dan penjepit tabung; arahkan mulut tabung reaksi ke tempat kosong. Bahan **korosif** dapat merusak jaringan hidup seperti kulit (hlm. 11–15).

**Metode ilmiah** (hlm. 15–16): observasi → hipotesis → rancangan percobaan → eksperimen → data → kesimpulan.
- **Hipotesis**: dugaan sementara yang logis dan dapat diuji (hlm. 17)
- **Variabel bebas**: yang sengaja diubah; **variabel terikat**: yang diukur/diamati; **variabel kontrol**: yang dibuat tetap sama (hlm. 18–19)
- Tujuan percobaan harus dapat diuji, dapat dilakukan, dan bukan pendapat pribadi (hlm. 16)`,
      soal: [
        pg('Ilmu yang mempelajari makhluk hidup disebut ...', ['Fisika', 'Kimia', 'Biologi', 'Geologi'], 'C', 'Biologi adalah ilmu tentang makhluk hidup.', 5),
        pg('Seismologi adalah ilmu tentang ...', ['gunung berapi', 'gempa bumi', 'fosil', 'serangga'], 'B', 'Seismologi, cabang Geologi, mempelajari gempa bumi.', 5),
        pg('Entomologi adalah cabang Biologi yang mempelajari ...', ['tumbuhan', 'serangga', 'jamur', 'bakteri'], 'B', 'Entomologi = ilmu tentang serangga.', 5),
        pg('Vania menyelidiki pengaruh sampah terhadap hewan-hewan di laut. Cabang ilmu yang ia pelajari adalah ...', ['Astronomi', 'Fisika', 'Ekologi', 'Kimia'], 'C', 'Ekologi mempelajari hubungan makhluk hidup dengan lingkungannya.', 8),
        pg('Farhan menyelidiki aliran listrik dalam televisi. Cabang ilmunya adalah ...', ['Fisika', 'Biologi', 'Geologi', 'Ekologi'], 'A', 'Listrik termasuk kajian Fisika.', 8),
        pg('Ilmuwan Indonesia di bidang kedirgantaraan yang juga Presiden RI ke-3 adalah ...', ['Terry Mart', 'B. J. Habibie', 'Yogi Erlangga', 'Nelson Tansu'], 'B', 'B. J. Habibie.', 7),
        pg('Alat laboratorium yang tepat untuk mengukur 25 mL air adalah ...', ['gelas kimia', 'gelas ukur', 'cawan penguap', 'tabung reaksi'], 'B', 'Gelas ukur dipakai untuk mengukur volume cairan.', 13),
        pg('Bahan korosif adalah bahan yang ...', ['mudah terbakar', 'dapat merusak jaringan hidup seperti kulit', 'mudah meledak', 'berbau harum'], 'B', 'Korosif artinya dapat merusak jaringan hidup.', 11),
        pg('Saat memanaskan cairan dalam tabung reaksi, mulut tabung harus diarahkan ke ...', ['wajah sendiri', 'teman di samping', 'bagian ruangan yang kosong', 'lampu laboratorium'], 'C', 'Agar tidak mencelakai siapa pun bila cairan menyembur.', 15),
        pg('Urutan tahapan metode ilmiah yang benar adalah ...', ['hipotesis – observasi – data – eksperimen', 'observasi – hipotesis – rancangan – eksperimen – data – kesimpulan', 'eksperimen – observasi – kesimpulan – hipotesis', 'data – hipotesis – observasi – kesimpulan'], 'B', 'Alur metode ilmiah pada Gambar 1.11.', 15),
        pg('Hipotesis adalah ...', ['kesimpulan akhir percobaan', 'dugaan sementara jawaban tujuan percobaan', 'daftar alat dan bahan', 'data hasil pengukuran'], 'B', 'Hipotesis merupakan perkiraan sementara yang logis.', 17),
        pg('Pernyataan berikut yang dapat dijadikan tujuan percobaan adalah ...', ['Mobil putih lebih bagus daripada mobil hitam.', 'Musik dangdut lebih baik daripada musik rock.', 'Senar yang tipis bersuara lebih melengking daripada senar yang tebal.', 'Bunga merah lebih indah daripada bunga kuning.'], 'C', 'Tujuan percobaan harus dapat diuji, bukan pendapat pribadi.', 24),
        pg('Ketut mencoba tiga jalur dari rumah ke sekolah dan mengukur waktu tempuhnya. Variabel bebasnya adalah ...', ['waktu tempuh', 'jalur yang ditempuh', 'Ketut sendiri', 'jam tangan'], 'B', 'Variabel bebas adalah yang sengaja diubah: jalur.', 19),
        pg('Pada percobaan Ketut, waktu tempuh dari rumah ke sekolah merupakan variabel ...', ['bebas', 'terikat', 'kontrol', 'manipulasi'], 'B', 'Yang diukur sebagai akibat perubahan variabel bebas adalah variabel terikat.', 19),
        pg('Percobaan "pengaruh banyaknya pupuk terhadap tinggi kangkung". Yang termasuk variabel kontrol adalah ...', ['banyaknya pupuk', 'tinggi kangkung', 'jumlah air penyiraman', 'hasil kesimpulan'], 'C', 'Air, letak tanaman, dan jenis tanah dibuat sama.', 22),
      ],
    },
    {
      nama: 'Bab I-B · Pengukuran, Besaran, dan Satuan',
      kelas: '7', sumber: S + ', Bab I, hlm. 25–44',
      materi: `- Pengamatan **kualitatif**: dengan kata-kata (ada gelembung, berbau); **kuantitatif**: dengan angka (200 mL, 70 °C) (hlm. 25–26)
- **Besaran**: sesuatu yang dapat diukur dan dinyatakan dengan angka. **7 besaran pokok** (SI): panjang (m), massa (kg), waktu (s), suhu (K), jumlah zat (mol), kuat arus listrik (A), intensitas cahaya (cd). **Besaran turunan** diturunkan dari besaran pokok, misalnya kecepatan (m/s), luas, volume, massa jenis (hlm. 26–27)
- Satuan **baku** tetap dan berlaku umum; satuan **tidak baku** berubah-ubah, misalnya jengkal atau kaki (hlm. 27)
- Konversi satuan menggunakan tangga konversi, misalnya 32 cm = 0,32 m (hlm. 28)
- Hindari **kesalahan paralaks**: mata harus sejajar skala. Volume cairan dibaca pada **meniskus** (hlm. 29–30)
- Grafik **garis** dipakai bila variabel bebas berupa angka, grafik **batang** bila bukan angka. Variabel bebas pada sumbu-x (hlm. 36)
- Percobaan sebaiknya diulang minimal 3 kali; jika data tidak sesuai hipotesis, hipotesis **ditolak** (hlm. 39–41)`,
      soal: [
        pg('"Saat air mendidih terlihat gelembung dan asap tipis." Ini contoh pengamatan ...', ['kuantitatif', 'kualitatif', 'numerik', 'eksperimen'], 'B', 'Deskripsi dengan kata-kata adalah pengamatan kualitatif.', 25),
        isian('Jumlah besaran pokok dalam Sistem Internasional adalah ...', '7|tujuh', 'Panjang, massa, waktu, suhu, jumlah zat, kuat arus listrik, intensitas cahaya.', 27),
        pg('Satuan SI untuk suhu adalah ...', ['derajat Celsius', 'Fahrenheit', 'kelvin', 'Reamur'], 'C', 'Satuan suhu SI adalah kelvin (K).', 27),
        pg('Satuan SI untuk intensitas cahaya adalah ...', ['ampere', 'kandela', 'mol', 'lux'], 'B', 'Intensitas cahaya dalam kandela (cd).', 27),
        pg('Berikut yang termasuk besaran turunan adalah ...', ['massa', 'waktu', 'kecepatan', 'kuat arus listrik'], 'C', 'Kecepatan = panjang lintasan : waktu (m/s).', 26),
        pg('Mengukur panjang meja dengan jengkal tangan menggunakan satuan ...', ['baku', 'tidak baku', 'internasional', 'turunan'], 'B', 'Jengkal berbeda-beda tiap orang sehingga termasuk satuan tidak baku.', 27),
        isian('Panjang kertas 32 cm = ... m (gunakan koma)', '0,32|0.32', 'Dari cm ke m naik dua anak tangga, dibagi 100.', 28),
        isian('Tasya menempuh 2,4 km ke sekolah. Dalam satuan SI jaraknya ... m', '2400|2.400', '2,4 × 1.000 = 2.400 m.', 28),
        isian('Ibu Titin makan pagi selama 20 menit = ... sekon', '1200|1.200', '20 × 60 = 1.200 s.', 28),
        pg('Kesalahan paralaks terjadi jika ...', ['alat ukur rusak', 'mata tidak sejajar dengan skala yang dibaca', 'satuan tidak ditulis', 'pengukuran diulang'], 'B', 'Hasil bacaan menjadi terlalu tinggi atau terlalu rendah.', 29),
        pg('Permukaan air dalam gelas ukur melengkung ke bawah. Skala dibaca pada ...', ['bagian atas meniskus', 'bagian bawah meniskus', 'dinding gelas', 'rata-rata atas dan bawah'], 'B', 'Untuk meniskus cekung, baca bagian bawahnya dengan mata sejajar.', 30),
        isian('Gelas ukur berisi 50 mL air. Setelah batu dimasukkan menjadi 65 mL. Volume batu adalah ... mL', '15', '65 − 50 = 15 mL (seperti Percobaan 4).', 34),
        pg('Grafik garis dipakai bila variabel bebasnya ...', ['berupa angka', 'berupa nama benda', 'berupa warna', 'tidak ada'], 'A', 'Jika variabel bebas bukan angka, gunakan grafik batang.', 36),
        isian('Suhu teh mula-mula 60,0 °C dan setelah 8 menit menjadi 51,0 °C. Penurunan suhunya ... °C', '9|9,0', '60,0 − 51,0 = 9,0 °C (Tabel 1.8).', 36),
        pg('Jika hasil percobaan tidak sesuai dengan hipotesis, maka hipotesis ...', ['diterima', 'ditolak', 'diulang tanpa percobaan', 'dihapus dari laporan'], 'B', 'Hipotesis ditolak; hal ini wajar asalkan diberi alasan ilmiah.', 39),
      ],
    },
    {
      nama: 'Bab II · Zat dan Perubahannya',
      kelas: '7', sumber: S + ', Bab II, hlm. 45–80',
      materi: `- Menurut wujudnya, materi dibedakan menjadi **padat, cair, dan gas** (hlm. 48)
- **Model partikel**: partikel zat padat sangat rapat dan hanya bergetar; zat cair agak renggang dan dapat mengalir (volume tetap, bentuk mengikuti wadah); gas sangat renggang dan bergerak bebas sehingga **paling mudah ditekan** (hlm. 49–51)
- **Difusi**: menyebarnya partikel, misalnya aroma masakan tercium dari dapur (hlm. 52)
- Perubahan wujud: mencair, membeku, menguap, mengembun, menyublim, mengkristal (hlm. 46, 55)
- Titik leleh = titik beku air = 0 °C; titik didih air = 100 °C. Selama berubah wujud suhu **tetap** karena energi dipakai untuk mengubah ikatan partikel (hlm. 59–60)
- **Perubahan fisika**: tidak terbentuk zat baru (cokelat meleleh, kayu dipotong). **Perubahan kimia**: terbentuk zat baru dan tidak dapat kembali (*irreversible*), misalnya beras dimasak menjadi nasi atau besi berkarat (hlm. 61–64)
- **Kerapatan (massa jenis)**: ρ benda < ρ cairan → mengapung; sama → melayang; lebih besar → tenggelam (hlm. 46, 68)`,
      soal: [
        pg('Menurut wujudnya, materi dibedakan menjadi ...', ['padat, cair, dan gas', 'unsur, senyawa, dan campuran', 'logam dan bukan logam', 'asam, basa, dan garam'], 'A', 'Pengelompokan materi berdasarkan wujud.', 48),
        pg('Pada percobaan kompresibilitas dengan alat suntik, zat yang paling mudah ditekan adalah ...', ['pasir', 'air', 'udara', 'kayu'], 'C', 'Partikel gas paling renggang sehingga paling mudah ditekan.', 51),
        pg('Partikel zat padat ...', ['bergerak bebas ke segala arah', 'sangat rapat dan hanya bergetar di tempat', 'renggang dan mengalir', 'tidak memiliki gaya tarik'], 'B', 'Tidak ada ruang untuk berpindah sehingga hanya bergetar.', 50),
        pg('Zat cair memiliki sifat ...', ['bentuk dan volume tetap', 'volume tetap, bentuk mengikuti wadah', 'bentuk tetap, volume berubah', 'bentuk dan volume berubah'], 'B', 'Partikel zat cair berjarak sehingga dapat mengalir.', 51),
        pg('Aroma masakan ibu tercium sampai ke kamar. Peristiwa menyebarnya partikel ini disebut ...', ['kondensasi', 'difusi', 'sublimasi', 'presipitasi'], 'B', 'Partikel gas bergerak acak dan menyebar.', 52),
        pg('Titik leleh es sama dengan titik beku air, yaitu ...', ['−10 °C', '0 °C', '32 °C', '100 °C'], 'B', 'Titik leleh dan titik beku suatu zat sama.', 59),
        isian('Suhu yang tetap ketika air menguap pada tekanan normal disebut titik didih, besarnya ... °C', '100', 'Titik didih air 100 °C.', 60),
        pg('Saat es meleleh, suhunya tetap 0 °C walaupun terus dipanaskan karena ...', ['termometernya rusak', 'energi dipakai untuk melepaskan ikatan antarpartikel', 'es menyerap dingin', 'panas terbuang semua'], 'B', 'Kalor digunakan untuk mengubah wujud, bukan menaikkan suhu.', 59),
        pg('Presipitasi dalam siklus air adalah ...', ['perubahan wujud gas menjadi cair', 'pergerakan air dari awan ke tanah', 'penguapan air laut', 'pembekuan air'], 'B', 'Presipitasi bukan perubahan wujud, melainkan turunnya hujan.', 64),
        pg('Beras dimasak menjadi nasi termasuk perubahan ...', ['fisika', 'kimia', 'wujud', 'bentuk'], 'B', 'Terbentuk materi baru yang tidak dapat kembali menjadi beras.', 64),
        pg('Perubahan kimia disebut irreversible, artinya ...', ['dapat dibalik', 'tidak dapat kembali ke bentuk semula', 'terjadi sangat cepat', 'hanya terjadi di laboratorium'], 'B', 'Contoh: abu tidak dapat dibuat menjadi kertas lagi.', 64),
        pg('Contoh perubahan fisika adalah ...', ['kembang api menyala', 'besi berkarat', 'cokelat meleleh', 'kue dipanggang'], 'C', 'Cokelat meleleh tidak menghasilkan zat baru.', 46),
        pg('Perubahan wujud dari gas langsung menjadi padat disebut ...', ['menyublim', 'mengkristal', 'membeku', 'mengembun'], 'B', 'Lihat peta konsep Bab II.', 46),
        pg('Jika massa jenis benda sama dengan massa jenis cairan, benda akan ...', ['tenggelam', 'mengapung', 'melayang', 'larut'], 'C', 'ρ benda = ρ cairan → melayang.', 46),
        pg('Anjing pelacak memiliki sekitar 220 juta sel reseptor penciuman, sedangkan manusia sekitar ...', ['5 juta', '50 juta', '220 juta', '2.000 juta'], 'A', 'Fakta Sains pada hlm. 52.', 52),
      ],
    },
    {
      nama: 'Bab III · Suhu, Kalor, dan Pemuaian',
      kelas: '7', sumber: S + ', Bab III, hlm. 81–110',
      materi: `- **Suhu** adalah ukuran derajat atau tingkat panas suatu benda. Skala suhu (titik tetap bawah–atas): Celsius 0–100, Reamur 0–80, Fahrenheit 32–212, Kelvin 273–373. Perbandingan C : R : F : K = 5 : 4 : 9 : 5 (hlm. 84–91)
- Konversi: °F = (9/5 × °C) + 32; K = °C + 273
- **Kalor** adalah energi yang berpindah karena perbedaan suhu; satuan SI **joule**; 1 kalori ≈ 4,2 joule. Q = m × c × ΔT (hlm. 92–100)
- Perpindahan kalor: **konduksi** (tanpa perpindahan partikel, misalnya setrika pada kain), **konveksi** (disertai gerak partikel, misalnya air mendidih dan asap), **radiasi** (tanpa medium, misalnya panas Matahari)
- Logam termasuk **konduktor**; plastik dan kayu termasuk **isolator**
- **Pemuaian**: bertambahnya ukuran benda karena kalor (panjang, luas, volume) pada zat padat, cair, dan gas. **Bimetal** dimanfaatkan pada termostat dan sekering (hlm. 101–105)`,
      soal: [
        pg('Suhu adalah ...', ['jumlah kalor dalam benda', 'ukuran derajat atau tingkat panas suatu benda', 'energi yang berpindah', 'massa benda panas'], 'B', 'Definisi suhu.', '84–91'),
        pg('Titik tetap atas (air mendidih) pada skala Fahrenheit adalah ...', ['80°', '100°', '212°', '373°'], 'C', 'Fahrenheit: titik tetap bawah 32°, atas 212°.', '84–91'),
        pg('Perbandingan skala Celsius : Reamur : Fahrenheit : Kelvin adalah ...', ['5 : 4 : 9 : 5', '4 : 5 : 9 : 5', '5 : 9 : 4 : 5', '1 : 1 : 1 : 1'], 'A', 'Rentang 100 : 80 : 180 : 100 = 5 : 4 : 9 : 5.', '84–91'),
        isian('Suhu 45 °C sama dengan ... °F', '113', '(9/5 × 45) + 32 = 81 + 32 = 113 °F.', '84–91'),
        isian('Suhu 27 °C sama dengan ... K', '300', 'K = 27 + 273 = 300.', '84–91'),
        pg('Satuan kalor dalam SI adalah ...', ['kalori', 'joule', 'watt', 'kelvin'], 'B', 'Satuan SI kalor adalah joule.', '92–100'),
        pg('1 kalori kira-kira sama dengan ...', ['1 joule', '4,2 joule', '10 joule', '0,24 joule'], 'B', '1 kalori = 4,184 J, dibulatkan 4,2 J.', '92–100'),
        isian('Kalor untuk memanaskan 2 kg air (c = 4.200 J/kg°C) sebesar 10 °C adalah ... joule', '84000|84.000', 'Q = m × c × ΔT = 2 × 4.200 × 10 = 84.000 J.', '92–100'),
        pg('Bagian bawah setrika yang panas memanaskan kain yang bersentuhan dengannya. Perpindahan kalor ini disebut ...', ['konduksi', 'konveksi', 'radiasi', 'evaporasi'], 'A', 'Konduksi: perpindahan kalor tanpa disertai perpindahan partikel.', '92–100'),
        pg('Air yang dipanaskan di panci bergerak naik-turun sambil membawa panas. Peristiwa ini disebut ...', ['konduksi', 'konveksi', 'radiasi', 'isolasi'], 'B', 'Konveksi: perpindahan kalor bersama gerak partikel.', '92–100'),
        pg('Panas Matahari sampai ke Bumi melalui ruang hampa dengan cara ...', ['konduksi', 'konveksi', 'radiasi', 'induksi'], 'C', 'Radiasi tidak memerlukan zat perantara.', '92–100'),
        pg('Pasangan bahan yang termasuk isolator panas adalah ...', ['besi dan tembaga', 'plastik dan kayu', 'aluminium dan besi', 'emas dan perak'], 'B', 'Logam adalah konduktor; plastik dan kayu isolator.', '92–100'),
        pg('Pemuaian adalah ...', ['berkurangnya massa benda', 'bertambahnya ukuran benda karena pengaruh kalor', 'perubahan wujud padat ke gas', 'berkurangnya suhu benda'], 'B', 'Pemuaian dapat terjadi pada zat padat, cair, dan gas.', '101–105'),
        pg('Bimetal banyak dimanfaatkan pada ...', ['termostat dan sekering listrik', 'termometer raksa', 'panci masak', 'kaca jendela'], 'A', 'Bimetal melengkung saat dipanaskan sehingga dapat memutus/menyambung arus.', '101–105'),
        pg('Pemuaian yang terjadi pada panjang suatu kawat logam disebut pemuaian ...', ['luas', 'volume', 'panjang', 'gas'], 'C', 'Pemuaian panjang terjadi pada satu dimensi.', '101–105'),
      ],
    },
    {
      nama: 'Bab IV · Gerak dan Gaya',
      kelas: '7', sumber: S + ', Bab IV, hlm. 111–134',
      materi: `- **Gerak**: perubahan jarak dan/atau posisi benda terhadap titik acuan. **Gerak semu**: benda diam tampak bergerak karena pengamat bergerak (hlm. 117)
- **Jarak**: panjang lintasan yang ditempuh. **Perpindahan**: garis lurus dari posisi awal ke posisi akhir, tanpa memperhatikan bentuk lintasan (hlm. 118)
- **Kelajuan** = jarak : waktu (besaran skalar). **Kecepatan** = perpindahan : waktu (besaran vektor, punya arah) (hlm. 118–119)
- **Percepatan**: besaran perubahan kecepatan (hlm. 121)
- **Gaya**: dorongan atau tarikan yang dapat mengubah gerak, arah, bentuk, dan kecepatan benda. Gaya segaris searah dijumlahkan, berlawanan dikurangkan (resultan) (hlm. 124–125)
- **Gaya gesek** dipengaruhi kekasaran permukaan dan berat benda, tidak dipengaruhi luas permukaan. Gaya gesek ada yang menguntungkan, misalnya sandal karet agar tidak terpeleset (hlm. 126–127)
- **Hukum I Newton** (kelembaman), **Hukum II Newton** F = m × a (newton, kg, m/s²), **Hukum III Newton** aksi = reaksi, berlawanan arah (hlm. 129–131)`,
      soal: [
        pg('Gerak adalah ...', ['perubahan warna benda', 'perubahan jarak dan/atau posisi benda terhadap titik acuan', 'perubahan massa benda', 'perubahan suhu benda'], 'B', 'Definisi gerak.', 117),
        pg('Dari dalam mobil yang melaju, pohon di pinggir jalan tampak bergerak. Ini contoh ...', ['gerak nyata', 'gerak semu', 'gerak lurus beraturan', 'percepatan'], 'B', 'Pohon sebenarnya diam; pengamatlah yang bergerak.', 117),
        pg('Perpindahan adalah ...', ['panjang seluruh lintasan', 'garis lurus dari posisi awal ke posisi akhir', 'waktu tempuh benda', 'kecepatan rata-rata'], 'B', 'Perpindahan tidak memperhatikan bentuk lintasan.', 118),
        isian('Dina berjalan 4 m ke timur lalu 3 m ke barat. Besar perpindahannya adalah ... m', '1', 'Jarak = 7 m, tetapi perpindahan = 4 − 3 = 1 m ke timur.', 118),
        pg('Kecepatan termasuk besaran vektor karena ...', ['hanya memiliki nilai', 'memiliki nilai dan arah', 'tidak memiliki satuan', 'selalu bernilai nol'], 'B', 'Kelajuan skalar; kecepatan vektor.', 119),
        isian('Seorang pelari menempuh 150 m dalam 30 sekon. Kelajuannya adalah ... m/s', '5', '150 : 30 = 5 m/s.', 118),
        pg('Besaran yang menyatakan perubahan kecepatan benda disebut ...', ['jarak', 'perpindahan', 'percepatan', 'kelajuan'], 'C', 'Percepatan mengukur perubahan kecepatan.', 121),
        pg('Pernyataan yang benar tentang gaya adalah ...', ['gaya hanya dapat menggerakkan benda', 'gaya dapat mengubah arah, bentuk, dan kecepatan benda', 'gaya tidak dapat mengubah bentuk benda', 'gaya hanya berupa tarikan'], 'B', 'Gaya berupa dorongan atau tarikan dengan berbagai akibat.', 124),
        pg('Dua gaya segaris bekerja pada sebuah meja: 10 N ke kanan dan 4 N ke kiri. Resultannya ...', ['14 N ke kanan', '6 N ke kanan', '6 N ke kiri', '14 N ke kiri'], 'B', 'Gaya berlawanan dikurangkan: 10 − 4 = 6 N ke arah gaya yang lebih besar.', 125),
        pg('Gaya gesek TIDAK dipengaruhi oleh ...', ['kekasaran permukaan', 'berat benda', 'luas permukaan yang bersentuhan', 'jenis permukaan'], 'C', 'Menurut buku, gaya gesek tidak dipengaruhi luas permukaan.', 126),
        pg('Contoh gaya gesek yang menguntungkan adalah ...', ['ban kendaraan menjadi aus', 'sandal karet mencegah pemakainya terpeleset', 'mesin cepat panas', 'lantai licin'], 'B', 'Gesekan membuat sandal tidak licin.', 127),
        pg('Penumpang terdorong ke depan saat bus mengerem mendadak. Peristiwa ini dijelaskan oleh ...', ['Hukum I Newton', 'Hukum II Newton', 'Hukum III Newton', 'Asas Black'], 'A', 'Hukum I Newton tentang kelembaman (sifat mempertahankan keadaan).', 129),
        isian('Benda bermassa 2 kg diberi percepatan 3 m/s². Gaya yang bekerja adalah ... N', '6', 'F = m × a = 2 × 3 = 6 N.', 131),
        pg('Saat mendayung, dayung mendorong air ke belakang dan perahu bergerak maju. Ini contoh ...', ['Hukum I Newton', 'Hukum II Newton', 'Hukum III Newton', 'gerak semu'], 'C', 'Aksi dan reaksi sama besar dan berlawanan arah.', 131),
      ],
    },
    {
      nama: 'Bab V · Karakteristik dan Klasifikasi Makhluk Hidup',
      kelas: '7', sumber: S + ', Bab V, hlm. 135–158',
      materi: `- Makhluk hidup memiliki ciri-ciri kehidupan: bergerak, menanggapi rangsang, makan/memerlukan energi, bernapas, tumbuh, berkembang biak, dan mengeluarkan zat sisa (hlm. 137–143)
- Organisme yang dapat membuat makanan sendiri disebut **produsen (autotrof)**; yang memperoleh energi dari organisme lain disebut **konsumen (heterotrof)** (hlm. 141)
- **Kunci determinasi**: kunci dikotomi (dua keterangan berlawanan di setiap cabang) dan kunci format tabel (hlm. 146)
- **Urutan takson**: kingdom – filum/divisi – kelas – ordo – famili – genus – spesies. Makin tinggi takson, makin banyak anggota tetapi makin sedikit persamaannya (hlm. 150)
- **Tata nama binomial** (Carolus Linnaeus, Bapak Taksonomi): dua kata Latin, kata pertama **genus**, kata kedua penunjuk spesies; dicetak miring atau digaris bawah terpisah, misalnya *Zea mays* (hlm. 151–152)
- **Lima kingdom**: Monera (tanpa membran inti, misalnya bakteri), Protista, Fungi (jamur), Plantae (tumbuhan), Animalia (hewan). Filum untuk hewan, divisi untuk tumbuhan (hlm. 151–153)`,
      soal: [
        pg('Organisme yang dapat membuat makanannya sendiri disebut ...', ['konsumen', 'heterotrof', 'produsen (autotrof)', 'dekomposer'], 'C', 'Tumbuhan membuat makanan melalui fotosintesis.', 141),
        pg('Hewan memperoleh energi dengan memakan organisme lain. Hewan disebut ...', ['autotrof', 'heterotrof', 'produsen', 'abiotik'], 'B', 'Heterotrof = memperoleh energi dari organisme lain.', 141),
        pg('Urutan takson dari tingkat tertinggi adalah ...', ['spesies – genus – famili – ordo – kelas – filum – kingdom', 'kingdom – filum – kelas – ordo – famili – genus – spesies', 'kingdom – kelas – filum – ordo – genus – famili – spesies', 'filum – kingdom – kelas – ordo – famili – spesies – genus'], 'B', 'Urutan takson makhluk hidup.', 150),
        pg('Semakin tinggi tingkatan takson, maka ...', ['anggotanya makin sedikit dan persamaannya makin banyak', 'anggotanya makin banyak dan persamaannya makin sedikit', 'anggota dan persamaannya sama banyak', 'tidak ada anggotanya'], 'B', 'Takson tinggi mencakup banyak jenis yang kurang mirip.', 150),
        pg('Dalam tata nama binomial, kata pertama menunjukkan ...', ['kingdom', 'famili', 'genus', 'ordo'], 'C', 'Kata pertama genus, kata kedua penunjuk spesies.', 151),
        pg('Penulisan nama ilmiah yang benar adalah ...', ['ZEA MAYS', 'Zea Mays', 'Zea mays (dicetak miring)', 'zea Mays'], 'C', 'Huruf awal genus kapital, spesies huruf kecil, dicetak miring atau digaris bawah terpisah.', 151),
        pg('Tokoh yang dijuluki Bapak Taksonomi adalah ...', ['Charles Darwin', 'Gregor Mendel', 'Carolus Linnaeus', 'Robert Hooke'], 'C', 'Carolus Linnaeus mempopulerkan tata nama binomial.', 152),
        pg('Kingdom yang anggotanya tidak memiliki membran inti sel (prokariotik), misalnya bakteri, adalah ...', ['Protista', 'Monera', 'Fungi', 'Plantae'], 'B', 'Monera beranggotakan organisme prokariotik berukuran mikroskopis.', 153),
        pg('Jamur termasuk kingdom ...', ['Monera', 'Protista', 'Fungi', 'Animalia'], 'C', 'Kingdom Fungi = jamur.', 153),
        pg('Tumbuhan lumut termasuk divisi ...', ['Pteridophyta', 'Bryophyta', 'Spermatophyta', 'Monera'], 'B', 'Bryophyta (lumut), Pteridophyta (paku).', 151),
        pg('Tingkatan takson di bawah kingdom untuk tumbuhan disebut ...', ['filum', 'divisi', 'kelas', 'ordo'], 'B', 'Filum untuk hewan, divisi untuk tumbuhan.', 151),
        pg('Kunci dikotomi adalah kunci determinasi yang ...', ['berisi satu ciri saja', 'terdiri atas dua keterangan yang berlawanan di setiap cabang', 'hanya berupa gambar', 'berisi nama latin saja'], 'B', 'Dikotomi = dua pilihan di setiap cabang.', 146),
        pg('Nama genus pada Zea mays adalah ...', ['Zea', 'mays', 'Zea mays', 'Poaceae'], 'A', 'Kata pertama nama ilmiah adalah genus.', 152),
      ],
    },
    {
      nama: 'Bab VI · Ekologi dan Pelestarian Lingkungan',
      kelas: '7', sumber: S + ', Bab VI, hlm. 159–182',
      materi: `- **Ekosistem**: sistem interaksi saling ketergantungan antara komponen hidup (**biotik**) dan tak hidup (**abiotik**: cahaya, suhu, air, udara, kelembapan, tanah, iklim, topografi) (hlm. 160, 164)
- Individu → **populasi** (kumpulan individu sejenis) → **komunitas** (berbagai makhluk hidup) → ekosistem → **bioma** (ekosistem sangat luas dengan vegetasi khas: gurun, tundra, hutan hujan tropis) → **biosfer** (lapisan Bumi yang berkehidupan) (hlm. 165)
- Rantai makanan saling berhubungan membentuk **jaring-jaring makanan**; makin kompleks, ekosistem makin stabil. **Dekomposer** (bakteri, jamur) menguraikan sisa makhluk hidup. Hanya sekitar **10%** energi berpindah ke tingkat trofik berikutnya (hlm. 167)
- Interaksi biotik: kompetisi, predasi, herbivori, dan **simbiosis** (parasitisme, mutualisme, komensalisme) (hlm. 171–172)
- Intervensi manusia paling berpengaruh terhadap lingkungan. Jejak karbon memicu **pemanasan global**; **hujan asam** terjadi karena sulfur oksida dan nitrogen oksida bereaksi dengan air (hlm. 163, 170, 175)`,
      soal: [
        pg('Ekosistem adalah ...', ['kumpulan hewan sejenis', 'sistem interaksi saling ketergantungan antara komponen biotik dan abiotik', 'lapisan udara bumi', 'kumpulan tumbuhan di hutan'], 'B', 'Definisi ekosistem.', 164),
        pg('Sekumpulan kambing di padang rumput merupakan contoh ...', ['individu', 'populasi', 'komunitas', 'biosfer'], 'B', 'Populasi = kumpulan individu sejenis.', 165),
        pg('Kumpulan berbagai jenis makhluk hidup yang hidup bersama di suatu tempat disebut ...', ['populasi', 'komunitas', 'individu', 'bioma'], 'B', 'Komunitas terdiri atas berbagai populasi.', 165),
        pg('Gurun, tundra, dan hutan hujan tropis merupakan contoh ...', ['populasi', 'bioma', 'habitat', 'relung'], 'B', 'Bioma = ekosistem sangat luas dengan vegetasi khas.', 165),
        pg('Berikut yang termasuk komponen abiotik adalah ...', ['rumput', 'jamur', 'cahaya matahari', 'cacing'], 'C', 'Abiotik = komponen tak hidup.', 160),
        pg('Contoh dekomposer adalah ...', ['rumput dan padi', 'bakteri dan jamur', 'elang dan ular', 'belalang dan tikus'], 'B', 'Dekomposer menguraikan sisa makhluk hidup.', 167),
        isian('Energi yang berpindah dari satu tingkat trofik ke tingkat berikutnya hanya sekitar ...%', '10', 'Sisanya hilang, misalnya sebagai panas.', 167),
        pg('Semakin kompleks jaring-jaring makanan, maka ekosistem ...', ['makin tidak stabil', 'makin stabil', 'tidak berpengaruh', 'makin cepat rusak'], 'B', 'Banyak alternatif makanan membuat ekosistem lebih stabil.', 167),
        pg('Belalang memakan rumput termasuk interaksi ...', ['kompetisi', 'predasi', 'herbivori', 'komensalisme'], 'C', 'Herbivori: hewan memakan tumbuhan.', 172),
        pg('Simbiosis dibagi menjadi tiga, yaitu ...', ['predasi, kompetisi, herbivori', 'parasitisme, mutualisme, komensalisme', 'produsen, konsumen, dekomposer', 'populasi, komunitas, ekosistem'], 'B', 'Tiga jenis simbiosis.', 172),
        pg('Hujan asam terjadi karena polutan ...', ['oksigen dan nitrogen', 'sulfur oksida dan nitrogen oksida', 'karbon dioksida dan air', 'helium dan argon'], 'B', 'Polutan tersebut bereaksi dengan air di udara.', 175),
        pg('Menurut buku, faktor yang paling berpengaruh terhadap lingkungan hidup adalah ...', ['cuaca', 'intervensi manusia', 'hewan liar', 'gempa bumi'], 'B', 'Pembukaan lahan, kota, dan jalan raya mengubah lingkungan secara dramatis.', 163),
        pg('Banyaknya jejak karbon di atmosfer dapat menyebabkan ...', ['pemanasan global', 'gerhana', 'pasang surut', 'pelangi'], 'A', 'Jejak karbon meningkatkan gas rumah kaca.', 170),
        pg('Lapisan Bumi yang di dalamnya terdapat kehidupan disebut ...', ['atmosfer', 'litosfer', 'biosfer', 'hidrosfer'], 'C', 'Biosfer = lapisan kehidupan.', 165),
      ],
    },
    {
      nama: 'Bab VII · Bumi dan Tata Surya',
      kelas: '7', sumber: S + ', Bab VII, hlm. 183–235',
      materi: `- **Planet** dari yang terdekat dengan Matahari: Merkurius, Venus, Bumi, Mars, Jupiter, Saturnus, Uranus, Neptunus. **Sabuk asteroid** berada di antara Mars dan Jupiter (hlm. 184–186)
- **Planet kerdil**: Pluto, Ceres, Haumea, Makemake, Eris (hlm. 184)
- **Jupiter** adalah planet terbesar; jika Bumi sebesar buah anggur, Jupiter sebesar bola basket (hlm. 194)
- **Rotasi** Bumi menyebabkan siang dan malam; **revolusi** Bumi (dengan sumbu miring) menyebabkan pergantian musim (hlm. 210–216)
- **Fase Bulan**: ada 8 fase, dimulai dari Bulan Baru (hlm. 217–218). Pengetahuan fase Bulan dan pasang surut dipakai nelayan dan dalam penanggalan ibadah (hlm. 220)
- **Gerhana Bulan**: Bulan masuk ke bayangan Bumi. **Gerhana Matahari**: Bulan berada di antara Matahari dan Bumi (hlm. 218, 223)
- Lapisan Matahari yang tampak adalah **fotosfer**; **kromosfer** terlihat saat gerhana Matahari sebagai lapisan merah muda (prominens) (hlm. 222)`,
      soal: [
        pg('Urutan planet dari yang terdekat dengan Matahari adalah ...', ['Venus, Merkurius, Bumi, Mars', 'Merkurius, Venus, Bumi, Mars', 'Bumi, Venus, Mars, Merkurius', 'Mars, Bumi, Venus, Merkurius'], 'B', 'Urutan empat planet dalam.', 186),
        pg('Planet terbesar di tata surya adalah ...', ['Saturnus', 'Jupiter', 'Uranus', 'Neptunus'], 'B', 'Jupiter lebih dari dua kali gabungan tujuh planet lainnya.', 194),
        pg('Jika Bumi dimisalkan sebesar buah anggur, Jupiter kira-kira sebesar ...', ['kelereng', 'jeruk', 'bola basket', 'rumah'], 'C', 'Perbandingan ukuran pada hlm. 194.', 194),
        pg('Sabuk asteroid terletak di antara orbit planet ...', ['Bumi dan Mars', 'Mars dan Jupiter', 'Jupiter dan Saturnus', 'Uranus dan Neptunus'], 'B', 'Lihat gambar susunan tata surya.', 186),
        pg('Berikut yang termasuk planet kerdil adalah ...', ['Merkurius', 'Pluto', 'Mars', 'Titan'], 'B', 'Pluto, Ceres, Haumea, Makemake, dan Eris adalah planet kerdil. Titan adalah bulan Saturnus.', 184),
        pg('Pergantian musim di Bumi terutama dipengaruhi oleh ...', ['rotasi Bumi', 'revolusi Bumi', 'rotasi Bulan', 'gerhana'], 'B', 'Revolusi Bumi dengan sumbu yang miring.', 216),
        pg('Terjadinya siang dan malam disebabkan oleh ...', ['revolusi Bumi', 'rotasi Bumi', 'revolusi Bulan', 'pasang surut'], 'B', 'Rotasi Bumi pada porosnya.', 210),
        isian('Banyaknya fase Bulan adalah ...', '8|delapan', 'Terdapat 8 fase Bulan.', 217),
        pg('Fase Bulan yang pertama adalah ...', ['Bulan Purnama', 'Bulan Baru', 'Kuartal Pertama', 'Bulan Sabit Tua'], 'B', 'Urutan dimulai dari Bulan Baru.', 218),
        pg('Gerhana Bulan terjadi ketika ...', ['Bulan berada di antara Matahari dan Bumi', 'Bulan masuk ke dalam bayangan Bumi', 'Matahari berada di antara Bumi dan Bulan', 'Bumi berada di belakang Matahari'], 'B', 'Bulan tertutup bayangan Bumi.', 218),
        pg('Gerhana Matahari terjadi ketika ...', ['Bulan berada di antara Matahari dan Bumi', 'Bumi berada di antara Matahari dan Bulan', 'Bulan masuk bayangan Bumi', 'Matahari tertutup awan'], 'A', 'Bayangan Bulan yang terlihat dari Bumi.', 223),
        pg('Lapisan Matahari yang terlihat dan memancarkan cahaya yang kita lihat adalah ...', ['inti', 'fotosfer', 'kromosfer', 'korona'], 'B', 'Fotosfer adalah lapisan yang tampak.', 222),
        pg('Pengetahuan tentang pasang surut air laut sangat dimanfaatkan oleh ...', ['petani sawah', 'nelayan', 'pilot', 'penjahit'], 'B', 'Nelayan melaut mengandalkan pengetahuan pasang surut.', 220),
      ],
    },
  ]);
})();
