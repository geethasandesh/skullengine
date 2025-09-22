import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../constants/motion';

const Web = () => {
  const webServices = [
    {
      title: 'Frontend Development',
      description: 'Modern React applications with responsive design and optimized performance for exceptional user experiences.',
      color: 'from-orange-500 to-red-500',
      tools: ['React', 'Next.js', 'Tailwind CSS'],
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278z"/></svg>
    },
    {
      title: 'Backend Development',
      description: 'Robust server-side solutions with secure APIs and database integrations for scalable web applications.',
      color: 'from-blue-500 to-indigo-500',
      tools: ['Node.js', 'Express', 'MongoDB'],
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and content management systems.',
      color: 'from-green-500 to-emerald-500',
      tools: ['Shopify', 'Stripe', 'WooCommerce'],
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
    },
    {
      title: 'Full-Stack Applications',
      description: 'End-to-end web applications with modern frameworks and cloud deployment for complete digital solutions.',
      color: 'from-purple-500 to-pink-500',
      tools: ['MERN Stack', 'Next.js', 'Vercel'],
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
    }
  ]

  return (
    <motion.div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900 relative overflow-hidden" initial="hidden" whileInView="show" viewport={{ amount: 0.2, once: true }} variants={staggerContainer(0.1, 0.08)}>
      {/* Web Development Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Web Elements */}
        {Array.from({length: 50}, (_, i) => {
          const elements = [
            // Browser Window
            <div className="w-16 h-12 bg-white border border-gray-300 rounded-t relative">
              <div className="flex space-x-1 p-1 bg-gray-100 rounded-t">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="p-1">
                <div className="w-12 h-1 bg-blue-400 mb-1"></div>
                <div className="w-8 h-1 bg-gray-300"></div>
              </div>
            </div>,
            // HTML Tags
            <div className="text-lg font-mono text-orange-400 font-bold">&lt;div&gt;</div>,
            // CSS Box
            <div className="w-8 h-8 border-2 border-blue-400 bg-blue-100 relative">
              <div className="absolute inset-1 bg-blue-300"></div>
            </div>,
            // JavaScript Symbol
            <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
              <span className="text-black font-bold text-sm">JS</span>
            </div>,
            // Responsive Grid
            <div className="w-10 h-8 grid grid-cols-3 gap-px bg-gray-400">
              {Array.from({length: 6}, (_, j) => (
                <div key={j} className="bg-white"></div>
              ))}
            </div>,
            // API Endpoint
            <div className="w-12 h-6 border border-green-400 rounded flex items-center justify-center">
              <span className="text-xs text-green-400 font-mono">API</span>
            </div>,
            // Database Icon
            <div className="w-6 h-8 relative">
              <div className="w-6 h-2 bg-purple-500 rounded-full"></div>
              <div className="w-6 h-4 bg-purple-600 mt-1"></div>
              <div className="w-6 h-2 bg-purple-500 rounded-full mt-1"></div>
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
        
        {/* Floating Web Symbols */}
        {Array.from({length: 20}, (_, i) => {
          const symbols = ['&lt;', '&gt;', '{', '}', '()', '[]', '&amp;&amp;', '||', '===', '!='];
          return (
            <div
              key={i}
              className="absolute text-xl font-mono text-orange-400/30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {symbols[i % symbols.length]}
            </div>
          );
        })}
      </div>

      <div className="relative z-10 p-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
              <motion.h1 variants={fadeInUp} className="scroll-mt-nav text-4xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-pink-600 bg-clip-text text-transparent font-">
                WEB DEVELOPMENT
              </motion.h1>
              <div className="w-3 h-3 bg-blue-500 rounded-full ml-6"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full ml-2"></div>
              <div className="w-3 h-3 bg-orange-500 rounded-full ml-2"></div>
            </div>
            <p className="text-gray-300 text-xl font-mono">
              Frontend • Backend • Full-Stack Solutions
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {webServices.map((service, index) => (
              <motion.div
                key={service.title}
                className="group relative bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600 hover:border-orange-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/20 overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
                variants={fadeInUp}
              >
                {/* Browser Header */}
                <div className="absolute top-0 left-0 w-full h-8 bg-slate-700 border-b border-slate-600 flex items-center px-4 rounded-t-2xl">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">localhost:3000/{service.title.toLowerCase().replace(' ', '-')}</div>
                </div>
                
                <div className="relative z-10 mt-8">
                  {/* Service Header */}
                  <div className="flex items-center mb-4">
                    <div className={`text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Tools */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-gray-400 mb-2 font-mono">TECH_STACK:</p>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className={`px-3 py-1 bg-gradient-to-r ${service.color} text-white text-xs font-medium rounded-md hover:scale-110 transition-transform duration-200`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Web Elements */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 border border-orange-400 rounded flex items-center justify-center hover:bg-orange-400/10 transition-colors cursor-pointer">
                        <span className="text-orange-400 text-xs font-mono">&lt;/&gt;</span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-500 rounded flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-white text-xs font-bold">CSS</span>
                      </div>
                      <div className="w-8 h-8 border border-green-400 rounded flex items-center justify-center hover:bg-green-400/10 transition-colors cursor-pointer">
                        <span className="text-green-400 text-xs font-mono">JS</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Code Decoration */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="space-y-1">
                    <div className="w-12 h-1 bg-orange-400"></div>
                    <div className="w-8 h-1 bg-blue-400"></div>
                    <div className="w-10 h-1 bg-green-400"></div>
                    <div className="w-6 h-1 bg-purple-400"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <a href="/contact" className="inline-block px-12 py-4 bg-gradient-to-r from-orange-500 via-red-500 to-pink-600 text-white font-bold rounded-lg hover:from-orange-400 hover:via-red-400 hover:to-pink-500 transition-all duration-300 text-lg transform hover:scale-110 shadow-2xl">
              🌐 DEPLOY_WEBSITE()
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Web;
