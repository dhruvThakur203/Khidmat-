import { siteConfig } from './site';

export interface PageSeo {
  title: string;
  description: string;
  path: string;
}

export const defaultSeo: PageSeo = {
  title: 'Catering Services in Noida | Khidmat — Trusted Since 1992',
  description:
    'Khidmat — Restaurant, Catering & Hospitality in Noida and Delhi NCR. Wedding, corporate and party catering trusted since 1992.',
  path: '/',
};

export const pageSeo: Record<string, PageSeo> = {
  home: defaultSeo,
  about: {
    title: 'About Khidmat | Restaurant & Catering Since 1992',
    description:
      'Learn about Khidmat — 34 years of food, hospitality and trusted celebrations in Noida and Delhi NCR.',
    path: '/about-khidmat',
  },
  events: {
    title: 'Events & Celebrations | Khidmat Catering',
    description: 'Real Khidmat events — weddings, corporate gatherings and celebrations across Noida and Delhi NCR.',
    path: '/events',
  },
  gallery: {
    title: 'Gallery | Khidmat Restaurant & Catering',
    description: 'Photographs from Khidmat restaurant spaces, food and celebrations in Delhi and Noida.',
    path: '/gallery',
  },
  areas: {
    title: 'Areas We Serve | Khidmat Catering Noida',
    description: 'Khidmat catering across Noida, Greater Noida and Delhi NCR.',
    path: '/areas-we-serve',
  },
  cateringMenu: {
    title: 'Catering Menu Noida | Khidmat',
    description: 'Explore Khidmat catering menu options for weddings, corporate events and private celebrations in Noida.',
    path: '/catering-menu-noida',
  },
  cateringEvents: {
    title: 'Catering for Events in Noida | Khidmat',
    description: 'Professional event catering in Noida — weddings, parties, corporate functions and private gatherings.',
    path: '/catering-for-events-noida',
  },
  guestCount: {
    title: 'Catering by Guest Count | Khidmat Noida',
    description: 'Plan Khidmat catering by guest count — from intimate gatherings to large celebrations in Noida.',
    path: '/catering-by-guest-count',
  },
  restaurant: {
    title: 'Khidmat Restaurant | Dine With Us',
    description: 'Visit Khidmat in Kalkaji, Delhi and Sector 50, Noida. North Indian and Mughlai dining since 1992.',
    path: '/restaurant',
  },
  contact: {
    title: 'Contact Khidmat | Catering & Restaurant',
    description: 'Contact Khidmat for catering enquiries, reservations and event planning in Noida and Delhi.',
    path: '/contact',
  },
  locations: {
    title: 'Locations | Khidmat Delhi & Noida',
    description: 'Khidmat restaurant locations in Kalkaji, Delhi and Sector 50, Noida.',
    path: '/locations',
  },
};

export function absoluteUrl(path: string): string {
  return `${siteConfig.domain}${path.startsWith('/') ? path : `/${path}`}`;
}
