import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../CongratsScreen/CongratsScreen.css'; 
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const CongratsScreen = () => {
    const navigate = useNavigate();
    return (
        <div className="app">
            <Navbar/>
            <div className='body'>
                <img src="bodyIMG.png" alt="Body" />
                <h2>Congratulations!</h2>
                <p>You have successfully completed the QWhiz 1.0. We <br />will announce the winners as soon as possible.</p>
            </div>
          <Footer/>
        </div>
    );
};

export default CongratsScreen;