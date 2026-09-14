import { Link } from 'react-router-dom';
import { contactConfig, siteConfig } from '../../../data/site';
import { mailtoLink } from '../../../data/social';
import { trackConversion } from '../../../utils/analytics';
import { QuoteCtaLink } from '../../analytics/QuoteCtaLink';
import { WhatsAppButton } from '../../ui/WhatsAppButton';
import { whatsappMessages } from '../../../utils/whatsapp';
import { formatPhoneLink } from '../../../data/branches';
import { useReveal } from '../../../hooks/useReveal';
import './FinalCta.css';

export function FinalCta() {
  const ref = useReveal();

  return (
    <section className="section section--maroon final-cta" aria-labelledby="final-cta-heading">
      <div className="container reveal final-cta__inner" ref={ref}>
        <h2 className="display-lg" id="final-cta-heading">
          Planning an Event in Noida or Delhi NCR?
        </h2>
        <p className="body-lg final-cta__text">
          Tell us your event date, venue and approximate number of guests — our team will help
          you plan catering for weddings, corporate functions, parties and private gatherings
          across {siteConfig.serviceAreas.join(', ')}.
        </p>

        <div className="final-cta__actions">
          <QuoteCtaLink ctaLocation="homepage-final-cta" className="btn btn--primary">
            Get a Catering Quote
          </QuoteCtaLink>
          <WhatsAppButton
            message={whatsappMessages.generalCatering}
            ctaLocation="homepage-final-cta"
            className="btn btn--outline"
          >
            WhatsApp Khidmat
          </WhatsAppButton>
        </div>

        <div className="final-cta__contact">
          <a
            href={formatPhoneLink(contactConfig.phonePrimary)}
            className="final-cta__contact-link"
            onClick={() =>
              trackConversion('phone_click', {
                ctaLocation: 'homepage-final-cta',
                label: 'primary',
              })
            }
          >
            {contactConfig.phoneDisplay}
          </a>
          <span className="final-cta__separator" aria-hidden="true">·</span>
          <a href={mailtoLink} className="final-cta__contact-link">
            {contactConfig.email}
          </a>
          <span className="final-cta__separator" aria-hidden="true">·</span>
          <Link to="/noida-catering" className="final-cta__contact-link">
            Explore Catering Services
          </Link>
        </div>
      </div>
    </section>
  );
}
