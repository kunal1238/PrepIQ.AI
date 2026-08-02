
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "prepiq-c707f.firebaseapp.com",
  projectId: "prepiq-c707f",
  storageBucket: "prepiq-c707f.firebasestorage.app",
  messagingSenderId: "1043640877086",
  appId: "1:1043640877086:web:2b3e88a5ecbf9fcec6ee0f"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}
