// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-26c11.firebaseapp.com",
    projectId: "mern-estate-26c11",
    storageBucket: "mern-estate-26c11.appspot.com",
    messagingSenderId: "837712717201",
    appId: "1:837712717201:web:a31a960900a11b0e9d6630"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);