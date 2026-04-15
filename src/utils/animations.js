// Variantes reutilizables de Framer Motion

export const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }),
};

export const fadeIn = {
  hidden:  { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
};

export const springFadeUp = {
  hidden:  { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 18,
      delay,
    },
  }),
};

export const popIn = {
  hidden:  { opacity: 0, scale: 0.5 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 18,
      delay,
    },
  }),
};

export const staggerContainer = (stagger = 0.1, delayChildren = 0) => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

export const slideLeft = {
  hidden:  { opacity: 0, x: -36 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, delay },
  }),
};

export const slideRight = {
  hidden:  { opacity: 0, x: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { type: 'spring', stiffness: 80, damping: 18, delay },
  }),
};

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }),
};
