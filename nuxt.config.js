module.exports = {
  /*
  ** Headers of the page
  */
  head: {
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
    { accessToken: "sznQxojAVZdE7lR3zDw0OAtt", cacheProvider: "memory" }
  ]
 ],

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
