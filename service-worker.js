var cacheName = 'cache-v10';

var filesToCache = [
  './',
  './index.html',
	'./css/style.scss',
  './images/favicon.png',
  './js/jquery-3.0.0.min.js',
	'./js/script.js',
	'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700' //3rd party resource
];

//Adding 'install' event listener
self.addEventListener('install', function (event) {
  console.log('Event: Install');

  event.waitUntil(
  	//Open the cache
  	caches.open(cacheName)
  		.then(function (cache) {
  			//Adding the files to cache
  			return cache.addAll(filesToCache)
  				.then(function () {
  					console.log("All files are cached.");
  				})
  		})
  		.catch(function (err) {
  			console.log(err)
  		})
	);
});

//Adding 'activate' event listener
self.addEventListener('activate', function (event) {
  console.log('Event: Activate');

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cache) {
          if (cache !== cacheName) {     //cacheName = 'cache-v1'
            return caches.delete(cache); //Deleting the cache
          }
        })
      );
    })
  );
});

//Adding 'fetch' event listener
self.addEventListener('fetch', function (event) {
  console.log('Event: Fetch - ', event.request.url);

  var request = event.request;
console.log(request);
  //Tell the browser to wait for network request and respond with below
  event.respondWith(
    //If request is already in cache, return it
    caches.match(request).then(function(response) {
      if (response) {
        return response;
      }

      //else add the request to cache and return the response
      return fetch(request).then(function(response) {
        var responseToCache = response.clone(); //Cloning the response stream in order to add it to cache
        caches.open(cacheName).then(
          function(cache) {
            cache.put(request, responseToCache); //Adding to cache
          });

        return response;
      });
    })
  );
});
