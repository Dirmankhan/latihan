// Koding dan Kecerdasan Artifisial — berdasarkan buku SMP/MTs Kelas VII (Kemendikdasmen 2025).
// Bab 1 dan awal Bab 2 dari Buku Siswa; sisa Bab 2, Bab 3, dan Bab 4 dari Buku Panduan Guru
// (panduan aktivitas, contoh jawaban, penilaian sumatif, dan kunci jawaban).
(function () {
  const { pg, isian, tambah } = window.BUKU;
  const BS = 'Buku Siswa KKA SMP/MTs Kelas VII';
  const BG = 'Buku Panduan Guru KKA SMP/MTs Kelas VII';

  tambah('Koding dan Kecerdasan Artifisial', '💻', [
    {
      nama: 'Bab 1A · Berpikir Komputasional & Pengelolaan Data',
      kelas: '7 (Smt 1)', sumber: BS + ', Bab 1, hlm. 5–21',
      materi: `- **Berpikir komputasional**: proses berpikir untuk menyelesaikan masalah dengan cara yang dapat diikuti secara logis oleh manusia ataupun komputer. Dikenalkan oleh **Seymour Papert**, dipopulerkan kembali oleh **Jeannette Wing** (2006) (hlm. 5)
- Empat pilar: **dekomposisi** (memecah masalah kompleks), **pengenalan pola** (mengenali kesamaan/kecenderungan), **abstraksi** (fokus pada informasi penting, abaikan detail tak relevan), **algoritma** (langkah sistematis dan logis) (hlm. 5)
- **Data**: sekumpulan fakta/keterangan hasil pengamatan, pengukuran, atau penelitian; bisa berupa angka, kata, simbol, gambar, atau suara. Data yang sudah diolah menjadi **informasi** (hlm. 6)
- Langkah **pengelolaan data**: mengumpulkan → menyimpan → memproses → menganalisis → menyajikan (hlm. 7–9)
- **Diagram batang**: judul, sumbu X (kategori), sumbu Y (jumlah/frekuensi), batang. Tujuannya memudahkan perbandingan, menyajikan informasi visual, dan menemukan pola/tren (hlm. 20–21)
- Kode kehadiran: **H**adir, **I**zin (ada keterangan resmi), **S**akit, **A**lpa (tanpa keterangan) (hlm. 19)`,
      soal: [
        pg('Istilah berpikir komputasional dipopulerkan kembali pada tahun 2006 oleh ...', ['Seymour Papert', 'Jeannette Wing', 'George Polya', 'Alan Turing'], 'B', 'Konsepnya pertama kali dikenalkan Seymour Papert, lalu dipopulerkan kembali oleh Jeannette Wing.', 5),
        pg('Memecah masalah kompleks menjadi bagian-bagian yang lebih sederhana disebut ...', ['abstraksi', 'algoritma', 'dekomposisi', 'pengenalan pola'], 'C', 'Dekomposisi = pemecahan masalah menjadi komponen kecil.', 5),
        pg('Memfokuskan perhatian pada informasi penting dan mengabaikan detail yang tidak relevan disebut ...', ['abstraksi', 'dekomposisi', 'debugging', 'algoritma'], 'A', 'Itulah pilar abstraksi.', 5),
        pg('Saat menyusun jadwal piket, kamu mengamati siapa saja yang sudah piket minggu lalu. Pilar yang digunakan adalah ...', ['algoritma', 'pengenalan pola', 'abstraksi', 'dekomposisi'], 'B', 'Mengamati kebiasaan/kecenderungan = pengenalan pola.', 5),
        pg('Menyusun urutan langkah yang sistematis dan logis untuk menyelesaikan masalah disebut ...', ['abstraksi', 'dekomposisi', 'algoritma', 'pengenalan pola'], 'C', 'Algoritma adalah langkah-langkah penyelesaian masalah.', 5),
        pg('Urutan langkah pengelolaan data yang benar adalah ...', ['menyajikan – mengumpulkan – menganalisis – menyimpan – memproses', 'mengumpulkan – menyimpan – memproses – menganalisis – menyajikan', 'memproses – mengumpulkan – menyajikan – menyimpan – menganalisis', 'menganalisis – memproses – mengumpulkan – menyajikan – menyimpan'], 'B', 'Lihat Gambar 1.1.', 7),
        pg('Mengelompokkan data transportasi siswa lalu menghitung jumlah tiap kelompok termasuk tahap ...', ['mengumpulkan data', 'menyimpan data', 'memproses data', 'menyajikan data'], 'C', 'Contoh: Sepeda = 1 siswa, Bus = 1 siswa.', 8),
        pg('Mengisi kuesioner tentang makanan favorit siswa termasuk tahap ...', ['pengumpulan data', 'pengolahan data', 'analisis data', 'penyajian data'], 'A', 'Kuesioner adalah alat mengumpulkan data (soal menjodohkan no. 4).', 7),
        pg('Membuat kesimpulan bahwa mayoritas siswa menyukai olahraga termasuk tahap ...', ['pengumpulan data', 'penyimpanan data', 'analisis data', 'penyajian data'], 'C', 'Menarik kesimpulan/pola dari data = analisis.', 9),
        pg('Berikut yang BUKAN termasuk proses pengelolaan data adalah ...', ['pengumpulan data', 'pemanasan data', 'penyajian data', 'analisis data'], 'B', 'Kunci jawaban Uji Kompetensi no. 2: "pemanasan data" bukan proses pengelolaan data.', 7),
        pg('Pada diagram batang, sumbu Y (vertikal) biasanya menunjukkan ...', ['judul diagram', 'kategori data', 'jumlah atau frekuensi', 'warna batang'], 'C', 'Sumbu X = kategori, sumbu Y = jumlah/frekuensi.', 21),
        pg('Tujuan menyajikan data dalam diagram batang adalah ...', ['menyembunyikan data', 'menyajikan informasi visual agar cepat dipahami', 'memperbanyak jumlah data', 'mengganti data asli'], 'B', 'Juga memudahkan perbandingan dan menemukan tren.', 21),
        pg('Siswa yang tidak hadir tanpa keterangan dicatat dengan kode ...', ['H', 'I', 'S', 'A'], 'D', 'A = Alpa.', 19),
        pg('Data kehadiran siswa digunakan sekolah terutama untuk ...', ['memilih warna seragam', 'memantau tingkat disiplin siswa', 'menentukan menu kantin', 'mengatur parkir guru'], 'B', 'Kunci jawaban pilihan ganda no. 8.', 6),
        isian('Data yang sudah diolah, dianalisis, atau disusun sehingga bermakna disebut ...', 'informasi', 'Data = fakta mentah; informasi = hasil olahan yang bermakna.', 6),
      ],
    },
    {
      nama: 'Bab 1B · Pemecahan Masalah, Instruksi & Scratch',
      kelas: '7 (Smt 1)', sumber: BS + ', Bab 1, hlm. 22–48',
      materi: `- **Langkah Polya**: (1) memahami masalah, (2) membuat rencana, (3) melaksanakan rencana, (4) memeriksa kembali hasil (hlm. 22)
- **Masalah posisi & urutan** (soal parkir): identifikasi mobil yang menghalangi, tentukan urutan pemindahan (hlm. 23–25)
- **Masalah rute**: kunjungi setiap tempat sekali, tidak melewati jalan yang sama dua kali, kembali ke titik awal. Manfaat: hemat waktu, bahan bakar, dan tenaga (hlm. 26–28)
- **Pengembangan instruksi**: identifikasi masalah → dekomposisi → pola → abstraksi → algoritma. **Debugging**: menelusuri, menemukan, dan memperbaiki kesalahan instruksi/program (hlm. 30–31)
- **Pemrograman visual berbasis blok**: menyusun blok perintah seperti puzzle (drag and drop). Platform: Scratch (MIT), Blockly (Google), Code.org, Octo Studio, App Inventor (hlm. 33–35)
- Tampilan Scratch: **Blok Panel** (tempat blok perintah), **Workspace** (area menyusun script), **Stage** (tempat aksi tampil, koordinat X–Y), **Sprite** (karakter/objek yang diprogram) (hlm. 36–38)`,
      soal: [
        pg('Langkah pertama pemecahan masalah menurut George Polya adalah ...', ['membuat rencana', 'memahami masalah', 'melaksanakan rencana', 'memeriksa kembali'], 'B', 'Kunci pilihan ganda no. 10: memahami masalah.', 22),
        pg('Langkah terakhir metode Polya adalah ...', ['memeriksa kembali hasil', 'membuat rencana', 'memahami masalah', 'mengumpulkan data'], 'A', 'Solusi ditinjau ulang untuk memastikan ketepatannya.', 22),
        pg('Menentukan rumus atau strategi penyelesaian soal termasuk langkah Polya yang ke- ...', ['1', '2', '3', '4'], 'B', 'Langkah 2: membuat rencana.', 22),
        pg('Mobil L dan K terhalang oleh mobil M yang diparkir di depannya. Agar L dapat keluar, yang harus dilakukan adalah ...', ['memindahkan mobil K', 'memindahkan mobil M terlebih dahulu', 'memindahkan L dan K bersamaan', 'menunggu mobil lain datang'], 'B', 'Mobil M harus didorong maju terlebih dahulu.', 24),
        pg('Syarat masalah rute pada buku adalah, KECUALI ...', ['tidak mengunjungi tempat yang sama lebih dari sekali', 'tidak melewati jalan yang sama dua kali', 'harus kembali ke titik awal', 'harus melewati jalan terpanjang'], 'D', 'Tiga syarat: sekali kunjung, jalan tidak diulang, kembali ke awal.', 26),
        pg('Kurir berangkat dari gudang A. Peta: A–B, B–C, C–D, D–A. Urutan yang memenuhi syarat adalah ...', ['A → B → D → C → A', 'A → B → C → D → A', 'A → C → B → D → A', 'A → B → A → D → C'], 'B', 'A→B→C→D→A (atau kebalikannya) melewati setiap jalan sekali dan kembali ke A.', 28),
        pg('Manfaat utama menentukan rute yang efisien adalah ...', ['menambah jarak tempuh', 'menghemat waktu, bahan bakar, dan tenaga', 'mengunjungi rumah dua kali', 'mempersulit perjalanan'], 'B', 'Lihat manfaat efisiensi rute.', 28),
        pg('Kegiatan menelusuri, menemukan, dan memperbaiki kesalahan dalam program disebut ...', ['coding', 'debugging', 'rendering', 'uploading'], 'B', 'Debugging memastikan program berjalan sesuai tujuan.', 31),
        pg('Sprite sampah tidak masuk ke tong yang benar dan skor tidak bertambah. Langkah yang tepat adalah ...', ['menghapus seluruh projek', 'menelusuri blok kode yang salah, memperbaiki, lalu menguji ulang', 'mengganti warna latar', 'menambah sprite baru saja'], 'B', 'Inilah proses debugging.', 31),
        pg('Scratch merupakan platform pemrograman visual yang dikembangkan oleh ...', ['Google', 'Microsoft', 'MIT', 'Apple'], 'C', 'Dapat diakses gratis di scratch.mit.edu.', 34),
        pg('Editor pemrograman visual dari Google yang menjadi dasar banyak platform coding adalah ...', ['Scratch', 'Blockly', 'Octo Studio', 'Tynker'], 'B', 'Blockly dari Google.', 34),
        pg('Platform blok untuk membuat aplikasi Android adalah ...', ['App Inventor', 'Code.org', 'Octo Studio', 'Blockly Games'], 'A', 'App Inventor (MIT).', 35),
        pg('Dalam Scratch, sprite adalah ...', ['area kerja menyusun blok', 'karakter atau objek yang dapat diprogram', 'tombol untuk menyimpan', 'tempat blok disimpan'], 'B', 'Kunci pilihan ganda no. 7.', 38),
        pg('Bagian Scratch tempat semua aksi dan animasi ditampilkan adalah ...', ['Blok Panel', 'Workspace', 'Stage', 'Menu Variable'], 'C', 'Stage menampilkan hasil program dengan koordinat X dan Y.', 37),
        pg('Area untuk menyusun dan menggabungkan blok-blok perintah menjadi script adalah ...', ['Stage', 'Workspace', 'Sprite', 'Costume'], 'B', 'Workspace = area kerja.', 37),
        isian('Dalam gim pilah sampah, variabel yang dibuat untuk mencatat skor diberi nama ...', 'poin', 'Klik menu Variable → make variable bernama Poin.', 40),
      ],
    },
    {
      nama: 'Bab 2 · Literasi Digital untuk Kreasi Konten',
      kelas: '7 (Smt 1)', sumber: BS + ' (hlm. 49–64) & ' + BG + ' (hlm. 82–118)',
      materi: `- **Konten digital**: segala bentuk informasi/karya yang dibuat dengan teknologi digital dan disajikan melalui media elektronik; bisa statis (teks, gambar) atau dinamis (audio, video) (BS hlm. 51)
- Jenis: **teks**, **gambar**, **audio** (musik, podcast), **video**, **slide presentasi**, **infografik** (gabungan teks dan visual yang ringkas) (BS hlm. 52–54)
- **Etika konten digital**: menghargai **hak cipta**, mencantumkan sumber, berdasarkan fakta, tidak mengandung kekerasan/kebencian/diskriminasi (BS hlm. 55–56)
- Langkah pertama membuat konten: **menentukan tujuan dan ide** (informasi, edukasi, hiburan, promosi); pertimbangkan audiens, platform, format (BS hlm. 63–64)
- Struktur cerita tiga bagian: **pembuka – isi/konflik – penutup**; dirancang dengan **storyboard** (BG hlm. 101–103)
- Aplikasi: **Canva** (desain/infografik), **PowerPoint**, **Google Slides** (kolaboratif) (BG hlm. 105–106)
- Prinsip **tata letak visual**: warna harmonis, tipografi jelas, **keseimbangan** & proporsi, **white space** (ruang kosong) (BG hlm. 109, 118)`,
      soal: [
        pg('Konten digital yang memadukan teks, gambar, dan suara disebut ...', ['konten teks', 'konten audio', 'konten multimedia', 'konten cetak'], 'C', 'Kunci PG no. 1.', '116 (BG)'),
        pg('Podcast termasuk jenis konten digital ...', ['teks', 'gambar', 'audio', 'infografik'], 'C', 'Konten audio: musik, podcast, rekaman narasi.', 52),
        pg('Gabungan teks dan visual yang menyajikan informasi atau data secara ringkas dan menarik disebut ...', ['vlog', 'infografik', 'podcast', 'artikel'], 'B', 'Lihat Tabel 2.1.', 54),
        pg('Konten digital yang bersifat dinamis adalah ...', ['teks dan gambar', 'audio dan video', 'poster cetak', 'buku tulis'], 'B', 'Teks dan gambar bersifat statis.', 51),
        pg('Langkah pertama dalam membuat konten digital adalah ...', ['langsung merekam video', 'menentukan tujuan dan ide konten', 'memilih filter', 'membagikan ke media sosial'], 'B', 'Kunci PG no. 4: tujuan menjadi fondasi konten.', 64),
        pg('Menggunakan gambar dari internet dalam kontenmu sebaiknya ...', ['bebas, karena semua gambar internet gratis', 'memakai yang bebas lisensi/berizin dan mencantumkan sumber', 'dipotong agar tidak dikenali', 'diberi nama sendiri'], 'B', 'Menghargai hak cipta karya orang lain.', 56),
        pg('Hak cipta adalah ...', ['izin membuat akun', 'perlindungan hukum atas karya ciptaan', 'jumlah pengikut media sosial', 'aplikasi desain'], 'B', 'Kunci menjodohkan no. 4.', '117 (BG)'),
        pg('Aplikasi yang menyediakan templat desain untuk infografik atau poster sederhana adalah ...', ['Canva', 'Kalkulator', 'Google Maps', 'Scratch'], 'A', 'Kunci PG no. 3.', '116 (BG)'),
        pg('Tujuan utama tata letak visual adalah ...', ['membuat konten penuh tulisan', 'menarik perhatian dan memudahkan audiens memahami konten', 'menambah ukuran file', 'menyembunyikan informasi'], 'B', 'Kunci PG no. 2.', '116 (BG)'),
        pg('Dalam prinsip tata letak visual, keseimbangan berarti ...', ['semua elemen menumpuk di kiri', 'penempatan elemen proporsional, tidak berat sebelah', 'hanya memakai satu warna', 'tidak ada gambar'], 'B', 'Kunci PG no. 5.', '116 (BG)'),
        pg('Ruang kosong yang membuat tampilan tidak penuh dan mudah dibaca disebut ...', ['white space', 'watermark', 'wallpaper', 'widget'], 'A', 'Salah satu prinsip dasar tata letak visual.', '118 (BG)'),
        pg('Struktur cerita sederhana tiga bagian terdiri atas ...', ['judul – gambar – musik', 'pembuka – isi/konflik – penutup', 'ide – slogan – iklan', 'awal – iklan – akhir'], 'B', 'Dirancang dengan bantuan storyboard.', '101 (BG)'),
        pg('Rangkaian gambar adegan untuk merencanakan urutan cerita disebut ...', ['storyboard', 'spreadsheet', 'template', 'thumbnail'], 'A', 'Storyboard = kerangka visual cerita.', '103 (BG)'),
        pg('Slide presentasi paling tepat digunakan untuk ...', ['menyampaikan poin penting secara berurutan dan terstruktur', 'merekam suara', 'menghitung nilai', 'menyimpan kata sandi'], 'A', 'Kunci menjodohkan no. 2.', '117 (BG)'),
        pg('Konten promosi produk kerajinan lokal cocok disampaikan melalui ...', ['poster digital atau video pendek', 'surat pribadi', 'catatan harian', 'soal ulangan'], 'A', 'Tujuan konten menentukan gaya dan media.', 64),
        isian('Aplikasi presentasi Google yang memudahkan kerja kolaboratif adalah Google ...', 'slides|slide', 'Disebut dalam pembelajaran berdiferensiasi Aktivitas 6–7.', '106 (BG)'),
      ],
    },
    {
      nama: 'Bab 3 · Literasi dan Etika Kecerdasan Artifisial',
      kelas: '7 (Smt 2)', sumber: BG + ', Bab 3, hlm. 124–192',
      materi: `- **Kecerdasan Artifisial (KA)**: teknologi yang memungkinkan komputer melakukan tugas yang biasanya butuh kecerdasan manusia; bekerja dengan memproses data, mengenali pola, lalu memprediksi/memutuskan (hlm. 127)
- **KA generatif**: KA yang mampu menciptakan konten baru (teks, gambar, musik, video), contohnya ChatGPT, Gemini, Meta AI (hlm. 127)
- **Lima ide besar KA**: persepsi (filter wajah), representasi & penalaran (Google Maps rute tercepat), pembelajaran (rekomendasi YouTube), interaksi natural (Siri, chatbot), dampak sosial (hlm. 127–128, 141)
- **Risiko**: **bias** (memihak karena data latih bias), **halusinasi** (info salah tampak benar), **ketergantungan**, **isu hak cipta** (hlm. 128–129)
- **Etika KA**: keadilan, transparansi, privasi, penghargaan pada karya manusia. Panduan remaja: jaga privasi, verifikasi informasi, tujuan positif, hindari bias, bertanggung jawab (hlm. 129, 179)
- KA mengenali **pola dari data**, bukan memahami seperti manusia (hlm. 149). Dampak pada pekerjaan: berisiko tinggi (kasir), berubah signifikan (guru), sedikit berubah (aktor), pekerjaan baru (prompt engineer) (hlm. 189)`,
      soal: [
        pg('KA yang mampu menciptakan konten baru seperti teks, gambar, dan musik disebut KA ...', ['prediktif', 'generatif', 'robotik', 'manual'], 'B', 'Contoh: ChatGPT, Gemini, Meta AI.', 127),
        pg('Filter Instagram yang mengenali wajah merupakan contoh ide besar KA ...', ['persepsi', 'penalaran', 'pembelajaran', 'dampak sosial'], 'A', 'Persepsi = kemampuan "melihat" dan "mendengar".', 141),
        pg('Google Maps memilih rute tercepat berdasarkan kondisi lalu lintas. Ini contoh ide besar KA ...', ['persepsi', 'representasi dan penalaran', 'interaksi natural', 'dampak sosial'], 'B', 'Komputer menyimpan informasi lalu bernalar untuk memutuskan.', 128),
        pg('YouTube menyarankan video sesuai riwayat tontonan. Ini contoh ide besar KA ...', ['pembelajaran (machine learning)', 'persepsi', 'interaksi natural', 'dampak sosial'], 'A', 'Sistem belajar dari data dan pola pengguna.', 128),
        pg('Berbicara dengan asisten suara seperti Siri merupakan contoh ...', ['persepsi', 'interaksi natural', 'penalaran', 'dampak sosial'], 'B', 'Komputer berkomunikasi secara alami lewat bahasa/suara.', 128),
        pg('KA lebih sering menampilkan laki-laki saat diminta menggambar "pemimpin" karena data latihnya didominasi laki-laki. Risiko ini disebut ...', ['halusinasi', 'bias', 'ketergantungan', 'plagiarisme'], 'B', 'Bias muncul dari data latih yang tidak seimbang.', 128),
        pg('KA menyebutkan sumber kutipan yang sebenarnya tidak ada seolah-olah benar. Risiko ini disebut ...', ['bias', 'halusinasi', 'ketergantungan', 'enkripsi'], 'B', 'Halusinasi = informasi keliru yang tampak meyakinkan.', 129),
        pg('Siswa terbiasa meminta jawaban ke KA tanpa mencoba memahami materi. Risiko yang muncul adalah ...', ['ketergantungan', 'bias', 'halusinasi', 'privasi'], 'A', 'Kemampuan analisis dan kreativitas bisa menurun.', 129),
        pg('"Komodo hidup hingga 150 tahun dan selnya bisa menyembuhkan kanker." Teks KA seperti ini sebaiknya ...', ['langsung dibagikan', 'dicurigai sebagai halusinasi dan diverifikasi ke sumber tepercaya', 'dihafalkan', 'dianggap pasti benar karena dari KA'], 'B', 'Contoh Tabel 3.13: informasi tersebut tidak benar.', 165),
        pg('Perdebatan "karya KA milik siapa: pembuat algoritma, pemberi prompt, atau tidak bisa diklaim" termasuk isu ...', ['hak cipta', 'bias', 'halusinasi', 'keamanan jaringan'], 'A', 'Isu hak cipta masih diperdebatkan dalam hukum.', 129),
        pg('Prinsip etika KA "tidak menuliskan nama asli atau alamat di prompt" disebut ...', ['verifikasi informasi', 'jaga privasi', 'hindari bias', 'tujuan positif'], 'B', 'Lihat Tabel 3.17.', 179),
        pg('Memberi keterangan jika menggunakan bantuan KA dalam tugas merupakan penerapan prinsip ...', ['bertanggung jawab', 'hindari bias', 'jaga privasi', 'ketergantungan'], 'A', 'Transparan tentang penggunaan KA.', 179),
        pg('Pernyataan yang tepat tentang cara kerja KA adalah ...', ['KA memahami makna seperti manusia', 'KA belajar dari data dan pola, bukan pemahaman seperti manusia', 'KA tidak membutuhkan data', 'KA selalu benar'], 'B', 'Ditekankan pada Aktivitas 3 "Menjadi Detektif Pola".', 149),
        pg('Deret 1, 3, 6, 10, 15, ... memiliki dua angka berikutnya ...', ['20 dan 25', '21 dan 28', '18 dan 21', '21 dan 27'], 'B', 'Selisihnya bertambah 2, 3, 4, 5, 6, 7 → 21, 28.', 153),
        pg('Menurut contoh pengelompokan pekerjaan, profesi yang muncul karena KA adalah ...', ['kasir', 'prompt engineer', 'aktor', 'petani'], 'B', 'Prompt engineer membuat instruksi untuk KA generatif.', 189),
        pg('Pekerjaan kasir dikategorikan berisiko tinggi digantikan KA karena ...', ['membutuhkan emosi', 'tugasnya rutin dan dapat diotomatisasi', 'membutuhkan kreativitas tinggi', 'tidak memakai data'], 'B', 'Lihat contoh jawaban Aktivitas 10.', 189),
        isian('Deret Fibonacci 1, 1, 2, 3, 5, 8, 13, ... Angka berikutnya adalah ...', '21', 'Setiap angka = jumlah dua angka sebelumnya: 8 + 13 = 21 (lalu 34).', 153),
      ],
    },
    {
      nama: 'Bab 4 · Mengembangkan Sistem Kecerdasan Artifisial',
      kelas: '7 (Smt 2)', sumber: BG + ', Bab 4, hlm. 198–244',
      materi: `- **Teachable Machine**: platform berbasis web untuk melatih model KA **tanpa pemrograman**; proyek gambar, suara (Audio Project), dan pose (Pose Project) (hlm. 198, 212–224)
- Langkah: buat/ganti nama **kelas** (kategori, misal "Pensil", "Buku") → rekam **sampel** (Hold to Record) dari berbagai sudut → klik **Train Model** → **uji** di panel pengujian (hlm. 213)
- Akurasi naik jika data **banyak dan bervariasi** (sudut, cahaya, latar, suara beberapa orang). Suara terganggu **kebisingan latar**; tambahkan kelas "Background Noise" (hlm. 216–223)
- **Prompt engineering**: keterampilan merancang perintah/pertanyaan yang efektif agar KA memberi hasil terbaik. Empat prinsip: **kejelasan, spesifisitas, konteks, struktur**; teknik: peran, langkah demi langkah, batasan, format output (hlm. 229–231)
- Manusia tetap berperan sebagai **filter nilai dan keaslian** hasil KA (hlm. 240)`,
      soal: [
        pg('Teachable Machine adalah platform berbasis web yang digunakan untuk ...', ['membuat robot fisik', 'melatih model KA tanpa perlu pemrograman', 'mengedit video otomatis', 'menggambar ilustrasi manual'], 'B', 'Soal sumatif no. 2.', 241),
        pg('Perhatikan: (1) mengelompokkan gambar berdasarkan objek, (2) mengubah suara menjadi teks, (3) mengenali pose tubuh, (4) menghitung penjumlahan. Contoh penerapan KA adalah ...', ['(1), (2), dan (3)', '(1), (2), dan (4)', '(2), (3), dan (4)', '(1), (3), dan (4)'], 'A', 'Penjumlahan biasa tidak memerlukan KA.', 240),
        pg('Tujuan utama prompt engineering adalah ...', ['menghasilkan kode program', 'mendapatkan output terbaik dari KA melalui input yang jelas dan spesifik', 'mengurangi kapasitas penyimpanan', 'mengganti peran guru'], 'B', 'Soal sumatif no. 3.', 241),
        pg('Perhatikan pasangan: (1) pengenalan gambar – foto, (2) pengenalan suara – gelombang suara, (3) pengenalan pose – teks, (4) prompt engineering – perintah/pertanyaan. Pasangan yang benar adalah ...', ['(1) dan (2) saja', '(1), (2), dan (4)', '(2), (3), dan (4)', 'semua benar'], 'B', 'Input pengenalan pose berupa gambar/posisi tubuh, bukan teks.', 241),
        pg('Salah satu tantangan pengenalan suara oleh KA adalah ...', ['variasi warna objek', 'kebisingan latar (background noise)', 'resolusi gambar', 'ukuran file'], 'B', 'Soal sumatif no. 5.', 241),
        pg('Dalam projek "Pemilah Sampah Pintar", gambar sampah diambil dari berbagai sudut dan latar belakang agar ...', ['model lebih cepat dilatih', 'model mampu mengenali objek dalam berbagai kondisi', 'gambar lebih menarik', 'jumlah data berkurang'], 'B', 'Soal sumatif no. 14.', 242),
        pg('Agar model mengenali perintah "Nyalakan lampu" dari beberapa orang berbeda, langkah penting adalah ...', ['menggunakan satu suara saja', 'merekam perintah dengan variasi suara dari beberapa orang', 'hanya merekam suara guru', 'menambah jumlah kelas'], 'B', 'Soal sumatif no. 15.', 242),
        pg('Dalam Teachable Machine, "kelas" adalah ...', ['ruang belajar', 'kategori/label data yang ingin dikenali model', 'tombol pelatihan', 'jenis browser'], 'B', 'Contoh kelas: "Pensil" dan "Buku".', 213),
        pg('Setelah semua sampel direkam di Teachable Machine, tombol yang diklik untuk melatih model adalah ...', ['Export Model', 'Train Model', 'Hold to Record', 'Upload'], 'B', 'Lalu model diuji di panel pengujian.', 213),
        pg('Gim yang dikendalikan dengan gerakan tubuh memanfaatkan teknologi ...', ['pengenalan pose', 'pengenalan suara', 'prompt engineering', 'klasifikasi teks'], 'A', 'Soal menjodohkan no. 18.', 243),
        pg('Empat prinsip dasar prompt engineering adalah ...', ['kejelasan, spesifisitas, konteks, struktur', 'warna, huruf, gambar, suara', 'cepat, singkat, acak, panjang', 'input, proses, output, simpan'], 'A', 'Dijelaskan pada Aktivitas 5.', 229),
        pg('Prompt yang paling efektif adalah ...', ['"Jelaskan fotosintesis."', '"Jelaskan proses fotosintesis dalam bahasa sederhana untuk siswa SMP, sertakan tiga poin utama dan contoh sehari-hari."', '"Fotosintesis?"', '"Tulis sesuatu tentang tumbuhan."'], 'B', 'Memenuhi spesifisitas, konteks, dan struktur (Tabel 4.8).', 231),
        pg('Model pengenal buku sering salah saat cahaya redup dan latar ramai. Saran perbaikannya adalah ...', ['menghapus kelas buku', 'menambah contoh gambar buku pada kondisi cahaya dan latar berbeda', 'mengurangi jumlah sampel', 'mematikan kamera'], 'B', 'Contoh jawaban Aktivitas 1.', 216),
        pg('Slogan buatan KA terasa terlalu formal, lalu siswa merevisinya agar sesuai audiens. Hal ini menunjukkan bahwa ...', ['hasil KA tidak boleh dipakai sama sekali', 'manusia tetap berperan sebagai filter nilai dan keaslian', 'KA selalu lebih baik dari manusia', 'revisi tidak diperlukan'], 'B', 'Analisis Aktivitas 7 Kampanye Digital.', 240),
        pg('Saat berinteraksi dengan sistem KA, sikap yang benar adalah ...', ['membagikan alamat rumah agar jawaban akurat', 'tidak membagikan data pribadi dan memverifikasi informasi', 'percaya penuh pada semua jawaban', 'memakai KA untuk menyontek'], 'B', 'Aspek keterampilan digital dan etika.', 203),
        isian('Istilah untuk keterampilan merancang perintah/pertanyaan yang efektif bagi KA adalah prompt ...', 'engineering', 'Prompt engineering.', 229),
      ],
    },
  ]);
})();
