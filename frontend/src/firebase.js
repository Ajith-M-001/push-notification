//frontend\src\firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { toast } from "react-hot-toast";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
  measurementId: import.meta.env.VITE_MEASUREMENT_ID,
};

export const FIREBASE_VAPID_KEY = import.meta.env.VITE_VAPID_KEY;

console.log(FIREBASE_VAPID_KEY);

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestForToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: FIREBASE_VAPID_KEY,
    });
    if (token) {
      console.log("Token: ", token);
      return token;
    } else {
      console.log(
        "No registration token available. Request permission to generate one."
      );
      return null;
    }
  } catch (error) {
    console.error(error);
  }
};

onMessage(messaging, ({ notification }) => {
  console.log("Message received. ", notification);
  const notificationTitle = notification.title;
    const notificationBody = notification?.body;

 toast.success(`${notificationTitle}: ${notificationBody}`, {
   duration: 6000, // Optional duration for the toast
   position: "top-right", // Optional position for the toast
 });
});
