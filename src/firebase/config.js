// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}   from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA34LhtcRDUGdD_mzlmEEauyZieevCLLQo",
  authDomain: "reactdavidlopez.firebaseapp.com",
  projectId: "reactdavidlopez",
  storageBucket: "reactdavidlopez.appspot.com",
  messagingSenderId: "507495665979",
  appId: "1:507495665979:web:c278bfbbd112623f80671e",
  measurementId: "G-21SRC68YHB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)