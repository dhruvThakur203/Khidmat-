import { eventGalleryItems } from './eventGallery';

export type GalleryCategory =
  | 'weddings'
  | 'celebrations'
  | 'private-gatherings'
  | 'food-setups'
  | 'school-events'
  | 'team';

export type GalleryFilter = 'all' | GalleryCategory;

export type GalleryMediaType = 'image' | 'video';

/** Minimal shape for gallery lightbox — shared by Events gallery and branch previews. */
export interface LightboxMedia {
  src: string;
  alt: string;
  caption?: string;
  type?: GalleryMediaType;
  poster?: string;
  id?: string;
}

export interface GalleryItem extends LightboxMedia {
  id: string;
  type: GalleryMediaType;
  category: GalleryCategory;
  title: string;
}

/** @deprecated Use GalleryItem */
export type GalleryImage = GalleryItem;

export const galleryCategoryMeta: Record<
  GalleryCategory,
  { displayName: string; filterLabel: string }
> = {
  weddings: { displayName: 'Wedding Celebrations', filterLabel: 'Weddings' },
  celebrations: { displayName: 'Celebrations & Special Occasions', filterLabel: 'Celebrations' },
  'private-gatherings': { displayName: 'Private Gatherings', filterLabel: 'Private Gatherings' },
  'food-setups': { displayName: 'Food & Catering Setups', filterLabel: 'Food & Setups' },
  'school-events': { displayName: 'School & Institutional Events', filterLabel: 'School Events' },
  team: { displayName: 'The Khidmat Team', filterLabel: 'Our Team' },
};

export const galleryFilters: { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'weddings', label: 'Weddings' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'private-gatherings', label: 'Private Gatherings' },
  { id: 'food-setups', label: 'Food & Setups' },
  { id: 'school-events', label: 'School Events' },
  { id: 'team', label: 'Our Team' },
];

/** Events & Gallery — sourced from public/images/gallery/ */
export const galleryImages: GalleryItem[] = eventGalleryItems as GalleryItem[];

export function filterGallery(
  images: GalleryItem[],
  filter: GalleryFilter,
): GalleryItem[] {
  if (filter === 'all') return images;
  return images.filter((item) => item.category === filter);
}

export function getGalleryItemById(id: string): GalleryItem | undefined {
  return galleryImages.find((item) => item.id === id);
}

/** @deprecated Use getGalleryItemById */
export function getGalleryImageById(id: string): GalleryItem | undefined {
  return getGalleryItemById(id);
}

export interface EventShowcaseItem {
  id: string;
  src: string;
  alt: string;
  type: string;
  description: string;
}

function cateringsImagePath(filename: string): string {
  return `/images/caterings/${encodeURIComponent(filename)}`;
}

/** Homepage "Real events" showcase cards */
export const eventShowcaseItems: EventShowcaseItem[] = [
  {
    id: 'celebration',
    src: cateringsImagePath('celebration.webp'),
    alt: 'Khidmat celebration catering with buffet service',
    type: 'Celebration',
    description: 'Large gathering',
  },
  {
    id: 'corporate-event',
    src: cateringsImagePath('corporate events.webp'),
    alt: 'Khidmat corporate event catering buffet setup',
    type: 'Corporate Event',
    description: 'Buffet service',
  },
  {
    id: 'catering-setup',
    src: cateringsImagePath('setUp.png'),
    alt: 'Khidmat event catering setup',
    type: 'Catering Setup',
    description: 'Event catering',
  },
];
