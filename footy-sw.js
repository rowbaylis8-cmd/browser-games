// Service worker for Footy Match (full 4-quarter game + goal kicking practice).
// Only handles requests for footy.html so it never hijacks the other games' pages.
const CACHE = 'footy-v3';
const PAGE = 'footy.html';

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.add(PAGE)).catch(() => {}));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n.startsWith('footy-') && n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || !url.pathname.endsWith('/footy.html')) return;
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
