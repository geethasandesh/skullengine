import React from 'react'

function Animation() {
  const services = [
    { 
      name: 'Modeling', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-orange-500 mx-auto">
          <path d="M11.063 1.646a2 2 0 0 1 1.874 0l7.25 3.75A2 2 0 0 1 21 7.2v9.6a2 2 0 0 1-1.063 1.804l-7.25 3.75a2 2 0 0 1-1.874 0l-7.25-3.75A2 2 0 0 1 3 16.8V7.2a2 2 0 0 1 1.063-1.804l7.25-3.75ZM5 8.236V16.8l7 3.621V11.857L5 8.236Zm9 3.621V20.42l7-3.62V8.236l-7 3.621ZM18.236 6 12 9.143 5.764 6 12 2.857 18.236 6Z" />
        </svg>
      ),
      description: 'Create detailed 3D models and characters with precision and artistic flair for your projects.',
      subcategories: ['3D Characters', 'Props', 'Environments/VFX Sets', 'Low-poly Game Assets']
    },
    { 
      name: 'Texturing', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-orange-500 mx-auto">
          <path d="M20.707 3.293a1 1 0 0 0-1.414 0l-6.364 6.364a1 1 0 0 0-.241.392l-1.086 3.257a1 1 0 0 0 1.265 1.265l3.257-1.086a1 1 0 0 0 .392-.241l6.364-6.364a1 1 0 0 0 0-1.414l-2.173-2.173ZM12.47 11.53l6.364-6.364.759.759-6.364 6.364-.759-.759ZM8 14a4 4 0 0 0-4 4c0 1.657-1.343 2-2 2 .667 1.333 3 2 5 2 3.314 0 6-2.239 6-5a3 3 0 0 0-3-3H8Z" />
        </svg>
      ),
      description: 'Apply realistic textures and materials to bring your 3D models to life with stunning detail.',
      subcategories: ['UV Unwrapping', 'Materials']
    },
    { 
      name: 'Rigging', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-orange-500 mx-auto">
          <path d="M7.05 2.636a2.5 2.5 0 0 1 3.536 0l.707.707a1 1 0 0 0 1.414 0l.707-.707a2.5 2.5 0 1 1 3.536 3.536l-.707.707a1 1 0 0 0 0 1.414l3.182 3.182a2.5 2.5 0 1 1-3.536 3.536l-.707-.707a1 1 0 0 0-1.414 0l-.707.707a2.5 2.5 0 0 1-3.536 0l-3.182-3.182a1 1 0 0 0-1.414 0l-.707.707a2.5 2.5 0 1 1-3.536-3.536l.707-.707a1 1 0 0 0 0-1.414l3.182-3.182Z" />
        </svg>
      ),
      description: 'Build flexible skeletal systems that enable smooth and natural character movements.',
      subcategories: ['3D Character Rig', 'Props Rig', 'Vehicles Rig']
    },
    { 
      name: 'Animation', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-orange-500 mx-auto">
          <path d="M3 5a2 2 0 0 1 2-2h2.382a2 2 0 0 1 1.789 1.106L10 5h7a2 2 0 0 1 2 2v1H3V5Z" />
          <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Zm8 3.5v4a.5.5 0 0 0 .757.429l3.5-2a.5.5 0 0 0 0-.858l-3.5-2A.5.5 0 0 0 11 12.5Z" />
        </svg>
      ),
      description: 'Craft fluid animations that tell compelling stories and engage your audience.',
      subcategories: ['Layout & Blocking', 'Character Animation', 'Prop Animation', 'Camera Animation', 'Facial Animation & Lip Sync']
    },
    { 
      name: 'Lighting', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-orange-500 mx-auto">
          <path d="M12 2a7 7 0 0 0-4.95 11.95c.6.6.95 1.414.95 2.263V17a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-.787c0-.849.35-1.663.95-2.263A7 7 0 0 0 12 2Z" />
          <path d="M9 19a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Z" />
        </svg>
      ),
      description: 'Set the perfect mood and atmosphere with professional lighting techniques.',
      subcategories: ['Scene Setup & Light Placement', 'Key Light', 'Fill Light', 'Rim & Back Light', 'Environment & HDRI Lighting', 'Practical Lights', 'Shadow Setup', 'Global Illumination', 'Optimization', 'Final Lighting Passes (for Compositing)']
    },
    { 
      name: 'Rendering', 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-orange-500 mx-auto">
          <path d="M4 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4Zm2 2h2l2 3H8L6 7Zm6 0h2l2 3h-2l-2-3Zm6 0 2 3v8h-4V9l2-3ZM4 9l2-2 2 3v8H4V9Z" />
        </svg>
      ),
      description: 'Produce high-quality final outputs with photorealistic rendering technology.',
      subcategories: ['Render Settings', 'Test Rendering', 'Final Render']
    }
  ]

  return (
    <div className="relative p-8 pb-16 bg-black overflow-hidden">
      {/* Animated Doodle Background */}
      <div className="absolute inset-0 opacity-40">
        {Array.from({length: 100}, (_, i) => [1,2,3,4,5,6,7][i % 7]).map((num, index) => (
          <img
            key={index}
            src={`/images/${num}.png`}
            alt="doodle"
            className="absolute w-12 h-12 hover:scale-125 hover:rotate-12 transition-all duration-300 animate-float"
            style={{
              left: `${(index * 7) % 100}%`,
              top: `${(index * 11) % 100}%`,
              animationDelay: `${index * 0.2}s`
            }}
          />
        ))}
      </div>
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl font-bold text-center mb-12 animate-fade-in font-['Slackey']">
          3d Animation Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="group relative bg-white/10 backdrop-blur-md border-1 border-orange-500 rounded-xl p-6 hover:bg-white/10 hover:backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-amber-50 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="text-left">
                  <ul className={`text-gray-300 text-xs space-y-1 ${service.subcategories.length > 6 ? 'grid grid-cols-2 gap-x-4 gap-y-1' : ''}`}>
                    {service.subcategories.map((sub, subIndex) => (
                      <li key={subIndex} className="flex items-center">
                        <span className="w-1 h-1 bg-orange-500 rounded-full mr-2 flex-shrink-0"></span>
                        <span className="text-xs leading-tight">{sub}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <a href="/contact" className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg hover:bg-orange-400 transition-colors duration-300 text-lg">
            Let's Create Together
          </a>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}

export default Animation
