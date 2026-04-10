import styles from './CarAnimation.module.scss';

export default function CarAnimation() {
  return (
    <div className={styles.track} aria-hidden="true">
      {/* Línea de pista sutil */}
      <div className={styles.roadLine} />

      <div className={styles.car}>
        {/* Líneas de velocidad */}
        <div className={styles.speedLines}>
          <span /><span /><span />
        </div>

        {/* SVG Fórmula 1 — vista lateral */}
        <svg
          width="148"
          height="52"
          viewBox="0 0 148 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Filtro glow para el escape */}
          <defs>
            <filter id="exhaust-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="wheel-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.5" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
          </defs>

          {/* ── Alerón trasero ── */}
          <rect x="110" y="7"  width="3"  height="16" rx="1" fill="#14B8A6" opacity="0.9"/>
          <rect x="116" y="7"  width="3"  height="16" rx="1" fill="#14B8A6" opacity="0.9"/>
          <rect x="107" y="6"  width="16" height="4"  rx="1.5" fill="#0F9B8E"/>
          {/* detalle alerón */}
          <rect x="108" y="10" width="14" height="1.5" rx="0.75" fill="#14B8A6" opacity="0.4"/>

          {/* ── Carrocería principal ── */}
          <path
            d="M14 36 L24 22 L46 15 L82 14 L100 17 L116 24 L120 36 Z"
            fill="#0F9B8E"
          />
          {/* Línea aerodinámica lateral */}
          <path
            d="M26 28 L100 22"
            stroke="#14B8A6"
            strokeWidth="1.2"
            opacity="0.35"
            strokeLinecap="round"
          />
          {/* Detalle bajo carrocería */}
          <path
            d="M30 36 L118 36 L116 38 L32 38 Z"
            fill="#0D7A6F"
            opacity="0.7"
          />

          {/* ── Cockpit ── */}
          <path
            d="M50 15 L62 7 L78 7 L86 14 Z"
            fill="#0D7A6F"
          />
          {/* Vidrio cockpit */}
          <path
            d="M53 14 L63 8 L77 8 L84 14 Z"
            fill="#0a1017"
            opacity="0.85"
          />
          {/* reflejo vidrio */}
          <path
            d="M56 12 L61 9 L66 9 L63 12 Z"
            fill="#14B8A6"
            opacity="0.15"
          />

          {/* ── Alerón delantero ── */}
          <path
            d="M6 33 L24 31 L20 37 L4 37 Z"
            fill="#14B8A6"
          />
          {/* detalle alerón delantero */}
          <line x1="8" y1="35" x2="20" y2="33.5" stroke="#0F9B8E" strokeWidth="0.8" opacity="0.5"/>

          {/* ── Rueda delantera ── */}
          <circle cx="30" cy="37" r="10" fill="#151E27" filter="url(#wheel-glow)"/>
          <circle cx="30" cy="37" r="10" fill="none" stroke="#0F9B8E" strokeWidth="2.5"/>
          <circle cx="30" cy="37" r="4.5" fill="#0F9B8E" opacity="0.85"/>
          {/* rayos */}
          <line x1="30" y1="30" x2="30" y2="44" stroke="#14B8A6" strokeWidth="1" opacity="0.5"/>
          <line x1="23" y1="37" x2="37" y2="37" stroke="#14B8A6" strokeWidth="1" opacity="0.5"/>
          <line x1="25" y1="32" x2="35" y2="42" stroke="#14B8A6" strokeWidth="0.8" opacity="0.3"/>
          <line x1="35" y1="32" x2="25" y2="42" stroke="#14B8A6" strokeWidth="0.8" opacity="0.3"/>

          {/* ── Rueda trasera (más grande) ── */}
          <circle cx="102" cy="37" r="11" fill="#151E27" filter="url(#wheel-glow)"/>
          <circle cx="102" cy="37" r="11" fill="none" stroke="#0F9B8E" strokeWidth="2.5"/>
          <circle cx="102" cy="37" r="5" fill="#0F9B8E" opacity="0.85"/>
          {/* rayos */}
          <line x1="102" y1="29" x2="102" y2="45" stroke="#14B8A6" strokeWidth="1" opacity="0.5"/>
          <line x1="94"  y1="37" x2="110" y2="37" stroke="#14B8A6" strokeWidth="1" opacity="0.5"/>
          <line x1="96.5" y1="31.5" x2="107.5" y2="42.5" stroke="#14B8A6" strokeWidth="0.8" opacity="0.3"/>
          <line x1="107.5" y1="31.5" x2="96.5" y2="42.5" stroke="#14B8A6" strokeWidth="0.8" opacity="0.3"/>

          {/* ── Escape / glow propulsión ── */}
          <ellipse cx="125" cy="30" rx="10" ry="3.5"
            fill="#14B8A6" opacity="0.25" filter="url(#exhaust-glow)"/>
          <ellipse cx="130" cy="30" rx="7"  ry="2"
            fill="#14B8A6" opacity="0.15" filter="url(#exhaust-glow)"/>

          {/* ── Número en carrocería ── */}
          <text x="68" y="29" fontFamily="monospace" fontSize="8" fontWeight="700"
            fill="#14B8A6" opacity="0.5" textAnchor="middle">F1</text>
        </svg>
      </div>
    </div>
  );
}
