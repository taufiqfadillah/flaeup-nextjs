'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useMediaQueries from '@/hooks/useMediaQueries';

gsap.registerPlugin(ScrollTrigger);

const useStickySection = (panelSelector = '.panel') => {
  const { isMobile } = useMediaQueries();

  useEffect(() => {
    if (!isMobile) {
      const panels = gsap.utils.toArray(panelSelector);

      for (const panel of panels) {
        ScrollTrigger.create({
          trigger: panel,
          start: () => (panel.offsetHeight < window.innerHeight ? 'top top' : 'bottom bottom'),
          pin: true,
          pinSpacing: false,
        });
      }

      return () => {
        for (const trigger of ScrollTrigger.getAll()) {
          trigger.kill();
        }
      };
    }
  }, [panelSelector, isMobile]);
};

export default useStickySection;
