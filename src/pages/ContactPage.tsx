import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { branchList, formatPhoneLink } from '../data/branches';
import { brand } from '../data/brand';
import { contactConfig, siteConfig } from '../data/site';
import { social, mailtoLink } from '../data/social';
import { SocialLinks } from '../components/ui/SocialLinks';
import { ContactEnquiryForm } from '../components/contact/ContactEnquiryForm';
import { buildWhatsAppUrl, whatsappMessages } from '../utils/whatsapp';

export function ContactPage() {
  return (
    <>
      <PageMeta seo={pageSeo.contact} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1 className="page-header__title display-lg">{brand.contact.heading}</h1>
          <p className="page-header__subtitle body-lg">{brand.contact.subtitle}</p>
        </div>
      </header>

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
              <a href={formatPhoneLink(contactConfig.phonePrimary)} className="btn btn--outline-dark btn--compact">
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
                    <a key={phone} href={formatPhoneLink(phone)}>
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

          <div className="contact-social">
            <p className="eyebrow">{brand.contact.followLabel}</p>
            <SocialLinks variant="page" />
          </div>
        </div>
      </section>
    </>
  );
}
