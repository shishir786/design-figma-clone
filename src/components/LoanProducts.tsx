"use client";
import Image from "next/image";

const CheckmarkIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17 3.33782C15.5291 2.48697 13.8214 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 11.3151 21.9311 10.6462 21.8 10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M8 12.5C8 12.5 9.5 12.5 11.5 16C11.5 16 17.0588 6.83333 22 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const InfoIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M11.9922 8H12.0012"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

interface LoanProductCardProps {
  title: string;
  subtitle: string;
  features: string[];
  icon: string;
  isActive?: boolean;
  hasDecorative?: boolean;
}

const LoanProductCard = ({ title, subtitle, features, icon, isActive = false, hasDecorative = false }: LoanProductCardProps) => {
  const cardClasses = isActive
    ? "bg-[#165831] text-white"
    : "bg-white text-[#165831]";

  const iconBgClasses = isActive
    ? "bg-white"
    : "bg-[#165831]";

  return (
    <div className="relative flex-1 min-w-0">
      <div className={`relative flex flex-col items-center gap-4 sm:gap-6 p-4 sm:p-6 md:p-8 rounded-[20px] h-full min-h-[500px] sm:min-h-[550px] md:min-h-[600px] shadow-[0_4px_20px_rgba(0,0,0,0.1)] ${cardClasses}`}>
        {/* Icon Container */}
        <div className={`flex w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] md:w-[100px] md:h-[100px] p-3 sm:p-4 justify-center items-center rounded-[12px] sm:rounded-[16px] ${iconBgClasses} flex-shrink-0`}>
          <Image
            src={icon}
            alt={title}
            width={64}
            height={64}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-3 sm:gap-4 flex-1 w-full">
          {/* Title Section */}
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-bold leading-tight text-center">
              {title}
            </h3>
            <p className="text-xs sm:text-sm font-normal leading-relaxed text-center opacity-90">
              {subtitle}
            </p>
          </div>

          {/* Features List */}
          <div className="flex flex-col items-start gap-2 sm:gap-3 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 w-full">
                <div className="flex-shrink-0">
                  <CheckmarkIcon />
                </div>
                <div className="text-xs sm:text-sm font-normal leading-relaxed flex-1">
                  {feature}
                </div>
              </div>
            ))}
          </div>

          {/* Learn More Link */}
          <div className="flex items-center gap-2 sm:gap-3 w-full">
            <div className="flex-shrink-0">
              <InfoIcon />
            </div>
            <div className="text-xs sm:text-sm font-bold leading-relaxed underline decoration-solid flex-1">
              Learn More
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="relative flex flex-col justify-center items-center w-full mt-auto">
          <button className={`relative flex items-center rounded-[12px] sm:rounded-[16px] shadow-lg px-4 sm:px-6 md:px-8 py-3 sm:py-4 group hover:opacity-90 transition-opacity ${isActive ? 'bg-white' : 'bg-[#175730]'}`}>
            <span className={`font-inter text-[14px] sm:text-[16px] md:text-[18px] font-bold leading-normal uppercase tracking-wide ${isActive ? 'text-[#175730]' : 'text-white'}`}>
              Get Approved Online
            </span>
            <span className="ml-4 sm:ml-6 flex items-center">
              <svg width="77" height="74" viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                <path d="M18.0936 3.0873C18.5341 1.30054 20.137 0.0449219 21.9773 0.0449219H71.7376C74.3346 0.0449219 76.243 2.4811 75.6213 5.00254L59.5939 70.0025C59.1534 71.7893 57.5505 73.0449 55.7102 73.0449H5.94986C3.35289 73.0449 1.44445 70.6087 2.06618 68.0873L18.0936 3.0873Z" fill={isActive ? "#175730" : "white"} />
                <path d="M41.0723 23.5918C41.5382 23.619 41.9788 23.8032 42.3242 24.1113L42.4668 24.25L42.4727 24.2568L42.4785 24.2646L51.8477 35.1953C52.1678 35.5684 52.3437 36.0435 52.3438 36.5352C52.3438 36.9655 52.2092 37.3837 51.9609 37.7314L51.8477 37.876L42.4668 48.8203C42.1049 49.212 41.6047 49.4484 41.0723 49.4795C40.5399 49.5106 40.0164 49.3342 39.6113 48.9873C39.2063 48.6404 38.9515 48.15 38.9004 47.6191C38.8493 47.0883 39.0056 46.5584 39.3369 46.1406L39.3428 46.1328L39.3486 46.126L47.5674 36.5352L39.3486 26.9453L39.3428 26.9375L39.3369 26.9307C39.0056 26.5129 38.8494 25.9829 38.9004 25.4521C38.9515 24.9214 39.2063 24.4309 39.6113 24.084C40.0164 23.7371 40.5399 23.5607 41.0723 23.5918Z" fill={isActive ? "white" : "#175730"} stroke={isActive ? "white" : "#175730"} />
                <path d="M28.5654 23.5508C29.1105 23.5933 29.6163 23.8512 29.9717 24.2666L39.3408 35.1973H39.3418C39.661 35.5706 39.8359 36.0459 39.8359 36.5371C39.8359 37.0283 39.661 37.5036 39.3418 37.877L39.3408 37.8779L29.9658 48.8154L29.959 48.8223C29.5971 49.2139 29.0978 49.4503 28.5654 49.4814C28.0331 49.5125 27.5095 49.3361 27.1045 48.9893C26.6994 48.6424 26.4447 48.1519 26.3936 47.6211C26.3424 47.0903 26.4987 46.5604 26.8301 46.1426L26.8359 46.1348L26.8418 46.1279L35.0605 36.5371L26.8389 26.9473V26.9463C26.4835 26.5308 26.3071 25.9914 26.3496 25.4463C26.3921 24.9012 26.65 24.3954 27.0654 24.04C27.4809 23.6847 28.0204 23.5083 28.5654 23.5508Z" fill={isActive ? "white" : "#175730"} stroke={isActive ? "white" : "#175730"} />
              </svg>
            </span>
          </button>
        </div>
      </div>

      {/* Decorative Bars for middle card */}
      {hasDecorative && (
        <>
          <div className="absolute -right-6 sm:-right-9 -bottom-2 sm:-bottom-3 w-[320px] sm:w-[400px] md:w-[489px] h-8 sm:h-10 bg-[#165831] transform -rotate-[5deg] -z-10" />
          <div className="absolute -left-4 sm:-left-7 -top-2 sm:-top-3 w-[320px] sm:w-[400px] md:w-[489px] h-8 sm:h-10 bg-[#165831] transform -rotate-[5deg] -z-10" />
        </>
      )}
    </div>
  );
};

export default function LoanProducts() {
  const loanProducts = [
    {
      title: "Fix and Flip",
      subtitle: "Funding For Rehab + Purchase",
      features: [
        "$50,000 up to $3,000,000",
        "Interest Rate 10.5%-12.99%",
        "Origination Fee From 1.5%",
        "Up to 85% of Purchase and 100% of Rehab"
      ],
      icon: "/loan1.png",
      width: 160,
      isActive: true,
      hasDecorative: false
    },
    {
      title: "Rental Property",
      subtitle: "30 Year DSCR loans in Florida and Texas",
      features: [
        "Up to $1,500,000",
        "Interest Rate 6.75%-8.25%",
        "Origination Fee From 1.5%",
        "Up to 85% of LTV"
      ],
      icon: "/loan2.png",
      width: 160,
      isActive: false,
      hasDecorative: true
    },
    {
      title: "Ground Up Construction",
      subtitle: "Ground Up Construction loans in Florida and Texas",
      features: [
        "Up to $3,500,000",
        "Interest Rate 11.25%-13.25%",
        "Origination Fee From 1.5%",
        "Up to 80% of LTC"
      ],
      icon: "/loan3.png",
      width: 160,
      isActive: false,
      hasDecorative: false
    }
  ];

  return (
    <section id="loan-products" className="flex w-full py-20 px-6 lg:py-[80px] lg:px-[154px] flex-col justify-center items-center gap-20 bg-white font-[var(--font-inter)]">
      {/* Title */}
      <div className="w-full max-w-[700px] text-center">
        <h2 className="text-[#165831] text-4xl lg:text-[56px] font-extrabold leading-normal tracking-[2.24px] uppercase">
          Loan Products
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex flex-col lg:flex-row items-stretch gap-10 w-full max-w-none">
        {loanProducts.map((product, index) => (
          <LoanProductCard
            key={index}
            title={product.title}
            subtitle={product.subtitle}
            features={product.features}
            icon={product.icon}
            isActive={product.isActive}
            hasDecorative={product.hasDecorative}
          />
        ))}
      </div>
    </section>
  );
}
