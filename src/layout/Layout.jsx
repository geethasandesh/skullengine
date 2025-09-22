import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className={`flex-grow ${isHome ? '' : 'pt-20 sm:pt-24'}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;