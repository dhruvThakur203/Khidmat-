/**
 * Maps where real evidence supports E-E-A-T across the website.
 * Use verified content only — see REAL_CONTENT_REQUIRED.md.
 */

export interface ExperienceProofSource {
  id: string;
  label: string;
  location: string;
  evidenceType: 'photograph' | 'video' | 'review' | 'testimonial' | 'milestone' | 'case-study';
  status: 'live' | 'awaiting-content' | 'partial';
  dataFile?: string;
}

/** Where authority evidence appears or will appear on khidmat.co.in */
export const experienceProofSources: ExperienceProofSource[] = [
  {
    id: 'homepage-real-events',
    label: 'Homepage real events',
    location: '/',
    evidenceType: 'photograph',
    status: 'partial',
    dataFile: 'src/data/gallery.ts (showcase) → src/data/realEvents.ts (case studies)',
  },
  {
    id: 'events-case-studies',
    label: 'Event case studies',
    location: '/events',
    evidenceType: 'case-study',
    status: 'awaiting-content',
    dataFile: 'src/data/realEvents.ts',
  },
  {
    id: 'kitchen-video',
    label: 'Behind-the-scenes kitchen',
    location: '/ (CateringHero), /experience',
    evidenceType: 'video',
    status: 'live',
    dataFile: 'src/data/heritage.ts → kitchenVideo',
  },
  {
    id: 'legacy-artwork',
    label: 'Original brand artwork',
    location: '/ (Legacy section), /about-khidmat',
    evidenceType: 'photograph',
    status: 'live',
    dataFile: 'src/data/heritage.ts → legacyOriginal',
  },
  {
    id: 'heritage-timeline',
    label: 'Historical milestones & certificates',
    location: '/about-khidmat',
    evidenceType: 'milestone',
    status: 'awaiting-content',
    dataFile: 'src/data/heritage.ts',
  },
  {
    id: 'trust-stats',
    label: 'Google & Zomato ratings',
    location: '/ (TrustStats), catering pages',
    evidenceType: 'review',
    status: 'live',
    dataFile: 'src/data/site.ts → siteStats',
  },
  {
    id: 'testimonials',
    label: 'Customer testimonials',
    location: '/ (Testimonials)',
    evidenceType: 'testimonial',
    status: 'awaiting-content',
    dataFile: 'src/data/testimonials.ts',
  },
  {
    id: 'event-gallery',
    label: 'Event & restaurant gallery',
    location: '/events, /gallery',
    evidenceType: 'photograph',
    status: 'live',
    dataFile: 'src/data/gallery.ts',
  },
];
