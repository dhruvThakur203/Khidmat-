import { useCallback, useEffect, useRef, useState } from 'react';
import type { LightboxMedia } from '../../data/gallery';
import './Lightbox.css';

interface LightboxProps {
  image: LightboxMedia | null;
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
  const [closing, setClosing] = useState(false);
  const [displayImage, setDisplayImage] = useState<LightboxMedia | null>(image);

  useEffect(() => {
    if (image) {
      setDisplayImage(image);
      setClosing(false);
    }
  }, [image]);

  const handleClose = useCallback(() => {
    setClosing(true);
    window.setTimeout(() => {
      onClose();
      setClosing(false);
    }, 180);
  }, [onClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || displayImage?.type !== 'video') return;

    video.currentTime = 0;
    void video.play().catch(() => {
      /* Autoplay may be blocked — controls remain available */
    });

    return () => {
      video.pause();
    };
  }, [displayImage?.src, displayImage?.type]);

  if (!displayImage || !image) return null;

  const isVideo = displayImage.type === 'video';

  return (
    <div
      className={`lightbox${closing ? ' lightbox--closing' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label={`${isVideo ? 'Video' : 'Image'} ${currentIndex + 1} of ${total}: ${displayImage.alt}`}
    >
      <button
        type="button"
        className="lightbox__backdrop"
        onClick={handleClose}
        aria-label="Close lightbox"
      />

      <div className="lightbox__content">
        <button
          type="button"
          className="lightbox__close"
          onClick={handleClose}
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
              key={displayImage.src}
              src={displayImage.src}
              poster={displayImage.poster}
              className="lightbox__video"
              controls
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <img
              src={displayImage.src}
              alt={displayImage.alt}
              className="lightbox__image"
            />
          )}
          {displayImage.caption && (
            <figcaption className="lightbox__caption">{displayImage.caption}</figcaption>
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
