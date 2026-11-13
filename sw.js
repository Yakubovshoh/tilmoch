/* Tilmoch — offline service worker */
const CACHE='tilmoch-v5.0.0';
const FILES=["./", "./app.js", "./app3.js", "./apple-touch-icon.png", "./data.js", "./data2.js", "./fonts/jetbrains-mono-cyrillic-500-normal.woff2", "./fonts/jetbrains-mono-cyrillic-700-normal.woff2", "./fonts/jetbrains-mono-latin-500-normal.woff2", "./fonts/jetbrains-mono-latin-700-normal.woff2", "./fonts/onest-cyrillic-400-normal.woff2", "./fonts/onest-cyrillic-500-normal.woff2", "./fonts/onest-cyrillic-600-normal.woff2", "./fonts/onest-cyrillic-700-normal.woff2", "./fonts/onest-latin-400-normal.woff2", "./fonts/onest-latin-500-normal.woff2", "./fonts/onest-latin-600-normal.woff2", "./fonts/onest-latin-700-normal.woff2", "./fonts/onest-latin-ext-400-normal.woff2", "./fonts/onest-latin-ext-500-normal.woff2", "./fonts/onest-latin-ext-600-normal.woff2", "./fonts/onest-latin-ext-700-normal.woff2", "./fonts/playfair-display-cyrillic-600-normal.woff2", "./fonts/playfair-display-cyrillic-700-normal.woff2", "./fonts/playfair-display-latin-600-normal.woff2", "./fonts/playfair-display-latin-700-normal.woff2", "./fonts/playfair-display-latin-ext-600-normal.woff2", "./fonts/playfair-display-latin-ext-700-normal.woff2", "./fonts/unbounded-cyrillic-600-normal.woff2", "./fonts/unbounded-cyrillic-700-normal.woff2", "./fonts/unbounded-latin-600-normal.woff2", "./fonts/unbounded-latin-700-normal.woff2", "./icon-192.png", "./icon-512.png", "./icon-maskable-512.png", "./index.html", "./manifest.webmanifest", "./style.css"];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  if(e.request.method!=='GET')return;
  e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(hit=>hit||fetch(e.request).then(res=>{
    if(res.ok&&new URL(e.request.url).origin===location.origin){const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
    return res;}).catch(()=>caches.match('./index.html'))));
});
