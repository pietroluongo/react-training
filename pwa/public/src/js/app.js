const loadServiceWorkers = async () => {
  await navigator.serviceWorker.register('/sw.js')
    .then(() => {
      console.log('ServiceWorker instantiated');
    }, () => {
      console.log('ServiceWorker instantiation failed');
    });
};

if ('serviceWorker' in navigator) {
  loadServiceWorkers();
}

let deferredInstallPromptEvent;

window.addEventListener('beforeinstallprompt', (event) => {
  console.log('Fired beforeInstallPrompt event');
  event.preventDefault();
  deferredInstallPromptEvent = event;
});
