// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "e-commerce-afe8b.firebaseapp.com",
  projectId: "e-commerce-afe8b",
  storageBucket: "e-commerce-afe8b.appspot.com",
  messagingSenderId: "535940245895",
  appId: "1:535940245895:web:8d5cdc7818ed5b90ffcb22",
  measurementId: "G-RMKJTDPQJ6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);