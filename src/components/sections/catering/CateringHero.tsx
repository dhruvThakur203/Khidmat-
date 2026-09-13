import { Link } from 'react-router-dom';
import { contactConfig, siteConfig } from '../../../data/site';
import { kitchenVideo } from '../../../data/heritage';
import { usePrefersReducedMotion } from '../../../hooks/usePrefersReducedMotion';
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
          For over three decades, Khidmat has brought exceptional food and trusted hospitality
          to restaurants, celebrations, corporate events, weddings and special occasions across
          Noida and Delhi NCR.
        </p>
        <div className="catering-hero__actions">
          <WhatsAppButton message={whatsappMessages.cateringMenu}>
            Get Catering Menu on WhatsApp
          </WhatsAppButton>
          <Link to="/contact?type=catering" className="btn btn--outline">
            Get a Catering Quote
          </Link>
          <a href={formatPhoneLink(contactConfig.phonePrimary)} className="btn btn--ghost catering-hero__call">
            Call Khidmat
          </a>
        </div>
      </div>
    </section>
  );
}
