import { Link } from 'react-router-dom';
import { MenuArtwork } from '../menu/MenuArtwork';
import { useReveal } from '../../hooks/useReveal';
import './MenuPreview.css';

export function MenuPreview() {
  const ref = useReveal();

  return (
    <section className="section menu-preview" aria-labelledby="menu-preview-heading">
      <div className="container">
        <div className="menu-preview__intro reveal" ref={ref}>
          <p className="eyebrow">Our Menu</p>
          <h2 className="display-lg menu-preview__title" id="menu-preview-heading">
            The Khidmat Menu
          </h2>
          <p className="menu-preview__subtitle body-lg">
            North Indian and Mughlai favourites — browse by category.
          </p>
        </div>

        <MenuArtwork />

        <div className="menu-preview__cta">
          <Link to="/menu" className="btn btn--text">
            View Full Menu
          </Link>
        </div>
      </div>
    </section>
  );
}
