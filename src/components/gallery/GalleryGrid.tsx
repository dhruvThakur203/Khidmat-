import { useCallback, useEffect, useRef, useState } from 'react';
import {
  filterGallery,
  galleryCategoryMeta,
  galleryFilters,
  galleryImages,
  type GalleryFilter,
  type GalleryImage,
} from '../../data/gallery';
import { useGalleryItemsReveal } from '../../hooks/useGalleryItemsReveal';
import { useLightbox } from '../../hooks/useLightbox';
import { Lightbox } from '../ui/Lightbox';
import './GalleryGrid.css';

interface GalleryGridProps {
  limit?: number;
  showFilters?: boolean;
}

function getGalleryLayoutClass(index: number): string {
  if (index === 0) return 'gallery-item--featured';
  const mod = index % 6;
  if (mod === 1 || mod === 4) return 'gallery-item--tall';
  if (mod === 3) return 'gallery-item--wide';
  return '';
}

function GalleryThumbnail({
  item,
  eager,
}: {
  item: GalleryImage;
  eager?: boolean;
}) {
  const isVideo = item.type === 'video';
  const categoryLabel = galleryCategoryMeta[item.category]?.filterLabel;

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
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          className="gallery-item__img"
        />
      )}
      <span className="gallery-item__overlay" aria-hidden="true">
        {categoryLabel && (
          <span className="gallery-item__category">{categoryLabel}</span>
        )}
        <span className="gallery-item__expand">View →</span>
      </span>
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
  const [filtering, setFiltering] = useState(false);
  const filterTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const filtered = filterGallery(galleryImages, activeFilter);
  const displayed = limit ? filtered.slice(0, limit) : filtered;
  const gridRef = useGalleryItemsReveal(activeFilter, displayed.length);
  const { activeIndex, activeImage, open, close, goNext, goPrev } = useLightbox(displayed);

  useEffect(() => {
    return () => {
      if (filterTimerRef.current) clearTimeout(filterTimerRef.current);
    };
  }, []);

  const changeFilter = useCallback(
    (filterId: GalleryFilter) => {
      if (filterId === activeFilter || filtering) return;

      setFiltering(true);
      filterTimerRef.current = setTimeout(() => {
        setActiveFilter(filterId);
        setFiltering(false);
      }, 160);
    },
    [activeFilter, filtering],
  );

  const gridClass = [
    'gallery-editorial',
    filtering ? 'gallery-editorial--filtering' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="gallery-grid-wrap">
      {showFilters && (
        <div
          className="gallery-filters"
          role="tablist"
          aria-label="Gallery filters"
        >
          {galleryFilters.map((filter) => (
            <button
              key={filter.id}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter.id}
              className={`gallery-filter${activeFilter === filter.id ? ' is-active' : ''}`}
              onClick={() => changeFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      )}

      <div className={gridClass} role="list" ref={gridRef}>
        {displayed.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className={`gallery-item${item.type === 'video' ? ' gallery-item--video' : ''} ${getGalleryLayoutClass(index)}`}
            role="listitem"
            onClick={() => open(index)}
            aria-label={`View ${item.caption ?? item.alt}${item.type === 'video' ? ' (video)' : ''}`}
          >
            <GalleryThumbnail item={item} eager={index === 0} />
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
