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
    "revision": "a2bda23f4f5254ef56c47b3f42ee4d8b"
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
    "url": "assets/js/3.b5a7fee5.js",
    "revision": "9e99d03f83b1fc1c100587696387c8c5"
  },
  {
    "url": "assets/js/4.7508c596.js",
    "revision": "f97ad097a881db3b1b99e33342fe0b90"
  },
  {
    "url": "assets/js/5.b6f5b1fb.js",
    "revision": "aa8eeae9218b74c65623fb4e40a698d6"
  },
  {
    "url": "assets/js/6.6d380a7b.js",
    "revision": "28577a95a14251ad7256258654b87657"
  },
  {
    "url": "assets/js/7.7ade1ace.js",
    "revision": "a9a55381e6898ef0becfc7d1dfbe9ab2"
  },
  {
    "url": "assets/js/8.db55b669.js",
    "revision": "4a0b57e110b2e4d1f8fc71d5522dbc95"
  },
  {
    "url": "assets/js/9.fa5db5a6.js",
    "revision": "97dd40a3159ffdfa68b0bb3d51b64fb6"
  },
  {
    "url": "assets/js/app.a148651b.js",
    "revision": "4dbbebb5e6f8469fb7c571c511eef9f8"
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
    "revision": "ddb512bf7bcd074774b79c0bebdbac33"
  },
  {
    "url": "english/index.html",
    "revision": "e4f96ed63b0253f8ceeab0396efc6ccb"
  },
  {
    "url": "guide/index.html",
    "revision": "3726fcef0d83a15f6858fe7e7d46c6fc"
  },
  {
    "url": "guidebook.jpg",
    "revision": "544d37beeefe0244c6d8a05b8849b3db"
  },
  {
    "url": "index.html",
    "revision": "15bf82658cd42a4c702c5ac19b3261a4"
  },
  {
    "url": "lang/index.html",
    "revision": "123c31475509f2c26a5f02fa87d62f0b"
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
    "revision": "ff80c0ba1f9f7d691847bfa1eb2b9a05"
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
