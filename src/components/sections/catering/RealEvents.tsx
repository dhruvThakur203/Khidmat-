import { Link } from 'react-router-dom';
import { eventShowcaseItems } from '../../../data/gallery';
import { useReveal } from '../../../hooks/useReveal';
import './RealEvents.css';

export function RealEvents() {
  const ref = useReveal();

  return (
    <section className="section section--dark real-events" aria-labelledby="real-events-heading">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Real events</p>
        <h2 className="display-lg" id="real-events-heading">
          Every Celebration Has a Story
        </h2>
        <p className="real-events__intro body-lg">
          Photographs from Khidmat restaurant spaces, catering setups and celebrations across Delhi and Noida.
        </p>

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

        <div className="real-events__cta">
          <Link to="/events" className="btn btn--text">View Events &amp; Gallery</Link>
        </div>
      </div>
    </section>
  );
}
