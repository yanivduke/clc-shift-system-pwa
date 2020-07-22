export default {
  onAuthStateChanged({ commit }, { authUser }) {
    console.log('onAuthStateChanged')

    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    commit('SET_AUTH_USER', { authUser })
  },

  setToken({ commit }, value) {
    commit('SET_TOKEN', value)
    console.log('setToken')
  },
}
