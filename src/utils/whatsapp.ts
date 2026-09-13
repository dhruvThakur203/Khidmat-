import { contactConfig } from '../data/site';

export function buildWhatsAppUrl(message: string, phone = contactConfig.whatsapp): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  generalCatering:
    'Hi Khidmat Team, I am interested in catering services in Noida. Please share suitable menu options and pricing.',
  cateringMenu:
    'Hi Khidmat Team, I would like to receive the Khidmat catering menu for my event. Please share options and pricing.',
  cateringQuote:
    'Hi Khidmat Team, I would like a catering quote for my upcoming event in Noida. Please get in touch.',
  corporate:
    'Hi Khidmat Team, I am interested in Corporate Catering in Noida (office events, conferences or team gatherings). Please share suitable menu options.',
  wedding:
    'Hi Khidmat Team, I am planning a wedding and would like to discuss catering options with Khidmat.',
  party:
    'Hi Khidmat Team, I am planning a party and would like to discuss catering options in Noida.',
  private:
    'Hi Khidmat Team, I am planning a private gathering and would like to discuss Khidmat catering.',
  guestCount: (range: string) =>
    `Hi Khidmat Team, I am planning an event for approximately ${range} guests. Please share suitable catering menu options and pricing.`,
  quoteEnquiry: (details: {
    name: string;
    phone: string;
    eventType: string;
    eventDate: string;
    guestCount: string;
    location: string;
    message: string;
  }) => {
    const lines = [
      'Hi Khidmat Team, I would like a catering quote.',
      '',
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Event Type: ${details.eventType}`,
      `Event Date: ${details.eventDate}`,
      `Guest Count: ${details.guestCount}`,
      `Location: ${details.location}`,
    ];
    if (details.message.trim()) {
      lines.push('', `Message: ${details.message.trim()}`);
    }
    return lines.join('\n');
  },
} as const;
