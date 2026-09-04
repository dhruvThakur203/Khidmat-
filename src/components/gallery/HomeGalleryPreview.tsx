import { Link } from 'react-router-dom';
import {
  getGalleryImageById,
  homepageGalleryCurated,
  type GalleryImage,
} from '../../data/gallery';
import { useLightbox } from '../../hooks/useLightbox';
import { useReveal } from '../../hooks/useReveal';
import { Lightbox } from '../ui/Lightbox';
import './HomeGalleryPreview.css';

const curatedImages: GalleryImage[] = homepageGalleryCurated
  .map((id) => getGalleryImageById(id))
  .filter((img): img is GalleryImage => img !== undefined);

export function HomeGalleryPreview() {
  const ref = useReveal();
  const [hero, ...supporting] = curatedImages;
  const { activeIndex, activeImage, open, close, goNext, goPrev } =
    useLightbox(curatedImages);

  if (!hero) return null;

  return (
    <section className="section home-gallery" aria-labelledby="home-gallery-heading">
      <div className="container">
        <div className="home-gallery__header reveal" ref={ref}>
          <p className="eyebrow">Khidmat Gallery</p>
          <h2 className="display-md" id="home-gallery-heading">
            Inside Khidmat
          </h2>
        </div>

        <div className="home-gallery__composition">
          <button
            type="button"
            className="home-gallery__hero"
            onClick={() => open(0)}
            aria-label={`View ${hero.alt}`}
          >
            <img src={hero.src} alt={hero.alt} loading="lazy" decoding="async" />
            {hero.caption && (
              <span className="home-gallery__caption">{hero.caption}</span>
            )}
          </button>

          <div className="home-gallery__supporting">
            {supporting.map((img, i) => (
              <button
                key={img.id}
                type="button"
                className={`home-gallery__thumb home-gallery__thumb--${i + 1}`}
                onClick={() => open(i + 1)}
                aria-label={`View ${img.alt}`}
              >
                <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              </button>
            ))}
          </div>
        </div>

        <div className="home-gallery__cta">
          <Link to="/gallery" className="btn btn--text">
            View Full Gallery
          </Link>
        </div>
      </div>

      <Lightbox
        image={activeImage}
        onClose={close}
        onNext={goNext}
        onPrev={goPrev}
        currentIndex={activeIndex ?? 0}
        total={curatedImages.length}
      />
    </section>
  );
}
