import './LegacyPicture.css';

interface LegacyPictureProps {
  desktopSrc: string;
  mobileSrc: string;
  alt: string;
  className?: string;
  layout?: 'cinematic' | 'inline';
  loading?: 'eager' | 'lazy';
}

export function LegacyPicture({
  desktopSrc,
  mobileSrc,
  alt,
  className = '',
  layout = 'inline',
  loading = 'lazy',
}: LegacyPictureProps) {
  return (
    <picture className={`legacy-picture legacy-picture--${layout} ${className}`}>
      <source media="(max-width: 767px)" srcSet={mobileSrc} type="image/webp" />
      <img
        src={desktopSrc}
        alt={alt}
        className="legacy-picture__img"
        loading={loading}
        decoding="async"
      />
    </picture>
  );
}
