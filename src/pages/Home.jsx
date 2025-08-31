import React from 'react';
import Hero from '../sections/Hero';
import Animation from '../sections/Animation';
import AppDevelopment from '../sections/AppDevelopment';
import Digital from '../sections/Digital';
import Web from '../sections/Web';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Animation />
      <AppDevelopment />
      <Digital />
      <Web />
    </div>
  );
};

export default Home;