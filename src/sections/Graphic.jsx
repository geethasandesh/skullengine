import React from 'react'

export default function Graphic() {
  const graphicServices = [
    {
      title: 'Logo Design',
      description: 'Unique brand identities that capture your essence and make lasting impressions.',
      color: 'from-pink-500 to-rose-500',
      tools: ['Illustrator', 'Photoshop', 'Figma']
    },
    {
      title: 'Web Design',
      description: 'Modern, responsive websites that engage users and drive conversions.',
      color: 'from-blue-500 to-indigo-500',
      tools: ['Figma', 'Sketch', 'Adobe XD']
    },
    {
      title: 'Brochure Design',
      description: 'Professional print materials that communicate your message effectively.',
      color: 'from-green-500 to-emerald-500',
      tools: ['InDesign', 'Illustrator', 'Canva']
    },
    {
      title: 'Poster Design',
      description: 'Eye-catching posters that grab attention and deliver your message with impact.',
      color: 'from-purple-500 to-violet-500',
      tools: ['Photoshop', 'Illustrator', 'CorelDraw']
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Design Tools & Elements */}
        {Array.from({length: 50}, (_, i) => {
          const elements = [
            // Pencil
            <div className="w-1 h-12 bg-yellow-400 relative">
              <div className="absolute -top-1 left-0 w-0 h-0 border-l-0.5 border-r-0.5 border-b-2 border-transparent border-b-gray-800"></div>
              <div className="absolute -bottom-1 left-0 w-1 h-2 bg-pink-300"></div>
            </div>,
            // Brush
            <div className="w-2 h-10 bg-gray-700 relative">
              <div className="absolute -top-2 left-0 w-2 h-3 bg-gray-400 rounded-t"></div>
              <div className="absolute -bottom-1 left-0.5 w-1 h-2 bg-black"></div>
            </div>,
            // Color Palette
            <div className="w-8 h-6 bg-white border border-gray-300 relative">
              <div className="absolute top-1 left-1 w-2 h-2 bg-red-500 rounded-full"></div>
              <div className="absolute top-1 right-1 w-2 h-2 bg-blue-500 rounded-full"></div>
              <div className="absolute bottom-1 left-1 w-2 h-2 bg-green-500 rounded-full"></div>
              <div className="absolute bottom-1 right-1 w-2 h-2 bg-yellow-500 rounded-full"></div>
            </div>,
            // Ruler
            <div className="w-12 h-2 bg-yellow-300 relative">
              {Array.from({length: 6}, (_, j) => (
                <div key={j} className="absolute top-0 w-px h-1 bg-black" style={{left: `${j * 2}px`}}></div>
              ))}
            </div>,
            // Bezier Curve
            <svg className="w-10 h-8" viewBox="0 0 40 32" fill="none">
              <path d="M2 30 Q10 2 20 16 T38 2" stroke="currentColor" strokeWidth="2" fill="none" className="text-purple-500"/>
              <circle cx="2" cy="30" r="2" fill="currentColor" className="text-red-500"/>
              <circle cx="38" cy="2" r="2" fill="currentColor" className="text-red-500"/>
            </svg>,
            // Grid
            <div className="w-8 h-8 grid grid-cols-4 gap-px bg-gray-400">
              {Array.from({length: 16}, (_, j) => (
                <div key={j} className="bg-white"></div>
              ))}
            </div>
          ];
          const element = elements[i % elements.length];
          return (
            <div
              key={i}
              className="absolute hover:scale-110 transition-all duration-300 animate-pulse"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animationDelay: `${i * 0.1}s`
              }}
            >
              {element}
            </div>
          );
        })}
        
        {/* Floating Shapes */}
        {Array.from({length: 20}, (_, i) => (
          <div
            key={i}
            className={`absolute animate-bounce ${
              i % 4 === 0 ? 'w-4 h-4 bg-red-400 rounded-full' :
              i % 4 === 1 ? 'w-6 h-6 bg-blue-400 rotate-45' :
              i % 4 === 2 ? 'w-5 h-5 bg-green-400 rounded-full' :
              'w-4 h-6 bg-purple-400'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-6"></div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent font-['Slackey']">
                GRAPHIC DESIGN
              </h1>
              <div className="w-3 h-3 bg-blue-500 rounded-full ml-6"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full ml-2"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full ml-2"></div>
            </div>
            <p className="text-gray-600 text-xl font-mono">
              Creative Solutions • Visual Storytelling • Brand Identity
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {graphicServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-4 border-dashed border-gray-200 hover:border-gray-400 overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Creative Corner */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Service Header */}
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:animate-spin`}></div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

          

                  {/* Creative Elements */}
                  <div className="flex items-center justify-center mt-2">
                    <div className="flex space-x-2">
                      <div className="w-6 h-6 border-2 border-gray-300 rounded hover:border-pink-500 transition-colors cursor-pointer"></div>
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full hover:scale-110 transition-transform cursor-pointer"></div>
                      <div className="w-6 h-6 border-2 border-gray-300 rotate-45 hover:border-green-500 transition-colors cursor-pointer"></div>
                    </div>
                  </div>
                </div>

                {/* Sketch Lines */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path d="M8 8 L40 40 M40 8 L8 40 M24 8 L24 40 M8 24 L40 24" stroke="currentColor" strokeWidth="1" className="text-gray-600"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-pink-500 to-transparent"></div>
              <span className="text-gray-600 font-mono text-sm">READY TO CREATE?</span>
              <div className="w-8 h-1 bg-gradient-to-l from-blue-500 to-transparent"></div>
            </div>
            <a href="/contact" className="inline-block px-12 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-full hover:from-pink-400 hover:via-purple-400 hover:to-blue-400 transition-all duration-300 text-lg transform hover:scale-110 shadow-2xl">
              🎨 START YOUR PROJECT
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
