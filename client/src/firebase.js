// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-13f15.firebaseapp.com",
  projectId: "blog-app-13f15",
  storageBucket: "blog-app-13f15.appspot.com",
  messagingSenderId: "629865563949",
  appId: "1:629865563949:web:9aea1121a763ea34e5b5a4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);