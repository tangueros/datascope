module.exports = {
//host: '0.0.0.0',
//port: 8080,
base: '/datascope/',
dest: 'docs',

///////////////////////////////////
// SITE EXTENSIONS`
///////////////////////////////////

configureWebpack: {
  resolve: {
    alias: {
//      '@public': path.join(__dirname, './public')
    }
  }
},

plugins: [
  'clean-urls',
  'named-chunks',
  '@vuepress/back-to-top',
  //'@vuepress/medium-zoom',

  /*:
  'alias',
  'tabs',
  '@vuepress/google-analytics': {
    'ga': '' // UA-00000000-0
  },

  ['@vuepress/pwa', {
    serviceWorker: true,
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  }],
  ['@vuepress/blog', {
    postsDir: 'posts',
    permalink: '/:year/:month/:slug'
  }],

  ['@vuepress/google-analytics',{
    ga: 'UA-1424133-16'
  }],

  ['container', {
    type: 'right',
    defaultTitle: '',
  }],

  ['container', {
    type: 'theorem',
    before: info => `<div class="theorem"><p class="title">${info}</p>`,
    after: '</div>',
  }],
*/
],

/*
head: [
  ['link', {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css'
  }]
],
*/

markdown: {
  toc: { includeLevel: [1, 2] },
  anchor: { permalink: false },
  extendMarkdown: md => {
    // use more markdown-it plugins!
    //md.use(require('markdown-it-xxx'))
  }
},


///////////////////////////////////
// LANGUAGE RELATED
///////////////////////////////////

//  title: 'Hello VuePress',
//  description: 'Just playing around',

locales: {
  '/': {
    lang: 'en-US',
    title: 'Datascope',
    description: 'Lots of Data'
  }
},


themeConfig: {

  search: false,
  searchMaxSuggestions: 10,
  displayAllHeaders: true ,
  activeHeaderLinks: false,


  //repo: 'vuejs/vuepress',
  //repoLabel: 'Contribute!',
  //docsRepo: 'vuejs/vuepress',
  //docsBranch: 'master',
  //docsDir: 'book',
  //editLinks: true,
  //editLinkText: 'Help us improve this page!'
  lastUpdated: 'Last Updated',



  locales: {
    '/': {
      label: 'English',
      selectText: 'Languages',
      editLinkText: 'Help us improve this page',

      // service worker is configured but will only register in production
      serviceWorker: {
        updatePopup: {
          message: 'New content is available.',
          buttonText: 'Refresh'
        }
      },

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Tangueros', link: 'https://www.tangueros.org/' },
        { text: 'Github', link: 'https://github.com/tangodata' },
      ],

      sidebar:
      //'auto'
      [
        '/',
        '/entry',
/*        '/about',
        '/guide/',
          '/guide/getting-started',
          '/author',
        {
          title: 'Tests',
          collapsible: false,
          children: [
            '/tests/test',
            '/tests/test2',
            '/tests/test3',
          ]
        },
      */
      ]

    }
  }
},


}