import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { EventCaseStudies } from '../components/events/EventCaseStudies';
import { PremiumPageCta } from '../components/sections/PremiumPageCta';
import './EventsPage.css';

export function EventsPage() {
  return (
    <>
      <PageMeta seo={pageSeo.events} />
      <header className="page-header page-header--editorial page-enter">
        <div className="container">
          <p className="eyebrow">Events &amp; Gallery</p>
          <h1 className="page-header__title display-lg">Every Celebration Has a Story</h1>
          <p className="page-header__subtitle body-lg">
            Real moments from Khidmat restaurant spaces, catering setups and celebrations across Delhi and Noida.
          </p>
          <div className="editorial-rule page-header__rule" aria-hidden="true" />
        </div>
      </header>

      <EventCaseStudies variant="list" />

      <section
        className="section section--compact events-gallery"
        aria-labelledby="events-gallery-heading"
      >
        <div className="container">
          <div className="events-gallery__intro">
            <h2 className="display-md" id="events-gallery-heading">Event Gallery</h2>
            <p className="body-lg events-gallery__lead">
              A closer look at the food, people and celebrations that make every Khidmat experience special — from
              weddings and private gatherings to institutional events and professional catering setups.
            </p>
          </div>
          <GalleryGrid showFilters />
        </div>
      </section>

      <PremiumPageCta ctaLocation="events-page-cta" />
    </>
  );
}
