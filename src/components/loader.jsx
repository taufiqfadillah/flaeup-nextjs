"use client";

import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

const Loader = () => {
  const animationContainerRef = useRef(null);
  const [hasVisited, setHasVisited] = useState(false);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem("hasVisited");
      setHasVisited(false);
    };

    const visitedBefore = localStorage.getItem("hasVisited");

    if (visitedBefore) {
      setHasVisited(true);

      setTimeout(clearLocalStorage, 30 * 60 * 1000);
      return;
    }

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

              localStorage.setItem("hasVisited", true);
              setHasVisited(true);

              setTimeout(clearLocalStorage, 30 * 60 * 1000);
            }
          }, 300);
        });
      });
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  if (hasVisited) {
    return null;
  }

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
