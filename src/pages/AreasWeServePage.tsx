import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { servedAreas } from '../data/catering';
import { pageSeo } from '../data/seo';
import { siteConfig } from '../data/site';
import { PremiumPageCta } from '../components/sections/PremiumPageCta';
import { DelhiSilhouette } from '../components/ui/DelhiSilhouette';
import { editorialIndex } from '../utils/editorialIndex';
import { useReveal } from '../hooks/useReveal';
import './AreasWeServePage.css';

export function AreasWeServePage() {
  const cardsRef = useReveal<HTMLUListElement>();
  const footprintRef = useReveal();

  return (
    <>
      <PageMeta seo={pageSeo.areas} />
      <header className="page-header page-header--editorial page-enter">
        <div className="container">
          <p className="eyebrow">Areas we serve</p>
          <h1 className="page-header__title display-lg">Catering Across Noida &amp; Delhi NCR</h1>
          <p className="page-header__subtitle body-lg">
            Khidmat provides catering services in Noida and Delhi NCR from our established
            restaurant locations — bringing the same kitchen quality trusted since {siteConfig.since}.
          </p>
          <div className="editorial-rule page-header__rule" aria-hidden="true" />
        </div>
      </header>

      <section className="section section--compact">
        <div className="container">
          <ul className="areas-serve__grid reveal reveal-stagger" ref={cardsRef}>
            {servedAreas.map((area, index) => (
              <li key={area.name} className="areas-serve__card reveal-stagger__item">
                <span className="editorial-index areas-serve__index" aria-hidden="true">
                  {editorialIndex(index)}
                </span>
                <h2 className="areas-serve__name">{area.name}</h2>
                <div className="editorial-rule areas-serve__rule" aria-hidden="true" />
                <p className="body-lg areas-serve__text">{area.description}</p>
                <Link to="/noida-catering" className="areas-serve__arrow">
                  Explore catering →
                </Link>
              </li>
            ))}
          </ul>

          <div className="areas-serve__footprint reveal" ref={footprintRef} aria-label="Where Khidmat caters">
            <p className="eyebrow areas-serve__footprint-label">Where Khidmat caters</p>
            <div className="areas-serve__footprint-line" aria-hidden="true" />
            <div className="areas-serve__footprint-regions">
              {servedAreas.map((area) => (
                <span key={area.name} className="areas-serve__footprint-region">
                  {area.name}
                </span>
              ))}
            </div>
            <DelhiSilhouette />
          </div>

          <div className="areas-serve__links">
            <p className="eyebrow">Explore catering services</p>
            <div className="areas-serve__link-row">
              <Link to="/noida-catering">All Catering Services</Link>
              <Link to="/wedding-catering-noida">Wedding Catering</Link>
              <Link to="/corporate-catering-noida">Corporate Catering</Link>
              <Link to="/party-catering-noida">Party Catering</Link>
              <Link to="/private-party-catering-noida">Private Gatherings</Link>
            </div>
          </div>
        </div>
      </section>

      <PremiumPageCta ctaLocation="areas-page-cta" showCateringLink={false} />
    </>
  );
}
