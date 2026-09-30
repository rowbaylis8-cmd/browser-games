// Service worker for the Browser Games Arcade home page.
// Only handles the arcade page itself (pathname ending '/' or '/index.html');
// every game page is left alone (games with their own app handle themselves).
const CACHE = 'arcade-v1';
const PAGE = 'index.html';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.add(PAGE)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n.startsWith('arcade-') && n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (!(url.pathname.endsWith('/') || url.pathname.endsWith('/index.html'))) return;
  // Network first, fall back to the cached copy when offline.
  event.respondWith(
    fetch(req)
      .then(res => {
        if (res && res.ok) {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(PAGE, copy));
        }
        return res;
      })
      .catch(() => caches.match(PAGE).then(cached => cached || Response.error()))
  );
});
