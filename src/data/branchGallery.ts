import type { BranchId } from './branches';

/** Restaurant branch photographs — used on Locations pages, not the Events gallery. */
export interface BranchGalleryImage {
  id: string;
  src: string;
  branch: BranchId;
  alt: string;
  caption?: string;
}

const branchGalleryImages: BranchGalleryImage[] = [
  {
    id: 'noida-01',
    src: '/images/noida/gallery/noida-01.jpeg',
    branch: 'noida',
    alt: 'Khidmat Noida dining area with Delhi heritage mural',
    caption: 'Noida — dining room',
  },
  {
    id: 'noida-02',
    src: '/images/noida/gallery/noida-02.jpeg',
    branch: 'noida',
    alt: 'Khidmat Noida restaurant exterior at night',
    caption: 'Noida — exterior',
  },
  {
    id: 'delhi-01',
    src: '/images/delhi/gallery/delhi-01.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi bar and lounge area',
    caption: 'Delhi — bar',
  },
  {
    id: 'delhi-02',
    src: '/images/delhi/gallery/delhi-02.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi lounge seating with floral wall art',
    caption: 'Delhi — lounge',
  },
  {
    id: 'delhi-03',
    src: '/images/delhi/gallery/delhi-03.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi dining area with wood paneling',
    caption: 'Delhi — dining',
  },
  {
    id: 'delhi-04',
    src: '/images/delhi/gallery/delhi-04.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi interior with red seating',
    caption: 'Delhi — seating',
  },
  {
    id: 'delhi-05',
    src: '/images/delhi/gallery/delhi-05.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi banquet and celebration space',
    caption: 'Delhi — celebrations',
  },
  {
    id: 'delhi-06',
    src: '/images/delhi/gallery/delhi-06.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi restaurant interior detail',
    caption: 'Delhi — interior',
  },
  {
    id: 'delhi-07',
    src: '/images/delhi/gallery/delhi-07.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi dining hall with buffet',
    caption: 'Delhi — dining hall',
  },
  {
    id: 'delhi-08',
    src: '/images/delhi/gallery/delhi-08.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi restaurant space',
    caption: 'Delhi — restaurant',
  },
  {
    id: 'delhi-09',
    src: '/images/delhi/gallery/delhi-09.jpeg',
    branch: 'delhi',
    alt: 'Khidmat Delhi catering and event setup',
    caption: 'Delhi — catering',
  },
];

export function getBranchGallery(branch: BranchId): BranchGalleryImage[] {
  return branchGalleryImages.filter((img) => img.branch === branch);
}

export const homepageGalleryCurated: string[] = [
  'noida-01',
  'delhi-02',
  'delhi-01',
  'noida-02',
];

export function getBranchGalleryImageById(id: string): BranchGalleryImage | undefined {
  return branchGalleryImages.find((img) => img.id === id);
}
