import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code2, Calendar } from 'lucide-react';
import { experience } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { popIn } from '../../utils/animations';
import { useLanguage } from '../../contexts/LanguageContext';
import { t, tx } from '../../data/translations';
import styles from './Experience.module.scss';

const TYPE_ICONS = {
  'Trabajo':   <Briefcase size={16} />,
  'Pasantía':  <Code2 size={16} />,
  'Freelance': <Code2 size={16} />,
  'Educación': <GraduationCap size={16} />,
};

const TYPE_COLORS = {
  'Trabajo':            '#0F9B8E',
  'Pasantía':           '#0D7A6F',
  'Freelance':          '#14B8A6',
  'Educación':          '#2DD4BF',
  'Proyecto Académico': '#5EEAD4',
};

export default function Experience() {
  const { lang } = useLanguage();
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <div className="container">

        <SectionHeader
          overline={tx(t.experience.overline, lang)}
          title={tx(t.experience.title, lang)}
          description={tx(t.experience.description, lang)}
        />

        <div ref={ref} className={styles.timeline}>
          {/* Línea central que crece al hacer scroll */}
          <motion.div
            className={styles.timelineLine}
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.4, ease: 'easeOut', delay: 0.1 }}
          />
          {experience.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function TimelineItem({ item, index, isInView }) {
  const { lang } = useLanguage();
  const color = TYPE_COLORS[item.type] || '#0F9B8E';
  const icon  = TYPE_ICONS[item.type]  || <Briefcase size={16} />;
  const typeLabel = tx(t.experience.types[item.type] ?? { es: item.type, en: item.type }, lang);
  const currentLabel = tx(t.experience.current, lang);
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`${styles.item} ${isLeft ? styles.left : styles.right}`}
      initial={{ opacity: 0, x: isLeft ? -40 : 40, y: 16 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ type: 'spring', stiffness: 70, damping: 18, delay: index * 0.1 }}
    >
      <motion.div
        className={styles.dot}
        style={{ '--dot-color': color }}
        variants={popIn}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        custom={index * 0.1 + 0.2}
      >
        <span className={styles.dotIcon} style={{ color }}>{icon}</span>
      </motion.div>

      <motion.div
        className={styles.card}
        whileHover={{ y: -5, boxShadow: '0 16px 40px rgba(15,155,142,0.12)' }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      >
        <div className={styles.cardTop}>
          <span className={styles.type} style={{ color, borderColor: `${color}33`, background: `${color}12` }}>
            {typeLabel}
          </span>
          {item.current && (
            <span className={styles.current}>
              <span className={styles.pulse} />
              {currentLabel}
            </span>
          )}
        </div>

        <h3 className={styles.role}>{tx(item.role, lang)}</h3>

        <div className={styles.company}>
          <span>{item.company}</span>
          <span className={styles.period}>
            <Calendar size={12} />
            {item.period}
          </span>
        </div>

        <p className={styles.desc}>{tx(item.description, lang)}</p>

        <div className={styles.techList}>
          {item.tech.map((t) => (
            <span key={t} className="badge">{t}</span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
