import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedTextWord = ({ text, className }) => {
  const words = text.split(" ");
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false, // Trigger animation every time it comes into view
    threshold: 0.8, // Trigger when 80% of the component is in view
  });

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const startAnimation = async () => {
    await controls.start("visible");
  };

  const resetAnimation = async () => {
    await controls.start("hidden");
  };

  // Start animation when component enters viewport
  React.useEffect(() => {
    if (inView) {
      startAnimation();
    } else {
      resetAnimation();
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      style={{ overflow: "hidden", display: "flex", fontSize: "inherit" }}
      className={className}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedTextWord;
