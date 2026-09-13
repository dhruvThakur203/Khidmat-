import type { FaqItem } from './faqs';
import type { PageSeo } from './seo';
import { cateringCategoryImages } from './cateringImages';
import { whatsappMessages } from '../utils/whatsapp';

export interface CateringService {
  id: string;
  slug: string;
  isHub?: boolean;
  title: string;
  shortTitle: string;
  headline: string;
  description: string;
  /** Short card copy for the Noida catering hub */
  cardDescription?: string;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  seo: PageSeo;
  whyChoose: readonly string[];
  perfectFor: readonly string[];
  foodCategories: readonly string[];
  faqs: readonly FaqItem[];
}

const hubFaqs: FaqItem[] = [
  {
    id: 'hub-areas',
    question: 'Which areas does Khidmat provide catering in?',
    answer:
      'Khidmat provides catering across Noida, Greater Noida and Delhi NCR for weddings, corporate events, parties and private celebrations.',
  },
  {
    id: 'hub-quote',
    question: 'How do I get a catering quote in Noida?',
    answer:
      'Share your event date, location, guest count and preferences on WhatsApp or through our enquiry form. Our team will suggest suitable menus and pricing.',
  },
  {
    id: 'hub-types',
    question: 'What types of events do you cater for?',
    answer:
      'We cater for weddings, corporate and office events, birthday parties and private family gatherings.',
  },
  {
    id: 'hub-guests',
    question: 'What guest counts can Khidmat cater for?',
    answer:
      'From intimate gatherings of 20 guests to celebrations of 500 or more — menus are planned around your guest count.',
  },
  {
    id: 'hub-menu',
    question: 'Are catering menus customised?',
    answer:
      'Yes. Menus are tailored to your event type, dietary preferences and guest count, drawing from Khidmat\'s North Indian and Mughlai kitchen.',
  },
];

export const cateringServices: CateringService[] = [
  {
    id: 'noida-catering',
    slug: 'noida-catering',
    isHub: true,
    title: 'Catering Services in Noida',
    shortTitle: 'Noida Catering',
    headline: 'Catering Services in Noida, Trusted Since 1992',
    description:
      'For over three decades, Khidmat has brought restaurant-quality food and trusted hospitality to weddings, corporate events, parties and private celebrations across Noida and Delhi NCR.',
    image: '/images/delhi/gallery/delhi-09.jpeg',
    imageAlt: 'Khidmat catering setup for events in Noida',
    whatsappMessage: whatsappMessages.generalCatering,
    seo: {
      title: 'Catering Services in Noida | Khidmat — Trusted Since 1992',
      description:
        'Catering services in Noida for weddings, corporate events, parties and private celebrations. Restaurant-quality food trusted since 1992.',
      path: '/noida-catering',
    },
    whyChoose: [
      '34+ Years of Hospitality Experience',
      'Restaurant-Quality Catering Menus',
      'Weddings, Corporate & Private Events',
      'Customised Menus by Guest Count',
      'Professional Food Presentation',
      'Serving Noida & Delhi NCR',
    ],
    perfectFor: [
      'Weddings & Receptions',
      'Corporate & Office Events',
      'Birthday & Party Celebrations',
      'Private Family Gatherings',
    ],
    foodCategories: [
      'Starters',
      'Vegetarian Main Course',
      'Non-Vegetarian Main Course',
      'Live Counters',
      'Desserts',
    ],
    faqs: hubFaqs,
  },
  {
    id: 'wedding',
    slug: 'wedding-catering-noida',
    title: 'Wedding Catering in Noida',
    shortTitle: 'Wedding Catering',
    headline: 'Wedding Catering in Noida for Memorable Celebrations',
    cardDescription:
      'Memorable wedding catering with generous spreads, live counters and trusted hospitality.',
    description:
      'Wedding catering with generous food spreads, customised menus and the warmth of hospitality Khidmat has offered to generations of guests since 1992.',
    image: cateringCategoryImages.wedding.src,
    imageAlt: cateringCategoryImages.wedding.alt,
    whatsappMessage: whatsappMessages.wedding,
    seo: {
      title: 'Wedding Catering in Noida | Khidmat — Trusted Since 1992',
      description:
        'Wedding catering in Noida and Delhi NCR. Custom menus, generous spreads and live counter options from a heritage hospitality brand.',
      path: '/wedding-catering-noida',
    },
    whyChoose: [
      'Customised Wedding Menus',
      'Generous Food Spreads',
      'Live Food Counters',
      'Professional Buffet Presentation',
      '34+ Years of Hospitality Experience',
      'Intimate & Grand Wedding Celebrations',
    ],
    perfectFor: [
      'Wedding Functions',
      'Receptions',
      'Family Celebrations',
      'Pre-Wedding Events',
      'Sangeet & Mehendi Gatherings',
    ],
    foodCategories: [
      'Starters',
      'Vegetarian Main Course',
      'Non-Vegetarian Main Course',
      'Live Counters',
      'Desserts',
    ],
    faqs: [
      {
        id: 'wed-noida',
        question: 'Do you provide wedding catering in Noida?',
        answer:
          'Yes. Khidmat provides wedding catering across Noida, Greater Noida and Delhi NCR for functions, receptions and pre-wedding events.',
      },
      {
        id: 'wed-custom',
        question: 'Can wedding menus be customised?',
        answer:
          'Yes. Wedding menus are tailored to your functions, guest count and preferences, including vegetarian, non-vegetarian and live counter options.',
      },
      {
        id: 'wed-live',
        question: 'Do you offer live food counters for weddings?',
        answer:
          'Yes. Live counter options are available for wedding celebrations. Discuss your requirements with our catering team.',
      },
      {
        id: 'wed-guests',
        question: 'What guest counts can you cater for weddings?',
        answer:
          'We cater from intimate wedding gatherings to celebrations of 500 or more guests.',
      },
      {
        id: 'wed-booking',
        question: 'How far in advance should we book wedding catering?',
        answer:
          'We recommend enquiring as early as possible. Contact us on WhatsApp with your wedding date and guest count.',
      },
    ],
  },
  {
    id: 'corporate',
    slug: 'corporate-catering-noida',
    title: 'Corporate Catering in Noida',
    shortTitle: 'Corporate Catering',
    headline: 'Corporate Catering in Noida',
    cardDescription:
      'Professional catering for conferences, office events, client meetings and team gatherings.',
    description:
      'Professional catering for corporate events, office gatherings, conferences, client meetings and team celebrations. With over 34 years of hospitality experience, Khidmat brings restaurant-quality food, customised menus and reliable service to every business occasion.',
    image: cateringCategoryImages.corporate.src,
    imageAlt: cateringCategoryImages.corporate.alt,
    whatsappMessage: whatsappMessages.corporate,
    seo: {
      title: 'Corporate Catering in Noida | Office & Business Events — Khidmat',
      description:
        'Corporate catering in Noida for office events, conferences, client meetings and team lunches. Custom menus and professional service since 1992.',
      path: '/corporate-catering-noida',
    },
    whyChoose: [
      'Corporate Events & Business Gatherings',
      'Office Lunches & Team Celebrations',
      'Conferences & Client Meetings',
      'Customised Vegetarian & Non-Vegetarian Menus',
      'Professional Food Presentation & Service',
      'Serving Noida, Greater Noida & Delhi NCR',
    ],
    perfectFor: [
      'Conferences',
      'Client Meetings',
      'Team Lunches',
      'Product Launches',
      'Corporate Celebrations',
      'Office Gatherings',
    ],
    foodCategories: [
      'Starters',
      'Vegetarian Main Course',
      'Non-Vegetarian Main Course',
      'Desserts',
    ],
    faqs: [
      {
        id: 'corp-areas',
        question: 'Do you provide corporate catering in Noida?',
        answer:
          'Yes. Khidmat caters corporate events, conferences and office gatherings across Noida, Greater Noida and Delhi NCR.',
      },
      {
        id: 'corp-buffet',
        question: 'Can you arrange buffet setup for corporate events?',
        answer:
          'Yes. We provide buffet-style catering with professional food presentation suitable for conferences and corporate gatherings.',
      },
      {
        id: 'corp-quote',
        question: 'How do I request a corporate catering quote?',
        answer:
          'Message us on WhatsApp with your event date, venue, guest count and menu preferences. Our team will share suitable options and pricing.',
      },
      {
        id: 'corp-cuisines',
        question: 'What cuisines are available for corporate menus?',
        answer:
          'Corporate menus feature North Indian and Mughlai dishes from Khidmat\'s restaurant kitchen, with vegetarian and non-vegetarian options.',
      },
      {
        id: 'corp-recurring',
        question: 'Can you cater recurring office lunches?',
        answer:
          'Yes. Contact our team to discuss regular office lunch catering for your workplace in Noida.',
      },
    ],
  },
  {
    id: 'party',
    slug: 'party-catering-noida',
    title: 'Birthday & Party Catering in Noida',
    shortTitle: 'Birthday & Party Catering',
    headline: 'Birthday & Party Catering in Noida',
    cardDescription:
      'Birthday parties, anniversaries and festive gatherings with generous, familiar flavours.',
    description:
      'Birthday parties, anniversaries and festive gatherings — food that feels generous, familiar and worth remembering, served with Khidmat\'s trusted hospitality.',
    image: cateringCategoryImages.party.src,
    imageAlt: cateringCategoryImages.party.alt,
    whatsappMessage: whatsappMessages.party,
    seo: {
      title: 'Party Catering in Noida | Birthdays & Celebrations — Khidmat',
      description:
        'Party and birthday catering in Noida. Flexible menus, professional service and restaurant-quality food for every celebration.',
      path: '/party-catering-noida',
    },
    whyChoose: [
      'Celebration-Friendly Menus',
      'Flexible Party Packages',
      'Popular North Indian & Mughlai Dishes',
      'Professional Setup & Service',
      'Suitable for All Ages',
      'Trusted Since 1992',
    ],
    perfectFor: [
      'Birthday Parties',
      'Anniversaries',
      'Festive Gatherings',
      'Family Celebrations',
      'Milestone Events',
    ],
    foodCategories: [
      'Starters',
      'Vegetarian Main Course',
      'Non-Vegetarian Main Course',
      'Desserts',
    ],
    faqs: [
      {
        id: 'party-types',
        question: 'What types of parties do you cater in Noida?',
        answer:
          'We cater birthday parties, anniversaries, festive gatherings and family celebrations across Noida and Delhi NCR.',
      },
      {
        id: 'party-menu',
        question: 'Can party menus be customised?',
        answer:
          'Yes. Menus are planned around your celebration, guest count and food preferences.',
      },
      {
        id: 'party-home',
        question: 'Do you cater parties at home venues?',
        answer:
          'Yes. Khidmat caters at homes, banquet venues and event spaces across Noida.',
      },
      {
        id: 'party-guests',
        question: 'What is the minimum guest count for party catering?',
        answer:
          'We cater gatherings from approximately 20 guests. Contact us with your guest count for suitable menu options.',
      },
      {
        id: 'party-quote',
        question: 'How do I get a party catering quote?',
        answer:
          'Message us on WhatsApp with your party date, venue, guest count and menu preferences.',
      },
    ],
  },
  {
    id: 'private',
    slug: 'private-party-catering-noida',
    title: 'Private Catering in Noida',
    shortTitle: 'Private Gatherings',
    headline: 'Private Catering in Noida for Family Gatherings & Special Occasions',
    cardDescription:
      'Intimate home celebrations and private dinners with restaurant-quality food and attentive service.',
    description:
      'Intimate home celebrations, family dinners and private occasions — Khidmat brings restaurant-quality food and attentive service to your table.',
    image: cateringCategoryImages.private.src,
    imageAlt: cateringCategoryImages.private.alt,
    whatsappMessage: whatsappMessages.private,
    seo: {
      title: 'Private Catering in Noida | Family Gatherings — Khidmat',
      description:
        'Private catering in Noida for home celebrations and intimate gatherings. Custom menus and trusted hospitality since 1992.',
      path: '/private-party-catering-noida',
    },
    whyChoose: [
      'Personalised Home Event Menus',
      'Intimate Gathering Expertise',
      'Restaurant-Quality Food at Your Venue',
      'Attentive, Discreet Service',
      'Customised Menu Planning',
      '34+ Years of Trusted Hospitality',
    ],
    perfectFor: [
      'Family Dinners',
      'Home Celebrations',
      'Intimate Gatherings',
      'Religious Occasions',
      'Personal Milestones',
    ],
    foodCategories: [
      'Starters',
      'Vegetarian Main Course',
      'Non-Vegetarian Main Course',
      'Desserts',
    ],
    faqs: [
      {
        id: 'priv-home',
        question: 'Do you cater private events at home in Noida?',
        answer:
          'Yes. Khidmat provides private catering for home celebrations and intimate gatherings across Noida and Delhi NCR.',
      },
      {
        id: 'priv-menu',
        question: 'Can private event menus be fully customised?',
        answer:
          'Yes. Menus are personalised to your occasion, guest count and dietary preferences.',
      },
      {
        id: 'priv-size',
        question: 'What size gatherings do you cater privately?',
        answer:
          'We cater intimate gatherings from around 20 guests to larger family celebrations.',
      },
      {
        id: 'priv-service',
        question: 'Is service staff included for private events?',
        answer:
          'Service arrangements depend on your event requirements. Discuss your needs with our catering team when enquiring.',
      },
      {
        id: 'priv-quote',
        question: 'How do I enquire about private catering?',
        answer:
          'Message us on WhatsApp with your event date, home or venue address, guest count and menu preferences.',
      },
    ],
  },
];

export function getCateringServiceBySlug(slug: string): CateringService | undefined {
  return cateringServices.find((s) => s.slug === slug);
}

export function getCateringSubServices(): CateringService[] {
  return cateringServices.filter((s) => !s.isHub);
}
