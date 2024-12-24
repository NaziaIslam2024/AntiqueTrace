// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbti6ug5QEYvYkw-n2YLx6U6COtOl1Jqg",
  authDomain: "antiquetrace.firebaseapp.com",
  projectId: "antiquetrace",
  storageBucket: "antiquetrace.firebasestorage.app",
  messagingSenderId: "359754716392",
  appId: "1:359754716392:web:d18cba0a0e59b139cea55d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;