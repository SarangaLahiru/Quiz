import React, { useState } from 'react';


const ResultScreen = () => {
    const [userName, setUserName] = useState(localStorage.getItem('userName'));
    const [score, setScore] = useState(localStorage.getItem('score'))
    return (
        <div className='result-screen'>
            <h2>Quiz completed!</h2>
            <p>{userName}, your score is: {score}</p>
        </div>
    );
};

export default ResultScreen;
