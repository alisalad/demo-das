/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "bebd510724d5193fc7ecdbb308bc221a"
  },
  {
    "url": "assets/css/0.styles.7e0e4fb9.css",
    "revision": "2d712e20cd10a9d6807bb334a0d79fb4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.25c59790.js",
    "revision": "7a8b97b8e63294f87068e6f312a48f48"
  },
  {
    "url": "assets/js/3.d1bff602.js",
    "revision": "356e437cf051586a5966a45d7d699b68"
  },
  {
    "url": "assets/js/4.399150da.js",
    "revision": "e38648487829d900466351a7effceb64"
  },
  {
    "url": "assets/js/5.7c522f4a.js",
    "revision": "04cb9c06d52eb357539eab36bd36493b"
  },
  {
    "url": "assets/js/6.e3081026.js",
    "revision": "bb8f34f697fe269d69cfd39503de7754"
  },
  {
    "url": "assets/js/7.92243b67.js",
    "revision": "4ec5195d942f0779a4588a9d28c53ce7"
  },
  {
    "url": "assets/js/8.9b25be2b.js",
    "revision": "65386ef73f2fac4e8b197997f2ed6463"
  },
  {
    "url": "assets/js/9.f4d56fc1.js",
    "revision": "d5a44794f076ff5417c90ddbf68094b4"
  },
  {
    "url": "assets/js/app.6d000fe7.js",
    "revision": "a8fb53e609440a8c1873d1766424ec0c"
  },
  {
    "url": "calanka.png",
    "revision": "294b5e5df222b7f541a92f335b80355b"
  },
  {
    "url": "dastuurka.png",
    "revision": "7b5ca4a91e90dd9cf52725aaa73e8284"
  },
  {
    "url": "dastuurka/index.html",
    "revision": "73cfaf82f912695fab82d1f86c8aa8c6"
  },
  {
    "url": "english/index.html",
    "revision": "af121feeff23b0837d9aea970446f2d6"
  },
  {
    "url": "guide/index.html",
    "revision": "48ed7342b22623a7d0009413812872c7"
  },
  {
    "url": "guidebook.jpg",
    "revision": "544d37beeefe0244c6d8a05b8849b3db"
  },
  {
    "url": "icon-128x128.png",
    "revision": "b020ae26f2a84bdd4f70ade774dfe7bd"
  },
  {
    "url": "icon-144x144.png",
    "revision": "3d08a812cda5cd90dfb32bd2411d43ac"
  },
  {
    "url": "icon-152x152.png",
    "revision": "258d30456c8754bacfe1b818501abce1"
  },
  {
    "url": "icon-192x192.png",
    "revision": "75c423318de04f38513bd91d95e7d157"
  },
  {
    "url": "icon-384x384.png",
    "revision": "cb82ab198e2b628bec5b56786147804b"
  },
  {
    "url": "icon-512x512.png",
    "revision": "9e199d7037c4ad81d161442258976472"
  },
  {
    "url": "icon-72x72.png",
    "revision": "5d0bf2830706937b5e694391885ef450"
  },
  {
    "url": "icon-96x96.png",
    "revision": "22b17266f3b2a7ecfb07578b7022d09d"
  },
  {
    "url": "index.html",
    "revision": "af9ca5dec9cc99f0815227ec40b5e58b"
  },
  {
    "url": "lang/index.html",
    "revision": "92e98ab82bd6cc6f6703a1887c782bf2"
  },
  {
    "url": "provisional_constitution.png",
    "revision": "0874f6fb76516a616aa7b2220d758826"
  },
  {
    "url": "somalia.png",
    "revision": "55bec34b8d8d4574a89e5f77872246b9"
  },
  {
    "url": "xeerhoosaadka/index.html",
    "revision": "2c8ad3f4a6c9ec119a1f5a5eba790e65"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
