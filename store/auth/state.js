export default () => ({
  authUser: null,
  token: localStorage.getItem('x-token') || '',
})
