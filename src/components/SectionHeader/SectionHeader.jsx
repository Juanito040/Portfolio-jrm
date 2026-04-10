import { motion } from 'framer-motion';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import styles from './SectionHeader.module.scss';

const variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const lineVariant = {
  hidden:  { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

const overlineVariant = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

const titleVariant = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
};

const descVariant = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' } },
};

export default function SectionHeader({ overline, title, description, align = 'center' }) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      className={`${styles.header} ${styles[align]}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <motion.div className={styles.overlineRow} variants={overlineVariant}>
        <motion.span className={styles.line} variants={lineVariant} />
        <span className={styles.overline}>{overline}</span>
        <motion.span className={styles.line} variants={lineVariant} />
      </motion.div>

      <motion.h2 className={styles.title} variants={titleVariant}>
        {title}
      </motion.h2>

      {description && (
        <motion.p className={styles.description} variants={descVariant}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
