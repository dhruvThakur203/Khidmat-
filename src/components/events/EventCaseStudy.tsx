import { Link } from 'react-router-dom';
import type { RealEvent } from '../../data/realEvents';
import { realEventTypeLabels } from '../../data/realEvents';
import { QuoteCtaLink } from '../analytics/QuoteCtaLink';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { whatsappMessages } from '../../utils/whatsapp';
import './EventCaseStudy.css';

interface EventCaseStudyProps {
  event: RealEvent;
  variant?: 'card' | 'full';
}

function EventMeta({ event }: { event: RealEvent }) {
  const parts = [
    realEventTypeLabels[event.eventType],
    event.locationArea,
    event.dateLabel,
    event.guestCountLabel,
  ].filter(Boolean);

  return <p className="event-case-study__meta">{parts.join(' · ')}</p>;
}

export function EventCaseStudy({ event, variant = 'full' }: EventCaseStudyProps) {
  const primaryImage = event.images[0];
  const servicePath = event.serviceSlug ? `/${event.serviceSlug}` : '/noida-catering';

  if (variant === 'card') {
    return (
      <article className="event-case-study event-case-study--card" id={event.slug}>
        <Link to={`/events#${event.slug}`} className="event-case-study__card-link">
          {primaryImage && (
            <div className="event-case-study__image-wrap">
              <img src={primaryImage.src} alt={primaryImage.alt} loading="lazy" decoding="async" />
            </div>
          )}
          <div className="event-case-study__card-body">
            <EventMeta event={event} />
            <h3 className="event-case-study__title">{event.title}</h3>
            <p className="event-case-study__story">{event.story}</p>
          </div>
        </Link>
      </article>
    );
  }

  return (
    <article className="event-case-study event-case-study--full" id={event.slug}>
      <header className="event-case-study__header">
        <p className="eyebrow">Real event</p>
        <h2 className="display-md event-case-study__title">{event.title}</h2>
        <EventMeta event={event} />
        <p className="body-lg event-case-study__story">{event.story}</p>
      </header>

      {event.images.length > 0 && (
        <div className={`event-case-study__gallery event-case-study__gallery--${Math.min(event.images.length, 3)}`}>
          {event.images.map((image) => (
            <figure key={image.src} className="event-case-study__figure">
              <img src={image.src} alt={image.alt} loading="lazy" decoding="async" />
              {image.caption && <figcaption>{image.caption}</figcaption>}
            </figure>
          ))}
        </div>
      )}

      <div className="event-case-study__details">
        {event.cateringRequirements && event.cateringRequirements.length > 0 && (
          <div className="event-case-study__block">
            <h3 className="event-case-study__subhead">Catering requirements</h3>
            <ul>
              {event.cateringRequirements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {(event.foodHighlights ?? event.menuHighlights) && (
          <div className="event-case-study__block">
            <h3 className="event-case-study__subhead">Food &amp; service highlights</h3>
            <ul>
              {(event.foodHighlights ?? []).map((item) => (
                <li key={item}>{item}</li>
              ))}
              {(event.menuHighlights ?? []).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {event.serviceDescription && (
          <p className="body-lg event-case-study__service">{event.serviceDescription}</p>
        )}
      </div>

      <div className="event-case-study__actions">
        <Link to={servicePath} className="btn btn--text">
          Related: {realEventTypeLabels[event.eventType]} catering →
        </Link>
        <div className="event-case-study__cta-row">
          <QuoteCtaLink ctaLocation="event-case-study" cateringType={event.eventType} className="btn btn--primary">
            Get a Catering Quote
          </QuoteCtaLink>
          <WhatsAppButton
            message={whatsappMessages.generalCatering}
            ctaLocation="event-case-study"
            cateringType={event.eventType}
          >
            WhatsApp Khidmat
          </WhatsAppButton>
        </div>
      </div>
    </article>
  );
}
