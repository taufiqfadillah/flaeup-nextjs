import { lazy } from 'react';

const Hero = lazy(() => import('@/components/home/hero'));
const Capabilities = lazy(() => import('@/components/home/capabilities'));
const Brand = lazy(() => import('@/components/home/brand'));
const Button = lazy(() => import('@/components/button-whatsapp'));

const Home = () => {
  return (
    <>
      <Hero />
      <Capabilities />
      <Brand />
      <Button />
    </>
  );
};

export default Home;
