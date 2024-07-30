'use client';

import Image from 'next/image';
import React, { useMemo, lazy } from 'react';
import Slider from 'react-infinite-logo-slider';
import useStickySection from '@/hooks/useStickySection.jsx';
import { v4 as uuidv4 } from 'uuid';

const AboutHero = lazy(() => import('@/components/about/heroabout.jsx'));
const ServicesList = lazy(() => import('@/components/about/services-list.jsx'));

const About = () => {
  useStickySection();

  const clientLogos = useMemo(
    () => [
      '/images/client/Client Logo black-01.svg',
      '/images/client/Client Logo black-02.svg',
      '/images/client/Client Logo black-03.svg',
      '/images/client/Client Logo black-04.svg',
      '/images/client/Client Logo black-05.svg',
      '/images/client/Client Logo black-06.svg',
      '/images/client/Client Logo black-07.svg',
    ],
    []
  );

  const clientSlides = useMemo(
    () =>
      clientLogos.map((src, index) => (
        <Slider.Slide key={src}>
          <Image src={src} alt={`Client Logo ${index + 1}`} className="md:w-40 w-28" width={300} height={300} />
        </Slider.Slide>
      )),
    [clientLogos]
  );

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
              <Image src="/images/about/About-02.jpg" alt="About Image" width={430} height={490} />
            </div>
            <div className="w-7/10 flex justify-center">
              <Image src="/images/about/About-03.jpg" alt="About Image" width={900} height={490} />
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
        <div className="py-20 bg-[#82CAAA] text-black">
          <div className="text-2xl md:text-5xl px-4 md:px-14 pb-0 md:pb-20">Our Capabilities</div>
          <div className="py-0 md:py-24 pt-24 md:pt-0">
            <Slider width="100%" duration={20} toRight={false} pauseOnHover={false} blurBorders={false} blurBoderColor="#82caaa" className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {['/images/video/Branding Video.mp4', '/images/video/Retouching Video.mp4', '/images/video/UIUX Video.mp4'].map((src, index) => (
                <div key={src}>
                  <video src={src} alt={`Video ${index + 1}`} className="h-[300px] md:h-[260px]" autoPlay muted loop style={{ width: 'calc(100% - 20px)', objectFit: 'cover', marginRight: '20px' }} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <ServicesList />
      </section>
      <section className="h-[55vh] md:h-[85vh] lg:h-[105vh] bg-[#82CAAA] text-black panel">
        <div className="px-4 md:px-14">
          <div className="text-2xl md:text-5xl sm:text-left leading-[100.098%] tracking-[0.48px]">Clients</div>
        </div>
        <div className="pt-10 md:pt-20">
          {Array(3)
            .fill(null)
            .map((_, index) => {
              const uniqueKey = `${index}-${uuidv4()}`; // Create a unique key using index and uuid
              return (
                <Slider key={uniqueKey} width="200px" duration={index * 10 + 20} pauseOnHover={false} blurBorders={false} blurBorderColor="#82CAAA">
                  {clientSlides}
                </Slider>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default About;
