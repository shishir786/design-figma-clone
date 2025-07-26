
// Arrow icon component
const ArrowIcon = ({ className = "", fill = "#175730" }: { className?: string; fill?: string }) => (
  <svg
    className={className}
    width="16"
    height="17"
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_arrow)">
      <path
        d="M15.5599 1.02051H6.39325C6.16294 1.02051 5.97657 1.2069 5.97657 1.43726C5.97657 1.6676 6.16294 1.854 6.39325 1.854H14.554L1.09864 15.3115C0.935869 15.4743 0.935869 15.738 1.09864 15.9008C1.18001 15.9822 1.28665 16.0229 1.39325 16.0229C1.49985 16.0229 1.60645 15.9822 1.68786 15.9008L15.1433 2.44327V10.6053C15.1433 10.8357 15.3296 11.0221 15.5599 11.0221C15.7902 11.0221 15.9766 10.8357 15.9766 10.6053V1.43726C15.9766 1.2069 15.7902 1.02051 15.5599 1.02051Z"
        fill={fill}
      />
    </g>
    <defs>
      <clipPath id="clip0_arrow">
        <rect width="15" height="15.94" fill="white" transform="translate(0.976562 0.391602)" />
      </clipPath>
    </defs>
  </svg>
);

// Decorative background shape
const BackgroundShape = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    width="137"
    height="104"
    viewBox="0 0 137 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M26.9118 3.93221C27.2639 2.67681 27.44 2.04911 27.8038 1.58299C28.1249 1.1716 28.5477 0.851069 29.0305 0.653059C29.5776 0.428711 30.2295 0.428711 31.5334 0.428711H131.019C133.214 0.428711 134.312 0.428711 135.043 0.886939C135.683 1.28822 136.148 1.91622 136.345 2.64548C136.571 3.47821 136.25 4.52821 135.61 6.62819L107.142 100.028C106.77 101.249 106.584 101.859 106.219 102.311C105.898 102.71 105.479 103.021 105.003 103.212C104.464 103.429 103.826 103.429 102.55 103.429H5.33183C3.18103 103.429 2.10563 103.429 1.38094 102.981C0.74607 102.589 0.280124 101.974 0.0740595 101.257C-0.16116 100.439 0.12931 99.4031 0.710251 97.3322L26.9118 3.93221Z"
      fill="#EEFFF5"
    />
  </svg>
);

interface ServiceCardProps {
  title: string;
  description: string;
  buttonText: string;
  iconSrc: string;
  isPrimary?: boolean;
}

import Image from "next/image";

const ServiceCard = ({ title, description, buttonText, iconSrc, isPrimary = false }: ServiceCardProps) => {
  return (
    <div className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[480px] lg:max-w-[550px] xl:max-w-[600px] h-[300px] sm:h-[350px] md:h-[388px] mx-auto">
      {/* Card border */}
      <div className="absolute inset-0 rounded-xl border border-[#B3BAC5]"></div>

      {/* Card content */}
      <div className="relative w-full h-full rounded-xl px-4 sm:px-6">
        {/* Background decorative shape */}
        <div className="absolute left-1/2 top-[30px] sm:top-[40px] md:top-[46px] transform -translate-x-1/2">
          <BackgroundShape className="w-[100px] h-[75px] sm:w-[120px] sm:h-[90px] md:w-[139px] md:h-[103px]" />
        </div>

        {/* Icon */}
        <div className="absolute left-1/2 top-[45px] sm:top-[60px] md:top-[70px] transform -translate-x-1/2 flex justify-center items-center">
          <Image
            src={iconSrc}
            alt="Service icon"
            width={91}
            height={64}
            className="object-contain w-[60px] h-[42px] sm:w-[75px] sm:h-[53px] md:w-[91px] md:h-[64px]"
            priority
          />
        </div>

        {/* Title */}
        <div className="absolute left-1/2 top-[110px] sm:top-[135px] md:top-[154px] transform -translate-x-1/2 w-full px-2 sm:px-4">
          <h3 className="text-[#175730] text-center font-inter text-[18px] sm:text-[20px] md:text-2xl font-semibold leading-tight">
            {title}
          </h3>
        </div>

        {/* Description */}
        <div className="absolute left-1/2 top-[145px] sm:top-[175px] md:top-[200px] transform -translate-x-1/2 w-full px-2 sm:px-4 md:px-6">
          <p className="text-[#343434] text-center font-inter text-[14px] sm:text-[16px] md:text-lg font-normal leading-[18px] sm:leading-[20px] md:leading-[24px] h-[36px] sm:h-[40px] md:h-[48px] overflow-hidden">
            {description}
          </p>
        </div>

        {/* Button */}
        <div className="absolute left-1/2 top-[200px] sm:top-[240px] md:top-[270px] transform -translate-x-1/2 w-full px-4 flex justify-center">
          <button
            className={`w-full max-w-[180px] sm:max-w-[200px] md:max-w-[220px] h-[45px] sm:h-[50px] md:h-[55px] px-4 sm:px-6 md:px-[31px] py-2 sm:py-3 md:py-[19px] rounded-[12px] sm:rounded-[14px] md:rounded-[16px] shadow-lg flex justify-center items-center gap-2 sm:gap-3 md:gap-[12px] font-inter text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-normal uppercase tracking-wide transition-opacity duration-200
              ${isPrimary
                ? 'bg-[#175730] text-white hover:opacity-90'
                : 'bg-white text-[#175730] border border-[#175730] hover:bg-[#f3fdf7]'}
            `}
          >
            <span className="font-inter text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-normal uppercase tracking-wide">
              {buttonText}
            </span>
            <ArrowIcon
              className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] md:w-[20px] md:h-[20px]"
              fill={isPrimary ? "white" : "#175730"}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const WorkWithUs = () => {
  const services = [
    {
      title: "Active Deal",
      description: "I have an active deal and would like a Term Sheet",
      buttonText: "Find a home",
      iconSrc: "/work1.png",
      width: 182,
      isPrimary: false
    },
    {
      title: "Pre-Approval",
      description: "I'd like to to get pre-approved so I can find my next deal.",
      buttonText: "Find a home",
      iconSrc: "/work2.png",
      width: 182,
      isPrimary: true
    },
    {
      title: "Schedule A Call",
      description: "I'd like to schedule a call.",
      buttonText: "Find a home",
      iconSrc: "/work3.png",
      width: 182,
      isPrimary: false
    }
  ];

  return (
    <section className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-8 sm:py-12 md:py-16 lg:py-[120px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[154px] relative bg-white">
      {/* Header */}
      <div className="flex flex-col justify-center items-center gap-6 sm:gap-8 md:gap-12 relative">
        {/* Title and description */}
        <div className="flex w-full max-w-[1420px] flex-col justify-center items-center gap-3 sm:gap-4 relative">
          {/* Main title */}
          <h1 className="text-[#165831] text-center font-inter text-[24px] sm:text-[32px] md:text-[42px] lg:text-[56px] font-extrabold leading-normal tracking-[0.5px] sm:tracking-[1px] md:tracking-[1.5px] lg:tracking-[2.24px] uppercase">
            Interested In Working With Us?
          </h1>

          {/* Subtitle */}
          <p className="self-stretch text-[#343434] text-center font-inter text-[16px] sm:text-[18px] md:text-[20px] lg:text-2xl font-semibold leading-normal tracking-[0.08px] sm:tracking-[0.12px] md:tracking-[0.18px] lg:tracking-[0.24px] px-4 sm:px-6 md:px-8">
            Get the financing you need to make your next move
          </p>
        </div>

        {/* Service cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 w-full max-w-[1800px]">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithUs;
