export const state = () => ({
  counter: 0,
})

export const mutations = {
  ADD_COUNTER(state) {
    state.counter++
  },
  SUB_COUNTER(state) {
    state.counter--
  },
}

export const actions = {
  addCounter({ commit }) {
    commit('ADD_COUNTER')
  },
  subCounter({ commit }) {
    commit('SUB_COUNTER')
  },
}

export const getters = {
  counter: (state) => state.counter,
}

export default {
  state,
  mutations,
  actions,
  getters,
}
