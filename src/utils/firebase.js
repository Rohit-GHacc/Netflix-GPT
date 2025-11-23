// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-FYVzb9LiuqlCLu9wE4gBdytViJlJeL8",
  authDomain: "netflixgpt-a02a4.firebaseapp.com",
  projectId: "netflixgpt-a02a4",
  storageBucket: "netflixgpt-a02a4.firebasestorage.app",
  messagingSenderId: "558735772224",
  appId: "1:558735772224:web:1296e3fa709e2ebcbfeda5",
  measurementId: "G-109DFHN6KK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();