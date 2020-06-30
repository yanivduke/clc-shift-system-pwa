export default {
  async nuxtServerInit({ dispatch }, ctx) {
    if (this.$fireAuth === null) {
      const error = new Error(
        'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.',
      )
      throw error
    }

    if (ctx.$fireAuth === null) {
      const error = new Error(
        'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.',
      )
      throw error
    }

    if (ctx.app.$fireAuth === null) {
      const error = new Error(
        'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.',
      )
      throw error
    }

    // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'

    /** Get the VERIFIED authUser from the server */
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user

      console.info(
        'Auth User verified on server-side. User: ',
        authUser,
        'Claims:',
        claims,
      )

      await dispatch('onAuthStateChanged', {
        authUser,
        claims,
      })
    }
  },

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
