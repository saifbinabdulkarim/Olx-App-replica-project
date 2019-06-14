const cacheName = 'OLX_Dynamics';
const urlsTocache = [
    './',
    './index.html',
    './pages/form1.html',
    './pages/form2.html',
    './pages/ads.html', 
    './pages/poster.html', 
    './pages/profile.html', 
    './css/style.css',
    './css/bootstrap.css',
    './css/main.css',
    './css/all.css',
    './css/util.css',
    './js/app.js',
    './js/all.js',
    './js/bootstrap.js',
    './js/indexPosters.js',
    './js/jquery.js',
    './js/bootstrap.js',
    './js/popper.js',
    './js/main.js',
    './js/show.js',
    './js/profileData.js',
    './js/sweetalert.js',
    
]

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName)
            .then(function (cache) {
                console.log('[ServiceWorker] Caching app shell');
                return cache.addAll(urlsTocache);
            })
    );
})
self.addEventListener('fetch', function (event) {
    const req = event.request;
    const url = new URL(req.url);
    if (url.origin === location.origin) {
        event.respondWith(cacheFirst(req))
    } else {
        event.respondWith(networkFirst(req))
    }
})

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);
    return cacheResponse || fetch(req);
}

async function networkFirst(req) {
    const cache = await caches.open(cacheName);
    try {
        const res = await fetch(req);
        cache.put(req, res.clone())
        return res
    } catch (error) {
        return await cache.match(req)
    }
} 