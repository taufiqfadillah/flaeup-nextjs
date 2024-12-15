'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import HeroCapabilities from '@/components/capabilities/hero-capabilities';
import ServicesListCapabilities from '@/components/capabilities/serviceslist-capabilities';
import PotentialCapabilities from '@/components/capabilities/potential-capabilities';
import useMediaQueries from '@/hooks/useMediaQueries';
import { lazy } from 'react';
const Button = lazy(() => import('@/components/button-whatsapp'));

gsap.registerPlugin(ScrollTrigger);

const Packaging = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
  });
  const { ref: videoRef, inView: videoInView } = useInView({
    triggerOnce: true,
  });
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
  });

  const { isDesktop } = useMediaQueries();

  useEffect(() => {
    const heroCapabilities = document.querySelector('#capabilities-wrapper');
    const sections = [document.querySelector('#digital-experience-scroller'), document.querySelector('#pin-capabilities')];

    if (isDesktop) {
      for (const section of sections) {
        gsap.fromTo(
          section,
          { y: `-${heroCapabilities.offsetHeight}px` },
          {
            y: '0px',
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top top',
              scrub: true,
              pin: false,
              // markers: true,
            },
          }
        );
      }

      return () => {
        for (const section of sections) {
          gsap.killTweensOf(section);
        }
      };
    }
  }, [isDesktop]);

  return (
    <>
      <HeroCapabilities
        headingTextOne="Artfully Package"
        headingTextTwo="Something"
        subheadingTextOne="Our packaging breathes life, seemingly"
        subheadingTextTwo="moving autonomously to meet the"
        subheadingTextThree="its intended target."
        subheadingTextFour={null}
        descriptionTextOne="We provide you with the perfect recipe"
        descriptionTextTwo="to make it irresistibly appetizing."
        images1="/images/capabilities/Sayur Mayur.mp4"
        images2="/images/work/Parfum Muhammad Ali.jpg"
        images3="/images/capabilities/Pinkingo.jpg"
        images4="/images/capabilities/Capabilities.mp4"
        images5="/images/capabilities/Sayur.jpg"
        images6="/images/capabilities/parfumee.jpg"
        images7="/images/capabilities/Hello01.mp4"
        images8="/images/capabilities/Iphone.jpg"
        images9="/images/capabilities/Free_Soda_Cans_Mockup.jpg"
        images10="/images/capabilities/Packaging.mp4"
      />

      <section className="w-full h-full [background:#82CAAA] text-black rounded-t-lg px-6 lg:px-0" id="digital-experience-scroller">
        <div className="md:container md:mx-auto lg:mx-16 max-[600px]:pt-[3.5rem] max-[600px]:pb-[2rem] max-[1024px]:pb-[5rem] w-full flex flex-wrap pt-[5rem]" id="digital-experience-scroller-inner">
          <div className="max-[600px]:mb-[1rem] max-[1024px]:mb-[4rem] w-full max-[1750px]:mb-[5rem] mb-[13rem]">
            <p
              className="max-[600px]:max-w-[200px] max-[600px]:overflow-visible trigger-one max-[600px]:text-[2.5rem] max-[1024px]:overflow-visible text-[#080808] max-[1750px]:text-[10rem] text-[12vw]  font-medium leading-[94%] tracking-normal overflow-hidden"
              id="de-title"
            >
              <span className="overflow-hidden">
                <span className="block">Sparkles</span>
                <span className="block"> with Allure</span>
              </span>
            </p>
          </div>
          <div className="max-[600px]:mb-[2rem] max-[1024px]:mb-[3rem] max-[1024px]:w-full w-[35%]">
            <p className="trigger-one-left max-[1024px]:translate-x-[0px] max-[600px]:text-[1rem] max-[1750px]:text-[1.063rem]  text-[1vw] font-medium leading-normal uppercase relative translate-x-[16px] overflow-hidden" id="de-sub">
              What we do
            </p>
          </div>
          <div className="max-[1024px]:w-full w-[65%] flex flex-wrap">
            <div className="trigger-one-main w-full overflow-hidden">
              <p className="max-[600px]:hidden max-[600px]:mb-[3rem] max-[600px]:mt-[0rem] max-[600px]:text-[2rem] max-[1024px]:mb-[4rem] max-[1024px]:text-[2rem] max-[1024px]:leading-[120%] max-[1750px]:mb-[5rem] max-[1750px]:text-[3rem] text-[2.5vw] text-[#080808] font-normal leading-[140%] mb-[8rem] block">
                <span>We dish out tantalizing ideas to make it look utterly irresistible.</span>
              </p>
            </div>
            <div className="max-[1024px]:w-[50%] w-[44.44%]">
              <p className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden">PACKAGING DESIGN</p>
              <p className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden">CONCEPT</p>
              <p className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden">2D DESIGN</p>
              <p className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden">3D DESIGN</p>
              <p className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] overflow-hidden">COMPOSITION</p>
            </div>
            <div className="max-[1024px]:w-[50%] w-[44.44%]">
              <p className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] text-[1rem] overflow-hidden">RESIZE</p>
              <p className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] text-[1rem] overflow-hidden">INTERESTING</p>
              <p className="trigger-two-list  max-[600px]:text-[0.75rem] text-[#080808] text-xl font-medium leading-[180%] tracking-[-0.02rem] mb-[2rem] text-[1rem] overflow-hidden">ADJUSTMENT</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pin-capabilities-inner" className="[background:#82CAAA]">
        <div className="sm:container sm:mx-auto lg:mx-16">
          <div className="capabilities-wrapper-component max-[600px]:px-[1.5rem] max-[768px]:pr-[2rem] max-[1024px]:pb-[4rem] max-[1024px]:pt-[4rem] max-[1750px]:pt-[8rem] w-full flex flex-wrap pt-[8rem] pb-[10rem] relative">
            <div className="max-[600px]:w-[100%] w-[30%] capabilities-wrapper-title" ref={titleRef}>
              <h2 className="max-[600px]:text-[1rem] max-[1750px]:text-[1rem] text-[1vw] font-normal leading-[120%] uppercase overflow-hidden">
                <motion.span initial={{ opacity: 0, y: 50 }} animate={titleInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, ease: 'easeOut' }} id="capabilities-wrapper-component-pretitle">
                  Our Capabilities
                </motion.span>
              </h2>
            </div>
            <div className="max-[600px]:mt-[3rem] max-[600px]:w-[100%] w-[70%]" id="pin-windmill-wrap" ref={videoRef}>
              <div className="capabilities-wrapper relative">
                <div className="max-[600px]:h-[250px] max-[600px]:min-h-[250px] w-[100%] min-h-[27.5vw] h-[27.5vw] relative overflow-hidden">
                  <motion.video
                    alt="Display of our capabilities"
                    autoPlay
                    loop
                    muted
                    playsInline
                    initial={{ opacity: 0, y: 50 }}
                    animate={videoInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    id="pin-windmill-svg"
                    className="max-[1024px]:opacity-100 max-[1024px]:top-0 max-[1024px]:translate-y-[0%] translate-y-[50px] flex w-full h-full object-cover absolute top-0 opacity-0 right-0 bottom-0"
                  >
                    <source src="/images/video/Branding Video.mp4" type="video/mp4" />
                  </motion.video>
                </div>
                <div className="max-[1024px]:min-h-[auto] max-[1024px]:pb-[0rem] min-h-[100vh] max-[1750px]:pb-[10rem]" id="main-paragraph-full" ref={paragraphRef}>
                  <div className="overflow-hidden" id="main-paragraph-cap">
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="max-[600px]:hidden max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] max-[600px]:leading-[120%] max-[600px]:text-[1.5rem] max-[600px]:mt-[2rem] max-[600px]:text-[1.2rem] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.375rem] text-[2.6vw] text-[#080808] font-normal leading-[150%] my-[6rem] capabilities-wrapper-pretitle flex flex-col transition-transform transition-opacity"
                    >
                      <span className="overflow-hidden">
                        <span>Explore our dynamic design hub, where you</span>
                      </span>
                      <span className="overflow-hidden">
                        <span>can delve into our extensive range of </span>
                      </span>
                      <span className="overflow-hidden">
                        <span>services, highlighting our versatility and innovative adaptability.</span>
                      </span>
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0, y: 50 }}
                      animate={paragraphInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 1, ease: 'easeOut' }}
                      className="max-[600px]:leading-[120%] max-[600px]:text-[1.5rem] max-[600px]:my-[3rem] max-[600px]:text-[1.2rem] max-[600px]:flex max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] max-[1024px]:text-[2.2rem] max-[1750px]:text-[2.375rem] text-[2.6vw] text-[#080808] font-normal leading-[120%] capabilities-wrapper-pretitle flex flex-col transition-transform transition-opacity hidden"
                    >
                      We’re a versatile design hub. Here you can check for yourself the full scope of our services, showcasing our range and adaptability.
                    </motion.p>
                  </div>

                  <ServicesListCapabilities />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PotentialCapabilities />
      <Button />
    </>
  );
};

export default Packaging;
