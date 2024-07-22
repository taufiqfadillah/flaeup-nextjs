import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroCapabilities = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        // refresh the animation on resize
      };
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  //   ScrollTrigger
  useEffect(() => {
    if (window.screen.width > 1024) {
      let e = document.getElementById("projects-scroller-inner").offsetHeight,
        t =
          document.querySelectorAll(".image-holder")[
            document.querySelectorAll(".image-holder").length - 1
          ].offsetHeight,
        r = document.querySelectorAll(
          "#digital-experience-scroller"
        ).offsetHeight;
      document.querySelectorAll("#pin-capabilities").offsetHeight;
      let a = gsap.timeline({
        scrollTrigger: {
          ease: "none",
          trigger: "#capabilities-wrapper",
          start: "top top",
          pin: true,
          scrub: true,
          once: false,
          // endTrigger: "#digital-experience-scroller",
          end: "+=1900",
          // markers: true,
        },
      });
      a.to("#projects-scroller-inner", 2, { y: "-".concat(e - t, "px") }),
        a.to("#digital-experience-scroller-inner", {
          y: "-".concat(r, "px"),
        }),
        (window.onresize = function () {
          // refresh the animation on resize
        });
    }
  }, []);

  return (
    <>
      <section
        ref={ref1}
        className="max-[600px]:h-[auto] max-[600px]:pt-[7rem] max-[600px]:px-[1.5rem] max-[1024px]:h-[auto] px-[2rem] flex flex-wrap h-screen overflow-hidden"
        id="capabilities-wrapper"
      >
        <div className="flex w-full h-screen items-center justify-between px-[2rem]">
          <div className="w-4/10">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-[600px]:text-[3.5rem] text-[#212121] max-[1750px]:text-[4rem] text-[4.5vw] text-normal font-medium leading-[120%] tracking-[-0.1rem] overflow-hidden pt-0 md:pt-20"
            >
              Artfully Package <br /> Something
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
              transition={{ duration: 1, delay: 1 }}
              className="max-[600px]:hidden max-[600px]:text-[1.5rem] main-h2 text-[#212121] max-[600px]:[&>br]:hidden max-[1750px]:text-[1.5rem] text-[1.5vw] font-normal leading-[150%] tracking-normal my-[3rem] block"
            >
              Our packaging breathes life, seemingly
              <br />
              moving autonomously to meet the
              <br />
              its intended target.
            </motion.h2>
            <p className=" max-[600px]:mb-[2rem] max-[600px]:mt-[2rem] max-[1024px]:mb-[3rem] max-[1024px]:mt-[1rem] text-[#212121] max-[1750px]:text-[1rem] text-[0.8vw] font-normal leading-[110%] tracking-normal uppercase my-[4rem] overflow-hidden top-strategy flex">
              <span className="flex relative overflow-hidden">
                <motion.span
                  className="inner max-[1024px]:translate-y-[0px] max-[1024px]:opacity-100 translate-y-[50px] relative opacity-0 flex"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                  We provide you with the perfect recipe
                  <br />
                  to make it irresistibly appetizing.
                </motion.span>
              </span>
            </p>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: inView1 ? 1 : 0, y: inView1 ? 0 : 50 }}
              transition={{ duration: 1, delay: 2 }}
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: inView1 ? 1 : 0 }}
                transition={{ duration: 1, delay: 2.5 }}
                className="inner max-[1024px]:translate-y-[0px] max-[1024px]:opacity-100 max-[1024px]:opacity-100 flex"
              >
                <a className="underlined_button flex" href="#">
                  <p className="max-[1024px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] leading-[120%] font-medium text-[#212121]">
                    Let&apos;s Talk
                  </p>
                </a>
              </motion.span>
            </motion.div>
          </div>
          <div
            className="w-6/10 max-[600px]:mt-[4rem] max-[1024px]:mt-[6rem] max-[1024px]:my-[4rem] max-[1024px]:h-[auto] max-[1024px]:my-[5rem] max-[1024px]:pointer-events-auto max-[1024px]:w-[100%] max-[1750px]:w-[55%] w-[60%] overflow-y-scroll h-screen capabilties_no_scrollbar pointer-events-none pt-24"
            id="projects-scroller"
          >
            <div
              id="projects-scroller-inner"
              className="flex flex-wrap flex-column opacity-100"
              style={{
                translate: "none",
                rotate: "none",
                scale: "none",
                transform: "translate3d(0px, -0.0016px, 0px)",
              }}
            >
              <div className="image-holder overflow-hidden one-image w-[100%]">
                <Image
                  alt="Project Image"
                  title="Project Image"
                  fetchPriority="high"
                  width={800}
                  height={800}
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[100%]"
                  style={{ color: "transparent", opacity: 1 }}
                  src="https://fakeimg.pl/1024x700/2a357a/ffffff"
                  priority
                />
              </div>
              <div className="image-holder overflow-hidden two-images w-[100%] flex gap-5 overflow-hidden mt-[1rem]">
                <video
                  preload="auto"
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[55%]"
                  src="/images/video/Branding Video.mp4"
                  autoPlay
                  loop
                  style={{ opacity: 1 }}
                />
                <Image
                  alt="Project Image"
                  title="Project Image"
                  fetchPriority="high"
                  width={800}
                  height={800}
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[45%]"
                  style={{ color: "transparent", opacity: 1 }}
                  src="https://fakeimg.pl/1024x700/2a357a/ffffff"
                  priority
                />
              </div>
              <div className="image-holder overflow-hidden one-image w-[100%]  mt-[1rem]">
                <video
                  preload="auto"
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[100%]"
                  src="/images/video/Retouching Video.mp4"
                  autoPlay
                  loop
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="image-holder overflow-hidden two-images w-[100%] flex gap-5 overflow-hidden mt-[1rem]">
                <video
                  preload="auto"
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[45%]"
                  src="/images/video/UIUX Video.mp4"
                  autoPlay
                  loop
                  style={{ opacity: 1 }}
                />
                <Image
                  alt="Project Image"
                  title="Project Image"
                  fetchPriority="high"
                  width={800}
                  height={800}
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[55%]"
                  style={{ color: "transparent", opacity: 1 }}
                  src="https://fakeimg.pl/1024x700/2a357a/ffffff"
                  priority
                />
              </div>
              <div className="image-holder overflow-hidden one-image w-[100%] mt-[1rem]">
                <Image
                  alt="Project Image"
                  title="Project Image"
                  fetchPriority="high"
                  width={800}
                  height={800}
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[100%]"
                  style={{ color: "transparent", opacity: 1 }}
                  src="https://fakeimg.pl/1024x700/2a357a/ffffff"
                  priority
                />
              </div>
              <div className="image-holder overflow-hidden two-images w-[100%] flex gap-5 overflow-hidden mt-[1rem]">
                <Image
                  alt="Project Image"
                  title="Project Image"
                  fetchPriority="high"
                  width={800}
                  height={800}
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[55%]"
                  style={{ color: "transparent", opacity: 1 }}
                  src="https://fakeimg.pl/1024x700/2a357a/ffffff"
                  priority
                />
                <video
                  preload="auto"
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[45%]"
                  src="/images/video/Homepage Videos.mp4"
                  autoPlay
                  loop
                  muted
                  style={{ opacity: 1 }}
                />
              </div>
              <div className="image-holder overflow-hidden one-image w-[100%] mt-[1rem]">
                <Image
                  alt="Project Image"
                  title="Project Image"
                  fetchPriority="high"
                  width={800}
                  height={800}
                  className="max-[1024px]:opacity-100 object-cover opacity-0 w-[100%]"
                  style={{ color: "transparent", opacity: 1 }}
                  src="https://fakeimg.pl/1024x700/2a357a/ffffff"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroCapabilities;
