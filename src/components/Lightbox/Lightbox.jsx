import { useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Lightbox.module.scss';

/**
 * Modal para ver la(s) portada(s) ampliadas.
 * `data` = { images: string[], index, alt, title } o null (cerrado).
 * Navega con flechas (pantalla/teclado); cierra con ✕, clic afuera o Escape.
 */
export default function Lightbox({ data, onClose, closeLabel, prevLabel, nextLabel }) {
  const images = data?.images ?? [];
  const isGallery = images.length > 1;
  const [index, setIndex] = useState(0);

  // Al abrir, arranca en la imagen seleccionada
  useEffect(() => {
    if (data) setIndex(data.index ?? 0);
  }, [data]);

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + images.length) % images.length),
    [images.length],
  );

  useEffect(() => {
    if (!data) return undefined;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && isGallery) go(1);
      if (e.key === 'ArrowLeft' && isGallery) go(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [data, onClose, go, isGallery]);

  return (
    <AnimatePresence>
      {data && (
        <motion.div
          className={styles.backdrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={data.title || data.alt}
        >
          <motion.button
            type="button"
            className={styles.close}
            onClick={onClose}
            aria-label={closeLabel}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            <X size={22} />
          </motion.button>

          {isGallery && (
            <button
              type="button"
              className={`${styles.nav} ${styles.navPrev}`}
              onClick={(e) => { e.stopPropagation(); go(-1); }}
              aria-label={prevLabel}
            >
              <ChevronLeft size={26} />
            </button>
          )}

          <motion.figure
            className={styles.figure}
            initial={{ opacity: 0, scale: 0.92, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 8 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={isGallery ? `${data.alt} (${index + 1})` : data.alt}
                className={styles.image}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            </AnimatePresence>
            {data.title && (
              <figcaption className={styles.caption}>
                {data.title}
                {isGallery && <span className={styles.counter}> · {index + 1}/{images.length}</span>}
              </figcaption>
            )}
          </motion.figure>

          {isGallery && (
            <button
              type="button"
              className={`${styles.nav} ${styles.navNext}`}
              onClick={(e) => { e.stopPropagation(); go(1); }}
              aria-label={nextLabel}
            >
              <ChevronRight size={26} />
            </button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
