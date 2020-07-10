export default function (context) {
  console.log('Apollo')

  return {
    clientConfigs: {
      default: {
        httpEndpoint: 'https://rickandmortyapi.com/graphql/',
        // myAPI: http://localhost:5001/test-firebase-0629/us-central1/api
        // getAuth: () => 'Bearer my-static-token', // use this method to overwrite functions
      },
    },
  }
}
