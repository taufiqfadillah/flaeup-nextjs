import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AnimatedImage = ({
  src,
  alt,
  className,
  width,
  height,
  style,
  priority,
}) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  // Variants for Image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };

  // Start animation when component enters viewport
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={imageVariants}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority || false}
        style={style}
      />
    </motion.div>
  );
};

export default AnimatedImage;
