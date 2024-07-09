"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import AnimatedTextWord from "@/libs/AnimatedTextWord.jsx";
import AnimatedTextCharacter from "@/libs/AnimatedTextCharacter.jsx";
import AnimatedTextParagraph from "@/libs/AnimatedTextParagraph.jsx";
import AnimatedImage from "@/libs/AnimatedImage.jsx";
import AboutHero from "@/components/heroabout.jsx";

const Client_1 = "/images/client/Client Logo black-01.svg";
const Client_2 = "/images/client/Client Logo black-02.svg";
const Client_3 = "/images/client/Client Logo black-03.svg";
const Client_4 = "/images/client/Client Logo black-04.svg";
const Client_5 = "/images/client/Client Logo black-05.svg";
const Client_6 = "/images/client/Client Logo black-06.svg";
const Client_7 = "/images/client/Client Logo black-07.svg";

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
      <AboutHero />

      <section className="overflow-hidden relative z-40 bg-white">
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
              <AnimatedTextParagraph
                text="We have the privilege of working with well known brands but
              prioritize great projects that allow us to develop our craft."
              />
            </div>
          </div>
          <div className="w-full flex py-10 px-4 md:px-28 justify-center items-center md:gap-6">
            <div className="w-3/10 flex justify-center">
              <AnimatedImage
                src="/images/about/About-02.jpg"
                alt=""
                className="w-full max-h-full"
                width={430}
                height={490}
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <div className="w-7/10 flex justify-center">
              <AnimatedImage
                src="/images/about/About-03.jpg"
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
                <AnimatedTextParagraph
                  text="Design that speaks” has become our signature tagline, perfectly
                encapsulating our ethos as a design studio. We continually
                strive to surpass previous achievements, constantly evolving and
                pushing boundaries in every aspect of design and creativity we
                engage in."
                />
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

      <section className="overflow-hidden bg-[#82CAAA] text-white pb-0 md:pb-32">
        <section className="py-20">
          <div>
            <div className="text-2xl text-black px-4 md:text-5xl md:px-28">
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
                      width: "calc(100% - 20px)",
                      objectFit: "cover",
                      marginRight: "20px",
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
                      width: "calc(100% - 20px)",
                      objectFit: "cover",
                      marginRight: "20px",
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
                      width: "calc(100% - 20px)",
                      objectFit: "cover",
                      marginRight: "20px",
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
              <div className="text-xl text-black md:text-[32px] md:text-left leading-[150%] tracking-[0.32px]">
                <AnimatedTextParagraph
                  text="Explore our dynamic design hub, where you can delve into our
                extensive range of services, highlighting our versatility and
                innovative adaptability."
                />
              </div>
              <a
                className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                    Branding
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
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
                  </span>
                </div>
              </a>

              <a
                className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                    Retouching
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
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
                  </span>
                </div>
              </a>
              <a
                className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                    UI/UX Design
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
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
                  </span>
                </div>
              </a>
              <a
                className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                    Packaging
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
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
                  </span>
                </div>
              </a>
              <a
                className="relative group block md:flex pb-4 mb-16 mt-16 items-center border-b border-black"
                href="#"
              >
                <div className="md:mb-8 xl:mb-0">
                  <h3 className="text-3xl text-black md:text-5xl inline-block md:pb-2 hover:underline transition duration-150">
                    Illustration
                  </h3>
                </div>
                <div className="hidden md:block max-w-md md:mb-8 text-right xl:mb-0 ml-auto xl:mr-20"></div>
                <div className="text-right md:ml-auto">
                  <span className="inline-block group-hover:rotate-45 transform transition duration-100">
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
                  </span>
                </div>
              </a>
            </div>
          </div>
        </section>

        <section className="pb-0 md:pb-32 h-[55vh] md:h-[180vh]">
          <div className="px-4 md:px-28">
            <div className="text-black text-2xl md:text-5xl sm:text-left leading-[100.098%] tracking-[0.48px]">
              <AnimatedTextWord text="Clients" />
            </div>
          </div>

          <div className="pt-10 md:pt-20">
            <Slider
              width="200px"
              duration={35}
              pauseOnHover={false}
              blurBorders={true}
              blurBoderColor={"#82CAAA"}
            >
              {clients.map((client, index) => (
                <Slider.Slide key={index}>
                  <Image
                    src={client.src}
                    alt={`Client Logo ${index + 1}`}
                    className="md:w-40 w-28"
                    width={300}
                    height={300}
                  />
                </Slider.Slide>
              ))}
            </Slider>
          </div>
          <div className="pt-2 md:pt-6">
            <Slider
              width="200px"
              duration={20}
              pauseOnHover={false}
              blurBorders={true}
              blurBoderColor={"#82CAAA"}
            >
              {clients.map((client, index) => (
                <Slider.Slide key={index}>
                  <Image
                    src={client.src}
                    alt={`Client Logo ${index + 1}`}
                    className="md:w-40 w-28"
                    width={300}
                    height={300}
                  />
                </Slider.Slide>
              ))}
            </Slider>
          </div>
          <div className="pt-2 md:pt-6">
            <Slider
              width="200px"
              duration={40}
              pauseOnHover={false}
              blurBorders={true}
              blurBoderColor={"#82CAAA"}
            >
              {clients.map((client, index) => (
                <Slider.Slide key={index}>
                  <Image
                    src={client.src}
                    alt={`Client Logo ${index + 1}`}
                    className="md:w-40 w-28"
                    width={300}
                    height={300}
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
