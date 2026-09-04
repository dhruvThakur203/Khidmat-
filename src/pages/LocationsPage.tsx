import { branchList, formatPhoneLink } from '../data/branches';
import { getBranchGallery } from '../data/gallery';
import { BranchDeliveryMenuCta } from '../components/locations/BranchDeliveryMenuCta';

export function LocationsPage() {
  return (
    <>
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Locations</p>
          <h1 className="page-header__title display-lg">Find Khidmat</h1>
          <p className="page-header__subtitle body-lg">
            Two locations across Delhi NCR — Kalkaji and Sector 50, Noida.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container">
          {branchList.map((branch) => {
            const gallery = getBranchGallery(branch.id);

            return (
              <article key={branch.id} className="branch-detail">
                <div className="branch-detail__header">
                  <span className="branch-detail__area">{branch.area}</span>
                  <h2 className="display-md">{branch.city}</h2>
                  <p className="branch-detail__address">{branch.address}</p>
                </div>

                <div className="branch-detail__gallery">
                  {gallery.slice(0, 4).map((img) => (
                    <img key={img.id} src={img.src} alt={img.alt} loading="lazy" />
                  ))}
                </div>

                <div className="branch-detail__contact">
                  <div className="branch-detail__phones">
                    {branch.phones.map((phone) => (
                      <a key={phone} href={formatPhoneLink(phone)} className="branch-detail__phone">
                        {phone}
                      </a>
                    ))}
                  </div>
                  <div className="branch-detail__actions">
                    <a
                      href={branch.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                    >
                      Get Directions
                    </a>
                    <a href={formatPhoneLink(branch.phones[0])} className="btn btn--outline-dark">
                      Call
                    </a>
                    {branch.whatsapp && (
                      <a
                        href={`https://wa.me/${branch.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--outline-dark"
                      >
                        WhatsApp
                      </a>
                    )}
                  </div>
                  {branch.deliveryMenu && (
                    <BranchDeliveryMenuCta menu={branch.deliveryMenu} />
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
