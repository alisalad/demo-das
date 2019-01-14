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
    "revision": "cc50bab52d0948c69a65e368919aed1f"
  },
  {
    "url": "assets/css/0.styles.8f4264bb.css",
    "revision": "727717d5cb0c91b16ae806adc7efa18d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ae65833f.js",
    "revision": "146e6a05d0344088c1fcb2ed252787c7"
  },
  {
    "url": "assets/js/3.502691fd.js",
    "revision": "196ebe3549acfce33ff37cc75fcb6296"
  },
  {
    "url": "assets/js/4.ec7ea06d.js",
    "revision": "0507a9788806fdb7aa2aea21d1127e69"
  },
  {
    "url": "assets/js/5.821ccd31.js",
    "revision": "9edbcb55004e39a46c9b1ac60fcabac7"
  },
  {
    "url": "assets/js/6.3b46fd65.js",
    "revision": "d0789f62597c176fd8952e3a50b4d38a"
  },
  {
    "url": "assets/js/7.7aa1830c.js",
    "revision": "9f6239ca0bd8ab3e9149e8bf99411c1d"
  },
  {
    "url": "assets/js/8.cf304935.js",
    "revision": "1dcd2290f69c65f1eacf7d8d4e3e6044"
  },
  {
    "url": "assets/js/9.2ff68205.js",
    "revision": "e9a8316b7fc324942f5b4b56265bbb45"
  },
  {
    "url": "assets/js/app.7637ab7b.js",
    "revision": "39be5f6523da450820505acf559574ea"
  },
  {
    "url": "assets/js/vendors~docsearch.c6236e72.js",
    "revision": "a47f03ed0ad284c8d5dbf0bfda64a455"
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
    "revision": "74f5c11db7ae2bcea797ee53978a3acf"
  },
  {
    "url": "english/index.html",
    "revision": "c8ec6ec054e4ee9a082c8fa1af1fb1b6"
  },
  {
    "url": "guide/index.html",
    "revision": "2ce7217af7b9ab9359d6eabf8b5fcb94"
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
    "revision": "8a70977921c1b9e18a0f8b51f53f8985"
  },
  {
    "url": "lang/index.html",
    "revision": "88b400c1f0150386c36a8a7b1a355287"
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
    "revision": "c56665ebd819f5b6a1ffc3b5bc332f2c"
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
