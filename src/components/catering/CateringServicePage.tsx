import { Link } from 'react-router-dom';
import { QuoteCtaLink } from '../analytics/QuoteCtaLink';
import type { CateringService } from '../../data/catering';
import { getCateringSubServices } from '../../data/catering';
import { cateringProcessSteps } from '../../data/cateringProcess';
import { getServiceJourney } from '../../data/cateringJourney';
import { guestCountTiers } from '../../data/guestCountTiers';
import { getRealEventsByServiceSlug } from '../../data/realEvents';
import { EventCaseStudy } from '../events/EventCaseStudy';
import { contactConfig, siteConfig } from '../../data/site';
import { CateringJourney } from './CateringJourney';
import { Breadcrumbs } from '../ui/Breadcrumbs';
import { FaqSection } from './FaqSection';
import { PageMeta } from '../seo/PageMeta';
import { StructuredData } from '../seo/StructuredData';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { buildWhatsAppUrl } from '../../utils/whatsapp';
import { formatPhoneLink } from '../../data/branches';
import './CateringServicePage.css';

interface CateringServicePageProps {
  service: CateringService;
}

export function CateringServicePage({ service }: CateringServicePageProps) {
  const subServices = getCateringSubServices();
  const breadcrumbItems = service.isHub
    ? [{ name: 'Home', path: '/' }, { name: 'Catering Services in Noida' }]
    : [
        { name: 'Home', path: '/' },
        { name: 'Catering', path: '/noida-catering' },
        { name: service.shortTitle },
      ];

  const structuredBreadcrumbs = service.isHub
    ? [{ name: 'Home', path: '/' }, { name: service.shortTitle, path: service.seo.path }]
    : [
        { name: 'Home', path: '/' },
        { name: 'Catering', path: '/noida-catering' },
        { name: service.shortTitle, path: service.seo.path },
      ];

  return (
    <>
      <PageMeta seo={service.seo} />
      <StructuredData
        breadcrumbs={structuredBreadcrumbs}
        faqs={service.faqs}
        service={{
          name: service.title,
          description: service.description,
          path: service.seo.path,
          image: service.image,
        }}
      />

      <header className="catering-page-hero">
        <div className="container catering-page-breadcrumbs">
          <Breadcrumbs items={breadcrumbItems} />
        </div>
        <div className={`catering-page-hero__media catering-page-hero__media--${service.id}`}>
          <img src={service.image} alt={service.imageAlt} />
          <div className="catering-page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container catering-page-hero__content">
          <p className="eyebrow">Khidmat Catering</p>
          <h1 className="display-lg">{service.headline}</h1>
          <p className="body-lg catering-page-hero__text">{service.description}</p>
          <div className="catering-page-hero__actions">
            <WhatsAppButton
              message={service.whatsappMessage}
              ctaLocation="catering-hero"
              cateringType={service.id}
            >
              WhatsApp Khidmat
            </WhatsAppButton>
            <QuoteCtaLink
              ctaLocation="catering-hero"
              cateringType={service.id}
              className="btn btn--outline"
            >
              Get a Catering Quote
            </QuoteCtaLink>
            <Link to="/catering-menu-noida" className="btn btn--ghost catering-page-hero__menu-link">
              View Catering Menu
            </Link>
          </div>
        </div>
      </header>

      <section className="section section--compact section--cream" aria-label="Catering planning steps">
        <div className="container">
          <CateringJourney steps={getServiceJourney(service.id)} />
        </div>
      </section>

      {service.isHub && (
        <section className="section" aria-labelledby="catering-services-heading">
          <div className="container">
            <h2 className="display-md" id="catering-services-heading">
              Catering Services in Noida
            </h2>
            <p className="body-lg catering-hub__intro">
              Khidmat provides catering in Noida for every occasion — from intimate gatherings
              of 20 guests to celebrations of 500 or more. Choose your event type, plan by guest
              count, explore menu options and request a quote.
            </p>
            <div className="catering-hub__grid">
              {subServices.map((sub) => (
                <Link key={sub.id} to={`/${sub.slug}`} className="catering-hub__card">
                  <div className={`catering-hub__card-image catering-hub__card-image--${sub.id}`}>
                    <img src={sub.image} alt={sub.imageAlt} loading="lazy" />
                  </div>
                  <div className="catering-hub__card-body">
                    <h3 className="catering-hub__card-title">{sub.shortTitle}</h3>
                    <p className="catering-hub__card-text">{sub.cardDescription}</p>
                    <span className="catering-hub__card-link">Explore {sub.shortTitle} →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.isHub && (
        <section className="section section--cream" aria-labelledby="hub-guest-count-heading">
          <div className="container">
            <h2 className="display-md" id="hub-guest-count-heading">
              Catering by Guest Count
            </h2>
            <p className="body-lg catering-hub__intro">
              Planning food for a specific number of guests? Explore options for every scale.
            </p>
            <ul className="catering-hub__guest-links">
              {guestCountTiers.map((tier) => (
                <li key={tier.id}>
                  <Link to={`/catering-by-guest-count#guests-${tier.id}`}>
                    {tier.range} guests
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/catering-by-guest-count" className="btn btn--text" style={{ marginTop: '1rem' }}>
              View all guest count options →
            </Link>
          </div>
        </section>
      )}

      {service.serviceFocus && (
        <section className="section section--cream" aria-labelledby="service-focus-heading">
          <div className="container">
            <h2 className="display-md" id="service-focus-heading">{service.serviceFocus.heading}</h2>
            <ul className="catering-benefits" style={{ marginTop: 'var(--space-md)' }}>
              {service.serviceFocus.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section section--compact section--cream" aria-labelledby="why-choose-heading">
        <div className="container">
          <h2 className="display-md" id="why-choose-heading">
            Why Choose Khidmat for {service.isHub ? 'Catering in Noida' : service.shortTitle}?
          </h2>
          <ul className="catering-benefits">
            {service.whyChoose.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--compact" aria-labelledby="perfect-for-heading">
        <div className="container">
          <h2 className="display-md" id="perfect-for-heading">Suitable For</h2>
          <div className="perfect-for__grid">
            {service.perfectFor.map((item) => (
              <div key={item} className="perfect-for__card">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="food-menu-heading">
        <div className="container">
          <h2 className="display-md" id="food-menu-heading">Menu &amp; Cuisine Options</h2>
          <p className="body-lg catering-food__intro">
            Menus draw from Khidmat&apos;s restaurant kitchen — prepared with the same care
            served at our tables since 1992.
          </p>
          <ul className="catering-food__list">
            {service.foodCategories.map((cat) => (
              <li key={cat}>{cat}</li>
            ))}
          </ul>
          <p style={{ marginTop: '1.25rem' }}>
            <Link to="/catering-menu-noida" className="btn btn--text">
              Explore Catering Menu in Noida
            </Link>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="catering-process-heading">
        <div className="container">
          <h2 className="display-md" id="catering-process-heading">How Catering Works</h2>
          <p className="body-lg catering-process__intro">
            A straightforward process — from your first enquiry to food served at your event.
          </p>
          <ol className="catering-process__steps">
            {cateringProcessSteps.map((step) => (
              <li key={step.step} className="catering-process__step">
                <span className="catering-process__number" aria-hidden="true">{step.step}</span>
                <div>
                  <h3 className="catering-process__title">{step.title}</h3>
                  <p className="catering-process__text">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--cream" aria-labelledby="areas-serve-heading">
        <div className="container">
          <h2 className="display-md" id="areas-serve-heading">Areas We Serve</h2>
          <p className="body-lg catering-areas__text">
            Khidmat provides {service.isHub ? 'catering services' : service.shortTitle.toLowerCase()} across{' '}
            {siteConfig.serviceAreas.join(', ')}.
          </p>
          <Link to="/areas-we-serve" className="btn btn--text">
            View Areas We Serve
          </Link>
        </div>
      </section>

      <section className="section section--compact catering-guest-cta" aria-labelledby="guest-count-cta-heading">
        <div className="container catering-guest-cta__inner">
          <div>
            <h2 className="display-md" id="guest-count-cta-heading">
              Plan by Guest Count
            </h2>
            <p className="body-lg catering-guest-cta__text">
              Select your approximate guest count and message our team on WhatsApp with your
              enquiry ready to send.
            </p>
          </div>
          <Link to="/catering-by-guest-count" className="btn btn--primary">
            Choose Guest Count →
          </Link>
        </div>
      </section>

      {!service.isHub && (
        <section className="section section--cream catering-related">
          <div className="container">
            <p className="eyebrow">Related Services</p>
            <div className="catering-related__links">
              <Link to="/noida-catering">All Catering Services</Link>
              {subServices
                .filter((s) => s.id !== service.id)
                .slice(0, 3)
                .map((s) => (
                  <Link key={s.id} to={`/${s.slug}`}>{s.shortTitle}</Link>
                ))}
            </div>
          </div>
        </section>
      )}

      {!service.isHub && getRealEventsByServiceSlug(service.slug).length > 0 && (
        <section className="section" aria-labelledby="related-events-heading">
          <div className="container">
            <p className="eyebrow">Real events</p>
            <h2 className="display-md" id="related-events-heading">
              Recent {service.shortTitle} Events
            </h2>
            {getRealEventsByServiceSlug(service.slug).map((event) => (
              <EventCaseStudy key={event.id} event={event} variant="full" />
            ))}
          </div>
        </section>
      )}

      <FaqSection faqs={[...service.faqs]} />

      <section className="section section--compact section--maroon catering-page-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md">{service.finalCtaHeadline ?? 'Planning an Event?'}</h2>
          <p className="body-lg" style={{ maxWidth: '520px', margin: '1rem auto 1.5rem' }}>
            Tell us about your event and our team will help you plan the right menu.
          </p>
          <div className="catering-page-hero__actions" style={{ justifyContent: 'center' }}>
            <QuoteCtaLink
              ctaLocation="catering-final-cta"
              cateringType={service.id}
              className="btn btn--primary"
            >
              Get a Catering Quote
            </QuoteCtaLink>
            <a
              href={buildWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              WhatsApp Khidmat
            </a>
          </div>
          <p style={{ marginTop: '1.5rem' }}>
            <a href={formatPhoneLink(contactConfig.phonePrimary)} className="btn btn--text catering-page-cta__call">
              Call {contactConfig.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
