import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { GithubIcon } from '../../components/SocialIcons';
import TechLogoBackground from '../../components/TechLogoBackground/TechLogoBackground';
import { projects } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { staggerContainer } from '../../utils/animations';
import { useLanguage } from '../../contexts/LanguageContext';
import { t, tx } from '../../data/translations';
import styles from './Projects.module.scss';

const cardVariants = {
  hidden:  { opacity: 0, y: 32, scale: 0.95 },
  visible: { opacity: 1, y: 0,  scale: 1, transition: { type: 'spring', stiffness: 75, damping: 16 } },
};

const freelanceIds  = [5, 6, 2];
const universityIds = [3, 4];

function ProjectGroup({ titleKey, ids, lang, gridClass }) {
  const { ref, isInView } = useScrollReveal();
  const filtered = projects.filter(p => ids.includes(p.id));

  return (
    <div className={styles.group}>
      <h3 className={styles.groupTitle}>{tx(t.projects[titleKey], lang)}</h3>
      <motion.div
        ref={ref}
        className={`${styles.grid}${gridClass ? ` ${gridClass}` : ''}`}
        variants={staggerContainer(0.11)}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {filtered.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </div>
  );
}

export default function Projects() {
  const { lang } = useLanguage();

  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <div className="container">

        <SectionHeader
          overline={tx(t.projects.overline, lang)}
          title={tx(t.projects.title, lang)}
          description={tx(t.projects.description, lang)}
        />

        <ProjectGroup titleKey="freelanceTitle"  ids={freelanceIds}  lang={lang} gridClass={styles.gridThree} />
        <ProjectGroup titleKey="universityTitle" ids={universityIds} lang={lang} />

      </div>
    </section>
  );
}

function FeaturedBadge() {
  const { lang } = useLanguage();
  return (
    <span className={styles.featured} title={tx(t.projects.featured, lang)}>
      <Star size={12} fill="currentColor" /> {tx(t.projects.featured, lang)}
    </span>
  );
}

function ProjectCard({ project, index }) {
  const { lang } = useLanguage();
  return (
    <motion.article
      layout
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.card}
      style={{ '--accent': project.color }}
      whileHover={{ y: -8 }}
      transition={{ type: 'spring', stiffness: 280, damping: 20 }}
    >
      <div className={styles.cardAccent} />
      <TechLogoBackground techKey={project.mainTech} color={project.color} />

      <div className={styles.cardHeader}>
        <div className={styles.cardMeta}>
          <span className="badge">{project.category}</span>
          {project.featured && (
            <FeaturedBadge />
          )}
        </div>
        <div className={styles.cardLinks}>
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer"
               className={styles.cardLink} aria-label="Ver en GitHub">
              <GithubIcon size={18} />
            </a>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer"
               className={styles.cardLink} aria-label="Ver demo">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>

      <h3 className={styles.cardTitle}>{tx(project.title, lang)}</h3>
      <p className={styles.cardDesc}>{tx(project.description, lang)}</p>

      <div className={styles.techList}>
        {project.tech.map((t) => (
          <span key={t} className={`badge badge-secondary ${styles.tech}`}>{t}</span>
        ))}
      </div>
    </motion.article>
  );
}
