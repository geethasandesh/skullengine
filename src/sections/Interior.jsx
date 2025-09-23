import React from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../constants/motion';

function Interior() {
  const services = [
    {
      title: "3D Interior Design",
      description: "Transform your living spaces with stunning visualizations.",
      features: ["Living Rooms", "Bedrooms", "Kitchens", "Bathrooms", "Office Spaces"],
      image: "/images/Interior1.jpeg"
    },
    {
      title: "3D Exterior Design",
      description: "Showcase architectural brilliance with detailed visualizations.",
      features: ["Residential Buildings", "Commercial Complexes", "Landscape Design", "Facade Design", "Urban Planning"],
      image: "/images/Exterior1.jpeg"
    },
  ];

  return (
    <motion.div className="min-h-screen bg-black/80 backdrop-blur-md py-20 px-8 flex items-center justify-center relative overflow-hidden" initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} variants={staggerContainer(0.1, 0.08)}>
      {/* Interior/Exterior Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {/* House/Building SVGs */}
        {Array.from({length: 12}, (_, i) => (
          <div
            key={i}
            className="absolute text-white/20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {i % 4 === 0 && (
              <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"/>
              </svg>
            )}
            {i % 4 === 1 && (
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-5h5v5zm7 0h-5v-5h5v5zm0-7H5V7h14v3z"/>
              </svg>
            )}
            {i % 4 === 2 && (
              <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 9.949V19h2v7.949c5.16-.21 9-4.399 9-9.949V7l-10-5z"/>
              </svg>
            )}
            {i % 4 === 3 && (
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21 8c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8zm-2 8H5V8h14v8z"/>
              </svg>
            )}
          </div>
        ))}
        
        {/* Gradient Lines */}
        {Array.from({length: 6}, (_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"
            style={{
              width: '100%',
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.8}s`
            }}
          />
        ))}
      </div>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1 variants={fadeInUp} className="scroll-mt-nav text-4xl font-bold text-white mb-4 font-mono">
            ARCHITECTURAL DESIGN
          </motion.h1>
          <p className="text-xl text-gray-400">
            BUILD YOUR DREAM HOUSE
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="card relative flex flex-col gap-4 p-4 w-80 rounded-2xl"
              style={{
                backgroundColor: 'hsla(240, 15%, 9%, 1)',
                backgroundImage: index === 0 ? `
                  radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                  radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                  radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                  radial-gradient(at 0% 64%, hsl(189, 99%, 26%) 0px, transparent 85%),
                  radial-gradient(at 41% 94%, hsl(189, 97%, 36%) 0px, transparent 85%),
                  radial-gradient(at 100% 99%, hsl(188, 94%, 13%) 0px, transparent 85%)
                ` : `
                  radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                  radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                  radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                  radial-gradient(at 0% 64%, hsl(280, 99%, 26%) 0px, transparent 85%),
                  radial-gradient(at 41% 94%, hsl(280, 99%, 26%) 0px, transparent 85%),
                  radial-gradient(at 100% 99%, hsl(280, 99%, 26%) 0px, transparent 85%)
                `,
                boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset'
              }}
              variants={fadeInUp}
            >
              {/* Animated Border */}
              <div 
                className="absolute -z-10 top-1/2 left-1/2 w-full h-full rounded-2xl overflow-hidden pointer-events-none"
                style={{
                  transform: 'translate(-50%, -50%)',
                  width: 'calc(100% + 2px)',
                  height: 'calc(100% + 2px)',
                  backgroundImage: 'linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)'
                }}
              >
                <div 
                  className="fixed top-1/2 left-1/2 w-full h-40 pointer-events-none animate-spin"
                  style={{
                    transform: 'translate(-50%, -50%)',
                    width: '200%',
                    backgroundImage: index === 0 ? 'linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(189, 100%, 50%) 40%, hsl(189, 100%, 50%) 60%, hsla(0, 0%, 40%, 0) 100%)' : 'linear-gradient(0deg, hsla(0, 0%, 100%, 0) 0%, hsl(280, 100%, 50%) 40%, hsl(280, 100%, 50%) 60%, hsla(0, 0%, 40%, 0) 100%)',
                    animationDuration: '8s'
                  }}
                />
              </div>

              {/* Image */}
              <div className="w-full h-40 rounded-xl overflow-hidden mb-2">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title and Description */}
              <div className="card_title__container">
                <span className="text-white text-lg font-semibold">{service.title}</span>
                <p className="text-gray-400 text-sm mt-1 w-4/5">{service.description}</p>
              </div>

              {/* Divider */}
              <hr className="w-full h-px bg-gray-700 border-none" />

              {/* Features List */}
              <ul className="flex flex-col gap-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <span className={`flex justify-center items-center w-4 h-4 rounded-full ${index === 0 ? 'bg-cyan-500' : 'bg-purple-500'}`}>
                      <svg className="w-3 h-3 fill-black" viewBox="0 0 16 16">
                        <path clipRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" fillRule="evenodd" />
                      </svg>
                    </span>
                    <span className="text-white text-xs">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Link 
                to="/contact"
                className="block w-full py-2 text-white text-xs border-0 rounded-full cursor-pointer text-center"
                style={{
                  backgroundImage: index === 0 ? 'linear-gradient(0deg, hsl(189, 92%, 58%), hsl(189, 99%, 26%) 100%)' : 'linear-gradient(0deg, hsl(280, 92%, 58%), hsl(280, 99%, 26%) 100%)',
                  boxShadow: 'inset 0 -2px 25px -4px rgba(255, 255, 255, 0.3)'
                }}
              >
                Get Your Design
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-block px-12 py-4 bg-gradient-to-r from-blue-300 via-purple-300 to-purple-400 text-white font-bold rounded-full hover:from-red-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 text-lg transform hover:scale-110 shadow-2xl"
          >
            LET'S MAKE YOURS
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </motion.div>
  );
}

export default Interior;
