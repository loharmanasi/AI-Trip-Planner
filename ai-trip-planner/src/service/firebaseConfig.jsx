// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  // apiKey: "AIzaSyBLtuliEkAqGXSe5RoZUFj1hJSkMI9U-CQ",
  // authDomain: "ai-trip-planner-b16ba.firebaseapp.com",
  // projectId: "ai-trip-planner-b16ba",
  // storageBucket: "ai-trip-planner-b16ba.appspot.com",
  // messagingSenderId: "654419959827",
  // appId: "1:654419959827:web:ab457688f1e234fe0f1fe6",
  // measurementId: "G-DS3935ZN33"
  apiKey: "AIzaSyD2rJzL7uSSO9-3D0QNXdbgVlJ0H3A_eaI",
  authDomain: "ai-trip-466ce.firebaseapp.com",
  projectId: "ai-trip-466ce",
  storageBucket: "ai-trip-466ce.firebasestorage.app",
  messagingSenderId: "501228512675",
  appId: "1:501228512675:web:0e98b47400f5a8860ca616"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);