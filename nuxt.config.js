import colors from 'vuetify/es5/util/colors'
const config = require('./config')

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'spa',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [
    { src: 'normalize.css' },
    { src: 'assets/styles/app.scss', lang: 'scss' },
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    '@/plugins/axios.js',
    '@/plugins/nuxt-client-init',
    '@/plugins/components.js',
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/vuetify',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyC3Ula9zGCVOPuW-5Q0nEFg5j4rGXF69FA',
          authDomain: 'test-firebase-0629.firebaseapp.com',
          databaseURL: 'https://test-firebase-0629.firebaseio.com',
          projectId: 'test-firebase-0629',
          storageBucket: 'test-firebase-0629.appspot.com',
          messagingSenderId: '633292769354',
          appId: '1:633292769354:web:0d66ea026c95bbb408beb3',
          measurementId: 'G-TNDJB4LWYK',
        },
        onFirebaseHosting: false,
        services: {
          auth: {
            // initialize: {
            //   onAuthStateChangedAction: 'auth/onAuthStateChanged',
            // },
            ssr: false,
          },
          firestore: {
            memoryOnly: false,
            static: false,
          },
          functions: {
            // emulatorPort: 12345
          },
          storage: true,
          realtimeDb: true,
          performance: true,
          analytics: true,
          remoteConfig: {
            settings: {
              fetchTimeoutMillis: 60000,
              minimumFetchIntervalMillis: 43200000,
            },
            defaultConfig: {
              welcome_message: 'Welcome',
            },
          },
          messaging: {
            createServiceWorker: true,
            actions: [
              {
                action: 'goToUrl',
                url: 'https://github.com/rhanlin',
              },
            ],
          },
        },
      },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: config[process.env.NODE_ENV].API_URL,
  },
  router: {
    // middleware: ['auth'],
  },
  styleResources: {
    scss: ['~assets/styles/_base.scss'],
  },
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
        },
      },
    },
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    loaders: {
      scss: { sourceMap: false },
    },
  },
}
