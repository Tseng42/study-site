// PWA 離線快取。策略:同源 GET 請求採「網路優先、失敗才退回快取」,確保連線
// 正常時永遠拿到最新內容,只有離線或斷線時才吃快取;跨來源請求(Firebase Auth
// 登入彈窗、Firestore 同步等)完全不攔截,直接放行,避免影響登入/雲端存檔。
const CACHE_VERSION = 'v1';
const CACHE_NAME = `gsat-study-${CACHE_VERSION}`;

// 只預先快取「殼」(頁面框架 + 樣式),JS/資料檔案在使用者瀏覽過程中
// 由下面的 fetch handler 邊瀏覽邊快取,不用在這裡窮舉每一個檔案。
const APP_SHELL = [
  '/',
  '/index.html',
  '/mockexam.html',
  '/profile.html',
  '/real-exam.html',
  '/subject.html',
  '/unit.html',
  '/wrongbook.html',
  '/css/style.css',
  '/manifest.json',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(request)
      .then((response) => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
        return response;
      })
      .catch(() =>
        caches.match(request).then((cached) => {
          if (cached) return cached;
          if (request.mode === 'navigate') return caches.match('/index.html');
          return undefined;
        })
      )
  );
});
