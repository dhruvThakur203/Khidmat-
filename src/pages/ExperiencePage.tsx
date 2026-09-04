import { brand } from '../data/brand';
import { useReveal } from '../hooks/useReveal';
import { EditorialImage } from '../components/ui/EditorialImage';
import { Ornament } from '../components/ui/Ornament';

export function ExperiencePage() {
  const ref = useReveal();

  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">The Experience</p>
          <h1 className="page-header__title display-lg">{brand.hospitality.heading}</h1>
          <p className="page-header__subtitle body-lg">{brand.hospitality.body}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="experience-grid reveal" ref={ref}>
            <EditorialImage
              src="/images/delhi/gallery/delhi-02.jpeg"
              alt="Khidmat Delhi lounge seating"
              objectPosition="center center"
              aspectRatio="16/10"
            />
            <div>
              <Ornament />
              <h2 className="display-md">{brand.spirit.title}</h2>
              <p className="body-lg" style={{ marginTop: '1.5rem' }}>
                {brand.spirit.body}
              </p>
              <p className="body-lg" style={{ marginTop: '1rem' }}>
                {brand.spirit.bodySecondary}
              </p>
              <p
                className="body-lg"
                style={{
                  marginTop: '1rem',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  color: 'var(--color-maroon)',
                }}
              >
                {brand.spirit.closing}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="experience-grid experience-grid--reverse">
            <div>
              <h2 className="display-md">{brand.locations.heading}</h2>
              <p className="body-lg" style={{ marginTop: '1.5rem' }}>
                {brand.locations.subtitle}
              </p>
            </div>
            <EditorialImage
              src="/images/delhi/gallery/delhi-01.jpeg"
              alt="Khidmat Delhi bar area"
              objectPosition="center center"
              aspectRatio="4/3"
            />
          </div>
        </div>
      </section>
    </>
  );
}
