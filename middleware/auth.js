export default ({ app, redirect, store, route }) => {
  // const hasToken = !!app.$apolloHelpers.getToken()
  // console.log(hasToken)

  const token = store.getters['auth/token']
  if (!token) {
    redirect('/login') // TODO: 重新導向error
  }
  // if (!localStorage.token && route.path !== '/login') {
  //   redirect({ path: '/login' })
  // }
}

// export default function ({ app, error }) {
//   const hasToken = !!app.$apolloHelpers.getToken()
//   if (!hasToken) {
//     error({ errorCode: 403, message: 'You are not allowed to see this' })
//   }
// }
