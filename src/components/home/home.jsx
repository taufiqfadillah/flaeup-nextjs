import { lazy } from 'react';

const Hero = lazy(() => import('@/components/home/hero'));
const Capabilities = lazy(() => import('@/components/home/capabilities'));
const Brand = lazy(() => import('@/components/home/brand'));

const Home = () => {
  return (
    <>
      <Hero />
      <Capabilities />
      <Brand />
    </>
  );
};

export default Home;
