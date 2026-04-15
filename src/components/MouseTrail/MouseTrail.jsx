import { useEffect, useRef } from 'react';

const COLORS = [
  'hsl(174, 83%, 40%)',
  'hsl(174, 80%, 43%)',
  'hsl(180, 70%, 45%)',
  'hsl(168, 65%, 42%)',
];

export default function MouseTrail() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const rafRef    = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx    = canvas.getContext('2d');

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e) => {
      for (let i = 0; i < 2; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 0.8 + 0.2;
        particles.current.push({
          x:     e.clientX,
          y:     e.clientY,
          vx:    Math.cos(angle) * speed,
          vy:    Math.sin(angle) * speed - 0.3,
          life:  0.6,
          size:  Math.random() * 2.5 + 1,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          decay: Math.random() * 0.03 + 0.025,
        });
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter(p => p.life > 0);

      for (const p of particles.current) {
        p.x    += p.vx;
        p.y    += p.vy;
        p.vy   += 0.03;
        p.vx   *= 0.96;
        p.life -= p.decay;
        p.size  = Math.max(0, p.size * 0.96);

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.life * 0.5);
        ctx.shadowBlur  = 4;
        ctx.shadowColor = p.color;
        ctx.fillStyle   = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize',    resize);
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position:      'fixed',
        top:           0,
        left:          0,
        pointerEvents: 'none',
        zIndex:        9998,
      }}
      aria-hidden="true"
    />
  );
}
