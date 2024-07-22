"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import CopyToClipboardLink from "@/components/ui/CopyToClipboard.tsx";
import useStickySection from "@/hooks/useStickySection.jsx";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  useEffect(() => {
    document.title = "Contact | Creativity is centar to our design.";
  }, []);

  useStickySection();

  const eRef = useRef(null);
  const tRef = useRef(null);
  const aRef = useRef(null);
  const iRef = useRef(null);

  const triggerInitialAnimation = () => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
    tl.fromTo(eRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 })
      .fromTo(tRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1 }, "0.1")
      .to(iRef.current, { x: 0, duration: 0.25 }, "-=0.05")
      .fromTo(aRef.current, { x: "2vw" }, { x: 0 }, 0.7)
      .fromTo(
        "#vid-contact",
        { width: "0vw" },
        {
          width: "17vw",
          marginLeft: "3vw",
          marginRight: "3vw",
          ease: "power4.out",
          transformOrigin: "center center",
        },
        "<0.01"
      )
      .to("#connect-text .inner", { y: 0, opacity: 1, stagger: 0.1 }, 0.2);
  };

  const triggerCollaborateAnimation = () => {
    gsap.timeline({
      scrollTrigger: {
        once: true,
        trigger: ".collaborate__section",
        end: "top 60%",
        ease: "none",
        onLeave: () => {
          gsap.to(".animation-text-one", { y: 0, opacity: 1 });
          gsap.to(".animation-text-two", { y: 0, opacity: 1, delay: 0.2 });
        },
      },
    });
  };

  const FooterController = () => {
    gsap
      .timeline({
        scrollTrigger: {
          ease: "none",
          trigger: ".collaborate__section",
          start: "top",
          pin: false,
          scrub: 0,
          once: false,
        },
      })
      .to("#footer-desktop", { y: "0%" }, 0);
  };

  useEffect(() => {
    if (window.screen.width > 1024) {
      FooterController();
      triggerCollaborateAnimation();
      setTimeout(() => {
        triggerInitialAnimation();
      }, 700);
      gsap.timeline({
        scrollTrigger: {
          ease: "power4.out",
          trigger: ".contact__options",
          pin: false,
          scrub: 0,
          once: true,
          end: "top 50%",
          onEnter: () => {
            setTimeout(() => {
              gsap.to(".contact__options .inner", {
                ease: "power4.out",
                y: "0%",
                opacity: 1,
                stagger: 0.2,
              });
            }, 500);
          },
        },
      });
    }
  }, []);

  return (
    <>
      <section className="pr-[32px] pl-[32px]">
        <div className="header__section max-[1024px]:hidden block desktop__heading">
          <div className="pt-[150px] items-center justify-between px-[2rem]">
            <h1
              className="max-[1024px]:text-[7rem] max-[1750px]:text-[6rem] text-[6rem] leading-[110%] font-bold opacity-0 flex flex-col mb-10 pt-6"
              ref={eRef}
            >
              <span>We Transform Your</span>
              <span>Ideas into Tangible</span>
              <span ref={tRef}>Results.</span>
            </h1>
          </div>
          <div className="w-[100%] flex px-[2rem]">
            <div className="w-[50%]">
              <h2
                id="connect-text"
                className="mt-[50px] mb-[50px] leading-[120%] max-[1200px]:text-[1.5rem] max-[1750px]:text-[2rem] text-[2vw] font-[400]"
              >
                <span className="overflow-hidden">
                  <span className="flex opacity-0 translate-y-[100%] inner">
                    Connect with our team to bring your ideas
                  </span>
                </span>
                <span className="overflow-hidden">
                  <span className="flex opacity-0 translate-y-[100%] inner">
                    to life through motion.
                  </span>
                </span>
              </h2>
            </div>
          </div>
        </div>
        <div className="max-[1024px]:flex header__section hidden flex-wrap mobile__heading">
          <div className="w-[100%] pt-[7rem]">
            <h1 className="max-[375px]:text-[4rem] max-[600px]:text-[5rem] text-[10rem] leading-[1] font-[500]">
              We Bring <br /> Your <br />
            </h1>
            <div className="max-[375px]:text-[4rem] max-[600px]:text-[5rem] text-[10rem] leading-[1] font-[500]">
              <h1>
                Vision to
                <span className="flex flex-wrap">
                  <span
                    className="inline-block mt-[20px]"
                    role="img"
                    aria-label="Animation"
                  >
                    <video
                      className="max-[600px]:top-[-0.8rem] max-[600px]:mr-[1rem] max-[600px]:h-[70px] max-[600px]:w-[100px] mr-[2rem] h-[140px] w-[250px] object-cover relative"
                      src="https://cms.raxo.co/wp-content/uploads/2023/12/COURIUS_2_465X404.mp4"
                      controls={false}
                      autoPlay
                      playsInline
                      loop
                      muted
                    />
                  </span>
                  <br />
                  <span className="max-[375px]:flex max-[375px]:items-center inline-block flex-nowrap">
                    Life
                  </span>
                </span>
              </h1>
            </div>
          </div>
          <div className="w-[100%]">
            <h2 className="max-[600px]:my-[2.5rem] max-[600px]:text-[1.5rem] max-[768px]:my-[4rem] max-[768px]:text-[3rem] my-[5rem] text-[3.3vw] leading-[120%] font-[400]">
              Connect with our team to bring your ideas{" "}
              <br className="hidden lg:inline-block" /> to life through motion.
            </h2>
          </div>
        </div>
        <div className="contact__options mb-[65px] lg:mb-52 px-[2rem]">
          <div className="contact__options__second lg:pt-52 lg:pb-[70px] flex flex-wrap">
            <div className="max-[1024px]:w-[100%] max-[1750px]:w-[35%] w-[55%]">
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Project Inquires
                </span>
              </h3>
            </div>
            <div className="max-[1024px]:justify-start max-[1024px]:text-left max-[1024px]:w-[100%] max-[1750px]:w-[65%] w-[45%] pb-[30px] lg:pb-[0]  flex ">
              <div className="max-[600px]:text-[3rem] max-[768px]:text-[3.25rem] footer_email_footer__VFmDJ footer_contact__2uxCy leading-[1] font-[400] max-[1200px]:text-[3rem] max-[1750px]:text-[4rem] text-[3.3vw] cursor-react no-underline">
                <CopyToClipboardLink
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  href="mailto:hello@flaeup.co"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0%)",
                  }}
                >
                  hello@flaeup.co
                </CopyToClipboardLink>
              </div>
            </div>
          </div>
          <div className="contact__options__second lg:pt-[35px] lg:pb-[70px] contact__email flex flex-wrap border-t border-solid border-1 border-black">
            <div className="max-[1024px]:w-[100%] max-[1750px]:w-[35%] w-[55%]">
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Project Inquires
                </span>
              </h3>
            </div>
            <div className="max-[1024px]:justify-start max-[1024px]:text-left max-[1024px]:w-[100%] max-[1750px]:w-[65%] w-[45%] pb-[30px] lg:pb-[0]  flex ">
              <div className="max-[600px]:text-[3rem] max-[768px]:text-[3.25rem] footer_email_footer__VFmDJ footer_contact__2uxCy leading-[1] font-[400] max-[1200px]:text-[3rem] max-[1750px]:text-[4rem] text-[3.3vw] cursor-react no-underline">
                <CopyToClipboardLink
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  href="mailto:apply@flaeup.co"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0%)",
                  }}
                >
                  apply@flaeup.co
                </CopyToClipboardLink>
              </div>
            </div>
          </div>
          <div
            className="contact__options__second lg:pt-[35px] lg:pb-[70px] contact__email flex flex-wrap border-t border-solid border-1 border-black"
            style={{ borderBottom: "none!important" }}
          >
            <div className="max-[1024px]:w-[100%] max-[1750px]:w-[35%] w-[55%]">
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Info+
                </span>
              </h3>
            </div>
            <div className="max-[1024px]:justify-start max-[1024px]:text-left max-[1024px]:w-[100%] max-[1750px]:w-[65%] w-[45%] pb-[30px] lg:pb-[0]  flex flex-col ">
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Address
                </span>
              </h3>
              <p className="max-[600px]:text-[2rem] max-[768px]:mt-[0rem] max-[768px]:text-[2.25rem] footer_email_footer__VFmDJ footer_contact__2uxCy leading-[2] font-[400] max-[1750px]:text-[2rem] text-[3vw] cursor-react no-underline mt-[1rem]">
                <a href="#" target="_BLANK">
                  <span
                    className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      opacity: 1,
                      transform: "translate(0px, 0%)",
                    }}
                  >
                    <span className="">
                      Indonesia, Grogol, Jakarta Barat <br /> Jakarta, 11710.
                    </span>
                  </span>
                </a>
              </p>
              <h3 className="pt-[30px] lg:pt-[45px] pb-[20px] lg:pb-[0] font-[400] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem] text-[1vw] uppercase leading-[120%] overflow-hidden ">
                <span
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0%)",
                  }}
                >
                  Phone Number
                </span>
              </h3>
              <div className="max-[600px]:text-[2rem] max-[768px]:mt-[0rem] max-[768px]:text-[2.25rem]  leading-[1] font-[400] max-[1750px]:text-[2rem] text-[2vw] cursor-react underline mt-[1rem]">
                <CopyToClipboardLink
                  className="flex max-[1024px]:translate-y-[0] max-[1024px]:opacity-100 translate-y-[50px] opacity-0 inner underline"
                  href="tel:+62-896-0250-5228"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0%)",
                  }}
                >
                  +62-896-0250-5228
                </CopyToClipboardLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#82CAAA] w-full text-white panel">
        <main
          className="collaborate__section max-[1024px]:py-[5rem] max-[1024px]:h-[auto] justify-center items-center flex"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            inset: "0px auto auto 0px",
            margin: 0,
            maxWidth: 1430,
            width: 1430,
            maxHeight: 750,
            height: 750,
            padding: 0,
            transform: "translate(0px, 0px)",
          }}
        >
          <section className="pr-[32px] pl-[32px]">
            <div className="header__section max-[1024px]:hidden block desktop__heading">
              <div>
                <h1
                  className="work_design_title__IseCw max-[1024px]:text-[10rem] text-[10vw] leading-[110%] font-medium opacity-0 flex flex-wrap flex justify-center translate-y-[60px] opacity-0"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    opacity: 1,
                    transform: "translate(0px, 0px)",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "flex-start",
                  }}
                >
                  <span>
                    Let&apos;s
                    <span
                      className="px-[0vw] w-[17vw] mx-[8vw]"
                      role="img"
                      aria-label="Animation"
                      style={{
                        display: "inline-block",
                        translate: "none",
                        rotate: "none",
                        scale: "none",
                        transform: "translate(0px, 0px)",
                      }}
                    ></span>
                  </span>
                  <span className="">Collaborate!</span>
                </h1>
              </div>
            </div>
            <div className="max-[1024px]:flex items-center justify-center header__section hidden flex-wrap mobile__heading">
              <div className="w-[100%]">
                <div className="max-[375px]:text-[4rem] max-[600px]:text-[5rem] max-[1024px]:text-[6rem] text-[5rem] leading-[1] font-[500]">
                  <h1 className="flex">
                    Let&apos;s
                    <span className="flex flex-wrap">
                      <span
                        className="max-[768px]:mt-[30px] inline-block mt-[20px]"
                        role="img"
                        aria-label="Animation"
                      ></span>
                      <br />
                    </span>
                  </h1>
                </div>
                <h1 className="max-[375px]:text-[4rem] max-[600px]:text-[5.6rem] max-[768px]:text-[6.5rem] max-[1024px]:text-[6rem] text-[5rem] leading-[1] font-[500]">
                  Collab!
                </h1>
              </div>
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Contact;
