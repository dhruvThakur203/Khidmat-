import { Link } from 'react-router-dom';
import { eventTypeCards } from '../../../data/catering';
import { useReveal } from '../../../hooks/useReveal';
import { editorialIndex } from '../../../utils/editorialIndex';
import './EventPlanning.css';

export function EventPlanning() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section event-planning" aria-labelledby="event-planning-heading">
      <div className="container">
        <div className="event-planning__header reveal" ref={headerRef}>
          <p className="eyebrow">Catering Services</p>
          <h2 className="display-lg" id="event-planning-heading">
            Catering for Every Occasion
          </h2>
        </div>

        <div className="event-planning__grid reveal reveal-stagger" ref={gridRef}>
          {eventTypeCards.map((card, index) => (
            <Link
              key={card.id}
              to={`/${card.slug}`}
              className="event-card reveal-stagger__item"
              aria-label={`Explore ${card.title}`}
            >
              <div className={`event-card__image event-card__image--${card.id}`}>
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
                <div className="event-card__image-overlay" aria-hidden="true" />
                <span className="event-card__index" aria-hidden="true">
                  {editorialIndex(index)}
                </span>
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
