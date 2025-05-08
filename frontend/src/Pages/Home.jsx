import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import About from './About';
import Stories from './Stories';
import Advertise from './Advertise';
import Feedback from './Feedback';

import Features from './Features';

const Home = () => {
    return (
        <div>
            <Navbar />

            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 gap-8">
                {/* Left Section */}
                <div className="lg:w-1/2 p-5 md:p-0 w-full text-center lg:text-left">
                    <h1 className="md:text-6xl text-[40px]  font-bold text-[#212529] leading-tight">
                        Beyond Simple Connections
                    </h1>

                    <p className="text-2xl mt-20 text-gray-700">
                        Reeamor connects you with caring companions. Share <br className="hidden lg:block" />
                        feelings, meet, and bond effortlessly, creating meaningful connections.
                    </p>

                    {/* Button */}
                    <div className="mt-24">
                        <button className="bg-[#856fbb] font-bold text-white text-xl px-6 py-2 rounded hover:bg-[#6d59b1] transition duration-300">
                            Explore Connection
                        </button>
                    </div>
                </div>

                {/* Right Section */}
                <div className="lg:w-1/2 w-full flex justify-center">
                    <img
                        src="https://reeamor.com/Images/Frame1%20100vbnm,l0006888%20(1).png"
                        alt="Hero Visual"
                        className="w-auto h-auto"
                    />
                </div>
                
            </div>
            <About></About>
            <Stories></Stories>
            <Advertise></Advertise>
            <Features></Features>
            <Feedback></Feedback>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;
