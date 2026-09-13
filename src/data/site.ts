/** Central site configuration — update counts and contact here without code changes. */
export const siteConfig = {
  name: 'Khidmat',
  legalName: 'Khidmat Restaurant',
  domain: 'https://khidmat.co.in',
  tagline: 'Restaurant • Catering • Hospitality',
  since: 1992,
  yearsExperience: 34,
  primaryMarket: 'Noida',
  serviceAreas: ['Noida', 'Greater Noida', 'Delhi NCR'],
  /**
   * Verified Google Business Profile URL (e.g. https://g.page/r/... or Maps listing).
   * Set once here — automatically used in trust links, schema sameAs, and testimonials.
   * Falls back to Noida Google Maps URL until confirmed.
   */
  googleBusinessUrl: '',
  openingHours: 'Open daily — contact branch for timings',
} as const;

/**
 * Trust statistics — update with verified figures only.
 * Set rating or count to 0 to hide a platform stat until confirmed.
 */
export const siteStats = {
  yearsOfExperience: 34,

  google: {
    rating: 4.1,
    reviewCount: 800,
    countLabel: 'REVIEWS',
  },

  zomato: {
    rating: 4.2,
    reviewCount: 14000,
    countLabel: 'RATINGS',
  },

  facebookFollowers: 10000,
  instagramFollowers: 3200,
} as const;

export const contactConfig = {
  email: 'info@khidmat.co.in',
  whatsapp: '919999262580',
  whatsappDisplay: '+91 99992 62580',
  phonePrimary: '9999262580',
  phoneDisplay: '99992 62580',
} as const;
