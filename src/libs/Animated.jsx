import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { v4 as uuidv4 } from 'uuid';

// Common variants
const commonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const commonChildVariants = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    y: 20,
    transition: {
      type: 'spring',
      damping: 12,
      stiffness: 100,
    },
  },
};

// Component: AnimatedTextWord
export const AnimatedTextWord = ({ text, className }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.8 });
  const words = text.split(' ');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  const wordContainerVariants = {
    ...commonContainerVariants,
    visible: {
      ...commonContainerVariants.visible,
      transition: { staggerChildren: 0.3, delayChildren: 0.1 },
    },
  };

  const wordChildVariants = {
    ...commonChildVariants,
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div ref={ref} style={{ overflow: 'hidden', display: 'flex', fontSize: 'inherit' }} className={className} variants={wordContainerVariants} initial="hidden" animate={controls}>
      {words.map((word) => (
        <motion.span key={uuidv4()} style={{ marginRight: '5px' }} variants={wordChildVariants}>
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Component: AnimatedTextCharacter
export const AnimatedTextCharacter = ({ text, className }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const letters = Array.from(text);

  const charContainerVariants = {
    ...commonContainerVariants,
    visible: (i = 1) => ({
      ...commonContainerVariants.visible,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const charChildVariants = {
    ...commonChildVariants,
    hidden: { opacity: 0, x: -20, y: 10 },
    visible: { opacity: 1, x: 0, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      style={{
        overflow: 'hidden',
        display: 'inline-flex',
        fontSize: 'inherit',
      }}
      className={className}
      variants={charContainerVariants}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
    >
      {letters.map((letter) => (
        <motion.span key={uuidv4()} variants={charChildVariants}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// Component: AnimatedTextParagraph
export const AnimatedTextParagraph = ({ text, className }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const lines = text.split('\n').filter((line) => line.trim() !== '');

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.div ref={ref} className={className} variants={commonContainerVariants} initial="hidden" animate={controls}>
      {lines.map((line) => (
        <motion.p key={uuidv4()} variants={commonChildVariants} className="leading-normal">
          {line}
        </motion.p>
      ))}
    </motion.div>
  );
};

// Component: AnimatedImage
export const AnimatedImage = ({ src, alt, className, width, height, style }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        ease: 'easeInOut',
        duration: 1,
      },
    },
  };

  return (
    <motion.div ref={ref} className={className} initial="hidden" animate={controls} variants={imageVariants}>
      <Image rel="preload" src={src} alt={alt} width={width} height={height} priority style={style} />
    </motion.div>
  );
};
