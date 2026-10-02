// Service worker for Alien Builders (installable, offline home-screen app).
// Scope is just the /alien-builders/ folder, so it never touches the other games.
const CACHE = 'alien-builders-v1';
const ASSETS = ['./', 'index.html', 'manifest.webmanifest', 'icon.svg', 'icon-180.png', 'icon-192.png', 'icon-512.png'];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => Promise.all(ASSETS.map(a => cache.add(a).catch(() => {}))))
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(names => Promise.all(names.filter(n => n.startsWith('alien-builders-') && n !== CACHE).map(n => caches.delete(n))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const scope = new URL(self.registration.scope);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(scope.pathname)) return;
  const isPage = req.mode === 'navigate' || url.pathname === scope.pathname || url.pathname.endsWith('/index.html');
  if (isPage) {
    // The game page: network first (so updates arrive), cached copy when offline.
    event.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.ok) {
            const copy = res.clone();
            caches.open(CACHE).then(cache => { cache.put('./', copy.clone()); cache.put('index.html', copy); });
          }
          return res;
        })
        .catch(() => caches.match('./').then(r => r || caches.match('index.html')).then(r => r || Response.error()))
    );
    return;
  }
  // Icons / manifest: cache first.
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(hit => hit || fetch(req).then(res => {
      if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then(cache => cache.put(req, copy)); }
      return res;
    }))
  );
});
