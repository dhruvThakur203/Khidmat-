import { guestCountOptions } from '../../../data/catering';
import { GuestCountCard } from '../../catering/GuestCountCard';
import { useReveal } from '../../../hooks/useReveal';
import '../../catering/GuestCountCard.css';
import './GuestCountSection.css';

export function GuestCountSection() {
  const ref = useReveal();

  return (
    <section className="section section--cream guest-count" aria-labelledby="guest-count-heading">
      <div className="container reveal" ref={ref}>
        <p className="eyebrow">Plan your event</p>
        <h2 className="display-lg" id="guest-count-heading">
          Catering Designed Around Your Celebration
        </h2>
        <p className="body-lg guest-count__intro">
          Select your approximate guest count — we&apos;ll open WhatsApp with your enquiry ready to send.
        </p>
        <div className="guest-count__grid guest-count-grid guest-count-grid--five">
          {guestCountOptions.map((option) => (
            <GuestCountCard key={option.id} option={option} />
          ))}
        </div>
      </div>
    </section>
  );
}
