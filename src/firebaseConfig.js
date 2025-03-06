// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK7Rv4vjZXP30oOBtE22fZsBHC4p5RKFo",
  authDomain: "skibelem.firebaseapp.com",
  projectId: "skibelem",
  storageBucket: "skibelem.firebasestorage.app",
  messagingSenderId: "1007609135172",
  appId: "1:1007609135172:web:f74154a53da8e026fb7c11",
  measurementId: "G-DW3RYCTXZ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
