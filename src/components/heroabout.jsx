"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const AboutHero = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  useEffect(() => {
    const lenis = new Lenis();
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);

      if (window.screen.width > 1024) {
        document.documentElement.classList.add("stop-scrolling");
        triggerAboutAnimation();
      }
    }

    return () => {
      document.documentElement.classList.remove("stop-scrolling");
    };
  }, []);

  const triggerAboutAnimation = () => {
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });
    const windowHeight = window.innerHeight;

    tl.to(
      ".perspective_letters span",
      { y: "0%", opacity: 1, stagger: 0.08, duration: 0.6 },
      0
    )
      .to(
        "#animated-work-title",
        {
          fontSize: window.screen.width > 2000 ? "7vw" : "6.25rem",
          y: windowHeight > 650 ? "0%" : "40%",
          x: windowHeight > 650 ? "0%" : "-40%",
          duration: 1.5,
        },
        1.4
      )
      .to(".section-animated-top-image-one", { width: "56%", duration: 1 }, 2.2)
      .to(
        ".section-animated-top-image-two",
        { width: "43%", height: "18.5vw", duration: 1 },
        2.2
      )
      .eventCallback("onComplete", () => {
        setIsAnimationComplete(true);
      });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.getElementById("animated-work-title") &&
        !isAnimationComplete
      ) {
        document.documentElement.style.overflowY = "hidden";
      } else {
        document.documentElement.style.overflowY = "scroll";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimationComplete]);

  useEffect(() => {
    if (isAnimationComplete) {
      const halfScreenWidth = window.screen.width / 2.1;
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-animated-top",
          pin: true,
          scrub: 0,
          start: "top top",
          end: "+=500",
          ease: "power3.out",
        },
      });

      scrollTl
        .fromTo(
          "#animated-work-title",
          { opacity: 1 },
          { opacity: 0, duration: 1 }
        )
        .fromTo(
          ".section-animated-top-image-two",
          {
            width: "43%",
            height: "auto",
            right: "0px",
            x: "0%",
            y: "0%",
          },
          {
            x: `-${halfScreenWidth}px`,
            y: "0%",
            width: "100%",
            x: "-16vw",
            duration: 1,
            onComplete: () => {
              document.documentElement.style.overflow = "hidden";
            },
          },
          "<="
        );
    }
  }, [isAnimationComplete]);

  return (
    <section className="max-[768px]:pt-[7rem] max-[1024px]:flex-wrap max-[1024px]:h-[auto] section-animated-top w-full relative bg-white flex max-[600px]:px-[1.5rem] px-[2rem] max-[2000px]:pt-[6rem] pt-[14rem]">
      <div className="max-[1024px]:h-[auto] max-[1024px]:w-[100%] max-[1750px]:w-[35%] h-screen w-[35%] overflow-hidden">
        <h1
          id="animated-work-title"
          className="max-[375px]:text-[4rem] max-[600px]:text-[5rem] max-[768px]:text-[7.2rem] max-[1024px]:translate-x-[0%] max-[1024px]:translate-y-[0%] max-[1024px]:relative max-[1024px]:text-[10rem] max-[1024px]:items-start max-[1024px]:flex-col w-full flex items-center translate-x-[20%] translate-y-[38vh] text-[20vw] absolute pointer-events-none font-medium"
        >
          <div className="perspective_letters max-[1024px]:w-[100%] flex">
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
          className="max-[1024px]:h-[25vw] max-[1024px]:w-[38%] max-[1024px]:relative max-[1750px]:h-[28.2vw] absolute w-[0%] top-[2rem] left-0 object-cover h-[32vw] section-animated-top-image-one"
          src="/images/about/About-01.jpg"
        />
        <Image
          alt="Flaeup Team"
          width={700}
          height={700}
          className="max-[600px]:translate-y-[-9vw] max-[600px]:object-contain max-[600px]:h-[54.4vw] max-[768px]:translate-y-[-8.2vw] max-[1024px]:translate-y-[-7.8vw] max-[1024px]:object-contain max-[1024px]:h-[54.4vw] max-[1024px]:w-[60%] max-[1024px]:left-[0%] w-[0%] max-[1024px]:relative absolute w-[0%] top-[2rem] right-[0px] h-[18.5vw] object-cover section-animated-top-image-two"
          src="/images/about/About-01.jpg"
        />
      </div>
    </section>
  );
};

export default AboutHero;
