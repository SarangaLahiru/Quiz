import { initializeApp } from 'firebase/app';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { promises as fs } from 'fs';

// Your Firebase configuration
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
const db = getFirestore(app);

// Read questions from JSON file and add to Firestore
(async () => {
    try {
        const data = await fs.readFile('questions.json', 'utf8');
        const questions = JSON.parse(data);

        for (const question of questions) {
            try {
                const docRef = await addDoc(collection(db, 'quizzes'), question);
                console.log('Document written with ID: ', docRef.id);
            } catch (e) {
                console.error('Error adding document: ', e);
            }
        }
    } catch (err) {
        console.error('Error reading questions.json file: ', err);
    }
})();
