import { contactConfig, siteConfig } from '../../../data/site';
import { kitchenVideo } from '../../../data/heritage';
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
          src={kitchenVideo.src}
          poster={kitchenVideo.poster}
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
          Catering Services in Noida, Trusted Since 1992
        </h1>
        <p className="catering-hero__text body-lg">
          For over three decades, Khidmat has brought restaurant-quality food and trusted
          hospitality to weddings, corporate events, birthday parties and private gatherings
          across Noida and Delhi NCR — from the same kitchen that has welcomed dining guests
          since 1992.
        </p>
        <div className="catering-hero__actions">
          <WhatsAppButton message={whatsappMessages.cateringMenu} ctaLocation="homepage-catering-hero">
            WhatsApp Khidmat
          </WhatsAppButton>
          <QuoteCtaLink ctaLocation="homepage-catering-hero" className="btn btn--outline">
            Get a Catering Quote
          </QuoteCtaLink>
          <a
            href={formatPhoneLink(contactConfig.phonePrimary)}
            className="btn btn--ghost catering-hero__call"
            onClick={() => trackConversion('phone_click', { ctaLocation: 'homepage-catering-hero', label: 'primary' })}
          >
            Call Khidmat
          </a>
        </div>
      </div>
    </section>
  );
}
