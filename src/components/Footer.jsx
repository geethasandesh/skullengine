import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <div className="mb-6 sm:col-span-2 lg:col-span-1">

            <img src="/images/final-logo-white_name.svg" alt="Skull Engine" className="w-66" />
            <p>.</p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Professional animation services with a unique skull-themed aesthetic. We bring your creative visions to life.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/animation" className="text-gray-400 hover:text-white transition-colors">3D Animation</Link></li>
              <li><Link to="/app-development" className="text-gray-400 hover:text-white transition-colors">App Development</Link></li>
              <li><Link to="/digital" className="text-gray-400 hover:text-white transition-colors">Digital Marketing</Link></li>
              <li><Link to="/web" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
              <li><Link to="/interior" className="text-gray-400 hover:text-white transition-colors">Interior Design</Link></li>
              <li><Link to="/vfx" className="text-gray-400 hover:text-white transition-colors">VFX</Link></li>
              <li><Link to="/graphic" className="text-gray-400 hover:text-white transition-colors">Graphic Design</Link></li>
              <li><Link to="/video" className="text-gray-400 hover:text-white transition-colors">Video Editing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.instagram.com/skullenginestudio?igsh=MXVyZ3AzdmtiaTk2aw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.326.975.975 1.264 2.242 1.326 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.326 3.608-.975.975-2.242 1.264-3.608 1.326-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.326-.975-.975-1.264-2.242-1.326-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.326-3.608.975-.975 2.242-1.264 3.608-1.326C8.416 2.175 8.796 2.163 12 2.163zm0 1.837c-3.17 0-3.548.012-4.796.069-1.035.048-1.602.218-1.975.363-.497.193-.852.423-1.226.797-.374.374-.604.729-.797 1.226-.145.373-.315.94-.363 1.975-.057 1.248-.069 1.626-.069 4.796s.012 3.548.069 4.796c.048 1.035.218 1.602.363 1.975.193.497.423.852.797 1.226.374.374.729.604 1.226.797.373.145.94.315 1.975.363 1.248.057 1.626.069 4.796.069s3.548-.012 4.796-.069c1.035-.048 1.602-.218 1.975-.363.497-.193.852-.423 1.226-.797.374-.374.604-.729.797-1.226.145-.373.315-.94.363-1.975.057-1.248.069-1.626.069-4.796s-.012-3.548-.069-4.796c-.048-1.035-.218-1.602-.363-1.975-.193-.497-.423-.852-.797-1.226-.374-.374-.729-.604-1.226-.797-.373-.145-.94-.315-1.975-.363-1.248-.057-1.626-.069-4.796-.069zm0 3.905a5.095 5.095 0 1 1 0 10.19 5.095 5.095 0 0 1 0-10.19zm0 1.837a3.258 3.258 0 1 0 0 6.516 3.258 3.258 0 0 0 0-6.516zm5.338-2.163a1.2 1.2 0 1 1 0 2.399 1.2 1.2 0 0 1 0-2.399z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/skullenginestudio/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.352V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.37-1.852 3.605 0 4.27 2.372 4.27 5.456v6.287zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.561V9h3.553v11.452z" />
                </svg>
              </a>
              <a href="https://wa.me/917670927828?text=Hi%2C%20can%20I%20know%20detailed%20info%20about%20your%20services%3F" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0C5.5.01.2 5.3.2 11.84c0 2.09.55 4.14 1.6 5.94L0 24l6.4-1.66a11.8 11.8 0 0 0 5.63 1.43h.01c6.54 0 11.84-5.3 11.84-11.84 0-3.17-1.23-6.15-3.36-8.45zM12.04 21.3h-.01a9.48 9.48 0 0 1-4.84-1.33l-.35-.2-3.8.99 1.02-3.7-.22-.38a9.47 9.47 0 0 1-1.45-4.95c0-5.23 4.26-9.49 9.5-9.49 2.54 0 4.93.99 6.72 2.78a9.45 9.45 0 0 1 2.79 6.71c0 5.24-4.26 9.49-9.48 9.49zm5.49-7.1c-.3-.15-1.76-.86-2.03-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.08-1.74-.87-2.88-1.55-4.03-3.51-.3-.52.3-.48.86-1.6.09-.18.05-.33-.03-.48-.08-.15-.66-1.59-.9-2.17-.24-.58-.49-.5-.66-.51l-.56-.01c-.19 0-.48.07-.73.33-.25.26-.96.94-.96 2.28 0 1.34.99 2.64 1.13 2.82.15.2 1.95 2.98 4.74 4.19.66.28 1.17.45 1.56.57.65.21 1.24.18 1.71.11.52-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.08-.12-.3-.2-.6-.35z" />
                </svg>
              </a>
            </div>
            <div className="text-gray-400 text-sm space-y-1">
              <div>
                <span>Email: </span>
                <a href="mailto:skullenginestudio@gmail.com" className="hover:text-white transition-colors">
                  skullenginestudio@gmail.com
                </a>
              </div>
              <div>
                <span>Phone: </span>
                <a href="tel:+914040103376" className="hover:text-white transition-colors">
                  040-40103376
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} SkullEngine. All rights reserved.   Developed By Grahmind Innovations</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
