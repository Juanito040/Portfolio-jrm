import { motion } from 'framer-motion';
import { Code2, Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../SocialIcons';
import { personalInfo } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import { t, tx } from '../../data/translations';
import styles from './Footer.module.scss';

const NAV_HREFS = ['#hero', '#about', '#projects', '#experience', '#contact'];

const SOCIAL = [
  { icon: <GithubIcon size={18} />,   href: personalInfo.github,   label: 'GitHub' },
  { icon: <LinkedinIcon size={18} />, href: personalInfo.linkedin, label: 'LinkedIn' },

  { icon: <Mail size={18} />,         href: `mailto:${personalInfo.email}`, label: 'Email' },
];

export default function Footer() {
  const { lang } = useLanguage();
  const navLabels = tx(t.nav.links, lang);
  const navLinks  = NAV_HREFS.map((href, i) => ({ href, label: navLabels[i] }));
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className="container">
          <div className={styles.grid}>

            {/* Marca */}
            <div className={styles.brand}>
              <a href="#hero" className={styles.logo}>
                <Code2 size={20} />
                <span>{personalInfo.name.split(' ')[0]}<span className={styles.dot}>.</span></span>
              </a>
              <p className={styles.tagline}>{tx(t.hero.tagline, lang)}</p>
              <div className={styles.socials}>
                {SOCIAL.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navegacion */}
            <nav aria-label={tx(t.footer.nav, lang)}>
              <h4 className={styles.colTitle}>{tx(t.footer.nav, lang)}</h4>
              <ul className={styles.navList}>
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className={styles.navLink}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Contacto rapido */}
            <div>
              <h4 className={styles.colTitle}>{tx(t.footer.contact, lang)}</h4>
              <ul className={styles.navList}>
                <li>
                  <a href={`mailto:${personalInfo.email}`} className={styles.navLink}>
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                    GitHub
                  </a>
                </li>
                <li>
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className={styles.navLink}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href={personalInfo.cv} download className={styles.navLink}>
                    {tx(t.footer.cv, lang)}
                  </a>
                </li>
              </ul>
            </div>

          </div>

          <div className={styles.bottom}>
            <p className={styles.copy}>
              &copy; {new Date().getFullYear()} {personalInfo.name}. {tx(t.footer.built, lang)} <Code2 size={13} /> en Colombia.
            </p>
            <motion.button
              className={styles.backTop}
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Volver arriba"
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>

        </div>
      </div>
    </footer>
  );
}
