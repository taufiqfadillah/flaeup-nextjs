"use client";

import React, { useEffect } from "react";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
  useEffect(() => {
    document.title = "Flaeup | Creativity is centar to our design";

    gsap.registerPlugin(ScrollTrigger);

    // Hero Animation
    const video = document.getElementById("heroVideo");
    let animation;

    function initializeLottieAnimation() {
      animation = lottie.loadAnimation({
        container: document.querySelector(".hero__container"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "/images/lottie/Creativity_Text_Animation.json",
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice",
        },
      });

      let playhead = { frame: 0 };

      animation.addEventListener("DOMLoaded", () => {
        gsap.to(playhead, {
          frame: animation.totalFrames - 1,
          ease: "none",
          onUpdate: () => animation.goToAndStop(playhead.frame, true),
          scrollTrigger: {
            trigger: ".hero__container",
            start: "bottom 99%",
            end: "bottom 20%",
            scrub: 1,
          },
        });

        ScrollTrigger.sort();
        ScrollTrigger.refresh();
      });
    }

    initializeLottieAnimation();

    gsap.set(video, { y: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
      },
    });

    tl.to(video, {
      duration: 1,
      y: "-65vh",
    });

    // Video mute/unmute logic
    const handleVideoPlayback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.muted = false;
          video.play();
        } else {
          video.muted = true;
        }
      });
    };

    const observer = new IntersectionObserver(handleVideoPlayback, {
      threshold: 0.5,
    });

    observer.observe(video);

    // Clean up function
    return () => {
      animation?.destroy();
      observer.disconnect();
    };
  }, []);

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
                  id="heroVideo"
                  preload="auto"
                  className="hero__video absolute w-full h-[650px] translate-y-[0] object-fill left-0"
                  src="/images/video/Homepage Videos.mp4"
                  autoPlay
                  playsInline
                  loop
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
