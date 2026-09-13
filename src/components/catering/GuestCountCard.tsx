import type { GuestCountOption } from '../../data/catering';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import './GuestCountCard.css';

interface GuestCountCardProps {
  option: GuestCountOption;
}

export function GuestCountCard({ option }: GuestCountCardProps) {
  return (
    <a
      href={buildWhatsAppUrl(option.whatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      className="guest-count-card"
      aria-label={`Enquire about catering for ${option.range} guests on WhatsApp`}
    >
      <span className="guest-count-card__range">{option.range}</span>
      <span className="guest-count-card__label">Guests</span>
      {option.helperText && (
        <span className="guest-count-card__helper">{option.helperText}</span>
      )}
      <span className="guest-count-card__arrow" aria-hidden="true">→</span>
    </a>
  );
}
