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
  whatsapp: '919971477902',
  whatsappDisplay: '+91 99714 77902',
  phonePrimary: '9971477902',
  phoneDisplay: '99714 77902',
  phoneFormatted: '+91 99714 77902',
  phoneAlternate: '9971200153',
  phoneAlternateDisplay: '99712 00153',
  phoneAlternateFormatted: '+91 99712 00153',
} as const;
