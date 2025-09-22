import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOnLightSection, setIsOnLightSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = document.querySelectorAll('section, div[class*="bg-white"], div[class*="bg-gray-100"], div[class*="from-gray-100"]');
      
      let onLightSection = false;
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          const bgClasses = section.className;
          if (bgClasses.includes('bg-white') || bgClasses.includes('bg-gray-100') || bgClasses.includes('from-gray-100')) {
            onLightSection = true;
          }
        }
      });
      
      setIsOnLightSection(onLightSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-0 py-2 sm:py-3 font-['Slackey'] bg-transparent backdrop-blur-sm transition-all duration-300">
      <div className="w-full flex justify-between items-center lg:px-8 px-3 sm:px-4">
        {/* Logo Left (flush to edge) */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/final-logo-white_name.svg"
            alt="Skull Engine"
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-46"
          />
        </Link>

        {/* Desktop Menu (centered) */}
        <div className="hidden lg:flex flex-1 justify-center items-center space-x-4 xl:space-x-3">
         
          <Link to="/animation" className={`text-orange-600 hover:text-white text-xs transition-colors duration-300`}>
            3D Animation
          </Link>
          <Link to="/vfx" className={`text-orange-600 hover:text-white text-xs transition-colors duration-300`}>
            VFX
          </Link>
          <Link to="/interior" className={`text-orange-600 hover:text-white text-xs transition-colors duration-300`}>
            3D Interior & Exterior
          </Link>
          <Link to="/video" className={`text-orange-600 hover:text-white text-xs transition-colors duration-300`}>
            Video Editing
          </Link>
          <Link to="/graphic" className={`text-orange-600 hover:text-white text-xs transition-colors duration-300`}>
            Graphic Design
          </Link>
          <Link to="/digital" className={`text-orange-600 hover:text-white text-xs transition-colors duration-300`}>
            Digital Marketing
          </Link>
          <div className="relative group">
            <Link to="/web" className={`text-orange-600 hover:text-white text-xs transition-colors duration-300 cursor-pointer select-none inline-block`}>
              Web & App
            </Link>
            <div className={`invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute top-full left-1/2 -translate-x-1/2 mt-2 min-w-[12rem] rounded-lg border ${isOnLightSection ? 'bg-transparent border-white/60 ring-1 ring-black/10 shadow-xl' : 'bg-transparent border-white/10 ring-1 ring-white/15 shadow-xl'} transition-opacity duration-200 z-50`}>
              <div className="py-1.5">
                <Link to="/web" className={`text-orange-600 hover:text-white block px-3 py-1.5 text-xs transition-colors duration-200`}>
                  Web Development
                </Link>
                <Link to="/app-development" className={`text-orange-600 hover:text-white block px-3 py-1.5 text-xs transition-colors duration-200`}>
                  App Development
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Button Right */}
        <div className="hidden lg:block">
          <Link
            to="/contact"
            className={`px-3 xl:px-4 py-1.5 xl:py-2 border-2 rounded-lg xl:rounded-xl text-sm xl:text-base transition-all duration-300 shadow-lg ${
              isOnLightSection 
                ? 'border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' 
                : 'border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black'
            }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`lg:hidden focus:outline-none transition-colors duration-300 ${
            isOnLightSection ? 'text-black' : 'text-white'
          }`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full border-t border-gray-800 py-3 sm:py-4">
          <div className="flex flex-col space-y-3 px-4">
            <Link to="/" className={`text-orange-400 hover:text-white transition-colors duration-300`} onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/animation" className={`text-orange-400 hover:text-white transition-colors duration-300`} onClick={toggleMenu}>
              Animation
            </Link>
            <Link to="/app-development" className={`text-orange-400 hover:text-white transition-colors duration-300`} onClick={toggleMenu}>
              App Development
            </Link>
            <Link to="/digital" className={`text-orange-400 hover:text-white transition-colors duration-300`} onClick={toggleMenu}>
              Digital Marketing
            </Link>
            <Link to="/web" className={`text-orange-400 hover:text-white transition-colors duration-300`} onClick={toggleMenu}>
              Web Development
            </Link>
            <Link
              to="/contact"
              className={`px-4 py-2 border-2 rounded-lg text-sm transition-all duration-300 shadow-lg text-center mt-2 ${
                isOnLightSection 
                  ? 'border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' 
                  : 'border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-black'
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
