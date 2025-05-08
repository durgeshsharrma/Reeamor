import React from 'react'

const Features = () => {
  return (
    <div>
          <div className="flex  flex-col lg:flex-row items-center justify-center min-h-screen px-6 gap-8">


              
              {/* Left Section */}
              <div className="lg:w-1/2 w-full flex p-6 justify-center">
                  <img
                      src="https://reeamor.com/Images/Frame4%20100vbnm,l0006888%20(4).png"
                      alt="Hero Visual"
                      className="w-[auto] h-auto"
                  />
              </div>
              
              {/* Right Section */}
              <div className="lg:w-1/2 p-5 md:p-0 w-full text-center lg:text-left">
                  <h4 className="text-[#212529] mb-[3rem] text-[23.619px] leading-tight">
                      Features
                  </h4>
                  <h1 className="md:text-6xl text-[40px]  font-bold text-[#212529] leading-tight">
                      What You’ll Experience
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


              

             

          </div>
          {/* Email Subscribe Section */}
          <div className="mt-16 text-center h-screen">
              <h3 className="text-6xl font-semibold mb-4">Stay Updated with ReeAmor</h3>
              <p className="text-2xl mt-[4rem] text-gray-600 mb-6">
                  Subscribe to get the latest news and stories from REEAMOR.
              </p>
              <div className=" mb-8 mt-[3rem] sm:flex-row items-center justify-center gap-4">
                  <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-8 py-4 w-[30%] rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#856fbb] text-xl"
                  /> 
                  <div>
                      <button className="mt-8 w-[30%] bg-[#856fbb] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#6d59b1] transition">
                          Subscribe
                      </button>
                 </div>
              </div>
          </div>

    </div>
  )
}

export default Features
