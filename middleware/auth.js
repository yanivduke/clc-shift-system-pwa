export default ({ redirect, store, route }) => {
  const token = store.getters['auth/token']

  if (!token) {
    redirect({ path: 'login' })
  }
  // if (!localStorage.token && route.path !== '/login') {
  //   redirect({ path: '/login' })
  // }
}
