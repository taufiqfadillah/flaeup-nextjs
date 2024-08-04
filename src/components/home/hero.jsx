'use client';

import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import lottie from 'lottie-web';
import debounce from 'lodash.debounce';
import { useInView } from 'react-intersection-observer';
import useMediaQueries from '@/hooks/useMediaQueries';

gsap.registerPlugin(ScrollTrigger);

const useDebouncedGSAP = (callback, delay, dependencies) => {
  useEffect(() => {
    const debouncedCallback = debounce(callback, delay);
    debouncedCallback();
    return () => debouncedCallback.cancel();
  }, [callback, delay, ...dependencies]);
};

const LottieScrollTrigger = ({ target, path, scrub = 1, ...vars }) => {
  const playhead = { frame: 0 };
  const targetElem = gsap.utils.toArray(target)[0];
  const targetOffset = gsap.getProperty(targetElem, 'top') || 0;

  const st = {
    trigger: targetElem,
    start: `top+=${targetOffset} top`,
    end: 'bottom center',
    scrub,
    ...vars,
  };

  const animation = lottie.loadAnimation({
    container: targetElem,
    renderer: vars.renderer || 'svg',
    loop: false,
    autoplay: false,
    path,
    rendererSettings: vars.rendererSettings || {
      preserveAspectRatio: 'xMidYMid slice',
    },
  });

  animation.addEventListener('DOMLoaded', () => {
    const tween = gsap.to(playhead, {
      frame: animation.totalFrames - 1,
      ease: 'none',
      onUpdate: () => animation.goToAndStop(playhead.frame, true),
      scrollTrigger: st,
    });

    return () => {
      tween?.kill();
      animation.destroy();
    };
  });

  return animation;
};

const Hero = () => {
  const videoRef = useRef(null);
  const heroContainerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: false });
  const { isMobile } = useMediaQueries();
  const animation = useRef(null);

  const animateHeroSection = () => {
    if (isMobile) return;

    gsap.fromTo(heroContainerRef.current, { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2, ease: 'back.inOut(2)' });

    animation.current = LottieScrollTrigger({
      target: '.hero__container',
      path: '/images/lottie/Creativity_Text_Animateds.json',
      scrub: 1,
    });

    gsap.set(videoRef.current, { y: 0 });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top 90%',
          end: 'bottom 80%',
          scrub: 1,
        },
      })
      .to(videoRef.current, { duration: 1, y: '-65vh' });
  };

  useDebouncedGSAP(animateHeroSection, 100, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      videoRef.current?.load();
      videoRef.current.muted = !inView;
      setIsMuted(!inView);
    } else {
      videoRef.current.muted = false;
      setIsMuted(false);
    }
  }, [inView, isMobile]);

  return (
    <>
      {/* Hero Desktop */}
      <section className="relative pb-10 bg-white justify-center overflow-hidden hidden lg:block">
        <div className="container flex">
          <div className="w-full h-[140vh]">
            <div ref={heroContainerRef} className="hero__container items-end w-screen h-screen object-cover rotate-180" />
            <div className="flex justify-center w-screen h-auto">
              <video
                ref={(element) => {
                  videoRef.current = element;
                  ref(element);
                }}
                preload="auto"
                rel="preload"
                className="hero__vide flex w-full h-[650px] object-cover"
                src="/images/video/Homepage Videos.mp4"
                autoPlay
                playsInline
                loop
                muted={isMuted}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Mobile */}
      <section className="block lg:hidden">
        <div className="h-85vh lg:h-auto w-auto">
          <div className="mt-[120px]">
            <div className="flex border-b">
              <h1 className="text-6xl font-bold px-2 pb-4">Creativity is central to our design.</h1>
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
