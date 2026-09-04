import type { BranchId } from './branches';

export type GalleryCategory =
  | 'ambience'
  | 'food'
  | 'celebrations'
  | 'catering';

export type GalleryFilter =
  | 'all'
  | BranchId
  | GalleryCategory;

export interface GalleryImage {
  id: string;
  src: string;
  branch: BranchId;
  category: GalleryCategory;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 'noida-01',
    src: '/images/noida/gallery/noida-01.jpeg',
    branch: 'noida',
    category: 'ambience',
    alt: 'Khidmat Noida dining area with Delhi heritage mural',
    caption: 'Noida — dining room',
  },
  {
    id: 'noida-02',
    src: '/images/noida/gallery/noida-02.jpeg',
    branch: 'noida',
    category: 'ambience',
    alt: 'Khidmat Noida restaurant exterior at night',
    caption: 'Noida — exterior',
  },
  {
    id: 'delhi-01',
    src: '/images/delhi/gallery/delhi-01.jpeg',
    branch: 'delhi',
    category: 'ambience',
    alt: 'Khidmat Delhi bar and lounge area',
    caption: 'Delhi — bar',
  },
  {
    id: 'delhi-02',
    src: '/images/delhi/gallery/delhi-02.jpeg',
    branch: 'delhi',
    category: 'ambience',
    alt: 'Khidmat Delhi lounge seating with floral wall art',
    caption: 'Delhi — lounge',
  },
  {
    id: 'delhi-03',
    src: '/images/delhi/gallery/delhi-03.jpeg',
    branch: 'delhi',
    category: 'ambience',
    alt: 'Khidmat Delhi dining area with wood paneling',
    caption: 'Delhi — dining',
  },
  {
    id: 'delhi-04',
    src: '/images/delhi/gallery/delhi-04.jpeg',
    branch: 'delhi',
    category: 'ambience',
    alt: 'Khidmat Delhi interior with red seating',
    caption: 'Delhi — seating',
  },
  {
    id: 'delhi-05',
    src: '/images/delhi/gallery/delhi-05.jpeg',
    branch: 'delhi',
    category: 'celebrations',
    alt: 'Khidmat Delhi banquet and celebration space',
    caption: 'Delhi — celebrations',
  },
  {
    id: 'delhi-06',
    src: '/images/delhi/gallery/delhi-06.jpeg',
    branch: 'delhi',
    category: 'ambience',
    alt: 'Khidmat Delhi restaurant interior detail',
    caption: 'Delhi — interior',
  },
  {
    id: 'delhi-07',
    src: '/images/delhi/gallery/delhi-07.jpeg',
    branch: 'delhi',
    category: 'ambience',
    alt: 'Khidmat Delhi dining hall with buffet',
    caption: 'Delhi — dining hall',
  },
  {
    id: 'delhi-08',
    src: '/images/delhi/gallery/delhi-08.jpeg',
    branch: 'delhi',
    category: 'ambience',
    alt: 'Khidmat Delhi restaurant space',
    caption: 'Delhi — restaurant',
  },
  {
    id: 'delhi-09',
    src: '/images/delhi/gallery/delhi-09.jpeg',
    branch: 'delhi',
    category: 'catering',
    alt: 'Khidmat Delhi catering and event setup',
    caption: 'Delhi — catering',
  },
];

export const galleryFilters: { id: GalleryFilter; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'delhi', label: 'Delhi' },
  { id: 'noida', label: 'Noida' },
  { id: 'food', label: 'Food' },
  { id: 'ambience', label: 'Ambience' },
  { id: 'celebrations', label: 'Celebrations' },
  { id: 'catering', label: 'Catering' },
];

export function filterGallery(
  images: GalleryImage[],
  filter: GalleryFilter,
): GalleryImage[] {
  if (filter === 'all') return images;
  if (filter === 'delhi' || filter === 'noida') {
    return images.filter((img) => img.branch === filter);
  }
  return images.filter((img) => img.category === filter);
}

export function getBranchGallery(branch: BranchId): GalleryImage[] {
  return galleryImages.filter((img) => img.branch === branch);
}

/** Curated selection for homepage editorial preview */
export const homepageGalleryCurated: string[] = [
  'noida-01',
  'delhi-02',
  'delhi-01',
  'noida-02',
];

export function getGalleryImageById(id: string): GalleryImage | undefined {
  return galleryImages.find((img) => img.id === id);
}
