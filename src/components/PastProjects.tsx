import Image from 'next/image';
import React from 'react';

// ProjectCard component
interface ProjectCardProps {
  image: string;
  imageAlt: string;
  title: string;
  location: string;
  price: string;
  squareFeet: string;
  bedrooms: string;
  bathrooms: string;
  garages: string;
  loanAmount: string;
  ltv: string;
  rate: string;
  term: string;
  forSale?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  imageAlt,
  title,
  location,
  price,
  squareFeet,
  bedrooms,
  bathrooms,
  garages,
  loanAmount,
  ltv,
  rate,
  term,
  forSale = true,
}) => {
  return (
    <div className="relative w-full max-w-[480px] mx-auto">
      {/* Main Card Container */}
      <div className="relative w-full bg-white rounded-[12px] overflow-hidden shadow-lg">
        {/* Property Image */}
        <div className="relative w-full h-[300px] overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            width={480}
            height={300}
            className="w-full h-full object-cover"
          />
          {/* For Sale Badge */}
          {forSale && (
            <div className="absolute top-[16px] left-[16px] bg-[#175730] text-white px-3 py-1 rounded-[4px] text-sm font-medium">
              For Sale
            </div>
          )}
        </div>

        {/* Card Content */}
        <div className="p-8 pb-0">
          {/* Property Title and Location */}
          <div className="text-center mb-5">
            <h3 className="text-[#175730] font-inter text-[20px] font-bold mb-3">
              {title}
            </h3>
            <div className="flex items-center justify-center gap-1">
              <svg className="w-4 h-4 text-[#175730]" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5375 18.6416C9.43526 17.7014 8.41357 16.6707 7.48312 15.5601C6.08682 13.8924 4.42871 11.4088 4.42871 9.04205C4.42811 7.83334 4.78608 6.65162 5.45734 5.64645C6.1286 4.64127 7.08296 3.85781 8.19965 3.39524C9.31634 2.93266 10.5452 2.81175 11.7306 3.04782C12.916 3.28388 14.0048 3.8663 14.8591 4.72137C15.4278 5.28762 15.8787 5.96106 16.1855 6.7027C16.4922 7.44434 16.6489 8.23946 16.6463 9.04205C16.6463 11.4088 14.9882 13.8924 13.5919 15.5601C12.6615 16.6706 11.6398 17.7014 10.5375 18.6416ZM10.5375 6.42399C9.84317 6.42399 9.17725 6.69982 8.68627 7.1908C8.19529 7.68178 7.91946 8.34769 7.91946 9.04205C7.91946 9.7364 8.19529 10.4023 8.68627 10.8933C9.17725 11.3843 9.84317 11.6601 10.5375 11.6601C11.2319 11.6601 11.8978 11.3843 12.3888 10.8933C12.8798 10.4023 13.1556 9.7364 13.1556 9.04205C13.1556 8.34769 12.8798 7.68178 12.3888 7.1908C11.8978 6.69982 11.2319 6.42399 10.5375 6.42399Z" fill="#175730" />
              </svg>
              <span className="text-[#666] font-inter text-[16px]">
                {location}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#E5E5E5] mb-5" />

          {/* Property Features Grid */}
          <div className="grid grid-cols-2 gap-4 mb-5">
            {/* Square Feet */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#175730] rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-[1px]"></div>
              </div>
              <span className="text-[#333] text-[14px]">{squareFeet}</span>
            </div>

            {/* Garages */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#175730] rounded-sm flex items-center justify-center">
                <div className="w-3 h-2 bg-white rounded-[1px]"></div>
              </div>
              <span className="text-[#333] text-[14px]">{garages}</span>
            </div>

            {/* Bedrooms */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#175730] rounded-sm flex items-center justify-center">
                <div className="w-3 h-2 bg-white rounded-[1px]"></div>
              </div>
              <span className="text-[#333] text-[14px]">{bedrooms}</span>
            </div>

            {/* Bathrooms */}
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#175730] rounded-sm flex items-center justify-center">
                <div className="w-2 h-3 bg-white rounded-full"></div>
              </div>
              <span className="text-[#333] text-[14px]">{bathrooms}</span>
            </div>
          </div>

          {/* Loan Details Grid */}
          <div className="grid grid-cols-2 gap-5 text-[14px] mb-5">
            <div>
              <div className="text-[#666] mb-2">• Loan Amount: <span className="text-[#175730] font-semibold">{loanAmount}</span></div>
              <div className="text-[#666]">• Rate: <span className="text-[#175730] font-semibold">{rate}</span></div>
            </div>
            <div>
              <div className="text-[#666] mb-2">• LTV: <span className="text-[#175730] font-semibold">{ltv}</span></div>
              <div className="text-[#666]">• Term: <span className="text-[#175730] font-semibold">{term}</span></div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#E5E5E5] mb-5" />
        </div>

        {/* Price Button - Full Width Green extending to bottom */}
        <button className="w-full bg-[#175730] text-white px-8 py-4 font-inter text-[20px] font-bold hover:opacity-90 transition-opacity rounded-b-[12px]">
          {price}
        </button>
      </div>
    </div>
  );
};

// Main PastProjects component
const PastProjects: React.FC = () => {
  const projectsData = [
    {
      image: "/Project.png",
      imageAlt: "4321 Alton Rd Property",
      title: "4321 Alton Rd, Miami Beach",
      location: "Miami, Florida",
      price: "$3,45,000",
      squareFeet: "2350 Square Feet",
      bedrooms: "2 Bedrooms",
      bathrooms: "3 Bathrooms",
      garages: "4 Garages",
      loanAmount: "$328,000",
      ltv: "84.65%",
      rate: "11.75%",
      term: "12 Months",
    },
    {
      image: "/Project.png",
      imageAlt: "AMLI 7th Street Station Property",
      title: "AMLI 7th Street Station",
      location: "Houston, Texas",
      price: "$3,45,000",
      squareFeet: "2350 Square Feet",
      bedrooms: "2 Bedrooms",
      bathrooms: "3 Bathrooms",
      garages: "4 Garages",
      loanAmount: "$328,000",
      ltv: "84.65%",
      rate: "11.75%",
      term: "12 Months",
    },
    {
      image: "/Project.png",
      imageAlt: "201 South Orange Avenue Property",
      title: "201 South Orange Avenue",
      location: "Orlando, Florida",
      price: "$3,45,000",
      squareFeet: "2350 Square Feet",
      bedrooms: "2 Bedrooms",
      bathrooms: "3 Bathrooms",
      garages: "4 Garages",
      loanAmount: "$328,000",
      ltv: "84.65%",
      rate: "11.75%",
      term: "12 Months",
    },
  ];

  return (
    <section className="bg-[#175730] py-16 px-4 relative">
      {/* Section Header */}
      <div className="text-left mb-12 px-30">
        <h2 className="text-white font-inter text-[48px] font-bold leading-tight mb-4">
          PAST PROJECTS
        </h2>
        <p className="text-white font-inter text-[18px] font-normal leading-relaxed">
          A Proven Track Record Funding Projects Like These
        </p>
      </div>

      {/* Projects Container with Navigation */}
      <div className="relative max-w-7xl mx-auto">
        {/* Left Navigation Arrow */}
        <button className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 transition-all shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 24L12 16L20 8" stroke="#175730" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Right Navigation Arrow */}
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white hover:bg-gray-100 rounded-full p-3 transition-all shadow-lg">
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 24L20 16L12 8" stroke="#175730" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>

      {/* Get Terms Button */}
      <div className="flex justify-center mt-12">
        <button className="relative flex items-center bg-white rounded-[16px] shadow-lg px-12 py-5 group hover:opacity-90 transition-opacity">
          <span className="text-[#175730] font-inter text-[24px] font-bold leading-normal">Get Terms For Your Project</span>
          <span className="ml-8 flex items-center">
            <svg width="77" height="74" viewBox="0 0 77 74" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
              <path d="M18.0936 3.0873C18.5341 1.30054 20.137 0.0449219 21.9773 0.0449219H71.7376C74.3346 0.0449219 76.243 2.4811 75.6213 5.00254L59.5939 70.0025C59.1534 71.7893 57.5505 73.0449 55.7102 73.0449H5.94986C3.35289 73.0449 1.44445 70.6087 2.06618 68.0873L18.0936 3.0873Z" fill="#175730" />
              <path d="M41.0723 23.5918C41.5382 23.619 41.9788 23.8032 42.3242 24.1113L42.4668 24.25L42.4727 24.2568L42.4785 24.2646L51.8477 35.1953C52.1678 35.5684 52.3437 36.0435 52.3438 36.5352C52.3438 36.9655 52.2092 37.3837 51.9609 37.7314L51.8477 37.876L42.4668 48.8203C42.1049 49.212 41.6047 49.4484 41.0723 49.4795C40.5399 49.5106 40.0164 49.3342 39.6113 48.9873C39.2063 48.6404 38.9515 48.15 38.9004 47.6191C38.8493 47.0883 39.0056 46.5584 39.3369 46.1406L39.3428 46.1328L39.3486 46.126L47.5674 36.5352L39.3486 26.9453L39.3428 26.9375L39.3369 26.9307C39.0056 26.5129 38.8494 25.9829 38.9004 25.4521C38.9515 24.9214 39.2063 24.4309 39.6113 24.084C40.0164 23.7371 40.5399 23.5607 41.0723 23.5918Z" fill="white" stroke="white" />
              <path d="M28.5654 23.5508C29.1105 23.5933 29.6163 23.8512 29.9717 24.2666L39.3408 35.1973H39.3418C39.661 35.5706 39.8359 36.0459 39.8359 36.5371C39.8359 37.0283 39.661 37.5036 39.3418 37.877L39.3408 37.8779L29.9658 48.8154L29.959 48.8223C29.5971 49.2139 29.0978 49.4503 28.5654 49.4814C28.0331 49.5125 27.5095 49.3361 27.1045 48.9893C26.6994 48.6424 26.4447 48.1519 26.3936 47.6211C26.3424 47.0903 26.4987 46.5604 26.8301 46.1426L26.8359 46.1348L26.8418 46.1279L35.0605 36.5371L26.8389 26.9473V26.9463C26.4835 26.5308 26.3071 25.9914 26.3496 25.4463C26.3921 24.9012 26.65 24.3954 27.0654 24.04C27.4809 23.6847 28.0204 23.5083 28.5654 23.5508Z" fill="white" stroke="white" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
};

export default PastProjects;
