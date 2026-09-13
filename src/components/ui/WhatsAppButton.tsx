import { trackWhatsAppClick, type AnalyticsContext } from '../../utils/analytics';
import { buildWhatsAppUrl } from '../../utils/whatsapp';

interface WhatsAppButtonProps extends AnalyticsContext {
  message: string;
  children: React.ReactNode;
  className?: string;
  ariaLabel?: string;
}

export function WhatsAppButton({
  message,
  children,
  className = 'btn btn--primary',
  ariaLabel = 'Contact Khidmat on WhatsApp',
  ctaLocation,
  cateringType,
  guestCountTier,
  label,
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() =>
        trackWhatsAppClick({
          ctaLocation,
          cateringType,
          guestCountTier,
          label: label ?? ariaLabel,
        })
      }
    >
      {children}
    </a>
  );
}
