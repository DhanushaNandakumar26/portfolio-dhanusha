
// components/Footer.tsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { fadeIn } from '../utils/animation';
import SocialLinks from './ui/SocialLinks';
import styles from '../styles/component/Footer.module.scss';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className="container">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.footerContent}
        >
          <div className={styles.footerTop}>
            <div className={styles.footerLogo}>
              <Link href="/">
                DH
              </Link>
              <p>Software Engineer</p>
            </div>
            
            <div className={styles.footerLinks}>
              <h4>Quick Links</h4>
              <nav>
                <Link href="#home">Home</Link>
                <Link href="#about">About</Link>
                <Link href="#projects">Projects</Link>
                <Link href="#skills">Skills</Link>
                <Link href="#education">Education</Link>
                <Link href="#contact">Contact</Link>
              </nav>
            </div>
            
            <div className={styles.footerSocial}>
              <h4>Connect</h4>
              <SocialLinks />
            </div>
          </div>
          
          <div className={styles.footerBottom}>
            <p>&copy; {currentYear} Dhanusha. All Rights Reserved.</p>
            <p>Built with Next.js, TypeScript, Framer Motion & SCSS</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
