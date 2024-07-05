import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTextParagraph = ({ text, className }) => {
  const lines = text.split("\n").filter((line) => line.trim() !== ""); // Split text into lines

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.5, // Trigger when 50% of the component is in view
  });

  // Variants for Container
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.05 }, // Adjust as needed for animation speed
    },
  };

  // Variants for each line
  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  // Start animation when component enters viewport
  React.useEffect(() => {
    const startAnimation = async () => {
      await controls.start("visible");
    };

    const resetAnimation = async () => {
      await controls.start("hidden");
    };

    if (inView) {
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {lines.map((line, index) => (
        <motion.p key={index} variants={child} className="leading-normal">
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
};

export default AnimatedTextParagraph;
