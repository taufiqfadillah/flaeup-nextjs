"use client";

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import HeroCapabilities from "@/components/branding/herocapabilities";

gsap.registerPlugin(ScrollTrigger);

const Branding = () => {
  useEffect(() => {
    document.title = "Branding | Creativity is central to our design.";
  }, []);

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: videoRef, inView: videoInView } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
  });
  const { ref: listRef, inView: listInView } = useInView({ triggerOnce: true });

  // useEffect(() => {
  //   let elements = document.querySelectorAll(
  //     ".top-tab-menu p, .potential-wrapper .inner,.sub-text .inner"
  //   );
  //   if (window.screen.width > 1024) {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         ease: "power4.out",
  //         trigger: ".potential-wrapper",
  //         start: "top 100%",
  //         scrub: 0,
  //         end: "top 90%",
  //         onLeave: () => {
  //           gsap.to(elements, { opacity: 1, y: "0%", stagger: 0.2 }),
  //             gsap.to(".bottom-links a", { opacity: 1, y: "0%", delay: 1 }),
  //             gsap.to(".potential-wrapper h5 .inner", {
  //               opacity: 1,
  //               y: "0%",
  //               delay: 1,
  //               stagger: 0.1,
  //             });
  //         },
  //       },
  //     });
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window.screen.width > 1024) {
  //     gsap.to("#capabilities-wrapper h1 span", {
  //       ease: "power4.out",
  //       y: "0%",
  //       opacity: 1,
  //     }),
  //       gsap.to(".main-h2 .inner, .top-strategy .inner", {
  //         ease: "power4.out",
  //         y: "0%",
  //         opacity: 1,
  //         stagger: 0.15,
  //       }),
  //       gsap.to(".button-animation span", {
  //         ease: "power4.out",
  //         y: "0%",
  //         opacity: 1,
  //         delay: 1,
  //       }),
  //       gsap.to(
  //         "#projects-scroller-inner img, #projects-scroller-inner video",
  //         { ease: "power4.out", opacity: 1, stagger: 0.2 }
  //       );
  //   }
  // }, []);

  // useEffect(() => {
  //   if (window.screen.width) {
  //     gsap.timeline({
  //       scrollTrigger: {
  //         trigger: "#digital-experience-scroller-inner",
  //         pin: false,
  //         scrub: 0,
  //         once: true,
  //         top: "top 50%",
  //         onEnter: () => {
  //           gsap.to(".trigger-one .inner", 1, {
  //             ease: "power4.out",
  //             y: "0%",
  //             opacity: 1,
  //             stagger: 0.2,
  //             once: true,
  //           }),
  //             gsap.to(".trigger-one-left .trigger-one-left-inner", 1, {
  //               ease: "power4.out",
  //               y: "0%",
  //               opacity: 1,
  //               once: true,
  //             }),
  //             gsap.to(".trigger-one-main .trigger-one-main-inner", 1, {
  //               ease: "power4.out",
  //               y: "0%",
  //               opacity: 1,
  //               stagger: 0.2,
  //               once: true,
  //             }),
  //             gsap.to(".trigger-two-list span", 1, {
  //               ease: "power4.out",
  //               y: "0%",
  //               opacity: 1,
  //               stagger: 0.1,
  //               once: true,
  //             });
  //         },
  //       },
  //     });
  //   }
  // }, []);

  useEffect(() => {
    const heroCapabilities = document.querySelector("#capabilities-wrapper");
    const sections = [
      document.querySelector("#digital-experience-scroller"),
      document.querySelector("#pin-capabilities"),
    ];

    sections.forEach((section) => {
      gsap.fromTo(
        section,
        { y: `-${heroCapabilities.offsetHeight}px` },
        {
          y: "0px",
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            scrub: true,
            pin: false,
            // markers: true,
          },
        }
      );
    });

    return () => {
      sections.forEach((section) => {
        gsap.killTweensOf(section);
      });
    };
  }, []);

  return (
    <>
      <HeroCapabilities />

      <section
        className="w-full h-full [background:#82CAAA] text-black rounded-t-lg"
        id="digital-experience-scroller"
      >
        <div
          ref={ref2}
          className="md:container md:mx-auto lg:mx-16 max-[600px]:pt-[3.5rem] max-[600px]:pb-[2rem] max-[1024px]:pb-[5rem] w-full flex flex-wrap pt-[5rem]"
          id="digital-experience-scroller-inner"
        >
          <div className="max-[600px]:mb-[1rem] max-[1024px]:mb-[4rem] w-full max-[1750px]:mb-[5rem] mb-[13rem]">
            <motion.p
              className="max-[600px]:max-w-[200px] max-[600px]:overflow-visible trigger-one max-[600px]:text-[2.5rem] max-[1024px]:overflow-visible text-[#080808] max-[1750px]:text-[10rem] text-[12vw]  font-medium leading-[94%] tracking-normal overflow-hidden"
              id="de-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
              transition={{ duration: 1 }}
            >
              <span className="overflow-hidden">
                <span className="block">A Digital</span>
                <span className="block"> Glow Up</span>
              </span>
            </motion.p>
          </div>
          <div className="max-[600px]:mb-[2rem] max-[1024px]:mb-[3rem] max-[1024px]:w-full w-[35%]">
            <motion.p
              className="trigger-one-left max-[1024px]:translate-x-[0px] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem]  text-[1vw] font-medium leading-normal uppercase relative translate-x-[16px] overflow-hidden"
              id="de-sub"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              What we do
            </motion.p>
          </div>
          <div className="max-[1024px]:w-full w-[65%] flex flex-wrap">
            <div className="trigger-one-main w-full overflow-hidden">
              <motion.p
                className="max-[600px]:hidden max-[600px]:mb-[3rem] max-[600px]:mt-[0rem] max-[600px]:text-[2rem] max-[1024px]:mb-[4rem] max-[1024px]:text-[2rem] max-[1024px]:leading-[120%] max-[1750px]:mb-[5rem] max-[1750px]:text-[3rem] text-[2.5vw] text-[#080808] font-normal leading-[140%] mb-[8rem] block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <span>
                  We ensure the visual impact of every project is maximized for
                  each brand we collaborate with.
                </span>
              </motion.p>
            </div>
            <div className="max-[1024px]:w-[50%] w-[44.44%]">
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                BRANDING
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                LOGOS
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                DESIGN
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                IDENTITY
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                RESEARCH
              </motion.p>
            </div>
            <div className="max-[1024px]:w-[50%] w-[44.44%]">
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] text-[1rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                CHARACTER DESIGN
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] text-[1rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                CONTENT
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] text-[1rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                SOCIAL MEDIA
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] text-[1rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: inView2 ? 1 : 0, y: inView2 ? 0 : 50 }}
                transition={{ duration: 1, delay: 1 }}
              >
                DIGITAL CAMPAIGNS
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section id="pin-capabilities-inner" className="[background:#82CAAA]">
        <div className="sm:container sm:mx-auto lg:mx-16">
          <div className="capabilities-wrapper-component max-[600px]:px-[1.5rem] max-[768px]:pr-[2rem] max-[1024px]:pb-[4rem] max-[1024px]:pt-[4rem] max-[1750px]:pt-[8rem] w-full flex flex-wrap pt-[8rem] pb-[17rem] relative">
            <div
              className="max-[600px]:w-[100%] w-[30%] capabilities-wrapper-title"
              ref={titleRef}
            >
              <h2 className="max-[600px]:text-[1rem] max-[1750px]:text-[1rem] text-[1vw] font-normal leading-[120%] uppercase overflow-hidden">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={titleInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  id="capabilities-wrapper-component-pretitle"
                >
                  Our Capabilities
                </motion.span>
              </h2>
            </div>
            <div
              className="max-[600px]:mt-[3rem] max-[600px]:w-[100%] w-[70%]"
              id="pin-windmill-wrap"
              ref={videoRef}
            >
              <div className="capabilities-wrapper relative">
                <div className="max-[600px]:h-[250px] max-[600px]:min-h-[250px] w-[100%] min-h-[27.5vw] h-[27.5vw] relative overflow-hidden">
                  <motion.video
                    alt="Display of our capabilities"
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0, y: 50 }}
                    animate={videoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    id="pin-windmill-svg"
                    className="max-[1024px]:opacity-100 max-[1024px]:top-0 max-[1024px]:translate-y-[0%] translate-y-[50px] flex w-full h-full object-cover absolute top-0 opacity-0 right-0 bottom-0"
                  >
                    <source
                      src="/images/video/Branding Video.mp4"
                      type="video/mp4"
                    />
                  </motion.video>
                </div>
                <div
                  className="max-[1024px]:min-h-[auto] max-[1024px]:pb-[0rem] min-h-[100vh] max-[1750px]:pb-[10rem]"
                  id="main-paragraph-full"
                  ref={paragraphRef}
                >
                  <div className="overflow-hidden" id="main-paragraph-cap">
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="max-[600px]:hidden max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] max-[600px]:leading-[120%] max-[600px]:text-[1.5rem] max-[600px]:mt-[2rem] max-[600px]:text-[1.2rem] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.375rem] text-[2.6vw] text-[#080808] font-normal leading-[150%] my-[6rem] capabilities-wrapper-pretitle flex flex-col transition-transform transition-opacity"
                    >
                      <span className="overflow-hidden">
                        <span>Explore our dynamic design hub, where you</span>
                      </span>
                      <span className="overflow-hidden">
                        <span>can delve into our extensive range of </span>
                      </span>
                      <span className="overflow-hidden">
                        <span>
                          services, highlighting our versatility and innovative
                          adaptability.
                        </span>
                      </span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="max-[600px]:leading-[120%] max-[600px]:text-[1.5rem] max-[600px]:my-[3rem] max-[600px]:text-[1.2rem] max-[600px]:flex max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.375rem] text-[2.6vw] text-[#080808] font-normal leading-[120%] capabilities-wrapper-pretitle flex flex-col transition-transform transition-opacity hidden"
                    >
                      We’re a versatile design hub. Here you can check for
                      yourself the full scope of our services, showcasing our
                      range and adaptability.
                    </motion.p>
                  </div>
                  <div
                    className="max-[1024px]:relative max-[1024px]:translate-y-[0%] capabilities-wrapper-all relative w-full bottom-0"
                    id="main-list-cap"
                    ref={listRef}
                  >
                    {[
                      "Branding",
                      "Retouching",
                      "UI/UX Design",
                      "Packaging",
                    ].map((capability, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -100 }}
                        animate={listInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="py-[2rem] flex flex-wrap items-center justify-between overflow-hidden group"
                        style={{ borderBottom: "3px solid black" }}
                      >
                        <a
                          className="w-[90%]"
                          href={`/capabilities/${capability.toLowerCase()}`}
                        >
                          <motion.p
                            initial={{ opacity: 0, x: -100 }}
                            animate={listInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="max-[1024px]:opacity-100 max-[1024px]:translate-x-[0%] max-[600px]:text-[2.2rem] text-[#080808] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.5rem] text-[2.6vw] text-normal font-normal leading-[100%] translate-x-[-100%] opacity-0 transition duration-150"
                          >
                            {capability}
                          </motion.p>
                        </a>
                        <div className="w-[10%] flex justify-end">
                          <a
                            aria-label={`Check our ${capability} capabilities`}
                            className="transform transition duration-100 mr-2 group-hover:rotate-45"
                            href={`/capabilities/${capability.toLowerCase()}`}
                          >
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 33 33"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M30 3L3 30"
                                stroke="black"
                                strokeWidth="4.3875"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M30 27.758V3H5.24196"
                                stroke="black"
                                strokeWidth="4.3875"
                                strokeMiterlimit="10"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="potential-wrapper" className="[background:#82CAAA]">
        <div
          className="max-[600px]:h-auto max-[600px]:py-[5rem] py-[9rem] h-screen flex justify-center items-center"
          style={{
            margin: "0 auto",
            maxWidth: "1430px",
          }}
        >
          <motion.div
            className="potential-wrapper flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="max-[600px]:hidden flex top-tab-menu">
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                >
                  <a href="/capabilities/design">design</a>
                </motion.p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                >
                  <a href="/capabilities/branding">branding</a>
                </motion.p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                >
                  <a href="/capabilities/technology">technology</a>
                </motion.p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                >
                  <a href="/capabilities/strategy">strategy</a>
                </motion.p>
              </div>
            </div>
            <motion.div
              className="max-[768px]:leading-normal max-[768px]:overflow-visible overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h5 className="capabilties_unlock_title__5hS1N max-[600px]:mt-[0rem] max-[600px]:[&>br]:hidden max-[600px]:max-w-[320px] max-[600px]:leading-[120%] max-[600px]:text-[2.2rem] max-[600px]:font-normal max-[768px]:text-[3rem] max-[1024px]:translate-y-[0%] max-[1750px]:text-[4rem] text-[4vw] text-[#080808] text-normal font-normal leading-[120%] tracking-[-0.08rem] text-center mt-[3rem] relative pb-[2rem]">
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    Are you prepared to ignite the
                  </motion.span>
                </span>
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    full potential of your project and catapult
                  </motion.span>
                </span>
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    it to dazzling new heights?
                  </motion.span>
                </span>
              </h5>
            </motion.div>
            <div className="max-[768px]:overflow-visible overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="max-[600px]:mt-[2rem] max-[600px]:text-[0.875rem] max-[1024px]:translate-y-[0%] max-[1750px]:text-[1.063rem] text-[1vw] text-[#080808] font-medium leading-normal tracking-[-0.02rem] max-[1750px]:mt-[1.5rem] mt-[2rem] text-center relative"
              >
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    LOOK NO FURTHER, AS WE ARE HERE TO SUPPORT YOU
                  </motion.span>
                </span>
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    EVERY STEP OF THE WAY
                  </motion.span>
                </span>
              </motion.p>
            </div>
            <div className="sub-text max-[600px]:mt-[3rem] max-[1750px]:mt-[4rem] mt-[4rem] flex bottom-links">
              <div className="max-[768px]:overflow-visible mr-[3.5rem]">
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="underlined_button max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] font-medium leading-[120%] translate-y-[50px] flex opacity-0 relative inline"
                  href="/work"
                >
                  <p>+Projects</p>
                </motion.a>
              </div>
              <div className="max-[768px]:overflow-visible">
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                  className="underlined_button max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] font-medium leading-[120%] translate-y-[50px] flex opacity-0 relative inline"
                  href="/contact"
                >
                  <p>Let&apos;s Talk</p>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Branding;
