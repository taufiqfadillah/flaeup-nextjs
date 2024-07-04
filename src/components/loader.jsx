"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

const Loader = () => {
  const animationContainerRef = useRef(null);

  useEffect(() => {
    // Loader Animation
    const animationContainer = animationContainerRef.current;

    // Disable scroll
    document.body.style.overflow = "hidden";

    let animation = null;

    if (animationContainer) {
      animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/images/lottie/Loader.json",
      });

      animation.addEventListener("DOMLoaded", () => {
        animation.goToAndStop(animation.totalFrames, true);
        animation.setDirection(-1);
        animation.play();

        animation.addEventListener("complete", () => {
          setTimeout(() => {
            const preloader = document.getElementById("loading-screen");
            if (preloader) {
              preloader.style.display = "none";
              document.body.style.overflow = "auto";
            }
          }, 300);
        });
      });
    }

    // Clean up on unmount
    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  return (
    <>
      {/* Loader */}
      <div className="loading-screen" id="loading-screen">
        <div id="lottie-animation" ref={animationContainerRef}></div>
      </div>
    </>
  );
};

export default Loader;
