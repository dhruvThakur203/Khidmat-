import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { LocationsPreview } from '../components/sections/LocationsPreview';
import { noidaDeliveryMenu, externalLinkProps } from '../data/menus';

export function RestaurantPage() {
  return (
    <>
      <PageMeta seo={pageSeo.restaurant} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Restaurant</p>
          <h1 className="page-header__title display-lg">Dine With Khidmat</h1>
          <p className="page-header__subtitle body-lg">
            Visit Khidmat in Kalkaji, Delhi and Sector 50, Noida. The same kitchen that powers our
            restaurant dining also supports professional catering across Noida and Delhi NCR.
          </p>
        </div>
      </header>

      <LocationsPreview />

      <section className="section section--cream" style={{ textAlign: 'center' }}>
        <div className="container">
          <p className="body-lg" style={{ maxWidth: '520px', margin: '0 auto 1rem' }}>
            Planning an event or celebration? Explore Khidmat catering services in Noida.
          </p>
          <Link to="/noida-catering" className="btn btn--primary btn--compact">
            Noida Catering Services
          </Link>
          <p style={{ marginTop: '1.5rem' }}>
            <a
              href={noidaDeliveryMenu.href}
              {...externalLinkProps}
              className="btn btn--text"
              aria-label={noidaDeliveryMenu.ariaLabel}
            >
              Noida — {noidaDeliveryMenu.label}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
