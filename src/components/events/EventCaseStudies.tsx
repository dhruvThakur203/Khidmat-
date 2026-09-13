import { getPublishedRealEvents } from '../../data/realEvents';
import { EventCaseStudy } from './EventCaseStudy';
import './EventCaseStudies.css';

interface EventCaseStudiesProps {
  variant?: 'grid' | 'list';
  title?: string;
  intro?: string;
}

export function EventCaseStudies({
  variant = 'list',
  title = 'Real Khidmat Events',
  intro = 'Verified catering events from Khidmat\'s 34+ years of hospitality across Noida and Delhi NCR.',
}: EventCaseStudiesProps) {
  const events = getPublishedRealEvents();

  if (events.length === 0) return null;

  return (
    <section className="section event-case-studies" aria-labelledby="event-case-studies-heading">
      <div className="container">
        <p className="eyebrow">Case studies</p>
        <h2 className="display-md" id="event-case-studies-heading">{title}</h2>
        <p className="body-lg event-case-studies__intro">{intro}</p>

        <div className={variant === 'grid' ? 'event-case-studies__grid' : 'event-case-studies__list'}>
          {events.map((event) => (
            <EventCaseStudy
              key={event.id}
              event={event}
              variant={variant === 'grid' ? 'card' : 'full'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
