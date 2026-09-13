import { useEffect, useRef, useState } from 'react';

interface UseCountUpOptions {
  end: number;
  durationMs?: number;
  enabled?: boolean;
}

export function useCountUp({ end, durationMs = 1500, enabled = true }: UseCountUpOptions) {
  const [value, setValue] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!enabled || end <= 0 || startedRef.current) return;
    startedRef.current = true;

    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(end * eased));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [end, durationMs, enabled]);

  return value;
}
