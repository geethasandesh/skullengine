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
    <nav className="fixed top-0 left-0 w-full z-50 px-0 py-3 font-['Slackey'] bg-transparent backdrop-blur-sm transition-all duration-300">
      <div className="w-full flex justify-between items-center md:px-8 px-4">
        {/* Logo Left (flush to edge) */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/final-logo-white_name.svg"
            alt="Skull Engine"
            className="md:w-66 w-22 mr-2"
          />
        </Link>

        {/* Desktop Menu (centered) */}
        <div className="hidden md:flex flex-1 justify-center space-x-10">
          <Link to="/" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} text-sm transition-colors duration-300`}>
            Home
          </Link>
          <Link to="/animation" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} text-sm transition-colors duration-300`}>
            Animation
          </Link>
          <Link to="/app-development" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} text-sm transition-colors duration-300`}>
            App Development
          </Link>
          <Link to="/digital" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} text-sm transition-colors duration-300`}>
            Digital Marketing
          </Link>
          <Link to="/web" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} text-sm transition-colors duration-300`}>
            Web Development
          </Link>
        </div>

        {/* Contact Button Right */}
        <div className="hidden md:block">
          <Link
            to="/contact"
            className={`px-5 py-2 border-2 rounded-xl text-lg transition-all duration-300 shadow-lg ${
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
          className={`md:hidden focus:outline-none transition-colors duration-300 ${
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
        <div className="md:hidden bg-black/95 backdrop-blur-md absolute top-full left-0 w-full border-t border-gray-800 py-4">
          <div className="flex flex-col space-y-4 px-4">
            <Link to="/" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} transition-colors duration-300`} onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/animation" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} transition-colors duration-300`} onClick={toggleMenu}>
              Animation
            </Link>
            <Link to="/app-development" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} transition-colors duration-300`} onClick={toggleMenu}>
              App Development
            </Link>
            <Link to="/digital" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} transition-colors duration-300`} onClick={toggleMenu}>
              Digital Marketing
            </Link>
            <Link to="/web" className={`${isOnLightSection ? 'text-black hover:text-orange-600' : 'text-white hover:text-orange-400'} transition-colors duration-300`} onClick={toggleMenu}>
              Web Development
            </Link>
            <Link
              to="/contact"
              className={`px-5 py-2 border-2 rounded-xl text-lg transition-all duration-300 shadow-lg text-center ${
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
