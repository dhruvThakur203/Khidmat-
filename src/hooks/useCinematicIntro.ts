import { useCallback, useEffect, useRef, useState } from 'react';
import {
  cinematicIntro,
  cinematicIntroConfig,
} from '../data/cinematicIntro';

export type IntroPhase = 'intro' | 'transition' | 'hero';

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

export function useCinematicIntro() {
  const [skipIntro] = useState(() => prefersReducedMotion());
  const [phase, setPhase] = useState<IntroPhase>(skipIntro ? 'hero' : 'intro');
  const [frameIndex, setFrameIndex] = useState(0);
  const [heroVisible, setHeroVisible] = useState(skipIntro);
  const [textStep, setTextStep] = useState(skipIntro ? 5 : 0);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const completedRef = useRef(skipIntro);

  const clearTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
  }, []);

  const schedule = useCallback((fn: () => void, ms: number) => {
    const id = setTimeout(fn, ms);
    timersRef.current.push(id);
  }, []);

  const completeIntro = useCallback(() => {
    if (completedRef.current) return;
    completedRef.current = true;
    clearTimers();
    setPhase('hero');
    setHeroVisible(true);
    setTextStep(5);
  }, [clearTimers]);

  const startTransition = useCallback(() => {
    if (completedRef.current) return;
    setPhase('transition');
    schedule(() => {
      setPhase('hero');
      schedule(() => {
        setHeroVisible(true);
        setTextStep(1);
        schedule(() => setTextStep(2), cinematicIntroConfig.textStaggerMs);
        schedule(() => setTextStep(3), cinematicIntroConfig.textStaggerMs * 2);
        schedule(() => setTextStep(4), cinematicIntroConfig.textStaggerMs * 3);
        schedule(() => setTextStep(5), cinematicIntroConfig.textStaggerMs * 4);
      }, cinematicIntroConfig.heroRevealDelayMs);
    }, cinematicIntroConfig.transitionMs);
  }, [schedule]);

  useEffect(() => {
    if (skipIntro) return;

    let currentFrame = 0;
    const frames = cinematicIntro;

    const advanceFrame = () => {
      if (completedRef.current) return;
      if (currentFrame < frames.length - 1) {
        currentFrame += 1;
        setFrameIndex(currentFrame);
        schedule(advanceFrame, frames[currentFrame].durationMs);
      } else {
        startTransition();
      }
    };

    schedule(advanceFrame, frames[0].durationMs);

    return clearTimers;
  }, [skipIntro, schedule, startTransition, clearTimers]);

  const skipToHero = useCallback(() => {
    if (skipIntro || completedRef.current) return;
    completeIntro();
  }, [skipIntro, completeIntro]);

  return {
    skipIntro,
    phase,
    frameIndex,
    currentFrame: cinematicIntro[frameIndex],
    heroVisible,
    textStep,
    isIntroActive: phase !== 'hero',
    skipToHero,
  };
}
