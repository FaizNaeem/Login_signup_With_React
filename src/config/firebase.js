// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import {  getAuth,  createUserWithEmailAndPassword,signInWithEmailAndPassword, } from "firebase/auth";
import {addDoc, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPKvOeoRBJJV6yXbZwbjwSRcFOz5uYpEc",
  authDomain: "faiz-naeem.firebaseapp.com",
  databaseURL: "https://faiz-naeem-default-rtdb.firebaseio.com",
  projectId: "faiz-naeem",
  storageBucket: "faiz-naeem.appspot.com",
  messagingSenderId: "1048494592514",
  appId: "1:1048494592514:web:a5c8221754bb778d57cd1b",
  measurementId: "G-JXL2C4095Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getStorage(app);
export{ createUserWithEmailAndPassword, signInWithEmailAndPassword,auth,db,addDoc,collection}