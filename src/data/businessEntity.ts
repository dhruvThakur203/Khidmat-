/**
 * Single source of truth for Khidmat business identity (NAP + profiles).
 * Update verified values here — all pages, schema and trust components read from this file.
 */
import { branchList, branches } from './branches';
import { contactConfig, siteConfig, siteStats } from './site';

/**
 * Single source of truth for Google Business Profile URL.
 * Set `siteConfig.googleBusinessUrl` once when verified — automatically updates:
 * TrustStats, PlatformProfiles, Testimonials, schema sameAs, and all Google CTAs.
 * Falls back to Noida Maps URL until GBP URL is confirmed. Do not guess the URL.
 */
export function getGoogleBusinessUrl(): string {
  return siteConfig.googleBusinessUrl || branches.noida.mapsUrl;
}

export const verifiedProfiles = {
  google: {
    id: 'google' as const,
    label: 'Google',
    url: getGoogleBusinessUrl(),
    ariaLabel: 'View Khidmat on Google',
    linkText: 'Google Reviews',
  },
  zomato: {
    id: 'zomato' as const,
    label: 'Zomato',
    url: 'https://www.zomato.com/ncr/khidmat-sector-50-noida',
    ariaLabel: 'View Khidmat on Zomato',
    linkText: 'Zomato',
  },
  facebook: {
    id: 'facebook' as const,
    label: 'Facebook',
    url: 'https://www.facebook.com/KhidmatRestaurant/',
    ariaLabel: 'Visit Khidmat on Facebook',
    linkText: 'Facebook',
  },
  instagram: {
    id: 'instagram' as const,
    label: 'Instagram',
    url: 'https://www.instagram.com/khidmatrestaurant',
    ariaLabel: 'Visit Khidmat on Instagram',
    linkText: 'Instagram',
  },
} as const;

export type ProfileId = keyof typeof verifiedProfiles;

/** Profiles shown in trust / connect sections (order matters). */
export const connectProfiles: ProfileId[] = ['google', 'zomato', 'facebook', 'instagram'];

/**
 * Organization schema sameAs — only verified official entity URLs.
 * Includes Google Maps/Business when GBP URL is not yet set (Noida branch fallback).
 */
export function getSchemaSameAs(): string[] {
  const urls = [
    verifiedProfiles.facebook.url,
    verifiedProfiles.instagram.url,
    getGoogleBusinessUrl(),
  ];
  return [...new Set(urls)];
}

/** Business entity snapshot for audits and documentation. */
export const businessEntity = {
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  domain: siteConfig.domain,
  email: contactConfig.email,
  phonePrimary: contactConfig.phoneFormatted,
  phoneAlternate: contactConfig.phoneAlternateFormatted,
  whatsapp: contactConfig.whatsappDisplay,
  since: siteConfig.since,
  yearsExperience: siteStats.yearsOfExperience,
  openingHours: siteConfig.openingHours,
  serviceAreas: siteConfig.serviceAreas,
  branches: branchList.map((b) => ({
    id: b.id,
    name: `${b.name} — ${b.area}, ${b.city}`,
    address: b.address,
    phones: b.phones,
    mapsUrl: b.mapsUrl,
  })),
  googleBusinessUrl: siteConfig.googleBusinessUrl,
  profiles: verifiedProfiles,
} as const;
