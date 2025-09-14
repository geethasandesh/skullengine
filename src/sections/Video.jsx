import React from 'react'

function Video() {
  const videoServices = [
    {
      title: 'Video Songs',
      description: 'Professional music video production with cinematic quality and creative storytelling.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Lyrical Video Song',
      description: 'Engaging lyrical videos with synchronized text animations and visual effects.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v6h2v-6zm4 0h-2v6h2v-6zm4 0h-2v6h2v-6zm2.5-5H21l-2-2H3l-2 2h1.5v16h19V6z"/></svg>,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Motion Graphics',
      description: 'Dynamic motion graphics and animations for branding, explainers, and presentations.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></svg>,
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'YouTube Videos',
      description: 'Complete YouTube content creation from scripting to final edit with SEO optimization.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8v8c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-2.5 3.5l-7-4.5v9l7-4.5z"/></svg>,
      color: 'from-red-600 to-red-400'
    },
    {
      title: 'Reels & Shorts',
      description: 'Viral-ready short-form content optimized for Instagram Reels and YouTube Shorts.',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M18 4l2 4h-3l-2-4h-2l2 4h-3l-2-4H8l2 4H7L5 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4h-4z"/></svg>,
      color: 'from-green-500 to-teal-500'
    }
  ]
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Video Timeline Background */}
      <div className="absolute inset-0 opacity-30">
        {/* Timeline tracks */}
        {Array.from({length: 8}, (_, i) => (
          <div key={i} className="absolute w-full h-8 border-b border-gray-800" style={{top: `${i * 12}%`}}>
            <div className="h-full bg-gradient-to-r from-green-500/30 via-blue-500/30 to-red-500/30 animate-pulse" style={{width: `${60 + Math.random() * 40}%`, animationDelay: `${i * 0.3}s`}}></div>
          </div>
        ))}
        {/* Playhead */}
        <div className="absolute w-0.5 h-full bg-red-500 animate-pulse" style={{left: '30%'}}></div>
        
        {/* Timeline markers */}
        {Array.from({length: 10}, (_, i) => (
          <div key={i} className="absolute w-px h-4 bg-gray-600" style={{left: `${i * 10}%`, top: '0'}}>
            <span className="absolute text-xs text-gray-500 -top-5">{i}:00</span>
          </div>
        ))}
      </div>

      {/* Floating Video Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {['▶', '⏸', '⏹', '⏭', '⏮'].map((symbol, i) => (
          <div
            key={i}
            className="absolute text-white/20 text-4xl animate-pulse"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + i * 15}%`,
              animationDelay: `${i * 0.5}s`
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse mr-3"></div>
              <h1 className="text-4xl font-bold text-white font-mono] bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                VIDEO PRODUCTION
              </h1>
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse ml-3"></div>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent rounded"></div>
              <span className="text-white font-mono text-sm">[ REC ]</span>
              <div className="w-20 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded"></div>
            </div>
            <p className="text-gray-300 text-xl font-mono tracking-wider">
              PROFESSIONAL VIDEO EDITING & PRODUCTION SERVICES
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Timeline Bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                  <div 
                    className={`h-full bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-1000 w-0`}
                  ></div>
                </div>

                {/* Service Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 font-mono">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Video Controls */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <span className="text-white text-xs">▶</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <span className="text-white text-xs">⏸</span>
                      </div>
                      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                        <span className="text-white text-xs">⏹</span>
                      </div>
                    </div>
                    <span className="text-gray-500 text-xs font-mono">00:00</span>
                  </div>


                </div>

                {/* Background Pattern */}
                <div className="absolute bottom-0 right-0 w-20 h-20 opacity-10">
                  <div className="grid grid-cols-4 gap-1 h-full">
                    {Array.from({length: 16}, (_, i) => (
                      <div key={i} className={`bg-gradient-to-br ${service.color} rounded-sm animate-pulse`} style={{animationDelay: `${i * 0.1}s`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <a href="/contact" className="inline-block px-12 py-4 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-red-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 text-lg transform hover:scale-110 shadow-2xl">
              🎬 START YOUR VIDEO PROJECT
            </a>
            
            <div className="mt-8">
              <p className="text-red-400 text-lg mb-2 font-mono animate-pulse">
                ● REC • EDITING IN PROGRESS...
              </p>
              <p className="text-gray-400 text-sm font-mono max-w-2xl mx-auto">
                From concept to final cut, we transform your ideas into compelling visual stories that engage, inspire, and convert your audience across all platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Video
