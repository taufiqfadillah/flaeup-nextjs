"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LinkPreview } from "@/components/ui/link-preview";

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
      gsap.set(footerRef.current, { y: "100%" });

      ScrollTrigger.create({
        trigger: "#trigger-footer",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
        onEnter: () =>
          gsap.to(footerRef.current, {
            y: "0%",
            duration: 0,
          }),
        onLeaveBack: () =>
          gsap.to(footerRef.current, {
            y: "100%",
            duration: 0,
          }),
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
      <section id="trigger-footer" style={{ height: "2vh" }}></section>
      <section className="footer py-4 md:py-6 px-10" ref={footerRef}>
        <footer>
          <div className="flex flex-wrap pt-12">
            <div className="flex w-full mb-44">
              <div className="w-full w-3/4">
                <span className="footer-letstalk">Let's Talk</span>
              </div>
              <div className="footer-term w-full w-1/4 text-right">
                <a className="hover:underline" href="#">
                  Terms of Use
                </a>
                <br />
                <a className="hover:underline" href="#">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="flex w-full mb-44">
              <div className="relative w-full w-3/4">
                <a
                  className="footer-email hover:underline pb-10"
                  href="mailto:hello@flaeup.co"
                >
                  Hello@flaeup.co
                </a>
                <div className="mt-44">
                  <p className="footer-subemail">
                    Flaeup is a design agency. We help businesses at critical
                    touchpoints. define, and build new futures.
                  </p>
                </div>
              </div>
              <div className="w-full w-1/4 text-right">
                <LinkPreview
                  className="group inline-flex mb-10 py-5 px-8 footer-sosmed items-center justify-center leading-none font-medium text-white border border-white rounded-full transition duration-200 hover:bg-white"
                  href="https://www.instagram.com/flaeup"
                  target="_blank"
                  rel="noopener noreferrer"
                  url="https://www.instagram.com/flaeup"
                >
                  <span>Instagram</span>
                </LinkPreview>
              </div>
            </div>
            <div className="flex w-full mb-44">
              <div className="relative w-full w-3/4">
                <span className="footer-titlesubmit">
                  Join us and Subscribe to our Newsletter
                </span>
                <div className="flex w-full py-8 footer-input">
                  <input
                    className="h-15 py-4 text-white"
                    type="email"
                    placeholder="Email Address"
                  />
                  <button
                    className="inline-block w-auto py-4 -ml-28 leading-none"
                    type="submit"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="29"
                      height="22"
                      viewBox="0 0 29 22"
                      fill="none"
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
              <div className="flex w-full w-1/4 text-right">
                <div className="relative w-full">
                  <span className="footer-phone">Contact Phone</span>
                  <br />
                  <LinkPreview
                    className="group inline-flex footer-contact font-medium text-white"
                    href="https://wa.me/6285255323308"
                    target="_blank"
                    rel="noopener noreferrer"
                    url="https://wa.me/6285255323308"
                  >
                    <span className="flex w-full hover:underline">
                      +62-852-5532-3308
                    </span>
                  </LinkPreview>
                </div>
              </div>
            </div>
            <div className="flex w-full relative">
              <div className="w-full w-3/4 mb-6">
                <div
                  id="lottie-logo"
                  className="footer-logo"
                  ref={lottieLogoRef}
                ></div>
              </div>
              <div className="w-full w-1/4 xl:text-right">
                <span className="footer-copyright font-medium">
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
