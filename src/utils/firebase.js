// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB29riuuPdeS3B9-DdW3dlwwETp6ii5aHE",
  authDomain: "netflix-gpt-85139.firebaseapp.com",
  projectId: "netflix-gpt-85139",
  storageBucket: "netflix-gpt-85139.firebasestorage.app",
  messagingSenderId: "1053144912408",
  appId: "1:1053144912408:web:6593fd8f713aecbaeee96d",
  measurementId: "G-WJZ5HS3ZC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();