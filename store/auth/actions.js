export default {
  onAuthStateChanged({ commit }, { authUser }) {
    console.log('onAuthStateChanged', authUser)

    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    // commit('SET_AUTH_USER', { authUser })
    commit('SET_TOKEN', { authUser })
  },

  setToken({ commit }, value) {
    console.log('setToken', value)
    commit('SET_TOKEN', value)
  },
}
