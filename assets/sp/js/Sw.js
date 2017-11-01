if ('serviceWorker' in navigator) {
navigator.serviceWorker
         .register('https://yu-jahana.github.io/verification/assets/sp/js/ServiceWorker.js')
         .then(function() { console.log('Service Worker Registered'); });
}