import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBpD-zhZyRLDYHZLvvA7Y9U1-vq5OAoomM",
  authDomain: "doe-mais-b847c.firebaseapp.com",
  projectId: "doe-mais-b847c",
  storageBucket: "doe-mais-b847c.firebasestorage.app",
  messagingSenderId: "225428803982",
  appId: "1:225428803982:web:81ef49a3006006856c54df",
  measurementId: "G-N8Q9XT4H5D"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); 