import { brand } from '../data/brand';
import { useReveal } from '../hooks/useReveal';
import { DelhiSilhouette } from '../components/ui/DelhiSilhouette';
import { Ornament } from '../components/ui/Ornament';
import { EditorialImage } from '../components/ui/EditorialImage';

export function StoryPage() {
  const ref = useReveal();

  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Our Story</p>
          <h1 className="page-header__title display-lg">{brand.since}</h1>
          <p className="page-header__subtitle body-lg">{brand.brandStatement}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="story-grid reveal" ref={ref}>
            <div className="story-text">
              <Ornament />
              <h2 className="display-md">{brand.legacy.statement}</h2>
              <p className="body-lg" style={{ marginTop: '1.5rem' }}>
                {brand.legacy.intro}
              </p>
              <p className="body-lg" style={{ marginTop: '1rem' }}>
                {brand.legacy.body}
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
                {brand.legacy.closing}
              </p>
            </div>
            <EditorialImage
              src="/images/noida/gallery/noida-01.jpeg"
              alt="Khidmat Noida dining area"
              objectPosition="center 30%"
              aspectRatio="4/5"
            />
          </div>
          <div style={{ marginTop: 'var(--space-lg)' }}>
            <DelhiSilhouette />
          </div>
        </div>
      </section>
    </>
  );
}
