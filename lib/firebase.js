import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCM2swWgsSt0B-dQ2icwYiGbt72Ou3dE_Y",
  authDomain: "nextjsmedium.firebaseapp.com",
  projectId: "nextjsmedium",
  storageBucket: "nextjsmedium.appspot.com",
  messagingSenderId: "751383928582",
  appId: "1:751383928582:web:b7b6735233e5967707c887",
  measurementId: "G-D5K4SY800D",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
