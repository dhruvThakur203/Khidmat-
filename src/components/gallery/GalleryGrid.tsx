import { useState } from 'react';
import {
  filterGallery,
  galleryFilters,
  galleryImages,
  type GalleryFilter,
  type GalleryImage,
} from '../../data/gallery';
import { useLightbox } from '../../hooks/useLightbox';
import { Lightbox } from '../ui/Lightbox';
import './GalleryGrid.css';

interface GalleryGridProps {
  limit?: number;
  showFilters?: boolean;
}

function GalleryThumbnail({ item }: { item: GalleryImage }) {
  const isVideo = item.type === 'video';

  return (
    <div className="gallery-item__media">
      {isVideo ? (
        <video
          src={item.src}
          poster={item.poster}
          muted
          playsInline
          preload="metadata"
          className="gallery-item__img gallery-item__video-thumb"
          aria-hidden="true"
          tabIndex={-1}
        />
      ) : (
        <img
          src={item.src}
          alt={item.alt}
          loading="lazy"
          decoding="async"
          className="gallery-item__img"
        />
      )}
      {isVideo && (
        <span className="gallery-item__play" aria-hidden="true">
          <span className="gallery-item__play-icon" />
        </span>
      )}
    </div>
  );
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
        {displayed.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`gallery-item${item.type === 'video' ? ' gallery-item--video' : ''}`}
            role="listitem"
            onClick={() => open(index)}
            aria-label={`View ${item.caption ?? item.alt}${item.type === 'video' ? ' (video)' : ''}`}
          >
            <GalleryThumbnail item={item} />
          </button>
        ))}
      </div>

      {displayed.length === 0 && (
        <p className="gallery-empty">No gallery items found for this filter.</p>
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
