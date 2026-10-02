# 📚 Belajar Mandiri — LMS Latihan Soal untuk Anak

Aplikasi web sederhana untuk **membaca materi** dan **latihan soal**. Setiap hasil
latihan otomatis tercatat di **Google Sheet**, sehingga orang tua bisa memantau
perkembangan belajar dari HP atau laptop.

## Login Siswa & Admin

- **Siswa** masuk dengan memilih **Nama Siswa** (dropdown), **Nama Sekolah** (dropdown), lalu
  mengisi **password**. Daftar sekolah otomatis menyesuaikan nama yang dipilih. Setelah masuk,
  siswa tetap login di perangkat itu sampai menekan **Keluar**.
- **Admin** (orang tua/guru) masuk di tab **Admin** dengan password admin, lalu bisa:
  - **📊 Rekap Hasil**: ringkasan per siswa (jumlah latihan, rata-rata, topik tuntas, terakhir latihan),
    per topik (diurutkan dari rata-rata terendah), dan 100 latihan terbaru. Bisa disaring per
    sekolah, siswa, dan kategori. Klik baris siswa untuk melihat hasil siswa itu saja.
  - **📦 Paket Soal**: mencentang topik yang boleh dikerjakan, untuk **semua siswa**, **satu sekolah**,
    atau **satu siswa**. Urutan yang berlaku: paket siswa → paket sekolah → paket semua siswa →
    tanpa paket (semua topik terbuka). Tombol *Hapus paket* mengembalikan ke tingkat di atasnya.
  - **➕ Tambah Soal**: membuat topik baru atau menambah soal ke topik yang sudah ada (pilihan ganda
    2–4 pilihan, atau isian dengan beberapa jawaban benar dipisah `|`), lengkap dengan materi ringkas
    dan pembahasan. Soal tersimpan di sheet **BankSoal**/**Materi**. Topik baru otomatis dimasukkan ke
    paket yang sudah ada (bisa dimatikan). Topik buatan admin bisa **diubah** atau **dihapus** dari
    daftar *Soal Buatan Admin*; soal bawaan dari buku tidak bisa diubah di sini.
    **📥 Impor banyak soal sekaligus**: salin-tempel teks dari Word/Google Docs, atau pilih file
    **.docx**, **.pdf** (berisi teks, bukan hasil scan), atau **.txt**. Format yang dikenali:

    ```
    1. Hasil dari −8 + 5 adalah ...
    A. −13
    B. −3
    C. 3
    D. 13
    Kunci: B
    Pembahasan: ...

    2. Ibu kota NTB adalah ...
    A. Bima  B. Mataram  C. Sumbawa  D. Praya     ← pilihan sebaris juga bisa

    3. Air membeku pada suhu ... °C              ← tanpa pilihan = soal isian
    Kunci: 0|nol

    Kunci Jawaban                                 ← atau daftar kunci di akhir
    1. B  2. B
    ```

    Penomoran otomatis Word ikut terbaca. Kunci juga bisa ditandai dengan `*` di pilihan yang benar.
    Soal yang kuncinya belum terbaca ditandai kuning dan harus dilengkapi sebelum disimpan.
    Pustaka pembaca Word/PDF (`js/vendor/`, ± 2 MB) hanya dimuat saat file dipilih.

    **🖼️ Soal bergambar**: di setiap soal ada tombol **Tambah gambar** (PNG/JPG/GIF/WebP), atau
    **tempel tangkapan layar (Ctrl+V)** di kotak pertanyaan. Gambar di file **Word** ikut terimpor
    (gambar pertama di tiap soal). Gambar besar otomatis diperkecil. Saat disimpan, gambar diunggah
    ke folder **LMS Gambar Soal** di Google Drive pemilik sheet (dibagikan "siapa saja yang memiliki
    link — lihat") dan link-nya dicatat di kolom **Gambar** sheet BankSoal. Kolom itu juga boleh diisi
    manual dengan link berbagi Google Drive atau link gambar lain. Gambar yang dihapus dari soal
    dipindahkan ke Sampah Drive. Belum didukung: gambar di pilihan jawaban/pembahasan, gambar dari PDF,
    dan rumus Equation Word (ketik ulang atau jadikan tangkapan layar).

Data siswa diisi di sheet **Siswa**:

| Nama | Sekolah | Kelas | Password | Aktif (Ya/Tidak) |
|---|---|---|---|---|
| Adam | MTs Contoh | 7 | 1234 | Ya |

Isi `Tidak` pada kolom Aktif untuk menonaktifkan siswa. Siswa itu akan otomatis keluar dan
tidak bisa masuk lagi. Paket yang dibuat admin tersimpan di sheet **Paket**; tidak perlu diubah manual.

## Dua Kategori Materi

Beranda memiliki dua tab:

- **📘 Materi Pelajaran**: materi dan latihan sesuai pelajaran di madrasah
- **🏆 Persiapan Lomba**: latihan per **kompetisi** → mapel → topik. Saat ini ada KMSI 2026
  (Kompetisi Matematika, Sains, dan Inggris) dan KSM (Kompetisi Sains Madrasah). Tombol filter
  di atas daftar memilih kompetisi yang ditampilkan.

Statistik di beranda dihitung per kategori. Di Google Sheet, setiap hasil latihan
juga dicatat kategori dan kompetisinya (kolom **Kategori** dan **Kompetisi** pada sheet Hasil dan Rincian), dan sheet
**Ringkasan** merekap nilai per kategori.

## Isi Bawaan: Materi Pelajaran Kelas 7 (1 MTs), Semester 1 & 2

### Berbasis buku teks resmi Kemendikdasmen (folder `js/soal-buku/`)

Setiap topik mengikuti bab di buku. Kartu topik menampilkan sumbernya (📚), dan setiap
pembahasan soal mencantumkan halaman buku (📖 hlm. …) sehingga anak bisa membaca ulang bagian itu.
Semua bab dimasukkan, termasuk semester 2, supaya anak bisa berlatih lebih dulu.

| Mapel | Buku rujukan | Topik | Soal |
|---|---|---|---|
| Matematika | Buku Siswa Matematika Kelas VII (Dicky Susanto dkk., 2022) | Bab 1–6 (7 topik) | 95 |
| IPA | Buku Siswa IPA Kelas VII Edisi Revisi (Victoriani Inabuy dkk., 2023) | Bab I–VII (8 topik) | 114 |
| IPS | Buku Siswa IPS Kelas VII (Tema I) + Buku Panduan Guru (Tema II–IV) | 5 topik | 58 |
| Pendidikan Agama Islam | Buku Siswa PAI Kelas VII (Bab I–III) + Buku Panduan Guru (Bab IV–X) | 10 topik | 83 |
| Koding dan Kecerdasan Artifisial | Buku Siswa KKA Kelas VII (Bab 1–2) + Buku Panduan Guru (Bab 2–4) | 5 topik | 80 |

> Bagian yang disusun dari **Buku Panduan Guru** memakai materi pokok, contoh jawaban, dan kunci
> jawaban di buku guru, karena berkas Buku Siswa bab tersebut tidak dapat diunduh. Nomor halaman
> di pembahasannya diberi tanda `(BG)`.

### Soal umum (file `js/bank-soal.js`)

| Mapel | Topik | Soal |
|---|---|---|
| Bahasa Indonesia | Teks Deskripsi | 7 |
| Bahasa Inggris | About Me (Simple Present) | 8 |
| Al-Qur'an Hadis | Hukum Nun Mati dan Tanwin | 8 |
| Akidah Akhlak | Sifat Wajib Allah | 9 |
| Fikih | Taharah (Najis, Wudu, Tayamum) | 8 |
| Sejarah Kebudayaan Islam | Dakwah Nabi Muhammad di Makkah | 8 |
| Bahasa Arab | At-Ta'aruf (Perkenalan) | 7 |

Mengacu pada Kurikulum Merdeka kelas 7 dan mapel PAI/Bahasa Arab madrasah (KMA 347/2022).
Sesuaikan dengan urutan materi di madrasah anak Anda melalui sheet **BankSoal**.

## Isi Bawaan: Persiapan Lomba — KSM (Kompetisi Sains Madrasah)

| Mapel | Topik | Soal |
|---|---|---|
| Matematika Terintegrasi | Teori Bilangan dan Pola | 11 |
| IPA Terintegrasi | Sains dalam Al-Qur'an | 9 |
| IPS Terintegrasi | Geografi, Sejarah, dan Ekonomi Islam | 8 |

## Isi Bawaan: Persiapan Lomba — KMSI 2026 (Kompetisi Matematika, Sains, dan Inggris)

Babak Penyisihan, **Level 4**.

Disusun dari kisi-kisi resmi KMSI 2026 (Yayasan Intan Mutia), file `js/soal-kmsi-level4.js`.
Setiap mapel punya topik **Simulasi Penyisihan** (25 soal acak dari semua topik mapel itu,
termasuk soal tambahan dari Google Sheet)
dan topik latihan per kelompok indikator.

| Mapel | Topik latihan (indikator kisi-kisi) | Soal |
|---|---|---|
| Matematika | Operasi & teori bilangan · Bangun datar & ruang · Persamaan, pola & barisan · Aritmetika sosial & perbandingan · Statistika & peluang | 46 |
| Sains | Makhluk hidup, kesehatan & tubuh manusia · Ekologi & lingkungan · Genetika & bioteknologi · Zat & perubahan · Energi, gaya & metode ilmiah | 50 |
| Bahasa Inggris | Vocabulary & word meaning · Grammar (prepositions, past tenses, modals, conditionals, comparison) · Speaking expressions & functional texts · Reading (report, recount/biography, data, public signs) | 50 |

Untuk soal bacaan, tulis teks bacaan lalu baris kosong, kemudian pertanyaannya.
Aplikasi otomatis menampilkan teks bacaan dalam kotak terpisah.
Jumlah soal per sesi suatu topik dapat diatur dengan `soalPerSesi`.

## Fitur

- Masuk dengan nama & kelas (tanpa kata sandi, cocok untuk anak)
- Materi ringkas per topik, lalu latihan soal **pilihan ganda** dan **isian**
- Soal & pilihan jawaban diacak setiap latihan. Satu latihan berisi `SOAL_PER_SESI` soal (bawaan 10);
  soal yang **belum pernah keluar diutamakan**, lalu yang pernah salah, sehingga dalam beberapa kali
  latihan semua soal topik itu terkerjakan. Kartu topik menampilkan "Sudah dicoba X dari Y soal",
  dan tombol **📋 Semua** untuk mengerjakan seluruh soal topik sekaligus
- Timer, navigasi nomor soal, nilai, bintang ⭐, dan **pembahasan** tiap soal
- Tombol **"Ulangi yang Salah"** untuk mengulang soal yang keliru
- Beranda: jumlah latihan, rata-rata nilai, topik tuntas (≥ KKTP), hari beruntun 🔥
- Hasil tersimpan ke Google Sheet: sheet **Hasil** (nilai), **Rincian** (jawaban
  per soal), dan **Ringkasan** (rekap otomatis + soal yang paling sering salah)
- Soal baru bisa ditambah **langsung di Google Sheet** (sheet **BankSoal** & **Materi**)
- Tetap bisa dipakai saat internet putus — hasil disimpan dulu lalu dikirim otomatis

## Kecepatan & Pasang di HP

- Setelah dibuka sekali, file aplikasi disimpan di perangkat (service worker `sw.js`), sehingga
  aplikasi terbuka dalam hitungan detik walau sinyal lemah, bahkan tanpa internet. Soal, paket,
  daftar siswa, dan rekap admin ditampilkan dari data terakhir, lalu diperbarui di belakang layar.
- Hasil latihan yang dikerjakan tanpa internet dikirim otomatis saat online kembali.
- Gambar soal disimpan di perangkat setelah sekali dimuat; gambar satu sesi kuis dimuat sejak awal.
- **Pasang seperti aplikasi:** di Chrome Android buka menu ⋮ → **Instal aplikasi / Tambahkan ke layar
  utama**; di iPhone (Safari) tombol Bagikan → **Tambah ke Layar Utama**.
- Yang tetap butuh internet: login, menyimpan soal/paket, dan mengirim hasil. Kecepatannya
  bergantung pada Google Apps Script (biasanya 1–3 detik per permintaan).

## Langkah Pemasangan (± 10 menit)

### 1. Siapkan Google Sheet + Apps Script
1. Buka [sheets.new](https://sheets.new), beri nama misalnya **"Hasil Belajar Anak"**.
2. Menu **Ekstensi → Apps Script**. Hapus isi bawaan, tempel seluruh isi
   [`apps-script/Code.gs`](apps-script/Code.gs).
3. Ubah baris `const TOKEN = '...'` menjadi kode rahasia Anda sendiri, dan
   `const ADMIN_PASSWORD = '...'` menjadi password admin Anda, lalu simpan (💾).
4. Pilih fungsi **`setup`** di toolbar → klik **Jalankan** → izinkan akses
   (klik *Advanced/Lanjutan → Buka proyek* jika muncul peringatan).
   Sheet Hasil, Rincian, BankSoal, Materi, Siswa, Paket, dan Ringkasan akan dibuat otomatis.
   Lalu isi sheet **Siswa** (ganti baris contoh dengan data siswa sebenarnya).
5. Klik **Terapkan (Deploy) → Deployment baru** → jenis **Aplikasi web**:
   - Jalankan sebagai: **Saya**
   - Yang memiliki akses: **Siapa saja**
6. Salin **URL aplikasi web** (berakhiran `/exec`).

### 2. Hubungkan aplikasi
Buka [`js/config.js`](js/config.js), isi:
```js
APPS_SCRIPT_URL: 'https://script.google.com/macros/s/XXXX/exec',
TOKEN: 'kode-rahasia-yang-sama-dengan-Code.gs',
```

### 3. Online-kan aplikasi (gratis, GitHub Pages)
Di GitHub: **Settings → Pages → Source: Deploy from a branch** → pilih branch
dan folder `/ (root)` → Save. Setelah 1–2 menit aplikasi bisa dibuka di
`https://<username>.github.io/latihan/`. Di HP, pilih **"Tambahkan ke Layar Utama"**
agar terasa seperti aplikasi.

> Ingin coba di komputer saja? Jalankan `python3 -m http.server` di folder ini
> lalu buka `http://localhost:8000`.

> ⚠️ Jika `Code.gs` diubah, lakukan **Deploy → Kelola deployment → Edit → Versi baru**
> agar perubahan berlaku (URL tetap sama).

> 🔄 **Memperbarui dari versi tanpa login:** tempel `Code.gs` terbaru, isi `TOKEN` dan
> `ADMIN_PASSWORD`, jalankan **`setup`** sekali lagi (data lama tidak terhapus; kolom
> **Sekolah** ditambahkan di sheet Hasil dan Rincian), isi sheet **Siswa**, lalu deploy **Versi baru**.
> Semua pengguna perlu masuk ulang. Hasil latihan yang belum terkirim tetap dikirim setelah siswa masuk.

> 🖼️ **Mengaktifkan gambar soal:** setelah menempel `Code.gs` versi bergambar, jalankan **`setup`**
> sekali lagi dan izinkan akses **Google Drive** (untuk membuat folder *LMS Gambar Soal*), lalu
> deploy **Versi baru**.

## Menambah Soal

**Cara termudah — lewat Google Sheet** (tanpa mengubah kode). Sheet **BankSoal**:

| Mapel | Topik | Kelas | Tipe (pg/isian) | Pertanyaan | A | B | C | D | Jawaban | Pembahasan | Kategori |
|---|---|---|---|---|---|---|---|---|---|---|---|
| Matematika | Bilangan Bulat | 7 | pg | −3 × 4 = ... | −12 | 12 | −7 | 1 | A | Tanda berbeda → negatif | pelajaran |
| IPA Terintegrasi | Ekosistem | 7 | isian | Hewan yang namanya menjadi nama surah ke-16 adalah ... | | | | | lebah | QS. An-Nahl = lebah | lomba |

- Kolom **Kategori**: isi `pelajaran` atau `lomba`. Jika dikosongkan, dianggap `pelajaran`.
- Kolom **Kompetisi** (khusus lomba): nama kompetisi, misalnya `KMSI 2026` atau `KSM`. Jika diisi,
  soal otomatis masuk tab Persiapan Lomba. Mapel + Topik + Kompetisi yang sama dengan yang sudah
  ada akan menambah topik tersebut (huruf besar/kecil tidak berpengaruh); nama baru membuat topik
  atau kompetisi baru.
- Tipe `pg`: kolom Jawaban diisi huruf (A/B/C/D).
- Tipe `isian`: kolom Jawaban diisi teks. Beberapa jawaban benar dipisah `|`,
  misalnya `63|enam puluh tiga`. Huruf besar/kecil tidak berpengaruh.
- Sheet **Materi**: kolom Mapel, Topik, Kelas, Materi, Kategori, Kompetisi. Di teks materi, baris kosong
  = paragraf baru, awali baris dengan `- ` untuk daftar, `**teks**` untuk tebal.

Soal bawaan juga bisa diubah di [`js/bank-soal.js`](js/bank-soal.js) dan file di folder
[`js/soal-buku/`](js/soal-buku/) (satu file per mapel; `BUKU.pg(...)` / `BUKU.isian(...)`
menerima nomor halaman buku sebagai argumen terakhir).

## Pengaturan Lain (`js/config.js`)
- `KKTP` — nilai minimal agar topik ditandai **Tuntas** (bawaan 75)
- `SOAL_PER_SESI` — jumlah soal per latihan (bawaan 10, diambil acak)
- `JUDUL` — nama aplikasi

## Struktur Berkas
```
index.html            Tampilan aplikasi
css/style.css         Gaya tampilan (mendukung mode gelap)
js/config.js          Pengaturan (URL Apps Script, token, KKTP)
js/bank-soal.js       Materi & soal bawaan (umum + KSM)
js/soal-buku/         Soal berbasis buku teks kelas 7 (Matematika, IPA, IPS, PAI, KKA)
js/soal-kmsi-level4.js Soal KMSI 2026 Level 4
js/impor-soal.js      Pembaca soal dari teks/Word/PDF (admin)
sw.js                 Service worker: menyimpan aplikasi di perangkat agar cepat dibuka
manifest.webmanifest  Agar bisa dipasang di layar utama HP (ikon di folder img/)
js/vendor/            mammoth.js (Word) & pdf.js (PDF), beserta lisensinya
js/app.js             Logika aplikasi
apps-script/Code.gs   Backend Google Sheet
```

## Catatan Keamanan
- Password siswa dan admin diperiksa di Apps Script (server), tidak pernah dikirim ke browser.
  Setelah login, aplikasi menerima **sesi bertanda tangan** (berlaku 365 hari untuk siswa,
  7 hari untuk admin). Hasil latihan hanya diterima dari siswa yang login dan masih aktif.
- Salah password 5 kali → nama itu (atau login admin) dikunci 10 menit.
- **Nama siswa dan nama sekolah** bisa dilihat siapa pun yang membuka aplikasi (untuk dropdown
  login). Password dan nilai tidak.
- Password siswa tersimpan apa adanya di sheet Siswa agar mudah diatur orang tua/guru. Jangan
  bagikan akses Google Sheet ke siswa, dan jangan memakai password yang sama dengan akun lain.
- Token di `config.js` hanya pengaman ringan karena bisa dilihat publik.
