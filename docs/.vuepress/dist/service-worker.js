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
    "revision": "246fdd120082afaebc87581305d5d08c"
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
    "url": "assets/js/5.717e1f2e.js",
    "revision": "c0eb3a04eee452350d234589b891da23"
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
    "url": "assets/js/app.090432ae.js",
    "revision": "8cd2368f0fd1be5f8dffd2bd3a295376"
  },
  {
    "url": "assets/js/vendors~docsearch.0f761e11.js",
    "revision": "f638395b1f6178592dbfb81cd4dd5717"
  },
  {
    "url": "dastuurka/index.html",
    "revision": "e50b747f44ef38398b90006eec68250e"
  },
  {
    "url": "guide/index.html",
    "revision": "f0c6536cc3a01f3e9ecde9d126245176"
  },
  {
    "url": "guidebook.jpg",
    "revision": "0a90fddf5d62941a2c992c5b0db15e07"
  },
  {
    "url": "index.html",
    "revision": "d56c83272b6bd07c7ca67308c08e7278"
  },
  {
    "url": "lang/index.html",
    "revision": "af22c2ea7f00b8525abeae0c2149e229"
  },
  {
    "url": "somalia.png",
    "revision": "55bec34b8d8d4574a89e5f77872246b9"
  },
  {
    "url": "xeerhoosaadka/index.html",
    "revision": "d335be61d696e9ca7199e6ad2a32b709"
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
