const CACHE_VERSION='nirc-run-pulse-v1.0.10';
const APP_SHELL=['/','/manifest.webmanifest','/icon-192.png','/icon-512.png'];
self.addEventListener('install',event=>{self.skipWaiting();event.waitUntil(caches.open(CACHE_VERSION).then(c=>c.addAll(APP_SHELL).catch(()=>{})))});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys()){if(key!==CACHE_VERSION)await caches.delete(key)}await self.clients.claim()})())});
self.addEventListener('fetch',event=>{
 const req=event.request;if(req.method!=='GET')return;
 if(req.mode==='navigate'){event.respondWith(fetch(req,{cache:'no-store'}).then(r=>{const copy=r.clone();caches.open(CACHE_VERSION).then(c=>c.put('/',copy)).catch(()=>{});return r}).catch(()=>caches.match('/')));return}
 event.respondWith(fetch(req).then(r=>{if(new URL(req.url).origin===self.location.origin){const copy=r.clone();caches.open(CACHE_VERSION).then(c=>c.put(req,copy)).catch(()=>{})}return r}).catch(()=>caches.match(req)));
});
