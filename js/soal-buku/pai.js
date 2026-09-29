// Pendidikan Agama Islam dan Budi Pekerti — berdasarkan buku SMP Kelas VII
// (Rudi Ahmad Suryadi & Sumiyati, Kemendikbudristek 2021, ISBN 978-602-244-434-3).
// Bab I–III dari Buku Siswa; Bab IV–X dari Buku Panduan Guru (materi pokok & kunci jawaban).
(function () {
  const { pg, isian, tambah } = window.BUKU;
  const BS = 'Buku Siswa PAI SMP Kelas VII';
  const BG = 'Buku Panduan Guru PAI SMP Kelas VII';

  tambah('Pendidikan Agama Islam', '☪️', [
    {
      nama: 'Bab I · Al-Qur\'an dan Sunah sebagai Pedoman Hidup',
      kelas: '7 (Smt 1)', sumber: BS + ', Bab I, hlm. 1–28',
      materi: `- **Al-Qur'an** secara bahasa berarti bacaan (dari *qara'a*): wahyu Allah yang menjadi mukjizat, diturunkan kepada Nabi Muhammad saw., ditulis dalam mushaf, diriwayatkan secara mutawatir, dan membacanya bernilai ibadah (hlm. 10)
- **Hadis** adalah sumber hukum kedua setelah Al-Qur'an. **Sunah**: semua yang bersumber dari Nabi. **Khabar**: disandarkan kepada Nabi dan selainnya. **Aṡar**: disandarkan kepada sahabat dan tabiin (hlm. 12–13)
- Fungsi hadis: **bayān al-taqrīr** (memperkuat), **bayān al-tafsīr** (merinci ayat yang umum), **bayān al-tasyrī'** (menetapkan hukum yang tidak ada di Al-Qur'an), **bayān al-nasakh** (membatalkan ketentuan terdahulu) (hlm. 13–14)
- Q.S. an-Nisā'/4: 59: taat kepada Allah, Rasul, dan ulil amri; jika berselisih kembalikan kepada Al-Qur'an dan sunah. Q.S. an-Naḥl/16: 64: Nabi menjelaskan hal yang diperselisihkan; Al-Qur'an adalah petunjuk dan rahmat (hlm. 11–12)
- **Alif lām syamsiyyah** (14 huruf) dibaca lebur, ditandai tasydid setelah alif lām (الرَّسُوْلُ). **Alif lām qamariyyah** (14 huruf) dibaca jelas/izhār (الْيَوْمِ، الْكِتٰبَ) (hlm. 8–9)`,
      soal: [
        pg('Secara bahasa, Al-Qur\'an berarti ...', ['petunjuk', 'bacaan', 'pembeda', 'cahaya'], 'B', 'Diambil dari kata qara\'a yang berarti membaca.', 10),
        pg('Hadis merupakan sumber hukum Islam yang ...', ['pertama', 'kedua setelah Al-Qur\'an', 'ketiga setelah ijmak', 'tidak wajib diikuti'], 'B', 'Hadis adalah sumber hukum kedua.', 12),
        pg('Sesuatu yang disandarkan kepada sahabat dan tabiin disebut ...', ['sunah', 'hadis', 'khabar', 'aṡar'], 'D', 'Lihat Tabel 1.4.', 13),
        pg('Fungsi hadis yang menetapkan dan memperkuat keterangan dalam Al-Qur\'an disebut ...', ['bayān al-taqrīr', 'bayān al-tafsīr', 'bayān al-tasyrī\'', 'bayān al-nasakh'], 'A', 'Disebut juga bayān al-ta\'kīd.', 13),
        pg('Fungsi hadis yang memberikan kepastian hukum yang tidak ada dalam Al-Qur\'an, misalnya zakat fitrah, disebut ...', ['bayān al-taqrīr', 'bayān al-tafsīr', 'bayān al-tasyrī\'', 'bayān al-nasakh'], 'C', 'Al-Qur\'an sering hanya menerangkan pokok-pokoknya.', 13),
        pg('Fungsi hadis yang merinci ayat-ayat yang masih umum (mujmal) disebut ...', ['bayān al-tafsīr', 'bayān al-taqrīr', 'bayān al-nasakh', 'bayān al-tasyrī\''], 'A', 'Tafsir = penjelasan/perincian.', 13),
        pg('Q.S. an-Nisā\'/4: 59 memerintahkan kita untuk taat kepada ...', ['orang tua saja', 'Allah, Rasul, dan ulil amri', 'teman sebaya', 'pemimpin walaupun menyuruh maksiat'], 'B', 'Ketaatan kepada ulil amri selama tidak memerintahkan maksiat.', 11),
        pg('Menurut Q.S. an-Naḥl/16: 64, Al-Qur\'an diturunkan agar Nabi menjelaskan hal yang diperselisihkan serta menjadi ...', ['hiburan dan cerita', 'petunjuk dan rahmat bagi kaum beriman', 'bacaan saat sedih saja', 'hukum bagi raja'], 'B', 'Kandungan Q.S. an-Naḥl/16: 64.', 12),
        pg('Pemimpin tidak boleh ditaati apabila ...', ['masih muda', 'memerintahkan berbuat maksiat', 'berasal dari daerah lain', 'tegas'], 'B', '"Tidak dibenarkan taat kepada makhluk dalam hal maksiat kepada Khalik." (H.R. Ahmad)', 12),
        isian('Jumlah huruf alif lām syamsiyyah adalah ...', '14|empat belas', 'Alif lām qamariyyah juga 14 huruf.', 8),
        pg('Ciri alif lām syamsiyyah dalam mushaf adalah ...', ['huruf setelahnya bersukun', 'huruf setelahnya bertasydid', 'dibaca panjang', 'selalu di akhir ayat'], 'B', 'Contoh: الرَّحْمٰنُ dibaca ar-rahmān.', 9),
        pg('Bacaan الرَّسُوْلُ termasuk hukum ...', ['alif lām qamariyyah', 'alif lām syamsiyyah', 'izhar halqi', 'iqlab'], 'B', 'Alif lām bertemu huruf ra (ر).', 9),
        pg('Bacaan الْيَوْمِ termasuk hukum ...', ['alif lām syamsiyyah', 'alif lām qamariyyah', 'idgam bigunnah', 'mad thabi\'i'], 'B', 'Alif lām bertemu huruf ya (ي), dibaca jelas.', 9),
        pg('Pelafalan alif lām syamsiyyah disebut juga ...', ['izhār qamariyyah', 'idgām syamsiyyah', 'ikhfa syafawi', 'qalqalah'], 'B', 'Suara alif lām dilebur ke huruf sesudahnya.', 9),
        pg('Imam al-Syafi\'i sudah hafal Al-Qur\'an sejak berusia ...', ['7 tahun', '10 tahun', '14 tahun', '20 tahun'], 'A', 'Kisah pada rubrik Inspirasiku.', 16),
      ],
    },
    {
      nama: 'Bab II · Meneladan Asmaul Husna',
      kelas: '7 (Smt 1)', sumber: BS + ', Bab II, hlm. 29–50',
      materi: `- **Al-Asmā' al-Ḥusnā** artinya nama-nama Allah yang baik dan indah (Q.S. al-A'rāf/7: 180). Menurut hadis riwayat al-Bukhari jumlahnya **99** (hlm. 33–34)
- **Al-'Alīm**: Maha Mengetahui (Q.S. al-An'ām/6: 59, 80) → percaya diri dengan ilmu dan tekun belajar (hlm. 34–36)
- **Al-Khabīr**: Maha Memberitahu (Q.S. al-Mulk/67: 14) → ikhlas berbagi ilmu, teliti menyebarkan informasi, dan **murāqabah** (merasa selalu diawasi Allah) (hlm. 37)
- **As-Samī'**: Maha Mendengar (Q.S. al-Baqarah/2: 137) → menjadi pendengar yang baik (hlm. 38)
- **Al-Baṣīr**: Maha Melihat (Q.S. al-Isrā'/17: 1) → teliti, mawas diri, dan visioner (hlm. 38–39)`,
      soal: [
        pg('Al-Asmā\' al-Ḥusnā artinya ...', ['sifat-sifat Rasulullah', 'nama-nama Allah yang baik dan indah', 'nama-nama malaikat', 'kitab-kitab Allah'], 'B', 'Al-asmā\' = nama-nama; al-ḥusnā = terbaik/indah.', 33),
        pg('Dalil tentang Al-Asmā\' al-Ḥusnā terdapat dalam ...', ['Q.S. al-A\'rāf/7: 180', 'Q.S. al-Fātiḥah/1: 1', 'Q.S. an-Nās/114: 1', 'Q.S. al-Kautsar/108: 1'], 'A', '"Dan Allah memiliki Asmā\'ul Ḥusnā..."', 33),
        isian('Menurut hadis riwayat al-Bukhari, jumlah Al-Asmā\' al-Ḥusnā adalah ...', '99|sembilan puluh sembilan', '"Seratus kurang satu."', 34),
        pg('Al-\'Alīm artinya Allah Maha ...', ['Melihat', 'Mendengar', 'Mengetahui', 'Memberitahu'], 'C', 'Ilmu Allah meliputi segala sesuatu.', 34),
        pg('Al-Khabīr artinya Allah Maha ...', ['Memberitahu', 'Melihat', 'Pengasih', 'Kuasa'], 'A', 'Allah memberi informasi melalui Al-Qur\'an.', 37),
        pg('"Tidak ada sehelai daun pun yang gugur yang tidak diketahui-Nya" (Q.S. al-An\'ām/6: 59) menunjukkan Allah bersifat ...', ['al-Samī\'', 'al-Baṣīr', 'al-\'Alīm', 'al-Khabīr'], 'C', 'Pengetahuan Allah tidak terbatas.', 35),
        pg('Q.S. al-Isrā\'/17: 1 diakhiri dengan pernyataan bahwa Allah ...', ['Maha Pengasih lagi Maha Penyayang', 'Maha Mendengar lagi Maha Melihat', 'Maha Kuasa lagi Maha Bijaksana', 'Maha Pengampun'], 'B', 'as-Samī\'ul Baṣīr.', 38),
        pg('Perilaku meneladan sifat as-Samī\' adalah ...', ['berbicara terus tanpa mendengar', 'menjadi pendengar yang baik', 'menyebarkan berita tanpa dicek', 'malas belajar'], 'B', 'Mau mendengarkan nasihat orang tua dan guru.', 38),
        pg('Murāqabah artinya ...', ['perasaan senantiasa diawasi Allah', 'rasa ingin tahu', 'membaca Al-Qur\'an', 'berbagi ilmu'], 'A', 'Sikap yang tumbuh dari meyakini Allah al-Khabīr.', 37),
        pg('Rani tidak menyontek walaupun guru keluar kelas karena yakin Allah selalu melihatnya. Ini meneladan sifat ...', ['al-Baṣīr', 'al-Khabīr', 'al-Samī\'', 'al-Muṣawwir'], 'A', 'Al-Baṣīr = Maha Melihat.', 39),
        pg('Meneladan al-\'Alīm dapat diwujudkan dengan ...', ['percaya diri dan tekun belajar', 'merasa paling pintar', 'malas bertanya', 'menyembunyikan ilmu'], 'A', 'Ilmu yang dimiliki terus dikembangkan dengan ketekunan.', 36),
        pg('Sikap visioner (memiliki pandangan ke depan) merupakan cerminan meneladan sifat ...', ['al-Baṣīr', 'al-Samī\'', 'al-Khabīr', 'al-Ghafūr'], 'A', 'Cermat, mawas diri, dan menatap masa depan.', 39),
      ],
    },
    {
      nama: 'Bab III · Salat dan Zikir dalam Kehidupan',
      kelas: '7 (Smt 1)', sumber: BS + ' (hlm. 51–72) & ' + BG + ' (hlm. 66–83)',
      materi: `- Salat adalah **tiang agama**. Barang siapa mendirikannya berarti menegakkan agama, dan yang meninggalkannya merobohkan agama (H.R. al-Baihaqi). Salat wajib dikerjakan lima kali sehari semalam (BS hlm. 53–54)
- **Zikir** artinya menyebut atau mengingat Allah; zikir menenangkan hati (BS hlm. 54)
- Salat yang ditegakkan dengan benar mencegah perbuatan **keji dan munkar**, karena menumbuhkan rasa takut berbuat dosa (BG hlm. 81)
- Cara berzikir: bertafakur tentang ciptaan-Nya, serta membaca tasbih, tahmid, takbir, tahlil, salawat, dan Al-Qur'an (BG hlm. 82)
- "Peliharalah semua salat dan salat wustha" (Q.S. al-Baqarah/2: 238)`,
      soal: [
        pg('Dalam Islam, salat diibaratkan sebagai ...', ['atap agama', 'tiang agama', 'pondasi agama', 'pintu agama'], 'B', 'Syahadat pondasi, salat tiang, dakwah atap.', 53),
        pg('Zikir artinya ...', ['menyebut atau mengingat Allah', 'berpuasa', 'bersedekah', 'membaca buku'], 'A', 'Zikir dapat menenangkan hati.', 54),
        pg('Salat yang dikerjakan dengan benar dapat mencegah pelakunya dari perbuatan ...', ['baik', 'keji dan munkar', 'belajar', 'bekerja'], 'B', 'Rasa takut berbuat dosa tumbuh pada orang yang menegakkan salat.', '81 (BG)'),
        pg('Membaca "Subḥānallāh" termasuk zikir yang disebut ...', ['tahmid', 'takbir', 'tasbih', 'tahlil'], 'C', 'Tasbih = Subḥānallāh; tahmid = Alḥamdulillāh; takbir = Allāhu akbar; tahlil = Lā ilāha illallāh.', '82 (BG)'),
        pg('Sikap yang benar jika ada teman yang belum melaksanakan salat lima waktu adalah ...', ['membiarkannya', 'mengejeknya', 'menegur dengan sopan dan mengajaknya salat', 'melaporkannya ke media sosial'], 'C', 'Kunci uraian Bab III no. 4.', '82 (BG)'),
        pg('Salat wajib dikerjakan sebanyak ... kali dalam sehari semalam.', ['3', '4', '5', '7'], 'C', 'Salat lima waktu.', 53),
      ],
    },
    {
      nama: 'Bab IV · Sujud Syukur, Sahwi, dan Tilawah',
      kelas: '7 (Smt 1)', sumber: BG + ', Bab IV, hlm. 88–105',
      materi: `Pokok materi (BG hlm. 88): perintah, pengertian, tata cara, dan hikmah **sujud sahwi**, **sujud tilawah**, dan **sujud syukur**.

- **Sujud sahwi**: sujud karena lupa dalam salat. Bacaannya *subḥāna man lā yanāmu wa lā yashū*, artinya "Maha Suci Allah yang tidak tidur dan tidak lupa" (hlm. 101)
- **Sujud tilawah**: sujud ketika membaca atau mendengar **ayat sajdah**. Dalam salat, langsung sujud **satu kali**, lalu berdiri dan melanjutkan salat (hlm. 102)
- **Sujud syukur**: sujud karena mendapat nikmat atau terhindar dari bahaya. Caranya menghadap kiblat, niat, sujud sambil berdoa, duduk, lalu salam (hlm. 102–103)
- Hikmah sujud syukur: terhindar dari sifat sombong, memperoleh kepuasan batin, merasa dekat dengan Allah, dan mendapat tambahan nikmat (hlm. 103)`,
      soal: [
        pg('Sujud yang dilakukan karena lupa dalam salat disebut sujud ...', ['syukur', 'tilawah', 'sahwi', 'khusyuk'], 'C', 'Sahwi = lupa.', 101),
        pg('Arti bacaan sujud sahwi "subḥāna man lā yanāmu wa lā yashū" adalah ...', ['Maha Suci Allah yang tidak tidur dan tidak lupa', 'Segala puji bagi Allah', 'Allah Mahabesar', 'Ya Allah ampunilah aku'], 'A', 'Kunci uraian Bab IV no. 1.', 101),
        pg('Sujud tilawah dilakukan ketika ...', ['mendapat nikmat', 'lupa jumlah rakaat', 'membaca atau mendengar ayat sajdah', 'selesai salat'], 'C', 'Tilawah = bacaan.', 102),
        pg('Saat membaca ayat sajdah di dalam salat, sujud tilawah dilakukan sebanyak ...', ['satu kali', 'dua kali', 'tiga kali', 'tidak perlu sujud'], 'A', 'Sujud satu kali lalu berdiri melanjutkan salat.', 102),
        pg('Sujud syukur dilakukan ketika ...', ['lupa dalam salat', 'mendapat nikmat atau terhindar dari musibah', 'mendengar azan', 'hendak tidur'], 'B', 'Wujud rasa syukur kepada Allah.', 102),
        pg('Urutan cara sujud syukur yang benar adalah ...', ['niat – rukuk – salam', 'menghadap kiblat – niat – sujud sambil berdoa – duduk – salam', 'takbir – membaca Al-Fatihah – rukuk', 'salam – sujud – niat'], 'B', 'Kunci uraian Bab IV no. 3.', 103),
        pg('Salah satu hikmah sujud syukur adalah ...', ['menjadi sombong', 'terhindar dari sifat sombong dan angkuh', 'mempercepat salat', 'mengganti salat wajib'], 'B', 'Orang yang bersyukur tidak lupa diri.', 103),
        pg('Cara menanamkan sikap rendah hati dalam kehidupan sehari-hari adalah ...', ['menyalahkan orang lain', 'segera meminta maaf dan mengakui kesalahan', 'memamerkan prestasi', 'meremehkan teman'], 'B', 'Kunci uraian Bab IV no. 5.', 104),
      ],
    },
    {
      nama: 'Bab V · Bani Umayyah di Damaskus (661–750 M)',
      kelas: '7 (Smt 1)', sumber: BG + ', Bab V, hlm. 108–127',
      materi: `- Bani Umayyah di Damaskus didirikan oleh **Mu'āwiyah bin Abū Sufyān** dan berdiri sekitar 90 tahun (40–132 H / **661–750 M**), berpusat di **Damaskus**. Sistem pemerintahannya **turun-temurun** (BG hlm. 122)
- Wilayahnya sangat luas sehingga dibantu para gubernur dan beberapa departemen (hlm. 122)
- Ilmu **pengobatan dan kimia** adalah disiplin ilmu yang pertama kali dikembangkan (hlm. 123)
- Masa keemasan pada pemerintahan **al-Walid** dan **Umar bin Abdul Aziz** (717–720 M). Pada masa Umar bin Abdul Aziz keadilan tegak sehingga orang yang berhak menerima zakat sulit dicari (hlm. 124, 242)
- **Masjid** dijadikan pusat aktivitas ilmiah, sastra, dan diskusi (hlm. 126)
- Kekuasaan berakhir pada 750 M dan beralih ke **Bani Abbasiyah** (hlm. 242)`,
      soal: [
        pg('Pendiri Bani Umayyah di Damaskus adalah ...', ['Umar bin Abdul Aziz', 'Mu\'āwiyah bin Abū Sufyān', 'Abdurrahman ad-Dakhil', 'Harun ar-Rasyid'], 'B', 'Kunci uraian Bab V no. 1.', 122),
        pg('Pusat pemerintahan Bani Umayyah (661–750 M) berada di kota ...', ['Baghdad', 'Kairo', 'Damaskus', 'Cordova'], 'C', 'Judul bab: Damaskus, Pusat Peradaban Timur Islam.', 108),
        pg('Sistem pemerintahan Bani Umayyah adalah ...', ['musyawarah', 'turun-temurun', 'pemilihan umum', 'demokrasi'], 'B', 'Kepemimpinan diwariskan dalam keluarga.', 122),
        isian('Bani Umayyah di Damaskus berkuasa kurang lebih selama ... tahun', '90|sembilan puluh', '661–750 M ≈ 90 tahun.', 122),
        pg('Disiplin ilmu yang pertama kali dikembangkan pada masa Bani Umayyah adalah ...', ['astronomi dan fisika', 'pengobatan dan kimia', 'geografi dan sejarah', 'matematika dan musik'], 'B', 'Kunci uraian Bab V.', 123),
        pg('Khalifah Bani Umayyah yang terkenal adil sehingga penerima zakat sulit dicari adalah ...', ['Mu\'āwiyah', 'Umar bin Abdul Aziz', 'Yazid bin Mu\'āwiyah', 'Marwan bin Hakam'], 'B', 'Memerintah 717–720 M.', 124),
        pg('Pada masa Bani Umayyah, pusat aktivitas ilmiah, sastra, dan diskusi adalah ...', ['istana', 'pasar', 'masjid', 'benteng'], 'C', 'Kunci uraian Bab V no. 5.', 126),
        pg('Setelah 750 M, kekhalifahan berpindah dari Bani Umayyah ke ...', ['Bani Abbasiyah', 'Turki Usmani', 'Fatimiyah', 'Mughal'], 'A', 'Tabel 10.5 Buku Guru.', 242),
      ],
    },
    {
      nama: 'Bab VI · Alam Semesta Tanda Kekuasaan Allah',
      kelas: '7 (Smt 2)', sumber: BG + ', Bab VI, hlm. 130–153',
      materi: `Pokok materi (BG hlm. 130): bacaan, hafalan, dan kandungan **Q.S. al-Anbiyā'/21: 30** dan **Q.S. al-A'rāf/7: 54**; pesan Nabi tentang menguasai ilmu; nilai penciptaan alam semesta.

- Q.S. al-Anbiyā'/21: 30: langit dan bumi dahulu padu lalu dipisahkan, dan dari **air** Allah jadikan segala sesuatu yang hidup (hlm. 149)
- Q.S. al-A'rāf/7: 54: Allah menciptakan langit dan bumi dalam **enam masa**; Allah Pemilik, Penguasa, dan Pengatur yang paling berhak disembah (hlm. 150)
- Contoh bacaan **gunnah** (nun/mim bertasydid) pada ayat tersebut: إِنَّ dan ثُمَّ (hlm. 150)
- Nilai: kecerdasan untuk mengembangkan ilmu, keyakinan kepada Allah yang menciptakan dengan teratur, dan keteraturan alam mendorong hidup teratur (hlm. 151–152)`,
      soal: [
        pg('Menurut Q.S. al-Anbiyā\'/21: 30, segala sesuatu yang hidup dijadikan dari ...', ['tanah', 'api', 'air', 'cahaya'], 'C', '"Dan Kami jadikan dari air segala sesuatu yang hidup."', 149),
        pg('Q.S. al-Anbiyā\'/21: 30 menjelaskan bahwa langit dan bumi dahulu ...', ['terpisah jauh', 'sesuatu yang padu, kemudian dipisahkan', 'terbuat dari air', 'tidak ada'], 'B', 'Kandungan ayat tentang penciptaan alam.', 149),
        pg('Menurut Q.S. al-A\'rāf/7: 54, Allah menciptakan langit dan bumi dalam ... masa.', ['tiga', 'lima', 'enam', 'tujuh'], 'C', 'Enam hari (masa).', 150),
        pg('Lafal إِنَّ pada ayat tersebut mengandung hukum bacaan ...', ['gunnah', 'izhar', 'iqlab', 'qalqalah'], 'A', 'Nun bertasydid dibaca dengung (gunnah).', 150),
        pg('Nilai yang dapat dipetik dari keteraturan alam semesta adalah ...', ['hidup boleh sesuka hati', 'kehidupan manusia juga harus teratur', 'alam terjadi secara kebetulan', 'ilmu tidak perlu dipelajari'], 'B', 'Kunci uraian Bab VI no. 5.', 152),
        pg('Kemampuan yang membedakan manusia dengan makhluk lain sehingga dapat mengembangkan ilmu adalah ...', ['kekuatan fisik', 'kecerdasan intelektual', 'kecepatan berlari', 'penglihatan tajam'], 'B', 'Kunci uraian Bab VI no. 5.', 151),
      ],
    },
    {
      nama: 'Bab VII · Iman kepada Malaikat',
      kelas: '7 (Smt 2)', sumber: BG + ', Bab VII, hlm. 158–176',
      materi: `Pokok materi (BG hlm. 158): makna beriman kepada malaikat, tugas para malaikat, dan hikmahnya.

| | Malaikat | Jin | Manusia |
|---|---|---|---|
| Diciptakan dari | nur (cahaya) | nyala api | tanah |
| Sifat | selalu taat | ada yang taat, ada yang durhaka | ada yang taat, ada yang durhaka |
| Makan & minum | tidak | ya | ya |
| Nafsu | tidak punya | punya | punya |

(Tabel 7.6, hlm. 173)

- Malaikat menjadi saksi perbuatan manusia sehingga mendorong kita berhati-hati (hlm. 172)
- Beriman kepada malaikat **Israfīl** (peniup sangkakala) menguatkan keyakinan bahwa dunia akan hancur. Beriman kepada **Munkar dan Nakīr** (penanya di alam kubur) mendorong rajin salat dan berpegang pada Al-Qur'an (hlm. 175)`,
      soal: [
        pg('Malaikat diciptakan dari ...', ['tanah', 'api', 'nur (cahaya)', 'air'], 'C', 'Tabel 7.6.', 173),
        pg('Jin diciptakan dari ...', ['nyala api', 'cahaya', 'tanah liat', 'angin'], 'A', 'Tabel 7.6.', 173),
        pg('Sifat malaikat adalah ...', ['kadang taat kadang durhaka', 'selalu patuh dan taat kepada Allah', 'mempunyai nafsu', 'makan dan minum'], 'B', 'Malaikat tidak memiliki nafsu.', 173),
        pg('Malaikat yang bertugas bertanya kepada manusia di alam kubur adalah ...', ['Jibril dan Mikail', 'Raqib dan Atid', 'Munkar dan Nakir', 'Malik dan Ridwan'], 'C', 'Kunci uraian Bab VII no. 5.', 175),
        pg('Beriman kepada malaikat Israfil menguatkan keyakinan bahwa ...', ['rezeki akan bertambah', 'dunia akan hancur (kiamat)', 'hujan akan turun', 'wahyu diturunkan'], 'B', 'Israfil meniup sangkakala.', 175),
        pg('Perilaku yang mencerminkan iman kepada Munkar dan Nakir adalah ...', ['malas salat', 'melaksanakan salat lima waktu dan berpegang pada Al-Qur\'an', 'banyak bermain gim', 'berbohong'], 'B', 'Kunci uraian Bab VII no. 5.', 175),
        pg('Keberadaan malaikat mendorong manusia untuk ...', ['berbuat sesukanya', 'lebih berhati-hati dan takut berbuat salah', 'tidak perlu beribadah', 'menyembah malaikat'], 'B', 'Malaikat adalah saksi bagi manusia.', 172),
        pg('Perbedaan malaikat dengan manusia adalah malaikat ...', ['makan dan minum', 'tidak mempunyai nafsu', 'dapat dilihat mata', 'diciptakan dari tanah'], 'B', 'Tabel 7.6.', 173),
      ],
    },
    {
      nama: 'Bab VIII · Menghindari Gibah dan Melaksanakan Tabayun',
      kelas: '7 (Smt 2)', sumber: BG + ', Bab VIII, hlm. 180–199',
      materi: `- **Gibah** adalah menggunjing, membicarakan kejelekan dan kekurangan orang lain. Orang yang bergibah diibaratkan **memakan daging bangkai saudaranya** (BG hlm. 195–196)
- Cara menghindari gibah: berkumpul dengan orang saleh, introspeksi diri, menjaga lisan, berpikir positif, dan berdoa (hlm. 195–196)
- **Kritik** berbeda dengan gibah: kritik adalah analisis dan evaluasi untuk membantu memperbaiki (hlm. 196)
- **Tabayun**: berhati-hati dan meneliti kebenaran berita, sehingga menghargai orang lain, berbaik sangka, dan menjaga persatuan (hlm. 197–198)
- Mengantisipasi **hoaks**: hati-hati dengan judul provokatif, cermati alamat situs, periksa fakta, cek keaslian foto (hlm. 197)`,
      soal: [
        pg('Gibah adalah ...', ['memuji orang lain', 'membicarakan kejelekan dan kekurangan orang lain', 'memberi nasihat', 'meneliti berita'], 'B', 'Kunci uraian Bab VIII no. 3.', 196),
        pg('Orang yang bergibah diibaratkan seperti orang yang ...', ['minum air laut', 'memakan daging bangkai saudaranya', 'membakar rumah', 'berjalan di kegelapan'], 'B', 'Perumpamaan dalam Al-Qur\'an.', 195),
        pg('Tabayun artinya ...', ['menyebarkan berita secepatnya', 'meneliti dan memastikan kebenaran berita', 'membicarakan aib orang', 'menolak semua berita'], 'B', 'Berhati-hati dalam menerima berita.', 197),
        pg('Perbedaan kritik dengan gibah adalah kritik ...', ['bertujuan menjatuhkan orang', 'bertujuan membantu memperbaiki', 'membuka aib orang', 'selalu bohong'], 'B', 'Kritik = analisis dan evaluasi untuk perbaikan.', 196),
        pg('Cara mengantisipasi berita hoaks adalah ...', ['langsung membagikan berita yang menarik', 'memeriksa fakta dan keaslian foto', 'percaya pada judul provokatif', 'mengabaikan sumber berita'], 'B', 'Kunci uraian Bab VIII no. 4.', 197),
        pg('Salah satu cara menghindari gibah adalah ...', ['sering berkumpul membicarakan orang', 'menjaga lisan dan berpikir positif', 'mencari aib teman', 'menyebarkan rahasia orang'], 'B', 'Kunci uraian Bab VIII no. 2.', 196),
        pg('Manfaat tabayun bagi masyarakat adalah ...', ['menimbulkan fitnah', 'menjaga persatuan dan kerukunan', 'memperbanyak hoaks', 'membuat curiga'], 'B', 'Kunci uraian Bab VIII no. 5.', 198),
      ],
    },
    {
      nama: 'Bab IX · Rukhsah (Keringanan dalam Ibadah)',
      kelas: '7 (Smt 2)', sumber: BG + ', Bab IX, hlm. 202–223',
      materi: `Pokok materi (BG hlm. 202): makna **rukhsah** (keringanan dari Allah dalam beribadah), rukhsah dalam salat, puasa, zakat, dan haji, serta hikmahnya.

- Dalam perjalanan, salat boleh diringkas (**qasar**) sesuai Q.S. an-Nisā'/4: 101: "apabila kamu bepergian di muka bumi, maka tidaklah mengapa kamu mengqasar salatmu" (hlm. 221)
- Haji hanya wajib bagi yang **mampu**, karena memerlukan kemampuan fisik dan finansial; wajib sekali seumur hidup (hlm. 219)
- Menghajikan orang lain yang telah meninggal (**badal haji**) boleh, dengan syarat yang menghajikan **sudah berhaji untuk dirinya sendiri** (hlm. 218)
- Membayar zakat dan pajak adalah wujud taat beragama dan bernegara (hlm. 221)`,
      soal: [
        pg('Rukhsah artinya ...', ['kewajiban tambahan', 'keringanan dari Allah dalam beribadah', 'larangan beribadah', 'hukuman'], 'B', 'Pokok materi Bab IX.', 202),
        pg('Dalil diperbolehkannya mengqasar salat dalam perjalanan adalah ...', ['Q.S. an-Nisā\'/4: 101', 'Q.S. al-Baqarah/2: 183', 'Q.S. al-Ikhlāṣ/112: 1', 'Q.S. an-Naḥl/16: 64'], 'A', 'Kunci uraian Bab IX no. 4.', 221),
        pg('Mengqasar salat artinya ...', ['menggabungkan dua salat', 'meringkas jumlah rakaat salat', 'mengganti salat dengan puasa', 'salat sambil berjalan'], 'B', 'Salat empat rakaat diringkas menjadi dua rakaat.', 221),
        pg('Ibadah haji hanya diwajibkan bagi yang mampu karena ...', ['haji dilakukan setiap tahun', 'memerlukan kemampuan fisik dan finansial', 'hanya untuk orang tua', 'tidak termasuk rukun Islam'], 'B', 'Kunci uraian Bab IX no. 2.', 219),
        pg('Syarat orang yang menghajikan orang lain (badal haji) adalah ...', ['masih muda', 'sudah berhaji untuk dirinya sendiri', 'kaya raya', 'keluarga dekat saja'], 'B', 'Kunci uraian Bab IX no. 1.', 218),
        pg('Ibadah haji merupakan rukun Islam yang ke- ...', ['tiga', 'empat', 'lima', 'enam'], 'C', 'Rukun Islam kelima.', 218),
      ],
    },
    {
      nama: 'Bab X · Andalusia, Kota Peradaban Islam di Barat',
      kelas: '7 (Smt 2)', sumber: BG + ', Bab X, hlm. 226–245',
      materi: `- Sebelum Islam datang, Andalusia (Spanyol) dikuasai bangsa **Visigoth**; terjadi perang saudara yang melemahkan kerajaan (BG hlm. 239)
- Mūsā bin Nusayr mengirim pasukan yang dipimpin **Ṭāriq bin Ziyād** untuk menaklukkan Andalusia (hlm. 240)
- Pada 15 Mei 756 M, **'Abd al-Raḥmān al-Dākhil** memproklamasikan berdirinya Bani Umayyah II di Andalusia, dengan pusat pemerintahan di **Cordova** (hlm. 240–241)
- Ilmu pengetahuan berkembang di bidang filsafat, seni, sastra, agama, dan sains. Bangunan megah: Masjid Cordova, kota al-Zahrā', istana al-Hamrā' (Alhambra) di Granada, tembok Toledo (hlm. 240–241)
- Kemajuan Andalusia menginspirasi Eropa keluar dari zaman kegelapan (hlm. 242)`,
      soal: [
        pg('Sebelum kedatangan Islam, Andalusia dikuasai oleh bangsa ...', ['Romawi', 'Visigoth', 'Persia', 'Mongol'], 'B', 'Kunci uraian Bab X no. 1.', 239),
        pg('Panglima yang memimpin pasukan Islam menaklukkan Andalusia adalah ...', ['Khalid bin Walid', 'Ṭāriq bin Ziyād', 'Salahuddin al-Ayyubi', 'Amr bin Ash'], 'B', 'Pasukan dikirim oleh Mūsā bin Nusayr.', 240),
        pg('Tokoh yang memproklamasikan berdirinya Bani Umayyah di Andalusia pada 756 M adalah ...', ['Mu\'āwiyah bin Abū Sufyān', '\'Abd al-Raḥmān al-Dākhil', 'Umar bin Abdul Aziz', 'Harun ar-Rasyid'], 'B', 'Proklamasi 15 Mei 756 M.', 240),
        pg('Pusat pemerintahan Bani Umayyah di Andalusia adalah kota ...', ['Damaskus', 'Baghdad', 'Cordova', 'Kairo'], 'C', 'Tabel 10.5.', 241),
        pg('Istana megah peninggalan Islam di Granada adalah ...', ['Istana al-Hamrā\' (Alhambra)', 'Taj Mahal', 'Istana Topkapi', 'Masjid Nabawi'], 'A', 'Kunci uraian Bab X no. 2.', 241),
        pg('Kemajuan Islam di Andalusia berpengaruh bagi Eropa, yaitu ...', ['membuat Eropa makin tertinggal', 'menginspirasi Eropa keluar dari zaman kegelapan', 'menghentikan ilmu pengetahuan', 'tidak ada pengaruhnya'], 'B', 'Tabel 10.5.', 242),
        pg('Cara menumbuhkan semangat mencari ilmu seperti para ilmuwan Andalusia adalah ...', ['malas membaca', 'berkomitmen membaca dan menelaah buku', 'menghindari perpustakaan', 'hanya bermain gawai'], 'B', 'Kunci uraian Bab X no. 5.', 244),
      ],
    },
  ]);
})();
