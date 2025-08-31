import React from 'react';

const Digital = () => {
  return (
    <section className="min-h-screen py-20 bg-gray-900 text-white relative overflow-hidden" id="digital">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-32 right-20 w-40 h-40 border border-purple-500/20 rounded-full"></div>
        <div className="absolute bottom-32 left-20 w-56 h-56 border border-pink-500/20 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-28 h-28 border border-blue-500/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-slackey text-5xl md:text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-600">
            Digital Marketing
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Amplify your brand presence with strategic campaigns that cut through the noise
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Data-driven marketing strategies that deliver measurable results and sustainable growth
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {/* Social Media & Content */}
          <div className="bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden group hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
            <div className="h-56 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
              <svg className="w-28 h-28 text-purple-500 group-hover:scale-110 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-500 transition-colors">Social Media & Content</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Engaging social media campaigns and content strategies that build communities and drive meaningful engagement.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Instagram</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">TikTok</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">LinkedIn</span>
              </div>
              <a href="#" className="text-purple-500 font-medium inline-flex items-center group-hover:text-purple-400 transition-colors">
                Explore Social Media
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* SEO & Analytics */}
          <div className="bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden group hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
            <div className="h-56 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent"></div>
              <svg className="w-28 h-28 text-purple-500 group-hover:scale-110 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9.5 3A6.5 6.5 0 0 1 16 9.5c0 1.61-.59 3.09-1.56 4.23l.27.27h.79l5 5-1.5 1.5-5-5v-.79l-.27-.27A6.516 6.516 0 0 1 9.5 16 6.5 6.5 0 0 1 3 9.5 6.5 6.5 0 0 1 9.5 3m0 2C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z"/>
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-500 transition-colors">SEO & Analytics</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Strategic SEO optimization and data analytics to boost search rankings and track performance metrics.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Google Analytics</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">SEMrush</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Ahrefs</span>
              </div>
              <a href="#" className="text-purple-500 font-medium inline-flex items-center group-hover:text-purple-400 transition-colors">
                Explore SEO Services
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* PPC & Advertising */}
          <div className="bg-black/30 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden group hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 hover:-translate-y-2">
            <div className="h-56 bg-gradient-to-br from-purple-500/10 to-pink-500/10 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent"></div>
              <svg className="w-28 h-28 text-purple-500 group-hover:scale-110 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 17h-2v-6h2m0-4h-2V5h2m-1-3a10 10 0 1 0 10 10A10 10 0 0 0 12 2Z"/>
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-purple-500 transition-colors">PPC & Advertising</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Targeted advertising campaigns across platforms that maximize ROI and drive qualified leads to your business.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Google Ads</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">Facebook Ads</span>
                <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">YouTube Ads</span>
              </div>
              <a href="#" className="text-purple-500 font-medium inline-flex items-center group-hover:text-purple-400 transition-colors">
                Explore Advertising
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-block px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/30 hover:-translate-y-1">
            View Marketing Case Studies
          </a>
        </div>
      </div>
    </section>
  );
};

export default Digital;
