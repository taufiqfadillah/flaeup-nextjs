import React from 'react';
import Hero from '@/components/home/hero';
import Capabilities from '@/components/home/capabilities';
import Brand from '@/components/home/brand';

const Home = () => {
  return (
    <>
      <Hero />
      <Capabilities />
      <div className="h-[60px] md:h-[800px] lg:h-[1000px]" />
      <Brand />
    </>
  );
};

export default Home;
