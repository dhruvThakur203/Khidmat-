/**
 * Catering menu categories — structure only.
 * Add dish names when verified catering menu data is available.
 * Do not invent dishes.
 */
export interface CateringMenuCategory {
  id: string;
  title: string;
  description: string;
}

export const cateringMenuCategories: CateringMenuCategory[] = [
  {
    id: 'starters',
    title: 'Starters',
    description: 'Vegetarian and non-vegetarian appetisers for events and celebrations.',
  },
  {
    id: 'veg-main',
    title: 'Vegetarian Main Course',
    description: 'North Indian vegetarian preparations from Khidmat\'s restaurant kitchen.',
  },
  {
    id: 'nonveg-main',
    title: 'Non-Vegetarian Main Course',
    description: 'Mughlai and North Indian non-vegetarian classics, slow-cooked with care.',
  },
  {
    id: 'live-counters',
    title: 'Live Counters',
    description: 'Live preparation stations for weddings, corporate events and large gatherings.',
  },
  {
    id: 'desserts',
    title: 'Desserts',
    description: 'Indian sweets and desserts to complete your celebration menu.',
  },
  {
    id: 'custom',
    title: 'Custom Menus',
    description: 'Menus tailored to your event type, guest count and preferences.',
  },
];
