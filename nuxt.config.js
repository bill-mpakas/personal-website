module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'curiouslearner.eu',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
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
  modules: [
  [
    'nuxt-bulma-slim',
    {
      variablesPath: 'assets/scss/my-variables.scss',
      additionalPaths: ['assets/scss/base/base.scss',
      'assets/scss/layout/layout.scss',
      'assets/scss/components/components.scss', 
      'assets/scss/app.scss'
    ]
    }
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
