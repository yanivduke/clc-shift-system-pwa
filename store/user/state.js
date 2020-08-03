/**
 * Accounts 不儲存在 localstorage 裡面，因為資安疑慮，
 * 也因此需要在畫面 reload 的時候重新取得使用者資訊
 */
export default () => {
  const state = {
    accounts: JSON.parse(localStorage.getItem('accounts') || '[]'), // 主子帳號整理成一個 Array
    currentIndex: Number(localStorage.getItem('currentIndex')) || 0, // 0 是主帳號 1 開始是子帳號
    // isChangeAccount: JSON.parse(localStorage.getItem('isChange') || 'false'), // 針對切換帳號的 Toast使用
  }

  const shouldViewUserGuide = state.accounts[state.currentIndex]
    ? state.accounts[state.currentIndex].first_login
    : false
  state.userGuide = {
    dashboard: shouldViewUserGuide,
    shipment: shouldViewUserGuide,
  }
  return state
}
