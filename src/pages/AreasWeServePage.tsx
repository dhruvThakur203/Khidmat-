import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { servedAreas } from '../data/catering';
import { pageSeo } from '../data/seo';
import { siteConfig } from '../data/site';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { whatsappMessages } from '../utils/whatsapp';
import './AreasWeServePage.css';

export function AreasWeServePage() {
  return (
    <>
      <PageMeta seo={pageSeo.areas} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Areas we serve</p>
          <h1 className="page-header__title display-lg">Catering Across Noida &amp; Delhi NCR</h1>
          <p className="page-header__subtitle body-lg">
            Khidmat provides catering services in Noida and Delhi NCR from our established
            restaurant locations — bringing the same kitchen quality trusted since {siteConfig.since}.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <ul className="areas-serve__grid">
            {servedAreas.map((area) => (
              <li key={area.name} className="areas-serve__card">
                <h2 className="areas-serve__name">{area.name}</h2>
                <p className="body-lg areas-serve__text">{area.description}</p>
              </li>
            ))}
          </ul>

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

          <div className="areas-serve__cta">
            <WhatsAppButton message={whatsappMessages.generalCatering}>
              Enquire About Catering
            </WhatsAppButton>
            <Link to="/contact?type=catering" className="btn btn--outline-dark">
              Get a Catering Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
