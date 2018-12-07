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
    "revision": "894247c17a4af6bff2d6f9caa8bd607f"
  },
  {
    "url": "assets/css/0.styles.22842a01.css",
    "revision": "873c4ca53ed98476d39d0245832b2398"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/3.5e2a12e5.js",
    "revision": "add33f4466533e696fb56823bf5e2d5c"
  },
  {
    "url": "assets/js/4.bc7d5cf1.js",
    "revision": "6f7e8993646bace49f9ff501a29d28d5"
  },
  {
    "url": "assets/js/5.55dd2503.js",
    "revision": "b792667e8da3f3785f5b77f0a5ecd7d8"
  },
  {
    "url": "assets/js/6.8dd5bb4e.js",
    "revision": "7be559eed6c9208ab39c08ce8aed3d17"
  },
  {
    "url": "assets/js/7.0d3ecb56.js",
    "revision": "97857892de2bf7f8d6f592d1d0cf83b5"
  },
  {
    "url": "assets/js/8.ca3e1de9.js",
    "revision": "8d61bfa4b4bf14efcb6dae715daad31d"
  },
  {
    "url": "assets/js/9.6b4370e0.js",
    "revision": "fa4634529913950bd3e6786170bc0c8a"
  },
  {
    "url": "assets/js/app.ddfe061c.js",
    "revision": "ed9332bcee2050208538767a694f721a"
  },
  {
    "url": "assets/js/vendors~docsearch.0f761e11.js",
    "revision": "f638395b1f6178592dbfb81cd4dd5717"
  },
  {
    "url": "dastuurka/index.html",
    "revision": "3d35597e56a41109493ec4345fc52316"
  },
  {
    "url": "guide/index.html",
    "revision": "66a97cc1de0d2745051a6c6bd54c6735"
  },
  {
    "url": "guidebook.jpg",
    "revision": "0a90fddf5d62941a2c992c5b0db15e07"
  },
  {
    "url": "index.html",
    "revision": "d24049072d90aae17d76df8e1bf7c3ad"
  },
  {
    "url": "lang/index.html",
    "revision": "c0a9bfec727752f2c587dd9df6613106"
  },
  {
    "url": "somalia.png",
    "revision": "55bec34b8d8d4574a89e5f77872246b9"
  },
  {
    "url": "xeerhoosaadka/index.html",
    "revision": "31d2dcc8af3c1db64c8eed4ca4462042"
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
