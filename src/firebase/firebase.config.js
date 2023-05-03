// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAypgaCWlAbSzk_wYDDDl4BEKHb8Baq_TM",
  authDomain: "the-chef-recipes-client.firebaseapp.com",
  projectId: "the-chef-recipes-client",
  storageBucket: "the-chef-recipes-client.appspot.com",
  messagingSenderId: "709881982452",
  appId: "1:709881982452:web:b94fb5ed1ba31db92a1da1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;