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
    "revision": "519790ec17125d964595ee913589299d"
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
    "url": "assets/js/4.10ef527c.js",
    "revision": "f3f31b7cef9fb6b1580cea6c5eef7ed6"
  },
  {
    "url": "assets/js/5.f216c462.js",
    "revision": "2e0617032f488f346b4273c14de919c6"
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
    "url": "assets/js/app.fc3b6a82.js",
    "revision": "e1a6cefa4220637a2cac7ed3775b3644"
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
    "revision": "7d8fc4c0a83971f0c0e56330efdef007"
  },
  {
    "url": "guide/index.html",
    "revision": "fbf0beb3992815db31f89603e7167a30"
  },
  {
    "url": "guidebook.jpg",
    "revision": "544d37beeefe0244c6d8a05b8849b3db"
  },
  {
    "url": "index.html",
    "revision": "a3fe70f843a92bbdef7e9902d32a9636"
  },
  {
    "url": "lang/index.html",
    "revision": "9afb5556d04f4e79e30acef2431fe3aa"
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
    "revision": "ca65640bb1f57a7755210468c778dd57"
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
