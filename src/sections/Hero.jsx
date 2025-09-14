// Hero.jsx
import React, { useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  return (
    <div 
      ref={heroRef} 
      className="min-h-screen bg-black text-white flex items-center relative overflow-hidden 
                 bg-[url('/images/skull1bg.jpg')] bg-cover bg-center"
    >
      {/* Content */}
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-between pt-32">
        
        {/* Text Section */}
        <div ref={textRef} className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="font-slackey text-5xl md:text-7xl mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            Skull Engine
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Bringing your animations to life with a dark, edgy aesthetic
          </p>
          <p className="text-gray-400 mb-8 max-w-lg">
            Professional animation services with a unique skull-themed style. We create captivating visuals that leave a lasting impression.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="/contact" className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-md hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg shadow-red-500/20 text-center">
              Get Started
            </a>
            <a href="#" className="px-8 py-3 bg-transparent border border-gray-700 text-white font-medium rounded-md hover:bg-gray-800 transition-all duration-300 text-center">
              View Portfolio
            </a>
          </div>
        </div>
        
        {/* Skull Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-80 h-80">
            <img 
              src="/images/final logo black SVG.svg" 
              alt="Skull Logo" 
              className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
