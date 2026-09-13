import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { EventCaseStudies } from '../components/events/EventCaseStudies';
import { QuoteCtaLink } from '../components/analytics/QuoteCtaLink';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { whatsappMessages } from '../utils/whatsapp';

export function EventsPage() {
  return (
    <>
      <PageMeta seo={pageSeo.events} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Events &amp; Gallery</p>
          <h1 className="page-header__title display-lg">Every Celebration Has a Story</h1>
          <p className="page-header__subtitle body-lg">
            Real moments from Khidmat restaurant spaces, catering setups and celebrations across Delhi and Noida.
          </p>
        </div>
      </header>

      <EventCaseStudies variant="list" />

      <section className="section" aria-labelledby="events-gallery-heading">
        <div className="container">
          <h2 className="display-md" id="events-gallery-heading">Event Gallery</h2>
          <p className="body-lg" style={{ marginTop: '0.5rem', marginBottom: 'var(--space-lg)', maxWidth: '560px', color: 'var(--color-text-muted)' }}>
            Restaurant spaces, catering setups and celebrations from Khidmat&apos;s Delhi and Noida locations.
          </p>
          <GalleryGrid showFilters />
        </div>
      </section>

      <section className="section section--cream" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-md">Planning an Event?</h2>
          <p className="body-lg" style={{ margin: '1rem auto 1.5rem', maxWidth: '480px' }}>
            Explore Khidmat catering for weddings, corporate events and private celebrations in Noida.
          </p>
          <WhatsAppButton message={whatsappMessages.generalCatering} ctaLocation="events-page-cta">
            WhatsApp Khidmat
          </WhatsAppButton>
          <p style={{ marginTop: '1rem' }}>
            <QuoteCtaLink ctaLocation="events-page-cta" className="btn btn--outline-dark">
              Get a Catering Quote
            </QuoteCtaLink>
          </p>
          <p style={{ marginTop: '1.5rem' }}>
            <Link to="/noida-catering" className="btn btn--text">Catering Services in Noida</Link>
          </p>
        </div>
      </section>
    </>
  );
}
