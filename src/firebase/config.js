// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEqORdyj4BehNJHnuRbvPI-w9SHDO0b3w",
  authDomain: "e-commerce-react-c203e.firebaseapp.com",
  projectId: "e-commerce-react-c203e",
  storageBucket: "e-commerce-react-c203e.appspot.com",
  messagingSenderId: "251684659013",
  appId: "1:251684659013:web:baf505f3e8993411d9a82c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFireStoreApp(){
  return app
}