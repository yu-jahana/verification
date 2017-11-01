importScripts('https://yu-jahana.github.io/verification/node_modules/workbox-sw/build/modules/workbox-sw.prod.v2.1.0.mjs');

const workboxSW = new WorkboxSW();
workboxSW.precache([
  {
    url: '/index.html',
    revision: 'bb121c',
  }, {
    url: 'https://yu-jahana.github.io/verification/assets/img/icon/l/101.png',
    revision: 'acd123',
  }, {
    url: 'https://yu-jahana.github.io/verification/assets/sp/css/top_main.min.css',
    revision: 'a32caa',
  }
]);
