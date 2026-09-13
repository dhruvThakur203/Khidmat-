import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { cateringHubJourney } from '../data/cateringJourney';
import { CateringJourney } from '../components/catering/CateringJourney';
import { GuestCountTiers } from '../components/catering/GuestCountTiers';
import { GuestCountSection } from '../components/sections/catering/GuestCountSection';

export function GuestCountPage() {
  return (
    <>
      <PageMeta seo={pageSeo.guestCount} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Plan your event</p>
          <h1 className="page-header__title display-lg">Catering by Guest Count in Noida</h1>
          <p className="page-header__subtitle body-lg">
            Whether you need catering for 20 guests or a large event of 500 or more, Khidmat
            plans menus around your guest count — weddings, corporate functions, parties and
            private gatherings across Noida and Delhi NCR.
          </p>
        </div>
      </header>

      <section className="section section--cream" aria-label="Catering planning steps">
        <div className="container">
          <CateringJourney steps={cateringHubJourney} />
        </div>
      </section>

      <GuestCountSection />
      <GuestCountTiers />

      <section className="section section--cream" style={{ textAlign: 'center' }}>
        <div className="container">
          <Link to="/catering-menu-noida" className="btn btn--text">View Catering Menu</Link>
          <span style={{ margin: '0 0.5rem', color: 'var(--color-text-muted)' }}>·</span>
          <Link to="/noida-catering" className="btn btn--text">All Catering Services</Link>
          <span style={{ margin: '0 0.5rem', color: 'var(--color-text-muted)' }}>·</span>
          <Link to="/contact?type=catering" className="btn btn--text">Get a Catering Quote</Link>
        </div>
      </section>
    </>
  );
}
