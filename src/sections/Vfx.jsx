import React from 'react'

function Vfx() {
  const vfxServices = [
    {
      category: 'Matchmove',
      services: ['Footage Analysis', 'Tracking (2D/3D)', 'Camera Tracking', 'Object Tracking'],
      icon: (
        <svg className="w-8 h-8 text-green-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm9 10a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM12 19a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM5 13a1 1 0 0 1 0-2H3a1 1 0 1 1 0-2h2a1 1 0 0 1 0 2H3a1 1 0 1 1 0 2h2Z"/>
          <path d="M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"/>
        </svg>
      )
    },
    {
      category: 'Rotoscoping and Keying',
      services: ['Footage Analysis', 'Shape Creation (Masks/Mattes)', 'Frame-by-Frame Tracking', 'Multi-layer Mattes', 'Final Matte Export'],
      icon: (
        <svg className="w-8 h-8 text-pink-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h5l2 3h9a1 1 0 0 1 0 2h-9l-2 3H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm9.293 7.293 1.414 1.414L12.414 15l2.293 2.293-1.414 1.414L11 16.414l-2.293 2.293-1.414-1.414L9.586 15 7.293 12.707l1.414-1.414L11 13.586l2.293-2.293Z"/>
        </svg>
      )
    },
    {
      category: 'Keying',
      services: ['Green Screen/Blue Screen Removal'],
      icon: (
        <svg className="w-8 h-8 text-cyan-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 4h10a3 3 0 0 1 3 3v4h-2V7a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3v2H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3Z"/>
          <path d="M21 14a3 3 0 1 0-4.243 2.828l-1.465 1.465a1 1 0 0 0 1.414 1.414l1.465-1.465A3 3 0 0 0 21 14Zm-3 1a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
        </svg>
      )
    },
    {
      category: 'FX Simulations',
      services: ['Fire & Smoke', 'Fluid/Water', 'Destruction/Rigid Body', 'Dust/Sparks'],
      icon: (
        <svg className="w-8 h-8 text-orange-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.001 2c.87 2.997-.62 4.996-2.243 6.62C8.135 10.242 7 11.61 7 14a5 5 0 1 0 10 0c0-1.89-.672-3.14-1.63-4.52-.74-1.05-1.58-2.25-1.37-3.89C14.208 4.32 15.5 3 16.5 2c-1.2.2-3.16 1.08-4.499 3Z"/>
        </svg>
      )
    },
    {
      category: 'Compositing',
      services: ['Background Replacement', 'Layering & Blending', 'FX Integration', 'Color Correction & Grading'],
      icon: (
        <svg className="w-8 h-8 text-violet-400" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 3h10a2 2 0 0 1 2 2v3H5V5a2 2 0 0 1 2-2Zm12 7v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7h14Zm-9 3h6l3 4H7l3-4Z"/>
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
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
            <h1 className="text-4xl font-bold font-sans] mb-4 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent ">
              VFX SERVICES
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
            <p className="text-green-300 text-xl font-mono tracking-wider">
              [ ENTERING VISUAL EFFECTS DIMENSION ]
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vfxServices.map((service, index) => (
              <div
                key={service.category}
                className="group relative bg-black/80 border border-green-500/30 rounded-lg p-6 hover:border-green-400 hover:shadow-2xl hover:shadow-green-500/20 transition-all duration-500 hover:scale-105 backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  boxShadow: '0 0 20px rgba(0, 255, 65, 0.1)'
                }}
              >
                {/* Glitch effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Icon and Category */}
                  <div className="flex items-center mb-4">
                    <div className="group-hover:animate-spin transition-transform duration-500">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white ml-3 font-mono tracking-wide">
                      {service.category.toUpperCase()}
                    </h3>
                  </div>

                  {/* Services List */}
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

                {/* Corner accents */}
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-green-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
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
    </div>
  )
}

export default Vfx
