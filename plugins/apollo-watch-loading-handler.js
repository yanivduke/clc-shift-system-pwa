export default (isLoading, countModifier, nuxtContext) => {
  // let loading = 0
  // loading += countModifier
  // console.log('Global loading', loading, countModifier, isLoading)
  if (isLoading) {
    nuxtContext.store.dispatch('loading/addCounter')
  } else {
    nuxtContext.store.dispatch('loading/subCounter')
  }
}
