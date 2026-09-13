import { branches } from './branches';
import { siteConfig } from './site';

export const social = {
  facebook: 'https://www.facebook.com/KhidmatRestaurant/',
  instagram: 'https://www.instagram.com/khidmatrestaurant',
  zomato: 'https://www.zomato.com/ncr/khidmat-sector-50-noida',
  email: 'info@khidmat.co.in',
} as const;

/** Google Business Profile / Maps — Noida branch unless overridden in site config. */
export function getGoogleProfileUrl(): string {
  return siteConfig.googleBusinessUrl || branches.noida.mapsUrl;
}

export const mailtoLink = `mailto:${social.email}`;
