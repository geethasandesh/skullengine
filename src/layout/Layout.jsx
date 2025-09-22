import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-grow pt-20 sm:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;