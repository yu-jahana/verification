if ('serviceWorker' in navigator) {
    console.log('ok');
        navigator.serviceWorker
             .register('./ServiceWorker')
             .then(() => { console.log('Service Worker Registered'); });
} else {
    console.log('ng');
}