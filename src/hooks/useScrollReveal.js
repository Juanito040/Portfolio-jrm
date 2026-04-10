import { useInView } from 'framer-motion';
import { useRef } from 'react';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    margin: '0px 0px -40px 0px', // dispara un poco antes → se siente más responsivo
    ...options,
  });

  return { ref, isInView };
}
