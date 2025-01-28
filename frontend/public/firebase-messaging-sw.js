// public/firebase-messaging-sw.js
importScripts(
  "https://www.gstatic.com/firebasejs/11.2.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/11.2.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyD7MVMoCAcpPM_3a-5dDkJ4zCHiNsKcI8k",
  authDomain: "push-notification-77341.firebaseapp.com",
  projectId: "push-notification-77341",
  storageBucket: "push-notification-77341.firebasestorage.app",
  messagingSenderId: "1030797976173",
  appId: "1:1030797976173:web:026a14eb1cec2e0ee45564",
  measurementId: "G-L7723EVZJ1",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Received background message ", payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
