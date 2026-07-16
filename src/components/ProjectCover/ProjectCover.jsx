import { useState, useEffect, useCallback } from 'react';
import { ZoomIn, ImageOff, ChevronLeft, ChevronRight } from 'lucide-react';
import { ICON_MAP } from '../TechLogoBackground/TechLogoBackground';
import styles from './ProjectCover.module.scss';

/**
 * Marco tipo ventana de navegador para la(s) portada(s) de un proyecto.
 * - `images` puede ser un string (una imagen) o un array (carrusel).
 * - Si una imagen carga bien, clic → onOpen(index) para abrir el lightbox.
 * - Si no hay imágenes o falla la carga, muestra un placeholder con el
 *   logo de la tecnología del proyecto sobre el color de acento.
 */
export default function ProjectCover({
  images,
  alt,
  techKey,
  color,
  onOpen,
  viewLabel,
  prevLabel,
  nextLabel,
}) {
  const list = Array.isArray(images) ? images : images ? [images] : [];
  const isCarousel = list.length > 1;
  const icon = ICON_MAP[techKey];

  const [index, setIndex]   = useState(0);
  const [loaded, setLoaded] = useState({});
  const [failed, setFailed] = useState({});
  const [paused, setPaused] = useState(false);

  const currentShowable = list[index] && loaded[index] && !failed[index];

  const go = useCallback(
    (dir) => setIndex((i) => (i + dir + list.length) % list.length),
    [list.length],
  );

  // Auto-avance del carrusel (pausa al pasar el cursor)
  useEffect(() => {
    if (!isCarousel || paused) return undefined;
    const id = setInterval(() => setIndex((i) => (i + 1) % list.length), 4500);
    return () => clearInterval(id);
  }, [isCarousel, paused, list.length]);

  return (
    <div className={styles.frame} style={{ '--accent': color }}>
      <div className={styles.bar} aria-hidden="true">
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
      </div>

      <div
        className={styles.viewport}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Slides apilados (crossfade por CSS) */}
        {list.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={list.length > 1 ? `${alt} (${i + 1})` : alt}
            className={styles.img}
            loading="lazy"
            data-active={i === index || undefined}
            data-loaded={loaded[i] || undefined}
            onLoad={() => setLoaded((s) => ({ ...s, [i]: true }))}
            onError={() => setFailed((s) => ({ ...s, [i]: true }))}
          />
        ))}

        {/* Placeholder mientras la imagen activa no está lista */}
        {!currentShowable && (
          <span className={styles.placeholder} aria-hidden="true">
            {icon ? (
              <svg viewBox="0 0 24 24" fill={color || '#fff'} className={styles.phIcon}>
                <path d={icon.path} />
              </svg>
            ) : (
              <ImageOff className={styles.phFallback} />
            )}
          </span>
        )}

        {/* Zona clicable para abrir el lightbox */}
        <button
          type="button"
          className={styles.openBtn}
          onClick={() => currentShowable && onOpen(index)}
          disabled={!currentShowable}
          aria-label={currentShowable ? viewLabel : alt}
        />

        {currentShowable && (
          <span className={styles.zoomHint} aria-hidden="true">
            <ZoomIn size={18} />
          </span>
        )}

        {/* Controles del carrusel */}
        {isCarousel && (
          <>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navPrev}`}
              onClick={() => go(-1)}
              aria-label={prevLabel}
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              className={`${styles.navBtn} ${styles.navNext}`}
              onClick={() => go(1)}
              aria-label={nextLabel}
            >
              <ChevronRight size={18} />
            </button>
            <div className={styles.dots}>
              {list.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={styles.slideDot}
                  data-active={i === index || undefined}
                  onClick={() => setIndex(i)}
                  aria-label={`${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
