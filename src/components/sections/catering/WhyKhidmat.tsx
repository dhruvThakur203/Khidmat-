import { homeWhyPillars } from '../../../data/catering';
import { useReveal } from '../../../hooks/useReveal';
import './WhyKhidmat.css';

export function WhyKhidmat() {
  const ref = useReveal();

  return (
    <section className="section why-khidmat" aria-labelledby="why-khidmat-heading">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Why Khidmat</p>
        <h2 className="display-lg" id="why-khidmat-heading">
          Why Choose Khidmat?
        </h2>
        <div className="why-khidmat__grid">
          {homeWhyPillars.map((pillar) => (
            <article key={pillar.id} className="why-khidmat__card">
              <h3 className="why-khidmat__card-title">{pillar.title}</h3>
              <p className="why-khidmat__card-text">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
