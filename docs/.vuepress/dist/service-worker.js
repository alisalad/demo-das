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
    "revision": "8844b5cff2ec64ca051f75f63c719a11"
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
    "url": "assets/js/4.8f67abff.js",
    "revision": "ed75700b4bfbba2a13b4f582e9592459"
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
    "url": "assets/js/app.aa730e49.js",
    "revision": "1aabdc10c5a2b1a1058ec25045d7ee40"
  },
  {
    "url": "dastuurka.png",
    "revision": "7b5ca4a91e90dd9cf52725aaa73e8284"
  },
  {
    "url": "dastuurka/index.html",
    "revision": "3fbe3c33c87547b9aaab8dd6b457edd2"
  },
  {
    "url": "guide/index.html",
    "revision": "b9411166ddc03af20626c5833f9c4e78"
  },
  {
    "url": "guidebook.jpg",
    "revision": "544d37beeefe0244c6d8a05b8849b3db"
  },
  {
    "url": "hero3.png",
    "revision": "294b5e5df222b7f541a92f335b80355b"
  },
  {
    "url": "index.html",
    "revision": "efe414866c1d4c69a50de4c692b11afb"
  },
  {
    "url": "lang/index.html",
    "revision": "04db80c294cb1fbf20586416977ffc8e"
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
    "revision": "2e04254a4f149421af10419a1ee656c7"
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
