export default {
  setAccounts({ commit, getters }, value) {
    commit('setAccounts', value)
    commit('setCurrentIndex', 0)
    const newUserGuide = Object.keys(getters.userGuide).reduce(
      (accumulate, key) => ({
        ...accumulate,
        [key]: value.first_login,
      }),
      {},
    )
    commit('setUserGuide', newUserGuide)
  },
  // setCurrentIndex({ commit }, value) {
  //   commit('setCurrentIndex', value)
  // },
  setUserGuide({ commit }, value) {
    commit('setUserGuide', value)
  },
  // setIsChangeAccount({ commit }, value) {
  //   commit('setIsChangeAccount', value)
  // },
}
