
'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 w-full h-[60px] sm:h-[70px] lg:h-[80px] px-4 sm:px-8 lg:px-[154px] py-3 sm:py-4 lg:py-5 flex justify-between items-center bg-white shadow-sm z-50">
        {/* Logo */}
        <div className="flex items-center relative">
          <span className="text-[#1B5E3A] text-xl sm:text-2xl lg:text-3xl font-bold mr-1">RIDGE</span>
          <span className="text-gray-400 text-xl sm:text-2xl lg:text-3xl font-bold">STREET</span>
        </div>

        {/* Desktop Navigation Items */}
        <div className="hidden lg:flex justify-center items-center gap-6 xl:gap-8 relative">
          <a href="#" className="text-gray-700 font-inter text-sm xl:text-base font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer">
            Fix and Flip
          </a>

          <a href="#loan-products" className="text-gray-700 font-inter text-sm xl:text-base font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer">
            Rental Loans
          </a>

          <a href="#where-we-lend" className="text-gray-700 font-inter text-sm xl:text-base font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer">
            Where We Lend
          </a>

          <a href="#about-us" className="text-gray-700 font-inter text-sm xl:text-base font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer">
            About Us
          </a>

          <a href="#resources" className="text-gray-700 font-inter text-sm xl:text-base font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer">
            Resources
          </a>

          {/* Desktop CTA Button */}
          <button className="flex px-4 xl:px-6 py-2 xl:py-3 justify-center items-center rounded-md bg-[#1B5E3A] hover:bg-[#165e31] relative border-none cursor-pointer transition-all duration-200 ease-in-out">
            <span className="text-white font-inter text-xs xl:text-sm font-semibold leading-normal uppercase relative">
              GET APPROVED ONLINE
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className={`block w-6 h-0.5 bg-[#1B5E3A] transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#1B5E3A] transition-all duration-300 mt-1 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-[#1B5E3A] transition-all duration-300 mt-1 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`lg:hidden fixed inset-0 bg-white z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 px-8">
          {/* Mobile Navigation Items */}
          <div className="flex flex-col items-center gap-6">
            <a href="#" className="text-gray-700 font-inter text-xl font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer" onClick={toggleMobileMenu}>
              Fix and Flip
            </a>
            <a href="#loan-products" className="text-gray-700 font-inter text-xl font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer" onClick={toggleMobileMenu}>
              Rental Loans
            </a>
            <a href="#where-we-lend" className="text-gray-700 font-inter text-xl font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer" onClick={toggleMobileMenu}>
              Where We Lend
            </a>
            <a href="#about-us" className="text-gray-700 font-inter text-xl font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer" onClick={toggleMobileMenu}>
              About Us
            </a>
            <a href="#resources" className="text-gray-700 font-inter text-xl font-medium leading-normal relative hover:text-[#1B5E3A] transition-colors cursor-pointer" onClick={toggleMobileMenu}>
              Resources
            </a>
          </div>

          {/* Mobile CTA Button */}
          <button className="flex px-6 py-3 justify-center items-center rounded-md bg-[#1B5E3A] hover:bg-[#165e31] relative border-none cursor-pointer transition-all duration-200 ease-in-out mt-4" onClick={toggleMobileMenu}>
            <span className="text-white font-inter text-sm font-semibold leading-normal uppercase relative">
              GET APPROVED ONLINE
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

// Export a spacer component that other components can use to account for the fixed navbar
export const NavbarSpacer = () => {
  return <div className="h-[60px] sm:h-[70px] lg:h-[80px]" />;
};
