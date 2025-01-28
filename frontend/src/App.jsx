//frontend\src\App.jsx
import { useEffect, useState } from "react";
import { requestForToken } from "./firebase";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [token, setToken] = useState(null);
  useEffect(() => {
    const getToken = async () => {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        const token = await requestForToken();
        setToken(token);
      }
    };

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        .then((registration) => {
          console.log("Service Worker Registered", registration.scope);
        })
        .catch((err) => {
          console.log("Service Worker Registration Failed", err);
        });
    }

    getToken();
  }, []);
  return (
    <div className="App">
      <Toaster />
      <h1>Push Notification with React & FCM</h1>
      <p>
        Device Token 👉 <span style={{ fontSize: "11px" }}> {token} </span>
      </p>
      {token && <h2>Notification permission enabled 👍🏻</h2>}
      {!token && <h2>Need notification permission ❗️ </h2>}
    </div>
  );
};

export default App;
