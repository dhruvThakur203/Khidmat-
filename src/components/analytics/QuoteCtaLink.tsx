import type { MouseEvent } from 'react';
import { Link, type LinkProps } from 'react-router-dom';
import { trackQuoteCtaClick, type AnalyticsContext } from '../../utils/analytics';

interface QuoteCtaLinkProps extends Omit<LinkProps, 'to'> {
  ctaLocation: string;
  cateringType?: string;
  guestCountTier?: string;
}

export function QuoteCtaLink({
  ctaLocation,
  cateringType,
  guestCountTier,
  children,
  onClick,
  ...rest
}: QuoteCtaLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    trackQuoteCtaClick({ ctaLocation, cateringType, guestCountTier } satisfies AnalyticsContext);
    onClick?.(e);
  };

  return (
    <Link to="/contact?type=catering" onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
