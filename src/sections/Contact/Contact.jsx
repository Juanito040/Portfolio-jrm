import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Check, Copy } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../../components/SocialIcons';
import { personalInfo } from '../../data/portfolio';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import SectionHeader from '../../components/SectionHeader/SectionHeader';
import { staggerContainer, springFadeUp } from '../../utils/animations';
import { useLanguage } from '../../contexts/LanguageContext';
import { t, tx } from '../../data/translations';
import styles from './Contact.module.scss';

const CONTACTS = [
  {
    type:   'link',
    icon:   <GithubIcon size={28} />,
    label:  'GitHub',
    handle: '@Juanito040',
    href:   personalInfo.github,
    color:  '#ffffff',
    bg:     'rgba(255,255,255,0.06)',
  },
  {
    type:   'link',
    icon:   <LinkedinIcon size={28} />,
    label:  'LinkedIn',
    handle: 'juan-ramirez-633052309',
    href:   personalInfo.linkedin,
    color:  '#0A66C2',
    bg:     'rgba(10,102,194,0.1)',
  },
  {
    type:   'copy',
    icon:   <Mail size={28} />,
    label:  'Email',
    handle: personalInfo.email,
    copy:   personalInfo.email,
    color:  '#0F9B8E',
    bg:     'rgba(15,155,142,0.1)',
  },
  {
    type:   'copy',
    icon:   <Phone size={28} />,
    label:  'Teléfono',
    handle: `+57 ${personalInfo.phone}`,
    copy:   personalInfo.phone,
    color:  '#25D366',
    bg:     'rgba(37,211,102,0.1)',
  },
];

function ContactCard({ c, lang }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(c.copy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const shared = {
    className: styles.card,
    style: { '--card-color': c.color, '--card-bg': c.bg },
    variants: springFadeUp,
    whileHover: { y: -6 },
    transition: { type: 'spring', stiffness: 280, damping: 20 },
  };

  const inner = (
    <>
      <span className={styles.iconWrap}>{c.icon}</span>
      <span className={styles.label}>{c.label}</span>
      <span className={styles.handle}>{c.handle}</span>
      {c.type === 'copy' && (
        <span className={styles.copyHint}>
          <AnimatePresence mode="wait">
            {copied ? (
              <motion.span key="check"
                initial={{ opacity: 0, scale: 0.7 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }}
                className={styles.copied}
              >
                <Check size={12} /> {tx(t.contact.copied, lang)}
              </motion.span>
            ) : (
              <motion.span key="copy"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className={styles.copyLabel}
              >
                <Copy size={12} /> {tx(t.contact.copy, lang)}
              </motion.span>
            )}
          </AnimatePresence>
        </span>
      )}
    </>
  );

  if (c.type === 'copy') {
    return (
      <motion.button {...shared} onClick={handleCopy} aria-label={`Copiar ${c.label}`}>
        {inner}
      </motion.button>
    );
  }

  return (
    <motion.a {...shared} href={c.href} target="_blank" rel="noopener noreferrer" aria-label={c.label}>
      {inner}
    </motion.a>
  );
}

export default function Contact() {
  const { lang } = useLanguage();
  const { ref, isInView } = useScrollReveal();

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">

        <SectionHeader
          overline={tx(t.contact.overline, lang)}
          title={tx(t.contact.title, lang)}
          description={tx(t.contact.description, lang)}
        />

        <motion.div
          ref={ref}
          className={styles.grid}
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {CONTACTS.map((c) => <ContactCard key={c.label} c={c} lang={lang} />)}
        </motion.div>

      </div>
    </section>
  );
}
