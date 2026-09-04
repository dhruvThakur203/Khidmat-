import { Link } from 'react-router-dom';
import { brand } from '../data/brand';
import { Kitchen } from '../components/sections/Kitchen';
import { useReveal } from '../hooks/useReveal';
import { branches, formatPhoneLink } from '../data/branches';

export function CateringPage() {
  const ref = useReveal();

  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Catering</p>
          <h1 className="page-header__title display-lg">{brand.catering.heading}</h1>
          <p className="page-header__subtitle body-lg">{brand.catering.body}</p>
        </div>
      </header>

      <Kitchen />

      <section className="section">
        <div className="container">
          <div className="catering-categories reveal" ref={ref}>
            <h2 className="display-md" style={{ textAlign: 'center', marginBottom: '2rem' }}>
              Catering Services
            </h2>
            <ul className="catering-categories__list">
              {brand.catering.categories.map((cat) => (
                <li key={cat} className="catering-categories__item">
                  <span>{cat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--maroon" style={{ textAlign: 'center' }}>
        <div className="container">
          <h2 className="display-md">{brand.catering.cta}</h2>
          <p className="body-lg" style={{ marginTop: '1rem', maxWidth: '480px', marginInline: 'auto' }}>
            Reach out to discuss your event. Our team will be happy to assist.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '2rem' }}>
            {branches.noida.whatsapp && (
              <a
                href={`https://wa.me/${branches.noida.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                WhatsApp
              </a>
            )}
            <a href={formatPhoneLink(branches.delhi.phones[0])} className="btn btn--outline">
              Call Delhi
            </a>
            <a href={formatPhoneLink(branches.noida.phones[0])} className="btn btn--outline">
              Call Noida
            </a>
            <Link to="/contact" className="btn btn--primary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
