
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.5/firebase-app.js'
)
importScripts(
  'https://www.gstatic.com/firebasejs/7.15.5/firebase-messaging.js'
)
firebase.initializeApp({"apiKey":"AIzaSyC3Ula9zGCVOPuW-5Q0nEFg5j4rGXF69FA","authDomain":"test-firebase-0629.firebaseapp.com","databaseURL":"https:\u002F\u002Ftest-firebase-0629.firebaseio.com","projectId":"test-firebase-0629","storageBucket":"test-firebase-0629.appspot.com","messagingSenderId":"633292769354","appId":"1:633292769354:web:0d66ea026c95bbb408beb3","measurementId":"G-TNDJB4LWYK"})

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging()

// Setup event listeners for actions provided in the config:
self.addEventListener('notificationclick', function(e) {
  const actions = [{"action":"goToUrl","url":"https:\u002F\u002Fgithub.com\u002Frhanlin"}]
  const action = actions.find(x => x.id === e.action.action)
  const notification = e.notification

  if (!action) return

  if (action.url) {
    clients.openWindow(action.url)
    notification.close()
  }
})
