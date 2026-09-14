import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { branchList, formatPhoneLink } from '../data/branches';
import { brand } from '../data/brand';
import { businessEntity } from '../data/businessEntity';
import { contactConfig, siteConfig } from '../data/site';
import { social, mailtoLink } from '../data/social';
import { PlatformProfiles } from '../components/trust/PlatformProfiles';
import { ContactEnquiryForm } from '../components/contact/ContactEnquiryForm';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';
import { trackConversion } from '../utils/analytics';

export function ContactPage() {
  return (
    <>
      <PageMeta seo={pageSeo.contact} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-header__title display-lg">Contact Khidmat</h1>
          <p className="page-header__subtitle body-lg">
            {brand.contact.subtitle} Reach our team for catering enquiries, restaurant
            reservations and event planning across Noida and Delhi NCR.
          </p>
        </div>
      </header>

      <section className="section section--cream">
        <div className="container" style={{ maxWidth: '720px' }}>
          <p className="eyebrow">Who we are</p>
          <h2 className="display-md">Khidmat — Restaurant &amp; Catering Since {siteConfig.since}</h2>
          <p className="body-lg" style={{ marginTop: '0.75rem' }}>
            {businessEntity.name} is an established hospitality brand offering restaurant dining
            in Kalkaji, Delhi and Sector 50, Noida — and professional catering services across
            {siteConfig.serviceAreas.join(', ')}.
          </p>
          <ul className="contact-entity__list body-lg" style={{ marginTop: '1rem' }}>
            <li>Email: <a href={mailtoLink}>{businessEntity.email}</a></li>
            <li>Phone: <a href={formatPhoneLink(contactConfig.phonePrimary)}>{contactConfig.phoneFormatted}</a></li>
            <li>
              Alternate Number:{' '}
              <a href={formatPhoneLink(contactConfig.phoneAlternate)}>{contactConfig.phoneAlternateFormatted}</a>
            </li>
            <li>WhatsApp: {contactConfig.whatsappDisplay}</li>
            <li>{siteConfig.openingHours}</li>
          </ul>
        </div>
      </section>

      <ContactEnquiryForm />

      <section className="section">
        <div className="container">
          <div className="contact-summary">
            <p className="contact-summary__location">
              Delhi — {branchList[0].area}
            </p>
            <p className="contact-summary__location">
              Noida — {branchList[1].area}
            </p>
            <a href={mailtoLink} className="contact-summary__email">
              {social.email}
            </a>
            <p className="contact-summary__hours body-lg" style={{ marginTop: '0.75rem' }}>
              {siteConfig.openingHours}
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href={formatPhoneLink(contactConfig.phonePrimary)}
                className="btn btn--outline-dark btn--compact"
                onClick={() => trackConversion('phone_click', { label: 'primary' })}
              >
                Call {contactConfig.phoneDisplay}
              </a>
              <a
                href={buildWhatsAppUrl(whatsappMessages.cateringQuote)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary btn--compact"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="contact-grid">
            {branchList.map((branch) => (
              <div key={branch.id} className="contact-card">
                <span className="contact-card__label">Location {branch.number}</span>
                <h2 className="contact-card__name display-md">
                  {branch.area}, {branch.city}
                </h2>
                <p className="contact-card__address">{branch.address}</p>
                <div className="contact-card__phones">
                  {branch.phones.map((phone) => (
                    <a
                      key={phone}
                      href={formatPhoneLink(phone)}
                      onClick={() => trackConversion('phone_click', { label: branch.id })}
                    >
                      {phone}
                    </a>
                  ))}
                </div>
                <div className="contact-card__actions">
                  <a
                    href={branch.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary"
                    onClick={() => trackConversion('directions_click', { label: branch.id })}
                  >
                    Get Directions
                  </a>
                  {branch.whatsapp && (
                    <a
                      href={`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(whatsappMessages.generalCatering)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline-dark"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <PlatformProfiles variant="compact" heading="" />
        </div>
      </section>
    </>
  );
}
