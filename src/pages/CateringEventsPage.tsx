import { Link } from 'react-router-dom';
import { eventTypeCards } from '../data/catering';
import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';

export function CateringEventsPage() {
  return (
    <>
      <PageMeta seo={pageSeo.cateringEvents} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Event catering</p>
          <h1 className="page-header__title display-lg">Catering for Events in Noida</h1>
          <p className="page-header__subtitle body-lg">
            Khidmat caters weddings, corporate events, birthday parties and private gatherings across Noida and Delhi NCR.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="catering-events-list">
            {eventTypeCards.map((card) => (
              <Link key={card.id} to={`/${card.slug}`} className="catering-events-list__item">
                <h2 className="catering-events-list__title">{card.title}</h2>
                <p className="catering-events-list__text">{card.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
