import type { FaqItem } from './faqs';
import type { PageSeo } from './seo';
import { ogImages } from './seo';
import { cateringCategoryImages } from './cateringImages';
import { whatsappMessages } from '../utils/whatsapp';

export interface ServiceFocus {
  heading: string;
  points: readonly string[];
}

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
  /** Unique intent-focused copy — sub-pages only */
  serviceFocus?: ServiceFocus;
  image: string;
  imageAlt: string;
  whatsappMessage: string;
  seo: PageSeo;
  whyChoose: readonly string[];
  perfectFor: readonly string[];
  foodCategories: readonly string[];
  faqs: readonly FaqItem[];
  finalCtaHeadline?: string;
}

const hubFaqs: FaqItem[] = [
  {
    id: 'hub-types',
    question: 'What types of events does Khidmat cater?',
    answer:
      'Khidmat caters weddings, corporate and office events, birthday parties, anniversaries and private family gatherings across Noida and Delhi NCR.',
  },
  {
    id: 'hub-menu',
    question: 'Does Khidmat provide customised catering menus?',
    answer:
      'Yes. Menus are tailored to your event type, dietary preferences and guest count, drawing from Khidmat\'s North Indian and Mughlai restaurant kitchen.',
  },
  {
    id: 'hub-small',
    question: 'Can catering be arranged for small gatherings?',
    answer:
      'Yes. Khidmat caters intimate gatherings from approximately 20 guests, with menus planned around your occasion and guest count.',
  },
  {
    id: 'hub-large',
    question: 'Can Khidmat cater large events?',
    answer:
      'Yes. We cater celebrations of 500 guests or more. Share your expected guest count and our team will suggest suitable menu options.',
  },
  {
    id: 'hub-areas',
    question: 'Which areas does Khidmat serve?',
    answer:
      'Khidmat provides catering across Noida, Greater Noida and Delhi NCR, supported from our established restaurant locations in Sector 50, Noida and Kalkaji, Delhi.',
  },
  {
    id: 'hub-quote',
    question: 'How can I request a catering quote?',
    answer:
      'Share your event date, venue, guest count and menu preferences on WhatsApp or through our enquiry form. Our team will respond with suitable options.',
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
      'Khidmat is a trusted caterer in Noida for weddings, corporate events, birthday parties and private gatherings — restaurant-quality food and 34+ years of hospitality across Noida and Delhi NCR.',
    finalCtaHeadline: 'Ready to plan catering in Noida?',
    image: '/images/delhi/gallery/delhi-09.jpeg',
    imageAlt: 'Khidmat catering setup for events in Noida',
    whatsappMessage: whatsappMessages.generalCatering,
    seo: {
      title: 'Catering Services & Caterers in Noida | Khidmat Since 1992',
      description:
        'Trusted caterers in Noida for weddings, corporate events, birthday parties and private gatherings. Restaurant-quality catering menus and 34+ years of hospitality.',
      path: '/noida-catering',
      ogImage: ogImages.cateringHub,
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
      'Plan wedding catering in Noida with generous spreads, customised menus and live counter options — the same kitchen that has served Khidmat guests since 1992.',
    serviceFocus: {
      heading: 'Wedding catering built around your celebration',
      points: [
        'Menu planning across wedding functions, receptions and pre-wedding events',
        'Buffet and live counter options for large guest counts',
        'Vegetarian and non-vegetarian menus from Khidmat\'s restaurant kitchen',
        'Professional food presentation for memorable guest experiences',
        'Catering across Noida, Greater Noida and Delhi NCR',
      ],
    },
    finalCtaHeadline: 'Planning your wedding catering?',
    image: cateringCategoryImages.wedding.src,
    imageAlt: cateringCategoryImages.wedding.alt,
    whatsappMessage: whatsappMessages.wedding,
    seo: {
      title: 'Wedding Catering in Noida | Khidmat',
      description:
        'Wedding catering in Noida and Delhi NCR with custom menus, generous spreads and live counter options. Trusted hospitality for memorable celebrations since 1992.',
      path: '/wedding-catering-noida',
      ogImage: ogImages.wedding,
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
      'Corporate catering in Noida for office events, conferences, client meetings and team lunches — reliable service, customised menus and professional buffet presentation since 1992.',
    serviceFocus: {
      heading: 'Professional catering for business occasions',
      points: [
        'Office lunches, conferences and client meeting catering',
        'Buffet setup suited to corporate venues and timelines',
        'North Indian and Mughlai menus with vegetarian and non-vegetarian options',
        'Recurring office lunch catering available on enquiry',
        'Serving businesses across Noida, Greater Noida and Delhi NCR',
      ],
    },
    finalCtaHeadline: 'Need corporate event catering?',
    image: cateringCategoryImages.corporate.src,
    imageAlt: cateringCategoryImages.corporate.alt,
    whatsappMessage: whatsappMessages.corporate,
    seo: {
      title: 'Corporate Catering in Noida | Khidmat',
      description:
        'Corporate catering in Noida for office events, conferences, client meetings and team lunches. Custom menus and reliable professional service since 1992.',
      path: '/corporate-catering-noida',
      ogImage: ogImages.corporate,
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
      'Birthday and party catering in Noida for celebrations of every size — familiar flavours, flexible menus and professional setup for guests of all ages.',
    serviceFocus: {
      heading: 'Party catering that feels generous and familiar',
      points: [
        'Birthday parties, anniversaries and festive family gatherings',
        'Menus planned around your guest count and celebration style',
        'Home venues, banquet halls and event spaces across Noida',
        'Popular North Indian and Mughlai dishes guests recognise and enjoy',
        'Enquire from approximately 20 guests upward',
      ],
    },
    finalCtaHeadline: 'Planning a birthday or party?',
    image: cateringCategoryImages.party.src,
    imageAlt: cateringCategoryImages.party.alt,
    whatsappMessage: whatsappMessages.party,
    seo: {
      title: 'Birthday & Party Catering in Noida | Khidmat',
      description:
        'Birthday and party catering in Noida for celebrations of every size. Flexible menus, professional setup and restaurant-quality food since 1992.',
      path: '/party-catering-noida',
      ogImage: ogImages.party,
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
      'Private event catering in Noida for home celebrations, family dinners and intimate gatherings — restaurant-quality food with attentive, discreet service.',
    serviceFocus: {
      heading: 'Private catering for home and intimate venues',
      points: [
        'Family dinners, home celebrations and personal milestones',
        'Customised menus for smaller guest counts from around 20',
        'Restaurant-quality food brought to your home or private venue',
        'Menu planning around dietary preferences and occasion type',
        'Serving private gatherings across Noida and Delhi NCR',
      ],
    },
    finalCtaHeadline: 'Planning a private gathering?',
    image: cateringCategoryImages.private.src,
    imageAlt: cateringCategoryImages.private.alt,
    whatsappMessage: whatsappMessages.private,
    seo: {
      title: 'Private Catering in Noida | Khidmat',
      description:
        'Private catering in Noida for home celebrations, family dinners and intimate gatherings. Custom menus and attentive service from a trusted hospitality brand.',
      path: '/private-party-catering-noida',
      ogImage: ogImages.private,
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
