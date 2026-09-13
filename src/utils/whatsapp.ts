import { contactConfig } from '../data/site';

export function buildWhatsAppUrl(message: string, phone = contactConfig.whatsapp): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  generalCatering:
    'Hello Khidmat, I am looking for catering services in Noida. Please share suitable menu options for my event.',
  cateringMenu:
    'Hello Khidmat, I would like to discuss the catering menu for my event in Noida. Please share options.',
  cateringQuote:
    'Hello Khidmat, I would like a catering quote for my upcoming event in Noida.',
  restaurant:
    'Hello Khidmat, I would like to enquire about dining at your restaurant.',
  corporate:
    'Hello Khidmat, I would like to enquire about corporate event catering in Noida.',
  wedding:
    'Hello Khidmat, I am planning a wedding and would like to discuss catering.',
  party:
    'Hello Khidmat, I am planning a birthday/party celebration and would like to discuss catering in Noida.',
  private:
    'Hello Khidmat, I am planning a private gathering and would like to discuss catering.',
  guestCount: (range: string) =>
    `Hello Khidmat, I need catering for approximately ${range} guests. Please share suitable menu options.`,
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
      'Hello Khidmat, I would like a catering quote.',
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
  restaurantEnquiry: (details: {
    name: string;
    phone: string;
    branch: string;
    message: string;
  }) => {
    const lines = [
      'Hello Khidmat, I would like to enquire about dining at your restaurant.',
      '',
      `Name: ${details.name}`,
      `Phone: ${details.phone}`,
      `Preferred Branch: ${details.branch}`,
    ];
    if (details.message.trim()) {
      lines.push('', `Message: ${details.message.trim()}`);
    }
    return lines.join('\n');
  },
} as const;
