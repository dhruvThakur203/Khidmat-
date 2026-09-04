import type { GalleryImage } from '../../data/gallery';
import './Lightbox.css';

interface LightboxProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  currentIndex: number;
  total: number;
}

export function Lightbox({
  image,
  onClose,
  onNext,
  onPrev,
  currentIndex,
  total,
}: LightboxProps) {
  if (!image) return null;

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${currentIndex + 1} of ${total}: ${image.alt}`}
    >
      <button
        type="button"
        className="lightbox__backdrop"
        onClick={onClose}
        aria-label="Close lightbox"
      />

      <div className="lightbox__content">
        <button
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={onPrev}
          aria-label="Previous image"
        >
          ‹
        </button>

        <figure className="lightbox__figure">
          <img
            src={image.src}
            alt={image.alt}
            className="lightbox__image"
          />
          {image.caption && (
            <figcaption className="lightbox__caption">{image.caption}</figcaption>
          )}
        </figure>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={onNext}
          aria-label="Next image"
        >
          ›
        </button>

        <p className="lightbox__counter" aria-live="polite">
          {currentIndex + 1} / {total}
        </p>
      </div>
    </div>
  );
}
