
// components/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animation';
import styles from '../styles/component/Navbar.module.scss';

const navLinks = [
  { name: 'Home', path: '#home' },
  { name: 'About', path: '#about' },
  { name: 'Projects', path: '#projects' },
  { name: 'Skills', path: '#skills' },
  { name: 'Education', path: '#education' },
  { name: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header 
      className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          DN
        </Link>

        <nav className={styles.nav}>
          <div 
            className={`${styles.menuBtn} ${menuOpen ? styles.open : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <ul className={`${styles.navLinks} ${menuOpen ? styles.active : ''}`}>
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href={link.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
            <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
              <a 
                href="/resume.pdf" 
                className="btn btn-primary" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Resume
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Navbar;
