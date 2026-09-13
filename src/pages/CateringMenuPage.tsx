import { Link } from 'react-router-dom';
import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import {
  cateringMenuCategories,
  cateringSignatureDishIds,
} from '../data/cateringMenuCategories';
import { cateringHubJourney } from '../data/cateringJourney';
import { featuredDishes } from '../data/featuredDishes';
import { CateringJourney } from '../components/catering/CateringJourney';
import { QuoteCtaLink } from '../components/analytics/QuoteCtaLink';
import { WhatsAppButton } from '../components/ui/WhatsAppButton';
import { whatsappMessages } from '../utils/whatsapp';
import { noidaDeliveryMenu, externalLinkProps } from '../data/menus';
import './CateringMenuPage.css';

const eventMenuLinks = [
  {
    title: 'Wedding Catering Menu',
    description: 'Generous spreads, live counters and customised menus for wedding functions and receptions.',
    path: '/wedding-catering-noida',
  },
  {
    title: 'Corporate Event Menu',
    description: 'Professional buffet menus for office lunches, conferences and client meetings.',
    path: '/corporate-catering-noida',
  },
  {
    title: 'Party & Celebration Menu',
    description: 'Familiar North Indian and Mughlai flavours for birthdays, anniversaries and festive gatherings.',
    path: '/party-catering-noida',
  },
] as const;

const signatureDishes = featuredDishes.filter((dish) =>
  cateringSignatureDishIds.includes(dish.id as typeof cateringSignatureDishIds[number]),
);

export function CateringMenuPage() {
  return (
    <>
      <PageMeta seo={pageSeo.cateringMenu} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Catering Menu</p>
          <h1 className="page-header__title display-lg">Catering Menu in Noida</h1>
          <p className="page-header__subtitle body-lg">
            Event catering menus for weddings, corporate functions and private celebrations
            across Noida and Delhi NCR — prepared from Khidmat&apos;s restaurant kitchen since 1992.
          </p>
        </div>
      </header>

      <section className="section section--cream" aria-label="Catering planning steps">
        <div className="container">
          <CateringJourney steps={cateringHubJourney} />
        </div>
      </section>

      <section className="section">
        <div className="container catering-menu">
          <p className="body-lg catering-menu__intro">
            Khidmat catering menus draw from the same North Indian and Mughlai expertise served
            at our restaurants. Every menu is customised to your event type, guest count and
            dietary preferences — contact our team for options tailored to your occasion.
          </p>

          <h2 className="display-md catering-menu__section-title">Menu by Event Type</h2>
          <div className="catering-menu__event-grid">
            {eventMenuLinks.map((item) => (
              <article key={item.path} className="catering-menu__event-card">
                <h3 className="catering-menu__event-title">
                  <Link to={item.path}>{item.title}</Link>
                </h3>
                <p className="body-lg">{item.description}</p>
                <Link to={item.path} className="btn btn--text">Explore →</Link>
              </article>
            ))}
          </div>

          <h2 className="display-md catering-menu__section-title">Cuisine Categories</h2>
          <div className="catering-menu__categories">
            {cateringMenuCategories.map((category) => (
              <article key={category.id} className="catering-menu__category">
                <h3 className="catering-menu__category-title">{category.title}</h3>
                <p className="body-lg">{category.description}</p>
                {category.eventNotes && (
                  <p className="catering-menu__event-note">
                    Commonly included for: {category.eventNotes.join(' · ')}
                  </p>
                )}
              </article>
            ))}
          </div>

          <h2 className="display-md catering-menu__section-title">Signature Dishes</h2>
          <p className="body-lg catering-menu__intro">
            These restaurant favourites are often featured in Khidmat catering menus.
          </p>
          <ul className="catering-menu__dishes">
            {signatureDishes.map((dish) => (
              <li key={dish.id} className="catering-menu__dish">
                <strong>{dish.name}</strong>
                <span>{dish.description}</span>
              </li>
            ))}
          </ul>

          <div className="catering-menu__custom">
            <h2 className="display-md">Menu Customisation</h2>
            <ul className="catering-menu__custom-list">
              <li>Menus tailored to your event type — wedding, corporate, party or private gathering</li>
              <li>Vegetarian and non-vegetarian options from Khidmat&apos;s restaurant kitchen</li>
              <li>Guest count planning from approximately 20 to 500+ guests</li>
              <li>Live counter options available for larger celebrations on enquiry</li>
            </ul>
            <p className="body-lg catering-menu__custom-note">
              Share your event date, location, guest count and dietary preferences — our team
              will suggest a suitable catering menu.
            </p>
          </div>

          <div className="catering-menu__cta">
            <WhatsAppButton message={whatsappMessages.cateringMenu} ctaLocation="catering-menu-page">
              WhatsApp Khidmat
            </WhatsAppButton>
            <QuoteCtaLink ctaLocation="catering-menu-page" className="btn btn--outline-dark">
              Get a Catering Quote
            </QuoteCtaLink>
            <Link to="/catering-by-guest-count" className="btn btn--outline-dark">
              Catering by Guest Count
            </Link>
            <Link to="/noida-catering" className="btn btn--text">
              All Catering Services
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
