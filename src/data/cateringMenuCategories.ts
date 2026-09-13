/**
 * Catering menu categories — structure only.
 * Add dish names when verified catering menu data is available.
 * Do not invent dishes.
 */
export interface CateringMenuCategory {
  id: string;
  title: string;
  description: string;
  /** Event types where this category is commonly included */
  eventNotes?: readonly string[];
}

export const cateringMenuCategories: CateringMenuCategory[] = [
  {
    id: 'starters',
    title: 'Starters',
    description: 'Vegetarian and non-vegetarian appetisers for events and celebrations.',
    eventNotes: ['Weddings', 'Corporate events', 'Parties', 'Private gatherings'],
  },
  {
    id: 'veg-main',
    title: 'Vegetarian Main Course',
    description: 'North Indian vegetarian preparations from Khidmat\'s restaurant kitchen.',
    eventNotes: ['All event types', 'Vegetarian guests', 'Mixed dietary menus'],
  },
  {
    id: 'nonveg-main',
    title: 'Non-Vegetarian Main Course',
    description: 'Mughlai and North Indian non-vegetarian classics, slow-cooked with care.',
    eventNotes: ['Weddings', 'Corporate lunches', 'Party celebrations'],
  },
  {
    id: 'live-counters',
    title: 'Live Counters',
    description: 'Live preparation stations for weddings, corporate events and large gatherings.',
    eventNotes: ['Wedding receptions', 'Large corporate events', '100+ guest celebrations'],
  },
  {
    id: 'desserts',
    title: 'Desserts',
    description: 'Indian sweets and desserts to complete your celebration menu.',
    eventNotes: ['Weddings', 'Birthday parties', 'Festive gatherings'],
  },
  {
    id: 'custom',
    title: 'Custom Menus',
    description: 'Menus tailored to your event type, guest count and preferences.',
    eventNotes: ['Every event — share your date, guest count and dietary needs'],
  },
];

/** Verified signature dishes from Khidmat restaurant — suitable for catering menu reference */
export const cateringSignatureDishIds = [
  'dal-khidmat',
  'butter-chicken',
  'mutton-biryani',
  'paneer-lababdar',
] as const;

/**
 * Business information still required for full catering menu page:
 * - Verified catering-specific dish lists per category
 * - Approved package or per-plate pricing (if to be published)
 * - Live counter station options with photos
 * - Seasonal or limited-time catering items
 */
export const cateringMenuDataRequirements = [
  'Complete catering dish list per category (starters, mains, desserts)',
  'Live counter options available for events',
  'Vegetarian / non-vegetarian / Jain menu variants (if offered)',
  'Sample wedding, corporate and party menu combinations',
  'Photography of catering buffet setups and plated dishes',
] as const;
