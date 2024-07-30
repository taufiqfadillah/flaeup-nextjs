'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LottieScrollTrigger from '@/libs/LottieScrollTrigger';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const videoRef = useRef(null);
  const heroContainerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      heroContainerRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: 'back.inOut(2)',
      }
    );

    const animation = LottieScrollTrigger({
      target: '.hero__container',
      path: '/images/lottie/Creativity_Text_Animateds.json',
      scrub: 1,
    });

    return () => animation.destroy();
  });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(videoRef.current, {
        y: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: 1,
        },
      });

      tl.to(videoRef.current, {
        duration: 1,
        y: '-65vh',
      });
    },
    {
      scope: videoRef.current,
    }
  );

  useEffect(() => {
    if (inView) {
      videoRef.current.muted = false;
      setIsMuted(false);
    } else {
      videoRef.current.muted = true;
      setIsMuted(true);
    }
  }, [inView]);

  return (
    <>
      {/* Hero Desktop*/}
      <section className="relative pb-10 bg-white justify-center overflow-hidden hidden lg:block">
        <div className="container">
          <div className="flex">
            <div className="w-full h-[140vh]">
              <div ref={heroContainerRef} className="hero__container items-end w-screen h-screen rotate-180" />
              <div className="flex justify-center w-screen h-auto">
                <video
                  ref={(element) => {
                    videoRef.current = element;
                    ref(element);
                  }}
                  preload="auto"
                  rel="preload"
                  width="2000"
                  height="2000"
                  className="hero__video absolute w-full h-[650px] object-cover"
                  src="/images/video/Homepage Videos.mp4"
                  autoPlay
                  playsInline
                  loop
                  muted={isMuted}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Hero Mobile --> */}
      <section className="md:block lg:hidden">
        <div className="h-85vh lg:h-auto w-auto">
          <div className="mt-[120px]">
            <div className="flex border-b">
              <h1 className="text-6xl font-bold px-2 pb-4">Creativity is centar to our design.</h1>
            </div>
            <div className="flex flex-wrap -mx-3 align-items-end">
              <div className="w-full h-full">
                <video className="flex h-[70vh] w-full overflow-hidden object-cover" src="/images/video/Homepage Videos.mp4" autoPlay loop muted preload="auto" alt="Flaeup Video" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
