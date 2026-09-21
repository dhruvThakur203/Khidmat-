import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './HeroScrollIndicator.css';

export function HeroScrollIndicator() {
  const reducedMotion = usePrefersReducedMotion();
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      setHidden(true);
      return;
    }

    const onScroll = () => {
      if (window.scrollY > 48) setHidden(true);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [reducedMotion]);

  if (hidden) return null;

  return (
    <div className="scroll-indicator" aria-hidden="true">
      <span className="scroll-indicator__label">Scroll</span>
      <span className="scroll-indicator__line" />
    </div>
  );
}
