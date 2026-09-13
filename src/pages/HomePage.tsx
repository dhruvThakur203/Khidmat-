import { PageMeta } from '../components/seo/PageMeta';
import { defaultSeo } from '../data/seo';
import { CateringHero } from '../components/sections/catering/CateringHero';
import { TrustStats } from '../components/sections/catering/TrustStats';
import { Legacy } from '../components/sections/Legacy';
import { EventPlanning } from '../components/sections/catering/EventPlanning';
import { GuestCountSection } from '../components/sections/catering/GuestCountSection';
import { SignatureDishes } from '../components/sections/SignatureDishes';
import { RealEvents } from '../components/sections/catering/RealEvents';
import { BehindTheScenes } from '../components/sections/catering/BehindTheScenes';
import { WhyKhidmat } from '../components/sections/catering/WhyKhidmat';
import { Testimonials } from '../components/sections/catering/Testimonials';
import { AreasServe } from '../components/sections/catering/AreasServe';
import { FinalCta } from '../components/sections/catering/FinalCta';

export function HomePage() {
  return (
    <>
      <PageMeta seo={defaultSeo} />
      <CateringHero />
      <TrustStats />
      <Legacy />
      <EventPlanning />
      <GuestCountSection />
      <SignatureDishes />
      <RealEvents />
      <BehindTheScenes />
      <WhyKhidmat />
      <Testimonials />
      <AreasServe />
      <FinalCta />
    </>
  );
}
