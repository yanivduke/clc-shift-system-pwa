export default {
  /**
   *
   * @param {*} value 帳號物件 (User)
   * {
   * accountid: 1,
   * name: 'SuperAdmin',
   * group: 'young',
   * email: 'superAdmin@test.com',
   * ismain: true,
   * }
   */
  setAccounts(state, value) {
    const flattenAccounts = value.subs ? [...value.subs] : []
    flattenAccounts.unshift(value)
    localStorage.setItem('accounts', JSON.stringify(flattenAccounts))
    state.accounts = flattenAccounts
  },
  setCurrentIndex(state, value) {
    localStorage.setItem('currentIndex', value)
    state.currentIndex = value
  },
  setUserGuide(state, value) {
    state.userGuide = value
  },
  // setIsChangeAccount(state, value) {
  //   localStorage.setItem('isChange', JSON.stringify(value))
  //   state.isChangeAccount = value
  // },
}
