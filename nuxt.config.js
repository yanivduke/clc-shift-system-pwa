// import colors from 'vuetify/es5/util/colors'
import { COLORS } from './utils/colors.js'
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
  plugins: ['@/plugins/nuxt-client-init', '@/plugins/components.js'],
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
    '@nuxtjs/apollo',
  ],
  // Give apollo module options
  apollo: {
    // tokenName: 'auth/onAuthStateChanged', // optional, default: apollo-token
    cookieAttributes: {
      /**
       * Define when the cookie will be removed. Value can be a Number
       * which will be interpreted as days from time of creation or a
       * Date instance. If omitted, the cookie becomes a session cookie.
       */
      expires: 7, // optional, default: 7 (days)

      /**
       * Define the path where the cookie is available. Defaults to '/'
       */
      path: '/', // optional
      /**
       * Define the domain where the cookie is available. Defaults to
       * the domain of the page where the cookie was created.
       */
      // domain: 'example.com', // optional

      /**
       * A Boolean indicating if the cookie transmission requires a
       * secure protocol (https). Defaults to false.
       */
      secure: false,
    },
    // includeNodeModules: true, // optional, default: false (this includes graphql-tag for node_modules folder)
    // authenticationType: 'Basic', // optional, default: 'Bearer'
    // (Optional) Default 'apollo' definition
    defaultOptions: {
      // See 'apollo' definition
      // For example: default query options
      $query: {
        loadingKey: 'loading',
        fetchPolicy: 'cache-and-network',
      },
    },
    // optional
    watchLoading: '~/plugins/apollo-watch-loading-handler.js',
    // optional
    // errorHandler: '~/plugins/apollo-error-handler.js',
    // required
    clientConfigs: {
      default: {
        // required
        httpEndpoint: config[process.env.NODE_ENV].API_URL,
        // optional
        // override HTTP endpoint in browser only
        // browserHttpEndpoint: '/graphql',
        // optional
        // See https://www.apollographql.com/docs/link/links/http.html#options
        // httpLinkOptions: {
        //   credentials: 'same-origin'
        // },
        // You can use `wss` for secure connection (recommended in production)
        // Use `null` to disable subscriptions
        // wsEndpoint: null, // optional
        // LocalStorage token
        tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        // websocketsOnly: false, // Optional
      },
      test: {
        httpEndpoint: config[process.env.NODE_ENV].API_URL,
        // wsEndpoint: 'ws://localhost:5000',
        tokenName: 'apollo-token',
      },
      // alternative: user path to config which returns exact same config options
      // test2: '~/plugins/my-alternative-apollo-config.js'
    },
  },
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/apollo', '@nuxtjs/pwa', '@nuxtjs/style-resources'],
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
          primary: COLORS.dark.primary,
          primary_dark: COLORS.dark.primary_dark,
          accent: COLORS.dark.accent,
          secondary: COLORS.dark.secondary,
          // info: COLORS.dark.golden,
          // warning: COLORS.dark.alert_red3,
          // error: COLORS.dark.alert_red1,
          // success: COLORS.dark.primary,
          golden: COLORS.dark.golden,
          white: COLORS.dark.white,
          black: COLORS.dark.black,
          primary_hover: COLORS.dark.primary_hover,
          disable_gray: COLORS.dark.disable_gray,
          line: COLORS.dark.line,
          bg: COLORS.dark.bg,
          bg_dark: COLORS.dark.bg_dark,
          deep_dark: COLORS.dark.deep_dark,
          alert_red1: COLORS.dark.alert_red1,
          alert_red2: COLORS.dark.alert_red2,
          alert_red3: COLORS.dark.alert_red3,
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
