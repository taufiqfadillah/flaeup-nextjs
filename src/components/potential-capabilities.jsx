import React from "react";
import { motion } from "framer-motion";
import useStickySection from "@/hooks/useStickySection.jsx";

const PotentialCapabilities = () => {
  useStickySection();

  return (
    <>
      <section
        id="potential-wrapper"
        className="[background:#82CAAA] pb-[7rem] panel"
      >
        <div
          className="max-[600px]:h-auto max-[600px]:py-[5rem] py-[9rem] h-screen flex justify-center items-center"
          style={{
            margin: "0 auto",
            maxWidth: "1430px",
          }}
        >
          <motion.div
            className="potential-wrapper flex flex-col justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="max-[600px]:hidden flex top-tab-menu">
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.1 }}
                  className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                >
                  <a href="#">design</a>
                </motion.p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                >
                  <a href="/capabilities/branding">branding</a>
                </motion.p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                >
                  <a href="#">technology</a>
                </motion.p>
              </div>
              <div className="max-[768px]:overflow-visible overflow-hidden">
                <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.4 }}
                  className="max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] text-normal font-medium leading-normal tracking-[-0.02rem] uppercase mx-[2.5rem] translate-y-[50px] opacity-0 relative"
                >
                  <a href="#">strategy</a>
                </motion.p>
              </div>
            </div>
            <motion.div
              className="max-[768px]:leading-normal max-[768px]:overflow-visible overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <h5 className="capabilties_unlock_title__5hS1N max-[600px]:mt-[0rem] max-[600px]:[&>br]:hidden max-[600px]:max-w-[320px] max-[600px]:leading-[120%] max-[600px]:text-[2.2rem] max-[600px]:font-normal max-[768px]:text-[3rem] max-[1024px]:translate-y-[0%] max-[1750px]:text-[4rem] text-[4vw] text-[#080808] text-normal font-normal leading-[120%] tracking-[-0.08rem] text-center mt-[3rem] relative pb-[2rem]">
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    Are you prepared to ignite the
                  </motion.span>
                </span>
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    full potential of your project and catapult
                  </motion.span>
                </span>
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    it to dazzling new heights?
                  </motion.span>
                </span>
              </h5>
            </motion.div>
            <div className="max-[768px]:overflow-visible overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="max-[600px]:mt-[2rem] max-[600px]:text-[0.875rem] max-[1024px]:translate-y-[0%] max-[1750px]:text-[1.063rem] text-[1vw] text-[#080808] font-medium leading-normal tracking-[-0.02rem] max-[1750px]:mt-[1.5rem] mt-[2rem] text-center relative"
              >
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    LOOK NO FURTHER, AS WE ARE HERE TO SUPPORT YOU
                  </motion.span>
                </span>
                <span className="overflow-hidden">
                  <motion.span
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="inner max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] opacity-0 flex translate-y-[50px] justify-center items-center"
                  >
                    EVERY STEP OF THE WAY
                  </motion.span>
                </span>
              </motion.p>
            </div>
            <div className="sub-text max-[600px]:mt-[3rem] max-[1750px]:mt-[4rem] mt-[4rem] flex bottom-links">
              <div className="max-[768px]:overflow-visible mr-[3.5rem]">
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="underlined_button max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] font-medium leading-[120%] translate-y-[50px] flex opacity-0 relative inline"
                  href="/work"
                >
                  <p>+Projects</p>
                </motion.a>
              </div>
              <div className="max-[768px]:overflow-visible">
                <motion.a
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.3 }}
                  className="underlined_button max-[1024px]:opacity-100 max-[1024px]:translate-y-[0%] text-[#080808] max-[1750px]:text-[1.063rem] text-[1vw] font-medium leading-[120%] translate-y-[50px] flex opacity-0 relative inline"
                  href="/contact"
                >
                  <p>Let&apos;s Talk</p>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default PotentialCapabilities;
