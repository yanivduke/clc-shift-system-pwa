class TabOperation {
  constructor({ name, tabs }) {
    this.name = name
    this.tabs = tabs
    this.activeName = ''
  }

  // 把當前選擇的Tab分頁保留著，以防止reloading時tab標籤跑回第一個
  getPath(val) {
    // console.log(val)
    const currentTabName = this.tabs[val].name
    return currentTabName === 'index'
      ? this.name
      : `${this.name}-${currentTabName}`
  }

  updateActiveName(val) {
    const [, pageTitle] = val.split('-')
    this.activeName = pageTitle && pageTitle !== 'id' ? pageTitle : 'index'
  }
}

export default TabOperation
