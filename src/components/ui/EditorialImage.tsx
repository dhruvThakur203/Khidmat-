import { useState } from 'react';
import './EditorialImage.css';

interface EditorialImageProps {
  src: string;
  alt: string;
  objectPosition?: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export function EditorialImage({
  src,
  alt,
  objectPosition = 'center center',
  className = '',
  aspectRatio,
  priority = false,
}: EditorialImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`editorial-image ${className}${loaded ? ' is-loaded' : ''}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <img
        src={src}
        alt={alt}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        style={{ objectPosition }}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
