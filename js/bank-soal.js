// Bank soal bawaan. Soal tambahan bisa ditulis langsung di sheet "BankSoal"
// dan "Materi" pada Google Sheet — aplikasi akan menggabungkannya otomatis.
//
// Format soal:
//   { tipe: 'pg', pertanyaan, pilihan: [A, B, C, D], jawaban: 'B', pembahasan }
//   { tipe: 'isian', pertanyaan, jawaban: '63' , pembahasan }  // beberapa kunci: '63|enam puluh tiga'
// Format materi: teks biasa; baris kosong = paragraf baru, "- " = daftar, **tebal**.

window.BANK_SOAL = [
  {
    mapel: 'Matematika',
    ikon: '🔢',
    topik: [
      {
        nama: 'Pecahan',
        kelas: '5',
        materi: `Pecahan adalah bilangan yang menyatakan **bagian dari keseluruhan**. Pecahan ditulis a/b, dengan a disebut **pembilang** dan b disebut **penyebut**.

- Pecahan senilai: 1/2 = 2/4 = 3/6 (pembilang dan penyebut dikali bilangan yang sama)
- Menyederhanakan: bagi pembilang dan penyebut dengan FPB-nya, misalnya 6/8 = 3/4
- Menjumlahkan pecahan: samakan dulu penyebutnya, lalu jumlahkan pembilangnya
- Pecahan ke desimal: bagi pembilang dengan penyebut, misalnya 1/4 = 0,25
- Pecahan ke persen: kalikan dengan 100%, misalnya 3/4 = 75%

Contoh: 1/2 + 1/3 = 3/6 + 2/6 = **5/6**`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Bentuk paling sederhana dari 6/8 adalah ...', pilihan: ['2/3', '3/4', '1/2', '4/6'], jawaban: 'B', pembahasan: 'FPB dari 6 dan 8 adalah 2. 6 ÷ 2 = 3 dan 8 ÷ 2 = 4, jadi 6/8 = 3/4.' },
          { tipe: 'pg', pertanyaan: 'Hasil dari 1/2 + 1/3 adalah ...', pilihan: ['2/5', '2/6', '5/6', '1/6'], jawaban: 'C', pembahasan: 'Samakan penyebut menjadi 6: 3/6 + 2/6 = 5/6.' },
          { tipe: 'pg', pertanyaan: 'Pecahan yang senilai dengan 2/5 adalah ...', pilihan: ['4/10', '4/5', '2/10', '5/2'], jawaban: 'A', pembahasan: '2/5 dikali 2/2 menjadi 4/10.' },
          { tipe: 'pg', pertanyaan: 'Bentuk desimal dari 3/4 adalah ...', pilihan: ['0,34', '0,43', '0,75', '7,5'], jawaban: 'C', pembahasan: '3 ÷ 4 = 0,75.' },
          { tipe: 'pg', pertanyaan: 'Bentuk persen dari 1/5 adalah ...', pilihan: ['5%', '15%', '20%', '50%'], jawaban: 'C', pembahasan: '1/5 × 100% = 20%.' },
          { tipe: 'pg', pertanyaan: 'Ibu membeli 3/4 kg gula lalu memakai 1/4 kg. Sisa gula ibu adalah ...', pilihan: ['1/4 kg', '1/2 kg', '1 kg', '2/8 kg'], jawaban: 'B', pembahasan: '3/4 − 1/4 = 2/4 = 1/2 kg.' },
          { tipe: 'isian', pertanyaan: 'Hasil dari 2/7 + 3/7 adalah ... (tulis dalam bentuk a/b)', jawaban: '5/7', pembahasan: 'Penyebut sudah sama, jumlahkan pembilangnya: 2 + 3 = 5, jadi 5/7.' },
          { tipe: 'isian', pertanyaan: 'Hasil dari 1/2 × 4 adalah ... (tulis angka)', jawaban: '2', pembahasan: '1/2 × 4 = 4/2 = 2.' },
          { tipe: 'pg', pertanyaan: 'Urutan pecahan dari yang terkecil adalah ...', pilihan: ['1/2, 1/3, 1/4', '1/4, 1/3, 1/2', '1/3, 1/4, 1/2', '1/2, 1/4, 1/3'], jawaban: 'B', pembahasan: 'Jika pembilangnya sama, pecahan dengan penyebut lebih besar nilainya lebih kecil: 1/4 < 1/3 < 1/2.' },
          { tipe: 'pg', pertanyaan: '0,5 jika diubah ke pecahan biasa menjadi ...', pilihan: ['1/5', '5/1', '1/2', '1/50'], jawaban: 'C', pembahasan: '0,5 = 5/10 = 1/2.' },
        ],
      },
      {
        nama: 'KPK dan FPB',
        kelas: '5',
        materi: `**KPK** (Kelipatan Persekutuan Terkecil) adalah kelipatan bersama yang paling kecil dari dua bilangan atau lebih.

**FPB** (Faktor Persekutuan Terbesar) adalah faktor bersama yang paling besar dari dua bilangan atau lebih.

- Kelipatan 4: 4, 8, 12, 16, 20, 24, ...
- Kelipatan 6: 6, 12, 18, 24, ...
- KPK dari 4 dan 6 = **12**
- Faktor 12: 1, 2, 3, 4, 6, 12
- Faktor 18: 1, 2, 3, 6, 9, 18
- FPB dari 12 dan 18 = **6**

Tips soal cerita: kata "bersamaan lagi" biasanya KPK, sedangkan "dibagi sama banyak sebanyak-banyaknya" biasanya FPB.`,
        soal: [
          { tipe: 'pg', pertanyaan: 'KPK dari 4 dan 6 adalah ...', pilihan: ['2', '12', '24', '10'], jawaban: 'B', pembahasan: 'Kelipatan 4: 4, 8, 12. Kelipatan 6: 6, 12. Kelipatan bersama terkecil = 12.' },
          { tipe: 'pg', pertanyaan: 'FPB dari 12 dan 18 adalah ...', pilihan: ['3', '6', '36', '2'], jawaban: 'B', pembahasan: 'Faktor bersama 12 dan 18: 1, 2, 3, 6. Yang terbesar 6.' },
          { tipe: 'isian', pertanyaan: 'KPK dari 3 dan 5 adalah ...', jawaban: '15', pembahasan: '3 dan 5 tidak punya faktor bersama selain 1, jadi KPK = 3 × 5 = 15.' },
          { tipe: 'isian', pertanyaan: 'FPB dari 16 dan 24 adalah ...', jawaban: '8', pembahasan: 'Faktor 16: 1, 2, 4, 8, 16. Faktor 24: 1, 2, 3, 4, 6, 8, 12, 24. FPB = 8.' },
          { tipe: 'pg', pertanyaan: 'Andi berenang setiap 3 hari, Budi setiap 4 hari. Jika hari ini berenang bersama, mereka akan berenang bersama lagi setelah ... hari.', pilihan: ['7', '12', '1', '24'], jawaban: 'B', pembahasan: 'Kata "bersama lagi" → KPK dari 3 dan 4 = 12 hari.' },
          { tipe: 'pg', pertanyaan: 'Ada 20 apel dan 30 jeruk akan dibagikan sama banyak ke beberapa keranjang sebanyak-banyaknya. Banyak keranjang adalah ...', pilihan: ['5', '10', '60', '2'], jawaban: 'B', pembahasan: 'Dibagi sama banyak sebanyak-banyaknya → FPB dari 20 dan 30 = 10 keranjang.' },
          { tipe: 'pg', pertanyaan: 'Faktorisasi prima dari 12 adalah ...', pilihan: ['2 × 6', '3 × 4', '2² × 3', '2 × 3²'], jawaban: 'C', pembahasan: '12 = 2 × 2 × 3 = 2² × 3.' },
          { tipe: 'pg', pertanyaan: 'Bilangan berikut yang merupakan bilangan prima adalah ...', pilihan: ['9', '15', '21', '13'], jawaban: 'D', pembahasan: '13 hanya habis dibagi 1 dan 13. Yang lain punya faktor lain (9=3×3, 15=3×5, 21=3×7).' },
        ],
      },
    ],
  },
  {
    mapel: 'Bahasa Indonesia',
    ikon: '📖',
    topik: [
      {
        nama: 'Ide Pokok Paragraf',
        kelas: '5',
        materi: `**Ide pokok** adalah gagasan utama yang menjadi inti sebuah paragraf. Ide pokok biasanya terdapat dalam **kalimat utama**.

- Paragraf deduktif: kalimat utama di **awal** paragraf
- Paragraf induktif: kalimat utama di **akhir** paragraf
- Kalimat penjelas berisi keterangan, contoh, atau rincian yang mendukung ide pokok

Cara menemukan ide pokok: baca seluruh paragraf, lalu tanyakan "Paragraf ini sebenarnya membicarakan apa?"`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Gagasan utama yang menjadi inti sebuah paragraf disebut ...', pilihan: ['kalimat penjelas', 'ide pokok', 'judul', 'kesimpulan'], jawaban: 'B', pembahasan: 'Ide pokok adalah gagasan utama sebuah paragraf.' },
          { tipe: 'pg', pertanyaan: 'Paragraf yang kalimat utamanya terletak di awal disebut paragraf ...', pilihan: ['induktif', 'campuran', 'deduktif', 'naratif'], jawaban: 'C', pembahasan: 'Deduktif = kalimat utama di awal, lalu diikuti penjelasan.' },
          { tipe: 'pg', pertanyaan: '"Sampah plastik sangat berbahaya bagi lingkungan. Plastik sulit terurai hingga ratusan tahun. Sampah plastik di laut juga dapat membunuh hewan." Ide pokok paragraf tersebut adalah ...', pilihan: ['Plastik sulit terurai', 'Hewan laut mati', 'Bahaya sampah plastik bagi lingkungan', 'Laut penuh sampah'], jawaban: 'C', pembahasan: 'Kalimat pertama adalah kalimat utama; kalimat berikutnya menjelaskan bahayanya.' },
          { tipe: 'pg', pertanyaan: 'Kalimat yang berisi rincian atau contoh untuk mendukung ide pokok disebut ...', pilihan: ['kalimat utama', 'kalimat penjelas', 'kalimat tanya', 'kalimat perintah'], jawaban: 'B', pembahasan: 'Kalimat penjelas mendukung dan merinci ide pokok.' },
          { tipe: 'pg', pertanyaan: '"Setiap pagi Rina menyiram tanaman. Ia juga memberi pupuk setiap minggu. Rina selalu mencabut rumput liar. Rina sangat rajin merawat kebunnya." Letak kalimat utama paragraf tersebut di ...', pilihan: ['awal', 'tengah', 'akhir', 'awal dan akhir'], jawaban: 'C', pembahasan: 'Kalimat terakhir merangkum semua kegiatan, sehingga paragraf ini induktif.' },
          { tipe: 'isian', pertanyaan: 'Paragraf yang kalimat utamanya di akhir disebut paragraf ...', jawaban: 'induktif', pembahasan: 'Induktif = penjelasan dulu, kesimpulan (kalimat utama) di akhir.' },
        ],
      },
    ],
  },
  {
    mapel: 'IPAS',
    ikon: '🌱',
    topik: [
      {
        nama: 'Siklus Air',
        kelas: '5',
        materi: `Air di bumi terus berputar dalam proses yang disebut **siklus air** (daur hidrologi).

- **Evaporasi**: air laut, sungai, dan danau menguap karena panas matahari
- **Transpirasi**: penguapan air dari tumbuhan melalui daun
- **Kondensasi**: uap air mendingin dan menjadi titik-titik air yang membentuk awan
- **Presipitasi**: air jatuh ke bumi sebagai hujan, salju, atau es
- **Infiltrasi**: air hujan meresap ke dalam tanah

Menjaga siklus air: menanam pohon, membuat lubang biopori, dan tidak membuang sampah ke sungai.`,
        soal: [
          { tipe: 'pg', pertanyaan: 'Proses penguapan air laut karena panas matahari disebut ...', pilihan: ['kondensasi', 'evaporasi', 'presipitasi', 'infiltrasi'], jawaban: 'B', pembahasan: 'Evaporasi adalah penguapan air dari permukaan laut, sungai, dan danau.' },
          { tipe: 'pg', pertanyaan: 'Uap air yang mendingin lalu membentuk awan disebut proses ...', pilihan: ['kondensasi', 'transpirasi', 'evaporasi', 'adveksi'], jawaban: 'A', pembahasan: 'Kondensasi = pengembunan uap air menjadi titik-titik air (awan).' },
          { tipe: 'pg', pertanyaan: 'Penguapan air melalui daun tumbuhan disebut ...', pilihan: ['respirasi', 'fotosintesis', 'transpirasi', 'infiltrasi'], jawaban: 'C', pembahasan: 'Transpirasi adalah penguapan air dari tumbuhan.' },
          { tipe: 'pg', pertanyaan: 'Hujan termasuk tahap ... dalam siklus air.', pilihan: ['presipitasi', 'evaporasi', 'kondensasi', 'transpirasi'], jawaban: 'A', pembahasan: 'Presipitasi adalah jatuhnya air ke bumi dalam bentuk hujan, salju, atau es.' },
          { tipe: 'pg', pertanyaan: 'Kegiatan yang membantu air hujan meresap ke dalam tanah adalah ...', pilihan: ['menebang pohon', 'membuat lubang biopori', 'menyemen seluruh halaman', 'membuang sampah ke selokan'], jawaban: 'B', pembahasan: 'Lubang biopori membantu infiltrasi air hujan ke dalam tanah.' },
          { tipe: 'isian', pertanyaan: 'Meresapnya air hujan ke dalam tanah disebut ...', jawaban: 'infiltrasi', pembahasan: 'Infiltrasi = proses air meresap ke dalam tanah.' },
          { tipe: 'pg', pertanyaan: 'Sumber energi utama yang menggerakkan siklus air adalah ...', pilihan: ['angin', 'bulan', 'matahari', 'listrik'], jawaban: 'C', pembahasan: 'Panas matahari menyebabkan penguapan, awal dari siklus air.' },
        ],
      },
    ],
  },
];
