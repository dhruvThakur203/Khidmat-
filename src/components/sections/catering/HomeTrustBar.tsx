import { homeTrustBarItems } from '../../../data/catering';
import './HomeTrustBar.css';

export function HomeTrustBar() {
  return (
    <section className="home-trust-bar" aria-label="Khidmat credentials">
      <div className="container">
        <ul className="home-trust-bar__list">
          {homeTrustBarItems.map((item) => (
            <li key={item} className="home-trust-bar__item">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
