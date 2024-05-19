import { collection, getDocs, query, where,getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyDtRh1u_javbvFb1CoPq4199UYza3YyLzM",
    authDomain: "quiz-d58b7.firebaseapp.com",
    projectId: "quiz-d58b7",
    storageBucket: "quiz-d58b7.appspot.com",
    messagingSenderId: "195369048116",
    appId: "1:195369048116:web:0cbcbe5911488b45fcd261",
    measurementId: "G-WKZLDH3KDR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const user = {
    async isUserSubmitted(userName) {
        try {
            const resultRef = collection(db, "results");
            const q=query(resultRef,where("userName","==",userName))
            const queryResult = await getDocs(q);

            if (queryResult.empty) {
                console.log("You can Go to quize->");
                return false;
            } 
            return true
        } catch (error) {
            console.error("Error checking user submission: ", error);
            throw error;
        }
    }
}

export default user