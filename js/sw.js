const CACHE_NAME = 'sanjyra-cache-v1';

// Список того, что мы кладем в рюкзак при первом заходе
const ASSETS = [
    '/',
    '/index.html',
    '/css/style.css',
    '/app-config.js',
    '/js/tree.js',
    '/js/bio.js',
    '/js/events.js',
    '/assets/fon.webp',
    '/assets/avatar.webp',
    '/assets/kalpak.webp',
    '/assets/yal.webp',
    '/assets/sanjyra-icon.png',
    '/assets/atatek.webp'
];

// Установка: скачиваем всё и прячем в кэш (рюкзак)
self.addEventListener('install', (event) => {
    self.skipWaiting(); // Заставляем рюкзак работать сразу же
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Активация: чистим старые рюкзаки, если мы обновили версию
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Перехват запросов: магия скорости!
self.addEventListener('fetch', (event) => {
    // Не кэшируем запросы к базе данных (Firebase), только сам сайт
    if (event.request.url.includes('firestore') || event.request.url.includes('google')) {
        return;
    }

    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Идем в интернет за свежей версией на всякий случай
            const fetchPromise = fetch(event.request).then((networkResponse) => {
                // Если скачали свежее - обновляем это в рюкзаке
                caches.open(CACHE_NAME).then((cache) => {
                    cache.put(event.request, networkResponse.clone());
                });
                return networkResponse;
            }).catch(() => {
                // Если интернета вообще нет, ничего страшного, молчим
            });

            // Если есть в кэше - отдаем МГНОВЕННО! Иначе ждем из интернета.
            return cachedResponse || fetchPromise;
        })
    );
});