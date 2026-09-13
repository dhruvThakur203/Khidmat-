export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

/** Catering FAQs — edit here without code changes. */
export const cateringFaqs: FaqItem[] = [
  {
    id: 'areas',
    question: 'Which areas do you provide catering in?',
    answer:
      'Khidmat provides catering across Noida, Greater Noida and Delhi NCR. Contact our team with your event location and we will confirm availability.',
  },
  {
    id: 'quote',
    question: 'How do I get a catering quote?',
    answer:
      'Message us on WhatsApp with your event date, location, approximate guest count and preferences. Our team will share suitable menu options and pricing.',
  },
  {
    id: 'guest-count',
    question: 'What guest counts can you cater for?',
    answer:
      'We cater for intimate gatherings from 20 guests to large celebrations of 500 or more. Menu planning is tailored to your guest count and event type.',
  },
  {
    id: 'menu-types',
    question: 'What cuisines and menu styles do you offer?',
    answer:
      'Our catering menus draw from Khidmat\'s restaurant kitchen — North Indian, Mughlai, vegetarian and non-vegetarian options, Chinese/Asian selections, live counters and desserts.',
  },
  {
    id: 'advance',
    question: 'How far in advance should I book catering?',
    answer:
      'We recommend enquiring as early as possible, especially for weddings and large events. Contact us on WhatsApp and we will advise based on your date and guest count.',
  },
];
