import { useEffect, useRef, useState } from 'react';
import { siteStats } from '../../../data/site';
import { getGoogleProfileUrl, social } from '../../../data/social';
import { useAnimatedNumber } from '../../../hooks/useAnimatedNumber';
import { useReveal } from '../../../hooks/useReveal';
import { formatCompactCount, formatRating } from '../../../utils/formatCount';
import { PlatformIcon } from '../../ui/PlatformIcon';
import './TrustStats.css';

const ANIMATION_MS = 1500;

interface StarRatingProps {
  rating: number;
  platform: string;
}

function StarRating({ rating, platform }: StarRatingProps) {
  const label = `Rated ${formatRating(rating)} out of 5 on ${platform}`;

  return (
    <div className="trust-stat__stars" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(Math.max(rating - i, 0), 1);
        return (
          <span key={i} className="trust-stat__star" aria-hidden="true">
            <span className="trust-stat__star-bg">★</span>
            <span className="trust-stat__star-fill" style={{ width: `${fill * 100}%` }}>
              ★
            </span>
          </span>
        );
      })}
    </div>
  );
}

function YearsStat({ active }: { active: boolean }) {
  const value = useAnimatedNumber({
    end: siteStats.yearsOfExperience,
    enabled: active,
    durationMs: ANIMATION_MS,
  });

  return (
    <div className="trust-stat">
      <p className="trust-stat__number">{value}+</p>
      <p className="trust-stat__label">Years of Hospitality</p>
    </div>
  );
}

interface PlatformRatingStatProps {
  active: boolean;
  platform: 'Google' | 'Zomato';
  platformId: 'google' | 'zomato';
  href: string;
  ariaLabel: string;
  rating: number;
  count: number;
  countLabel: string;
}

function PlatformRatingStat({
  active,
  platform,
  platformId,
  href,
  ariaLabel,
  rating,
  count,
  countLabel,
}: PlatformRatingStatProps) {
  const animatedRating = useAnimatedNumber({
    end: rating,
    enabled: active,
    durationMs: ANIMATION_MS,
    decimals: 1,
  });
  const animatedCount = useAnimatedNumber({
    end: count,
    enabled: active,
    durationMs: ANIMATION_MS,
  });

  const useCompact = count >= 1000;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="trust-stat trust-stat--rating trust-stat__link"
      aria-label={ariaLabel}
    >
      <div className="trust-stat__platform">
        <PlatformIcon platform={platformId} />
        <span className="trust-stat__platform-name">{platform}</span>
      </div>
      <p className="trust-stat__number trust-stat__rating-value">
        {formatRating(animatedRating)}
        <span className="trust-stat__star-icon" aria-hidden="true"> ★</span>
      </p>
      <StarRating rating={rating} platform={platform} />
      <p className="trust-stat__label">{platform} Rating</p>
      <p className="trust-stat__subcount">
        {formatCompactCount(animatedCount, useCompact ? 1000 : Infinity)}+ {countLabel}
      </p>
    </a>
  );
}

function CommunityStat({
  active,
  value,
  label,
  platformId,
  href,
  ariaLabel,
}: {
  active: boolean;
  value: number;
  label: string;
  platformId: 'facebook' | 'instagram';
  href: string;
  ariaLabel: string;
}) {
  const animated = useAnimatedNumber({
    end: value,
    enabled: active,
    durationMs: ANIMATION_MS,
  });

  const platformName = platformId === 'facebook' ? 'Facebook' : 'Instagram';

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="trust-stat trust-stat__link"
      aria-label={ariaLabel}
    >
      <div className="trust-stat__platform">
        <PlatformIcon platform={platformId} />
        <span className="trust-stat__platform-name">{platformName}</span>
      </div>
      <p className="trust-stat__number">{formatCompactCount(animated)}+</p>
      <p className="trust-stat__label">{label}</p>
    </a>
  );
}

export function TrustStats() {
  const ref = useReveal();
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const showGoogle =
    siteStats.google.rating > 0 && siteStats.google.reviewCount > 0;
  const showZomato =
    siteStats.zomato.rating > 0 && siteStats.zomato.reviewCount > 0;

  return (
    <section className="section trust-stats" ref={sectionRef} aria-label="Khidmat trust indicators">
      <div className="container reveal" ref={ref}>
        <div className="trust-stats__grid">
          <YearsStat active={active} />

          {showGoogle && (
            <PlatformRatingStat
              active={active}
              platform="Google"
              platformId="google"
              href={getGoogleProfileUrl()}
              ariaLabel="View Khidmat's Google reviews"
              rating={siteStats.google.rating}
              count={siteStats.google.reviewCount}
              countLabel={siteStats.google.countLabel}
            />
          )}

          {showZomato && (
            <PlatformRatingStat
              active={active}
              platform="Zomato"
              platformId="zomato"
              href={social.zomato}
              ariaLabel="View Khidmat on Zomato"
              rating={siteStats.zomato.rating}
              count={siteStats.zomato.reviewCount}
              countLabel={siteStats.zomato.countLabel}
            />
          )}

          {siteStats.facebookFollowers > 0 && (
            <CommunityStat
              active={active}
              value={siteStats.facebookFollowers}
              label="Facebook Community"
              platformId="facebook"
              href={social.facebook}
              ariaLabel="Visit Khidmat on Facebook"
            />
          )}

          {siteStats.instagramFollowers > 0 && (
            <CommunityStat
              active={active}
              value={siteStats.instagramFollowers}
              label="Instagram Community"
              platformId="instagram"
              href={social.instagram}
              ariaLabel="Visit Khidmat on Instagram"
            />
          )}
        </div>
      </div>
    </section>
  );
}
