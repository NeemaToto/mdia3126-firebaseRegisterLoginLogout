// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCxPD-MAklynyFmKwuiXPa7l2gkDj8JA2k",
    authDomain: "fir-mdia3126-tuesday.firebaseapp.com",
    projectId: "fir-mdia3126-tuesday",
    storageBucket: "fir-mdia3126-tuesday.appspot.com",
    messagingSenderId: "455510271039",
    appId: "1:455510271039:web:7420fdef0a09a06fad448a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)