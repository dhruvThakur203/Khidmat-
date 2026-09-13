import { buildWhatsAppUrl } from '../../utils/whatsapp';

interface WhatsAppButtonProps {
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
}: WhatsAppButtonProps) {
  return (
    <a
      href={buildWhatsAppUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
