self.addEventListener('install', (e)=>{
e.waitUntil(
caches.open('SearchIt').then((cache)=>cache.addAll([
'SearchIt.js',
'SearchIt.html',
'Google.svg',
'YouTube.svg',
'Facebook.svg',
'Instagram.svg',
'Zoom.svg',
'Amazon.svg',
'Whatsapp.svg',
'Twitter.svg',
'Wikipedia.svg',
'Flipkart.svg',
'Ting.mp3',
'Montserrat.css',
'Material.css',
'Material.woff2',
'CyrillicExt.woff2',
'Cyrillic.woff2'
])),
);
});

self.addEventListener('fetch', (e) => {
e.respondWith(
caches.match(e.request).then((response) => response || fetch(e.request)),
);
});
