// Bank soal bawaan — Kelas 7 (1 MTs), semester 1, Kurikulum Merdeka.
// Soal tambahan bisa ditulis langsung di sheet "BankSoal" dan "Materi"
// pada Google Sheet — aplikasi akan menggabungkannya otomatis.
//
// Kategori per mapel: kategori: 'pelajaran' (bawaan jika dikosongkan) atau 'lomba'.
// Soal lomba diberi nama kompetisinya (kompetisi: 'KSM'), sehingga di aplikasi
// tersusun Kompetisi → Mapel → Topik. Nama mapel boleh sama dengan mapel pelajaran.
//
// Format soal:
//   { tipe: 'pg', pertanyaan, pilihan: [A, B, C, D], jawaban: 'B', pembahasan }
//   { tipe: 'isian', pertanyaan, jawaban: '63', pembahasan }  // beberapa kunci: '63|enam puluh tiga'
// Format materi: teks biasa; baris kosong = paragraf baru, "- " = daftar, **tebal**.

// Catatan: Matematika, IPA, IPS, PAI, dan KKA berbasis buku teks resmi ada di folder js/soal-buku/.

window.BANK_SOAL = [
  {
    mapel: 'Bahasa Indonesia',
    kategori: 'pelajaran',
    ikon: '📖',
    topik: [
      {
        nama: 'Teks Deskripsi',
        kelas: '7',
        materi: `**Teks deskripsi** adalah teks yang menggambarkan suatu objek (tempat, benda, orang, atau hewan) secara rinci sehingga pembaca seolah-olah melihat, mendengar, atau merasakan sendiri.

**Struktur teks deskripsi:**
- **Identifikasi**: gambaran umum objek
- **Deskripsi bagian**: rincian bagian-bagian objek
- **Simpulan/kesan**: kesan penulis terhadap objek

**Ciri kebahasaan:**
- Banyak menggunakan **kata sifat** (indah, sejuk, rapi)
- Menggunakan **pancaindra** (penglihatan, pendengaran, penciuman, perabaan, pengecapan)
- Menggunakan **majas**, misalnya perumpamaan (seperti, bagaikan, laksana)
- Kata keterangan tempat dan kata rinci

Contoh: "Pasir Pantai Kuta Mandalika berbutir besar seperti merica. Suara ombaknya bergemuruh memecah karang."`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Teks yang menggambarkan suatu objek secara rinci sehingga pembaca seolah-olah melihat sendiri disebut teks ...', pilihan: ['narasi', 'deskripsi', 'prosedur', 'eksposisi'], jawaban: 'B', pembahasan: 'Teks deskripsi melukiskan objek secara rinci melalui pancaindra.' },
          { tipe: 'pg', pertanyaan: 'Bagian teks deskripsi yang berisi gambaran umum objek disebut ...', pilihan: ['identifikasi', 'deskripsi bagian', 'simpulan', 'orientasi'], jawaban: 'A', pembahasan: 'Struktur teks deskripsi: identifikasi (gambaran umum) → deskripsi bagian → simpulan/kesan.' },
          { tipe: 'pg', pertanyaan: '"Pasir pantai itu berwarna putih dan berbutir besar seperti merica." Kalimat tersebut menggunakan indra ...', pilihan: ['pendengaran', 'penglihatan', 'penciuman', 'pengecapan'], jawaban: 'B', pembahasan: 'Warna dan bentuk butiran pasir diketahui dengan melihat, jadi indra penglihatan.' },
          { tipe: 'pg', pertanyaan: '"Suara ombak bergemuruh memecah karang." Kalimat tersebut menggunakan indra ...', pilihan: ['penglihatan', 'perabaan', 'pendengaran', 'penciuman'], jawaban: 'C', pembahasan: 'Suara ombak diketahui melalui telinga, jadi indra pendengaran.' },
          { tipe: 'pg', pertanyaan: 'Kata sifat dalam kalimat "Kamar Dina selalu rapi dan wangi" adalah ...', pilihan: ['kamar dan Dina', 'selalu dan dan', 'rapi dan wangi', 'Dina dan selalu'], jawaban: 'C', pembahasan: 'Rapi dan wangi menerangkan keadaan kamar, sehingga termasuk kata sifat.' },
          { tipe: 'pg', pertanyaan: '"Wajahnya bersinar bagaikan bulan purnama." Majas dalam kalimat tersebut adalah majas ...', pilihan: ['perumpamaan (simile)', 'personifikasi', 'hiperbola', 'litotes'], jawaban: 'A', pembahasan: 'Majas perumpamaan membandingkan dua hal dengan kata "bagaikan", "seperti", atau "laksana".' },
          { tipe: 'isian', pertanyaan: 'Bagian akhir teks deskripsi yang berisi kesan penulis disebut ... (dua kemungkinan jawaban)', jawaban: 'simpulan|kesan|simpulan/kesan|kesimpulan', pembahasan: 'Bagian akhir teks deskripsi disebut simpulan atau kesan.' },
        ],
      },
    ],
  },
  {
    mapel: 'Bahasa Inggris',
    kategori: 'pelajaran',
    ikon: '🇬🇧',
    topik: [
      {
        nama: 'About Me (Simple Present)',
        kelas: '7',
        materi: `**Greetings & Introducing**
- Good morning / Good afternoon / Good evening
- Hello, my name is Ahmad. I am twelve years old.
- I live in Mataram. I am a student at MTs ...
- Nice to meet you. — Nice to meet you too.

**To be (am / is / are)**
- I **am**
- He / She / It **is**
- You / We / They **are**

**Simple Present Tense** — untuk kebiasaan dan fakta.
- I / You / We / They + kata kerja dasar: I **play** football.
- He / She / It + kata kerja + **s/es**: She **goes** to school. He **watches** TV.
- have → **has** untuk he / she / it`,
        soal: [
          { tipe: 'pg', pertanyaan: 'A: "Hello, I am Sarah. Nice to meet you."\nB: "..."', pilihan: ['Good bye.', 'Nice to meet you too.', 'I am fine.', 'See you later.'], jawaban: 'B', pembahasan: 'Jawaban yang tepat untuk "Nice to meet you" adalah "Nice to meet you too."' },
          { tipe: 'pg', pertanyaan: 'I ... a student at MTs Negeri 1 Mataram.', pilihan: ['is', 'are', 'am', 'be'], jawaban: 'C', pembahasan: 'Subjek "I" selalu menggunakan "am".' },
          { tipe: 'pg', pertanyaan: 'She ... to school by bicycle every day.', pilihan: ['go', 'goes', 'going', 'is go'], jawaban: 'B', pembahasan: 'Subjek she (orang ketiga tunggal) pada simple present: go + es = goes.' },
          { tipe: 'pg', pertanyaan: 'They ... football every Sunday afternoon.', pilihan: ['plays', 'playing', 'play', 'is play'], jawaban: 'C', pembahasan: 'Subjek they menggunakan kata kerja dasar tanpa s: play.' },
          { tipe: 'isian', pertanyaan: 'He ... (have) a beautiful cat.', jawaban: 'has', pembahasan: 'Untuk he/she/it, "have" berubah menjadi "has".' },
          { tipe: 'pg', pertanyaan: 'A: "Where do you live?"\nB: "..."', pilihan: ['I am twelve years old.', 'I live in Mataram.', 'My name is Budi.', 'I like reading.'], jawaban: 'B', pembahasan: '"Where do you live?" menanyakan tempat tinggal, jawabannya "I live in ...".' },
          { tipe: 'pg', pertanyaan: 'Kalimat yang digunakan untuk menyapa pada pukul 07.00 pagi adalah ...', pilihan: ['Good night', 'Good evening', 'Good afternoon', 'Good morning'], jawaban: 'D', pembahasan: 'Good morning digunakan dari pagi hingga sebelum pukul 12.00 siang.' },
          { tipe: 'isian', pertanyaan: 'My father ... (watch) the news every night.', jawaban: 'watches', pembahasan: 'Subjek my father = he. Kata kerja berakhiran -ch ditambah -es: watches.' },
        ],
      },
    ],
  },
  {
    mapel: 'Al-Qur\'an Hadis',
    kategori: 'pelajaran',
    ikon: '📗',
    topik: [
      {
        nama: 'Hukum Nun Mati dan Tanwin',
        kelas: '7',
        materi: `Jika **nun mati (نْ)** atau **tanwin (ـً ـٍ ـٌ)** bertemu huruf hijaiah, hukum bacaannya ada lima:

- **Izhar halqi**: bertemu huruf ء ه ع ح غ خ (6 huruf). Dibaca **jelas**. Contoh: مَنْ اٰمَنَ
- **Idgam bigunnah**: bertemu ي ن م و (disingkat "yanmu"). Dilebur **dengan dengung**. Contoh: مَنْ يَّقُوْلُ
- **Idgam bilagunnah**: bertemu ل ر. Dilebur **tanpa dengung**. Contoh: مِنْ رَّبِّهِمْ
- **Iqlab**: bertemu ب. Nun/tanwin berubah menjadi bunyi **mim** dengan dengung. Contoh: سَمِيْعٌۢ بَصِيْرٌ
- **Ikhfa haqiqi**: bertemu 15 huruf sisanya. Dibaca **samar** dengan dengung. Contoh: مِنْ كُلِّ`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Nun mati atau tanwin yang bertemu huruf ب hukum bacaannya adalah ...', pilihan: ['izhar', 'ikhfa', 'iqlab', 'idgam bigunnah'], jawaban: 'C', pembahasan: 'Iqlab terjadi jika nun mati/tanwin bertemu ب, dibaca berubah menjadi bunyi mim.' },
          { tipe: 'pg', pertanyaan: 'Huruf-huruf idgam bigunnah adalah ...', pilihan: ['ل ر', 'ي ن م و', 'ء ه ع ح غ خ', 'ب'], jawaban: 'B', pembahasan: 'Idgam bigunnah memiliki 4 huruf: ي ن م و (yanmu).' },
          { tipe: 'pg', pertanyaan: 'Bacaan مِنْ رَّبِّهِمْ termasuk hukum ...', pilihan: ['idgam bilagunnah', 'idgam bigunnah', 'ikhfa', 'izhar'], jawaban: 'A', pembahasan: 'Nun mati bertemu huruf ر, dibaca lebur tanpa dengung: idgam bilagunnah.' },
          { tipe: 'pg', pertanyaan: 'Bacaan مَنْ اٰمَنَ termasuk hukum ...', pilihan: ['ikhfa', 'iqlab', 'izhar halqi', 'idgam bigunnah'], jawaban: 'C', pembahasan: 'Nun mati bertemu hamzah (ء), salah satu huruf halqi, dibaca jelas: izhar halqi.' },
          { tipe: 'isian', pertanyaan: 'Jumlah huruf ikhfa haqiqi adalah ... huruf.', jawaban: '15|lima belas', pembahasan: 'Ikhfa haqiqi memiliki 15 huruf, yaitu huruf hijaiah selain huruf izhar, idgam, dan iqlab.' },
          { tipe: 'pg', pertanyaan: 'Cara membaca izhar halqi adalah ...', pilihan: ['dibaca samar', 'dibaca jelas tanpa dengung', 'dilebur dengan dengung', 'diubah menjadi mim'], jawaban: 'B', pembahasan: 'Izhar artinya jelas; nun mati/tanwin dibaca jelas tanpa dengung.' },
          { tipe: 'pg', pertanyaan: 'Bacaan سَمِيْعٌۢ بَصِيْرٌ termasuk hukum ...', pilihan: ['ikhfa', 'iqlab', 'izhar', 'idgam bilagunnah'], jawaban: 'B', pembahasan: 'Tanwin bertemu huruf ب sehingga hukumnya iqlab.' },
          { tipe: 'isian', pertanyaan: 'Jumlah huruf izhar halqi adalah ... huruf.', jawaban: '6|enam', pembahasan: 'Huruf izhar halqi ada 6: ء ه ع ح غ خ.' },
        ],
      },
    ],
  },
  {
    mapel: 'Akidah Akhlak',
    kategori: 'pelajaran',
    ikon: '🤲',
    topik: [
      {
        nama: 'Sifat Wajib Allah',
        kelas: '7',
        materi: `**Sifat wajib** Allah adalah sifat yang pasti ada pada Allah Swt. Jumlahnya **20**. Lawannya disebut **sifat mustahil** (20 sifat), sedangkan **sifat jaiz** Allah ada satu: berbuat sesuatu atau tidak berbuat sesuatu.

Beberapa sifat wajib Allah:
- **Wujud**: ada (mustahil: 'adam, tiada)
- **Qidam**: terdahulu, tanpa permulaan (mustahil: hudus, baru)
- **Baqa'**: kekal (mustahil: fana', rusak/binasa)
- **Mukhalafatu lil hawadis**: berbeda dengan makhluk
- **Qiyamuhu binafsihi**: berdiri sendiri, tidak membutuhkan yang lain
- **Wahdaniyah**: Esa
- **Qudrat**: berkuasa; **Iradat**: berkehendak; **Ilmu**: mengetahui
- **Hayat**: hidup; **Sama'**: mendengar; **Basar**: melihat; **Kalam**: berfirman

Meyakini sifat-sifat Allah membuat kita selalu merasa diawasi (muraqabah) sehingga berhati-hati dalam bersikap.`,
        soal: [
          { tipe: 'isian', pertanyaan: 'Jumlah sifat wajib bagi Allah adalah ...', jawaban: '20|dua puluh', pembahasan: 'Sifat wajib bagi Allah berjumlah 20, dan sifat mustahilnya juga 20.' },
          { tipe: 'pg', pertanyaan: 'Sifat wujud artinya ...', pilihan: ['kekal', 'ada', 'esa', 'terdahulu'], jawaban: 'B', pembahasan: 'Wujud artinya Allah itu ada.' },
          { tipe: 'pg', pertanyaan: 'Sifat qidam artinya ...', pilihan: ['terdahulu (tanpa permulaan)', 'kekal', 'berkuasa', 'hidup'], jawaban: 'A', pembahasan: 'Qidam artinya Allah terdahulu, tidak ada permulaan bagi-Nya.' },
          { tipe: 'pg', pertanyaan: 'Sifat baqa\' artinya ...', pilihan: ['ada', 'esa', 'kekal', 'mendengar'], jawaban: 'C', pembahasan: 'Baqa\' artinya Allah kekal, tidak akan binasa. Lawannya fana\'.' },
          { tipe: 'pg', pertanyaan: 'Sifat mustahil bagi Allah yang merupakan lawan dari wujud adalah ...', pilihan: ['hudus', 'fana\'', '\'adam', 'ajzun'], jawaban: 'C', pembahasan: 'Lawan wujud (ada) adalah \'adam (tiada).' },
          { tipe: 'pg', pertanyaan: 'Allah berbeda dengan semua makhluk-Nya. Hal ini merupakan sifat ...', pilihan: ['qiyamuhu binafsihi', 'mukhalafatu lil hawadis', 'wahdaniyah', 'iradat'], jawaban: 'B', pembahasan: 'Mukhalafatu lil hawadis artinya Allah berbeda dengan makhluk (yang baru).' },
          { tipe: 'pg', pertanyaan: 'Sifat Allah yang artinya Maha Mendengar adalah ...', pilihan: ['basar', 'kalam', 'sama\'', 'hayat'], jawaban: 'C', pembahasan: 'Sama\' artinya mendengar; basar melihat; kalam berfirman; hayat hidup.' },
          { tipe: 'pg', pertanyaan: 'Sifat jaiz bagi Allah adalah ...', pilihan: ['wajib berbuat baik', 'berbuat sesuatu atau tidak berbuat sesuatu', 'mustahil berbuat', 'harus menciptakan'], jawaban: 'B', pembahasan: 'Sifat jaiz Allah: boleh bagi Allah berbuat sesuatu atau tidak berbuatnya.' },
          { tipe: 'pg', pertanyaan: 'Sikap yang mencerminkan keyakinan bahwa Allah Maha Melihat (basar) adalah ...', pilihan: ['berbuat baik hanya saat dilihat guru', 'jujur walaupun tidak ada yang melihat', 'mencontek saat guru keluar', 'malas beribadah'], jawaban: 'B', pembahasan: 'Yakin Allah Maha Melihat membuat kita tetap jujur dan berbuat baik di mana pun.' },
        ],
      },
    ],
  },
  {
    mapel: 'Fikih',
    kategori: 'pelajaran',
    ikon: '💧',
    topik: [
      {
        nama: 'Taharah (Najis, Wudu, Tayamum)',
        kelas: '7',
        materi: `**Taharah** artinya bersuci dari hadas dan najis.

**Macam-macam air:**
- **Air mutlak**: suci dan menyucikan (air hujan, sumur, laut, sungai)
- **Air musta'mal**: suci tetapi tidak menyucikan (air bekas bersuci)
- **Air mutanajis**: air yang terkena najis

**Macam-macam najis dan cara menyucikannya:**
- **Mukhaffafah** (ringan): air kencing bayi laki-laki di bawah 2 tahun yang hanya minum ASI → cukup **dipercik air**
- **Mutawassitah** (sedang): darah, nanah, kotoran manusia/hewan → dicuci hingga hilang **warna, bau, dan rasanya**
- **Mugallazah** (berat): anjing dan babi → dicuci **7 kali, salah satunya dengan tanah**

**Rukun wudu (6):** niat, membasuh muka, membasuh kedua tangan sampai siku, mengusap sebagian kepala, membasuh kedua kaki sampai mata kaki, tertib.

**Tayamum**: pengganti wudu/mandi dengan **debu yang suci** ketika tidak ada air atau sakit.`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Air yang suci dan menyucikan disebut air ...', pilihan: ['musta\'mal', 'mutlak', 'mutanajis', 'musyammas'], jawaban: 'B', pembahasan: 'Air mutlak (air hujan, sumur, laut, sungai) suci dan dapat digunakan untuk bersuci.' },
          { tipe: 'pg', pertanyaan: 'Air kencing bayi laki-laki yang belum berumur 2 tahun dan hanya minum ASI termasuk najis ...', pilihan: ['mugallazah', 'mutawassitah', 'mukhaffafah', 'ma\'fu'], jawaban: 'C', pembahasan: 'Najis mukhaffafah (ringan) contohnya air kencing bayi laki-laki yang hanya minum ASI.' },
          { tipe: 'pg', pertanyaan: 'Cara menyucikan najis mukhaffafah adalah ...', pilihan: ['dicuci 7 kali', 'dipercikkan air', 'dibakar', 'dijemur'], jawaban: 'B', pembahasan: 'Najis mukhaffafah cukup dipercikkan air hingga merata.' },
          { tipe: 'pg', pertanyaan: 'Najis mugallazah disucikan dengan cara ...', pilihan: ['dipercik air sekali', 'dicuci 3 kali', 'dicuci 7 kali, salah satunya dengan tanah', 'dilap dengan kain'], jawaban: 'C', pembahasan: 'Najis berat (anjing dan babi) dicuci 7 kali, salah satunya dicampur tanah.' },
          { tipe: 'isian', pertanyaan: 'Rukun wudu ada ... (tulis angka)', jawaban: '6|enam', pembahasan: 'Rukun wudu ada 6: niat, membasuh muka, membasuh tangan sampai siku, mengusap sebagian kepala, membasuh kaki sampai mata kaki, dan tertib.' },
          { tipe: 'pg', pertanyaan: 'Berikut ini yang membatalkan wudu adalah ...', pilihan: ['makan', 'minum', 'buang angin', 'berbicara'], jawaban: 'C', pembahasan: 'Keluarnya sesuatu dari qubul atau dubur, termasuk buang angin, membatalkan wudu.' },
          { tipe: 'pg', pertanyaan: 'Tayamum dilakukan menggunakan ...', pilihan: ['air bersih', 'debu yang suci', 'batu', 'daun'], jawaban: 'B', pembahasan: 'Tayamum menggunakan debu yang suci sebagai pengganti wudu atau mandi.' },
          { tipe: 'pg', pertanyaan: 'Darah dan nanah termasuk najis ...', pilihan: ['mukhaffafah', 'mutawassitah', 'mugallazah', 'bukan najis'], jawaban: 'B', pembahasan: 'Darah, nanah, dan kotoran termasuk najis mutawassitah (sedang).' },
        ],
      },
    ],
  },
  {
    mapel: 'Sejarah Kebudayaan Islam',
    kategori: 'pelajaran',
    ikon: '🕌',
    topik: [
      {
        nama: 'Dakwah Nabi Muhammad di Makkah',
        kelas: '7',
        materi: `Nabi Muhammad saw. lahir di Makkah pada **Tahun Gajah** (sekitar 570 M). Beliau menerima wahyu pertama, **QS. Al-'Alaq ayat 1–5**, di **Gua Hira** pada usia 40 tahun.

**Dakwah secara sembunyi-sembunyi** berlangsung sekitar **3 tahun**, berpusat di rumah **Arqam bin Abil Arqam (Darul Arqam)**. Orang-orang pertama yang masuk Islam disebut **as-Sabiqunal Awwalun**, antara lain:
- Khadijah binti Khuwailid (istri Nabi)
- Ali bin Abi Thalib (dari kalangan anak-anak)
- Abu Bakar ash-Shiddiq (dari kalangan laki-laki dewasa)
- Zaid bin Haritsah (anak angkat Nabi)

**Dakwah secara terang-terangan** dimulai setelah turun QS. Al-Hijr ayat 94. Kaum Quraisy menentang dengan keras sehingga sebagian sahabat **hijrah ke Habasyah** (Etiopia).

**'Amul Huzni** (tahun kesedihan): tahun wafatnya **Khadijah** dan **Abu Thalib**, dua pendukung utama dakwah Nabi.`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Wahyu pertama yang diterima Nabi Muhammad saw. adalah ...', pilihan: ['QS. Al-Fatihah ayat 1–7', 'QS. Al-\'Alaq ayat 1–5', 'QS. Al-Muddassir ayat 1–7', 'QS. Al-Ikhlas ayat 1–4'], jawaban: 'B', pembahasan: 'Wahyu pertama adalah QS. Al-\'Alaq ayat 1–5, diterima di Gua Hira.' },
          { tipe: 'pg', pertanyaan: 'Nabi Muhammad saw. menerima wahyu pertama di ...', pilihan: ['Gua Tsur', 'Gua Hira', 'Masjidil Haram', 'Bukit Shafa'], jawaban: 'B', pembahasan: 'Wahyu pertama turun di Gua Hira, Jabal Nur.' },
          { tipe: 'isian', pertanyaan: 'Dakwah Nabi secara sembunyi-sembunyi berlangsung sekitar ... tahun.', jawaban: '3|tiga', pembahasan: 'Dakwah sembunyi-sembunyi berlangsung sekitar 3 tahun.' },
          { tipe: 'pg', pertanyaan: 'Orang-orang yang pertama kali masuk Islam disebut ...', pilihan: ['Muhajirin', 'Ansar', 'as-Sabiqunal Awwalun', 'Khulafaur Rasyidin'], jawaban: 'C', pembahasan: 'As-Sabiqunal Awwalun artinya orang-orang yang pertama masuk Islam.' },
          { tipe: 'pg', pertanyaan: 'Rumah yang dijadikan pusat dakwah pada masa sembunyi-sembunyi adalah rumah ...', pilihan: ['Abu Bakar', 'Arqam bin Abil Arqam', 'Abu Thalib', 'Khadijah'], jawaban: 'B', pembahasan: 'Rumah Arqam bin Abil Arqam (Darul Arqam) menjadi tempat pembinaan umat Islam.' },
          { tipe: 'pg', pertanyaan: 'Laki-laki dewasa yang pertama masuk Islam adalah ...', pilihan: ['Umar bin Khattab', 'Ali bin Abi Thalib', 'Abu Bakar ash-Shiddiq', 'Utsman bin Affan'], jawaban: 'C', pembahasan: 'Abu Bakar ash-Shiddiq adalah laki-laki dewasa pertama yang masuk Islam; Ali dari kalangan anak-anak.' },
          { tipe: 'pg', pertanyaan: 'Untuk menghindari tekanan kaum Quraisy, sebagian sahabat hijrah pertama kali ke ...', pilihan: ['Madinah', 'Thaif', 'Habasyah', 'Syam'], jawaban: 'C', pembahasan: 'Hijrah pertama umat Islam adalah ke Habasyah (Etiopia), yang rajanya adil.' },
          { tipe: 'pg', pertanyaan: '\'Amul Huzni (tahun kesedihan) adalah tahun wafatnya ...', pilihan: ['Abdullah dan Aminah', 'Khadijah dan Abu Thalib', 'Abu Bakar dan Umar', 'Hamzah dan Ja\'far'], jawaban: 'B', pembahasan: 'Tahun kesedihan adalah tahun wafatnya Khadijah (istri Nabi) dan Abu Thalib (paman Nabi).' },
        ],
      },
    ],
  },
  {
    mapel: 'Bahasa Arab',
    kategori: 'pelajaran',
    ikon: '🗣️',
    topik: [
      {
        nama: 'At-Ta\'aruf (Perkenalan)',
        kelas: '7',
        materi: `**التَّعَارُفُ** artinya perkenalan.

**Kosakata:**
- اِسْمِيْ = namaku
- أَنَا = saya
- أَنْتَ = kamu (laki-laki), أَنْتِ = kamu (perempuan)
- تِلْمِيْذٌ = siswa, تِلْمِيْذَةٌ = siswi
- مُدَرِّسٌ = guru (laki-laki), مُدَرِّسَةٌ = guru (perempuan)

**Ungkapan:**
- صَبَاحَ الْخَيْرِ = selamat pagi → dijawab صَبَاحَ النُّوْرِ
- كَيْفَ حَالُكَ؟ = bagaimana kabarmu? → بِخَيْرٍ، اَلْحَمْدُ لِلّٰهِ
- مَا اسْمُكَ؟ = siapa namamu?
- أَيْنَ تَسْكُنُ؟ = di mana kamu tinggal?`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Arti kata اِسْمِيْ adalah ...', pilihan: ['namamu', 'namaku', 'namanya', 'nama kami'], jawaban: 'B', pembahasan: 'اِسْم = nama, ي = -ku. Jadi اِسْمِيْ = namaku.' },
          { tipe: 'pg', pertanyaan: 'Jawaban yang tepat untuk صَبَاحَ الْخَيْرِ adalah ...', pilihan: ['مَسَاءَ الْخَيْرِ', 'صَبَاحَ النُّوْرِ', 'مَعَ السَّلَامَةِ', 'شُكْرًا'], jawaban: 'B', pembahasan: 'Selamat pagi (صَبَاحَ الْخَيْرِ) dijawab صَبَاحَ النُّوْرِ.' },
          { tipe: 'pg', pertanyaan: 'Bahasa Arab dari "siswi" adalah ...', pilihan: ['تِلْمِيْذٌ', 'مُدَرِّسٌ', 'تِلْمِيْذَةٌ', 'مُدَرِّسَةٌ'], jawaban: 'C', pembahasan: 'تِلْمِيْذَةٌ = siswi (perempuan), ditandai ta marbutah (ة).' },
          { tipe: 'pg', pertanyaan: 'Arti kalimat كَيْفَ حَالُكَ؟ adalah ...', pilihan: ['Siapa namamu?', 'Di mana rumahmu?', 'Bagaimana kabarmu?', 'Berapa umurmu?'], jawaban: 'C', pembahasan: 'كَيْفَ = bagaimana, حَالُكَ = keadaanmu. Jadi "Bagaimana kabarmu?"' },
          { tipe: 'pg', pertanyaan: 'Kata مُدَرِّسٌ artinya ...', pilihan: ['siswa', 'guru laki-laki', 'sekolah', 'kelas'], jawaban: 'B', pembahasan: 'مُدَرِّسٌ = guru laki-laki; مُدَرِّسَةٌ = guru perempuan.' },
          { tipe: 'pg', pertanyaan: 'Untuk menanyakan tempat tinggal teman laki-laki, kita bertanya ...', pilihan: ['مَا اسْمُكَ؟', 'أَيْنَ تَسْكُنُ؟', 'كَيْفَ حَالُكَ؟', 'مَنْ أَنْتَ؟'], jawaban: 'B', pembahasan: 'أَيْنَ = di mana, تَسْكُنُ = kamu tinggal.' },
          { tipe: 'pg', pertanyaan: 'Kata ganti أَنْتِ digunakan untuk ...', pilihan: ['saya', 'kamu (laki-laki)', 'kamu (perempuan)', 'dia (laki-laki)'], jawaban: 'C', pembahasan: 'أَنْتِ (berharakat kasrah) untuk kamu perempuan; أَنْتَ (fathah) untuk kamu laki-laki.' },
        ],
      },
    ],
  },

  // ===================== PERSIAPAN LOMBA: KSM =====================
  {
    mapel: 'Matematika Terintegrasi',
    kategori: 'lomba',
    kompetisi: 'KSM',
    ikon: '🧮',
    topik: [
      {
        nama: 'Teori Bilangan dan Pola',
        kelas: '7',
        materi: `Soal **KSM Matematika Terintegrasi** menggabungkan konsep matematika dengan konteks keislaman (ibadah, zakat, Al-Qur'an). Kuncinya: pahami konteksnya, lalu terjemahkan menjadi model matematika.

**Konsep yang sering keluar:**
- **Angka satuan perpangkatan** berulang dengan pola. Contoh 7ⁿ: 7, 9, 3, 1, 7, 9, ... (periode 4). Cari sisa n : 4
- **Barisan aritmetika**: Uₙ = a + (n − 1)b; jumlah Sₙ = n/2 × (a + Uₙ)
- **Jumlah 1 + 2 + ... + n** = n(n + 1)/2
- **Banyak faktor**: jika n = p^a × q^b maka banyak faktornya (a + 1)(b + 1)
- **Prinsip inklusi-eksklusi**: |A ∪ B| = |A| + |B| − |A ∩ B|
- **Zakat mal** = 2,5% dari harta yang telah mencapai nisab dan haul

**Tips lomba:** kerjakan soal yang paling yakin dulu, tulis langkah singkat di kertas buram, dan periksa kembali satuan jawaban.`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Angka satuan dari 7²⁰²⁶ adalah ...', pilihan: ['1', '3', '7', '9'], jawaban: 'D', pembahasan: 'Angka satuan 7ⁿ berulang: 7, 9, 3, 1 (periode 4). 2026 : 4 bersisa 2, jadi angka satuannya sama dengan 7² → 9.' },
          { tipe: 'isian', pertanyaan: 'Banyak bilangan bulat dari 1 sampai 100 yang habis dibagi 3 atau 5 adalah ...', jawaban: '47', pembahasan: 'Habis dibagi 3: 33. Habis dibagi 5: 20. Habis dibagi 15: 6. Jadi 33 + 20 − 6 = 47.' },
          { tipe: 'isian', pertanyaan: 'Hasil dari 1 + 2 + 3 + ... + 100 adalah ...', jawaban: '5050|5.050', pembahasan: 'n(n + 1)/2 = 100 × 101 : 2 = 5.050.' },
          { tipe: 'pg', pertanyaan: 'Suku ke-20 dari barisan 3, 7, 11, 15, ... adalah ...', pilihan: ['75', '79', '83', '80'], jawaban: 'B', pembahasan: 'a = 3, b = 4. U₂₀ = 3 + 19 × 4 = 3 + 76 = 79.' },
          { tipe: 'pg', pertanyaan: 'Jumlah rakaat salat fardu dalam sehari adalah 17. Jumlah rakaat salat fardu yang dikerjakan seorang muslim selama 1 minggu adalah ...', pilihan: ['102', '112', '119', '124'], jawaban: 'C', pembahasan: '17 rakaat × 7 hari = 119 rakaat.' },
          { tipe: 'pg', pertanyaan: 'Pak Hasan memiliki tabungan Rp100.000.000 yang sudah mencapai nisab dan haul. Zakat mal yang wajib dikeluarkan sebesar 2,5% adalah ...', pilihan: ['Rp250.000', 'Rp2.500.000', 'Rp25.000.000', 'Rp10.000.000'], jawaban: 'B', pembahasan: '2,5% × 100.000.000 = 2,5/100 × 100.000.000 = Rp2.500.000.' },
          { tipe: 'isian', pertanyaan: 'FPB dari 84 dan 126 adalah ...', jawaban: '42', pembahasan: '84 = 2² × 3 × 7 dan 126 = 2 × 3² × 7. FPB = 2 × 3 × 7 = 42.' },
          { tipe: 'pg', pertanyaan: 'Banyak faktor positif dari 36 adalah ...', pilihan: ['6', '8', '9', '12'], jawaban: 'C', pembahasan: '36 = 2² × 3². Banyak faktor = (2 + 1)(2 + 1) = 9, yaitu 1, 2, 3, 4, 6, 9, 12, 18, 36.' },
          { tipe: 'pg', pertanyaan: 'Al-Qur\'an terdiri atas 30 juz. Jika Ahmad mampu menghafal 2 juz setiap 3 bulan, waktu yang dibutuhkan untuk menghafal seluruh Al-Qur\'an adalah ... bulan.', pilihan: ['30', '40', '45', '60'], jawaban: 'C', pembahasan: 'Perbandingan senilai: 30 juz : 2 juz = 15 kali. 15 × 3 bulan = 45 bulan.' },
          { tipe: 'isian', pertanyaan: 'Sisa pembagian 2¹⁰ oleh 7 adalah ...', jawaban: '2', pembahasan: '2¹⁰ = 1.024. 7 × 146 = 1.022, sisa 1.024 − 1.022 = 2.' },
          { tipe: 'pg', pertanyaan: 'Rata-rata 5 bilangan adalah 12. Jika ditambah satu bilangan, rata-ratanya menjadi 13. Bilangan yang ditambahkan adalah ...', pilihan: ['13', '15', '18', '20'], jawaban: 'C', pembahasan: 'Jumlah awal 5 × 12 = 60. Jumlah baru 6 × 13 = 78. Bilangan tambahan = 78 − 60 = 18.' },
        ],
      },
    ],
  },
  {
    mapel: 'IPA Terintegrasi',
    kategori: 'lomba',
    kompetisi: 'KSM',
    ikon: '🧪',
    topik: [
      {
        nama: 'Sains dalam Al-Qur\'an',
        kelas: '7',
        materi: `Soal **KSM IPA Terintegrasi** mengaitkan konsep sains dengan ayat Al-Qur'an. Hafalkan beberapa surah bernama makhluk hidup/benda dan kaitkan dengan konsep IPA-nya.

- **QS. Al-Anbiya' ayat 30**: segala sesuatu yang hidup dijadikan dari air → air penyusun utama tubuh makhluk hidup (±60% tubuh manusia dewasa)
- **QS. An-Nahl (lebah)**: lebah menghasilkan madu; lebah dan bunga bersimbiosis **mutualisme** (lebah dapat nektar, bunga terbantu penyerbukan)
- **QS. Al-Hadid (besi)**: besi, lambang unsur **Fe**
- **QS. An-Naml (semut)**: semut termasuk **serangga** (Insecta), berkaki 6
- **QS. Al-'Ankabut (laba-laba)**: laba-laba termasuk **Arachnida**, berkaki 8

**Rumus penting:**
- Konversi suhu: °F = (9/5 × °C) + 32; K = °C + 273
- Massa jenis ρ = m/V; benda **terapung** jika ρ benda < ρ air (1 g/cm³)
- Pemuaian: rel kereta api diberi celah agar tidak melengkung saat memuai`,
        soal: [
          { tipe: 'pg', pertanyaan: '"Dan Kami jadikan dari air segala sesuatu yang hidup." (QS. Al-Anbiya\': 30). Kandungan air dalam tubuh manusia dewasa kira-kira ...', pilihan: ['10%', '30%', '60%', '95%'], jawaban: 'C', pembahasan: 'Sekitar 60% tubuh manusia dewasa tersusun atas air, sesuai isyarat ayat bahwa kehidupan berasal dari air.' },
          { tipe: 'pg', pertanyaan: 'Hubungan antara lebah (QS. An-Nahl) dan bunga termasuk simbiosis ...', pilihan: ['parasitisme', 'komensalisme', 'mutualisme', 'amensalisme'], jawaban: 'C', pembahasan: 'Lebah mendapat nektar, bunga terbantu penyerbukannya. Keduanya untung → mutualisme.' },
          { tipe: 'pg', pertanyaan: 'Salah satu surah dalam Al-Qur\'an bernama Al-Hadid yang berarti besi. Lambang unsur besi adalah ...', pilihan: ['Be', 'Fe', 'Bi', 'Ir'], jawaban: 'B', pembahasan: 'Besi berlambang Fe, dari bahasa Latin ferrum.' },
          { tipe: 'isian', pertanyaan: 'Suhu 40 °C jika dinyatakan dalam skala Fahrenheit adalah ... °F.', jawaban: '104', pembahasan: '°F = (9/5 × 40) + 32 = 72 + 32 = 104 °F.' },
          { tipe: 'pg', pertanyaan: 'Sebuah kayu bermassa jenis 0,8 g/cm³ dimasukkan ke dalam air (1 g/cm³). Kayu tersebut akan ...', pilihan: ['tenggelam', 'melayang', 'terapung', 'larut'], jawaban: 'C', pembahasan: 'Massa jenis kayu lebih kecil daripada massa jenis air, sehingga kayu terapung.' },
          { tipe: 'pg', pertanyaan: 'Hewan yang menjadi nama surah Al-\'Ankabut termasuk kelompok Arachnida. Jumlah kakinya adalah ...', pilihan: ['4', '6', '8', '10'], jawaban: 'C', pembahasan: 'Al-\'Ankabut berarti laba-laba. Laba-laba (Arachnida) memiliki 8 kaki.' },
          { tipe: 'pg', pertanyaan: 'Semut (QS. An-Naml) termasuk kelompok serangga karena ...', pilihan: ['berkaki 8', 'berkaki 6 dan tubuh terdiri atas 3 bagian', 'tidak memiliki antena', 'bernapas dengan insang'], jawaban: 'B', pembahasan: 'Ciri serangga (Insecta): tubuh terdiri atas kepala, dada, perut dan memiliki 6 kaki.' },
          { tipe: 'isian', pertanyaan: 'Suhu 27 °C jika dinyatakan dalam kelvin adalah ... K.', jawaban: '300', pembahasan: 'K = °C + 273 = 27 + 273 = 300 K.' },
          { tipe: 'pg', pertanyaan: 'Sambungan rel kereta api diberi celah. Tujuannya adalah ...', pilihan: ['menghemat besi', 'memberi ruang saat rel memuai', 'agar kereta lebih cepat', 'mengurangi suara'], jawaban: 'B', pembahasan: 'Saat panas, rel memuai. Celah mencegah rel melengkung.' },
        ],
      },
    ],
  },
  {
    mapel: 'IPS Terintegrasi',
    kategori: 'lomba',
    kompetisi: 'KSM',
    ikon: '🧭',
    topik: [
      {
        nama: 'Geografi, Sejarah, dan Ekonomi Islam',
        kelas: '7',
        materi: `Soal **KSM IPS Terintegrasi** memadukan geografi, sejarah, dan ekonomi dengan nilai-nilai Islam.

- **Waktu dan arah**: Makkah berada di zona GMT+3, sedangkan WITA GMT+8 (selisih 5 jam). Arah kiblat dari Indonesia kurang lebih ke **barat laut**
- **Sejarah**: hijrah Nabi ke Madinah (622 M) menjadi awal **kalender Hijriah**, ditetapkan pada masa Khalifah Umar bin Khattab
- **Ekonomi**: kebutuhan primer = sandang, pangan, papan. Pasar = tempat bertemunya penjual dan pembeli. Jual beli sah jika ada penjual, pembeli, barang, dan **ijab kabul**
- **Zakat, infak, sedekah, wakaf (ZISWAF)** berfungsi memeratakan kesejahteraan dan mengurangi kesenjangan
- Pontianak adalah kota yang dilalui **garis khatulistiwa** (lintang 0°)`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Arah kiblat umat Islam di Indonesia kurang lebih menghadap ke ...', pilihan: ['barat daya', 'barat laut', 'timur laut', 'utara'], jawaban: 'B', pembahasan: 'Makkah terletak di sebelah barat laut Indonesia, sehingga arah kiblat kurang lebih ke barat laut.' },
          { tipe: 'pg', pertanyaan: 'Makkah berada di zona waktu GMT+3 dan Mataram di zona WITA (GMT+8). Jika di Mataram pukul 17.00 WITA, di Makkah pukul ...', pilihan: ['10.00', '12.00', '14.00', '22.00'], jawaban: 'B', pembahasan: 'Selisih 8 − 3 = 5 jam, Makkah lebih lambat. 17.00 − 5 jam = 12.00.' },
          { tipe: 'pg', pertanyaan: 'Penanggalan Hijriah dimulai dari peristiwa ...', pilihan: ['kelahiran Nabi Muhammad saw.', 'turunnya wahyu pertama', 'hijrah Nabi ke Madinah', 'Fathu Makkah'], jawaban: 'C', pembahasan: 'Kalender Hijriah dihitung sejak hijrah Nabi ke Madinah (622 M), ditetapkan pada masa Umar bin Khattab.' },
          { tipe: 'pg', pertanyaan: 'Khalifah yang menetapkan penggunaan kalender Hijriah adalah ...', pilihan: ['Abu Bakar ash-Shiddiq', 'Umar bin Khattab', 'Utsman bin Affan', 'Ali bin Abi Thalib'], jawaban: 'B', pembahasan: 'Kalender Hijriah ditetapkan pada masa Khalifah Umar bin Khattab.' },
          { tipe: 'pg', pertanyaan: 'Kota di Indonesia yang dilalui garis khatulistiwa adalah ...', pilihan: ['Mataram', 'Pontianak', 'Makassar', 'Surabaya'], jawaban: 'B', pembahasan: 'Pontianak (Kalimantan Barat) dilalui garis lintang 0° dan terdapat Tugu Khatulistiwa.' },
          { tipe: 'pg', pertanyaan: 'Kebutuhan sandang, pangan, dan papan termasuk kebutuhan ...', pilihan: ['primer', 'sekunder', 'tersier', 'rohani'], jawaban: 'A', pembahasan: 'Sandang (pakaian), pangan (makanan), papan (tempat tinggal) adalah kebutuhan primer.' },
          { tipe: 'pg', pertanyaan: 'Dalam jual beli menurut Islam, pernyataan serah terima antara penjual dan pembeli disebut ...', pilihan: ['ijab kabul', 'riba', 'khiyar', 'nisab'], jawaban: 'A', pembahasan: 'Ijab (pernyataan penjual) dan kabul (penerimaan pembeli) adalah salah satu rukun jual beli.' },
          { tipe: 'pg', pertanyaan: 'Fungsi zakat dalam kegiatan ekonomi masyarakat adalah ...', pilihan: ['menambah keuntungan pedagang', 'memeratakan kesejahteraan', 'menaikkan harga barang', 'mengurangi jumlah uang beredar'], jawaban: 'B', pembahasan: 'Zakat menyalurkan sebagian harta orang mampu kepada yang berhak sehingga kesejahteraan lebih merata.' },
        ],
      },
    ],
  },
];

window.INFO_KOMPETISI = Object.assign(window.INFO_KOMPETISI || {}, {
  KSM: {
    nama: 'Kompetisi Sains Madrasah',
    keterangan: 'Jenjang MTs. Soal terintegrasi: konsep sains/sosial dipadukan dengan nilai keislaman.',
  },
});
