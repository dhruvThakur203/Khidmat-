import { Link } from 'react-router-dom';
import { mailtoLink, social } from '../data/social';
import { MenuArtwork } from '../components/menu/MenuArtwork';
import './MenuPage.css';

export function MenuPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Our Menu</p>
          <h1 className="page-header__title display-lg">The Khidmat Menu</h1>
          <p className="page-header__subtitle body-lg">
            North Indian and Mughlai favourites — browse our original menu pages below.
          </p>
        </div>
      </header>

      <section className="section section--cream menu-page" aria-label="Menu artwork">
        <div className="container">
          <MenuArtwork variant="page" />

          <div className="menu-page__contact">
            <p className="menu-page__contact-label eyebrow">Enquiries</p>
            <p className="menu-page__contact-text body-lg">
              For reservations, catering, or menu questions, we&apos;re happy to help.
            </p>
            <div className="menu-page__contact-links">
              <a href={mailtoLink} className="menu-page__email">
                {social.email}
              </a>
              <Link to="/contact" className="btn btn--text">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
