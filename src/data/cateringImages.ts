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
    filename: 'wedding caterings.jpg',
    src: cateringImagePath('wedding caterings.jpg'),
    alt: 'Wedding catering service by Khidmat in Noida',
  },
  corporate: {
    filename: 'corporate caterings.jpeg',
    src: cateringImagePath('corporate caterings.jpeg'),
    alt: 'Corporate catering service for business events in Noida',
  },
  party: {
    filename: 'birthday catering.jpg',
    src: cateringImagePath('birthday catering.jpg'),
    alt: 'Birthday and party catering service by Khidmat',
  },
  private: {
    filename: 'private caterings.jpeg',
    src: cateringImagePath('private caterings.jpeg'),
    alt: 'Private gathering and home catering service in Noida',
  },
} as const satisfies Record<string, CateringCategoryImage>;
