import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Animation = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  
  useGSAP(() => {
    // Heading animation
    gsap.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    // Cards animation
    gsap.from(cardsRef.current.children, {
      y: 100,
      opacity: 0,
      stagger: 0.2,
      duration: 0.8,
      ease: 'back.out(1.7)',
      scrollTrigger: {
        trigger: cardsRef.current,
        start: 'top 75%',
        toggleActions: 'play none none none'
      }
    });
  }, []);
  
  return (
    <section ref={sectionRef} className="py-20 bg-black text-white" id="animation">
      <div className="container mx-auto px-4">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            Animation Servicesssss
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We bring your ideas to life with cutting-edge animation techniques and a distinctive skull-themed aesthetic.
          </p>
        </div>
        
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden group hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
            <div className="h-48 bg-gradient-to-br from-red-500/20 to-purple-500/20 flex items-center justify-center p-6">
              <svg className="w-24 h-24 text-red-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-5-9h10v2H7z"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">2D Animation</h3>
              <p className="text-gray-400 mb-4">Captivating 2D animations with our unique skull aesthetic. Perfect for explainer videos, social media content, and brand storytelling.</p>
              <a href="#" className="text-red-500 font-medium inline-flex items-center group-hover:text-red-400">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden group hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
            <div className="h-48 bg-gradient-to-br from-red-500/20 to-purple-500/20 flex items-center justify-center p-6">
              <svg className="w-24 h-24 text-red-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3zm-9-3.82l-2.09-2.09L6.5 13.5 10 17l6.01-6.01-1.41-1.41z"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">3D Animation</h3>
              <p className="text-gray-400 mb-4">Immersive 3D animations with our signature dark aesthetic. Ideal for product showcases, virtual experiences, and promotional content.</p>
              <a href="#" className="text-red-500 font-medium inline-flex items-center group-hover:text-red-400">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden group hover:border-red-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
            <div className="h-48 bg-gradient-to-br from-red-500/20 to-purple-500/20 flex items-center justify-center p-6">
              <svg className="w-24 h-24 text-red-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8 15c0-1.66 1.34-3 3-3 .35 0 .69.07 1 .18V6h5v2h-3v7.03c-.02 1.64-1.35 2.97-3 2.97-1.66 0-3-1.34-3-3z"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-red-500 transition-colors">Motion Graphics</h3>
              <p className="text-gray-400 mb-4">Eye-catching motion graphics with our edgy skull style. Perfect for advertisements, intros, outros, and social media content.</p>
              <a href="#" className="text-red-500 font-medium inline-flex items-center group-hover:text-red-400">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-md hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg shadow-red-500/20">
            View All Animation Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default Animation;
