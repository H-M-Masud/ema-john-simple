// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIeBwlXtOKyz1ALoTz8On7xaaS5brGnrQ",
  authDomain: "ema-john-simple-b6682.firebaseapp.com",
  projectId: "ema-john-simple-b6682",
  storageBucket: "ema-john-simple-b6682.appspot.com",
  messagingSenderId: "523158934968",
  appId: "1:523158934968:web:97da7308a2e93826a5eb4d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
