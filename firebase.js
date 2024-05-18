// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDtRh1u_javbvFb1CoPq4199UYza3YyLzM",
    authDomain: "quiz-d58b7.firebaseapp.com",
    projectId: "quiz-d58b7",
    storageBucket: "quiz-d58b7.appspot.com",
    messagingSenderId: "195369048116",
    appId: "1:195369048116:web:0cbcbe5911488b45fcd261",
    measurementId: "G-WKZLDH3KDR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };
