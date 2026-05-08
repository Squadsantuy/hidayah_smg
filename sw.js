const CACHE_NAME = 'hidayah-v1';
const assets = [
  './',
  './index.html',
  '../assets/css/hope-ui.min.css?v=2.0.0',
  '../assets/css/custom.min.css?v=2.0.0',
  '../assets/icon/quran.png',
  '../assets/icon/doa.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
