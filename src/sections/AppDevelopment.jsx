import React from 'react';

const AppDevelopment = () => {
  return (
    <section className="py-20 bg-black text-white" id="app-development">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-600">
            App Development
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Building powerful mobile applications that deliver exceptional user experiences with our signature edge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* iOS Development */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center p-6">
              <svg className="w-24 h-24 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">iOS Development</h3>
              <p className="text-gray-400 mb-4">Native iOS apps built with Swift and SwiftUI, optimized for performance and App Store success.</p>
              <a href="#" className="text-blue-500 font-medium inline-flex items-center group-hover:text-blue-400">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Android Development */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center p-6">
              <svg className="w-24 h-24 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">Android Development</h3>
              <p className="text-gray-400 mb-4">Native Android apps using Kotlin and Jetpack Compose for modern, efficient mobile experiences.</p>
              <a href="#" className="text-blue-500 font-medium inline-flex items-center group-hover:text-blue-400">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Cross-Platform Development */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden group hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
            <div className="h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center p-6">
              <svg className="w-24 h-24 text-blue-500 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">Cross-Platform Apps</h3>
              <p className="text-gray-400 mb-4">React Native and Flutter apps that work seamlessly across iOS and Android platforms.</p>
              <a href="#" className="text-blue-500 font-medium inline-flex items-center group-hover:text-blue-400">
                Learn more
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-medium rounded-md hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg shadow-blue-500/20">
            View App Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default AppDevelopment;
