import { kitchenVideo } from './heritage';

export type IntroFrameType = 'legacy-artwork' | 'photograph';

export interface CinematicIntroFrame {
  id: string;
  type: IntroFrameType;
  durationMs: number;
  /** Explicit paths — cinematic legacy artwork only */
  desktopSrc?: string;
  mobileSrc?: string;
  alt?: string;
  /** Kitchen / restaurant photograph */
  src?: string;
  positions?: {
    desktop: string;
    tablet?: string;
    mobile: string;
  };
}

export const cinematicIntroConfig = {
  transitionMs: 1000,
  heroRevealDelayMs: 350,
  textStaggerMs: 120,
} as const;

export const cinematicIntro: CinematicIntroFrame[] = [
  {
    id: 'architecture',
    type: 'photograph',
    src: '/images/delhi/gallery/delhi-06.jpeg',
    alt: 'Khidmat interior with old Delhi heritage textures',
    positions: {
      desktop: 'center center',
      tablet: 'center center',
      mobile: 'center center',
    },
    durationMs: 1500,
  },
  {
    id: 'culinary',
    type: 'photograph',
    src: kitchenVideo.poster,
    alt: 'Khidmat kitchen preparation',
    positions: {
      desktop: 'center 40%',
      tablet: 'center 45%',
      mobile: 'center 50%',
    },
    durationMs: 1500,
  },
  {
    id: 'hospitality',
    type: 'photograph',
    src: '/images/delhi/gallery/delhi-04.jpeg',
    alt: 'Khidmat heritage dining atmosphere',
    positions: {
      desktop: 'center center',
      tablet: 'center center',
      mobile: 'center 40%',
    },
    durationMs: 1200,
  },
  {
    id: 'ambience',
    type: 'photograph',
    src: '/images/delhi/gallery/delhi-03.jpeg',
    alt: 'Khidmat Delhi dining area',
    positions: {
      desktop: 'center center',
      tablet: 'center center',
      mobile: 'center center',
    },
    durationMs: 1500,
  },
  {
    id: 'delhi-heritage',
    type: 'photograph',
    src: '/images/noida/gallery/noida-01.jpeg',
    alt: 'Delhi heritage atmosphere at Khidmat',
    positions: {
      desktop: 'center center',
      tablet: 'center center',
      mobile: 'center 40%',
    },
    durationMs: 1800,
  },
];
