"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Branding = () => {
  useEffect(() => {
    document.title = "Branding | Creativity is central to our design.";
  }, []);

  return (
    <>
      <section className="container mx-auto relative">
        <div className="flex w-full h-screen items-center justify-between">
          <div className="w-4/10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-[600px]:text-[3.5rem] text-[#212121] max-[1750px]:text-[4rem] text-[4.5vw] text-normal font-medium leading-[110%] tracking-[-0.1rem] overflow-hidden"
            >
              Design That <br /> Inspires You!
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="max-[600px]:hidden max-[600px]:text-[1.5rem] main-h2 text-[#212121] max-[600px]:[&>br]:hidden max-[1750px]:text-[1.5rem] text-[1.5vw] font-normal leading-[120%] tracking-normal mt-[2rem] block"
            >
              From designing internal decks to
              <br />
              developing 360 rebranding campaigns,
              <br />
              we focus on creating solution - driven
              <br /> pieces with a visual impact.
            </motion.h2>
            <p className=" max-[600px]:mb-[2rem] max-[600px]:mt-[2rem] max-[1024px]:mb-[3rem] max-[1024px]:mt-[1rem] text-[#212121] max-[1750px]:text-[1rem] text-[0.8vw] font-normal leading-[110%] tracking-normal uppercase my-[2rem] overflow-hidden top-strategy flex">
              <span className="flex relative overflow-hidden">
                <motion.span
                  className="inner max-[1024px]:translate-y-[0px] max-[1024px]:opacity-100 translate-y-[50px] relative opacity-0 flex"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  This is the essence of Flaeup.
                </motion.span>
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="inner max-[1024px]:translate-y-[0px] max-[1024px]:opacity-100 max-[1024px]:opacity-100 flex"
              >
                <a className="underlined_button flex" href="#">
                  <p className="max-[1024px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] leading-[120%] font-medium text-[#212121]">
                    Let's Talk
                  </p>
                </a>
              </motion.span>
            </motion.div>
          </div>
          <div className="w-6/10">
            <Image
              alt="Flaeup Studio"
              width={700}
              height={700}
              className="w-full h-auto max-w-[700px] max-h-[700px]"
              src="https://fakeimg.pl/1024x700/2a357a/ffffff"
            />
          </div>
        </div>
      </section>

      <section className="w-full h-full shrink-0 [background:#82CAAA] text-black">
        <div className="container mx-auto max-[600px]:pt-[3.5rem] max-[600px]:pb-[2rem] max-[1024px]:pb-[5rem] w-full flex flex-wrap pt-[5rem]">
          <div className="max-[600px]:mb-[1rem] max-[1024px]:mb-[4rem] w-full max-[1750px]:mb-[5rem] mb-[13rem]">
            <motion.p
              className="max-[600px]:max-w-[200px] max-[600px]:overflow-visible trigger-one max-[600px]:text-[2.5rem] max-[1024px]:overflow-visible text-[#080808] max-[1750px]:text-[10rem] text-[12vw]  font-medium leading-[94%] tracking-normal overflow-hidden"
              id="de-title"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
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
              animate={{ opacity: 1, y: 0 }}
            >
              What we do
            </motion.p>
          </div>
          <div className="max-[1024px]:w-full w-[65%] flex flex-wrap">
            <div className="trigger-one-main w-full overflow-hidden">
              <motion.p
                className="max-[600px]:hidden max-[600px]:mb-[3rem] max-[600px]:mt-[0rem] max-[600px]:text-[2rem] max-[1024px]:mb-[4rem] max-[1024px]:text-[2rem] max-[1024px]:leading-[120%] max-[1750px]:mb-[5rem] max-[1750px]:text-[3rem] text-[2.5vw] text-[#080808] font-normal leading-[100%] mb-[8rem] block"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <span>
                  We make sure the visual aspect of every project is as strong
                  as it can be for every brand that we work with.
                </span>
              </motion.p>
            </div>
            <div className="max-[1024px]:w-[50%] w-[33.33%]">
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-BASE font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                BRANDING
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-BASE font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                LOGOS
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-BASE font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                DESIGN
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-BASE font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                IDENTITY
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-BASE font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                RESEARCH
              </motion.p>
            </div>
            <div className="max-[1024px]:w-[50%] w-[33.33%]">
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-normal font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] text-[1rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                CHARACTER DESIGN
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-normal font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] text-[1rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                CONTENT
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-normal font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] text-[1rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                SOCIAL MEDIA
              </motion.p>
              <motion.p
                className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-normal font-medium leading-[180%] tracking-[-0.02rem] mb-[0.5rem] text-[1rem] overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                DIGITAL CAMPAIGNS
              </motion.p>
            </div>
          </div>
        </div>

        <div id="pin-capabilities-inner" className="container mx-auto">
          <div className="capabilities-wrapper-component max-[600px]:px-[1.5rem] max-[768px]:pr-[2rem] max-[1024px]:pb-[4rem] max-[1024px]:pt-[4rem] max-[1750px]:pt-[8rem] w-full flex flex-wrap pt-[8rem] pb-[8rem] pl-[2rem] pr-[10rem] relative">
            <div className="max-[600px]:w-[100%] w-[30%] capabilities-wrapper-title">
              <h2 className="max-[600px]:text-[1rem] max-[1750px]:text-[1rem] text-[1vw] font-normal leading-[120%] uppercase overflow-hidden">
                <motion.span
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
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
                    animate={{ opacity: 1, y: 0 }}
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
                >
                  <div className="overflow-hidden" id="main-paragraph-cap">
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="max-[600px]:hidden max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] max-[600px]:leading-[120%] max-[600px]:text-[1.5rem] max-[600px]:mt-[2rem] max-[600px]:text-[1.2rem] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.375rem] text-[2.6vw] text-[#080808] font-normal leading-[120%] my-[4rem] capabilities-wrapper-pretitle flex flex-col transition-transform transition-opacity"
                    >
                      <span className="overflow-hidden">
                        <span>We’re a versatile design hub. Here you can</span>
                      </span>
                      <span className="overflow-hidden">
                        <span>check for yourself the full scope of our</span>
                      </span>
                      <span className="overflow-hidden">
                        <span>services, showcasing our range and</span>
                      </span>
                      <span className="overflow-hidden">
                        <span>adaptability.</span>
                      </span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
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
                  >
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="capabilities_capability py-[1.5rem] flex flex-wrap items-center justify-between overflow-hidden"
                    >
                      <a className="w-[90%] group" href="#">
                        <motion.p
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="max-[1024px]:opacity-100 max-[1024px]:translate-x-[0%] max-[600px]:text-[2.2rem] text-[#080808] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.5rem] text-[2.6vw] text-normal font-normal leading-[100%] translate-x-[-100%] opacity-0 transition duration-150"
                        >
                          Branding
                        </motion.p>
                      </a>
                      <div className="w-[10%] flex justify-end">
                        <a
                          aria-label="Check our Branding capabilities"
                          className="group-hover:rotate-45 transform transition duration-100"
                          href="#"
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
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="capabilities_capability py-[1.5rem] flex flex-wrap items-center justify-between overflow-hidden"
                    >
                      <a className="w-[90%] group" href="#">
                        <motion.p
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="max-[1024px]:opacity-100 max-[1024px]:translate-x-[0%] max-[600px]:text-[2.2rem] text-[#080808] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.5rem] text-[2.6vw] text-normal font-normal leading-[100%] translate-x-[-100%] opacity-0 transition duration-150"
                        >
                          Branding
                        </motion.p>
                      </a>
                      <div className="w-[10%] flex justify-end">
                        <a
                          aria-label="Check our Branding capabilities"
                          className="group-hover:rotate-45 transform transition duration-100"
                          href="#"
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
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="capabilities_capability py-[1.5rem] flex flex-wrap items-center justify-between overflow-hidden"
                    >
                      <a className="w-[90%] group" href="#">
                        <motion.p
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="max-[1024px]:opacity-100 max-[1024px]:translate-x-[0%] max-[600px]:text-[2.2rem] text-[#080808] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.5rem] text-[2.6vw] text-normal font-normal leading-[100%] translate-x-[-100%] opacity-0 transition duration-150"
                        >
                          Branding
                        </motion.p>
                      </a>
                      <div className="w-[10%] flex justify-end">
                        <a
                          aria-label="Check our Branding capabilities"
                          className="group-hover:rotate-45 transform transition duration-100"
                          href="#"
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
                    <motion.div
                      initial={{ opacity: 0, x: -100 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="capabilities_capability py-[1.5rem] flex flex-wrap items-center justify-between overflow-hidden"
                    >
                      <a className="w-[90%] group" href="#">
                        <motion.p
                          initial={{ opacity: 0, x: -100 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, ease: "easeOut" }}
                          className="max-[1024px]:opacity-100 max-[1024px]:translate-x-[0%] max-[600px]:text-[2.2rem] text-[#080808] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.5rem] text-[2.6vw] text-normal font-normal leading-[100%] translate-x-[-100%] opacity-0 transition duration-150"
                        >
                          Branding
                        </motion.p>
                      </a>
                      <div className="w-[10%] flex justify-end">
                        <a
                          aria-label="Check our Branding capabilities"
                          className="group-hover:rotate-45 transform transition duration-100"
                          href="#"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="max-[600px]:h-[auto] max-[600px]:py-[5rem] py-[9rem]  h-screen flex justify-center items-center "
          id="potential-wrapper"
          style={{
            height: "1050px",
            inset: "0px auto auto 0px",
            margin: "0px",
            maxHeight: "1050px",
            maxWidth: "1430px",
            padding: "144px 0px",
            rotate: "none",
            scale: "none",
            transform: "translate(0px, 0px)",
            translate: "none",
            width: "1430px",
          }}
        >
          <div className="potential-wrapper">
            <div
              className=" flex flex-col justify-center items-center"
              id="potential-wrapper-in"
            >
              <div className="max-[600px]:hidden flex top-tab-menu">
                <div className="max-[768px]:overflow-visible overflow-hidden">
                  <p
                    className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                    style={{
                      opacity: "1",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                      translate: "none",
                    }}
                  >
                    <a href="/capabilities/design">design</a>
                  </p>
                </div>
                <div className="max-[768px]:overflow-visible overflow-hidden">
                  <p
                    className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                    style={{
                      opacity: "1",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                      translate: "none",
                    }}
                  >
                    <a href="/capabilities/animation">animation</a>
                  </p>
                </div>
                <div className="max-[768px]:overflow-visible overflow-hidden">
                  <p
                    className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                    style={{
                      opacity: "1",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                      translate: "none",
                    }}
                  >
                    <a href="/capabilities/technology">technology</a>
                  </p>
                </div>
                <div className="max-[768px]:overflow-visible overflow-hidden">
                  <p
                    className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                    style={{
                      opacity: "1",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                      translate: "none",
                    }}
                  >
                    <a href="/capabilities/strategy">strategy</a>
                  </p>
                </div>
              </div>
              <div className="max-[768px]:leading-normal max-[768px]:overflow-visible overflow-hidden">
                <h5 className="capabilties_unlock_title__5hS1N max-[600px]:mt-[0rem] max-[600px]:[&>br]:hidden max-[600px]:max-w-[320px] max-[600px]:leading-[120%] max-[600px]:text-[2.2rem] max-[600px]:font-normal max-[768px]:text-[3rem] max-[1024px]:translate-y-[0%] max-[1750px]:text-[4rem] text-[4vw] text-[#080808] text-normal font-normal leading-[120%] tracking-[-0.08rem] text-center mt-[3rem] relative pb-[2rem]">
                  <span className="overflow-hidden">
                    <span
                      className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                      style={{
                        opacity: "1",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                        translate: "none",
                      }}
                    >
                      Are you seeking to unlock the
                    </span>
                  </span>
                  <span className="overflow-hidden">
                    <span
                      className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                      style={{
                        opacity: "1",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                        translate: "none",
                      }}
                    >
                      full potential of your project and
                    </span>
                  </span>
                  <span className="overflow-hidden">
                    <span
                      className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                      style={{
                        opacity: "1",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                        translate: "none",
                      }}
                    >
                      take it to new heights?
                    </span>
                  </span>
                </h5>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <p className="max-[600px]:mt-[2rem] max-[600px]:text-[0.875rem]  max-[1024px]:translate-y-[0%] max-[1750px]:text-[1.063rem] text-[1vw] text-[#080808] font-medium leading-normal tracking-[-0.02rem] max-[1750px]:mt-[1.5rem] mt-[2rem]  text-center relative">
                  <span className="overflow-hidden">
                    <span
                      className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                      style={{
                        opacity: "1",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                        translate: "none",
                      }}
                    >
                      LOOK NO FURTHER, AS WE ARE HERE TO SUPPORT YOU
                    </span>
                  </span>
                  <span className="overflow-hidden">
                    <span
                      className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                      style={{
                        opacity: "1",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0%)",
                        translate: "none",
                      }}
                    >
                      EVERY STEP OF THE WAY
                    </span>
                  </span>
                </p>
              </div>
              <div className="sub-text max-[600px]:mt-[3rem] max-[1750px]:mt-[4rem] mt-[4rem] flex bottom-links">
                <div className="max-[768px]:overflow-visible  mr-[3.5rem]">
                  <a
                    className="capabilties_underlined_button__gJuah max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] font-medium  leading-[120%] translate-y-[50px] flex opacity-0 relative inline"
                    href="/work"
                    style={{
                      opacity: "1",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                      translate: "none",
                    }}
                  >
                    <p>+Projects</p>
                  </a>
                </div>
                <div className="max-[768px]:overflow-visible  ">
                  <a
                    className="capabilties_underlined_button__gJuah max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] font-medium  leading-[120%] translate-y-[50px] flex opacity-0 relative inline"
                    href="/contact-us"
                    style={{
                      opacity: "1",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                      translate: "none",
                    }}
                  >
                    <p>Let's Talk</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Branding;
