import React from 'react';

const Web = () => {
  return (
    <section className="min-h-screen py-20 bg-black text-white relative overflow-hidden" id="web">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-orange-500/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 border border-red-500/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-purple-500/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-slackey text-5xl md:text-7xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
            Web Development
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-4xl mx-auto">
            Crafting powerful web experiences with cutting-edge technology
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            From responsive websites to complex web applications, we deliver digital solutions that make an impact
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {/* React & Frontend */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden group hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
            <div className="h-56 bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
              <svg className="w-28 h-28 text-orange-500 group-hover:scale-110 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.36-.034-.47 0-.92.014-1.36.034.44-.572.895-1.096 1.36-1.564zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.36.034.47 0 .92-.014 1.36-.034-.44.572-.895 1.095-1.36 1.56-.465-.467-.92-.992-1.36-1.56z"/>
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">React & Frontend</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Modern React applications with responsive design, smooth animations, and optimized performance for exceptional user experiences.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Tailwind</span>
              </div>
              <a href="#" className="text-orange-500 font-medium inline-flex items-center group-hover:text-orange-400 transition-colors">
                Explore Frontend
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Backend & APIs */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden group hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
            <div className="h-56 bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent"></div>
              <svg className="w-28 h-28 text-orange-500 group-hover:scale-110 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">Backend & APIs</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Robust server-side solutions with Node.js, databases, and secure API integrations for scalable web applications.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">MongoDB</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Express</span>
              </div>
              <a href="#" className="text-orange-500 font-medium inline-flex items-center group-hover:text-orange-400 transition-colors">
                Explore Backend
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* E-commerce & CMS */}
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden group hover:border-orange-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2">
            <div className="h-56 bg-gradient-to-br from-orange-500/10 to-red-500/10 flex items-center justify-center p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent"></div>
              <svg className="w-28 h-28 text-orange-500 group-hover:scale-110 transition-transform duration-500 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
              </svg>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-orange-500 transition-colors">E-commerce & CMS</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">Complete online stores with payment integration, inventory management, and content management systems.</p>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Shopify</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Stripe</span>
                <span className="px-3 py-1 bg-orange-500/10 text-orange-400 rounded-full text-sm">Sanity</span>
              </div>
              <a href="#" className="text-orange-500 font-medium inline-flex items-center group-hover:text-orange-400 transition-colors">
                Explore E-commerce
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <a href="#" className="inline-block px-10 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-medium rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-2xl shadow-orange-500/20 hover:shadow-orange-500/30 hover:-translate-y-1">
            View Web Portfolio
          </a>
        </div>
      </div>
    </section>
  );
};

export default Web;
