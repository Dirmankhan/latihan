# 📚 Belajar Mandiri — LMS Latihan Soal untuk Anak

Aplikasi web sederhana untuk **membaca materi** dan **latihan soal**. Setiap hasil
latihan otomatis tercatat di **Google Sheet**, sehingga orang tua bisa memantau
perkembangan belajar dari HP atau laptop.

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

| Mapel | Topik | Kelas | Tipe (pg/isian) | Pertanyaan | A | B | C | D | Jawaban | Pembahasan |
|---|---|---|---|---|---|---|---|---|---|---|
| Matematika | Perkalian | 3 | pg | 7 × 8 = ... | 54 | 56 | 58 | 64 | B | 7 × 8 = 56 |
| IPAS | Tumbuhan | 4 | isian | Proses tumbuhan membuat makanan disebut ... | | | | | fotosintesis | |

- Tipe `pg`: kolom Jawaban diisi huruf (A/B/C/D).
- Tipe `isian`: kolom Jawaban diisi teks. Beberapa jawaban benar dipisah `|`,
  misalnya `63|enam puluh tiga`. Huruf besar/kecil tidak berpengaruh.
- Sheet **Materi**: kolom Mapel, Topik, Kelas, Materi. Di teks materi, baris kosong
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
