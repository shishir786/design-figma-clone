"use client";
import Image from 'next/image';
import React from 'react';


const WhereWeLend: React.FC = () => {
  return (
    <div id="where-we-lend" className="w-full bg-green-700 flex flex-col items-center justify-center px-4 md:px-20 py-20 gap-20">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-20">
        {/* Header Section */}
        <div className="flex flex-col items-start gap-5 w-full max-w-6xl">
          <h2 className="text-white text-left font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase w-full m-0">
            WHERE WE LEND
          </h2>
          <div className="text-white text-lg md:text-xl lg:text-2xl font-normal leading-relaxed w-full text-left">
            <span>
              Ridge Street provides hard money loans to real estate investors in 35 states.{' '}
              <br />We focus our efforts in{' '}
            </span>
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl">Texas</span>
            <span> and </span>
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl">Florida</span>
            <span>.</span>
          </div>
        </div>

        {/* US Map */}
        <div className="w-full flex justify-center">
          <Image
            src="/map.png"
            className="w-full max-w-6xl h-auto object-contain"
            alt="Map showing lending locations across the United States"
            width={1920}
            height={1080}
          />
        </div>

        {/* Map Cards */}
        <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl justify-center items-center">

          {/* Texas Card */}
          <div className="relative w-full md:w-1/2 max-w-lg">
            <Image
              src="/mapv1.png"
              className="w-full h-auto object-contain"
              alt="Texas lending locations"
              width={500}
              height={600}
            />
            {/* Texas Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-white text-4xl md:text-5xl font-bold mb-2">Texas</h3>
              <p className="text-white text-lg md:text-xl font-medium mb-6">Hard Money Loans | DSCR Loans</p>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-green-800 transition-all duration-300">
                VIEW ALL LOCATIONS
              </button>
            </div>
          </div>

          {/* Florida Card */}
          <div className="relative w-full md:w-1/2 max-w-lg">
            <Image
              src="/mapv2.png"
              className="w-full h-auto object-contain"
              alt="Florida lending locations"
              width={500}
              height={600}
            />
            {/* Florida Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-white text-4xl md:text-5xl font-bold mb-2">Florida</h3>
              <p className="text-white text-lg md:text-xl font-medium mb-6">Hard Money Loans | DSCR Loans</p>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-green-800 transition-all duration-300">
                VIEW ALL LOCATIONS
              </button>
            </div>
          </div>
        </div>

        {/* View All Locations Button */}
        <div className="flex flex-col items-center justify-center w-full mt-8">
          <button className="relative flex items-center bg-white rounded-[16px] shadow-lg px-12 py-5 group hover:opacity-90 transition-opacity">
            <span className="text-[#175730] font-inter text-[24px] font-bold leading-normal uppercase tracking-wide">View All Locations</span>
            <span className="ml-8 flex items-center">
              <svg width="77" height="74" viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
                <path d="M18.0936 3.0873C18.5341 1.30054 20.137 0.0449219 21.9773 0.0449219H71.7376C74.3346 0.0449219 76.243 2.4811 75.6213 5.00254L59.5939 70.0025C59.1534 71.7893 57.5505 73.0449 55.7102 73.0449H5.94986C3.35289 73.0449 1.44445 70.6087 2.06618 68.0873L18.0936 3.0873Z" fill="#175730" />
                <path d="M41.0723 23.5918C41.5382 23.619 41.9788 23.8032 42.3242 24.1113L42.4668 24.25L42.4727 24.2568L42.4785 24.2646L51.8477 35.1953C52.1678 35.5684 52.3437 36.0435 52.3438 36.5352C52.3438 36.9655 52.2092 37.3837 51.9609 37.7314L51.8477 37.876L42.4668 48.8203C42.1049 49.212 41.6047 49.4484 41.0723 49.4795C40.5399 49.5106 40.0164 49.3342 39.6113 48.9873C39.2063 48.6404 38.9515 48.15 38.9004 47.6191C38.8493 47.0883 39.0056 46.5584 39.3369 46.1406L39.3428 46.1328L39.3486 46.126L47.5674 36.5352L39.3486 26.9453L39.3428 26.9375L39.3369 26.9307C39.0056 26.5129 38.8494 25.9829 38.9004 25.4521C38.9515 24.9214 39.2063 24.4309 39.6113 24.084C40.0164 23.7371 40.5399 23.5607 41.0723 23.5918Z" fill="white" stroke="white" />
                <path d="M28.5654 23.5508C29.1105 23.5933 29.6163 23.8512 29.9717 24.2666L39.3408 35.1973H39.3418C39.661 35.5706 39.8359 36.0459 39.8359 36.5371C39.8359 37.0283 39.661 37.5036 39.3418 37.877L39.3408 37.8779L29.9658 48.8154L29.959 48.8223C29.5971 49.2139 29.0978 49.4503 28.5654 49.4814C28.0331 49.5125 27.5095 49.3361 27.1045 48.9893C26.6994 48.6424 26.4447 48.1519 26.3936 47.6211C26.3424 47.0903 26.4987 46.5604 26.8301 46.1426L26.8359 46.1348L26.8418 46.1279L35.0605 36.5371L26.8389 26.9473V26.9463C26.4835 26.5308 26.3071 25.9914 26.3496 25.4463C26.3921 24.9012 26.65 24.3954 27.0654 24.04C27.4809 23.6847 28.0204 23.5083 28.5654 23.5508Z" fill="white" stroke="white" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhereWeLend;
