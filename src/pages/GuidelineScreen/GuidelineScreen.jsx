import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';

const GuidelineScreen = () => {
    const navigate = useNavigate();

    return (
        < div className='overflow-x-hidden'>
            <div className=" flex flex-col items-center justify-center min-h-screen text-yellow-400 p-4">
                <h1 className="text-center  text-[80px] md:text-[155px] leading-[247.33px] md:-mb-7 -mb-16" style={{ fontFamily: 'Star-Jedi',  fontWeight: 400 }}>
                    START
                </h1>
                <p className="text-[15px] md:text-[20px] text-white" style={{ fontFamily: 'Roboto', fontWeight: 700, marginTop: '-20px' }}>
                    HOW MUCH OF THE GEEK ARE YOU?
                </p>
                <h1 className="text-center text-[80px] md:text-[155px] leading-[247.33px] md:-mt-16 -mt-24 md:mb-2 -mb-28" style={{ fontFamily: 'Star-Jedi', fontWeight: 400, marginBottom: '80px' }}>
                    QUKZ
                </h1>
                <p
                    className="text-[24px] md:text-4xl -mt-28 text-white"
                    style={{
                        fontFamily: 'Cascadia Code',
                      
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
                    className="py-3 px-10 text-xl md:text-2xl  -mt-10 bg-[#FCE300] text-black font-medium rounded-md hover:bg-[#FCE300]  mx-auto block mb-4"
                    onClick={() => navigate('/quiz')}
                    style={{
                        fontFamily: 'Cascadia Code',
                        
                        fontWeight: 'bold',
                        lineHeight: '41.84px',
                        textAlign: 'justify',
                        color: 'Black',
                    }}
                >
                    TAKE THE QUIZ
                </button>

                <div className="w-full flex items-center justify-center">
                    <div className="bg-gray-900 bg-opacity-50 md:w-11/12 w-10/12 text-white p-4 rounded-lg shadow-lg flex flex-col lg:flex-row items-center justify-between">
                        <ul
                            className="lg:flex-[3] text-sm md:text-2xl flex-1 ml-5 space-y-6 text-left"
                            style={{
                                fontFamily: 'Cascadia Code',
                               
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
                            <img src="./images/droids.png" alt="Droids" className="h-[250px] w-[400px] md:h-[350px] md:w-[500px]" />
                        </div>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
            <br/>
            <Footer />
            <br/>
            <div>
            <h1 className='flex justify-center text-sm md:text-lg'  
             style={{
                        fontFamily: 'Cascadia Code',
                     
                        fontWeight: 'bold',
                        lineHeight: '41.84px',
                        textAlign: 'justify',
                        color: 'White',
                    }}>- WIE AFFINITY GROUP OF SUSL -</h1>
                    </div>
        </div>
    );
};

export default GuidelineScreen;
