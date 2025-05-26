// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpD-zhZyRLDYHZLvvA7Y9U1-vq5OAoomM",
  authDomain: "doe-mais-b847c.firebaseapp.com",
  projectId: "doe-mais-b847c",
  storageBucket: "doe-mais-b847c.firebasestorage.app",
  messagingSenderId: "225428803982",
  appId: "1:225428803982:web:81ef49a3006006856c54df",
  measurementId: "G-N8Q9XT4H5D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);