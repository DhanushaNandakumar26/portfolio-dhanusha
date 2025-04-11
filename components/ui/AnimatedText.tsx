
// components/ui/AnimatedText.tsx
'use client';

import { motion } from 'framer-motion';
import styles from '../../styles/components/AnimatedText.module.scss';

interface AnimatedTextProps {
  text: string;
  className?: string;
  once?: boolean;
}

const AnimatedText = ({ text, className, once = true }: AnimatedTextProps) => {
  // Split text into words
  const words = text.split(' ');
  
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
  };
  
  const child = {
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
  
  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={`${styles.animatedText} ${className || ''}`}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={child}
          className={styles.word}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.div>
  );
};

export default AnimatedText;
