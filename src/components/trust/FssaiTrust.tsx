import { useReveal } from '../../hooks/useReveal';
import './FssaiTrust.css';

const fssaiCertificate = {
  src: '/fssai_certificate.png',
  alt: 'FSSAI State License certificate for Khidmat Restaurant, License No. 12719055000072',
  licenseNumber: '12719055000072',
} as const;

export function FssaiTrust() {
  const ref = useReveal();

  return (
    <section
      className="section section--compact fssai-trust"
      aria-labelledby="fssai-trust-heading"
    >
      <div className="container">
        <div className="fssai-trust__grid reveal" ref={ref}>
          <div className="fssai-trust__image-wrap">
            <img
              src={fssaiCertificate.src}
              alt={fssaiCertificate.alt}
              className="fssai-trust__image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="fssai-trust__text">
            <p className="eyebrow">Food Safety &amp; Compliance</p>
            <h2 className="display-md" id="fssai-trust-heading">
              FSSAI State Licensed Food Business
            </h2>
            <p className="body-lg fssai-trust__copy">
              Food safety is central to every Khidmat experience. Our State License under the
              Food Safety and Standards Act, 2006 — for Food Services (Restaurants) — reflects
              our commitment to the required food safety and regulatory standards.
            </p>
            <p className="fssai-trust__license">
              License No. {fssaiCertificate.licenseNumber}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
