import React from 'react';

const About = () => {
    return (
        <>
            <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 mt-[4rem] gap-8">


                {/* Left Section - Image (comes second on small screens) */}
                <div className="order-2 lg:order-1 lg:w-1/2 w-full flex justify-center">
                    <img
                        src="https://reeamor.com/Images/about.png"
                        alt="Hero Visual"
                        className="w-auto h-auto"
                    />
                </div>


                {/* Right Section - Content (comes first on small screens) */}
                <div className="order-1 md:order-2 lg:order-2 lg:w-1/2 w-full flex justify-center">
                    <div className="flex flex-col justify-center text-center lg:text-left p-5 max-w-xl">
                        <h4 className="text-[#212529] text-[23.619px] leading-tight">
                            About
                        </h4>

                        <h1 className="text-[40px] lg:text-[50px] font-semibold text-[#212529] leading-tight mt-4">
                            Get to Know Us Better <span className="text-[#9a72f9]">REEAMOR</span>
                        </h1>

                        <p className="text-xl lg:text-2xl mt-10 text-gray-700">
                            Reeamor is here to transform how you connect with others. Our platform is built for those seeking authentic companionship—whether it’s for sharing personal thoughts or spending time with someone who truly listens. Experience meaningful, real connections that go beyond the surface.
                        </p>

                        {/* Button */}
                        <div className="mt-10 lg:mt-16">
                            <button className="bg-[#856fbb] font-bold text-white text-xl px-6 py-2 rounded hover:bg-[#6d59b1] transition duration-300">
                                Explore Connection
                            </button>
                        </div>
                    </div>
                </div>

              

            </div>
        </>
    );
};

export default About;
