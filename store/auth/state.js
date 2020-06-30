export default () => ({
  authUser: null,
  token: localStorage.getItem('token') || '',
})
