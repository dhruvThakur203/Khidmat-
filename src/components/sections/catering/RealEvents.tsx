import { Link } from 'react-router-dom';
import { eventShowcaseItems } from '../../../data/gallery';
import { getPublishedRealEvents } from '../../../data/realEvents';
import { EventCaseStudy } from '../../events/EventCaseStudy';
import { useReveal } from '../../../hooks/useReveal';
import './RealEvents.css';

export function RealEvents() {
  const headerRef = useReveal();
  const gridRef = useReveal();
  const publishedEvents = getPublishedRealEvents();
  const hasCaseStudies = publishedEvents.length > 0;

  return (
    <section className="section section--dark real-events" aria-labelledby="real-events-heading">
      <div className="container">
        <div className="reveal" ref={headerRef}>
          <p className="eyebrow">Real events</p>
          <h2 className="display-lg" id="real-events-heading">
            Catering That Looks As Good As It Tastes
          </h2>
          <p className="real-events__intro body-lg">
            {hasCaseStudies
              ? 'Verified catering events from Khidmat\'s 34+ years of hospitality across Delhi and Noida.'
              : 'Photographs from Khidmat restaurant spaces, catering setups and celebrations across Delhi and Noida.'}
          </p>
        </div>

        {hasCaseStudies ? (
          <div className="real-events__case-grid reveal reveal-stagger" ref={gridRef}>
            {publishedEvents.slice(0, 3).map((event) => (
              <div key={event.id} className="reveal-stagger__item">
                <EventCaseStudy event={event} variant="card" />
              </div>
            ))}
          </div>
        ) : (
          <div className="real-events__grid real-events__grid--journal reveal reveal-stagger" ref={gridRef}>
            {eventShowcaseItems.map((event, index) => (
              <article
                key={event.id}
                className={`real-event-card reveal-stagger__item${index === 0 ? ' real-event-card--featured' : ''}`}
              >
                <div className={`real-event-card__image real-event-card__image--${event.id}`}>
                  <img src={event.src} alt={event.alt} loading="lazy" decoding="async" />
                  <span className="real-event-card__label">{event.type}</span>
                </div>
                <div className="real-event-card__meta">
                  <h3>{event.type}</h3>
                  <p>{event.description}</p>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="real-events__cta">
          <Link to="/events" className="btn btn--text">View Events &amp; Gallery</Link>
        </div>
      </div>
    </section>
  );
}
