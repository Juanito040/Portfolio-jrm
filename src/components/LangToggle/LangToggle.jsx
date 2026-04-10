import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import styles from './LangToggle.module.scss';

export default function LangToggle() {
  const { lang, toggleLang } = useLanguage();
  const next = lang === 'es' ? 'EN' : 'ES';
  const current = lang === 'es' ? 'ES' : 'EN';

  return (
    <motion.button
      className={styles.toggle}
      onClick={toggleLang}
      aria-label={`Cambiar idioma a ${next}`}
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.4, ease: 'easeOut' }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className={styles.globe}>
        <GlobeIcon />
      </span>

      <div className={styles.labels}>
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            className={styles.current}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
          >
            {current}
          </motion.span>
        </AnimatePresence>
        <span className={styles.separator}>/</span>
        <span className={styles.next}>{next}</span>
      </div>
    </motion.button>
  );
}

function GlobeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
      aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}
