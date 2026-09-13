import { Link } from 'react-router-dom';
import { eventTypeCards } from '../data/catering';
import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { whatsappMessages } from '../utils/whatsapp';

export function CateringEventsPage() {
  return (
    <>
      <PageMeta seo={pageSeo.cateringEvents} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Event catering</p>
          <h1 className="page-header__title display-lg">Event Catering in Noida</h1>
          <p className="page-header__subtitle body-lg">
            Professional event catering in Noida for weddings, corporate functions, birthday
            parties and private gatherings — backed by Khidmat&apos;s restaurant kitchen since 1992.
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
          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <WhatsAppButton message={whatsappMessages.generalCatering}>
              Enquire on WhatsApp
            </WhatsAppButton>
            <Link to="/catering-menu-noida" className="btn btn--outline-dark">Catering Menu</Link>
            <Link to="/contact?type=catering" className="btn btn--text">Get a Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
