import initialState from './state'

export default {
  RESET_STORE: (state) => {
    Object.assign(state, initialState())
  },

  // SET_AUTH_USER: (state, { authUser }) => {
  //   state.authUser = {
  //     uid: authUser.uid,
  //     email: authUser.email,
  //   }
  // },
  SET_TOKEN(state, value) {
    localStorage.setItem('x-token', value)
    state.token = value
  },
}
