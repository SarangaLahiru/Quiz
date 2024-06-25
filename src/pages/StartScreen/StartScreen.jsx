import { addDoc, collection } from 'firebase/firestore'; // Import addDoc and collection
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import { db } from '../../../firebase';
import user from '../../../utils/user_services';
import Navbar from '../../components/Navbar/Navbar';

const StartScreen = () => {
    const [userName, setUserName] = useState('');
    const [score, setScore] = useState(0);
    const [redirect, setRedirect] = useState(false); // State to manage redirection

    const checkUserpass = async () => {
        if (userName.trim() !== '') {
            const check = await user.isUserSubmitted(userName);
            if (check) {
                alert("Username is already used");
            } else {

                localStorage.setItem('userName', userName);

                sessionStorage.clear();
                await addDoc(collection(db, 'results'), { userName, score });
                setRedirect(true); // Set redirect to true
            }
        } else {
            alert('Please enter your name.');
        }
    };

    // If redirect state is true, navigate to "/guidelines"
    if (redirect) {
        return <Navigate to="/guidelines" />;
    }

    return (
        <>
        <Navbar/>
            <div className='flex flex-col items-center justify-center  bg-cover bg-center'>
            <img src="/images/first.png" alt="Centered Logo" className="w-3/4 md:w-1/2 md:mt-9 mt-36 mb-8" />
          
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            checkUserpass();
                        }
                    }}
                    className="p-5 m-2 text-center bg-black text-white placeholder-gray-400 md:text-xl md:w-[420px] w-[270px] md:mt-0 mt-16 text-sm"
                    style={{ border: "3px #FCE300 solid", borderRadius: "12px",height: "64px", fontSize: "24px" } }
               />
               
                
            </div>
        </>

    );
};

export default StartScreen;