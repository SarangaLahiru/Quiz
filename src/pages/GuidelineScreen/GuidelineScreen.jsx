import React from 'react';
import { useNavigate } from 'react-router-dom';
import droidsImage from '../../assets/droids.png';
import background from '../../assets/background.png';
import '../../index.css';
import Footer from '../../components/Footer/Footer';


const GuidelineScreen = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-yellow-400 p-4"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <h1 className="text-center text-[155px] leading-[247.33px]" style={{ fontFamily: 'Star-Jedi', fontSize: '155px', fontWeight: 400, marginBottom: '-30px' }}>
        START
      </h1>
      <p className="text-xl text-white" style={{ fontFamily: 'Roboto', fontSize: '32px', fontWeight: 700, marginTop: '-20px' }}>
        HOW MUCH OF THE GEEK ARE YOU?
      </p>
      <h1 className="text-center text-[155px] leading-[247.33px]" style={{ fontFamily: 'Star-Jedi', fontSize: '155px', fontWeight: 400, marginTop: '-80px', marginBottom: '80px' }}>
        QUKZ
      </h1>
      <p
        className="text-lg mb-8 text-white"
        style={{
          fontFamily: 'Cascadia Code',
          fontSize: '44px',
          fontWeight: 400,
          lineHeight: '52.81px',
          textAlign: 'center',
          marginBottom: '80px',
        }}
      >
        Hi competitors,
        <br />
        are you ready for the <span className="text-yellow-400">first round</span>?
      </p>

      <button
        className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 mb-8"
        style={{ fontFamily: 'Cascadia Code', fontSize: '40px', fontWeight: 400, lineHeight: '46.48px', textAlign: 'center' }}
      >
        TAKE THE QUIZ
      </button>
      <div className="bg-gray-900 bg-opacity-50 text-white p-4 rounded-lg shadow-lg mb-8 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full">
        <ul
          className="lg:flex-[3] flex-1 ml-5 space-y-6 text-left"
          style={{
            fontFamily: 'Cascadia Code',
            fontSize: '36px',
            fontWeight: 400,
            lineHeight: '41.84px',
            textAlign: 'justify',
            color: 'white',
          }}
        >
          <li style={{ color: 'white' }}>
            <span style={{ color: 'yellow' }}>01.</span> You have 1 hour to complete the
            quiz.
          </li>
          <li style={{ color: 'white' }}>
            <span style={{ color: 'yellow' }}>02.</span> You cannot go back once you go
            to the next question.
          </li>
          <li style={{ color: 'white' }}>
            <span style={{ color: 'yellow' }}>03.</span> Using AI tools is completely
            prohibited.
          </li>
          <li style={{ color: 'white' }}>
            <span style={{ color: 'yellow' }}>04.</span> All the questions need to be
            answered within the time given.
          </li>
        </ul>

        <div className="lg:flex-[1] flex-1 ml-0 lg:ml-4 mt-4 lg:mt-0 flex justify-center lg:justify-end">
          <img src={droidsImage} alt="Droids" className="h-[250px] w-auto" />
        </div>
      </div>

      <Footer/>
    </div>
  );
};

export default GuidelineScreen;
