'use client';

import React, { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMediaQueries from '@/hooks/useMediaQueries';

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const { isMobile } = useMediaQueries();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
      if (!isMobile) {
        document.documentElement.classList.add('stop-scrolling');
        triggerAboutAnimation();
      }
    }

    return () => {
      document.documentElement.classList.remove('stop-scrolling');
    };
  }, [isMobile]);

  useEffect(() => {
    if (isAnimationComplete) {
      ScrollTrigger.refresh();
      document.documentElement.classList.remove('stop-scrolling');
    }
  }, [isAnimationComplete]);

  const triggerAboutAnimation = useCallback(() => {
    if (isMobile) return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    const windowHeight = window.innerHeight;

    tl.to('.perspective_letters span', { y: '0%', opacity: 1, stagger: 0.08, duration: 1.5 }, 0)
      .to(
        '#animated-work-title',
        {
          fontSize: window.innerWidth > 2000 ? '7vw' : '6.25rem',
          y: windowHeight > 650 ? '0%' : '40%',
          x: windowHeight > 650 ? '0%' : '-40%',
          duration: 2,
        },
        1.4
      )
      .to('.section-animated-top-image-one', { width: '56%', duration: 1 }, 2.2)
      .to('.section-animated-top-image-two', { width: '43%', height: '18.5vw', duration: 1 }, 2.2)
      .eventCallback('onComplete', () => {
        setIsAnimationComplete(true);
      });
  }, [isMobile]);

  useEffect(() => {
    if (isAnimationComplete && !isMobile) {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: '.section-animated-top',
          pin: true,
          pinSpacing: false,
          scrub: 0,
          start: 'top top',
          end: '+=400',
        },
      });

      scrollTl.fromTo('#animated-work-title', { opacity: 1 }, { opacity: 0, duration: 1 }).fromTo(
        '.section-animated-top-image-two',
        {
          width: '43%',
          height: 'auto',
          right: '0px',
          x: '0%',
          y: '0%',
        },
        {
          // x: `-${window.innerWidth / 2.1}px`,
          y: '0%',
          width: '100%',
          x: '-16vw',
          duration: 1,
        },
        '<='
      );
    }
  }, [isAnimationComplete, isMobile]);

  return (
    <section className="about-hero max-[768px]:pt-[7rem] max-[1024px]:flex-wrap max-[1024px]:h-[auto] section-animated-top w-full relative bg-white flex max-[600px]:px-[1.5rem] px-[2rem] max-[2000px]:pt-[6rem] pt-[14rem]">
      <div className="about_work_title max-[1024px]:h-[auto] max-[1024px]:w-full max-[1750px]:w-[35%] h-[1146px] w-[35%]">
        <h1
          id="animated-work-title"
          className="max-[375px]:text-[4rem] max-[600px]:text-[5rem] max-[768px]:text-[7.2rem] max-[1024px]:translate-x-[0%] max-[1024px]:translate-y-[0%] max-[1024px]:relative max-[1024px]:text-[10rem] max-[1024px]:items-start max-[1024px]:flex-col w-full flex items-center translate-x-[20%] translate-y-[38vh] text-[20vw] absolute pointer-events-none font-medium px-0 md:px-8"
        >
          <span className="perspective_letters max-[1024px]:w-[100%] flex">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </span>
        </h1>
      </div>
      <div className="max-[600px]:items-start max-[600px]:mt-[0rem] max-[1024px]:justify-between max-[1024px]:w-[100%] max-[1024px]:flex-wrap max-[1024px]:flex w-[65%] relative">
        <Image
          alt="Flaeup Studio"
          width={700}
          height={700}
          className="max-[1024px]:h-[25vw] max-[1024px]:w-[38%] max-[1024px]:relative max-[1750px]:h-[28.2vw] absolute w-[0%] top-[2rem] left-0 object-cover h-[32vw] section-animated-top-image-one"
          src="/images/about/About-01.jpg"
          priority
        />
        <Image
          alt="Flaeup Team"
          width={700}
          height={700}
          className="max-[600px]:translate-y-[-9vw] max-[600px]:object-contain max-[600px]:h-[50vw] max-[768px]:translate-y-[-8.2vw] max-[1024px]:translate-y-[-7.8vw] max-[1024px]:object-contain max-[1024px]:h-[54.4vw] max-[1024px]:w-[60%] max-[1024px]:left-[0%] w-[0%] max-[1024px]:relative absolute w-[0%] top-[2rem] right-[0px] h-[18.5vw] object-cover section-animated-top-image-two"
          src="/images/about/About-01.jpg"
          priority
        />
      </div>
    </section>
  );
};

export default AboutHero;
