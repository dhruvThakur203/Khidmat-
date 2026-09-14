import { Link } from 'react-router-dom';
import { eventTypeCards } from '../../../data/catering';
import { useReveal } from '../../../hooks/useReveal';
import './EventPlanning.css';

export function EventPlanning() {
  const ref = useReveal();

  return (
    <section className="section event-planning" aria-labelledby="event-planning-heading">
      <div className="container">
        <div className="event-planning__header reveal" ref={ref}>
          <p className="eyebrow">Catering Services</p>
          <h2 className="display-lg" id="event-planning-heading">
            Catering for Every Occasion
          </h2>
        </div>

        <div className="event-planning__grid">
          {eventTypeCards.map((card) => (
            <Link
              key={card.id}
              to={`/${card.slug}`}
              className="event-card"
              aria-label={`Explore ${card.title}`}
            >
              <div className={`event-card__image event-card__image--${card.id}`}>
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="event-card__content">
                <h3 className="event-card__title">{card.title}</h3>
                <p className="event-card__description">{card.description}</p>
                <span className="event-card__link">Explore →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
