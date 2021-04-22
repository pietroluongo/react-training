self.addEventListener('install', (ev) => {
  console.log('[Service Worker] Installing Service Worker...', ev);
});

self.addEventListener('activate', (ev) => {
  console.log('[Service Worker] Activating Service Worker...', ev);
  return self.clients.claim();
});

self.addEventListener('fetch', (ev) => {
  console.log('[Service Worker] Fetching...', ev);
});
