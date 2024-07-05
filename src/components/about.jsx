"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Slider from "react-infinite-logo-slider";
import AnimatedTextWord from "@/libs/AnimatedTextWord.jsx";
import AnimatedTextCharacter from "@/libs/AnimatedTextCharacter.jsx";
import AnimatedTextParagraph from "@/libs/AnimatedTextParagraph.jsx";

const Client_1 = "/images/client/Client Logo-01.svg";
const Client_2 = "/images/client/Client Logo-02.svg";
const Client_3 = "/images/client/Client Logo-03.svg";
const Client_4 = "/images/client/Client Logo-04.svg";
const Client_5 = "/images/client/Client Logo-05.svg";
const Client_6 = "/images/client/Client Logo-06.svg";
const Client_7 = "/images/client/Client Logo-07.svg";

const clients = [
  { src: Client_1 },
  { src: Client_2 },
  { src: Client_3 },
  { src: Client_4 },
  { src: Client_5 },
  { src: Client_6 },
  { src: Client_7 },
];

const About = () => {
  useEffect(() => {
    document.title = "About | Creativity is central to our design.";
  }, []);

  return (
    <>
      <section className="h-screen overflow-hidden sm:grid sm:grid-cols-2 py-24">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-6xl font-bold md:text-8xl">
              <AnimatedTextWord text="About" />
            </h1>
          </div>
        </div>

        <div className="sm:col-start-2 sm:row-start-1">
          <Image
            alt="About Flaeup"
            src="https://dummyimage.com/1024x600/2a357a/fff.png"
            className="about-image object-cover"
            width={1024}
            height={600}
          />
        </div>
      </section>

      <section className="overflow-hidden">
        <div className="pt-24">
          <div className="text-center text-1xl md:text-lg leading-normal tracking-wide">
            <AnimatedTextCharacter text="OUR STORY" />
          </div>
          <div className="w-full h-px mt-20 bg-black"></div>
          <div className="w-full px-5 md:px-28 py-10 text-xl text-left md:text-[28px] leading-normal tracking-normal">
            <div className="px-2">
              <AnimatedTextParagraph
                text="The studio is centered on the power of simplicity, focusing on
              breaking down complex ideas into easy to compose story components."
              />
              <br />
              <br />
              <AnimatedTextParagraph
                text="We have the privilege of working with well known brands but
              prioritize great projects that allow us to develop our craft."
              />
            </div>
          </div>
          <div className="w-full flex py-10 px-4 md:px-28 justify-center items-center md:gap-6">
            <div className="w-3/10 flex justify-center">
              <Image
                src="https://dummyimage.com/430x490/2a357a/fff.png"
                alt=""
                className="w-full max-h-full"
                width={430}
                height={490}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="w-7/10 flex justify-center">
              <Image
                src="https://dummyimage.com/900x490/2a357a/fff.png"
                alt=""
                className="w-full max-h-full"
                width={900}
                height={490}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          <div className="w-full flex py-10 px-2 md:px-28 justify-center align-items-center">
            <div className="w-[340px] px-2">
              <div className="text-[18px] text-left font-normal md:text-base">
                <AnimatedTextCharacter text="OUR STORY" />
              </div>
            </div>
            <div className="w-[900px] px-2 md:pl-20 pb-24">
              <div className="text-lg text-left font-normal md:text-[28px] md:leading-normal md:tracking-normal">
                <AnimatedTextParagraph
                  text="Flaeup is a creative collective of design
                artists dedicated to bringing your vision to life. We utilize
                visual storytelling and graphics as primary tools, with our
                shared goal being to harness the power of creativity to elevate
                your brand."
                />
                <br />
                <br />
                <AnimatedTextParagraph
                  text="Design that speaks” has become our signature tagline, perfectly
                encapsulating our ethos as a design studio. We continually
                strive to surpass previous achievements, constantly evolving and
                pushing boundaries in every aspect of design and creativity we
                engage in."
                />
                <br />
                <br />
                <AnimatedTextParagraph
                  text="We recognize that the pursuit of excellence is not a destination
                but a journey, and we invite you to join us on this journey."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#82CAAA] text-white">
        <section className="py-20">
          <div>
            <div className="text-2xl px-4 md:text-5xl md:px-28">
              <AnimatedTextWord text="Our Capabilities" />
            </div>
            <div className="py-24 px-10">
              <Slider
                width="100%"
                duration={20}
                toRight={false}
                pauseOnHover={false}
                blurBorders={false}
                blurBoderColor={"#82caaa"}
                className="grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                <div>
                  <video
                    src="/images/video/Branding Video.mp4"
                    alt=""
                    autoPlay
                    muted
                    loop
                    style={{
                      height: "260px",
                      width: "calc(100% - 20px)", // Adjust width to account for gap
                      objectFit: "cover",
                      marginRight: "20px", // Gap between videos
                    }}
                  />
                </div>
                <div>
                  <video
                    src="/images/video/Retouching Video.mp4"
                    alt=""
                    autoPlay
                    muted
                    loop
                    style={{
                      height: "260px",
                      width: "calc(100% - 20px)", // Adjust width to account for gap
                      objectFit: "cover",
                      marginRight: "20px", // Gap between videos
                    }}
                  />
                </div>
                <div>
                  <video
                    src="/images/video/UIUX Video.mp4"
                    alt=""
                    autoPlay
                    muted
                    loop
                    style={{
                      height: "260px",
                      width: "calc(100% - 20px)", // Adjust width to account for gap
                      objectFit: "cover",
                    }}
                  />
                </div>
              </Slider>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            <div className="md:col-span-4">{/* Kolom Kiri */}</div>
            <div className="md:col-span-8 pb-28">
              <div className="text-xl md:text-[32px] md:text-left leading-[150%] tracking-[0.32px]">
                <AnimatedTextParagraph
                  text="Explore our dynamic design hub, where you can delve into our
                extensive range of services, highlighting our versatility and
                innovative adaptability."
                />
              </div>
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

        <section className="pb-28" style={{ height: "100vh" }}>
          <div className="px-4 md:px-28">
            <div className="text-2xl md:text-5xl sm:text-left leading-[100.098%] tracking-[0.48px]">
              <AnimatedTextWord text="Clients" />
            </div>
          </div>

          <div className="pt-20">
            <Slider
              width="250px"
              duration={35}
              pauseOnHover={false}
              blurBorders={true}
              blurBoderColor={"#82CAAA"}
            >
              {clients.map((client, index) => (
                <Slider.Slide key={index}>
                  <img
                    src={client.src}
                    alt={`Client Logo ${index + 1}`}
                    className="w-36"
                  />
                </Slider.Slide>
              ))}
            </Slider>
          </div>
          <div className="pt-6">
            <Slider
              width="250px"
              duration={20}
              pauseOnHover={false}
              blurBorders={true}
              blurBoderColor={"#82CAAA"}
            >
              {clients.map((client, index) => (
                <Slider.Slide key={index}>
                  <img
                    src={client.src}
                    alt={`Client Logo ${index + 1}`}
                    className="w-36"
                  />
                </Slider.Slide>
              ))}
            </Slider>
          </div>
          <div className="pt-6">
            <Slider
              width="250px"
              duration={40}
              pauseOnHover={false}
              blurBorders={true}
              blurBoderColor={"#82CAAA"}
            >
              {clients.map((client, index) => (
                <Slider.Slide key={index}>
                  <img
                    src={client.src}
                    alt={`Client Logo ${index + 1}`}
                    className="w-36"
                  />
                </Slider.Slide>
              ))}
            </Slider>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
