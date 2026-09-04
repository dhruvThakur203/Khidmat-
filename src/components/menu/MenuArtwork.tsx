import { useMemo } from 'react';
import type { GalleryImage } from '../../data/gallery';
import { menuArtworkCategories } from '../../data/menu';
import { useLightbox } from '../../hooks/useLightbox';
import { Lightbox } from '../ui/Lightbox';
import './MenuArtwork.css';

interface MenuArtworkProps {
  variant?: 'preview' | 'page';
}

function toLightboxImages(): GalleryImage[] {
  return menuArtworkCategories.map((category) => ({
    id: category.id,
    src: category.image,
    branch: 'delhi',
    category: 'food',
    alt: category.alt,
    caption: category.label,
  }));
}

export function MenuArtwork({ variant = 'preview' }: MenuArtworkProps) {
  const lightboxImages = useMemo(() => toLightboxImages(), []);
  const { activeIndex, activeImage, open, close, goNext, goPrev } =
    useLightbox(lightboxImages);

  return (
    <div className={`menu-artwork-gallery menu-artwork-gallery--${variant}`}>
      <div className="menu-artwork-gallery__grid" role="list">
        {menuArtworkCategories.map((category, index) => (
          <article key={category.id} className="menu-artwork-card" role="listitem">
            <h3 className="menu-artwork-card__title">{category.label}</h3>
            <button
              type="button"
              className="menu-artwork-card__preview"
              onClick={() => open(index)}
              aria-label={`View ${category.label} menu`}
            >
              <img
                src={category.image}
                alt={category.alt}
                className="menu-artwork-card__image"
                loading="lazy"
                decoding="async"
              />
            </button>
          </article>
        ))}
      </div>

      <Lightbox
        image={activeImage}
        onClose={close}
        onNext={goNext}
        onPrev={goPrev}
        currentIndex={activeIndex ?? 0}
        total={lightboxImages.length}
      />
    </div>
  );
}
