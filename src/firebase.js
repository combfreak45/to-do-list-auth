// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzSlQe4_-kLjT4ha9pyVd9il4-8dQdXHY",
  authDomain: "todolist-ca-94308.firebaseapp.com",
  projectId: "todolist-ca-94308",
  storageBucket: "todolist-ca-94308.appspot.com",
  messagingSenderId: "984906445042",
  appId: "1:984906445042:web:dbbd5017327c2ab780e06b",
  measurementId: "G-ZQJFPL9Z50",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app)
