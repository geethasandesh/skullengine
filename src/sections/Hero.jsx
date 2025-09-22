// Hero.jsx
import React, { useRef } from 'react';

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  return (
    <div
      ref={heroRef}
      className="min-h-screen bg-black text-white flex items-center relative overflow-hidden"
    >
      {/* Grid Background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              `linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),` +
              `linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)`,
            backgroundSize: '40px 40px, 40px 40px',
            backgroundPosition: '0 100%, 0 100%'
          }}
        />
      </div>

      {/* Vignette / Color Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-black/60 to-black z-0" />

      {/* Global Dotted Layer under content */}
      <div
        className="absolute left-0 right-0 bottom-0 top-1/2 z-10"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.28) 1px, rgba(255,255,255,0) 1px)',
          backgroundSize: '10px 10px',
          backgroundPosition: 'center top'
        }}
      />
      {/* Edge and depth gradients for dots */}
      <div className="absolute left-0 right-0 bottom-0 top-1/2 z-10 pointer-events-none">
        {/* bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/30 to-transparent" />
        {/* top deep fade */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black via-black/40 to-transparent" />
        {/* side vignettes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black/50 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative flex flex-col items-center justify-start pt-24 sm:pt-28 lg:pt-32 text-center min-h-screen">
        
        {/* Text Section */}
        <div ref={textRef} className="w-full max-w-3xl mb-8">
          <h1 className="font-['Slackey'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600 leading-tight">
            Skull Engine
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6 lg:mb-8 px-2 sm:px-0">
            Bringing your animations to life with a dark, edgy aesthetic
          </p>
          <p className="text-sm sm:text-base text-gray-400 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed">
            Professional animation services with a unique skull-themed style. We create captivating visuals that leave a lasting impression.
          </p>
          <div ref={ctaRef} className="flex justify-center px-4 sm:px-0">
            <a href="/contact" className="px-6 sm:px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-md hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg shadow-red-500/20 text-center text-sm sm:text-base">
              Get Started
            </a>
          </div>

          {/* Spacer to ensure dots start under CTA */}
          <div className="mt-8" />
        </div>
        
        {/* Skull Image Section hidden to allow full-height dots */}
        <div className="hidden" />
      </div>
    </div>
  );
};

export default Hero;
