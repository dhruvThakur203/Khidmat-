/**
 * Real event content architecture for /events and case study sections.
 *
 * PUBLISHING WORKFLOW:
 * 1. Khidmat provides event details + photos + written permission.
 * 2. Add entry to `realEvents` with `published: false`.
 * 3. Complete all required fields (see `isEventReadyToPublish`).
 * 4. Business reviews and approves content.
 * 5. Set `published: true` — appears on /events and homepage when wired.
 *
 * DO NOT publish fabricated events, clients, guest counts, testimonials, or menus.
 */

import type { RealEventType } from './realEventTypes';

export type { RealEventType } from './realEventTypes';

export interface RealEventImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface RealEvent {
  id: string;
  /** URL-safe slug for anchor links, e.g. events#wedding-noida-2024 */
  slug: string;
  /** Display headline */
  title: string;
  eventType: RealEventType;
  /** General area only — e.g. "Noida", "Greater Noida" — not private addresses */
  locationArea: string;
  /** Optional date label when approved, e.g. "2024" or "March 2024" */
  dateLabel?: string;
  /** Optional guest count when approved, e.g. "approximately 150" */
  guestCountLabel?: string;
  /** Short event story — factual, 2–4 sentences */
  story: string;
  /** What the client needed — buffet, live counters, dietary requirements, etc. */
  cateringRequirements?: readonly string[];
  /** Food and service highlights — only verified details */
  foodHighlights?: readonly string[];
  /** Menu highlights where explicitly approved for publication */
  menuHighlights?: readonly string[];
  /** Brief service description */
  serviceDescription?: string;
  images: RealEventImage[];
  /** Route slug for related catering page, e.g. wedding-catering-noida */
  serviceSlug?: string;
  /** Set true only when verified, approved, and ready for public display */
  published: boolean;
}

/** Required before setting published: true */
export const eventPublishingRequirements = [
  'Written permission to publish photos and event details',
  'Verified event type and general location area',
  'At least one high-quality photograph with accurate alt text',
  'Factual short story (no invented client names or claims)',
  'Approval from Khidmat management',
] as const;

export function isEventReadyToPublish(event: RealEvent): boolean {
  return Boolean(
    event.id &&
    event.slug &&
    event.title.trim() &&
    event.story.trim() &&
    event.locationArea.trim() &&
    event.images.length > 0 &&
    event.images.every((img) => img.src && img.alt.trim()),
  );
}

/**
 * Published real events — currently empty until Khidmat provides verified content.
 */
export const realEvents: RealEvent[] = [
  // Example (keep unpublished until verified):
  // {
  //   id: 'wedding-noida-2024',
  //   slug: 'wedding-noida-2024',
  //   title: 'Wedding Reception Catering in Noida',
  //   eventType: 'wedding',
  //   locationArea: 'Noida',
  //   dateLabel: '2024',
  //   guestCountLabel: 'approximately 200',
  //   story: 'Buffet catering for a wedding reception in Noida, with vegetarian and non-vegetarian spreads from Khidmat\'s kitchen.',
  //   cateringRequirements: ['Buffet setup', 'Vegetarian and non-vegetarian menu'],
  //   foodHighlights: ['North Indian main course', 'Live counter on enquiry'],
  //   menuHighlights: ['Butter Chicken', 'Dal Khidmat'],
  //   serviceDescription: 'Full reception catering with professional buffet presentation.',
  //   images: [{ src: '/images/caterings/wedding caterings.webp', alt: 'Khidmat wedding catering buffet in Noida' }],
  //   serviceSlug: 'wedding-catering-noida',
  //   published: false,
  // },
];

export function getPublishedRealEvents(): RealEvent[] {
  return realEvents.filter((e) => e.published);
}

export function getRealEventBySlug(slug: string): RealEvent | undefined {
  return getPublishedRealEvents().find((e) => e.slug === slug);
}

export function getRealEventsByType(type: RealEventType): RealEvent[] {
  return getPublishedRealEvents().filter((e) => e.eventType === type);
}

export function getRealEventsByServiceSlug(serviceSlug: string): RealEvent[] {
  return getPublishedRealEvents().filter((e) => e.serviceSlug === serviceSlug);
}

/** Human-readable event type labels */
export const realEventTypeLabels: Record<RealEventType, string> = {
  wedding: 'Wedding',
  corporate: 'Corporate Event',
  party: 'Party & Celebration',
  private: 'Private Gathering',
  'catering-setup': 'Catering Setup',
};
