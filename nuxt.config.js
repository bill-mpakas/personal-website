const  axios = require("axios");

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'curiouslearner.eu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'C6neg6uaViHbuMhOhBoJsxXnEZoCt3H4S51n0HHp2jA' },
      { hid: 'description', name: 'description', content: 'My Personal Website using Vue and Nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    {src: 'normalize.css'},
    // {src: '~assets/global.scss', lang: 'scss'}
  ],
  /*
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  /*
  ** Nuxt.js modules
  */
 modules: [
  [
    "storyblok-nuxt", 
    { 
      accessToken: 
      process.env.NODE_ENV == "production"
     ? "8bY7ezQub9SU6TY0x6z9Fwtt"
     :"sznQxojAVZdE7lR3zDw0OAtt",
      cacheProvider: "memory" 
    }
  ],
    ['@nuxtjs/google-analytics', {
      id: 'UA-118330874-1'
    }
  ]
 ],

 generate: {
  routes: function() {
    return axios.get(
      "https://api.storyblok.com/v1/cdn/stories?version=published&token=8bY7ezQub9SU6TY0x6z9Fwtt&starts_with=blog&cv=" 
    + Math.floor(Date.now() / 1e3)
  )
  .then(res => {
    const blogPosts = res.data.stories.map(bp => bp.full_slug);
    return [
      '/',
      '/blog',
      '/contact',
      ...blogPosts
    ]
  });
  }
 },

 /*
  ** Axios module configuration
  */
  axios: {
  // See https://github.com/nuxt-community/axios-module#options
  },

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
