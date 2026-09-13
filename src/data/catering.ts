import { whatsappMessages } from '../utils/whatsapp';
import { cateringCategoryImages } from './cateringImages';

export type { CateringService } from './cateringServices';
export {
  cateringServices,
  getCateringServiceBySlug,
  getCateringSubServices,
} from './cateringServices';

/** Homepage "Why Khidmat" — mirrors the Noida catering hub benefits */
export const whyKhidmatBenefits = [
  '34+ Years of Hospitality Experience',
  'Restaurant-Quality Catering Menus',
  'Weddings, Corporate & Private Events',
  'Customised Menus by Guest Count',
  'Professional Food Presentation',
  'Serving Noida & Delhi NCR',
] as const;

export interface GuestCountOption {
  id: string;
  range: string;
  helperText?: string;
  whatsappMessage: string;
}

export interface EventTypeCard {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  imageAlt: string;
}

export const guestCountOptions: GuestCountOption[] = [
  {
    id: '20-50',
    range: '20–50',
    helperText: 'Perfect for intimate gatherings',
    whatsappMessage: whatsappMessages.guestCount('20–50'),
  },
  {
    id: '50-100',
    range: '50–100',
    helperText: 'Ideal for medium-sized events',
    whatsappMessage: whatsappMessages.guestCount('50–100'),
  },
  {
    id: '100-250',
    range: '100–250',
    whatsappMessage: whatsappMessages.guestCount('100–250'),
  },
  {
    id: '250-500',
    range: '250–500',
    whatsappMessage: whatsappMessages.guestCount('250–500'),
  },
  {
    id: '500-plus',
    range: '500+',
    whatsappMessage: whatsappMessages.guestCount('500+'),
  },
];

export const eventTypeCards: EventTypeCard[] = [
  {
    id: 'wedding',
    title: 'Wedding Catering',
    slug: 'wedding-catering-noida',
    description: 'Memorable wedding catering with generous spreads and trusted hospitality.',
    image: cateringCategoryImages.wedding.src,
    imageAlt: cateringCategoryImages.wedding.alt,
  },
  {
    id: 'corporate',
    title: 'Corporate Catering',
    slug: 'corporate-catering-noida',
    description: 'Professional catering for conferences, office events, client meetings and team gatherings.',
    image: cateringCategoryImages.corporate.src,
    imageAlt: cateringCategoryImages.corporate.alt,
  },
  {
    id: 'party',
    title: 'Birthday & Party Catering',
    slug: 'party-catering-noida',
    description: 'Birthday parties, anniversaries and festive celebrations with generous flavours.',
    image: cateringCategoryImages.party.src,
    imageAlt: cateringCategoryImages.party.alt,
  },
  {
    id: 'private',
    title: 'Private Gatherings',
    slug: 'private-party-catering-noida',
    description: 'Intimate home celebrations and private dinners with restaurant-quality food.',
    image: cateringCategoryImages.private.src,
    imageAlt: cateringCategoryImages.private.alt,
  },
];

export const servedAreas = [
  { name: 'Noida', description: 'Sector 50 and across Noida' },
  { name: 'Greater Noida', description: 'Celebrations and corporate events' },
  { name: 'Delhi NCR', description: 'Kalkaji, Delhi and surrounding areas' },
] as const;
