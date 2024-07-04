"use client";

import React, { useEffect } from "react";
import Navbar from "../components/navbar.jsx";
import Hamburger from "../components/hamburger.jsx";
import Brand from "../components/brand.jsx";
import Footer from "../components/footer.jsx";
import FooterMobile from "../components/footer-mobile.jsx";
import Loader from "../components/loader.jsx";
import Capabilities from "../components/capabilities.jsx";
import lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
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

    // Gscroll
    // const scroll = new GScroll("#GScroll", 0.6);

    // scroll.init();
    // scroll.wheel();

    // window.addEventListener("resize", () => {
    //   scroll.resize();
    // });

    // Clean up function
    return () => {
      animation?.destroy();
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hamburger />
      {/* Hero Desktop*/}
      <section className="relative pb-10 bg-white overflow-hidden">
        <div className="container mx-auto">
          <div className="flex">
            <div className="hero__main">
              <div className="hero__container"></div>
              <div className="hero__videoWrapper">
                <video
                  id="heroVideo"
                  preload="auto"
                  className="hero__video"
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
      <section>
        <div className="mobile container mx-auto lg:hidden">
          <div className="main-mobile">
            <div className="flex border-b">
              <h1 className="mobile-title tracking-tightest">
                Creativity is centar to our design.
              </h1>
            </div>
            <div className="flex flex-wrap -mx-3 align-items-end">
              <div className="mobile-video w-full">
                <video
                  className="flex"
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

      <Capabilities />
      <div className="pt-1000"></div>
      <Brand />
      <Footer />
      <FooterMobile />
      <Loader />
    </>
  );
};

export default Home;
