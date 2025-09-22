import React from 'react'

function About() {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '5+', label: 'Years Experience' },
    { number: '25+', label: 'Happy Clients' },
    { number: '8', label: 'Services Offered' }
  ];

  
  const services = [
    { icon: '🎬', name: '3D Animation', projects: '15+' },
    { icon: '💻', name: 'Web Development', projects: '12+' },
    { icon: '📱', name: 'App Development', projects: '8+' },
    { icon: '🎨', name: 'Graphic Design', projects: '20+' },
    { icon: '📈', name: 'Digital Marketing', projects: '10+' },
    { icon: '🎥', name: 'Video Production', projects: '6+' },
    { icon: '🏠', name: 'Interior Design', projects: '4+' },
    { icon: '✨', name: 'VFX Services', projects: '5+' }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({length: 20}, (_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 90}%`,
              top: `${Math.random() * 90}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 px-4">
            <h1 className="font-['Slackey'] text-3xl sm:text-4xl md:text-4xl lg:text-4xl mb-4 sm:mb-6 bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent leading-tight">
              About SkullEngine
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We are a creative digital studio specializing in cutting-edge animation, web development, 
              and digital marketing solutions. Our passion drives us to transform ideas into extraordinary digital experiences.
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20 px-4">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-orange-500 mb-1 sm:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Our Story */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-slate-700/50">
              <h2 className="text-3xl font-bold text-orange-500 mb-6 text-center">
                Our Story
              </h2>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Founded with a vision to push creative boundaries, SkullEngine emerged from a passion 
                    for innovative digital solutions. We believe in the power of combining artistic creativity 
                    with technical excellence.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    Our journey began with a simple mission: to help businesses and individuals bring their 
                    wildest digital dreams to life through exceptional animation, development, and marketing services.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Today, we're proud to be a trusted partner for clients seeking premium digital solutions 
                    that stand out in an increasingly competitive landscape.
                  </p>
                </div>
                <div className="relative">
                  <div className="bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-2xl p-8 border border-orange-500/30">
                    <div className="text-center">
                      <div className="text-6xl mb-4">💀</div>
                      <h3 className="text-xl font-bold text-orange-500 mb-2">Our Philosophy</h3>
                      <p className="text-gray-300 text-sm">
                        "Death to ordinary. Birth to extraordinary."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Services Overview */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">
              Our Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <div key={service.name} className="group">
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-2 text-center">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {service.icon}
                    </div>
                    <h3 className="font-bold text-white mb-2 text-sm">
                      {service.name}
                    </h3>
                    <div className="text-orange-500 text-xs font-medium">
                      {service.projects} Projects
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
         

          {/* Why Choose Us */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-orange-500 mb-12 text-center">
              Why Choose SkullEngine?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="font-bold text-white mb-3">Lightning Fast Delivery</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We understand deadlines matter. Our streamlined processes ensure quick turnaround without compromising quality.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">🎯</div>
                <h3 className="font-bold text-white mb-3">Precision & Quality</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Every pixel, every line of code, every animation frame is crafted with meticulous attention to detail.
                </p>
              </div>
              <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-orange-500/50 transition-all duration-300">
                <div className="text-3xl mb-4">🚀</div>
                <h3 className="font-bold text-white mb-3">Innovation First</h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We stay ahead of trends and technologies to deliver cutting-edge solutions that give you a competitive edge.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-orange-500/10 to-red-600/10 rounded-3xl p-8 border border-orange-500/30">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Create Something Extraordinary?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's collaborate and bring your vision to life with our expertise and passion for digital excellence.
              </p>
              <a 
                href="/contact" 
                className="inline-block px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold rounded-full hover:from-orange-400 hover:to-red-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                🚀 Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
