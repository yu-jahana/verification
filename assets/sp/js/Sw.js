if ('serviceWorker' in navigator) {
        navigator.serviceWorker
             .register('./ServiceWorker')
             .then(() => { console.log('Service Worker Registered'); });
    } else {
        console.log('ng');
    }
}

