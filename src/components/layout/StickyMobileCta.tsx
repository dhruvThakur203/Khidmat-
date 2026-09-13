import { contactConfig } from '../../data/site';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import { formatPhoneLink } from '../../data/branches';
import './StickyMobileCta.css';

export function StickyMobileCta() {
  return (
    <div className="sticky-mobile-cta" role="group" aria-label="Quick contact">
      <a
        href={buildWhatsAppUrl(whatsappMessages.cateringQuote)}
        target="_blank"
        rel="noopener noreferrer"
        className="sticky-mobile-cta__btn sticky-mobile-cta__btn--whatsapp"
        aria-label="Get a catering quote on WhatsApp"
      >
        WhatsApp
      </a>
      <a
        href={formatPhoneLink(contactConfig.phonePrimary)}
        className="sticky-mobile-cta__btn sticky-mobile-cta__btn--call"
        aria-label="Call Khidmat"
      >
        Call
      </a>
    </div>
  );
}
