import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMediaQueries from '@/hooks/useMediaQueries';

gsap.registerPlugin(ScrollTrigger);

const HeroCapabilities = ({
  headingTextOne,
  headingTextTwo,
  subheadingTextOne,
  subheadingTextTwo,
  subheadingTextThree,
  subheadingTextFour,
  descriptionTextOne,
  descriptionTextTwo,
  images1,
  images2,
  images3,
  images4,
  images5,
  images6,
  images7,
  images8,
  images9,
  images10,
}) => {
  const { isMobile, isLaptopAndDesktop } = useMediaQueries();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {};
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const headingRef = useRef(null);
  const subheadingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 1, ease: 'power3.out' } });

      tl.fromTo(headingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2 });

      tl.fromTo(subheadingRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2 }, '-=0.8');

      tl.fromTo(descriptionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: 0.2 }, '-=0.8');

      tl.fromTo(buttonRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, stagger: 0.2 }, '-=0.8');
    });

    return () => ctx.revert();
  }, []);

  // ScrollTrigger
  useEffect(() => {
    if (!isMobile && isLaptopAndDesktop) {
      const e = document.getElementById('projects-scroller-inner').offsetHeight;
      const t = document.querySelectorAll('.image-holder')[document.querySelectorAll('.image-holder').length - 1].offsetHeight;
      // const r = document.querySelectorAll('#digital-experience-scroller').offsetHeight;
      document.querySelectorAll('#pin-capabilities').offsetHeight;
      const a = gsap.timeline({
        scrollTrigger: {
          ease: 'none',
          trigger: '#capabilities-wrapper',
          start: 'top top',
          pin: true,
          scrub: true,
          once: false,
          // endTrigger: "#digital-experience-scroller",
          end: '+=1900',
          // markers: true,
        },
      });
      a.to('#projects-scroller-inner', 2, { y: `-${e - t}px` });
      // a.to('#digital-experience-scroller-inner', {
      //   y: `-${r}px`,
      // });
    }
  }, [isMobile, isLaptopAndDesktop]);

  return (
    <>
      <section className="max-[600px]:h-full max-[600px]:pt-[7rem] max-[600px]:px-[1.5rem] max-[1024px]:h-[auto] px-[2rem] flex flex-wrap h-screen overflow-hidden" id="capabilities-wrapper">
        <div className="flex w-full max-[600px]:h-full h-screen items-center justify-between px-0 lg:px-[2rem] max-[600px]:flex-col">
          <div className="w-4/10 max-[600px]:w-full">
            <h1 ref={headingRef} className="max-[600px]:text-[3.5rem] max-[600px]:opacity-100 text-[#212121] max-[1750px]:text-[4rem] text-[4.5vw] text-normal font-medium leading-[120%] tracking-[-0.1rem] overflow-hidden pt-0 md:pt-20">
              {headingTextOne} <br /> {headingTextTwo}
            </h1>
            <h2
              ref={subheadingRef}
              className="max-[600px]:block max-[600px]:opacity-100 max-[600px]:text-[1.5rem] main-h2 text-[#212121] max-[600px]:[&>br]:hidden max-[1750px]:text-[1.5rem] text-[1.5vw] font-normal leading-[150%] tracking-normal my-[3rem]"
            >
              {subheadingTextOne}
              <br />
              {subheadingTextTwo}
              <br />
              {subheadingTextThree}
              <br /> {subheadingTextFour}
            </h2>
            <p className=" max-[600px]:mb-[2rem] max-[600px]:opacity-100 max-[600px]:mt-[2rem] max-[1024px]:mb-[3rem] max-[1024px]:mt-[1rem] text-[#212121] max-[1750px]:text-[1rem] text-[0.8vw] font-normal leading-[110%] tracking-normal uppercase my-[4rem] overflow-hidden top-strategy flex">
              <span className="flex relative overflow-hidden">
                <span ref={descriptionRef} className="inner max-[1024px]:translate-y-[0px] max-[1024px]:opacity-100 translate-y-[50px] relative flex">
                  {descriptionTextOne} <br /> {descriptionTextTwo}
                </span>
              </span>
            </p>
            <div ref={buttonRef}>
              <span className="inner max-[600px]:opacity-100 max-[1024px]:translate-y-[0px] max-[1024px]:opacity-100 max-[1024px]:opacity-100 flex">
                <a className="underlined_button flex" href="/contact">
                  <p className="max-[1024px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] leading-[120%] font-medium text-[#212121]">Let&apos;s Talk</p>
                </a>
              </span>
            </div>
          </div>
          <div
            className="w-6/10 max-[600px]:w-full max-[600px]:h-full max-[600px]:mt-[4rem] max-[1024px]:mt-[6rem] max-[1024px]:my-[4rem] max-[1024px]:h-[auto] max-[1024px]:my-[5rem] max-[1024px]:pointer-events-auto max-[1024px]:w-[100%] max-[1750px]:w-[55%] w-[60%] overflow-y-scroll h-screen capabilties_no_scrollbar pointer-events-none pt-8 md:pt-24"
            id="projects-scroller"
          >
            <div
              id="projects-scroller-inner"
              className="flex flex-wrap flex-column opacity-100"
              style={{
                translate: 'none',
                rotate: 'none',
                scale: 'none',
                transform: 'translate3d(0px, -0.0016px, 0px)',
              }}
            >
              <div className="image-holder overflow-hidden one-image w-[100%]">
                {images1.endsWith('.mp4') ? (
                  <video preload="auto" className="max-[1024px]:opacity-100 object-cover w-[100%]" src={images1} autoPlay loop muted />
                ) : (
                  <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[100%]" src={images1} priority />
                )}
              </div>
              <div className="image-holder overflow-hidden two-images w-[100%] flex gap-5 overflow-hidden mt-[1rem]">
                {images2.endsWith('.mp4') ? (
                  <video preload="auto" className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images2} autoPlay loop muted />
                ) : (
                  <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images2} priority />
                )}
                <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images3} priority />
              </div>
              <div className="image-holder overflow-hidden one-image w-[100%]  mt-[1rem]">
                <video preload="auto" className="max-[1024px]:opacity-100 object-cover w-[100%]" src={images4} autoPlay loop muted />
              </div>
              <div className="image-holder overflow-hidden two-images w-[100%] flex gap-5 overflow-hidden mt-[1rem]">
                <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images5} priority />
                {images6.endsWith('.mp4') ? (
                  <video preload="auto" className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images6} autoPlay loop muted />
                ) : (
                  <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images6} priority />
                )}
              </div>
              <div className="image-holder overflow-hidden one-image w-[100%] mt-[1rem]">
                {images7.endsWith('.mp4') ? (
                  <video preload="auto" className="max-[1024px]:opacity-100 object-cover w-[100%]" src={images7} autoPlay loop muted />
                ) : (
                  <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[100%]" src={images7} priority />
                )}
              </div>
              <div className="image-holder overflow-hidden two-images w-[100%] flex gap-5 overflow-hidden mt-[1rem]">
                <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images8} priority />
                {images9.endsWith('.mp4') ? (
                  <video preload="auto" className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images9} autoPlay loop muted />
                ) : (
                  <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[50%]" src={images9} priority />
                )}
              </div>
              <div className="image-holder overflow-hidden one-image w-[100%] mt-[1rem]">
                {images10.endsWith('.mp4') ? (
                  <video preload="auto" className="max-[1024px]:opacity-100 object-cover w-[100%]" src={images10} autoPlay loop muted />
                ) : (
                  <Image alt="Project Image" title="Project Image" fetchPriority="high" width={800} height={800} className="max-[1024px]:opacity-100 object-cover w-[100%]" src={images10} priority />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCapabilities;
