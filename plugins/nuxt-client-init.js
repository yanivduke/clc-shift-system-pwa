// import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client'
// import { setContext } from '@apollo/client/link/context'
import { version } from '~/package.json'
import { VUE_CONSOLE } from '@/utils'

export default () => {
  VUE_CONSOLE('version', version)

  // const httpLink = createHttpLink({
  //   uri: '/graphql',
  // })

  // const authLink = setContext((_, { headers }) => {
  //   // get the authentication token from local storage if it exists
  //   const token = localStorage.getItem('x-token')
  //   // return the headers to the context so httpLink can read them
  //   return {
  //     headers: {
  //       ...headers,
  //       authorization: token ? `Bearer ${token}` : '',
  //     },
  //   }
  // })

  // const client = new ApolloClient({
  //   link: authLink.concat(httpLink),
  //   cache: new InMemoryCache(),
  // })
}
