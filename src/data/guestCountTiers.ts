/** Guest-count tier content for /catering-by-guest-count — no invented pricing or capacities. */

export interface GuestCountTier {
  id: string;
  range: string;
  title: string;
  intro: string;
  eventTypes: readonly string[];
  planningNotes: readonly string[];
  serviceSlugs: readonly string[];
}

export const guestCountTiers: GuestCountTier[] = [
  {
    id: '20-50',
    range: '20–50',
    title: 'Catering for 20 to 50 Guests',
    intro:
      'Intimate gatherings where menu quality and presentation matter as much as scale — ideal for private dinners, small celebrations and close family events.',
    eventTypes: [
      'Private family gatherings',
      'Home celebrations',
      'Small birthday parties',
      'Intimate wedding functions',
    ],
    planningNotes: [
      'Menus can be planned as sit-down or buffet depending on your venue',
      'Vegetarian and non-vegetarian options from Khidmat\'s restaurant kitchen',
      'Share your event date, location and dietary preferences when enquiring',
    ],
    serviceSlugs: ['private-party-catering-noida', 'party-catering-noida'],
  },
  {
    id: '50-100',
    range: '50–100',
    title: 'Catering for 50 to 100 Guests',
    intro:
      'A popular range for birthday parties, anniversaries, office gatherings and mid-size celebrations across Noida.',
    eventTypes: [
      'Birthday and anniversary parties',
      'Office lunches and team events',
      'Pre-wedding functions',
      'Corporate meetings',
    ],
    planningNotes: [
      'Buffet-style service works well for this guest count',
      'Menu categories typically include starters, mains and desserts',
      'Contact our team early to confirm date and venue logistics',
    ],
    serviceSlugs: ['party-catering-noida', 'corporate-catering-noida', 'wedding-catering-noida'],
  },
  {
    id: '100-250',
    range: '100–250',
    title: 'Catering for 100 to 250 Guests',
    intro:
      'Well-suited to wedding functions, corporate events and larger family celebrations where generous spreads and reliable service are essential.',
    eventTypes: [
      'Wedding receptions and functions',
      'Corporate conferences',
      'Large birthday celebrations',
      'Festive gatherings',
    ],
    planningNotes: [
      'Live counter options can be discussed for wedding and large events',
      'Menu planning is tailored to your function schedule and guest profile',
      'Professional buffet presentation and service arrangements available',
    ],
    serviceSlugs: ['wedding-catering-noida', 'corporate-catering-noida', 'party-catering-noida'],
  },
  {
    id: '250-500',
    range: '250–500',
    title: 'Catering for 250 to 500 Guests',
    intro:
      'Large-scale catering for weddings, corporate galas and major celebrations — backed by Khidmat\'s kitchen operations since 1992.',
    eventTypes: [
      'Wedding receptions',
      'Corporate annual events',
      'Large community celebrations',
      'Product launches',
    ],
    planningNotes: [
      'Early enquiry recommended to plan menu, logistics and service flow',
      'Multiple cuisine stations and live counters can be arranged',
      'Menus drawn from North Indian and Mughlai restaurant expertise',
    ],
    serviceSlugs: ['wedding-catering-noida', 'corporate-catering-noida'],
  },
  {
    id: '500-plus',
    range: '500+',
    title: 'Catering for 500+ Guests',
    intro:
      'Grand celebrations and large corporate events where experience, scale and consistency matter. Khidmat caters gatherings of 500 guests or more across Noida and Delhi NCR.',
    eventTypes: [
      'Large wedding receptions',
      'Major corporate events',
      'Community and institutional gatherings',
    ],
    planningNotes: [
      'Share your expected guest count, venue and event timeline when enquiring',
      'Custom menu planning with our catering team',
      'Discuss setup, service style and dietary requirements in advance',
    ],
    serviceSlugs: ['wedding-catering-noida', 'corporate-catering-noida', 'noida-catering'],
  },
];
