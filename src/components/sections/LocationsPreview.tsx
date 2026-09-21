import { Link } from 'react-router-dom';
import { branchList, formatPhoneLink } from '../../data/branches';
import { brand } from '../../data/brand';
import { useReveal } from '../../hooks/useReveal';
import { useSubtleParallax } from '../../hooks/useSubtleParallax';
import { getBranchGallery } from '../../data/branchGallery';
import { BranchDeliveryMenuCta } from '../locations/BranchDeliveryMenuCta';
import './LocationsPreview.css';

interface LocationsPreviewProps {
  showHeader?: boolean;
}

function LocationCard({
  branch,
  index,
}: {
  branch: (typeof branchList)[number];
  index: number;
}) {
  const ref = useReveal();
  const parallaxRef = useSubtleParallax<HTMLDivElement>();
  const gallery = getBranchGallery(branch.id);
  const heroImg = gallery[0];
  const directionClass = index === 0 ? 'reveal-location--left' : 'reveal-location--right';

  return (
    <article
      ref={ref}
      className={`location-card reveal-location ${directionClass}`}
    >
      <div className="location-card__image" ref={parallaxRef}>
        {heroImg && (
          <img
            src={heroImg.src}
            alt={heroImg.alt}
            loading="lazy"
            className="parallax-image"
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
}

export function LocationsPreview({ showHeader = true }: LocationsPreviewProps) {
  const ref = useReveal();

  return (
    <section
      className="section section--compact locations-preview"
      aria-labelledby={showHeader ? 'locations-heading' : undefined}
    >
      <div className="container">
        {showHeader && (
          <div className="locations-preview__header reveal" ref={ref}>
            <p className="eyebrow">{brand.locations.eyebrow}</p>
            <h2 className="display-lg locations-preview__title" id="locations-heading">
              {brand.locations.heading}
            </h2>
            <p className="locations-preview__subtitle body-lg">
              {brand.locations.subtitle}
            </p>
          </div>
        )}

        <div className="locations-preview__grid">
          {branchList.map((branch, index) => (
            <LocationCard key={branch.id} branch={branch} index={index} />
          ))}
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
