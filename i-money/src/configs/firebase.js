import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACMFmHj0eSFJNDqBfpNVZaLdIw1-ZYxXM",
  authDomain: "imoney-a78ea.firebaseapp.com",
  projectId: "imoney-a78ea",
  storageBucket: "imoney-a78ea.appspot.com",
  messagingSenderId: "460149628404",
  appId: "1:460149628404:web:86e9eaebf7886dc95aada1",
  measurementId: "G-36CB4TKDE8",
};

const firebaseApp = initializeApp(firebaseConfig);

const fireStoreCore = getFirestore(firebaseApp);

export { fireStoreCore };
