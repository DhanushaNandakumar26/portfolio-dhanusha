'use client';

import { staggerContainer } from '../utils/animation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Home() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="initial"
      animate="animate"
    >

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </motion.div>
  );
}
