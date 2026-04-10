import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/SocialIcons';
import { personalInfo } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import { t, tx } from '../../data/translations';
import styles from './Hero.module.scss';

function useTypewriter(words, speed = 80, pause = 1800) {
  const [display,  setDisplay]  = useState('');
  const [wordIdx,  setWordIdx]  = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setDisplay(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) {
          setDeleting(false);
          setWordIdx((w) => (w + 1) % words.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden:  { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function Hero() {
  const { lang } = useLanguage();
  const words = tx(t.hero.typewriter, lang);
  const typewriterText = useTypewriter(words);
  const initials = personalInfo.name.split(' ').map((n) => n[0]).join('');

  // Parallax de mouse en el avatar
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 18 });
  const rotateY = useTransform(springX, [-250, 250], [-10, 10]);
  const rotateX = useTransform(springY, [-250, 250], [8, -8]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section
      id="hero"
      className={styles.hero}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className={styles.particles} aria-hidden="true">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={styles.particle}
            animate={{ y: [0, -30, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.2, 1] }}
            transition={{ duration: 3 + i * 0.8, repeat: Infinity, delay: i * 0.5, ease: 'easeInOut' }}
            style={{ left: `${10 + i * 15}%`, top: `${20 + (i % 3) * 25}%` }}
          />
        ))}
      </div>

      <div className={`container ${styles.content}`}>
        <div className={styles.grid}>
          <motion.div className={styles.textCol} variants={containerVariants} initial="hidden" animate="visible">

            <motion.span className={styles.greeting} variants={itemVariants}>
              {tx(t.hero.greeting, lang)}
            </motion.span>

            <motion.h1 className={styles.name} variants={itemVariants}>
              {personalInfo.name}
            </motion.h1>

            <motion.div className={styles.typewriterRow} variants={itemVariants}>
              <span className={styles.typewriter}>{typewriterText}</span>
              <span className={styles.cursor} aria-hidden="true">|</span>
            </motion.div>

            <motion.p className={styles.bio} variants={itemVariants}>
              {tx(t.hero.tagline, lang)}
            </motion.p>

            <motion.div className={styles.actions} variants={itemVariants}>
              <a href="#projects" className="btn btn-primary">
                {tx(t.hero.cta, lang)} <ArrowRight size={16} />
              </a>
              <a href="#contact" className="btn btn-outline">
                {tx(t.hero.contact, lang)}
              </a>
            </motion.div>

            <motion.div className={styles.socials} variants={itemVariants}>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="GitHub">
                <GithubIcon size={20} />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                className={styles.socialLink} aria-label="LinkedIn">
                <LinkedinIcon size={20} />
              </a>
              <a href={`mailto:${personalInfo.email}`} className={styles.socialLink} aria-label="Email">
                <Mail size={20} />
              </a>
              <div className={styles.socialDivider} aria-hidden="true" />
              <span className={styles.location}><MapPin size={13} />{personalInfo.location}</span>
            </motion.div>
          </motion.div>

          <motion.div className={styles.avatarCol}
            initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}>
            <div className={styles.avatarWrapper}>
              <div className={styles.avatarRing} aria-hidden="true" />
              <div className={styles.avatarRing2} aria-hidden="true" />
              <div className={styles.avatar}>
                {personalInfo.avatar
                  ? <img src={personalInfo.avatar} alt={personalInfo.name} />
                  : <span className={styles.initials}>{initials}</span>}
              </div>
              <motion.div className={`${styles.badge} ${styles.badgeTop}`}
                animate={{ y: [0, -7, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}>
                {tx(t.hero.badgeLearning, lang)}
              </motion.div>
              <motion.div className={`${styles.badge} ${styles.badgeTopLeft}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.3, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}>
                HTML / CSS
              </motion.div>
              <motion.div className={`${styles.badge} ${styles.badgeRight}`}
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut', delay: 0.4 }}>
                Python
              </motion.div>
              <motion.div className={`${styles.badge} ${styles.badgeMid}`}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
                Node.js
              </motion.div>
              <motion.div className={`${styles.badge} ${styles.badgeBottom}`}
                animate={{ y: [0, 7, 0] }}
                transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}>
                SQL
              </motion.div>
              <motion.div className={`${styles.badge} ${styles.badgeBottomLeft}`}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 3.7, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}>
                Angular
              </motion.div>
              <motion.div className={`${styles.badge} ${styles.badgeLeft}`}
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3.8, repeat: Infinity, ease: 'easeInOut', delay: 1.3 }}>
                {tx(t.hero.badgeLang, lang)}
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.a href="#about" className={styles.scrollIndicator}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
          aria-label="Ir a la siguiente sección">
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={28} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  );
}
