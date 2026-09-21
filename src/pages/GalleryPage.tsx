import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { brand } from '../data/brand';
import { SocialLinks } from '../components/ui/SocialLinks';
import './GalleryPage.css';

export function GalleryPage() {
  return (
    <>
      <PageMeta seo={pageSeo.gallery} />
      <header className="page-header page-header--editorial page-enter">
        <div className="container">
          <p className="eyebrow">Khidmat Gallery</p>
          <h1 className="page-header__title display-lg">Inside Khidmat</h1>
          <p className="page-header__subtitle body-lg">
            A closer look at the food, people and celebrations that make every Khidmat experience special — from
            weddings and private gatherings to institutional events and professional catering setups.
          </p>
          <div className="editorial-rule page-header__rule" aria-hidden="true" />
        </div>
      </header>

      <section className="section section--compact gallery-page__grid">
        <div className="container">
          <GalleryGrid />
        </div>
      </section>

      <section className="section section--cream contact-social">
        <div className="container">
          <p className="eyebrow">{brand.contact.followLabel}</p>
          <SocialLinks variant="page" />
        </div>
      </section>
    </>
  );
}
