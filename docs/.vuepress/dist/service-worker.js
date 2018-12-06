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
    "revision": "905f14072ef2b2c8819e6533c8891c09"
  },
  {
    "url": "assets/css/0.styles.a5e41e54.css",
    "revision": "ebd013e8259596d82a47ec5161061232"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.a4cf675e.js",
    "revision": "1c6b048b81dfea0ce9854bdbb68e1bc2"
  },
  {
    "url": "assets/js/3.ffa4d33b.js",
    "revision": "10ea4533793f9ffec2b75157e6f7f778"
  },
  {
    "url": "assets/js/4.5731f352.js",
    "revision": "5da6ea5e0c81c755488bebf375b89794"
  },
  {
    "url": "assets/js/5.7bf922f9.js",
    "revision": "48ff990f9428da02f5efb5a1cb42f942"
  },
  {
    "url": "assets/js/6.3dc1da16.js",
    "revision": "7dee2bf707cdf8de3a990827b0e9a69b"
  },
  {
    "url": "assets/js/7.5db693cb.js",
    "revision": "4cef91a08757b8bc00c956114c696ecb"
  },
  {
    "url": "assets/js/8.28b627c0.js",
    "revision": "55d7d2e82a5f9dca8ebfced5317bae02"
  },
  {
    "url": "assets/js/app.2449d472.js",
    "revision": "63d945397e110b42b01cfd14e012883c"
  },
  {
    "url": "dastuurka/index.html",
    "revision": "51044cff13a7f18709e6539a3e1ed230"
  },
  {
    "url": "guide/index.html",
    "revision": "92be6595324eb4c38a644bb34a109f24"
  },
  {
    "url": "guidebook.jpg",
    "revision": "0a90fddf5d62941a2c992c5b0db15e07"
  },
  {
    "url": "index.html",
    "revision": "dc51897c63e84aeda66b8b1a8131141f"
  },
  {
    "url": "lang/index.html",
    "revision": "82066af6384ad86084fd8dedf4d0f289"
  },
  {
    "url": "somalia.png",
    "revision": "55bec34b8d8d4574a89e5f77872246b9"
  },
  {
    "url": "xeerhoosaadka/index.html",
    "revision": "8ca1e0120481e358fb5494dd24e067e7"
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
