import { useRef, useState, type FormEvent } from 'react';
import { trackCateringFormStart, trackCateringFormSubmit } from '../../utils/analytics';
import { buildWhatsAppUrl, whatsappMessages } from '../../utils/whatsapp';
import './HomeLeadForm.css';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface HomeLeadFormProps {
  idPrefix?: string;
  ctaLocation?: string;
  showHeader?: boolean;
  bare?: boolean;
}

function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, '');
  return digits.length >= 10 && digits.length <= 15;
}

export function HomeLeadForm({
  idPrefix = 'home-lead',
  ctaLocation = 'homepage-hero',
  showHeader = true,
  bare = false,
}: HomeLeadFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [phoneError, setPhoneError] = useState('');
  const formStartedRef = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormInteraction = () => {
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackCateringFormStart({ label: 'homepage-lead', ctaLocation });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (status === 'submitting' || status === 'success') return;

    if (!formRef.current?.reportValidity()) return;

    if (!isValidPhone(phone)) {
      setPhoneError('Please enter a valid phone number (at least 10 digits).');
      return;
    }

    setPhoneError('');
    setStatus('submitting');

    try {
      trackCateringFormSubmit({
        label: 'homepage-lead',
        ctaLocation,
      });

      const url = buildWhatsAppUrl(
        whatsappMessages.leadEnquiry({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
        }),
      );

      const opened = window.open(url, '_blank', 'noopener,noreferrer');

      if (!opened) {
        setStatus('error');
        return;
      }

      setStatus('success');
      setName('');
      setEmail('');
      setPhone('');
      formStartedRef.current = false;
    } catch {
      setStatus('error');
    }
  };

  const formClassName = bare
    ? 'home-lead-form home-lead-form--bare'
    : 'home-lead-form';

  if (status === 'success') {
    return (
      <div className={`${formClassName} home-lead-form--success`} role="status" aria-live="polite">
        <p className="home-lead-form__success-title">Thank you.</p>
        <p className="home-lead-form__success-text">Our team will contact you shortly.</p>
      </div>
    );
  }

  return (
    <div className={formClassName}>
      {showHeader ? (
        <>
          <h2 className="home-lead-form__title">Enquiry Form</h2>
          <p className="home-lead-form__intro">
            Share your details and our team will follow up to discuss your event.
          </p>
        </>
      ) : null}

      <form
        ref={formRef}
        className="home-lead-form__form"
        onSubmit={handleSubmit}
        onFocus={handleFormInteraction}
        onChange={handleFormInteraction}
        noValidate
      >
        <div className="home-lead-form__field">
          <label htmlFor={`${idPrefix}-name`}>Guest Name</label>
          <input
            id={`${idPrefix}-name`}
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="home-lead-form__field">
          <label htmlFor={`${idPrefix}-email`}>Email ID</label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
            disabled={status === 'submitting'}
          />
        </div>

        <div className="home-lead-form__field">
          <label htmlFor={`${idPrefix}-phone`}>Phone Number</label>
          <input
            id={`${idPrefix}-phone`}
            type="tel"
            name="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
              if (phoneError) setPhoneError('');
            }}
            autoComplete="tel"
            inputMode="tel"
            required
            disabled={status === 'submitting'}
            aria-invalid={phoneError ? true : undefined}
            aria-describedby={phoneError ? `${idPrefix}-phone-error` : undefined}
          />
          {phoneError ? (
            <p className="home-lead-form__field-error" id={`${idPrefix}-phone-error`} role="alert">
              {phoneError}
            </p>
          ) : null}
        </div>

        {status === 'error' ? (
          <p className="home-lead-form__error" role="alert">
            We couldn&apos;t send your enquiry. Please try again or contact us by phone or WhatsApp.
          </p>
        ) : null}

        <button
          type="submit"
          className="btn btn--primary home-lead-form__submit"
          disabled={status === 'submitting'}
        >
          {status === 'submitting' ? 'Sending…' : 'Send Enquiry'}
        </button>
      </form>
    </div>
  );
}
