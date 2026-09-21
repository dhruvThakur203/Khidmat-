import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { brand } from '../data/brand';
import { pageSeo } from '../data/seo';
import { siteConfig, siteStats } from '../data/site';
import { PlatformProfiles } from '../components/trust/PlatformProfiles';
import { AwardRecognition } from '../components/heritage/AwardRecognition';
import { FssaiTrust } from '../components/trust/FssaiTrust';
import { HeritageTimeline } from '../components/heritage/HeritageTimeline';
import { PremiumPageCta } from '../components/sections/PremiumPageCta';
import { EditorialProofList } from '../components/ui/EditorialProofList';
import { useReveal } from '../hooks/useReveal';
import { DelhiSilhouette } from '../components/ui/DelhiSilhouette';
import { Ornament } from '../components/ui/Ornament';
import { EditorialImage } from '../components/ui/EditorialImage';
import './AboutKhidmatPage.css';

const aboutTrustItems = [
  `${siteStats.yearsOfExperience}+ years of hospitality since ${siteConfig.since}`,
  'Restaurant dining in Delhi and Noida',
  'Professional catering across Noida and Delhi NCR',
  'Food prepared from Khidmat\'s established kitchen',
  'Real events — weddings, corporate functions and celebrations',
] as const;

export function AboutKhidmatPage() {
  const ref = useReveal();

  return (
    <>
      <PageMeta seo={pageSeo.about} />
      <header className="page-header page-header--editorial page-enter">
        <div className="container">
          <p className="eyebrow">About Khidmat</p>
          <h1 className="page-header__title display-lg">A Legacy of Taste &amp; Hospitality Since 1992</h1>
          <p className="page-header__subtitle body-lg">{brand.brandStatement}</p>
          <div className="editorial-rule page-header__rule" aria-hidden="true" />
        </div>
      </header>

      <section className="section section--compact">
        <div className="container">
          <div className="about-heritage reveal" ref={ref}>
            <div className="about-heritage__copy">
              <p className="eyebrow">Heritage</p>
              <p className="about-heritage__year" aria-hidden="true">{siteConfig.since}</p>
              <p className="about-heritage__since">Since {siteConfig.since}</p>
              <div className="about-heritage__connector" aria-hidden="true">
                <span className="about-heritage__line" />
                <span className="about-heritage__diamond" />
              </div>
              <Ornament />
              <h2 className="display-md">{brand.legacy.statement}</h2>
              <p className="body-lg about-heritage__para">{brand.legacy.intro}</p>
              <p className="body-lg about-heritage__para">{brand.legacy.body}</p>
              <p className="body-lg about-heritage__closing">{brand.legacy.closing}</p>
            </div>
            <EditorialImage
              src="/images/noida/gallery/noida-01.jpeg"
              alt="Khidmat Noida dining area"
              objectPosition="center 30%"
              aspectRatio="4/5"
            />
          </div>
          <div className="about-heritage__silhouette">
            <DelhiSilhouette />
          </div>
        </div>
      </section>

      <section className="section section--dark section--compact about-trust">
        <div className="container about-trust__inner">
          <p className="eyebrow">Why guests trust Khidmat</p>
          <h2 className="display-md">Experience You Can See</h2>
          <EditorialProofList items={aboutTrustItems} variant="dark" />
          <p className="about-trust__link">
            <Link to="/events" className="btn btn--text">View Events &amp; Gallery</Link>
          </p>
        </div>
      </section>

      <FssaiTrust />

      <AwardRecognition />

      <HeritageTimeline />

      <section className="section section--cream section--compact">
        <div className="container about-dual">
          <p className="eyebrow">Restaurant &amp; Catering</p>
          <h2 className="display-md">One Brand, Two Experiences</h2>
          <div className="editorial-rule" aria-hidden="true" />
          <p className="body-lg about-dual__text">
            Khidmat is an established hospitality brand since {siteConfig.since}. Guests know us
            for warm restaurant dining in Delhi and Noida — and for bringing that same kitchen
            quality to weddings, corporate events, parties and private gatherings through our
            catering services in Noida and Delhi NCR.
          </p>
          <div className="about-dual__actions">
            <Link to="/restaurant" className="btn btn--outline-dark">Visit Our Restaurants</Link>
            <Link to="/noida-catering" className="btn btn--primary btn--compact">Explore Catering</Link>
            <Link to="/contact" className="btn btn--text">Contact Us</Link>
          </div>
        </div>
      </section>

      <PremiumPageCta ctaLocation="about-page-cta" showCateringLink={false} />

      <section className="section section--compact">
        <div className="container">
          <PlatformProfiles />
        </div>
      </section>
    </>
  );
}
