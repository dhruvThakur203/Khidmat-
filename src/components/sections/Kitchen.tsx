import { Link } from 'react-router-dom';
import { brand } from '../../data/brand';
import { kitchenVideo } from '../../data/heritage';
import { useReveal } from '../../hooks/useReveal';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import './Kitchen.css';

export function Kitchen() {
  const ref = useReveal();
  const reducedMotion = usePrefersReducedMotion();

  return (
    <section className="section section--dark kitchen" aria-labelledby="kitchen-heading">
      <div className="container">
        <div className="kitchen__grid">
          <div className="kitchen__text reveal" ref={ref}>
            <h2 className="display-md" id="kitchen-heading">
              {brand.kitchen.heading}
            </h2>
            <p className="body-lg kitchen__body">{brand.kitchen.body}</p>
            <p className="body-lg kitchen__body">{brand.kitchen.bodySecondary}</p>
            <div className="kitchen__stats">
              <p className="kitchen__stat">{brand.kitchen.size}</p>
              <p className="kitchen__stat-label">{brand.kitchen.label}</p>
              <p className="kitchen__stat-location">{brand.kitchen.location}</p>
            </div>
          </div>

          <div className="kitchen__video-wrap">
            <video
              className="kitchen__video"
              src={kitchenVideo.src}
              poster={kitchenVideo.poster}
              autoPlay={!reducedMotion}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={kitchenVideo.alt}
              controls
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CateringPreview() {
  const ref = useReveal();

  return (
    <section className="section section--maroon catering-preview" aria-labelledby="catering-heading">
      <div className="container">
        <div className="catering-preview__inner reveal" ref={ref}>
          <div className="catering-preview__text">
            <h2 className="display-md" id="catering-heading">
              {brand.catering.heading}
            </h2>
            <p className="body-lg">{brand.catering.body}</p>
            <ul className="catering-preview__categories">
              {brand.catering.categories.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
            <Link to="/catering" className="btn btn--outline" style={{ marginTop: '1.5rem' }}>
              {brand.catering.cta}
            </Link>
          </div>
          <div className="catering-preview__image">
            <img
              src="/images/delhi/gallery/delhi-05.jpeg"
              alt="Khidmat Delhi celebration and event space"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
