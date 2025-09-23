import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../constants/motion'

function Vfx() {
  const vfxServices = [
    {
      category: 'Matchmove',
      services: ['Footage Analysis', 'Tracking (2D/3D)', 'Camera Tracking', 'Object Tracking'],
      icon: <svg className="w-8 h-8" fill="#00ff41" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
    },
    {
      category: 'Rotoscoping and Keying',
      services: ['Footage Analysis', 'Shape Creation (Masks/Mattes)', 'Frame-by-Frame Tracking', 'Multi-layer Mattes', 'Final Matte Export'],
      icon: <svg className="w-8 h-8" fill="#ff0080" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
    },
    {
      category: 'Keying',
      services: ['Green Screen/Blue Screen Removal'],
      icon: <svg className="w-8 h-8" fill="#00ffff" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14z"/></svg>
    }
  ]

  const lastTwoServices = [
    {
      category: 'FX Simulations',
      services: ['Fire & Smoke', 'Fluid/Water', 'Destruction/Rigid Body', 'Dust/Sparks'],
      icon: <svg className="w-8 h-8" fill="#ff4500" viewBox="0 0 24 24"><path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67z"/></svg>
    },
    {
      category: 'Compositing',
      services: ['Background Replacement', 'Layering & Blending', 'FX Integration', 'Color Correction & Grading'],
      icon: <svg className="w-8 h-8" fill="#9400d3" viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>
    }
  ]

  return (
    <motion.div className="min-h-screen bg-black relative overflow-hidden" initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} variants={staggerContainer(0.1, 0.08)}>
      {/* Matrix-style background particles */}
      <div className="absolute inset-0">
        {Array.from({length: 200}, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Scanlines effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-b from-transparent via-green-500/5 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.h1 variants={fadeInUp} className="scroll-mt-nav text-4xl font-bold font-sans] mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
              VFX SERVICES
            </motion.h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-green-300 text-xl font-mono tracking-wider">
              [ VISUALS WITHOUT LIMITS ]
            </p>
          </div>

          {/* First three services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {vfxServices.map((service, index) => (
              <motion.div
                key={service.category}
                className="group relative bg-black/80 border border-green-500/30 rounded-lg p-6 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)'
                }}
                variants={fadeInUp}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="group-hover:animate-spin transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white ml-3 font-mono tracking-wide">
                      {service.category.toUpperCase()}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {service.services.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-green-300 hover:text-green-100 transition-colors duration-300 font-mono text-sm"
                      >
                        <span className="text-green-500 mr-2">▶</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Last two services centered horizontally */}
          <div className="flex justify-center gap-6">
            {lastTwoServices.map((service, index) => (
              <motion.div
                key={service.category}
                className="group relative bg-black/80 border border-green-500/30 rounded-lg p-6 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm w-80"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)'
                }}
                variants={fadeInUp}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="group-hover:animate-spin transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white ml-3 font-mono tracking-wide">
                      {service.category.toUpperCase()}
                    </h3>
                  </div>

                  <div className="space-y-2">
                    {service.services.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-green-300 hover:text-green-100 transition-colors duration-300 font-mono text-sm"
                      >
                        <span className="text-green-500 mr-2">▶</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <a href="/contact" className="inline-block px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-black font-bold rounded-lg hover:from-green-400 hover:to-blue-500 transition-all duration-300 text-lg font-mono tracking-wider transform hover:scale-110 shadow-lg shadow-green-500/30">
              [ MAKE YOUR PROJECT ]
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch {
          0%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        
        .animate-glitch {
          animation: glitch 0.3s ease-in-out infinite;
        }
      `}</style>
    </motion.div>
  )
}

export default Vfx
