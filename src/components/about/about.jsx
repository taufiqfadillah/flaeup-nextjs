'use client';

import Image from 'next/image';
import { lazy } from 'react';

const AboutHero = lazy(() => import('@/components/about/heroabout'));
const OurCapabilities = lazy(() => import('@/components/about/ourcapabilities'));
const ServicesList = lazy(() => import('@/components/about/serviceslist'));
const LogoSlider = lazy(() => import('@/components/about/logoslider'));
const Button = lazy(() => import('@/components/button-whatsapp'));

const About = () => {
  return (
    <>
      <AboutHero />
      <section className="overflow-hidden relative bg-white">
        <div className="pt-10 md:pt-24">
          <div className="text-center text-1xl md:text-lg leading-normal tracking-wide mb-20">OUR STORY</div>
          <div className="w-full h-px bg-black mb-10" />
          <div className="w-full px-5 md:px-14 py-10 text-xl md:text-[28px] leading-normal tracking-normal">
            <div className="px-2">
              The studio is centered on the power of simplicity, focusing on breaking down complex ideas into easy to compose story components.
              <br />
              We have the privilege of working with well known brands but prioritize great projects that allow us to develop our craft.
            </div>
          </div>
          <div className="w-full flex py-10 px-4 md:px-14 justify-center items-center gap-5 lg:gap-6">
            <div className="w-3/10 flex justify-center">
              <Image src="/images/about/About-02.jpg" alt="About Image" width={430} height={490} loading="eager" style={{ maxWidth: '900', maxHeight: '430px' }} />
            </div>
            <div className="w-7/10 flex justify-center">
              <Image src="/images/about/About-03.jpg" alt="About Image" width={900} height={490} loading="eager" style={{ maxWidth: '900', maxHeight: '430px' }} />
            </div>
          </div>
          <div className="w-full flex py-10 px-2 md:px-14">
            <div className="w-[340px] px-2">
              <div className="text-xs md:text-lg text-left font-normal">OUR STORY</div>
            </div>
            <div className="w-[900px] px-2 md:pl-32 pb-24">
              <div className="text-lg md:text-[28px] md:leading-normal md:tracking-normal">
                Flaeup is a creative collective of design artists dedicated to bringing your vision to life. We utilize visual storytelling and graphics as primary tools, with our shared goal being to harness the power of creativity to
                elevate your brand.
                <br />
                <br />
                Design that speaks” has become our signature tagline, perfectly encapsulating our ethos as a design studio. We continually strive to surpass previous achievements, constantly evolving and pushing boundaries in every aspect
                of design and creativity we engage in.
                <br />
                <br />
                We recognize that the pursuit of excellence is not a destination but a journey, and we invite you to join us on this journey.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#82CAAA] text-black">
        <OurCapabilities />
        <ServicesList />
      </section>
      <LogoSlider />
      <Button />
    </>
  );
};

export default About;
