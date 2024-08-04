import Image from 'next/image';
import React, { useMemo } from 'react';
import Slider from 'react-infinite-logo-slider';
import { v4 as uuidv4 } from 'uuid';
import useStickySection from '@/hooks/useStickySection';

const LogoSlider = () => {
  const clientLogos = useMemo(
    () => [
      '/images/client/Client Logo black-01.svg',
      '/images/client/Client Logo black-02.svg',
      '/images/client/Client Logo black-03.svg',
      '/images/client/Client Logo black-04.svg',
      '/images/client/Client Logo black-05.svg',
      '/images/client/Client Logo black-06.svg',
      '/images/client/Client Logo black-07.svg',
    ],
    []
  );

  const clientSlides = useMemo(
    () =>
      clientLogos.map((src, index) => (
        <Slider.Slide key={src}>
          <Image src={src} alt={`Client Logo ${index + 1}`} className="md:w-40 w-28" width={300} height={300} loading="lazy" />
        </Slider.Slide>
      )),
    [clientLogos]
  );

  useStickySection();

  return (
    <section className="h-[55vh] md:h-[85vh] lg:h-[105vh] bg-[#82CAAA] text-black panel">
      <div className="px-4 md:px-14">
        <div className="text-2xl md:text-5xl sm:text-left leading-[100.098%] tracking-[0.48px]">Clients</div>
      </div>
      <div className="pt-10 md:pt-20">
        {Array(3)
          .fill(null)
          .map((_, index) => {
            const uniqueKey = `${index}-${uuidv4()}`;
            return (
              <Slider key={uniqueKey} width="200px" duration={index * 10 + 20} pauseOnHover={false} blurBorders={false} blurBorderColor="#82CAAA">
                {clientSlides}
              </Slider>
            );
          })}
      </div>
    </section>
  );
};

export default LogoSlider;
