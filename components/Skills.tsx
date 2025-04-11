// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer } from '../utils/animation';
import { skills } from '../utils/constants';
import styles from '../styles/component/Skills.module.scss';

const Skills = () => {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.sectionTitle}
        >
          Skills & Expertise
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.skillsContainer}
        >
          {/* Technical Skills */}
          <div className={styles.skillCategory}>
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Technical Skills
            </motion.h3>
            <div className={styles.skillGrid}>
              {skills.technical.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={styles.skillCard}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className={styles.skillCategory}>
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Soft Skills
            </motion.h3>
            <div className={styles.skillGrid}>
              {skills.soft.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={styles.skillCard}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools & Platforms */}
          <div className={styles.skillCategory}>
            <motion.h3
              variants={fadeInUp}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Tools & Platforms
            </motion.h3>
            <div className={styles.skillGrid}>
              {skills.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className={styles.skillCard}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span>{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;