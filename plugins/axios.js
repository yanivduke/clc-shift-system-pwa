export default function ({ $axios, store, redirect }) {
  $axios.setHeader('Content-Type', 'application/json; charset=utf-8', [
    'post',
    'get',
  ])

  $axios.onRequest(() => {
    if (process.client) store.dispatch('loading/addCounter')
  })

  $axios.onResponse((res) => {
    if (process.client) store.dispatch('loading/subCounter')
  })

  $axios.onError((error) => {
    const { response = {} } = error
    const { status } = response
    store.dispatch('loading/subCounter')

    // Server 異常
    if (`${status}`.slice(0, 1) !== '4') {
      console.log('Server 異常')
      // store.dispatch('message/resetInformation')
    }
  })
}
