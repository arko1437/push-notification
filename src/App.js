import { useEffect, useState } from "react";
import { messaging } from "./firebase";
import { getToken } from "firebase/messaging";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [tokenId, setTokenId] = useState("");

  async function requestPermission() {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      // Generate Token
      const token = await getToken(messaging, {
        vapidKey:
          "BPxucQbBhVStY42n1HCEBWqQugcg3LUMKcTbNsjdaKv3IZQOS5zOP7XrLZTgzN5LtgNyD5kXwYdpepWUNbxz9yI",
      });
      setTokenId(token);
      console.log("Token Gen", token);
      // Send this token  to server ( db)
    } else if (permission === "denied") {
      alert("You denied for the notification");
    }
  }

  useEffect(() => {
    // Req user for notification permission
    requestPermission();
  }, []);

  return <p>{tokenId}</p>;
}

export default App;
