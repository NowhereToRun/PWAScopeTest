(function() {
  'use strict';

  function showNotification() {
    Notification.requestPermission(function(result) {
      if (result === 'granted') {
        navigator.serviceWorker.ready.then(function(registration) {
          console.log('success');
        });
      }
    });
  }

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('./js/service-worker.js')
      .then(function() {
        console.log('Service Worker Registered');
      })
      .catch(function(err) {
        console.log('Service Worker Failed. ', err);
      });
    showNotification();
  }
})();