import { getGoogleBusinessUrl, verifiedProfiles } from './businessEntity';

/** @deprecated Prefer verifiedProfiles from businessEntity.ts — kept for backward compatibility. */
export const social = {
  facebook: verifiedProfiles.facebook.url,
  instagram: verifiedProfiles.instagram.url,
  zomato: verifiedProfiles.zomato.url,
  email: 'info@khidmat.co.in',
} as const;

/** Google Business Profile / Maps — uses siteConfig.googleBusinessUrl when set. */
export function getGoogleProfileUrl(): string {
  return getGoogleBusinessUrl();
}

export const mailtoLink = `mailto:${social.email}`;
