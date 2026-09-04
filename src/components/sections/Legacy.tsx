import { brand } from '../../data/brand';
import { legacyOriginal } from '../../data/heritage';
import { useReveal } from '../../hooks/useReveal';
import './Legacy.css';

export function Legacy() {
  const ref = useReveal();

  return (
    <section className="section legacy" aria-labelledby="legacy-heading">
      <div className="container">
        <div className="legacy__grid reveal" ref={ref}>
          <div className="legacy__text">
            <p className="eyebrow" id="legacy-heading">{brand.legacy.title}</p>
            <h2 className="legacy__statement display-lg">{brand.legacy.statement}</h2>
            <div className="separator" />
            <p className="legacy__body body-lg">{brand.legacy.intro}</p>
            <p className="legacy__body body-lg">{brand.legacy.body}</p>
            <p className="legacy__closing">{brand.legacy.closing}</p>
          </div>
          <figure className="legacy__archive">
            <img
              src={legacyOriginal.src}
              alt={legacyOriginal.alt}
              className="legacy__original"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
