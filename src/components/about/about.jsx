"use client";

import React, { useEffect } from "react";
import Slider from "react-infinite-logo-slider";
import AnimatedTextWord from "@/libs/AnimatedTextWord.jsx";
import AnimatedTextCharacter from "@/libs/AnimatedTextCharacter.jsx";
import AnimatedTextParagraph from "@/libs/AnimatedTextParagraph.jsx";
import AnimatedImage from "@/libs/AnimatedImage.jsx";
import AboutHero from "@/components/about/heroabout.jsx";
import ServicesList from "@/components/services-list.jsx";
import BrandMultiple from "@/components/brand-multiple.jsx";

const About = () => {
  useEffect(() => {
    document.title = "About | Creativity is central to our design.";
  }, []);

  return (
    <>
      <AboutHero />

      <section className="overflow-hidden relative bg-white">
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

      <section className="bg-[#82CAAA] text-black">
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
                    alt="Branding Video Flaeup"
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
                    alt="Retouching Vide Flaeup"
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
                    alt="UI/UX Video Flaeup"
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

        <ServicesList />

        <section className="h-[55vh] md:h-[85vh] lg:h-[170vh]">
          <div className="px-4 md:px-28">
            <div className="text-black text-2xl md:text-5xl sm:text-left leading-[100.098%] tracking-[0.48px]">
              <AnimatedTextWord text="Clients" />
            </div>
          </div>

          <BrandMultiple />
        </section>
      </section>
    </>
  );
};

export default About;
