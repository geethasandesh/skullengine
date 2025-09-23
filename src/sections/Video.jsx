import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../constants/motion'

function Video() {
  const firstThreeServices = [
    {
      title: 'Video Songs',
      description: 'Professional music video production with cinematic quality and creative storytelling.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 6a2 2 0 0 1 2-2h7l3 3h4a2 2 0 0 1 2 2v2H4V6Z"/>
          <path d="M4 11h20v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8Zm9 2.5v5a.5.5 0 0 0 .77.42l4-2.5a.5.5 0 0 0 0-.84l-4-2.5a.5.5 0 0 0-.77.42Z"/>
        </svg>
      ),
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Lyrical Video Song',
      description: 'Engaging lyrical videos with synchronized text animations and visual effects.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 4h16a2 2 0 0 1 2 2v8H2V6a2 2 0 0 1 2-2Z"/>
          <path d="M8 6h8v2H8V6Z"/>
          <path d="M2 16h20v2a2 2 0 0 1-2 2h-7.5v-3a2.5 2.5 0 1 0-2 2.45V20H4a2 2 0 0 1-2-2v-2Z"/>
        </svg>
      ),
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Motion Graphics',
      description: 'Dynamic motion graphics and animations for branding, explainers, and presentations.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 6a2 2 0 0 1 2-2h4v6H3V6Zm6 0h6v6H9V6Zm8 0h2a2 2 0 0 1 2 2v4h-4V6Z"/>
          <path d="M3 12h6v6H5a2 2 0 0 1-2-2v-4Zm8 0h6v6h-6v-6Zm8 0h4v4a2 2 0 0 1-2 2h-2v-6Z"/>
        </svg>
      ),
      color: 'from-purple-500 to-indigo-500'
    }
  ]

  const lastTwoServices = [
    {
      title: 'YouTube Videos',
      description: 'Complete YouTube content creation from scripting to final edit with SEO optimization.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 8.5c0-1.38-1.12-2.5-2.5-2.5h-15C3.12 6 2 7.12 2 8.5v7c0 1.38 1.12 2.5 2.5 2.5h15c1.38 0 2.5-1.12 2.5-2.5v-7Z"/>
          <path d="M10 9.5v5l5-2.5-5-2.5Z" className="fill-black"/>
        </svg>
      ),
      color: 'from-red-600 to-red-400'
    },
    {
      title: 'Reels & Shorts',
      description: 'Viral-ready short-form content optimized for Instagram Reels and YouTube Shorts.',
      icon: (
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Z"/>
          <path d="M10 9.5v5l4-2.5-4-2.5Z" className="fill-black"/>
        </svg>
      ),
      color: 'from-green-500 to-teal-500'
    }
  ]

  return (
    <motion.div className="min-h-screen bg-black relative overflow-hidden" initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} variants={staggerContainer(0.1, 0.08)}>
      
      {/* Video Timeline Background */}
      <div className="absolute inset-0 opacity-30">
        {Array.from({length: 8}, (_, i) => (
          <div key={i} className="absolute w-full h-8 border-b border-gray-800" style={{top: `${i * 12}%`}}>
            <div className="h-full bg-gradient-to-r from-green-500/30 via-blue-500/30 to-red-500/30 animate-pulse" style={{width: `${60 + Math.random() * 40}%`, animationDelay: `${i * 0.3}s`}}></div>
          </div>
        ))}
        <div className="absolute w-0.5 h-full bg-red-500 animate-pulse" style={{left: '30%'}}></div>
        {Array.from({length: 10}, (_, i) => (
          <div key={i} className="absolute w-px h-4 bg-gray-600" style={{left: `${i * 10}%`, top: '0'}}></div>
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
              <motion.h1 variants={fadeInUp} className="scroll-mt-nav text-4xl font-bold text-white font-mono bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                VIDEO EDITING SERVICES
              </motion.h1>
              <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse ml-3"></div>
            </div>
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-transparent rounded"></div>
              <span className="text-white font-mono text-sm">[ REC ]</span>
              <div className="w-20 h-1 bg-gradient-to-l from-blue-500 to-transparent rounded"></div>
            </div>
            <p className="text-gray-300 text-xl font-mono tracking-wider">
              FROM SHOTS TO STORIES
            </p>
          </div>

          {/* First three services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {firstThreeServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-black/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-500 hover:scale-105 overflow-hidden"
                style={{animationDelay: `${index * 0.1}s`}}
                variants={fadeInUp}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                  <div 
                    className={`h-full bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-1000 w-0`}
                  ></div>
                </div>
                <div className="relative z-10">
                  <div className={`text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-mono">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Last two services centered horizontally */}
          <div className="relative z-20 flex flex-col lg:flex-row justify-center gap-6 mt-12">
            {lastTwoServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-black/90 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-gray-500 transition-all duration-500 hover:scale-105 overflow-hidden w-80"
                style={{animationDelay: `${index * 0.1}s`}}
                variants={fadeInUp}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-800">
                  <div 
                    className={`h-full bg-gradient-to-r ${service.color} group-hover:w-full transition-all duration-1000 w-0`}
                  ></div>
                </div>
                <div className="relative z-10">
                  <div className={`text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 font-mono">{service.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <a href="/contact" className="inline-block px-12 py-4 bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-red-500 hover:via-purple-500 hover:to-blue-500 transition-all duration-300 text-lg transform hover:scale-110 shadow-2xl">
              🎬 START YOUR VIDEO PROJECT
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Video
