import { verifiedProfiles } from '../../../data/businessEntity';
import { getPublishedTestimonials } from '../../../data/testimonials';
import { PlatformIcon } from '../../ui/PlatformIcon';
import { trackConversion } from '../../../utils/analytics';
import { useReveal } from '../../../hooks/useReveal';
import './Testimonials.css';

export function Testimonials() {
  const ref = useReveal();
  const published = getPublishedTestimonials();

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
          <div className="testimonials__empty">
            <p className="body-lg">
              Khidmat has welcomed generations of guests since 1992 — at our restaurant tables
              and at celebrations across Noida and Delhi NCR. Read what guests share on Google,
              or message our team to discuss your event.
            </p>
            <p className="eyebrow" style={{ marginTop: '1.5rem' }}>Find Khidmat on</p>
            <div className="testimonials__actions">
              <a
                href={verifiedProfiles.google.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--trust testimonials__platform-btn"
                onClick={() => trackConversion('google_profile_click', { label: 'testimonials' })}
              >
                <PlatformIcon platform="google" />
                Google Reviews
              </a>
              <a
                href={verifiedProfiles.zomato.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--trust testimonials__platform-btn"
                onClick={() => trackConversion('zomato_click', { label: 'testimonials' })}
              >
                <PlatformIcon platform="zomato" />
                Zomato
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
