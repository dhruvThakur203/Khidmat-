import { PageMeta } from '../components/seo/PageMeta';
import { servedAreas } from '../data/catering';
import { pageSeo } from '../data/seo';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { whatsappMessages } from '../utils/whatsapp';

export function AreasWeServePage() {
  return (
    <>
      <PageMeta seo={pageSeo.areas} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Areas we serve</p>
          <h1 className="page-header__title display-lg">Catering Across Noida &amp; Delhi NCR</h1>
          <p className="page-header__subtitle body-lg">
            Khidmat serves celebrations and corporate events across Noida, Greater Noida and Delhi NCR from our established restaurant locations.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <ul style={{ display: 'grid', gap: '1.5rem', maxWidth: '560px' }}>
            {servedAreas.map((area) => (
              <li key={area.name} style={{ paddingBottom: '1rem', borderBottom: '1px solid rgba(166,139,91,0.15)' }}>
                <h2 className="display-md" style={{ fontSize: '1.5rem', color: 'var(--color-maroon)' }}>{area.name}</h2>
                <p className="body-lg" style={{ marginTop: '0.35rem' }}>{area.description}</p>
              </li>
            ))}
          </ul>
          <div style={{ marginTop: '2rem' }}>
            <WhatsAppButton message={whatsappMessages.generalCatering}>Enquire About Catering</WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
