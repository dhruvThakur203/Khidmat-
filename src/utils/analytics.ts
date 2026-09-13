/**
 * Conversion tracking abstraction — wire to GA4 when a measurement ID is available.
 *
 * Setup:
 * 1. Create a GA4 property at https://analytics.google.com
 * 2. Set VITE_GA4_MEASUREMENT_ID in .env (e.g. G-XXXXXXXXXX)
 * 3. Load gtag in index.html or via your tag manager
 *
 * Do not fabricate measurement IDs. Do not send PII in events.
 */

export type ConversionEvent =
  | 'whatsapp_click'
  | 'phone_click'
  | 'directions_click'
  | 'quote_cta_click'
  | 'catering_form_start'
  | 'catering_form_submit'
  | 'contact_form_submit'
  | 'google_profile_click'
  | 'zomato_click'
  | 'facebook_click'
  | 'instagram_click';

export interface AnalyticsContext {
  /** Page path, e.g. /noida-catering */
  page?: string;
  /** Catering service id or type, e.g. wedding, corporate */
  cateringType?: string;
  /** Where the CTA appears, e.g. hero, final-cta, guest-count-tier */
  ctaLocation?: string;
  /** Guest count tier id, e.g. 100-250 */
  guestCountTier?: string;
  /** Additional label for grouping */
  label?: string;
}

export interface ConversionParams extends AnalyticsContext {
  path?: string;
}

export const analyticsConfig = {
  /** Set via VITE_GA4_MEASUREMENT_ID — empty until GA4 is configured */
  measurementId: import.meta.env.VITE_GA4_MEASUREMENT_ID ?? '',
  enabled: Boolean(import.meta.env.VITE_GA4_MEASUREMENT_ID),
} as const;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function getCurrentPage(): string {
  if (typeof window === 'undefined') return '';
  return window.location.pathname;
}

function buildEventParams(params?: ConversionParams): Record<string, string> {
  const page = params?.page ?? params?.path ?? getCurrentPage();
  const payload: Record<string, string> = {};

  if (page) payload.page = page;
  if (params?.cateringType) payload.catering_type = params.cateringType;
  if (params?.ctaLocation) payload.cta_location = params.ctaLocation;
  if (params?.guestCountTier) payload.guest_count_tier = params.guestCountTier;
  if (params?.label) payload.label = params.label;

  return payload;
}

/** Track a conversion event. Safe to call before analytics is configured. */
export function trackConversion(event: ConversionEvent, params?: ConversionParams): void {
  const eventParams = buildEventParams(params);

  if (import.meta.env.DEV) {
    console.debug('[analytics]', event, eventParams);
  }

  if (!analyticsConfig.enabled || typeof window === 'undefined' || !window.gtag) {
    return;
  }

  window.gtag('event', event, {
    event_category: 'conversion',
    ...eventParams,
  });
}

/** User clicked a "Get a Catering Quote" CTA before reaching the form */
export function trackQuoteCtaClick(context?: AnalyticsContext): void {
  trackConversion('quote_cta_click', context);
}

/** User began interacting with the catering enquiry form */
export function trackCateringFormStart(context?: AnalyticsContext): void {
  trackConversion('catering_form_start', context);
}

/** User submitted the catering enquiry form (WhatsApp handoff) */
export function trackCateringFormSubmit(context?: AnalyticsContext): void {
  trackConversion('catering_form_submit', context);
}

/** User clicked WhatsApp with optional catering context */
export function trackWhatsAppClick(context?: AnalyticsContext): void {
  trackConversion('whatsapp_click', context);
}
