import { useEffect, useState, type FormEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { siteConfig } from '../../data/site';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import './ContactEnquiryForm.css';

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Party / Birthday',
  'Private Gathering',
  'Other',
] as const;

export function ContactEnquiryForm() {
  const [searchParams] = useSearchParams();
  const isCatering = searchParams.get('type') === 'catering';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState(isCatering ? 'Wedding' : '');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [location, setLocation] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isCatering) {
      setEventType('Wedding');
    }
  }, [isCatering]);

  useEffect(() => {
    if (searchParams.get('type') === 'catering' || window.location.hash === '#quote') {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchParams]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const url = buildWhatsAppUrl(
      whatsappMessages.quoteEnquiry({
        name: name || '—',
        phone: phone || '—',
        eventType: eventType || '—',
        eventDate: eventDate || '—',
        guestCount: guestCount || '—',
        location: location || '—',
        message,
      }),
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section section--cream contact-enquiry" id="quote" aria-labelledby="quote-heading">
      <div className="container">
        <p className="eyebrow">{isCatering ? 'Catering Enquiry' : 'Enquiry'}</p>
        <h2 className="display-md" id="quote-heading">
          {isCatering ? 'Request a Catering Quote' : 'Get in Touch'}
        </h2>
        <p className="body-lg contact-enquiry__intro">
          Share your event details and our team will help you plan the right menu.
          {siteConfig.openingHours ? ` ${siteConfig.openingHours}.` : ''}
        </p>

        <form className="contact-enquiry__form" onSubmit={handleSubmit} noValidate>
          <div className="contact-enquiry__field">
            <label htmlFor="enquiry-name">Name</label>
            <input
              id="enquiry-name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
              required
            />
          </div>

          <div className="contact-enquiry__field">
            <label htmlFor="enquiry-phone">Phone</label>
            <input
              id="enquiry-phone"
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              autoComplete="tel"
              required
            />
          </div>

          <div className="contact-enquiry__field">
            <label htmlFor="enquiry-event-type">Event Type</label>
            <select
              id="enquiry-event-type"
              name="eventType"
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              required
            >
              <option value="" disabled>Select event type</option>
              {eventTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="contact-enquiry__row">
            <div className="contact-enquiry__field">
              <label htmlFor="enquiry-date">Event Date</label>
              <input
                id="enquiry-date"
                type="date"
                name="eventDate"
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
              />
            </div>

            <div className="contact-enquiry__field">
              <label htmlFor="enquiry-guests">Guest Count</label>
              <input
                id="enquiry-guests"
                type="text"
                name="guestCount"
                value={guestCount}
                onChange={(e) => setGuestCount(e.target.value)}
                placeholder="e.g. 100–250"
              />
            </div>
          </div>

          <div className="contact-enquiry__field">
            <label htmlFor="enquiry-location">Event Location</label>
            <input
              id="enquiry-location"
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Noida, Greater Noida, Delhi NCR"
            />
          </div>

          <div className="contact-enquiry__field">
            <label htmlFor="enquiry-message">Message</label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us about your event, menu preferences or dietary requirements."
            />
          </div>

          <div className="contact-enquiry__actions">
            <button type="submit" className="btn btn--primary">
              Request a Quote
            </button>
            <a
              href={buildWhatsAppUrl(whatsappMessages.cateringQuote)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-dark"
            >
              WhatsApp Us
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
