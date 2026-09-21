import { Link } from 'react-router-dom';
import { QuoteCtaLink } from '../analytics/QuoteCtaLink';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { whatsappMessages } from '../../utils/whatsapp';
import { useReveal } from '../../hooks/useReveal';
import './PremiumPageCta.css';

interface PremiumPageCtaProps {
  ctaLocation: string;
  showCateringLink?: boolean;
}

export function PremiumPageCta({ ctaLocation, showCateringLink = true }: PremiumPageCtaProps) {
  const ref = useReveal();

  return (
    <section
      className="section section--compact premium-page-cta"
      aria-labelledby="premium-page-cta-heading"
    >
      <div className="container premium-page-cta__inner reveal" ref={ref}>
        <p className="eyebrow premium-page-cta__eyebrow">Planning an event?</p>
        <h2 className="display-md" id="premium-page-cta-heading">
          Explore Khidmat Catering
        </h2>
        <div className="editorial-rule premium-page-cta__rule motion-line-draw" aria-hidden="true" />
        <p className="body-lg premium-page-cta__text">
          Weddings, corporate events and private celebrations in Noida and Delhi NCR.
        </p>
        <div className="premium-page-cta__actions">
          <WhatsAppButton
            message={whatsappMessages.generalCatering}
            ctaLocation={ctaLocation}
            className="btn btn--outline-dark"
          >
            WhatsApp Khidmat
          </WhatsAppButton>
          <QuoteCtaLink ctaLocation={ctaLocation} className="btn btn--primary">
            Get a Catering Quote
          </QuoteCtaLink>
        </div>
        {showCateringLink && (
          <p className="premium-page-cta__link">
            <Link to="/noida-catering" className="btn btn--text">
              Catering Services in Noida
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
