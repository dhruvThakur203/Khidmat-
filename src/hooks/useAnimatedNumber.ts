import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './usePrefersReducedMotion';

interface UseAnimatedNumberOptions {
  end: number;
  durationMs?: number;
  enabled?: boolean;
  decimals?: number;
}

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

export function useAnimatedNumber({
  end,
  durationMs = 1500,
  enabled = true,
  decimals = 0,
}: UseAnimatedNumberOptions): number {
  const reducedMotion = usePrefersReducedMotion();
  const [value, setValue] = useState(reducedMotion ? end : 0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!enabled || end <= 0) return;

    if (reducedMotion) {
      setValue(end);
      return;
    }

    if (startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = easeOutCubic(progress);
      const raw = end * eased;
      const factor = Math.pow(10, decimals);
      setValue(Math.round(raw * factor) / factor);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [end, durationMs, enabled, decimals, reducedMotion]);

  return value;
}
