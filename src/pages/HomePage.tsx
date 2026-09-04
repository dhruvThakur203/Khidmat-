import { Hero } from '../components/sections/Hero';
import { Legacy } from '../components/sections/Legacy';
import { SignatureDishes } from '../components/sections/SignatureDishes';
import { SpiritOfDelhi } from '../components/sections/SpiritOfDelhi';
import { Kitchen, CateringPreview } from '../components/sections/Kitchen';
import { LocationsPreview } from '../components/sections/LocationsPreview';
import { HomeGalleryPreview } from '../components/gallery/HomeGalleryPreview';

export function HomePage() {
  return (
    <>
      <Hero />
      <Legacy />
      <SignatureDishes />
      <SpiritOfDelhi />
      <Kitchen />
      <CateringPreview />
      <HomeGalleryPreview />
      <LocationsPreview />
    </>
  );
}
