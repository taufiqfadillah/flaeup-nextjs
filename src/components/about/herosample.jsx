import React from "react";
import Image from "next/image";
import useAboutHeroAnimation from "@/hooks/useHeroAnimation.jsx";

const AboutHero = () => {
  const { isAnimationComplete } = useAboutHeroAnimation();

  return (
    <section className="about-hero max-[768px]:pt-[7rem] max-[1024px]:flex-wrap max-[1024px]:h-[auto] section-animated-top w-full relative bg-white flex max-[600px]:px-[1.5rem] px-[2rem] max-[2000px]:pt-[6rem] pt-[14rem]">
      <div className="max-[1024px]:h-[auto] max-[1024px]:w-full max-[1750px]:w-[35%] h-screen w-[35%]">
        <h1
          id="animated-work-title"
          className="max-[375px]:text-[4rem] max-[600px]:text-[5rem] max-[768px]:text-[7.2rem] max-[1024px]:translate-x-[0%] max-[1024px]:relative max-[1024px]:text-[10rem] max-[1024px]:items-start max-[1024px]:flex-col w-full flex items-center translate-x-[20%] translate-y-[38vh] text-[20vw] absolute font-medium px-0 md:px-20"
        >
          <div className="perspective_letters max-[1024px]:w-[100%] flex justify-center">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
          </div>
        </h1>
      </div>
      <div className="max-[600px]:items-start max-[600px]:mt-[0rem] max-[1024px]:justify-between max-[1024px]:w-[100%] max-[1024px]:flex-wrap max-[1024px]:flex max-[1750px]:w-[65%] w-[65%] relative">
        <Image
          alt="Flaeup Studio"
          width={700}
          height={700}
          className={`max-[1024px]:h-[25vw] max-[1024px]:w-[38%] max-[1024px]:relative max-[1750px]:h-[28.2vw] absolute w-[0%] top-[2rem] left-0 object-cover h-[32vw] section-animated-top-image-one ${
            isAnimationComplete ? "animate-complete-classname" : ""
          }`}
          src="/images/about/About-01.jpg"
        />
        <Image
          alt="Flaeup Team"
          width={700}
          height={700}
          className={`max-[600px]:translate-y-[-9vw] max-[600px]:object-contain max-[600px]:h-[54.4vw] max-[768px]:translate-y-[-8.2vw] max-[1024px]:translate-y-[-7.8vw] max-[1024px]:object-contain max-[1024px]:h-[54.4vw] max-[1024px]:w-[60%] max-[1024px]:left-[0%] w-[0%] max-[1024px]:relative absolute w-[0%] top-[2rem] right-[0px] h-[18.5vw] object-cover section-animated-top-image-two ${
            isAnimationComplete ? "animate-complete-classname" : ""
          }`}
          src="/images/about/About-01.jpg"
        />
      </div>
    </section>
  );
};

export default AboutHero;
