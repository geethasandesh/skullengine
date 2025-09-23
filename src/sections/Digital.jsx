import React from 'react';

const Digital = () => {
  const digitalServices = [
    {
      title: 'Content Marketing',
      description: 'Strategic content creation and distribution that builds brand authority and drives engagement.',
      gradient: 'from-pink-500 to-rose-600',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z"/><path d="M14 2v6h6"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/></svg>
    },
    {
      title: 'SEO Optimization',
      description: 'Data-driven SEO strategies that boost organic visibility and drive qualified traffic.',
      gradient: 'from-blue-500 to-cyan-600',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>
    },
    {
      title: 'PPC Advertising',
      description: 'High-converting paid advertising campaigns that maximize ROI and accelerate growth.',
      gradient: 'from-green-500 to-emerald-600',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/></svg>
    },
    {
      title: 'Email Marketing',
      description: 'Automated email campaigns that nurture leads and drive customer retention.',
      gradient: 'from-purple-500 to-indigo-600',
      icon: <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({length: 20}, (_, i) => {
          const icons = [
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/></svg>,
            <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.5 6L12 10.5 8.5 8 12 5.5 15.5 8zM8.5 16L12 13.5 15.5 16 12 18.5 8.5 16z"/></svg>,
            <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>
          ];
          return (
            <div
              key={i}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 90}%`,
                top: `${Math.random() * 90}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              {icons[i % icons.length]}
            </div>
          );
        })}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-slackey text-4xl font-bold md:text-4xl mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-blue-500 to-green-500">
            Digital Marketing Services
          </h1>
          <p className="text-xl text-gray-600 mb-4 max-w-3xl mx-auto">
            Transform your business with data-driven digital strategies that deliver exponential growth
          </p>
        </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {digitalServices.map((service, index) => (
              <article key={service.title} className="bg-white rounded-2xl p-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 max-w-sm mx-auto">
                <section className={`bg-gradient-to-br ${service.gradient.replace('from-', 'from-').replace('to-', 'to-')}/10 rounded-xl p-6 mb-4`}>
                  <header className="flex justify-end items-center mb-6">
                    <div className="p-2 bg-white/20 rounded-lg">
                      <svg height={20} width={20} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none">
                        <path d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" strokeLinejoin="round" strokeLinecap="round" />
                      </svg>
                    </div>
                  </header>
                  <p className="text-2xl font-bold text-gray-800 pr-4 leading-tight">{service.title}</p>
                </section>
                
                <footer className="px-3 pb-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2 bg-gradient-to-br ${service.gradient} rounded-lg text-white`}>
                      {service.icon}
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-sm leading-tight">
                        {service.title.split(' ')[0]} <br />
                        {service.title.split(' ').slice(1).join(' ')}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </footer>
              </article>
            ))}
          </div>
          
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Ready to Scale Your Digital Presence?</h3>
            <p className="text-gray-600 mb-6 text-lg">
              Join thousands of businesses growing with our proven digital marketing strategies
            </p>
            <div className="flex items-center justify-center space-x-8 mb-6 text-sm flex-wrap gap-4">
              <div className="flex items-center text-green-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center text-blue-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Custom Strategy</span>
              </div>
              <div className="flex items-center text-purple-600">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
                <span>Growth Guarantee</span>
              </div>
            </div>
          </div>
          <a href="/contact" className="inline-block px-10 py-4 bg-gradient-to-r from-pink-500 to-blue-600 text-white font-bold rounded-xl hover:from-pink-600 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-1">
            Start Growing Today
          </a>
        </div>
      </div>
    </div>
  );
};

export default Digital;
