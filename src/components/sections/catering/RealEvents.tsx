import { Link } from 'react-router-dom';
import { eventShowcaseItems } from '../../../data/gallery';
import { getPublishedRealEvents } from '../../../data/realEvents';
import { EventCaseStudy } from '../../events/EventCaseStudy';
import { useReveal } from '../../../hooks/useReveal';
import './RealEvents.css';

export function RealEvents() {
  const ref = useReveal();
  const publishedEvents = getPublishedRealEvents();
  const hasCaseStudies = publishedEvents.length > 0;

  return (
    <section className="section section--dark real-events" aria-labelledby="real-events-heading">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Real events</p>
        <h2 className="display-lg" id="real-events-heading">
          Catering That Looks As Good As It Tastes
        </h2>
        <p className="real-events__intro body-lg">
          {hasCaseStudies
            ? 'Verified catering events from Khidmat\'s 34+ years of hospitality across Delhi and Noida.'
            : 'Photographs from Khidmat restaurant spaces, catering setups and celebrations across Delhi and Noida.'}
        </p>

        {hasCaseStudies ? (
          <div className="real-events__case-grid">
            {publishedEvents.slice(0, 3).map((event) => (
              <EventCaseStudy key={event.id} event={event} variant="card" />
            ))}
          </div>
        ) : (
          <div className="real-events__grid">
            {eventShowcaseItems.map((event) => (
              <article key={event.id} className="real-event-card">
                <div className={`real-event-card__image real-event-card__image--${event.id}`}>
                  <img src={event.src} alt={event.alt} loading="lazy" decoding="async" />
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
