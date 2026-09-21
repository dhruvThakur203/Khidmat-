import { verifiedProfiles } from '../../../data/businessEntity';
import { getPublishedTestimonials } from '../../../data/testimonials';
import { siteStats } from '../../../data/site';
import { getGoogleProfileUrl } from '../../../data/social';
import { PlatformIcon } from '../../ui/PlatformIcon';
import { trackConversion } from '../../../utils/analytics';
import { formatCompactCount, formatRating } from '../../../utils/formatCount';
import { useReveal } from '../../../hooks/useReveal';
import './Testimonials.css';

interface PlatformReviewCardProps {
  platform: 'google' | 'zomato';
  href: string;
  rating?: number;
  reviewCount?: number;
  countLabel?: string;
}

function PlatformReviewCard({
  platform,
  href,
  rating,
  reviewCount,
  countLabel,
}: PlatformReviewCardProps) {
  const name = platform === 'google' ? 'Google Reviews' : 'Zomato';
  const hasRating = rating !== undefined && rating > 0;
  const hasCount = reviewCount !== undefined && reviewCount > 0;

  const trackClick = () => {
    trackConversion(platform === 'google' ? 'google_profile_click' : 'zomato_click', {
      label: 'testimonials',
    });
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="platform-review-card"
      onClick={trackClick}
      aria-label={`Read Khidmat reviews on ${platform === 'google' ? 'Google' : 'Zomato'}`}
    >
      <div className="platform-review-card__header">
        <PlatformIcon platform={platform} />
        <span className="platform-review-card__name">{name}</span>
      </div>
      {hasRating && (
        <p className="platform-review-card__rating">
          {formatRating(rating)}
          <span className="platform-review-card__star" aria-hidden="true"> ★</span>
        </p>
      )}
      {hasCount && countLabel && (
        <p className="platform-review-card__count">
          {formatCompactCount(reviewCount, reviewCount >= 1000 ? 1000 : Infinity)}+ {countLabel}
        </p>
      )}
      <p className="platform-review-card__cta">Read reviews →</p>
    </a>
  );
}

export function Testimonials() {
  const ref = useReveal();
  const published = getPublishedTestimonials();

  const showGoogle =
    siteStats.google.rating > 0 && siteStats.google.reviewCount > 0;
  const showZomato =
    siteStats.zomato.rating > 0 && siteStats.zomato.reviewCount > 0;

  return (
    <section className="section testimonials" aria-labelledby="testimonials-heading">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Reviews &amp; testimonials</p>
        <h2 className="display-lg" id="testimonials-heading">
          What Our Guests Say
        </h2>

        {published.length > 0 ? (
          <div className="testimonials__grid">
            {published.map((item) => (
              <blockquote key={item.id} className="testimonial-card">
                <p className="testimonial-card__quote">&ldquo;{item.quote}&rdquo;</p>
                <footer className="testimonial-card__footer">
                  <cite className="testimonial-card__author">{item.author}</cite>
                  <p className="testimonial-card__context">{item.context}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : (
          <div className="testimonials__platform">
            <p className="body-lg testimonials__platform-lead">
              Khidmat has welcomed generations of guests since 1992 — at our restaurant tables
              and at celebrations across Noida and Delhi NCR. Read what guests share on Google
              and Zomato.
            </p>
            <div className="testimonials__platform-grid">
              {showGoogle && (
                <PlatformReviewCard
                  platform="google"
                  href={getGoogleProfileUrl()}
                  rating={siteStats.google.rating}
                  reviewCount={siteStats.google.reviewCount}
                  countLabel={siteStats.google.countLabel}
                />
              )}
              {showZomato && (
                <PlatformReviewCard
                  platform="zomato"
                  href={verifiedProfiles.zomato.url}
                  rating={siteStats.zomato.rating}
                  reviewCount={siteStats.zomato.reviewCount}
                  countLabel={siteStats.zomato.countLabel}
                />
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
