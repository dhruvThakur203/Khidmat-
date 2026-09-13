import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { cateringMenuCategories } from '../data/cateringMenuCategories';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { whatsappMessages } from '../utils/whatsapp';
import { noidaDeliveryMenu, externalLinkProps } from '../data/menus';
import './CateringMenuPage.css';

export function CateringMenuPage() {
  return (
    <>
      <PageMeta seo={pageSeo.cateringMenu} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Catering Menu</p>
          <h1 className="page-header__title display-lg">Catering Menu</h1>
          <p className="page-header__subtitle body-lg">
            Customisable catering menus for celebrations and events across Noida and Delhi NCR — backed by Khidmat&apos;s restaurant kitchen since 1992.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="container catering-menu">
          <p className="body-lg catering-menu__intro">
            Our catering menus draw from the same North Indian and Mughlai expertise served at Khidmat restaurant. Contact our team for menu options tailored to your guest count and event type.
          </p>

          <div className="catering-menu__categories">
            {cateringMenuCategories.map((category) => (
              <article key={category.id} className="catering-menu__category">
                <h2 className="catering-menu__category-title">{category.title}</h2>
                <p className="body-lg">{category.description}</p>
              </article>
            ))}
          </div>

          <div className="catering-menu__cta">
            <WhatsAppButton message={whatsappMessages.cateringMenu}>
              Get Catering Menu on WhatsApp
            </WhatsAppButton>
            <Link to="/catering-by-guest-count" className="btn btn--outline-dark">
              Catering by Guest Count
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--cream">
        <div className="container catering-menu__delivery">
          <p className="eyebrow">Noida — Delivery / Take Away</p>
          <h2 className="display-md">{noidaDeliveryMenu.label}</h2>
          <p className="body-lg" style={{ marginTop: '0.75rem', maxWidth: '560px' }}>
            For Noida branch delivery and take-away — not the dine-in or Delhi menu.
          </p>
          <a
            href={noidaDeliveryMenu.href}
            {...externalLinkProps}
            className="btn btn--outline-dark"
            style={{ marginTop: '1rem', display: 'inline-flex' }}
            aria-label={noidaDeliveryMenu.ariaLabel}
          >
            {noidaDeliveryMenu.cta}
          </a>
        </div>
      </section>

      <section className="section" style={{ textAlign: 'center' }}>
        <div className="container">
          <Link to="/noida-catering" className="btn btn--text">
            Back to Noida Catering Services
          </Link>
        </div>
      </section>
    </>
  );
}
