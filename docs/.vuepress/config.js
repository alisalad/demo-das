module.exports = {
  title: 'Dastuurka',
  description: 'Jamhuuriyadda Federaalka ee Soomaaliya',

  //Displays options for langugaes
  locales: {
    "/": { lang: "Soomaali" },
    "/lang/": { lang: "English" }
  },

  plugins: ['@vuepress/pwa'],

  serviceWorker: true,
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
  /*description: 'Dastuurka Soomaaliya.',*/

  themeConfig: {

    /*algolia: {
      apiKey: '933dc802eaadb0c660ede7aa8f6c59f7',
      appId: '19YDZA2VXK',
      indexName: 'dastuurka',
      algoliaOptions: {
        hitsPerPage: 10,
      }
    },*/

    lastUpdated: 'Last Updated',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Dastuurka', link: '/dastuurka/' },
      { text: 'English', link: '/english/' },
      { text: 'Guidebook', link: '/guide/' },
      { text: 'Xeer Hoosaadka', link: '/xeerhoosaadka/' },
    ],
    sidebar: 'auto'

  }
}
