const config = require('./config')

export default function (context) {
  return {
    httpEndpoint: config[process.env.NODE_ENV].API_URL,
    getAuth: () => 'Bearer my-static-token', // use this method to overwrite functions
  }
}
