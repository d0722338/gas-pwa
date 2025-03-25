const CACHE_NAME = "gas-pwa-cache-v1";
const urlsToCache = [
  "https://script.google.com/macros/s/AKfycbxUkGryw2wQE-banVz1jXu523JRe0l3GuybV9T0yWxe/dev"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
