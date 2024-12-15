'use client';

import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { useGTMConversion } from '@/hooks/useGTMConversion';

const Button = () => {
  const animationContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useGTMConversion();

  useEffect(() => {
    const animationContainer = animationContainerRef.current;

    let animation = null;

    if (animationContainer) {
      animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/images/lottie/Button.json',
      });
    }

    return () => {
      if (animation) {
        animation.destroy();
      }
    };
  }, []);

  const handleClick = () => {
    if (typeof window.gtag === 'function') {
      window.gtag('event', 'conversion', {
        send_to: 'AW-16785539609/BSgICNe3rPcZEJmE_MM-',
      });
    }

    window.open('https://wa.me/6289602505228', '_blank', 'noopener,noreferrer');
  };

  return (
    <div id="button-whatsapp" className="button-whatsapp z-50 fixed bottom-0 right-0 overflow-hidden">
      <button
        type="submit"
        id="button-whatsapp"
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.2)' : 'scale(1)',
          transition: 'transform 0.2s ease',
          willChange: 'transform',
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
