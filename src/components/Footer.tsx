
const Footer = () => {
  return (
    <footer className="bg-[#1B5E3A] text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start max-w-7xl mx-auto">
        {/* Company */}
        <div className="flex flex-col items-start">
          <h3 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold mb-4 sm:mb-6">Company</h3>
          <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-lg font-normal">
            <li className="hover:text-gray-200 cursor-pointer transition-colors">About</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Fix And Flip Loans</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">DSCR Rental Loans</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Ground Up Construction Loans</li>
          </ul>
          <h4 className="mt-6 sm:mt-8 text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-2">Where We Lend</h4>
          <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-lg font-normal">
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Florida</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Texas</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Georgia</li>
          </ul>
        </div>

        {/* Top Cities */}
        <div className="flex flex-col items-start">
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-4 sm:mb-6">Top Cities We Lend In</h3>
          <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-lg font-normal">
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Orlando</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Tampa</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Miami</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Jacksonville</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Houston</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Austin</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Dallas</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">San Antonio</li>
          </ul>
        </div>

        {/* Top Resources */}
        <div className="flex flex-col items-start">
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-4 sm:mb-6">Top Resources</h3>
          <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-lg font-normal">
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Loan Calculator</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">What is a Hard Money Loan</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">How to find fix and flip deals</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Best Cities for Fix and Flips</li>
          </ul>
          <h4 className="mt-6 sm:mt-8 text-[16px] sm:text-[18px] md:text-[20px] font-semibold mb-2">Useful Links</h4>
          <ul className="space-y-1 sm:space-y-2 text-[14px] sm:text-[16px] md:text-lg font-normal">
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-gray-200 cursor-pointer transition-colors">Terms of Use</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col items-start">
          <h3 className="text-[18px] sm:text-[20px] md:text-[24px] font-semibold mb-4 sm:mb-6">Contact Us</h3>
          <div className="mb-4 w-full">
            <div className="font-medium text-[14px] sm:text-[16px] md:text-lg mb-1">Email</div>
            <div className="flex items-center space-x-2">
              <span className="inline-block">
                {/* Envelope SVG */}
                <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <span className="text-[14px] sm:text-[16px] md:text-lg break-all">loans@ridgestreetcap.com</span>
            </div>
          </div>
          <div className="mb-6 sm:mb-8 w-full">
            <div className="font-medium text-[14px] sm:text-[16px] md:text-lg mb-1">Direct/Text</div>
            <div className="flex items-center space-x-2">
              <span className="inline-block">
                {/* Phone SVG */}
                <svg width="20" height="20" className="sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              </span>
              <span className="text-[14px] sm:text-[16px] md:text-lg">Phone: 786-304-2751</span>
            </div>
          </div>
          <div className="w-full flex flex-col items-start">
            <div className="bg-white rounded-lg py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-6 mb-4 sm:mb-6 flex items-center w-full max-w-[280px] sm:max-w-[320px]">
              <span className="text-[#1B5E3A] text-[18px] sm:text-[20px] md:text-2xl font-bold mr-1">RIDGE</span>
              <span className="text-gray-400 text-[18px] sm:text-[20px] md:text-2xl font-bold">STREET</span>
            </div>
            <div className="flex space-x-3 sm:space-x-4 md:space-x-6 mt-2 items-start">
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-300 transition-colors">
                <svg width="24" height="24" className="sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6zM2 9h4v12H2zM4 4a2 2 0 110 4 2 2 0 010-4z" /></svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:text-gray-300 transition-colors">
                <svg width="24" height="24" className="sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
              </a>
              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="hover:text-gray-300 transition-colors">
                <svg width="24" height="24" className="sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .35.04.7.11 1.03C7.69 5.4 4.07 3.6 1.64.96c-.38.65-.6 1.4-.6 2.2 0 1.52.77 2.86 1.94 3.65A4.48 4.48 0 01.96 6v.06c0 2.13 1.52 3.9 3.54 4.3-.37.1-.76.16-1.16.16-.28 0-.56-.03-.83-.08.56 1.76 2.19 3.04 4.13 3.08A9.06 9.06 0 010 19.54a12.8 12.8 0 006.92 2.03c8.3 0 12.85-6.88 12.85-12.85 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" /></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:text-gray-300 transition-colors">
                <svg width="24" height="24" className="sm:w-7 sm:h-7 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth={2} stroke="currentColor" fill="none" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth={2} stroke="currentColor" fill="none" /><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" /></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
