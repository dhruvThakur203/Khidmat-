import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { brand } from '../data/brand';
import { LocationsPreview } from '../components/sections/LocationsPreview';
import { PremiumPageCta } from '../components/sections/PremiumPageCta';
import { noidaDeliveryMenu, externalLinkProps } from '../data/menus';
import './RestaurantPage.css';

const restaurantHeroImage = {
  src: '/images/noida/gallery/noida-01.jpeg',
  alt: 'Khidmat Noida dining area with Delhi heritage mural',
} as const;

export function RestaurantPage() {
  return (
    <>
      <PageMeta seo={pageSeo.restaurant} />
      <header className="page-header page-header--editorial page-header--split page-enter">
        <div className="container page-header__split">
          <div className="page-header__copy">
            <p className="eyebrow">Restaurant</p>
            <h1 className="page-header__title display-lg">Dine With Khidmat</h1>
            <p className="page-header__subtitle body-lg">
              Visit Khidmat in Kalkaji, Delhi and Sector 50, Noida. The same kitchen that powers our
              restaurant dining also supports professional catering across Noida and Delhi NCR.
            </p>
            <div className="editorial-rule page-header__rule" aria-hidden="true" />
          </div>
          <div className="page-header__visual">
            <img
              src={restaurantHeroImage.src}
              alt={restaurantHeroImage.alt}
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </header>

      <section className="restaurant-bridge" aria-label="Khidmat locations">
        <div className="container restaurant-bridge__inner">
          <p className="eyebrow">{brand.locations.eyebrow}</p>
          <h2 className="restaurant-bridge__title display-lg">{brand.locations.heading}</h2>
          <div className="editorial-rule restaurant-bridge__rule" aria-hidden="true" />
          <p className="body-lg restaurant-bridge__text">{brand.locations.subtitle}</p>
        </div>
      </section>

      <LocationsPreview showHeader={false} />

      <section className="section section--compact restaurant-delivery">
        <div className="container">
          <div className="restaurant-delivery__callout">
            <p className="eyebrow">Noida — Delivery / Take Away</p>
            <h2 className="display-md restaurant-delivery__title">{noidaDeliveryMenu.label}</h2>
            <p className="body-lg restaurant-delivery__text">
              For Noida branch delivery and take-away — not the dine-in or Delhi menu.
            </p>
            <a
              href={noidaDeliveryMenu.href}
              {...externalLinkProps}
              className="btn btn--outline-dark restaurant-delivery__btn"
              aria-label={noidaDeliveryMenu.ariaLabel}
            >
              {noidaDeliveryMenu.cta}
            </a>
          </div>
        </div>
      </section>

      <PremiumPageCta ctaLocation="restaurant-page-cta" />
    </>
  );
}
