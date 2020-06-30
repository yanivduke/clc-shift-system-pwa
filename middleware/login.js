export default ({ redirect, store, route }) => {
  if (localStorage.token && route.path === '/login') {
    redirect({ path: '/' })
  }
}
