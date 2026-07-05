const CACHE_NAME = "sep-v1";

const urlsToCache = [
  "/sep/",
  "/sep/index.html",
  "/sep/manifest.json",
  "/sep/icon.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
