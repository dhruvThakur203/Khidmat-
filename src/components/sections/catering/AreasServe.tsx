import { Link } from 'react-router-dom';
import { servedAreas } from '../../../data/catering';
import { useReveal } from '../../../hooks/useReveal';

export function AreasServe() {
  const ref = useReveal();

  return (
    <section className="section section--cream" aria-labelledby="areas-heading">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Service areas</p>
        <h2 className="display-lg" id="areas-heading">
          Catering Across Noida &amp; Delhi NCR
        </h2>
        <ul style={{ marginTop: '1.5rem', display: 'grid', gap: '1rem', maxWidth: '480px' }}>
          {servedAreas.map((area) => (
            <li key={area.name}>
              <strong style={{ fontFamily: 'var(--font-serif)', color: 'var(--color-maroon)' }}>
                {area.name}
              </strong>
              <span style={{ display: 'block', color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>
                {area.description}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: '1.5rem' }}>
          <Link to="/areas-we-serve" className="btn btn--text">View Areas We Serve</Link>
        </div>
      </div>
    </section>
  );
}
