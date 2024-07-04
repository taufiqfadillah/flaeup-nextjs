"use client";

import React, { useEffect, useRef } from "react";
import Brand from "@/components/brand.jsx";

const About = () => {
  useEffect(() => {
    document.title = "About | Creativity is central to our design.";
  }, []);

  return (
    <>
      <section className="h-screen overflow-hidden sm:grid sm:grid-cols-2 py-24">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-6xl font-bold md:text-8xl">About</h1>
          </div>
        </div>

        <div className="sm:col-start-2 sm:row-start-1">
          <img
            alt="About Flaeup"
            src="https://placehold.co/1024x600/2a357a/fff"
            className="about-image object-cover"
          />
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="pt-24">
          <p className="text-center text-1xl md:text-[22px] leading-[100.098%] tracking-[0.22px]">
            OUR STORY
          </p>
          <div className="w-full h-px mt-10 bg-black"></div>
          <div className="w-full px-5 md:px-28 py-10 text-xl text-left md:text-3xl leading-[150%] tracking-[0.32px]">
            <p className="px-2">
              The studio is centered on the power of simplicity, focusing on
              breaking down complex ideas into easy to compose story components.
              <br />
              <br />
              We have the privilege of working with well known brands but
              prioritize great projects that allow us to develop our craft.
            </p>
          </div>
          <div className="w-full flex py-10 px-4 md:px-28 justify-center items-center md:gap-6">
            <div className="w-3/10 flex justify-center">
              <img
                src="https://placehold.co/430x490/2a357a/fff"
                alt=""
                className="w-full max-h-full"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="w-7/10 flex justify-center">
              <img
                src="https://placehold.co/900x490/2a357a/fff"
                alt=""
                className="w-full max-h-full"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="w-full flex py-10 px-2 md:px-28 justify-center align-items-center">
            <div className="w-[340px] px-2">
              <p className="text-[18px] text-left font-normal md:text-[22px]">
                OUR STORY
              </p>
            </div>
            <div className="w-[900px] px-2 md:pl-20 pb-24">
              <p className="text-lg text-left font-normal md:text-3xl md:leading-[150%] md:tracking-[0.32px]">
                Flaeup is a creative collective of design artists dedicated to
                bringing your vision to life. We utilize visual storytelling and
                graphics as primary tools, with our shared goal being to harness
                the power of creativity to elevate your brand.
                <br />
                <br />
                “Design that speaks” has become our signature tagline, perfectly
                encapsulating our ethos as a design studio. We continually
                strive to surpass previous achievements, constantly evolving and
                pushing boundaries in every aspect of design and creativity we
                engage in.
                <br />
                <br />
                We recognize that the pursuit of excellence is not a destination
                but a journey, and we invite you to join us on this journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#82CAAA] text-white">
        <section className="py-20">
          <div>
            <p className="text-2xl px-4 md:text-5xl md:px-28">
              Our Capabilities
            </p>
            <div className="grid grid-cols-3 gap-10 py-24 px-10">
              <div className="w-full">
                <video
                  src="/images/video/Branding Video.mp4"
                  alt=""
                  autoPlay
                  muted
                  loop
                />
              </div>
              <div className="w-full">
                <video
                  src="/images/video/Retouching Video.mp4"
                  alt=""
                  autoPlay
                  muted
                  loop
                />
              </div>
              <div className="w-full">
                <video
                  src="/images/video/UIUX Video.mp4"
                  alt=""
                  autoPlay
                  muted
                  loop
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">{/* Kolom Kiri */}</div>
            <div className="md:col-span-8 pb-28">
              <p className="text-xl md:text-[32px] md:text-left leading-[150%] tracking-[0.32px]">
                Explore our dynamic design hub, where you can delve into our
                extensive range of services, highlighting our versatility and
                innovative adaptability.
              </p>
              <a
                className="relative group block md:flex pb-8 mb-24 mt-24 items-center border-b border-white"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-4xl xs:text-6xl lg:text-7xl inline-block md:pb-2 hover:underline transition duration-150">
                    Branding
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 3L3 30"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M30 27.758V3H5.24196"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>

              <a
                className="relative group block md:flex pb-8 mb-24 mt-24 items-center border-b border-white"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-4xl xs:text-6xl lg:text-7xl inline-block md:pb-2 hover:underline transition duration-150">
                    Retouching
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 3L3 30"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M30 27.758V3H5.24196"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
              <a
                className="relative group block md:flex pb-8 mb-24 mt-24 items-center border-b border-white"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-4xl xs:text-6xl lg:text-7xl inline-block md:pb-2 hover:underline transition duration-150">
                    UI/UX Design
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 3L3 30"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M30 27.758V3H5.24196"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
              <a
                className="relative group block md:flex pb-8 mb-24 mt-24 items-center border-b border-white"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-4xl xs:text-6xl lg:text-7xl inline-block md:pb-2 hover:underline transition duration-150">
                    Packaging
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 3L3 30"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M30 27.758V3H5.24196"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
              <a
                className="relative group block md:flex pb-8 mb-24 mt-24 items-center border-b border-white"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-4xl xs:text-6xl lg:text-7xl inline-block md:pb-2 hover:underline transition duration-150">
                    Illustration
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
                    <svg
                      width="33"
                      height="33"
                      viewBox="0 0 33 33"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M30 3L3 30"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M30 27.758V3H5.24196"
                        stroke="white"
                        strokeWidth="4.3875"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section>
          <div className="px-4 md:px-28">
            <p className="text-2xl md:text-5xl sm:text-left leading-[100.098%] tracking-[0.48px]">
              Client
            </p>
          </div>
          <Brand />
        </section>
      </section>
    </>
  );
};

export default About;
