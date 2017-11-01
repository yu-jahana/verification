if ('serviceWorker' in navigator) {
    console.log('ok');
        navigator.serviceWorker
             .register('https://yu-jahana.github.io/verification/assets/sp/js/ServiceWorker')
             .then(() => { console.log('Service Worker Registered'); });
} else {
    console.log('ng');
}
