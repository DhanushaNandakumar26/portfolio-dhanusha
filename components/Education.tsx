'use client';

import { motion } from 'framer-motion';
import { fadeInUp, slideInLeft } from '../utils/animation';
import { education } from '../utils/constants';
import styles from '../styles/component/Education.module.scss';

const Education = () => {
  return (
    <section id="education" className={styles.education}>
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.sectionTitle}
        >
          Education
        </motion.h2>
        
        <div className={styles.educationTimeline}>
          {education.map((item) => (
            <motion.div
              key={item.id}
              variants={slideInLeft}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className={styles.educationItem}
            >
              <div className={styles.timelineDot}></div>
              <div className={styles.timelineContent}>
                <h3 className={styles.degree}>{item.degree}</h3>
                <p className={styles.institution}>{item.institution}</p>
                <p className={styles.location}>{item.location}</p>
                <p className={styles.duration}>{item.duration}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
