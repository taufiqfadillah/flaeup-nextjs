'use client';

import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { LinkPreview } from '@/components/ui/LinkPreview';
import CopyToClipboardLink from '@/components/ui/CopyToClipboard';

const Footer = () => {
  const lottieLogoRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Lottie Footer Logo
    const lottieInstance = lottie.loadAnimation({
      container: lottieLogoRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/images/lottie/Footer_Logo.json',
    });

    const handleMouseEnter = () => {
      lottieInstance.play();
    };

    const handleMouseLeave = () => {
      lottieInstance.stop();
    };

    const lottieLogoElement = lottieLogoRef.current;
    if (lottieLogoElement) {
      lottieLogoElement.addEventListener('mouseenter', handleMouseEnter);
      lottieLogoElement.addEventListener('mouseleave', handleMouseLeave);
    }

    // GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    const footerElement = footerRef.current;
    if (footerElement) {
      const footerHeight = footerElement.offsetHeight;
      const triggerElement = document.getElementById('trigger-footer');
      if (triggerElement) {
        triggerElement.style.height = `${footerHeight}px`;
      }

      gsap.set(footerElement, { y: `${footerHeight}px` });

      ScrollTrigger.create({
        trigger: '#trigger-footer',
        start: 'top bottom',
        end: () => `+=${footerHeight}`,
        scrub: true,
        pin: true,
        pinSpacing: false,
        // markers: true, // Uncomment for debugging
        onUpdate: (self) => {
          const progress = self.progress;
          const y = `${(1 - progress) * footerHeight}px`;

          gsap.set(footerElement, {
            y,
            duration: 0,
            ease: 'none',
          });
        },
      });
    }

    // Clean-up
    return () => {
      if (lottieLogoElement) {
        lottieLogoElement.removeEventListener('mouseenter', handleMouseEnter);
        lottieLogoElement.removeEventListener('mouseleave', handleMouseLeave);
      }
      lottieInstance.destroy();
      for (const trigger of ScrollTrigger.getAll()) {
        trigger.kill();
      }
    };
  }, []);

  return (
    <>
      <section id="trigger-footer" className="hidden md:block" />

      <section ref={footerRef} className="hidden md:block footer bg-[#2a357a] fixed bottom-0 left-0 w-full py-4 md:py-10 px-8 min-h-screen overflow-hidden z-50">
        <footer className="overflow-hidden">
          <div className="flex flex-wrap">
            <div className="flex w-full mb-[16px] md:mb-[24px] lg:mb-[24px]">
              <div className="w-3/4">
                <span className="text-[18px] lg:text-[20px] text-white font-bold leading-[123%]">Let&apos;s Talk</span>
              </div>
              <div className="text-[18px] lg:text-[16px] font-normal leading-[200%] text-white w-1/4 text-right">
                <a className="hover:underline" href="/termofuse">
                  Terms of Use
                </a>
                <br />
                <a className="hover:underline" href="/privacypolicy">
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="flex w-full mb-[16px] md:mb-[24px] lg:mb-[24px]">
              <div className="relative w-1/2">
                <CopyToClipboardLink className="text=[40px] lg:text-[60px] font-normal leading-[123%] hover:underline pb-10 text-white" href="mailto:hello@flaeup.co">
                  Hello@flaeup.co
                </CopyToClipboardLink>
              </div>
            </div>
            <div className="flex w-full">
              <div className="relative w-1/2">
                <div className="max-[600px]:mt-[0px] max-[768px]:flex-col flex flex-row mt-[48px]">
                  <div className="max-[600px]:mt-[40px]">
                    <p className="max-[600px]:text-[1.25rem] text-white max-[1750px]:text-[1.063rem] text-[1.25rem] leading-normal font-medium ">Job Applications </p>
                    <p className="max-[600px]:text-[1.25rem] text-[#82caaa] max-[1750px]:text-[1.063rem] text-[1.25rem] leading-[130%] font-light mt-[12px]">
                      <a href="mailto:apply@lfaeup.co" target="_BLANK">
                        apply@flaeup.co
                      </a>
                    </p>
                  </div>
                  <div className="max-[600px]:mt-[0px] footer_job_applications max-[768px]:pt-[1rem] max-[768px]:pl-[0rem] max-[1024px]:pl-[2rem] pl-[4rem]">
                    <p className="max-[600px]:text-[1.25rem] text-white max-[1750px]:text-[1.063rem] text-[1.25rem] leading-normal font-medium ">Address </p>
                    <p className="max-[600px]:text-[1.25rem] text-[#82caaa] max-[1750px]:text-[1.063rem] text-[1.25rem] leading-[130%] font-light mt-[12px]">
                      Komp Depart Agama, Cengkareng, <br /> West Jakarta, DKI Jakarta 11710.
                    </p>
                  </div>
                  <div className="max-[600px]:mt-[0px] footer_job_applications max-[768px]:pt-[1rem] max-[768px]:pl-[0rem] max-[1024px]:pl-[2rem] pl-[4rem]">
                    <p className="max-[600px]:text-[1.25rem] text-white max-[1750px]:text-[1.063rem] text-[1.25rem] leading-normal font-medium ">Phone Number</p>
                    <p className="max-[600px]:text-[1.25rem] text-[#82caaa] max-[1750px]:text-[1.063rem] text-[1.25rem] leading-[130%] font-light mt-[12px] underline">
                      <a href="tel:+6289602505228">+62-896-0250-5228</a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-1/2 flex flex-col justify-end items-end">
                <div className="mb-4">
                  <LinkPreview
                    className="group inline-flex py-5 px-6 text-[18px] lg:text-[16px] font-normal leading-[123%] items-center justify-center leading-none font-medium text-white border border-white rounded-full transition duration-200 hover:bg-white hover:text-[#2a357a]"
                    href="https://www.instagram.com/flaeup"
                    target="_blank"
                    rel="noopener noreferrer"
                    url="https://www.instagram.com/flaeup"
                  >
                    <span>Instagram</span>
                  </LinkPreview>
                </div>
                <div className="mb-4">
                  <LinkPreview
                    className="group inline-flex py-4 px-5 text-[18px] lg:text-[16px] font-normal leading-[123%] items-center justify-center leading-none font-medium text-white border border-white rounded-full transition duration-200 hover:bg-white hover:text-[#2a357a]"
                    href="https://x.com/@flaeupstudio"
                    target="_blank"
                    rel="noopener noreferrer"
                    url="https://x.com/@flaeupstudio"
                  >
                    <span>X</span>
                  </LinkPreview>
                </div>
                <div className="mb-4">
                  <LinkPreview
                    className="group inline-flex py-5 px-6 text-[18px] lg:text-[16px] font-normal leading-[123%] items-center justify-center leading-none font-medium text-white border border-white rounded-full transition duration-200 hover:bg-white hover:text-[#2a357a]"
                    href="https://dribbble.com/flaeup"
                    target="_blank"
                    rel="noopener noreferrer"
                    url="https://dribbble.com/flaeup"
                  >
                    <span>Dribbble</span>
                  </LinkPreview>
                </div>
              </div>
            </div>
            <div className="flex w-full mb-[16px] md:mb-[24px] lg:mb-[24px]">
              <div className="relative w-1/2 text-white">
                <span className="text-[18px] lg:text-[20px] font-normal leading-[123%]">Join us and Subscribe to our Newsletter</span>
                <div className="flex w-full py-4 footer-input group">
                  <input className="h-15 py-4 text-white w-4/5 lg:w-[94%] bg-transparent border-b-2" type="email" placeholder="Email Address" />
                  <button className="inline-block w-auto py-4 -ml-[16px] md:-ml-[28px] leading-none" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="22" viewBox="0 0 29 22" fill="none" className="transform transition-transform group-hover:translate-x-2">
                      <title>Footer Icon</title>
                      <g clipPath="url(#clip0_20_174)">
                        <path d="M17.79 0L16.38 1.41L24.96 10H0V12H24.96L16.38 20.58L17.79 22L28.79 11L17.79 0Z" fill="white" />
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
            </div>
            <div className="fixed bottom-0 left-0 w-full flex justify-between items-end p-4">
              <div className="flex-1 max-[600px]">
                <div id="lottie-logo" className="footer-logo max-w-[700px] w-[220px] md:w-[420px] lg:w-full h-[auto]" ref={lottieLogoRef} />
              </div>
              <div className="text-right pr-4 text-white">
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
