import { collection, getDocs, query, where,getFirestore } from "firebase/firestore";
import { db } from "../firebase";

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