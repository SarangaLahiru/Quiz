import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const user={
    async isUserSubmitted(userName){
        try {
            const resultRef= collection(db,"result")
            const q=query(resultRef,where("userName","==",userName))
            const queryResult= await getDocs(q)
            queryResult.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            })

            if (!queryResult){
            }
            
            return true

        } catch (error) {
            console.log(error)
        }

    }
}

user.isUserSubmitted("Denuwan")

export default user