"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkPreview } from "@/components/ui/LinkPreview";
import CopyToClipboardLink from "@/components/ui/CopyToClipboard";

const Footer = () => {
  const lottieLogoRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Lottie Footer Logo
    const lottieInstance = lottie.loadAnimation({
      container: lottieLogoRef.current,
      renderer: "svg",
      loop: true,
      autoplay: false,
      path: "/images/lottie/Footer_Logo.json",
    });

    const handleMouseEnter = () => {
      lottieInstance.play();
    };

    const handleMouseLeave = () => {
      lottieInstance.stop();
    };

    const lottieLogoElement = lottieLogoRef.current;
    if (lottieLogoElement) {
      lottieLogoElement.addEventListener("mouseenter", handleMouseEnter);
      lottieLogoElement.addEventListener("mouseleave", handleMouseLeave);
    }

    // GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    if (footerRef.current) {
      gsap.set(footerRef.current, { y: "100vh" });

      ScrollTrigger.create({
        trigger: "#trigger-footer",
        start: "top bottom",
        end: "+=300vh",
        scrub: true,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const y = `${100 - progress * 100}vh`;
          const duration = 0;
          const ease = "none";

          gsap.to(footerRef.current, {
            y,
            duration,
            ease,
          });
        },
      });
    }

    // Clean-up
    return () => {
      if (lottieLogoElement) {
        lottieLogoElement.removeEventListener("mouseenter", handleMouseEnter);
        lottieLogoElement.removeEventListener("mouseleave", handleMouseLeave);
      }
      lottieInstance.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <section
        id="trigger-footer"
        className="hidden md:block h-[1px]"
      ></section>

      <section
        className="hidden md:block footer bg-[#2a357a] text-white fixed bottom-0 left-0 w-full py-4 md:py-10 px-8 h-screen overflow-hidden z-50"
        ref={footerRef}
      >
        <footer className="overflow-hidden">
          <div className="flex flex-wrap">
            <div className="flex w-full mb-[16px] md:mb-[24px] lg:mb-[54px]">
              <div className="w-3/4">
                <span className="text-[18px] lg:text-[16px] font-bold leading-[123%]">
                  Let&apos;s Talk
                </span>
              </div>
              <div className="text-[18px] lg:text-[16px] font-normal leading-[200%] w-1/4 text-right">
                <a className="hover:underline" href="#">
                  Terms of Use
                </a>
                <br />
                <a className="hover:underline" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="flex w-full mb-[16px] md:mb-[24px] lg:mb-[54px]">
              <div className="relative w-1/2">
                <CopyToClipboardLink
                  className="text=[40px] lg:text-[60px] font-normal leading-[123%] hover:underline pb-10"
                  href="mailto:hello@flaeup.co"
                >
                  Hello@flaeup.co
                </CopyToClipboardLink>
                <div className="mt-[16px] md:mt-[24px] lg:mt-[54px]">
                  <p className="text-[16px] lg:text-[20px] text-[#82caaa] font-normal leading-[123%]">
                    Flaeup is a design agency. We help businesses at critical
                    touchpoints. define, and build new futures.
                  </p>
                </div>
              </div>
              <div className="w-1/2 text-right">
                <LinkPreview
                  className="group inline-flex mb-10 mt-[20px] lg:mt-0 py-5 px-8 text-[18px] lg:text-[20px] font-normal leading-[123%] items-center justify-center leading-none font-medium text-white border border-white rounded-full transition duration-200 hover:bg-white hover:text-[#2a357a]"
                  href="https://www.instagram.com/flaeup"
                  target="_blank"
                  rel="noopener noreferrer"
                  url="https://www.instagram.com/flaeup"
                >
                  <span>Instagram</span>
                </LinkPreview>
              </div>
            </div>
            <div className="flex w-full mb-[16px] md:mb-[24px] lg:mb-[54px]">
              <div className="relative w-1/2">
                <span className="text-[18px] lg:text-[20px] font-normal leading-[123%]">
                  Join us and Subscribe to our Newsletter
                </span>
                <div className="flex w-full py-8 footer-input group">
                  <input
                    className="h-15 py-4 text-white w-4/5 lg:w-[94%] bg-transparent border-b-2"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="inline-block w-auto py-4 -ml-[16px] md:-ml-[28px] leading-none"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="22"
                      viewBox="0 0 29 22"
                      fill="none"
                      className="transform transition-transform group-hover:translate-x-2"
                    >
                      <g clipPath="url(#clip0_20_174)">
                        <path
                          d="M17.79 0L16.38 1.41L24.96 10H0V12H24.96L16.38 20.58L17.79 22L28.79 11L17.79 0Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_174">
                          <rect width="28.79" height="22" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="w-1/2 text-right">
                <div className="relative w-full">
                  <span className="text-[18px] lg:text-[16px] font-normal leading-[200%]">
                    Contact Phone
                  </span>
                  <br />
                  <LinkPreview
                    className="group inline-flex text-[20px] font-normal leading-[123%] text-white"
                    href="https://wa.me/6289602505228"
                    target="_blank"
                    rel="noopener noreferrer"
                    url="https://wa.me/6289602505228"
                  >
                    <span className="flex w-full hover:underline">
                      +62-896-0250-5228
                    </span>
                  </LinkPreview>
                </div>
              </div>
            </div>
            <div className="fixed bottom-0 left-0 w-full flex justify-between items-end p-4">
              <div className="flex-1 max-[600px]">
                <div
                  id="lottie-logo"
                  className="footer-logo max-w-[700px] w-[220px] md:w-[420px] lg:w-full h-[auto]"
                  ref={lottieLogoRef}
                ></div>
              </div>
              <div className="text-right pr-4">
                <span className="text-[16px] lg:text-[20px] font-normal leading-[123%]">
                  &copy; Flaeup 2024
                  <br />
                  All Right Reserved
                </span>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default Footer;
