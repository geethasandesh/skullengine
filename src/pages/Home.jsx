import React from 'react';
import Hero from '../sections/Hero';
import Animation from '../sections/Animation';
import Vfx from '../sections/Vfx';
import Interior from '../sections/Interior';
import Video from '../sections/Video';
import Graphic from '../sections/Graphic';
import AppDevelopment from '../sections/AppDevelopment';
import Digital from '../sections/Digital';
import Web from '../sections/Web';

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Animation />
      <Vfx />
      <Interior />
      <Video />
      <Graphic />
      <AppDevelopment />
      <Digital />
      <Web />
    </div>
  );
};

export default Home;