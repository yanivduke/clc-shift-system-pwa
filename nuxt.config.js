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
    '@nuxtjs/apollo',
  ],
  // Give apollo module options
  apollo: {
    // tokenName: 'yourApolloTokenName', // optional, default: apollo-token
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
        httpEndpoint: 'https://rickandmortyapi.com/graphql/',
        // myAPI: http://localhost:5001/test-firebase-0629/us-central1/api/graphiql
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
        // tokenName: 'apollo-token', // optional
        // Enable Automatic Query persisting with Apollo Engine
        // persisting: false, // Optional
        // Use websockets for everything (no HTTP)
        // You need to pass a `wsEndpoint` for this to work
        // websocketsOnly: false, // Optional
      },
      // test: {
      //   httpEndpoint: 'http://localhost:5000',
      //   wsEndpoint: 'ws://localhost:5000',
      //   tokenName: 'apollo-token'
      // },
      // alternative: user path to config which returns exact same config options
      // test2: '~/plugins/my-alternative-apollo-config.js'
    },
  },
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
          functions: true,
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
