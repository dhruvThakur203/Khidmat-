import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { GalleryGrid } from '../components/gallery/GalleryGrid';
import { brand } from '../data/brand';
import { SocialLinks } from '../components/ui/SocialLinks';

export function GalleryPage() {
  return (
    <>
      <PageMeta seo={pageSeo.gallery} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Khidmat Gallery</p>
          <h1 className="page-header__title display-lg">Inside Khidmat</h1>
          <p className="page-header__subtitle body-lg">
            Restaurant spaces, celebrations, and moments from our Delhi and Noida locations.
          </p>
        </div>
      </header>

      <section className="section">
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
