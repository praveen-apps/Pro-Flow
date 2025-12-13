const CACHE_NAME = 'pro-flow-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  // If you uploaded a local background image (like bg.jpg), uncomment the next line:
  // './bg.jpg' 
];

// 1. Install Service Worker & Cache Files
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. Serve Cached Files when Offline
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // Return cached file if found, otherwise fetch from internet
      return response || fetch(e.request);
    })
  );
});
