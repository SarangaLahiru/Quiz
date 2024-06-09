import { addDoc, collection } from 'firebase/firestore'; // Import addDoc and collection
import React, { useState } from 'react';
import { Navigate } from 'react-router-dom'; // Import Navigate
import { db } from '../../../firebase';
import user from '../../../utils/user_services';

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
            <div className='m-auto w-full relative top-0 flex flex-wrap items-center justify-center h-screen bg-black'>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className='text-4xl p-4 text-black'
                />
                <button
                    style={{ backgroundColor: "#FCE300", color: "black" }}
                    className='p-4 text-4xl hover:bg-black hover:text-white active:bg-white active:text-black'
                    onClick={checkUserpass}
                >
                    Start Quiz
                </button>
            </div>
        </>

    );
};

export default StartScreen;
