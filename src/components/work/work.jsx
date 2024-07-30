'use client';

import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useStickySection from '@/hooks/useStickySection.jsx';
import { BentoGridDemo, items } from '@/components/work/bento-grid.jsx';
import useMediaQueries from '@/hooks/useMediaQueries';

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const { isMobile } = useMediaQueries();
  const [activeCategory, setActiveCategory] = useState('All');
  const [gridHeight, setGridHeight] = useState('auto');

  const gridRef = useRef(null);
  const animatedTitleRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (gridRef.current) {
        setGridHeight(`${gridRef.current.offsetHeight}px`);
      }
    };

    const resizeObserver = new ResizeObserver(handleResize);
    const currentRef = gridRef.current;

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const triggerAboutAnimation = () => {
        const tl = gsap.timeline({
          defaults: { ease: 'power3.out' },
        });
        tl.to('.perspective_letters span', { y: '0%', opacity: 1, stagger: 0.05, duration: 1.5 }, 0).eventCallback;
      };
      triggerAboutAnimation();
    }
  }, [isMobile]);

  const handleButtonClick = (category) => {
    setActiveCategory(category);
    if (gridHeight) {
      setGridHeight(isMobile ? 'auto' : `${gridHeight.offsetHeight}px`);
    }
  };

  useStickySection();

  const buttonData = [
    { category: 'All', count: items.length },
    {
      category: 'Apps',
      count: items.filter((item) => item.dataCategory === 'Apps').length,
    },
    {
      category: 'Branding',
      count: items.filter((item) => item.dataCategory === 'Branding').length,
    },
    {
      category: 'Company Profile',
      count: items.filter((item) => item.dataCategory === 'Company Profile').length,
    },
    {
      category: 'Copywriting',
      count: items.filter((item) => item.dataCategory === 'Copywriting').length,
    },
    {
      category: 'Packaging',
      count: items.filter((item) => item.dataCategory === 'Packaging').length,
    },
    {
      category: 'Retouching',
      count: items.filter((item) => item.dataCategory === 'Retouching').length,
    },
    {
      category: 'Social Media',
      count: items.filter((item) => item.dataCategory === 'Social Media').length,
    },
    {
      category: 'UIUX',
      count: items.filter((item) => item.dataCategory === 'UIUX').length,
    },
  ];

  return (
    <>
      <main className="work-wrapper page-content relative">
        <section className="max-[768px]:pt-[5rem] max-[1024px]:flex-wrap max-[600px]:h-[350px] max-[1024px]:h-[auto] section-animated-top work_section_animated_top w-full relative flex max-[600px]:px-[1.5rem] px-[2rem] pt-[8rem] flex-wrap bg-transparent">
          <div className="max-[1024px]:w-[100%] w-[100%]">
            <h1 className="  max-[768px]:mb-[0rem] max-[1024px]:leading-normal max-[1024px]:mb-[0rem] max-[1024px]:flex-wrap max-[1024px]:opacity-100 text-[#080808] font-medium tracking-normal leading-normal top-0 bottom-0 left-0 right-0 margin-auto relative text-left animated-final-header opacity-100 flex ">
              <div
                id="animated-work-title"
                ref={animatedTitleRef}
                className="work_work_title px-0 lg:px-[2rem] max-[375px]:text-[4rem] max-[600px]:text-[4rem] max-[768px]:text-[7.2rem] max-[1024px]:translate-x-[0%] max-[1024px]:translate-y-[0%] max-[1024px]:relative max-[1024px]:text-[10rem] max-[1024px]:items-start max-[1024px]:flex-col w-full flex items-center translate-x-[5%]  translate-y-[35vh] text-[10rem] absolute pointer-events-none"
                style={{
                  translate: 'none',
                  rotate: 'none',
                  scale: 'none',
                  transform: 'translate(0%, 0px)',
                  pointerEvents: 'all',
                }}
              >
                <span className="perspective_letters max-[1024px]:w-[100%] flex">
                  <span>O</span>
                  <span>u</span>
                  <span>r</span>
                </span>
                <div className="max-[600px]:mt-[0rem] max-[1024px]:mt-[-2rem] max-[1024px]:flex max-[1024px]:flex-wrap flex flex-wrap items-center overflow-hidden">
                  <video
                    alt="Our Work"
                    title="Our Work"
                    preload="auto"
                    className="hidden lg:block max-[1024px]:top-[0rem] max-[1024px]:mx-[0rem] object-cover object-center mx-[1rem] relative top-[0rem] transition-all	duration-[0.7s] ease-in-out	"
                    src="/images/video/Homepage Videos.mp4"
                    autoPlay
                    playsInline
                    loop
                    muted
                  />
                  <span className="perspective_letters max-[1024px]:w-[100%] flex">
                    <span>W</span>
                    <span>o</span>
                    <span>r</span>
                    <span>k</span>
                  </span>
                </div>
              </div>
            </h1>
          </div>
          <div className="work-top-animation-trigger" />
        </section>

        <section id="section-projects-wrapper" className="max-[600px]:mt-[1.5rem] max-[1024px]:mt-[0rem] section-projects-wrapper w-full controller-one z-20 bg-white relative mt-[240px] px-0 lg:px-[2rem]">
          <section className="max-[600px]:px-[1.5rem] max-[600px]:mt-[0.5rem] max-[1024px]:w-[100%] w-[100%] px-0 lg:px-[2rem] ">
            <div className="max-[1024px]:justify-start max-[1024px]:opacity-100 categories-wrapper flex flex-wrap flex-center justify-start relative opacity-0 [&>.project-cat:last-child]:mr-[0rem]" style={{ opacity: 1 }}>
              {buttonData.map(({ category, count }) => (
                <div key={category} className="project-cat max-[600px]:mt-[0rem] max-[600px]:mr-[20px] mr-[1.50rem] max-[600px]:pb-[0rem] max-[1024px]:mt-[1rem] mt-[1rem]">
                  <button
                    type="button"
                    data-category={category}
                    onClick={() => handleButtonClick(category)}
                    className={`max-[600px]:font-normal max-[600px]:pb-[1rem] max-[600px]:opacity-100 max-[600px]:text-[9px] max-[1024px]:min-h-[30px] max-[1750px]:text-[1.063rem] text-[1.04vw] text-[#080808] leading-[120%] w-full button-category relative flex flex-col opacity-100 font-normal ${
                      activeCategory === category ? 'active-button' : ''
                    }`}
                  >
                    {category}
                    <span className={`w-full h-[2px] flex relative bottom-[-0.2rem] ${activeCategory === category ? 'bg-[#1a1a1a]' : 'bg-transparent'}`} />
                    <span className="max-[1750px]:top-[-0.1rem] absolute text-[0.625rem] top-[-0.15rem] right-[-0.6rem]">{count}</span>
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section
            ref={gridRef}
            id="project-grid-wrapper"
            className="section-projects w-full h-full max-w-none max-[600px]:pt-[2.5rem] max-[600px]:pb-[1.5rem] max-[600px]:px-[1.5rem] max-[600px]:mt-[0rem] max-[1024px]:translate-y-[0%] max-[1024px]:mt-[3rem] max-[1024px]:opacity-100 max-[1024px]:pb-[2.5rem] mt-[42px] px-[2rem] opacity-0 z-40 relative bg-white pb-[6.5rem] translate-y-[20%]"
            style={{
              translate: 'none',
              rotate: 'none',
              scale: 'none',
              opacity: 1,
              transform: 'translate(0px, 0%)',
              height: gridHeight,
            }}
          >
            <BentoGridDemo items={items} category={activeCategory} />
          </section>
        </section>

        {/* Load More */}
        {/* <div id="load-more-projects" className="max-[600px]:pt-[2.5rem] max-[1750px]:pt-[5.5rem] w-full pb-[6.5rem] ">
          <section id="load-more-projects-inn" className="display flex justify-center">
            <button className="max-[1750px]:text-[1.063rem] text-[1vw] text-normal leading-normal font-medium">Load More +</button>
          </section>
          <div className="load-more-fixer" />
        </div> */}

        <section
          id="potential-wrapper"
          className="max-[1024px]:h-[auto] max-[1024px]:pb-[0rem] max-[600px]:pt-[0rem] bg-[#82CAAA] h-screen flex justify-center items-center w-full flex-col panel"
          style={{
            translate: 'none',
            rotate: 'none',
            scale: 'none',
            inset: '0px auto auto 0px',
            margin: 0,
            maxWidth: '100%',
            width: '100%',
            maxHeight: 750, //1050,
            height: 750, //1050,
            padding: 0,
            transform: 'translate(0px, 0px)',
          }}
        >
          <main className="max-[1024px]:py-[5rem] max-[1024px]:h-[auto] justify-center items-center flex design-that-moves h-screen">
            <section className="px-[32px]">
              <div className="header__section max-[1024px]:hidden block desktop__heading">
                <div>
                  <h1
                    className="work_design_title__IseCw max-[1024px]:text-[5rem] max-[1024px]:text-[10rem] max-[1750px]:text-[12vw] text-[12vw] leading-[110%] font-medium opacity-0 flex flex-wrap flex justify-center translate-y-[60px] opacity-0"
                    style={{
                      translate: 'none',
                      rotate: 'none',
                      scale: 'none',
                      opacity: 1,
                      transform: 'translate(0px, 0px)',
                    }}
                  >
                    <span>
                      Design
                      <span
                        className="px-[0vw] w-[17vw] mx-[3vw]"
                        role="img"
                        aria-label="Animation"
                        style={{
                          display: 'inline-block',
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transform: 'translate(0px, 0px)',
                        }}
                      >
                        <video
                          id="vid-contact"
                          className="w-[0vw] h-[10vw] object-cover pointer-events-none"
                          src="/images/video/Homepage Videos.mp4"
                          autoPlay
                          playsInline
                          loop
                          muted
                          style={{
                            translate: 'none',
                            rotate: 'none',
                            scale: 'none',
                            transformOrigin: '50% 50%',
                            transform: 'translate(0px, 0px)',
                            width: '17vw',
                          }}
                        />
                      </span>
                      <span
                        className="translate-x-[-17vw]"
                        style={{
                          display: 'inline-block',
                          whiteSpace: 'nowrap',
                          translate: 'none',
                          rotate: 'none',
                          scale: 'none',
                          transform: 'translate(0vw, 0px)',
                        }}
                      >
                        That
                      </span>
                    </span>
                    <span className="">Move &amp; Inspire</span>
                  </h1>
                </div>
                <div className="w-full flex justify-center mt-[5rem]">
                  <a href="/contact" className="jsx-1447785181 underlined_button flex">
                    <p className="jsx-1447785181 max-[1024px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] leading-[120%] font-medium capitalize text-black">Let’s Work Together</p>
                  </a>
                </div>
              </div>
              <div className="max-[1024px]:flex items-center justify-center header__section hidden  flex-wrap mobile__heading ">
                <div className="w-[100%]">
                  <div className="max-[375px]:text-[4rem] max-[600px]:text-[3rem] text-[10rem] leading-[100%] font-[500]">
                    <h1>Design That</h1>
                  </div>
                  <h1 className="max-[375px]:text-[4rem] max-[600px]:text-[3rem] text-[10rem] leading-[100%] font-[500]">Move &amp; Inspire</h1>
                </div>
                <div className="w-full flex justify-start mt-[5rem]">
                  <a href="/contact" className="jsx-1447785181 underlined_button flex">
                    <p className="jsx-1447785181 max-[1024px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] leading-[120%] font-medium capitalize text-[#1a1a1a]">Let’s Work Together</p>
                  </a>
                </div>
              </div>
            </section>
          </main>
        </section>
      </main>
    </>
  );
};

export default Work;
