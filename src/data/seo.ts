import { cateringCategoryImages } from './cateringImages';
import { siteConfig } from './site';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  /** Relative path from site root, e.g. /images/noida/gallery/noida-01.jpeg */
  ogImage?: string;
  ogType?: 'website';
  /** e.g. "noindex, follow" — omit for indexable pages */
  robots?: string;
}

export const siteName = siteConfig.name;

/** Default social preview image — absolute URL resolved at runtime */
export const defaultOgImage = '/images/noida/gallery/noida-01.jpeg';

export const ogImages = {
  default: defaultOgImage,
  cateringHub: '/images/delhi/gallery/delhi-09.jpeg',
  wedding: cateringCategoryImages.wedding.src,
  corporate: cateringCategoryImages.corporate.src,
  party: cateringCategoryImages.party.src,
  private: cateringCategoryImages.private.src,
  restaurant: '/images/noida/gallery/noida-01.jpeg',
  events: '/images/caterings/celebration.webp',
  gallery: '/images/delhi/gallery/delhi-02.jpeg',
} as const;

export const defaultSeo: PageSeo = {
  title: 'Khidmat | Catering Services in Noida & Delhi NCR Since 1992',
  description:
    'Khidmat offers catering for weddings, corporate events, birthday parties and private gatherings in Noida and Delhi NCR, backed by trusted hospitality experience since 1992.',
  path: '/',
  ogImage: ogImages.default,
};

export const pageSeo: Record<string, PageSeo> = {
  home: defaultSeo,
  about: {
    title: 'About Khidmat | Restaurant & Catering Since 1992',
    description:
      'Discover Khidmat — an established hospitality brand serving restaurant dining and professional catering across Noida and Delhi NCR since 1992.',
    path: '/about-khidmat',
    ogImage: ogImages.default,
  },
  events: {
    title: 'Events & Gallery | Khidmat Catering',
    description:
      'Photographs from Khidmat catering setups, celebrations and corporate events across Noida and Delhi NCR.',
    path: '/events',
    ogImage: ogImages.events,
  },
  gallery: {
    title: 'Gallery | Khidmat Restaurant & Catering',
    description:
      'Explore photographs from Khidmat restaurant spaces, food and celebrations in Delhi and Noida.',
    path: '/gallery',
    ogImage: ogImages.gallery,
  },
  areas: {
    title: 'Areas We Serve | Khidmat Catering Noida',
    description:
      'Khidmat provides wedding, corporate and party catering across Noida, Greater Noida and Delhi NCR.',
    path: '/areas-we-serve',
    ogImage: ogImages.cateringHub,
  },
  cateringMenu: {
    title: 'Catering Menu Noida | Event Food Menu | Khidmat',
    description:
      'Khidmat catering menu in Noida — starters, mains, live counters and desserts for weddings, corporate events and parties. Customised event catering menus since 1992.',
    path: '/catering-menu-noida',
    ogImage: ogImages.cateringHub,
  },
  cateringEvents: {
    title: 'Event Catering in Noida | Khidmat',
    description:
      'Professional event catering in Noida for weddings, corporate functions, birthday parties and private gatherings — trusted hospitality since 1992.',
    path: '/catering-for-events-noida',
    ogImage: ogImages.events,
  },
  guestCount: {
    title: 'Catering for 20 to 500+ Guests in Noida | Khidmat',
    description:
      'Catering by guest count in Noida — plan food for 20, 50, 100, 200 or 500+ guests. Wedding, corporate and party catering with customised menus across Delhi NCR.',
    path: '/catering-by-guest-count',
    ogImage: ogImages.cateringHub,
  },
  restaurant: {
    title: 'Khidmat Restaurant | Dine With Us in Delhi & Noida',
    description:
      'Visit Khidmat restaurant in Kalkaji, Delhi and Sector 50, Noida. North Indian and Mughlai dining with trusted hospitality since 1992.',
    path: '/restaurant',
    ogImage: ogImages.restaurant,
  },
  contact: {
    title: 'Contact Khidmat | Catering & Restaurant Enquiries',
    description:
      'Contact Khidmat for catering quotes, restaurant reservations and event planning in Noida and Delhi. Call, WhatsApp or send an enquiry.',
    path: '/contact',
    ogImage: ogImages.default,
  },
  locations: {
    title: 'Locations | Khidmat Delhi & Noida',
    description:
      'Find Khidmat restaurant locations in Kalkaji, Delhi and Sector 50, Noida. Directions, phone numbers and delivery menu.',
    path: '/locations',
    ogImage: ogImages.restaurant,
  },
  experience: {
    title: 'The Khidmat Experience | Restaurant & Hospitality',
    description:
      'Experience Khidmat hospitality — the warmth, flavours and atmosphere that define our restaurants in Delhi and Noida.',
    path: '/experience',
    ogImage: ogImages.gallery,
    robots: 'noindex, follow',
  },
  notFound: {
    title: 'Page Not Found | Khidmat',
    description: 'The page you are looking for could not be found. Explore Khidmat catering and restaurant services.',
    path: '/404',
    robots: 'noindex, follow',
  },
};

/** All indexable public routes for sitemap generation */
export const indexableRoutes: string[] = [
  '/',
  '/noida-catering',
  '/wedding-catering-noida',
  '/corporate-catering-noida',
  '/party-catering-noida',
  '/private-party-catering-noida',
  '/catering-menu-noida',
  '/catering-for-events-noida',
  '/catering-by-guest-count',
  '/about-khidmat',
  '/events',
  '/gallery',
  '/areas-we-serve',
  '/restaurant',
  '/locations',
  '/contact',
];

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.domain}${normalized}`;
}

export function absoluteImageUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${siteConfig.domain}${normalized}`;
}

export function resolveOgImage(seo: PageSeo): string {
  return absoluteImageUrl(seo.ogImage ?? defaultOgImage);
}
