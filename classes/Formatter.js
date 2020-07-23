class Formatter {
  static formatFullDate(date) {
    return date.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3')
  }

  static formatDateByMonth(date) {
    return date.replace(/(\d{4})(\d{2})/g, '$1-$2')
  }

  static formatDollars(number) {
    if (Number(number)) {
      return Number(number).toLocaleString()
    } else {
      // if number has already format, just return number
      return number
    }
  }

  static formatUSD(number) {
    return number
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
      })
      .replace('.00', '')
  }

  static formatNumber(string) {
    if (string.includes('$')) {
      return Number(string.split('$').join('').split(',').join(''))
    } else {
      return Number(string.split(',').join(''))
    }
  }

  static DistinctArr(arr, key = '', option = '') {
    const newDistinctArr = []
    const map = new Map()
    for (const item of arr) {
      if (!map.has(item[key])) {
        map.set(item[key], true) // set any value to Map
        newDistinctArr.push({
          id: item[key],
          option: item[option],
        })
      }
    }
    return newDistinctArr
  }
}

export default Formatter
