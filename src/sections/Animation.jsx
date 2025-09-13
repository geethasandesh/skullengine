import React from 'react'

function Animation() {
  const services = [
    { 
      name: 'Modeling', 
      icon: '🎨',
      description: 'Create detailed 3D models and characters with precision and artistic flair for your projects.'
    },
    { 
      name: 'Texturing', 
      icon: '🖌️',
      description: 'Apply realistic textures and materials to bring your 3D models to life with stunning detail.'
    },
    { 
      name: 'Rigging', 
      icon: '🦴',
      description: 'Build flexible skeletal systems that enable smooth and natural character movements.'
    },
    { 
      name: 'Animation', 
      icon: '🎬',
      description: 'Craft fluid animations that tell compelling stories and engage your audience.'
    },
    { 
      name: 'Lighting', 
      icon: '💡',
      description: 'Set the perfect mood and atmosphere with professional lighting techniques.'
    },
    { 
      name: 'Rendering', 
      icon: '⚡',
      description: 'Produce high-quality final outputs with photorealistic rendering technology.'
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
              className="group relative bg-white/10 backdrop-blur-md border-1 border-orange-500 rounded-xl p-8 h-64 hover:bg-white/10 hover:backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.name}
                </h3>
                <p className="text-amber-50 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gradient-to-r from-red-600 to-red-800 text-white font-medium rounded-lg hover:bg-orange-400 transition-colors duration-300 text-lg">
            View More Services
          </button>
          
          <div className="mt-8 text-center">
            <p className="text-red-500 text-lg mb-4">
              Ready to bring your ideas to life?
            </p>
            <p className="text-white text-base max-w-3xl mx-auto">
              Transform your vision into stunning 3D reality with our comprehensive animation services. From concept to final render, we craft immersive experiences that captivate and inspire.
            </p>
          </div>
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
