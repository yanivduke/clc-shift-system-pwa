const config = require('../config')

export default function ({ store }) {
  // console.log(store)
  // console.log(store.getters['auth/token'])
  const token = store.getters['auth/token']
  return {
    // required
    httpEndpoint: config[process.env.NODE_ENV].API_URL,
    // optional
    // override HTTP endpoint in browser only
    // browserHttpEndpoint: '/graphql',
    // optional
    // See https://www.apollographql.com/docs/link/links/http.html#options
    httpLinkOptions: {
      credentials: 'same-origin',
      headers: {
        'x-token': token,
      },
    },
    // You can use `wss` for secure connection (recommended in production)
    // Use `null` to disable subscriptions
    wsEndpoint: null, // optional
    // LocalStorage token
    tokenName: 'x-token', // optional
    // Enable Automatic Query persisting with Apollo Engine
    persisting: false, // Optional
    // Use websockets for everything (no HTTP)
    // You need to pass a `wsEndpoint` for this to work
    websocketsOnly: false, // Optional
  }
}
