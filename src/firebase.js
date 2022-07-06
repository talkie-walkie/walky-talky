// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAJJ5HDJSbG7fzVFVF0bVqvFdHsfPyBI2Q",
    authDomain: "talkie-walkie-fbfed.firebaseapp.com",
    projectId: "talkie-walkie-fbfed",
    storageBucket: "talkie-walkie-fbfed.appspot.com",
    messagingSenderId: "617649106746",
    appId: "1:617649106746:web:fab6a5a2de2208bcf0ea03"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase