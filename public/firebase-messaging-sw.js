importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyCzE__uFFOehn041uQ16tBYKzs8X_SYs3Y",
  authDomain: "pushnotificationspringbo-34917.firebaseapp.com",
  projectId: "pushnotificationspringbo-34917",
  storageBucket: "pushnotificationspringbo-34917.appspot.com",
  messagingSenderId: "49272912924",
  appId: "1:49272912924:web:85e8b763e2706f43d033d9",
  measurementId: "G-V9KMEQ4RRG",
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload?.notification?.title;
  const notificationOptions = {
    body: payload?.notification?.body,
    icon: payload?.notification?.image,
  };

  //self.registration.showNotification(notificationTitle, notificationOptions);
});
