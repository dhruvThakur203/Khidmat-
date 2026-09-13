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

// ---------------------------------------------------------------------------
// Heritage authority — verified history only. Do not invent milestones.
// ---------------------------------------------------------------------------

export type HeritageEvidenceType =
  | 'photograph'
  | 'milestone'
  | 'certificate'
  | 'newspaper'
  | 'award';

export interface HeritageImage {
  src: string;
  alt: string;
}

/** Verified historical milestone — year must be confirmed */
export interface HeritageMilestone {
  id: string;
  /** Confirmed year, e.g. 1992 */
  year?: number;
  title: string;
  description: string;
  published: boolean;
}

/** Historical evidence item — photograph, certificate, press mention, award */
export interface HeritageEvidence {
  id: string;
  type: HeritageEvidenceType;
  title: string;
  description: string;
  image?: HeritageImage;
  /** Optional source attribution, e.g. newspaper name */
  sourceLabel?: string;
  published: boolean;
}

/**
 * Verified milestones — empty until Khidmat confirms dates and details.
 * Example: founding year 1992 is stated in siteConfig.since (verified brand fact).
 */
export const heritageMilestones: HeritageMilestone[] = [
  // {
  //   id: 'founded-1992',
  //   year: 1992,
  //   title: 'Khidmat Established',
  //   description: 'Khidmat begins serving guests in Delhi.',
  //   published: false,
  // },
];

/** Historical photographs, certificates, press — publish only when verified */
export const heritageEvidence: HeritageEvidence[] = [
  // {
  //   id: 'legacy-artwork',
  //   type: 'photograph',
  //   title: 'Original Khidmat Brand Artwork',
  //   description: 'Archive brand artwork from Khidmat\'s early years.',
  //   image: legacyOriginal,
  //   published: false,
  // },
];

/** Content Khidmat must provide before publishing heritage items */
export const heritageContentRequirements = [
  'Historical photographs of original restaurant (Delhi / early years)',
  'Confirmed milestone dates with supporting context',
  'Certificates, awards or recognition documents (scanned + permission)',
  'Newspaper or magazine mentions (scan or link + permission)',
  'Old menu designs or brand materials (if approved for publication)',
] as const;

export function getPublishedHeritageMilestones(): HeritageMilestone[] {
  return heritageMilestones
    .filter((m) => m.published)
    .sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
}

export function getPublishedHeritageEvidence(): HeritageEvidence[] {
  return heritageEvidence.filter((e) => e.published);
}
