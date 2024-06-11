import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../CongratsScreen/CongratsScreen.css'; 

const CongratsScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="app">
            <div className='logo'>
                <img src='logo.png' alt='logo' />
                <h1 className='round'>Round 01</h1>
            </div>
            <div className='body'>
                <img src="bodyIMG.png" alt="Body" />
                <h2>Congratulations!</h2>
                <p>You have successfully completed the QWhiz 1.0. We <br />will announce the winners as soon as possible.</p>
            </div>
            <div className='foot'>
                <div className='foot1'></div>
                <div className='foot2'>
                    <div className='scrolling-text'>
                        QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  | QWHIZ  |
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CongratsScreen;