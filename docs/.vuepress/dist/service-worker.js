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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.2/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8f8f8e17192285bb484015061a9669c6"
  },
  {
    "url": "assets/css/0.styles.1d702be2.css",
    "revision": "4ad2bf0464e8911d2558fd5ba8506591"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.285762ea.js",
    "revision": "93afbd4e91ed17280e84a6930dc81b17"
  },
  {
    "url": "assets/js/3.333d5d44.js",
    "revision": "b22b978062ddce129ffd9a3be4557b00"
  },
  {
    "url": "assets/js/4.e70b76e2.js",
    "revision": "0839242a249c9a498ab1da7fef6e8504"
  },
  {
    "url": "assets/js/5.1298a4b0.js",
    "revision": "78fac9253e911f269c3fbbd244d7fab7"
  },
  {
    "url": "assets/js/6.17156e65.js",
    "revision": "c3ea777c3ce6b675a5c407bdbcf62f55"
  },
  {
    "url": "assets/js/7.1a660909.js",
    "revision": "2bfd520156159ee93198e7e1d22e7286"
  },
  {
    "url": "assets/js/8.6e40dd83.js",
    "revision": "e5041aa16fe9af2de073b63a2556e026"
  },
  {
    "url": "assets/js/9.87ebce4b.js",
    "revision": "3d13ba1df90af127537b747d9e3088b2"
  },
  {
    "url": "assets/js/app.face7964.js",
    "revision": "3a65d3ad900282ebfb36b6ec2f5b8dbb"
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
    "revision": "792fce1449a9deb9912ce6aabae4e785"
  },
  {
    "url": "english/index.html",
    "revision": "afc471fc685c65e531ad7d10342ddc23"
  },
  {
    "url": "guide/index.html",
    "revision": "02005213e1af28df4a6fe162aa4e155c"
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
    "revision": "39d3aaabd7b7671613cdd95b0b25282f"
  },
  {
    "url": "lang/index.html",
    "revision": "1dae8fa294c84bc6f117d887c0dfe1af"
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
    "revision": "2abffc76871e8aedb0034d647bfe9fd1"
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
