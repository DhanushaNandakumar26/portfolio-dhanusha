
// components/About.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, slideInLeft, slideInRight } from '../utils/animation';
import { personalInfo, experiences } from '../utils/constants';
import styles from '../styles/component/About.module.scss';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <motion.h2 
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.sectionTitle}
        >
          About Me
        </motion.h2>
        
        <div className={styles.content}>
          <motion.div 
            variants={slideInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={styles.text}
          >
            <p>{personalInfo.about}</p>
            <p>Over the past 2.8 years, I've had the opportunity to work on various projects that have helped me grow professionally and technically. My focus has been on creating intuitive, responsive, and performance-optimized web applications.</p>
          </motion.div>
          
          <motion.div 
            variants={slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={styles.imageContainer}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="./dhanusha2.jpg"
                alt={personalInfo.name}
                fill
                style={{ objectFit: 'cover' }}
                className={styles.profileImage}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.experience}
        >
          <h3>Work Experience</h3>
          <div className={styles.timeline}>
            {experiences.map((exp) => (
              <motion.div 
                key={exp.id}
                className={styles.timelineItem}
                whileHover={{ x: 10 }}
              >
                <div className={styles.timelineContent}>
                  <h4>{exp.position}</h4>
                  <p className={styles.company}>{exp.company} | {exp.location}</p>
                  <p className={styles.duration}>{exp.duration}</p>
                  <ul className={styles.responsibilities}>
                    {exp.responsibilities.map((resp, index) => (
                      <li key={index}>{resp}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
