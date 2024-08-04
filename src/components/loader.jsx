'use client';

import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';

const Loader = () => {
  const animationContainerRef = useRef(null);
  const [hasVisited, setHasVisited] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);
  const removeTimeoutRef = useRef(null);

  useEffect(() => {
    const clearLocalStorage = () => {
      localStorage.removeItem('hasVisited');
      setHasVisited(false);
    };

    // Check if user has visited before
    const visitedBefore = localStorage.getItem('hasVisited');

    if (visitedBefore) {
      setHasVisited(true);
      return;
    }

    // Disable scroll and start loading animation
    document.body.style.overflow = 'hidden';

    const animationContainer = animationContainerRef.current;
    if (animationContainer) {
      // Initialize Lottie animation
      const animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: '/images/lottie/Loader.json',
      });

      // Handle animation events
      const handleComplete = () => {
        setTimeout(() => {
          const preloader = document.getElementById('loading-screen');
          if (preloader) {
            preloader.style.display = 'none';
            document.body.style.overflow = ''; // Restore scroll

            setAnimationComplete(true);
            localStorage.setItem('hasVisited', true);

            // Clear localStorage after a set time
            const timeoutId = setTimeout(clearLocalStorage, 30 * 60 * 1000);
            removeTimeoutRef.current = timeoutId;
          }
        }, 300);
      };

      animation.addEventListener('DOMLoaded', () => {
        animation.goToAndStop(animation.totalFrames, true);
        animation.setDirection(-1);
        animation.play();
      });

      animation.addEventListener('complete', handleComplete);

      // Clean-up function
      return () => {
        if (animation) {
          animation.destroy();
        }
        if (removeTimeoutRef.current) {
          clearTimeout(removeTimeoutRef.current);
        }
        document.body.style.overflow = ''; // Ensure scroll is restored
      };
    }
  }, []);

  // Render nothing if the user has visited before or the animation is complete
  if (hasVisited || animationComplete) {
    return null;
  }

  return (
    <div id="loading-screen" className="loading-screen fixed z-[9999999] top-0 bottom-0 left-0 right-0 bg-white flex justify-center items-center overflow-hidden">
      <div id="lottie-animation" className="w-full h-auto max-w-[600px] max-h-[600px]" ref={animationContainerRef} />
    </div>
  );
};

export default Loader;
