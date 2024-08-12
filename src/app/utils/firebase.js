import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzxhAqeQhj81wR_rB4c1huUGd2-ItZReM",
  authDomain: "leave-now-a97be.firebaseapp.com",
  projectId: "leave-now-a97be",
  storageBucket: "leave-now-a97be.appspot.com",
  messagingSenderId: "1072666353340",
  appId: "1:1072666353340:web:20ee360f455bd85277bab9",
  measurementId: "G-E24H6XTH1Y",
};

let analytics;

if (typeof window !== "undefined") {
  // Initialize Firebase only in the browser environment
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

export { analytics };
