'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import useMediaQueries from '@/hooks/useMediaQueries';

const Capabilities = () => {
  const { isTabletAndDesktop } = useMediaQueries();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const container = document.querySelector('.slider-carousel');
    const items = document.querySelectorAll('.carousel-item');
    let scrollTween;

    const initGSAP = () => {
      const lastItemWidth = items[items.length - 1].offsetWidth;
      const offset = (window.innerWidth - lastItemWidth) / 1;

      scrollTween = gsap.to('.carousel-item', {
        ease: 'power1.inOut',
        x: () => -(container.scrollWidth - window.innerWidth + offset),
        scrollTrigger: {
          trigger: container,
          pin: container,
          pinSpacer: false,
          start: 'center center-=-50',
          end: 'bottom bottom-=1000',
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
    };

    const destroyGSAP = () => {
      if (scrollTween) {
        scrollTween.kill();
        for (const st of ScrollTrigger.getAll()) {
          st.kill();
        }
      }
    };

    const handleResize = () => {
      if (isTabletAndDesktop) {
        initGSAP();
      } else {
        destroyGSAP();
      }
    };

    if (isTabletAndDesktop) {
      initGSAP();
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      destroyGSAP();
    };
  }, [isTabletAndDesktop]);

  return (
    <>
      {/* <!-- Our Capabilities --> */}
      <section className="capabilities lg:pt-14 md:pt-20">
        <div className="">
          <div className="relative pt-12">
            <div className="lg:mx-16 relative mt-3 pb-4 md:pb-10">
              <div className="md:flex md:justify-between items-center mx-4 lg:mx-0">
                <h1 className="text-3xl sm:text-4xl md:text-4xl xl:text-6xl tracking-tightest font-bold mb-4 md:mb-0">
                  Our
                  <br />
                  Capabilities
                </h1>
                <div className="text-base md:text-lg md:pl-4">
                  <div className="leading-loose">
                    <span className="block md:inline whitespace-nowrap">
                      Explore our dynamic design hub, where you can delve
                      <br />
                      into our extensive range of services, highlighting our
                      <br />
                      versatility and innovative adaptability.
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mx-auto px-8 max-w-xl lg:max-w-none mx-auto">
              <div className="flex flex-wrap items-center pt-20">
                <div className="w-full flex flex-col md:flex-row lg:gap-[200px] md:gap-[70px] gap-[40px] overflow-hidden justify-start slider-carousel">
                  <div className="carousel-item flex-[0_0_auto] relative w-full transform-origin-center">
                    <div className="relative w-[1024px] max-w-full overflow-hidden mx-[auto] my-[0]">
                      <video className="block w-full lg:h-[580px] md:h-[600px] h-[300px] object-cover carousel-size" preload="auto" src="/images/video/Branding Video.mp4" alt="Branding Video" autoPlay playsInline loop muted />
                      <div className="carousel-backdrop absolute top-[50%] left-[50%] rounded-3xl bg-[#00000080] backdrop-blur-md text-white lg:px-10 lg:py-12 md:px-7 md:py-10 px-8 py-8 text-left z-[1] transform translate-x-[-50%] translate-y-[-50%]">
                        <div className="carousel-title inline-block flex leading-none hover:underline md:w-[253px] w-[30px] lg:text-4xl md:text-3xl text-2xl font-bold leading-[123%] lg:mb-[55px] md:mb-[40px] mb-[30px]">
                          <h1>Branding</h1>
                          <svg id="SvgjsSvg1011" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" className="ml-2">
                            <title>Branding Icon</title>
                            <defs id="SvgjsDefs1012" />
                            <g id="SvgjsG1013">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10">
                                <title>Branding Icon</title>
                                <rect
                                  width="16.15"
                                  height="16.15"
                                  x="3.92"
                                  y="3.92"
                                  data-name="49. Box, design, geometry, square, shape"
                                  rx="1.5"
                                  ry="1.5"
                                  transform="rotate(45 12 12)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </svg>
                            </g>
                          </svg>
                        </div>
                        <div className="carousel-disc lg:text-xs md:text-[10px] text-[8px] font-normal leading-normal w-[180px] md:w-[250px] lg:mb-[55px] md:mb-[40px] mb-[30px]">
                          <p>From designing internal decks to developing 360 rebranding campaigns, we focus on creating solution - driven pieces with a visual impact.</p>
                        </div>
                        <div className="link-container carousel-icon flex justify-center">
                          <a href="/capabilities/branding">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="svg-move [transition:transform_0.3s_ease-out] hover:translate-x-[3px] hover:translate-y-[-3px]">
                              <title>Link Icon</title>
                              <g clipPath="url(#clip0_221_114)">
                                <path d="M20.45 0H0V3.82H17.75L0 21.58V24.27H2.71L20.45 6.52V24.27H24.28V3.82V0H20.45Z" fill="white" />
                              </g>
                              <defs>
                                <clipPath id="clip0_221_114">
                                  <rect width="24.28" height="24.27" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item flex-[0_0_auto] relative w-full transform-origin-center">
                    <div className="relative w-[1024px] max-w-full overflow-hidden mx-[auto] my-[0]">
                      <Image
                        className="block w-full lg:h-[580px] md:h-[600px] h-[300px] object-cover carousel-size"
                        src="/images/work/Parfum Muhammad Ali.jpg"
                        alt="Packaging Design"
                        height={580}
                        width={1024}
                        style={{ width: '100%', minHeight: '300px' }}
                      />
                      <div className="carousel-backdrop absolute top-[50%] left-[50%] rounded-3xl bg-[#00000080] backdrop-blur-md text-white lg:px-10 lg:py-12 md:px-7 md:py-10 px-8 py-8 text-left z-[1] transform translate-x-[-50%] translate-y-[-50%]">
                        <div className="carousel-title inline-block flex leading-none hover:underline md:w-[253px] w-[30px] lg:text-4xl md:text-3xl text-2xl font-bold leading-[123%] lg:mb-[55px] md:mb-[40px] mb-[30px]">
                          <h1>Packaging Design</h1>
                          <svg id="SvgjsSvg1011" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" className="ml-2">
                            <title>Packaging Design Icon</title>
                            <defs id="SvgjsDefs1012" />
                            <g id="SvgjsG1013">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10">
                                <title>Packaging Design Icon</title>
                                <rect
                                  width="16.15"
                                  height="16.15"
                                  x="3.92"
                                  y="3.92"
                                  data-name="49. Box, design, geometry, square, shape"
                                  rx="1.5"
                                  ry="1.5"
                                  transform="rotate(45 12 12)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </svg>
                            </g>
                          </svg>
                        </div>
                        <div className="carousel-disc lg:text-xs md:text-[10px] text-[8px] font-normal leading-normal w-[180px] md:w-[250px] lg:mb-[55px] md:mb-[40px] mb-[30px]">
                          <p>From designing internal decks to developing 360 rebranding campaigns, we focus on creating solution - driven pieces with a visual impact.</p>
                        </div>
                        <div className="link-container carousel-icon flex justify-center">
                          <a href="/capabilities/packaging">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="svg-move [transition:transform_0.3s_ease-out] hover:translate-x-[3px] hover:translate-y-[-3px]">
                              <title>Link Icon</title>
                              <g clipPath="url(#clip0_221_114)">
                                <path d="M20.45 0H0V3.82H17.75L0 21.58V24.27H2.71L20.45 6.52V24.27H24.28V3.82V0H20.45Z" fill="white" />
                              </g>
                              <defs>
                                <clipPath id="clip0_221_114">
                                  <rect width="24.28" height="24.27" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item flex-[0_0_auto] relative w-full transform-origin-center">
                    <div className="relative w-[1024px] max-w-full overflow-hidden mx-[auto] my-[0]">
                      <video className="block w-full lg:h-[580px] md:h-[600px] h-[300px] object-cover carousel-size" preload="auto" src="/images/video/UIUX Video.mp4" alt="" autoPlay playsInline loop muted />
                      <div className="carousel-backdrop absolute top-[50%] left-[50%] rounded-3xl bg-[#00000080] backdrop-blur-md text-white lg:px-10 lg:py-12 md:px-7 md:py-10 px-8 py-8 text-left z-[1] transform translate-x-[-50%] translate-y-[-50%]">
                        <div className="carousel-title inline-block flex leading-none hover:underline md:w-[253px] w-[30px] lg:text-4xl md:text-3xl text-2xl font-bold leading-[123%] lg:mb-[55px] md:mb-[40px] mb-[30px]">
                          <h1>UI/UX Design</h1>
                          <svg id="SvgjsSvg1011" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" className="ml-2">
                            <title>UIUX Design Icon</title>
                            <defs id="SvgjsDefs1012" />
                            <g id="SvgjsG1013">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10">
                                <title>UIUX Design Icon</title>
                                <rect
                                  width="16.15"
                                  height="16.15"
                                  x="3.92"
                                  y="3.92"
                                  data-name="49. Box, design, geometry, square, shape"
                                  rx="1.5"
                                  ry="1.5"
                                  transform="rotate(45 12 12)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </svg>
                            </g>
                          </svg>
                        </div>
                        <div className="carousel-disc lg:text-xs md:text-[10px] text-[8px] font-normal leading-normal leading-normal w-[180px] md:w-[250px] lg:mb-[55px] md:mb-[40px] mb-[30px]">
                          <p>For tech-related ventures, we fully immerse ourselves in UX/UI, web development, app development, and more.</p>
                        </div>
                        <div className="link-container carousel-icon flex justify-center">
                          <a href="/capabilities/uiuxdesign">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="svg-move [transition:transform_0.3s_ease-out] hover:translate-x-[3px] hover:translate-y-[-3px]">
                              <title>Link Icon</title>
                              <g clipPath="url(#clip0_221_114)">
                                <path d="M20.45 0H0V3.82H17.75L0 21.58V24.27H2.71L20.45 6.52V24.27H24.28V3.82V0H20.45Z" fill="white" />
                              </g>
                              <defs>
                                <clipPath id="clip0_221_114">
                                  <rect width="24.28" height="24.27" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item flex-[0_0_auto] relative w-full transform-origin-center">
                    <div className="relative w-[1024px] max-w-full overflow-hidden mx-[auto] my-[0]">
                      <video className="block w-full lg:h-[580px] md:h-[600px] h-[300px] object-cover carousel-size" preload="auto" src="/images/video/Retouching Video.mp4" alt="" autoPlay playsInline loop muted />
                      <div className="carousel-backdrop absolute top-[50%] left-[50%] rounded-3xl bg-[#00000080] backdrop-blur-md text-white lg:px-10 lg:py-12 md:px-7 md:py-10 px-8 py-8 text-left z-[1] transform translate-x-[-50%] translate-y-[-50%]">
                        <div className="carousel-title inline-block flex leading-none hover:underline md:w-[253px] w-[30px] lg:text-4xl md:text-3xl text-2xl font-bold leading-[123%] lg:mb-[55px] md:mb-[40px] mb-[30px]">
                          <h1>Retouching</h1>
                          <svg id="SvgjsSvg1011" width="10" height="10" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnssvgjs="http://svgjs.com/svgjs" className="ml-2">
                            <title>Retouching Design Icon</title>
                            <defs id="SvgjsDefs1012" />
                            <g id="SvgjsG1013">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10">
                                <title>Retouching Design Icon</title>
                                <rect
                                  width="16.15"
                                  height="16.15"
                                  x="3.92"
                                  y="3.92"
                                  data-name="49. Box, design, geometry, square, shape"
                                  rx="1.5"
                                  ry="1.5"
                                  transform="rotate(45 12 12)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                />
                              </svg>
                            </g>
                          </svg>
                        </div>
                        <div className="carousel-disc lg:text-xs md:text-[10px] text-[8px] font-normal leading-normal leading-normal w-[180px] md:w-[250px] lg:mb-[55px] md:mb-[40px] mb-[30px]">
                          <p>Through retouching, we breathe life and clarity into products, propelling them beyond their sales targets with passion and precision.</p>
                        </div>
                        <div className="carousel-icon flex justify-center">
                          <a href="/capabilities/retouching">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none" className="svg-move [transition:transform_0.3s_ease-out] hover:translate-x-[3px] hover:translate-y-[-3px]">
                              <title>Link Icon</title>
                              <g clipPath="url(#clip0_221_114)">
                                <path d="M20.45 0H0V3.82H17.75L0 21.58V24.27H2.71L20.45 6.52V24.27H24.28V3.82V0H20.45Z" fill="white" />
                              </g>
                              <defs>
                                <clipPath id="clip0_221_114">
                                  <rect width="24.28" height="24.27" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Capabilities;
