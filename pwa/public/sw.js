self.addEventListener('install', (ev) => {
  console.log('[Service Worker] Installing Service Worker...', ev);
  ev.waitUntil(
    caches.open('static').then((cache) => {
      console.log('[Service Worker] Precaching App Shell');
      cache.addAll([
        '/',
        '/index.html',
        '/src/js/app.js',
        '/src/js/feed.js',
        '/src/js/material.min.js',
        '/src/css/app.css',
        '/src/css/feed.css',
        '/src/images/main-image.jpg',
      ]);
    }, () => {
      console.log('[Service Worker] Failed to Precache App');
    }),
  );
});

self.addEventListener('activate', (ev) => {
  console.log('[Service Worker] Activating Service Worker...', ev);
  return self.clients.claim();
});

self.addEventListener('fetch', (ev) => {
  ev.respondWith(
    caches.match(ev.request).then((res) => {
      if (res) {
        return res;
      }
      return fetch(ev.request);
    }),
  );
});
