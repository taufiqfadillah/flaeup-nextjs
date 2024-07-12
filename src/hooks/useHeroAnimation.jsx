import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

gsap.registerPlugin(ScrollTrigger);

const useHeroAnimation = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const bodyRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
      handleScrolling();
    }

    return () => {
      if (bodyRef.current) {
        bodyRef.current.classList.remove("stop-scrolling");
      }
    };
  }, []);

  const handleScrolling = () => {
    if (window.screen.width > 991) {
      if (bodyRef.current) {
        bodyRef.current.classList.add("stop-scrolling");
      }
      triggerAboutAnimation();
    }
  };

  const triggerAboutAnimation = () => {
    if (window.screen.width <= 991) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });
    const windowHeight = window.innerHeight;

    tl.to(
      ".perspective_letters span",
      { y: "0%", opacity: 1, stagger: 0.08, duration: 1.5 },
      0
    )
      .to(
        "#animated-work-title",
        {
          fontSize: window.screen.width > 2000 ? "7vw" : "6.25rem",
          y: windowHeight > 650 ? "0%" : "40%",
          x: windowHeight > 650 ? "0%" : "-40%",
          duration: 2,
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
    const handleOverflow = () => {
      if (
        document.getElementById("animated-work-title") &&
        !isAnimationComplete &&
        window.innerWidth > 991
      ) {
        if (bodyRef.current) {
          bodyRef.current.style.overflow = "hidden";
        }
      }
    };

    window.addEventListener("scroll", handleOverflow);

    return () => {
      window.removeEventListener("scroll", handleOverflow);
    };
  }, [isAnimationComplete]);

  useEffect(() => {
    if (isAnimationComplete && window.screen.width > 991) {
      const halfScreenWidth = window.screen.width / 2.1;
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-animated-top",
          pin: true,
          scrub: 0,
          start: "top top",
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
          },
          "<="
        );
    }
  }, [isAnimationComplete]);

  return { isAnimationComplete };
};

export default useHeroAnimation;
