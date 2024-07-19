"use client";

import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useAnimationCapabilities = () => {
    const [triggerNavbarChange, setTriggerNavbarChange] = useState(false);

    useEffect(() => {
      if (window.screen.width) {
        setTriggerNavbarChange(true);
        gsap
          .timeline({
            scrollTrigger: {
              ease: "none",
              trigger: "#digital-experience-scroller-inner",
              start: "top 20%",
              pin: false,
              scrub: 0,
              once: false,
              end: "+=50",
            },
          })
          .to(".header__container", 0.3, { backgroundColor: "#ebe6e6" });
      }
    }, []);

    useEffect(() => {
      if (window.screen.width) {
        gsap.timeline({
          scrollTrigger: {
            trigger: "#digital-experience-scroller-inner",
            pin: false,
            scrub: 0,
            once: true,
            top: "top 50%",
            onEnter: () => {
              gsap.to(".trigger-one .inner", 1, {
                ease: "power4.out",
                y: "0%",
                opacity: 1,
                stagger: 0.2,
                once: true,
              }),
                gsap.to(".trigger-one-left .trigger-one-left-inner", 1, {
                  ease: "power4.out",
                  y: "0%",
                  opacity: 1,
                  once: true,
                }),
                gsap.to(".trigger-one-main .trigger-one-main-inner", 1, {
                  ease: "power4.out",
                  y: "0%",
                  opacity: 1,
                  stagger: 0.2,
                  once: true,
                }),
                gsap.to(".trigger-two-list span", 1, {
                  ease: "power4.out",
                  y: "0%",
                  opacity: 1,
                  stagger: 0.1,
                  once: true,
                });
            },
          },
        });
      }
    }, []);

    const [footerController, setFooterController] = useState(false);

    useEffect(() => {
      if (window.screen.width > 1024) {
        setFooterController(true);
        gsap
          .timeline({
            scrollTrigger: {
              ease: "none",
              trigger: "#potential-wrapper",
              start: "top",
              pin: true,
              scrub: 0,
              once: false,
            },
          })
          .to("#footer-desktop", { y: "0%" }, 0);
      }
    }, []);

    useEffect(() => {
      if (window.screen.width > 1024) {
        gsap.to("#capabilities-wrapper h1 span", {
          ease: "power4.out",
          y: "0%",
          opacity: 1,
        }),
          gsap.to(".main-h2 .inner, .top-strategy .inner", {
            ease: "power4.out",
            y: "0%",
            opacity: 1,
            stagger: 0.15,
          }),
          gsap.to(".button-animation span", {
            ease: "power4.out",
            y: "0%",
            opacity: 1,
            delay: 1,
          }),
          gsap.to(
            "#projects-scroller-inner img, #projects-scroller-inner video",
            { ease: "power4.out", opacity: 1, stagger: 0.2 }
          );
      }
    }, []);

    useEffect(() => {
      let elements = document.querySelectorAll(
        ".top-tab-menu p, .potential-wrapper .inner,.sub-text .inner"
      );
      if (window.screen.width > 1024) {
        gsap.timeline({
          scrollTrigger: {
            ease: "power4.out",
            trigger: ".potential-wrapper",
            start: "top 100%",
            scrub: 0,
            end: "top 90%",
            onLeave: (t) => {
              gsap.to(elements, { opacity: 1, y: "0%", stagger: 0.2 }),
                gsap.to(".bottom-links a", { opacity: 1, y: "0%", delay: 1 }),
                gsap.to(".potential-wrapper h5 .inner", {
                  opacity: 1,
                  y: "0%",
                  delay: 1,
                  stagger: 0.1,
                });
            },
          },
        });
      }
    }, []);


    useEffect(() => {
      if (window.screen.width > 1024) {
        let e = document.getElementById("projects-scroller-inner").offsetHeight,
          t =
            document.querySelectorAll(".image-holder")[
              document.querySelectorAll(".image-holder").length - 1
            ].offsetHeight + 290,
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
            scrub: 0,
            once: false,
            endTrigger: "#digital-experience-scroller",
            end: "+=5000",
          },
        });
        a.to("#projects-scroller-inner", 40, { y: "-".concat(e - t, "px") }),
          a.to("#digital-experience-scroller-inner", 20, {
            y: "-".concat(r, "px"),
          }),
          (window.onresize = function () {
            // refresh the animation on resize
          });
      }
    }, []);

};

export default useAnimationCapabilities;
