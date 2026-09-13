import { whyKhidmatBenefits } from '../../../data/catering';
import { useReveal } from '../../../hooks/useReveal';
import './WhyKhidmat.css';

export function WhyKhidmat() {
  const ref = useReveal();

  return (
    <section className="section why-khidmat" aria-labelledby="why-khidmat-heading">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Why Khidmat</p>
        <h2 className="display-lg" id="why-khidmat-heading">
          Why Families &amp; Businesses Have Trusted Khidmat Since 1992
        </h2>
        <ul className="why-khidmat__list">
          {whyKhidmatBenefits.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
