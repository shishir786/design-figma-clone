"use client";

import Image from 'next/image';


export default function HeroSection() {
  return (
    <div className="overflow-hidden font-inter">
      <div className="flex flex-col shadow-[0px_4px_4px_rgba(0,0,0,0.25)] relative min-h-[990px] max-md:min-h-[600px] max-sm:min-h-[500px] w-full">
        <Image
          src="/bg.png"
          className="absolute inset-0 h-full w-full object-cover object-center"
          alt="Background"
          width={1920}
          height={1080}
        />
        <div className="flex flex-col relative min-h-[990px] max-md:min-h-[600px] max-sm:min-h-[500px] w-full items-start justify-center px-20 py-[294px] max-lg:px-8 max-lg:py-[120px] max-md:px-6 max-md:py-[80px] max-sm:px-4 max-sm:py-[60px]">
          <Image
            src="/overlay1.svg"
            className="absolute inset-0 h-full w-full object-cover object-center"
            alt=""
            width={1920}
            height={1080}
          />
          <div className="relative flex -mb-15 w-[700px] max-w-full flex-col items-stretch justify-center max-lg:mb-2.5 max-md:mb-0">
            <div className="flex w-full flex-col items-stretch justify-center">
              <h1 className="text-6xl font-extrabold tracking-[-0.6px] uppercase max-lg:text-5xl max-md:text-4xl max-sm:text-3xl max-sm:tracking-[-0.3px] max-sm:leading-tight text-emerald-800">
                <span className="font-black">Florida and Texas </span>
                <br />
                <span className="font-black">Hard Money Lenders</span>
              </h1>
              <p className="text-[var(--TextColor)] text-[32px] font-semibold leading-[48px] mt-5 max-lg:text-[28px] max-lg:leading-[42px] max-md:text-[24px] max-md:leading-[36px] max-sm:text-[20px] max-sm:leading-[30px] max-sm:mt-4">
                Fast Closing Fix and Flip and Rental Loans For Your Investment
                Properties.
              </p>
            </div>
            <div className="relative flex mt-15 w-full max-w-[400px] justify-start max-lg:mt-10 max-md:mt-8 max-sm:mt-6">
              <button className="relative flex items-center bg-[#175730] rounded-[16px] shadow-lg px-8 py-4 group hover:opacity-90 transition-opacity">
                <span className="text-white font-inter text-[18px] font-bold leading-normal uppercase tracking-wide max-md:text-[16px] max-sm:text-[14px]">
                  Get Approved Online
                </span>
                <span className="ml-6 flex items-center">
                  <svg width="77" height="74" viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 max-md:w-6 max-md:h-6 max-sm:w-5 max-sm:h-5">
                    <path d="M18.0936 3.0873C18.5341 1.30054 20.137 0.0449219 21.9773 0.0449219H71.7376C74.3346 0.0449219 76.243 2.4811 75.6213 5.00254L59.5939 70.0025C59.1534 71.7893 57.5505 73.0449 55.7102 73.0449H5.94986C3.35289 73.0449 1.44445 70.6087 2.06618 68.0873L18.0936 3.0873Z" fill="white" />
                    <path d="M41.0723 23.5918C41.5382 23.619 41.9788 23.8032 42.3242 24.1113L42.4668 24.25L42.4727 24.2568L42.4785 24.2646L51.8477 35.1953C52.1678 35.5684 52.3437 36.0435 52.3438 36.5352C52.3438 36.9655 52.2092 37.3837 51.9609 37.7314L51.8477 37.876L42.4668 48.8203C42.1049 49.212 41.6047 49.4484 41.0723 49.4795C40.5399 49.5106 40.0164 49.3342 39.6113 48.9873C39.2063 48.6404 38.9515 48.15 38.9004 47.6191C38.8493 47.0883 39.0056 46.5584 39.3369 46.1406L39.3428 46.1328L39.3486 46.126L47.5674 36.5352L39.3486 26.9453L39.3428 26.9375L39.3369 26.9307C39.0056 26.5129 38.8494 25.9829 38.9004 25.4521C38.9515 24.9214 39.2063 24.4309 39.6113 24.084C40.0164 23.7371 40.5399 23.5607 41.0723 23.5918Z" fill="#175730" stroke="#175730" />
                    <path d="M28.5654 23.5508C29.1105 23.5933 29.6163 23.8512 29.9717 24.2666L39.3408 35.1973H39.3418C39.661 35.5706 39.8359 36.0459 39.8359 36.5371C39.8359 37.0283 39.661 37.5036 39.3418 37.877L39.3408 37.8779L29.9658 48.8154L29.959 48.8223C29.5971 49.2139 29.0978 49.4503 28.5654 49.4814C28.0331 49.5125 27.5095 49.3361 27.1045 48.9893C26.6994 48.6424 26.4447 48.1519 26.3936 47.6211C26.3424 47.0903 26.4987 46.5604 26.8301 46.1426L26.8359 46.1348L26.8418 46.1279L35.0605 36.5371L26.8389 26.9473V26.9463C26.4835 26.5308 26.3071 25.9914 26.3496 25.4463C26.3921 24.9012 26.65 24.3954 27.0654 24.04C27.4809 23.6847 28.0204 23.5083 28.5654 23.5508Z" fill="#175730" stroke="#175730" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
