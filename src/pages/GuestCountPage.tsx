import { PageMeta } from '../components/seo/PageMeta';
import { pageSeo } from '../data/seo';
import { GuestCountSection } from '../components/sections/catering/GuestCountSection';

export function GuestCountPage() {
  return (
    <>
      <PageMeta seo={pageSeo.guestCount} />
      <header className="page-header">
        <div className="container">
          <p className="eyebrow">Plan your event</p>
          <h1 className="page-header__title display-lg">Catering by Guest Count</h1>
          <p className="page-header__subtitle body-lg">
            Select your approximate guest count and message the Khidmat team on WhatsApp with your enquiry ready to send.
          </p>
        </div>
      </header>
      <GuestCountSection />
    </>
  );
}
