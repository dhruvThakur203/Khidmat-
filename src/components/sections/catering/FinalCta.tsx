import { contactConfig } from '../../../data/site';
import { WhatsAppButton } from '../../ui/WhatsAppButton';
import { whatsappMessages } from '../../../utils/whatsapp';
import { formatPhoneLink } from '../../../data/branches';
import { useReveal } from '../../../hooks/useReveal';

export function FinalCta() {
  const ref = useReveal();

  return (
    <section className="section section--maroon" aria-labelledby="final-cta-heading">
      <div className="container reveal" ref={ref} style={{ textAlign: 'center' }}>
        <h2 className="display-lg" id="final-cta-heading">
          Planning a Celebration? Let&apos;s Create the Perfect Menu.
        </h2>
        <p className="body-lg" style={{ maxWidth: '560px', margin: '1rem auto 1.5rem' }}>
          Tell us about your event, your guest count and your preferences. Our team will help you
          plan a catering experience that fits your celebration.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center' }}>
          <WhatsAppButton message={whatsappMessages.cateringMenu}>Get Menu on WhatsApp</WhatsAppButton>
          <a href={formatPhoneLink(contactConfig.phonePrimary)} className="btn btn--outline">
            Call Khidmat
          </a>
        </div>
      </div>
    </section>
  );
}
