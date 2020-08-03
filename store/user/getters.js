export default {
  currentUser: (state) => state.accounts[state.currentIndex] || {},
  accounts: (state) => state.accounts,
  currentIndex: (state) => state.currentIndex,
  userGuide: (state) => state.userGuide,
  // isChangeAccount: (state) => state.isChangeAccount,
}
