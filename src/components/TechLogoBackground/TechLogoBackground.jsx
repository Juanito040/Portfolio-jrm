import {
  siAngular,
  siPhp,
  siPython,
  siFastapi,
  siNextdotjs,
} from 'simple-icons';

const ICON_MAP = {
  angular:   siAngular,
  php:       siPhp,
  python:    siPython,
  fastapi:   siFastapi,
  nextdotjs: siNextdotjs,
};

export default function TechLogoBackground({ techKey, color }) {
  const icon = ICON_MAP[techKey];
  if (!icon) return null;

  return (
    <span
      aria-hidden="true"
      style={{
        position: 'absolute',
        bottom: '-12px',
        right: '-12px',
        width: '130px',
        height: '130px',
        opacity: 0.055,
        pointerEvents: 'none',
        userSelect: 'none',
        transition: 'opacity 0.3s ease',
      }}
    >
      <svg
        viewBox="0 0 24 24"
        fill={color || '#fff'}
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <path d={icon.path} />
      </svg>
    </span>
  );
}
