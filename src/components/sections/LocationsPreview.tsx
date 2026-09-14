import { Link } from 'react-router-dom';
import { branchList, formatPhoneLink } from '../../data/branches';
import { brand } from '../../data/brand';
import { useReveal } from '../../hooks/useReveal';
import { getBranchGallery } from '../../data/branchGallery';
import { BranchDeliveryMenuCta } from '../locations/BranchDeliveryMenuCta';
import './LocationsPreview.css';

export function LocationsPreview() {
  const ref = useReveal();

  return (
    <section className="section locations-preview" aria-labelledby="locations-heading">
      <div className="container">
        <div className="locations-preview__header reveal" ref={ref}>
          <p className="eyebrow">{brand.locations.eyebrow}</p>
          <h2 className="display-lg locations-preview__title" id="locations-heading">
            {brand.locations.heading}
          </h2>
          <p className="locations-preview__subtitle body-lg">
            {brand.locations.subtitle}
          </p>
        </div>

        <div className="locations-preview__grid">
          {branchList.map((branch) => {
            const gallery = getBranchGallery(branch.id);
            const heroImg = gallery[0];

            return (
              <article key={branch.id} className="location-card">
                <div className="location-card__image">
                  {heroImg && (
                    <img
                      src={heroImg.src}
                      alt={heroImg.alt}
                      loading="lazy"
                    />
                  )}
                </div>
                <div className="location-card__content">
                  <p className="location-card__area">{branch.area}</p>
                  <h3 className="location-card__city display-md">{branch.city}</h3>
                  <p className="location-card__address">{branch.address}</p>
                  <div className="location-card__actions">
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary btn--compact"
                    >
                      Get Directions
                    </a>
                    <a
                      href={formatPhoneLink(branch.phones[0])}
                      className="btn btn--outline-dark btn--compact"
                    >
                      Call
                    </a>
                  </div>
                  {branch.deliveryMenu && (
                    <BranchDeliveryMenuCta menu={branch.deliveryMenu} />
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <div className="locations-preview__cta">
          <Link to="/locations" className="btn btn--text">
            View All Locations
          </Link>
        </div>
      </div>
    </section>
  );
}
