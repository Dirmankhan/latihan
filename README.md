# 📚 Belajar Mandiri — LMS Latihan Soal untuk Anak

Aplikasi web sederhana untuk **membaca materi** dan **latihan soal**. Setiap hasil
latihan otomatis tercatat di **Google Sheet**, sehingga orang tua bisa memantau
perkembangan belajar dari HP atau laptop.

## Dua Kategori Materi

Beranda memiliki dua tab:

- **📘 Materi Pelajaran**: materi dan latihan sesuai pelajaran di madrasah
- **🏆 Persiapan Lomba**: latihan per **kompetisi** → mapel → topik. Saat ini ada KMSI 2026
  (Kompetisi Matematika, Sains, dan Inggris) dan KSM (Kompetisi Sains Madrasah). Tombol filter
  di atas daftar memilih kompetisi yang ditampilkan.

Statistik di beranda dihitung per kategori. Di Google Sheet, setiap hasil latihan
juga dicatat kategori dan kompetisinya (kolom **Kategori** dan **Kompetisi** pada sheet Hasil dan Rincian), dan sheet
**Ringkasan** merekap nilai per kategori.

## Isi Bawaan: Materi Pelajaran Kelas 7 (1 MTs), Semester 1

| Mapel | Topik | Soal |
|---|---|---|
| Matematika | Bilangan Bulat; Rasio dan Perbandingan | 10 + 8 |
| IPA | Besaran, Satuan, dan Metode Ilmiah; Zat dan Perubahannya | 9 + 8 |
| IPS | Letak Wilayah Indonesia | 8 |
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
- Soal & pilihan jawaban diacak setiap latihan
- Timer, navigasi nomor soal, nilai, bintang ⭐, dan **pembahasan** tiap soal
- Tombol **"Ulangi yang Salah"** untuk mengulang soal yang keliru
- Beranda: jumlah latihan, rata-rata nilai, topik tuntas (≥ KKTP), hari beruntun 🔥
- Hasil tersimpan ke Google Sheet: sheet **Hasil** (nilai), **Rincian** (jawaban
  per soal), dan **Ringkasan** (rekap otomatis + soal yang paling sering salah)
- Soal baru bisa ditambah **langsung di Google Sheet** (sheet **BankSoal** & **Materi**)
- Tetap bisa dipakai saat internet putus — hasil disimpan dulu lalu dikirim otomatis

## Langkah Pemasangan (± 10 menit)

### 1. Siapkan Google Sheet + Apps Script
1. Buka [sheets.new](https://sheets.new), beri nama misalnya **"Hasil Belajar Anak"**.
2. Menu **Ekstensi → Apps Script**. Hapus isi bawaan, tempel seluruh isi
   [`apps-script/Code.gs`](apps-script/Code.gs).
3. Ubah baris `const TOKEN = '...'` menjadi kode rahasia Anda sendiri, lalu simpan (💾).
4. Pilih fungsi **`setup`** di toolbar → klik **Jalankan** → izinkan akses
   (klik *Advanced/Lanjutan → Buka proyek* jika muncul peringatan).
   Sheet Hasil, Rincian, BankSoal, Materi, dan Ringkasan akan dibuat otomatis.
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

Soal bawaan juga bisa diubah di [`js/bank-soal.js`](js/bank-soal.js).

## Pengaturan Lain (`js/config.js`)
- `KKTP` — nilai minimal agar topik ditandai **Tuntas** (bawaan 75)
- `SOAL_PER_SESI` — jumlah soal per latihan (bawaan 10, diambil acak)
- `JUDUL` — nama aplikasi

## Struktur Berkas
```
index.html            Tampilan aplikasi
css/style.css         Gaya tampilan (mendukung mode gelap)
js/config.js          Pengaturan (URL Apps Script, token, KKTP)
js/bank-soal.js       Materi & soal bawaan
js/app.js             Logika aplikasi
apps-script/Code.gs   Backend Google Sheet
```

## Catatan Keamanan
Token hanya pengaman ringan agar orang lain tidak asal mengirim data. Karena token
ada di `config.js` yang bisa dilihat publik, jangan simpan data sensitif di sheet ini.
