import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const app = initializeApp({
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// });
const firebaseConfig = {
  apiKey: "AIzaSyBiO4NTttc68zMHFkRFXyK5qLsU9zXsJmg",
  authDomain: "moonlight-40ecf.firebaseapp.com",
  projectId: "moonlight-40ecf",
  storageBucket: "moonlight-40ecf.appspot.com",
  messagingSenderId: "1043878072437",
  appId: "1:1043878072437:web:0fd78f6e64f3cfbe2d283c",
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
// export const db = initializeFirestore(app, {
//   experimentalForceLongPolling: true,
// });
export const auth = getAuth(app);
