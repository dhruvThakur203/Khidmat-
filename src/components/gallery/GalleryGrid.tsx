import { useState } from 'react';
import {
  filterGallery,
  galleryFilters,
  galleryImages,
  type GalleryFilter,
} from '../../data/gallery';
import { useLightbox } from '../../hooks/useLightbox';
import { Lightbox } from '../ui/Lightbox';
import './GalleryGrid.css';

interface GalleryGridProps {
  limit?: number;
  showFilters?: boolean;
}

export function GalleryGrid({ limit, showFilters = true }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');
  const filtered = filterGallery(galleryImages, activeFilter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;
  const { activeIndex, activeImage, open, close, goNext, goPrev } = useLightbox(displayed);

  return (
    <div className="gallery-grid-wrap">
      {showFilters && (
        <div className="gallery-filters" role="tablist" aria-label="Gallery filters">
          {galleryFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`gallery-filter${activeFilter === filter.id ? ' is-active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      <div className="gallery-masonry" role="list">
        {displayed.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className="gallery-item"
            role="listitem"
            onClick={() => open(index)}
            aria-label={`View ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              decoding="async"
              className="gallery-item__img"
            />
          </button>
        ))}
      </div>

      {displayed.length === 0 && (
        <p className="gallery-empty">No images found for this filter.</p>
      )}

      <Lightbox
        image={activeImage}
        onClose={close}
        onNext={goNext}
        onPrev={goPrev}
        currentIndex={activeIndex ?? 0}
        total={displayed.length}
      />
    </div>
  );
}
