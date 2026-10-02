// Service worker: menyimpan file aplikasi di perangkat agar terbuka cepat (dan tetap bisa dibuka saat sinyal lemah).
// - Halaman (index.html): ambil dari internet dulu (maks. 3 detik), jika lambat/putus pakai salinan tersimpan.
// - File aplikasi (js, css, ikon): pakai salinan tersimpan, lalu perbarui diam-diam di belakang layar.
// - Gambar soal dari Google Drive: disimpan setelah sekali dimuat.
// - Permintaan ke Apps Script (data & hasil latihan) tidak pernah disimpan.
const VERSI = 'lms-v1';
const CACHE_APP = VERSI + '-app';
const CACHE_GAMBAR = VERSI + '-gambar';
// Gambar lintas situs dihitung besar oleh browser, jadi jumlahnya dibatasi.
const MAKS_GAMBAR = 80;

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_APP).then((c) => c.addAll(['./', './index.html'])).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const nama = await caches.keys();
    await Promise.all(nama.filter((n) => !n.startsWith(VERSI)).map((n) => caches.delete(n)));
    await self.clients.claim();
  })());
});

async function halaman(req) {
  const cache = await caches.open(CACHE_APP);
  const dariInternet = fetch(req).then((res) => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  });
  const tersimpan = await cache.match(req, { ignoreSearch: true });
  if (!tersimpan) return dariInternet;
  // Tunggu internet maksimal 3 detik; kalau lebih lama, tampilkan salinan tersimpan.
  const batas = new Promise((ok) => setTimeout(() => ok(tersimpan), 3000));
  return Promise.race([dariInternet.catch(() => tersimpan), batas]);
}

async function fileApp(req) {
  const cache = await caches.open(CACHE_APP);
  const tersimpan = await cache.match(req);
  const baru = fetch(req).then((res) => {
    if (res.ok) cache.put(req, res.clone());
    return res;
  }).catch(() => tersimpan);
  return tersimpan || baru;
}

async function gambar(req) {
  const cache = await caches.open(CACHE_GAMBAR);
  const tersimpan = await cache.match(req);
  if (tersimpan) return tersimpan;
  let res;
  try { res = await fetch(req); } catch (err) { return Response.error(); }
  if (res.ok || res.type === 'opaque') {
    try {
      await cache.put(req, res.clone());
      const kunci = await cache.keys();
      if (kunci.length > MAKS_GAMBAR) await Promise.all(kunci.slice(0, kunci.length - MAKS_GAMBAR).map((k) => cache.delete(k)));
    } catch (err) { /* penyimpanan penuh: gambar tetap ditampilkan, hanya tidak disimpan */ }
  }
  return res;
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.hostname === 'script.google.com' || url.hostname.endsWith('googleusercontent.com') && url.pathname.startsWith('/macros')) return;
  if (url.origin === self.location.origin) {
    if (req.mode === 'navigate') e.respondWith(halaman(req));
    else e.respondWith(fileApp(req));
    return;
  }
  if (req.destination === 'image' && /(^|\.)drive\.google\.com$|googleusercontent\.com$/.test(url.hostname)) e.respondWith(gambar(req));
});
