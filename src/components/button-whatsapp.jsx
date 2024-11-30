'use client';

import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { sendGTMEvent } from '@next/third-parties/google';

const Button = () => {
  const animationContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    //Animation
    const animationContainer = animationContainerRef.current;

    // Disable scroll
    document.body.style.overflow = 'hidden';

    let animation = null;

    if (animationContainer) {
      animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/images/lottie/Button.json',
      });

      animation.addEventListener('DOMLoaded', () => {
        animation.goToAndStop(animation.totalFrames, true);
        animation.play();

        animation.addEventListener('complete', () => {
          setTimeout(() => {
            const preloader = document.getElementById('button-whatsapp');
            if (preloader) {
              preloader.style.display = 'none';
              document.body.style.overflow = 'auto';
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

  const handleClick = () => {
    sendGTMEvent({ event: 'buttonWhatsappClicked', value: 'clickwhatsapp' });
    window.open('https://wa.me/6289602505228', '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="button-whatsapp" className="button-whatsapp z-50 fixed bottom-0 right-0 overflow-hidden">
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'transform 0.2s ease',
        }}
        className="w-full h-auto max-w-[64px] max-h-[64px] lg:max-w-[100px] lg:max-h-[100px] mx-4 my-4 lg:mx-8 lg:my-4 flex items-center justify-center"
        aria-label="Contact us on WhatsApp"
      >
        <div id="lottie-animation" className="w-full h-auto" ref={animationContainerRef} />
      </button>
    </div>
  );
};

export default Button;
