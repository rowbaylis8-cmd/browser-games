const CACHE = 'footy-v1';
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.add('footy.html')));
  self.skipWaiting();
});
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate' || new URL(event.request.url).pathname.endsWith('/footy.html')) {
    event.respondWith(caches.match('footy.html').then(cached => cached || fetch(event.request)));
  }
});
