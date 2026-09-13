import { useEffect, useRef, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { guestCountTiers } from '../../data/guestCountTiers';
import { siteConfig } from '../../data/site';
import {
  trackCateringFormStart,
  trackCateringFormSubmit,
  trackConversion,
} from '../../utils/analytics';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import './ContactEnquiryForm.css';

const eventTypes = [
  'Wedding',
  'Corporate Event',
  'Party / Birthday',
  'Private Gathering',
  'Other',
] as const;

const restaurantBranches = ['Kalkaji, Delhi', 'Sector 50, Noida', 'Not sure'] as const;

type EnquiryType = 'catering' | 'restaurant';

export function ContactEnquiryForm() {
  const [searchParams] = useSearchParams();
  const typeParam = searchParams.get('type');
  const enquiryType: EnquiryType =
    typeParam === 'restaurant' ? 'restaurant' : 'catering';

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Wedding');
  const [eventDate, setEventDate] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [location, setLocation] = useState('');
  const [branch, setBranch] = useState('');
  const [message, setMessage] = useState('');
  const formStartedRef = useRef(false);

  const handleFormInteraction = () => {
    if (!formStartedRef.current && enquiryType === 'catering') {
      formStartedRef.current = true;
      trackCateringFormStart({ label: eventType || 'catering' });
    }
  };

  useEffect(() => {
    if (searchParams.get('type') === 'catering' || window.location.hash === '#quote') {
      document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [searchParams]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const isCatering = enquiryType === 'catering';
    if (isCatering) {
      trackCateringFormSubmit({
        label: eventType || 'catering',
        guestCountTier: guestCount || undefined,
        cateringType: eventType || undefined,
      });
    } else {
      trackConversion('contact_form_submit', { label: 'restaurant' });
    }

    const url = buildWhatsAppUrl(
      isCatering
        ? whatsappMessages.quoteEnquiry({
            name: name || '—',
            phone: phone || '—',
            eventType: eventType || '—',
            eventDate: eventDate || '—',
            guestCount: guestCount || '—',
            location: location || '—',
            message,
          })
        : whatsappMessages.restaurantEnquiry({
            name: name || '—',
            phone: phone || '—',
            branch: branch || '—',
            message,
          }),
    );
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const isCatering = enquiryType === 'catering';

  return (
    <section className="section section--cream contact-enquiry" id="quote" aria-labelledby="quote-heading">
      <div className="container">
        <p className="eyebrow">{isCatering ? 'Catering Enquiry' : 'Restaurant Enquiry'}</p>
        <h2 className="display-md" id="quote-heading">
          {isCatering ? 'Request a Catering Quote' : 'Restaurant Reservation Enquiry'}
        </h2>
        <p className="body-lg contact-enquiry__intro">
          {isCatering
            ? 'Share your event details and our team will help you plan the right catering menu.'
            : 'Share your dining enquiry and our team will assist with reservations or restaurant information.'}
          {siteConfig.openingHours ? ` ${siteConfig.openingHours}.` : ''}
        </p>

        <div className="contact-enquiry__type-switch" role="navigation" aria-label="Enquiry type">
          <Link
            to="/contact?type=catering#quote"
            className={isCatering ? 'contact-enquiry__type-link is-active' : 'contact-enquiry__type-link'}
            aria-current={isCatering ? 'page' : undefined}
          >
            Catering Enquiry
          </Link>
          <Link
            to="/contact?type=restaurant#quote"
            className={!isCatering ? 'contact-enquiry__type-link is-active' : 'contact-enquiry__type-link'}
            aria-current={!isCatering ? 'page' : undefined}
          >
            Restaurant Enquiry
          </Link>
        </div>

        <form
          className="contact-enquiry__form"
          onSubmit={handleSubmit}
          onFocus={handleFormInteraction}
          onChange={handleFormInteraction}
          noValidate
        >
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

          {isCatering ? (
            <>
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
                  <label htmlFor="enquiry-guests">Approximate Guest Count</label>
                  <select
                    id="enquiry-guests"
                    name="guestCount"
                    value={guestCount}
                    onChange={(e) => setGuestCount(e.target.value)}
                  >
                    <option value="">Select range</option>
                    {guestCountTiers.map((tier) => (
                      <option key={tier.id} value={tier.range}>{tier.range} guests</option>
                    ))}
                  </select>
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
            </>
          ) : (
            <div className="contact-enquiry__field">
              <label htmlFor="enquiry-branch">Preferred Branch</label>
              <select
                id="enquiry-branch"
                name="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
              >
                <option value="">Select branch</option>
                {restaurantBranches.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          )}

          <div className="contact-enquiry__field">
            <label htmlFor="enquiry-message">Message</label>
            <textarea
              id="enquiry-message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={
                isCatering
                  ? 'Tell us about your event, menu preferences or dietary requirements.'
                  : 'Tell us about your reservation, party size or any special requests.'
              }
            />
          </div>

          <div className="contact-enquiry__actions">
            <button type="submit" className="btn btn--primary">
              {isCatering ? 'Request a Catering Quote' : 'Send Restaurant Enquiry'}
            </button>
            <a
              href={buildWhatsAppUrl(
                isCatering ? whatsappMessages.cateringQuote : whatsappMessages.restaurant,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--outline-dark"
            >
              WhatsApp Khidmat
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
