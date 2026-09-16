import { PageMeta } from '../components/seo/PageMeta';
import { defaultSeo } from '../data/seo';
import { EventEnquiryPrompt } from '../components/contact/EventEnquiryPrompt';
import { CateringHero } from '../components/sections/catering/CateringHero';
import { HomeTrustBar } from '../components/sections/catering/HomeTrustBar';
import { TrustStats } from '../components/sections/catering/TrustStats';
import { EventPlanning } from '../components/sections/catering/EventPlanning';
import { SignatureDishes } from '../components/sections/SignatureDishes';
import { WhyKhidmat } from '../components/sections/catering/WhyKhidmat';
import { RealEvents } from '../components/sections/catering/RealEvents';
import { Testimonials } from '../components/sections/catering/Testimonials';
import { FinalCta } from '../components/sections/catering/FinalCta';

export function HomePage() {
  return (
    <>
      <PageMeta seo={defaultSeo} />
      <CateringHero />
      <EventEnquiryPrompt />
      <HomeTrustBar />
      <TrustStats />
      <EventPlanning />
      <SignatureDishes variant="catering" />
      <WhyKhidmat />
      <RealEvents />
      <Testimonials />
      <FinalCta />
    </>
  );
}
