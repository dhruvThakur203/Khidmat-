import { homeWhyPillars } from '../../../data/catering';
import { useReveal } from '../../../hooks/useReveal';
import { editorialIndex } from '../../../utils/editorialIndex';
import './WhyKhidmat.css';

export function WhyKhidmat() {
  const headerRef = useReveal();
  const gridRef = useReveal();

  return (
    <section className="section why-khidmat" aria-labelledby="why-khidmat-heading">
      <div className="container">
        <div className="reveal" ref={headerRef}>
          <p className="eyebrow">Why Khidmat</p>
          <h2 className="display-lg" id="why-khidmat-heading">
            Why Choose Khidmat?
          </h2>
        </div>
        <div className="why-khidmat__grid reveal reveal-stagger" ref={gridRef}>
          {homeWhyPillars.map((pillar, index) => (
            <article key={pillar.id} className="why-khidmat__card reveal-stagger__item">
              <span className="editorial-index why-khidmat__index" aria-hidden="true">
                {editorialIndex(index)}
              </span>
              <span className="why-khidmat__card-rule" aria-hidden="true" />
              <h3 className="why-khidmat__card-title">{pillar.title}</h3>
              <p className="why-khidmat__card-text">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
