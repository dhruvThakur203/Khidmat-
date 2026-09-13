/** Intentional commercial journeys — internal links that help users decide. */

export interface JourneyStep {
  label: string;
  path: string;
  description?: string;
}

export const cateringHubJourney: JourneyStep[] = [
  { label: 'Choose Event Type', path: '/noida-catering', description: 'Wedding, corporate, party or private' },
  { label: 'Plan by Guest Count', path: '/catering-by-guest-count', description: '20 to 500+ guests' },
  { label: 'Explore Menu', path: '/catering-menu-noida', description: 'Cuisine categories' },
  { label: 'Request Quote', path: '/contact?type=catering', description: 'WhatsApp or enquiry form' },
];

export function getServiceJourney(serviceId: string): JourneyStep[] {
  const base: JourneyStep[] = [
    { label: 'All Catering', path: '/noida-catering' },
    { label: 'Guest Count', path: '/catering-by-guest-count' },
    { label: 'Catering Menu', path: '/catering-menu-noida' },
    { label: 'Get a Quote', path: '/contact?type=catering' },
  ];

  const eventLinks: Record<string, JourneyStep> = {
    wedding: { label: 'Wedding Catering', path: '/wedding-catering-noida' },
    corporate: { label: 'Corporate Catering', path: '/corporate-catering-noida' },
    party: { label: 'Party Catering', path: '/party-catering-noida' },
    private: { label: 'Private Gatherings', path: '/private-party-catering-noida' },
  };

  if (serviceId === 'noida-catering') return cateringHubJourney;

  const current = eventLinks[serviceId];
  if (!current) return base;

  return [current, ...base.filter((s) => s.path !== current.path)];
}
