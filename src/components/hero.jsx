"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import LottieScrollTrigger from "@/libs/LottieScrollTrigger";

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    document.title = "Flaeup | Creativity is centar to our design";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = LottieScrollTrigger({
      target: ".hero__container",
      path: "/images/lottie/Creativity_Text_Animation.json",
      scrub: 1,
    });

    return () => animation.destroy();
  });

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(videoRef.current, {
        y: 0,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top 90%",
          end: "bottom 80%",
          scrub: 1,
        },
      });

      tl.to(videoRef.current, {
        duration: 1,
        y: "-65vh",
      });
    },
    {
      scope: videoRef.current,
    }
  );

  const handleToggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <>
      {/* Hero Desktop*/}
      <section className="relative pb-10 bg-white overflow-hidden hidden lg:block">
        <div className="container px-4">
          <div className="flex">
            <div className="w-full h-[140vh]">
              <div className="hero__container flex items-end mx-auto w-full h-screen"></div>
              <div className="flex justify-content-center w-screen h-auto">
                <video
                  ref={videoRef}
                  preload="auto"
                  width="2000"
                  height="2000"
                  className="hero__video absolute w-full h-[650px] object-cover"
                  src="/images/video/Homepage Videos.mp4"
                  autoPlay={true}
                  playsInline={true}
                  loop={true}
                  muted={true}
                  onClick={handleToggleMute}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Hero Mobile --> */}
      <section className="md:block lg:hidden">
        <div className="h-85vh lg:h-auto w-auto">
          <div className="mt-[120px]">
            <div className="flex border-b">
              <h1 className="text-6xl font-bold px-2 pb-4">
                Creativity is centar to our design.
              </h1>
            </div>
            <div className="flex flex-wrap -mx-3 align-items-end">
              <div className="w-full h-full">
                <video
                  className="flex h-[70vh] w-full overflow-hidden object-cover"
                  src="/images/video/Homepage Videos.mp4"
                  autoPlay
                  loop
                  muted
                  preload="auto"
                  alt=""
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
