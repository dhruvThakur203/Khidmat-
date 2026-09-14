import { useEffect, useRef } from 'react';
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || image?.type !== 'video') return;

    video.currentTime = 0;
    void video.play().catch(() => {
      /* Autoplay may be blocked — controls remain available */
    });

    return () => {
      video.pause();
    };
  }, [image?.id, image?.type]);

  if (!image) return null;

  const isVideo = image.type === 'video';

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={`${isVideo ? 'Video' : 'Image'} ${currentIndex + 1} of ${total}: ${image.alt}`}
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
          aria-label={`Previous ${isVideo ? 'item' : 'image'}`}
        >
          ‹
        </button>

        <figure className="lightbox__figure">
          {isVideo ? (
            <video
              ref={videoRef}
              key={image.id}
              src={image.src}
              poster={image.poster}
              className="lightbox__video"
              controls
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={image.src}
              alt={image.alt}
              className="lightbox__image"
            />
          )}
          {image.caption && (
            <figcaption className="lightbox__caption">{image.caption}</figcaption>
          )}
        </figure>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={onNext}
          aria-label={`Next ${isVideo ? 'item' : 'image'}`}
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
