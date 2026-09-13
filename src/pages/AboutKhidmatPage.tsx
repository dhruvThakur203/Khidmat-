import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { brand } from '../data/brand';
import { pageSeo } from '../data/seo';
import { siteConfig, siteStats } from '../data/site';
import { PlatformProfiles } from '../components/trust/PlatformProfiles';
import { HeritageTimeline } from '../components/heritage/HeritageTimeline';
import { useReveal } from '../hooks/useReveal';
import { DelhiSilhouette } from '../components/ui/DelhiSilhouette';
import { Ornament } from '../components/ui/Ornament';
import { EditorialImage } from '../components/ui/EditorialImage';

export function AboutKhidmatPage() {
  const ref = useReveal();

  return (
    <>
      <PageMeta seo={pageSeo.about} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">About Khidmat</p>
          <h1 className="page-header__title display-lg">A Legacy of Taste &amp; Hospitality Since 1992</h1>
          <p className="page-header__subtitle body-lg">{brand.brandStatement}</p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="story-grid reveal" ref={ref}>
            <div className="story-text">
              <Ornament />
              <h2 className="display-md">{brand.legacy.statement}</h2>
              <p className="body-lg" style={{ marginTop: '1.5rem' }}>{brand.legacy.intro}</p>
              <p className="body-lg" style={{ marginTop: '1rem' }}>{brand.legacy.body}</p>
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
          <div style={{ marginTop: '4rem' }}>
            <DelhiSilhouette />
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container" style={{ maxWidth: '640px' }}>
          <p className="eyebrow">Why guests trust Khidmat</p>
          <h2 className="display-md">Experience You Can See</h2>
          <ul className="about-trust__list body-lg" style={{ marginTop: '1.25rem' }}>
            <li>{siteStats.yearsOfExperience}+ years of hospitality since {siteConfig.since}</li>
            <li>Restaurant dining in Delhi and Noida</li>
            <li>Professional catering across Noida and Delhi NCR</li>
            <li>Food prepared from Khidmat&apos;s established kitchen</li>
            <li>Real events — weddings, corporate functions and celebrations</li>
          </ul>
          <p className="body-lg" style={{ marginTop: '1.25rem' }}>
            <Link to="/events" className="btn btn--text">View Events &amp; Gallery</Link>
          </p>
        </div>
      </section>

      <HeritageTimeline />

      <section className="section section--cream">
        <div className="container" style={{ maxWidth: '640px' }}>
          <p className="eyebrow">Restaurant &amp; Catering</p>
          <h2 className="display-md">One Brand, Two Experiences</h2>
          <p className="body-lg" style={{ marginTop: '1rem' }}>
            Khidmat is an established hospitality brand since {siteConfig.since}. Guests know us
            for warm restaurant dining in Delhi and Noida — and for bringing that same kitchen
            quality to weddings, corporate events, parties and private gatherings through our
            catering services in Noida and Delhi NCR.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
            <Link to="/restaurant" className="btn btn--outline-dark">Visit Our Restaurants</Link>
            <Link to="/noida-catering" className="btn btn--primary btn--compact">Explore Catering</Link>
            <Link to="/contact" className="btn btn--text">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <PlatformProfiles />
        </div>
      </section>
    </>
  );
}
