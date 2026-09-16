import { useCallback, useEffect, useRef, useState } from 'react';
import { HomeLeadForm } from './HomeLeadForm';
import './EventEnquiryPrompt.css';

const STORAGE_KEY = 'khidmat-event-enquiry-dismissed';
const OPEN_DELAY_MS = 700;

export function EventEnquiryPrompt() {
  const [visible, setVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const dismiss = useCallback(() => {
    sessionStorage.setItem(STORAGE_KEY, '1');
    setVisible(false);
  }, []);

  useEffect(() => {
    if (sessionStorage.getItem(STORAGE_KEY)) return undefined;

    const timer = window.setTimeout(() => setVisible(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!visible) return undefined;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        dismiss();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [visible, dismiss]);

  useEffect(() => {
    if (!visible) return;
    cardRef.current?.querySelector<HTMLElement>('input, button')?.focus();
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="event-enquiry-prompt"
      role="dialog"
      aria-labelledby="event-enquiry-title"
      aria-describedby="event-enquiry-desc"
    >
      <button
        type="button"
        className="event-enquiry-prompt__backdrop"
        onClick={dismiss}
        aria-label="Close enquiry form"
        tabIndex={-1}
      />

      <div className="event-enquiry-prompt__card" ref={cardRef}>
        <button
          type="button"
          className="event-enquiry-prompt__close"
          onClick={dismiss}
          aria-label="Close"
        >
          ×
        </button>

        <p className="event-enquiry-prompt__eyebrow eyebrow">Catering Enquiry</p>
        <h2 className="event-enquiry-prompt__title" id="event-enquiry-title">
          Planning an Event?
        </h2>
        <p className="event-enquiry-prompt__tagline">Let&apos;s make it special.</p>
        <p className="event-enquiry-prompt__intro" id="event-enquiry-desc">
          Share your details and our team will get in touch to discuss your event.
        </p>

        <HomeLeadForm
          idPrefix="event-enquiry"
          ctaLocation="homepage-prompt"
          showHeader={false}
          bare
        />
      </div>
    </div>
  );
}
