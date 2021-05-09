module.exports = {
  title: 'Dastuurka',
  description: 'Jamhuuriyadda Federaalka ee Soomaaliya',

  //Displays options for langugaes
  locales: {
    "/": { lang: "Soomaali" },
    "/lang/": { lang: "English" },
    "/arabic/": { lang: "Arabica" }
  },

  plugins: ['@vuepress/pwa'],

  head: [
    ['link', { rel: 'icon', href: '/somalia.png' }],

    [
      'meta',
      {
        name: 'google-site-verification',
        content: ''
      }
    ]
  ],
  ga: 'UA-130701702-1',

  themeConfig: {



   /* algolia: {
      apiKey: '439dcbf329efb458689c0c99ec033fcd',
      appId: '2LBWW686RF',
      indexName: 'dev_DASTUURKA',
    },*/


    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dastuurka', link: '/dastuurka/' },

      { text: 'Guidebook', link: '/guide/' },
      { text: 'Laws', link: '/laws/' },
      { text: 'Xeer Hoosaadka', link: '/xeerhoosaadka/' },
    ],
    sidebar: 'auto'

  }
}