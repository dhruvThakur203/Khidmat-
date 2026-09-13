import { Link } from 'react-router-dom';
import { QuoteCtaLink } from '../analytics/QuoteCtaLink';
import { getCateringServiceBySlug } from '../../data/catering';
import { guestCountTiers } from '../../data/guestCountTiers';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { whatsappMessages } from '../../utils/whatsapp';
import './GuestCountTiers.css';

export function GuestCountTiers() {
  return (
    <div className="guest-count-tiers">
      {guestCountTiers.map((tier) => (
        <section
          key={tier.id}
          id={`guests-${tier.id}`}
          className="guest-count-tier"
          aria-labelledby={`tier-heading-${tier.id}`}
        >
          <div className="container">
            <p className="eyebrow">{tier.range} guests</p>
            <h2 className="display-md" id={`tier-heading-${tier.id}`}>{tier.title}</h2>
            <p className="body-lg guest-count-tier__intro">{tier.intro}</p>

            <div className="guest-count-tier__grid">
              <div>
                <h3 className="guest-count-tier__subhead">Suitable for</h3>
                <ul className="guest-count-tier__list">
                  {tier.eventTypes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="guest-count-tier__subhead">Planning considerations</h3>
                <ul className="guest-count-tier__list">
                  {tier.planningNotes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="guest-count-tier__actions">
              <WhatsAppButton
                message={whatsappMessages.guestCount(tier.range)}
                ctaLocation="guest-count-tier"
                guestCountTier={tier.id}
              >
                WhatsApp for {tier.range} Guests
              </WhatsAppButton>
              <QuoteCtaLink
                ctaLocation="guest-count-tier"
                guestCountTier={tier.id}
                className="btn btn--outline-dark"
              >
                Get a Catering Quote
              </QuoteCtaLink>
            </div>

            <p className="guest-count-tier__services">
              Related:{' '}
              {tier.serviceSlugs.map((slug, i) => {
                const service = getCateringServiceBySlug(slug);
                return (
                  <span key={slug}>
                    {i > 0 && ' · '}
                    <Link to={`/${slug}`}>{service?.shortTitle ?? slug}</Link>
                  </span>
                );
              })}
            </p>
          </div>
        </section>
      ))}
    </div>
  );
}
