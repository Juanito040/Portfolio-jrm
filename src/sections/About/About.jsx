import { useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { MapPin, GraduationCap } from 'lucide-react';
import { personalInfo, skills } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { fadeUp, staggerContainer, springFadeUp, popIn } from '../../utils/animations';
import { useLanguage } from '../../contexts/LanguageContext';
import { t, tx } from '../../data/translations';
import styles from './About.module.scss';

const CATEGORIES = ['Frontend', 'Backend', 'DevOps'];

// Componente que anima un número del 0 al valor destino
function AnimatedNumber({ to, suffix = '', isInView }) {
  const ref = useRef(null);
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (isInView) motionVal.set(to);
  }, [isInView, to, motionVal]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = Math.round(v) + suffix;
    });
  }, [spring, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function About() {
  const { lang } = useLanguage();
  const { ref: textRef,   isInView: textInView }   = useScrollReveal();
  const { ref: factsRef,  isInView: factsInView }  = useScrollReveal();
  const { ref: skillsRef, isInView: skillsInView } = useScrollReveal();

  const facts = [
    {
      icon: <GraduationCap size={18} />,
      label: tx(t.about.facts.formation, lang),
      value: <AnimatedNumber to={4} suffix="+" isInView={factsInView} />,
    },
    {
      icon: <MapPin size={18} />,
      label: tx(t.about.facts.location, lang),
      value: personalInfo.location,
    },
  ];

  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>

          {/* Columna izquierda */}
          <div>
            <SectionHeader
              overline={tx(t.about.overline, lang)}
              title={tx(t.about.title, lang)}
              align="left"
            />

            <motion.div
              ref={textRef}
              variants={staggerContainer(0.12)}
              initial="hidden"
              animate={textInView ? 'visible' : 'hidden'}
            >
              <motion.p className={styles.bio} variants={fadeUp}>
                {tx(t.about.bio1, lang)}
              </motion.p>
              <motion.p className={styles.bio} variants={fadeUp}>
                {tx(t.about.bio2, lang)}
              </motion.p>

              <motion.div variants={fadeUp}>
                <a href="#contact" className="btn btn-primary">{tx(t.about.cta, lang)}</a>
              </motion.div>
            </motion.div>

            {/* Facts */}
            <motion.div
              ref={factsRef}
              className={styles.facts}
              variants={staggerContainer(0.1, 0.1)}
              initial="hidden"
              animate={factsInView ? 'visible' : 'hidden'}
            >
              {facts.map((fact) => (
                <motion.div key={fact.label} className={styles.fact} variants={popIn}>
                  <span className={styles.factIcon}>{fact.icon}</span>
                  <div>
                    <span className={styles.factValue}>{fact.value}</span>
                    <span className={styles.factLabel}>{fact.label}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Columna derecha: skills */}
          <motion.div
            ref={skillsRef}
            className={styles.skillsCol}
            variants={staggerContainer(0.15)}
            initial="hidden"
            animate={skillsInView ? 'visible' : 'hidden'}
          >
            {CATEGORIES.map((cat) => (
              <motion.div key={cat} className={styles.skillGroup} variants={springFadeUp}>
                <h3 className={styles.skillCat}>{cat}</h3>
                <div className={styles.skillList}>
                  {skills
                    .filter((s) => s.category === cat)
                    .map((skill, i) => (
                      <div key={skill.name} className={styles.skill}>
                        <div className={styles.skillHeader}>
                          <span className={styles.skillName}>{skill.name}</span>
                          <span className={styles.skillLevel}>{skill.level}%</span>
                        </div>
                        <div className={styles.skillBar}>
                          <motion.div
                            className={styles.skillFill}
                            initial={{ width: 0 }}
                            animate={skillsInView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ duration: 0.7, delay: 0.15 + i * 0.06, ease: 'easeOut' }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
