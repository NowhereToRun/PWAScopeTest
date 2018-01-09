(function() {
  'use strict';

  // const preCacheBtn = document.querySelector('.j_precache');
  // let dataCacheName = 'sinaHome-next-page-v1';
  // let log = (function () {
  //     const logDom = document.querySelector('.j_info');
  //     return {
  //         add: function (msg) {
  //             let logItem = document.createElement('p');
  //             logItem.innerHTML = msg;
  //             logDom.append(logItem);
  //         },
  //         clear: function () {
  //             logDom.innerHTML = '';
  //         }
  //     }
  // })();
  // function getAllHerf() {
  //     const feedList = document.querySelector('#j_card_intenews');
  //     let feedListchild = feedList.children;
  //     let hrefList = [];

  //     for (let i = 0, len = feedListchild.length; i < len; i++) {
  //         feedList.children[i].href && hrefList.push(feedList.children[i].href);
  //     }
  //     return hrefList;
  // }
  // function cacheHTML(url) {
  //     fetch(url)
  //         .then(function (response) {
  //             caches.open(dataCacheName).then(function (cache) {
  //                 console.log('Cached next page ' + response.url);
  //                 cache.put(url, response).then(function () {
  //                     console.log('cache put success')
  //                 })
  //             });
  //         }, function (value) {
  //             console.log(value);
  //             log.add(url + ' ,' + '<span style="color:red;">' + value + '</span>');
  //         })
  // }

  // preCacheBtn.addEventListener('click', function () {
  //     if (window.caches) {
  //         log.clear();
  //         let hrefList = getAllHerf();
  //         hrefList.forEach(function (item, index) {
  //             cacheHTML(item);
  //         });
  //     } else {
  //         console.log("您的浏览器不支持caches存储");
  //         log.add('您的浏览器不支持caches存储');
  //     }
  // });

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
      .register('./service-worker.js', './')
      .then(function() {
        console.log('Service Worker Registered');
      })
      .catch(function(err) {
        console.log('Service Worker Failed. ', err);
      });
    showNotification();
  }
})();