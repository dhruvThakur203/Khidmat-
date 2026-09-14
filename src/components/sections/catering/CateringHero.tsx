import { contactConfig, siteConfig } from '../../../data/site';
import { landingHeroVideo } from '../../../data/heritage';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
import { trackConversion } from '../../../utils/analytics';
import { QuoteCtaLink } from '../../analytics/QuoteCtaLink';
import { WhatsAppButton } from '../../ui/WhatsAppButton';
import { whatsappMessages } from '../../../utils/whatsapp';
import { formatPhoneLink } from '../../../data/branches';
import './CateringHero.css';

export function CateringHero() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="catering-hero" aria-label="Khidmat catering services">
      <div className="catering-hero__media">
        <video
          className="catering-hero__video"
          src={landingHeroVideo.src}
          poster={landingHeroVideo.poster}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        <div className="catering-hero__overlay" aria-hidden="true" />
      </div>

      <div className="catering-hero__content container">
        <p className="eyebrow catering-hero__eyebrow">{siteConfig.tagline}</p>
        <p className="catering-hero__since">Trusted Since {siteConfig.since}</p>
        <h1 className="catering-hero__title display-lg">
          Premium Catering Services in Noida &amp; Delhi NCR
        </h1>
        <p className="catering-hero__text body-lg">
          Restaurant-quality food and professional hospitality for weddings, corporate events,
          parties and private celebrations across Noida and Delhi NCR.
        </p>
        <div className="catering-hero__actions">
          <QuoteCtaLink ctaLocation="homepage-catering-hero" className="btn btn--primary">
            Get a Catering Quote
          </QuoteCtaLink>
          <WhatsAppButton
            message={whatsappMessages.generalCatering}
            ctaLocation="homepage-catering-hero"
            className="btn btn--outline"
          >
            WhatsApp Khidmat
          </WhatsAppButton>
          <a
            href={formatPhoneLink(contactConfig.phonePrimary)}
            className="btn btn--ghost catering-hero__call"
            onClick={() =>
              trackConversion('phone_click', {
                ctaLocation: 'homepage-catering-hero',
                label: 'primary',
              })
            }
          >
            {contactConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
