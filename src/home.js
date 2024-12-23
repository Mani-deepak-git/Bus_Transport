import './home.css';
import Header from './header';
import Form from './BusTransportForm';
import { useEffect, useState } from 'react';

function Home() {
    const [isVisible, setIsVisible] = useState(false);
    const [itVisible, setItVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 100) { 
                setIsVisible(true);
                
            }
            if(scrollY <100 || scrollY > 300){
                setItVisible(true);
            }
            else {
                setIsVisible(false);
                setItVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Header />
            <div className="home">
                <div className='img'>
                    <img src='./images/slide-1.png' alt='school-bus-img' /><Form isVisible={isVisible}/>
                    
                </div>
                <div className='container'>
                    <div className='set1'>
                        <div className='set'>
                            <p className='p'>comfortable travel for all possible ways</p>
                            <div className='ma'>
                                <h1 className="Features">Features</h1>
                                <h1 className="Provide">We Provide</h1>
                            </div>
                        </div>
                    </div>

                    <div className="feature-container">
                        <img 
                            src='./images/Bus.png' 
                            alt='bus-img' 
                            className={`bus-img ${isVisible ? 'visible' : ''}`} 
                        />
                        <div className='Bus-details'>
                            <div className='Bus-captain'>
                                <div className='space'>
                                    <img src='./images/fea-1.png' alt='driver' />
                                    <h4>BUS CAPTAIN</h4>
                                </div>
                                <p>Professional bus Captain will assist you throughout the journey</p>
                                <hr />
                            </div>
                            <div className='Boarding-crew'>
                                <div className='space'>
                                    <img src='./images/fea-2.png' alt='station-img' />
                                    <h4>BOARDING CREW</h4>
                                </div>
                                <p>Our trained staff helps you with easy check-in</p>
                                <hr />
                            </div>
                            <div className='Comfy-seaters'>
                                <div className='space'>
                                    <img src='./images/fea-3.png' alt='seats-img' />
                                    <h4>COMFY-SEATERS</h4>
                                </div>
                                <p>Unwind in our clean and secure seaters berths</p>
                                <hr />
                            </div>
                        </div>
                    </div>
                 
                </div>
                <div className='travels-report'>
                    <div className='background-shapes'></div>
                    <div className='contentMove'>
                    <div className='content'>
                        <div className='card-container'>
                            <div className='card'>
                                <p className='travels-text'>Safe and Secure travel</p>
                            </div>
                            <div className='card'>
                                <p className='travels-text'>Bus coardinater</p>
                            </div>
                            <div className='card'>
                                <p className='travels-text'>Staff coardinater</p>
                            </div>
                        </div>
                        <hr />
                        <h2>Who We Are</h2>
                        <h1>Vishnu Institute Of Technology</h1>
                        <p classname='p'>
                        Vishnu Institute Of Technology providing travel solution for thier students with best in class quality by operating brand new fleets with well experienced professionals  
                        </p>
                        <button>BOOK NOW</button>
                        </div>
                        <div className={`report-image1 ${itVisible ? 'visile' : ''} mb-2`}>
                            <img src='./images/Bus.png' alt='Report-image'/>
                        </div>
                       
                        </div>    
                </div>
               
            </div>
        </>
    );
}   

export default Home;
