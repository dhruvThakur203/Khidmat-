import type { BranchId } from './branches';

export const navigation = [
  { label: 'Our Story', path: '/our-story' },
  { label: 'Experience', path: '/experience' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Catering', path: '/catering' },
  { label: 'Locations', path: '/locations' },
] as const;

export const footerLinks = [
  { label: 'Our Story', path: '/our-story' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Catering', path: '/catering' },
  { label: 'Locations', path: '/locations' },
  { label: 'Contact', path: '/contact' },
] as const;

/**
 * A. Original legacy page — archive/brand artwork only (Our Legacy section).
 * May include PAGE 2, original typography, decorative frame.
 * NEVER use in cinematic intro.
 */
export const legacyOriginal = {
  src: '/images/heritage/legacy-original.png',
  alt: 'Khidmat Our Legacy original brand artwork',
} as const;

export const heroImage = {
  src: '/images/delhi/gallery/delhi-02.jpeg',
  alt: 'Khidmat Delhi lounge and dining area',
  branch: 'delhi' as BranchId,
  positions: {
    desktop: 'center center',
    tablet: '55% center',
    mobile: '60% center',
  },
} as const;

export const kitchenVideo = {
  src: '/videos/kitchen-okhla.mp4',
  poster: '/images/delhi/gallery/delhi-09.jpeg',
  alt: 'Khidmat base kitchen in Okhla',
} as const;
