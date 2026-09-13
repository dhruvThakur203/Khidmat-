import { Link } from 'react-router-dom';
import type { CateringService } from '../../data/catering';
import { getCateringSubServices } from '../../data/catering';
import { contactConfig } from '../../data/site';
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
      <StructuredData breadcrumbs={structuredBreadcrumbs} faqs={service.faqs} />

      <div className="container catering-page-breadcrumbs">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <header className="catering-page-hero">
        <div className={`catering-page-hero__media catering-page-hero__media--${service.id}`}>
          <img src={service.image} alt={service.imageAlt} />
          <div className="catering-page-hero__overlay" aria-hidden="true" />
        </div>
        <div className="container catering-page-hero__content">
          <p className="eyebrow">Khidmat Catering</p>
          <h1 className="display-lg">{service.headline}</h1>
          <p className="body-lg catering-page-hero__text">{service.description}</p>
          <div className="catering-page-hero__actions">
            <WhatsAppButton message={service.whatsappMessage}>
              Get Catering Menu on WhatsApp
            </WhatsAppButton>
            <Link to="/contact?type=catering" className="btn btn--outline">
              Get a Catering Quote
            </Link>
          </div>
        </div>
      </header>

      {service.isHub && (
        <section className="section" aria-labelledby="catering-services-heading">
          <div className="container">
            <h2 className="display-md" id="catering-services-heading">
              Catering Services in Noida
            </h2>
            <p className="body-lg catering-hub__intro">
              Choose the catering service that fits your occasion. Each service is backed by
              Khidmat&apos;s restaurant kitchen and 34+ years of hospitality.
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

      <section className="section section--cream" aria-labelledby="why-choose-heading">
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

      <section className="section" aria-labelledby="perfect-for-heading">
        <div className="container">
          <h2 className="display-md" id="perfect-for-heading">Perfect For</h2>
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
          <h2 className="display-md" id="food-menu-heading">Food &amp; Menu Experience</h2>
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
              View Catering Menu Options
            </Link>
          </p>
        </div>
      </section>

      <section className="section catering-guest-cta" aria-labelledby="guest-count-cta-heading">
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

      <FaqSection faqs={[...service.faqs]} />

      <section className="section section--maroon catering-page-cta">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="display-md">Planning an Event?</h2>
          <p className="body-lg" style={{ maxWidth: '520px', margin: '1rem auto 1.5rem' }}>
            Tell us about your event and our team will help you plan the right menu.
          </p>
          <div className="catering-page-hero__actions" style={{ justifyContent: 'center' }}>
            <Link to="/contact?type=catering" className="btn btn--primary">
              Get a Catering Quote
            </Link>
            <a
              href={buildWhatsAppUrl(service.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline"
            >
              WhatsApp Us
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
