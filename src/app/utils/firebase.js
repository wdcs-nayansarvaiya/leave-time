// firebase.js
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzxhAqeQhj81wR_rB4c1huUGd2-ItZReM",
  authDomain: "leave-now-a97be.firebaseapp.com",
  projectId: "leave-now-a97be",
  storageBucket: "leave-now-a97be.appspot.com",
  messagingSenderId: "1072666353340",
  appId: "1:1072666353340:web:20ee360f455bd85277bab9",
  measurementId: "G-E24H6XTH1Y",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
