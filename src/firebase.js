import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCzE__uFFOehn041uQ16tBYKzs8X_SYs3Y",
  authDomain: "pushnotificationspringbo-34917.firebaseapp.com",
  projectId: "pushnotificationspringbo-34917",
  storageBucket: "pushnotificationspringbo-34917.appspot.com",
  messagingSenderId: "49272912924",
  appId: "1:49272912924:web:85e8b763e2706f43d033d9",
  measurementId: "G-V9KMEQ4RRG",
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
