
// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, staggerContainer } from '../utils/animation';
import { personalInfo } from '../utils/constants';
import SocialLinks from './ui/SocialLinks';
import styles from '../styles/component/Hero.module.scss';

const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={`container ${styles.container}`}>
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className={styles.content}
        >
          <motion.h1 variants={fadeInUp} className={styles.greeting}>
            Hi, I'm <span>{personalInfo.name}</span>
          </motion.h1>
          <motion.h2 variants={fadeInUp} className={styles.title}>
            {personalInfo.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className={styles.bio}>
            {personalInfo.bio}
          </motion.p>
          <motion.div variants={fadeInUp} className={styles.btns}>
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#projects" className={styles.projectsLink}>
              View My Work
            </a>
          </motion.div>
          <motion.div variants={fadeInUp} className={styles.social}>
            <SocialLinks />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className={styles.imageContainer}
        >
          <div className={styles.imageWrapper}>
            <Image
              src="/dhanusha.jpg"
              alt={personalInfo.name}
              fill
              style={{ objectFit: 'cover' }}
              priority
              className={styles.profileImage}
            />
          </div>
        </motion.div>
      </div>
      <div className={styles.scrollDown}>
        <motion.div
          animate={{
            y: [0, 12, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
