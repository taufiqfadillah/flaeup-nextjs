import React from 'react';
import useStickySection from '@/hooks/useStickySection.jsx';

const PotentialCapabilities = () => {
  useStickySection();

  return (
    <>
      <section id="potential-wrapper" className="[background:#82CAAA] pb-[7rem] panel">
        <div
          className="max-[600px]:h-auto max-[600px]:py-[5rem] py-[9rem] h-screen flex justify-center items-center"
          style={{
            margin: '0 auto',
            maxWidth: '1430px',
          }}
        >
          <div className="potential-wrapper flex flex-col justify-center items-center">
            <div className="max-[600px]:hidden flex top-tab-menu">
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <p className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[0px] opacity-100 relative">
                  <a href="/capabilities/retouching">design</a>
                </p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <p className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[0px] opacity-100 relative">
                  <a href="/capabilities/branding">branding</a>
                </p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <p className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[0px] opacity-100 relative">
                  <a href="/capabilities/uiuxdesign">technology</a>
                </p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <p className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[0px] opacity-100 relative">
                  <a href="/capabilities/packaging">strategy</a>
                </p>
              </div>
            </div>
            <div className="max-[768px]:leading-normal max-[768px]:overflow-visible overflow-hidden">
              <h5 className="capabilties_unlock_title__5hS1N max-[600px]:mt-[0rem] max-[600px]:[&>br]:hidden max-[600px]:max-w-[320px] max-[600px]:leading-[120%] max-[600px]:text-[2.2rem] max-[600px]:font-normal max-[768px]:text-[3rem] max-[1024px]:translate-y-[0%] max-[1750px]:text-[4rem] text-[4vw] text-[#080808] text-normal font-normal leading-[120%] tracking-[-0.08rem] text-center mt-[3rem] relative pb-[2rem]">
                <span className="overflow-hidden">
                  <span className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-100 flex translate-y-[0px] justify-center items-center">Are you prepared to ignite the</span>
                </span>
                <span className="overflow-hidden">
                  <span className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-100 flex translate-y-[0px] justify-center items-center">full potential of your project and catapult</span>
                </span>
                <span className="overflow-hidden">
                  <span className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-100 flex translate-y-[0px] justify-center items-center">it to dazzling new heights?</span>
                </span>
              </h5>
            </div>
            <div className="max-[768px]:overflow-visible overflow-hidden">
              <p className="max-[600px]:mt-[2rem] max-[600px]:text-[0.875rem] max-[1024px]:translate-y-[0%] max-[1750px]:text-[1.063rem] text-[1vw] text-[#080808] font-medium leading-normal tracking-[-0.02rem] max-[1750px]:mt-[1.5rem] mt-[2rem] text-center relative">
                <span className="overflow-hidden">
                  <span className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-100 flex translate-y-[0px] justify-center items-center">LOOK NO FURTHER, AS WE ARE HERE TO SUPPORT YOU</span>
                </span>
                <span className="overflow-hidden">
                  <span className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-100 flex translate-y-[0px] justify-center items-center">EVERY STEP OF THE WAY</span>
                </span>
              </p>
            </div>
            <div className="sub-text max-[600px]:mt-[3rem] max-[1750px]:mt-[4rem] mt-[4rem] flex bottom-links">
              <div className="max-[768px]:overflow-visible mr-[3.5rem]">
                <a
                  className="underlined_button max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] font-medium leading-[120%] translate-y-[0px] flex opacity-100 relative inline"
                  href="/work"
                >
                  <p>+Projects</p>
                </a>
              </div>
              <div className="max-[768px]:overflow-visible">
                <a
                  className="underlined_button max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] font-medium leading-[120%] translate-y-[0px] flex opacity-100 relative inline"
                  href="/contact"
                >
                  <p>Let&apos;s Talk</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PotentialCapabilities;
