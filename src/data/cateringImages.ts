/** Catering category images — files in public/images/caterings/ */

export interface CateringCategoryImage {
  /** Public URL path (spaces encoded) */
  src: string;
  alt: string;
  /** Original filename for reference */
  filename: string;
}

function cateringImagePath(filename: string): string {
  return `/images/caterings/${encodeURIComponent(filename)}`;
}

export const cateringCategoryImages = {
  wedding: {
    filename: 'wedding caterings.webp',
    src: cateringImagePath('wedding caterings.webp'),
    alt: 'Wedding catering setup by Khidmat in Noida',
  },
  corporate: {
    filename: 'corporate caterings.jpeg',
    src: cateringImagePath('corporate caterings.jpeg'),
    alt: 'Corporate event catering by Khidmat in Noida',
  },
  party: {
    filename: 'birthday catering.png',
    src: cateringImagePath('birthday catering.png'),
    alt: 'Birthday and party catering setup by Khidmat',
  },
  private: {
    filename: 'private caterings.png',
    src: cateringImagePath('private caterings.png'),
    alt: 'Private gathering catering by Khidmat',
  },
} as const satisfies Record<string, CateringCategoryImage>;
