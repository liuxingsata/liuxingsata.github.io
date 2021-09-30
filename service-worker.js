/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["2021/09/30/SpringAop/index.html","9f3457c5cda91ab3cd646b896e7c2366"],["2021/09/30/ffmepg常用命令/index.html","bc114b5d2b62aa75bcf3d177ec6aafa7"],["2021/09/30/gitlab搭建/index.html","0cea3cb3785b2d1eabbed8bd7a1cd2a4"],["2021/09/30/k8s/index.html","229c9da2e712e1e9f8d3d5bc37294e98"],["2021/09/30/kong/index.html","0aa988f43353f508cb34c3f50f133ba2"],["2021/09/30/lettuce/index.html","7a6914c3f550539a0cf64132cd31d458"],["2021/09/30/redis基本数据结构/index.html","6531bf56d7089f1578000ca42dbbdb80"],["2021/09/30/redlock/index.html","194702f687d8f67e86ba045c317f363a"],["2021/09/30/成都记忆/index.html","4d15c44e9fae4a0d6c70125a672529a0"],["2021/09/30/跳表/index.html","c89dce7aff3698fa61e4796faba3fe7a"],["2021/09/30/银河补习班/index.html","7d7dff83e32b9499b181f3c70d22ef73"],["about/index.html","412cee4679d4615ec91ef6f85059ce43"],["archives/2021/09/index.html","a828164f9b89db9776b96d6f8f93d0e0"],["archives/2021/09/page/2/index.html","7b2bca28d1eeb7599823b79297ed1c0a"],["archives/2021/index.html","2bc07f79c9e4843e5b4ff7f297e13911"],["archives/2021/page/2/index.html","9710472d902796063681748e167145f3"],["archives/index.html","d51e9171e57a809b18df33f9b6e33e6e"],["archives/page/2/index.html","8cb20210b6c063cd77b1c3d92f4eacfc"],["assets/algolia/algoliasearch.js","61caddb3e91165f4a39231b58959ea65"],["assets/algolia/algoliasearch.min.js","d9ef9ebf6b31419239cff8047b30e15e"],["assets/algolia/algoliasearchLite.js","0fea8fbf28c472c562fcaed32fbe94e7"],["assets/algolia/algoliasearchLite.min.js","26355d018bb30d571119f4722036c0b6"],["assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["books/index.html","3f8bf07c9c01aaa948a4d7a3acb6ffb9"],["categories/ffmpeg/index.html","260097be723fc7c9f48400042f5e42ec"],["categories/index.html","de4047dafc5279e07caf24791b0b3388"],["categories/k8s/index.html","622814eb343f5e6b736f4510b4f72b9d"],["categories/kong/index.html","431b910eb46da5ac95f180834ac7535f"],["categories/redis/index.html","80862a2bb922c16189a689e3a7d10de5"],["categories/spring/index.html","6258db890e71d1f3f4641b2ff91a77b3"],["comment/index.html","187fc89142e9e083b131f492566b001f"],["css/index.css","4810e147969250879b1b0d9335bc2230"],["css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["index.html","3b5350873f8ec1996641165e98e48b42"],["js/main.js","240e062def7897dd4c03a12bf07fdc65"],["js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["link/index.html","39ee46ec0be0c5b58bdd311c94cd088f"],["movies/index.html","247101f51ed902b6df94563cf2062640"],["music/index.html","43b564b587fd13394dc2104357598b25"],["page/2/index.html","efb6e6de69979a662f5973e8ace3a1e9"],["tags/AOP/index.html","0289a04bbb6e6e01fef5d5762daa7a96"],["tags/Spring/index.html","78cfed9a76e35e44d7089ed938d41a14"],["tags/ffmpeg/index.html","8a4d2bc5ccc9ec1488933cfaecca0af7"],["tags/gitlab/index.html","40acef482984ffb37eb9e7ff75f23040"],["tags/index.html","22ea9ed69197e304962ac1395cfbe093"],["tags/k8s/index.html","d6252f5590ddedacdf427341c6000f95"],["tags/kong/index.html","1591ed9da7651669c90fdbcf47210c39"],["tags/redis/index.html","791e35f016e7d6a13b0052e109b327ff"],["tags/容器/index.html","e4216887d937ee37c72e52e64f1638b0"],["tags/数据结构/index.html","57a18ca6ed7de74457bb24cf5f2eab71"],["tags/旅行/index.html","a31dae76c2d20c8a48c4321faf313892"],["tags/电影/index.html","db9efd57d5e15ef053bf5c1f169d98b9"],["tags/网关/index.html","ab4ca90ab6c0a0347d85aaa765ea2168"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







