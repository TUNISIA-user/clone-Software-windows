import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
    
 
 const firebaseConfig = {
    apiKey: "AIzaSyC7upwFn2hL78ptfhQKWmc4-Zo_fkODmc0",
    authDomain: "nadhi-win.firebaseapp.com",
    projectId: "nadhi-win",
    storageBucket: "nadhi-win.appspot.com",
    messagingSenderId: "561021547976",
    appId: "1:561021547976:web:e62e2ab51f25174f943cfd"
  };

  const app = initializeApp(firebaseConfig)
  export const auth = getAuth(app)
  const db = getFirestore(app)