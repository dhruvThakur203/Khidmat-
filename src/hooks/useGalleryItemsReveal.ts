import { useEffect, useRef } from 'react';

const FALLBACK_MS = 1200;

/**
 * Per-item gallery reveal — observes each `.gallery-item` individually.
 * Items are visible by default; motion only hides them after mount when enabled.
 * Includes a timeout fallback so items never stay invisible.
 */
export function useGalleryItemsReveal(filterKey: string, itemCount: number) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || itemCount === 0) return;

    const wrap = container.closest('.gallery-grid-wrap');
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const items = Array.from(
      container.querySelectorAll<HTMLElement>('.gallery-item'),
    );

    const showAll = () => {
      items.forEach((el) => el.classList.add('gallery-item--shown'));
    };

    if (prefersReduced) {
      wrap?.classList.remove('gallery-grid-wrap--motion');
      showAll();
      return;
    }

    wrap?.classList.add('gallery-grid-wrap--motion');
    items.forEach((el) => el.classList.remove('gallery-item--shown'));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('gallery-item--shown');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px 10% 0px' },
    );

    items.forEach((item) => observer.observe(item));

    const fallback = window.setTimeout(showAll, FALLBACK_MS);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, [filterKey, itemCount]);

  return containerRef;
}
