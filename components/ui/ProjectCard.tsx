// components/ui/ProjectCard.tsx
'use client';

import { motion } from 'framer-motion';
import { scaleUp } from '../../utils/animation';
import styles from '../../styles/component/ProjectCard.module.scss';
import { FiCode, FiCpu } from 'react-icons/fi';

interface ProjectProps {
  project: {
    id: number;
    title: string;
    description: string;
    technologies: string[];
    featured?: boolean;
  };
}

const ProjectCard = ({ project }: ProjectProps) => {
  return (
    <motion.div
      variants={scaleUp}
      whileHover="hover"
      className={styles.projectCard}
    >
      <div className={styles.content}>
        <div className={styles.projectHeader}>
          <FiCode className={styles.projectIcon} />
          <h3>{project.title}</h3>
        </div>
        <p>{project.description}</p>
        <div className={styles.technologies}>
          {project.technologies.map((tech, index) => (
            <span key={index} className={styles.technology}>
              {tech}
            </span>
          ))}
        </div>
        <div className={styles.projectType}>
          <FiCpu size={14} />
          <span>{project.id <= 5 ? 'Professional Project' : (project.id === 8 ? 'Freelance Work' : 'Academic Project')}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;