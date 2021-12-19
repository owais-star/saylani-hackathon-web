// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWlV7UVxlfRPMiWfB4_wUkH86hBJ773fc",
  authDomain: "favouritecuisines.firebaseapp.com",
  databaseURL: "https://favouritecuisines-default-rtdb.firebaseio.com",
  projectId: "favouritecuisines",
  storageBucket: "favouritecuisines.appspot.com",
  messagingSenderId: "982457233795",
  appId: "1:982457233795:web:c384e9c7f0d835fbe786b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
export default db;
