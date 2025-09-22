import React from 'react';

const AppDevelopment = () => {
  const appServices = [
    {
      title: 'iOS Development',
      description: 'Native iOS apps built with Swift and SwiftUI, optimized for performance and App Store success.',
      color: 'from-blue-500 to-indigo-500',
      tools: ['Swift', 'SwiftUI', 'Xcode'],
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
    },
    {
      title: 'Android Development',
      description: 'Native Android apps using Kotlin and Jetpack Compose for modern, efficient mobile experiences.',
      color: 'from-green-500 to-emerald-500',
      tools: ['Kotlin', 'Jetpack Compose', 'Android Studio'],
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396"/></svg>
    },
    {
      title: 'React Native',
      description: 'Cross-platform apps that work seamlessly across iOS and Android with shared codebases.',
      color: 'from-cyan-500 to-blue-500',
      tools: ['React Native', 'Expo', 'JavaScript'],
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 01-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9s-1.17 0-1.71.03c-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03s1.17 0 1.71-.03c.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.37 1.95-1.47-.84-1.63-3.05-1.01-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1.01-5.63 1.46-.84 3.45.12 5.37 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26S20.07 10.37 17.97 9.74c-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26s1.18 1.63 3.28 2.26c.25-.76.55-1.51.89-2.26"/></svg>
    },
    {
      title: 'Flutter Development',
      description: 'Beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.',
      color: 'from-purple-500 to-pink-500',
      tools: ['Flutter', 'Dart', 'Firebase'],
      icon: <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.37zm.159 11.871L6.857 19.48l4.97 4.97L2.3 12l6.557-6.557L21.684 18.27 14.473 11.87z"/></svg>
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
      {/* Developer Background Elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Code Elements */}
        {Array.from({length: 60}, (_, i) => {
          const elements = [
            // Terminal Window
            <div className="w-16 h-12 bg-gray-800 border border-gray-600 rounded relative">
              <div className="flex space-x-1 p-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="px-2 py-1">
                <div className="w-8 h-1 bg-green-400 mb-1"></div>
                <div className="w-6 h-1 bg-blue-400"></div>
              </div>
            </div>,
            // Code Brackets
            <div className="text-2xl font-mono text-cyan-400 font-bold">{ }</div>,
            // Mobile Phone
            <div className="w-6 h-10 bg-gray-700 border border-gray-500 rounded-lg relative">
              <div className="w-4 h-6 bg-blue-400 m-1 rounded"></div>
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-1 bg-gray-500 rounded"></div>
            </div>,
            // Git Branch
            <svg className="w-8 h-8 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687Z"/>
            </svg>,
            // API Icon
            <div className="w-10 h-6 border-2 border-purple-400 rounded flex items-center justify-center">
              <span className="text-xs text-purple-400 font-bold">API</span>
            </div>,
            // Database
            <div className="w-8 h-8 relative">
              <div className="w-8 h-2 bg-green-500 rounded-full"></div>
              <div className="w-8 h-4 bg-green-600 mt-1"></div>
              <div className="w-8 h-2 bg-green-500 rounded-full mt-1"></div>
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
        
        {/* Floating Code Symbols */}
        {Array.from({length: 25}, (_, i) => {
          const symbols = ['<', '>', '/', '{', '}', '(', ')', ';', '=', '+'];
          return (
            <div
              key={i}
              className="absolute text-2xl font-mono text-cyan-400/30 animate-bounce"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
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
              <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full mr-6"></div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent font-mono">
                APP DEVELOPMENT
              </h1>
              <div className="w-3 h-3 bg-blue-500 rounded-full ml-6"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full ml-2"></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full ml-2"></div>
            </div>
            <p className="text-gray-300 text-xl font-mono">
              Mobile Solutions • Cross-Platform • Native Development
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {appServices.map((service, index) => (
              <div
                key={service.title}
                className="group relative bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 overflow-hidden"
                style={{animationDelay: `${index * 0.2}s`}}
              >
                {/* Terminal Header */}
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-800 border-b border-gray-600 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-xs text-gray-400 font-mono">{service.title.toLowerCase().replace(' ', '_')}.app</div>
                </div>
                
                <div className="relative z-10 mt-8">
                  {/* Service Header */}
                  <div className="flex items-center mb-4">
                    <div className={`text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white font-mono">
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
                          className={`px-3 py-1 bg-gradient-to-r ${service.color} text-white text-xs font-medium rounded-md hover:scale-110 transition-transform duration-200 font-mono`}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Code Elements */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-3">
                      <div className="w-8 h-8 border border-cyan-400 rounded flex items-center justify-center hover:bg-cyan-400/10 transition-colors cursor-pointer">
                        <span className="text-cyan-400 text-xs font-mono">&lt;/&gt;</span>
                      </div>
                      <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded flex items-center justify-center hover:scale-110 transition-transform cursor-pointer">
                        <span className="text-white text-xs font-bold">▶</span>
                      </div>
                      <div className="w-8 h-8 border border-purple-400 rounded flex items-center justify-center hover:bg-purple-400/10 transition-colors cursor-pointer">
                        <span className="text-purple-400 text-xs font-mono">{ }</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Code Lines */}
                <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                  <div className="space-y-1">
                    <div className="w-12 h-1 bg-cyan-400"></div>
                    <div className="w-8 h-1 bg-green-400"></div>
                    <div className="w-10 h-1 bg-purple-400"></div>
                    <div className="w-6 h-1 bg-yellow-400"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 mb-6">
              <div className="w-8 h-1 bg-gradient-to-r from-cyan-500 to-transparent"></div>
              <span className="text-gray-300 font-mono text-sm">READY_TO_CODE?</span>
              <div className="w-8 h-1 bg-gradient-to-l from-purple-500 to-transparent"></div>
            </div>
            <a href="/contact" className="inline-block px-12 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 text-white font-bold rounded-lg hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500 transition-all duration-300 text-lg transform hover:scale-110 shadow-2xl font-mono">
              📱 LAUNCH_PROJECT()
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopment;
