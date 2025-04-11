// components/Projects.tsx
'use client';

import { motion } from 'framer-motion';
import { fadeInUp, scaleUp, staggerContainer } from '../utils/animation';
import { projects } from '../utils/constants';
import ProjectCard from './ui/ProjectCard';
import styles from '../styles/component/Projects.module.scss';

// const Projects = () => {
//   const [showAll, setShowAll] = useState(false);
//   const displayedProjects = showAll ? projects : projects.filter(project => project.featured);

//   return (
//     <section id="projects" className={styles.projects}>
//       <div className="container">
//         <motion.h2
//           variants={fadeInUp}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className={styles.sectionTitle}
//         >
//           Projects
//         </motion.h2>
        
//         <motion.div
//           variants={staggerContainer}
//           initial="initial"
//           whileInView="animate"
//           viewport={{ once: true }}
//           className={styles.projectsGrid}
//         >
//           {displayedProjects.map((project) => (
//             <ProjectCard key={project.id} project={project} />
//           ))}
//         </motion.div>
        
//         {projects.length > 3 && (
//           <motion.div
//             variants={fadeInUp}
//             initial="initial"
//             whileInView="animate"
//             viewport={{ once: true }}
//             className={styles.showMoreContainer}
//           >
//             <button
//               className="btn btn-primary"
//               onClick={() => setShowAll(!showAll)}
//             >
//               {showAll ? 'Show Less' : 'Show More'}
//             </button>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { useState, useEffect } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [isClient, setIsClient] = useState(false); // To check if the component is on the client

//   const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Only on the client side
  }, []);

  if (!isClient) return null; // Return null until the component is mounted on the client


  const displayedProjects = showAll ? projects : projects.filter(project => project.featured);

  return (
    <section id="projects" className={styles.projects}>
      <div className="container">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.sectionTitle}
        >
          Projects
        </motion.h2>
        
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={styles.projectsGrid}
        >
          {displayedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
        
        {projects.length > 3 && (
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className={styles.showMoreContainer}
          >
            <button
              className="btn btn-primary"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'Show More'}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;
