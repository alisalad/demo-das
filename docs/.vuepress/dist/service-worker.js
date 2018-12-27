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
    "revision": "9960498ef356b7d52a94a43853b2f008"
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
    "url": "assets/js/6.fb175b53.js",
    "revision": "c3783074e518beb623b3bc03eb324511"
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
    "url": "assets/js/app.c4ca273a.js",
    "revision": "41c93126eaa7b2273c909a5a3ad3996f"
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
    "revision": "10c76d0b661d706a6149bdc7f2bfa3d9"
  },
  {
    "url": "english/index.html",
    "revision": "4371673f474c58d6c4b6f12180854a74"
  },
  {
    "url": "guide/index.html",
    "revision": "70aba701a251c368c92b03017ab8229b"
  },
  {
    "url": "guidebook.jpg",
    "revision": "544d37beeefe0244c6d8a05b8849b3db"
  },
  {
    "url": "index.html",
    "revision": "86dc5d40992066dbb064e1c29ec65c7d"
  },
  {
    "url": "lang/index.html",
    "revision": "7d977cd147ed75e74955f97b69eebedf"
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
    "revision": "e81f6935f3adfeee3098753b6182d7ca"
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
