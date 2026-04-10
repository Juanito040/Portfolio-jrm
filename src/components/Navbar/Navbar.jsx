import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2 } from 'lucide-react';
import { personalInfo } from '../../data/portfolio';
import { useLanguage } from '../../contexts/LanguageContext';
import { t, tx } from '../../data/translations';
import styles from './Navbar.module.scss';

const NAV_HREFS = ['#hero', '#about', '#projects', '#experience', '#contact'];

export default function Navbar() {
  const { lang } = useLanguage();
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  const navLabels = tx(t.nav.links, lang);

  const navLinks = NAV_HREFS.map((href, i) => ({ href, label: navLabels[i] }));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (href) => { setActiveLink(href); setMenuOpen(false); };

  return (
    <motion.header
      className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} onClick={() => handleLinkClick('#hero')}>
          <Code2 size={22} />
          <span>{personalInfo.name.split(' ')[0]}<span className={styles.dot}>.</span></span>
        </a>

        <nav className={styles.links} aria-label="Navegacion principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`${styles.link} ${activeLink === link.href ? styles.active : ''}`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className={styles.burger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <nav aria-label="Navegacion mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  className={`${styles.mobileLink} ${activeLink === link.href ? styles.active : ''}`}
                  onClick={() => handleLinkClick(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
