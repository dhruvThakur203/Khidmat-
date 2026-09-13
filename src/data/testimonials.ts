/**
 * Add genuine customer testimonials here — do not fabricate reviews.
 * Set `published: true` only for reviews you have permission to display.
 */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  context: string;
  eventType?: 'wedding' | 'corporate' | 'party' | 'private' | 'restaurant';
  source?: 'google' | 'zomato' | 'direct';
  published: boolean;
}

export const testimonials: Testimonial[] = [
  // Example (unpublished — replace with real reviews):
  // {
  //   id: 'example-1',
  //   quote: '...',
  //   author: 'Guest name or initials',
  //   context: 'Wedding catering, Noida — 250 guests',
  //   eventType: 'wedding',
  //   source: 'google',
  //   published: true,
  // },
];

export function getPublishedTestimonials(): Testimonial[] {
  return testimonials.filter((t) => t.published);
}
