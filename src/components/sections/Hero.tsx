import { useEffect, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { brand } from '../../data/brand';
import { cinematicIntro } from '../../data/cinematicIntro';
import { heroImage } from '../../data/heritage';
import { useCinematicIntro } from '../../hooks/useCinematicIntro';
import { CinematicFrame } from '../ui/CinematicFrame';
import './Hero.css';

export function Hero() {
  const {
    skipIntro,
    phase,
    frameIndex,
    heroVisible,
    textStep,
    skipToHero,
  } = useCinematicIntro();

  const showIntro = !skipIntro && phase !== 'hero';
  const showHeroPhoto = skipIntro || phase === 'transition' || phase === 'hero';
  const showHeroContent = skipIntro || (phase === 'hero' && heroVisible);

  const isIntroActive = !skipIntro && phase !== 'hero';

  useEffect(() => {
    if (isIntroActive) {
      document.documentElement.setAttribute('data-cinematic', 'true');
    } else {
      document.documentElement.removeAttribute('data-cinematic');
    }
    return () => document.documentElement.removeAttribute('data-cinematic');
  }, [isIntroActive]);

  useEffect(() => {
    if (skipIntro) return;

    const events = ['wheel', 'touchstart', 'keydown', 'scroll'] as const;
    const handler = () => skipToHero();

    events.forEach((e) => window.addEventListener(e, handler, { passive: true }));
    return () => events.forEach((e) => window.removeEventListener(e, handler));
  }, [skipIntro, skipToHero]);

  return (
    <section
      className="hero"
      aria-label="Welcome"
      onClick={skipIntro ? undefined : skipToHero}
    >
      {!skipIntro && (
        <div
          className={`hero__intro${showIntro ? ' is-active' : ''}${phase === 'transition' ? ' is-exiting' : ''}`}
          aria-hidden={!showIntro && phase !== 'transition'}
        >
          {cinematicIntro.map((frame, i) => (
            <div
              key={frame.id}
              className={`hero__intro-frame${i === frameIndex && showIntro ? ' is-visible' : ''}${i < frameIndex ? ' is-past' : ''}`}
            >
              <CinematicFrame frame={frame} />
            </div>
          ))}
        </div>
      )}

      <div
        className={`hero__media${showHeroPhoto ? ' is-visible' : ''}${phase === 'transition' ? ' is-entering' : ''}`}
        style={{
          '--hero-pos-desktop': heroImage.positions.desktop,
          '--hero-pos-tablet': heroImage.positions.tablet ?? heroImage.positions.desktop,
          '--hero-pos-mobile': heroImage.positions.mobile,
        } as CSSProperties}
      >
        <img
          src={heroImage.src}
          alt={heroImage.alt}
          className="hero__image"
          fetchPriority="high"
          decoding="async"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      <div className={`hero__content${showHeroContent ? ' is-visible' : ''}`}>
        <div className="hero__content-inner">
          <p className={`hero__since${textStep >= 1 ? ' is-revealed' : ''}`}>{brand.since}</p>
          <h1 className={`hero__title${textStep >= 2 ? ' is-revealed' : ''}`}>{brand.name}</h1>
          <p className={`hero__tagline${textStep >= 3 ? ' is-revealed' : ''}`}>{brand.tagline}</p>
          <p className={`hero__quote${textStep >= 4 ? ' is-revealed' : ''}`}>
            &ldquo;{brand.heroQuote}&rdquo;
          </p>
          <div className={`hero__actions${textStep >= 5 ? ' is-revealed' : ''}`}>
            <Link to="/menu" className="btn btn--primary btn--compact" onClick={(e) => e.stopPropagation()}>
              Explore the Menu
            </Link>
            <Link to="/our-story" className="btn btn--outline btn--compact" onClick={(e) => e.stopPropagation()}>
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
