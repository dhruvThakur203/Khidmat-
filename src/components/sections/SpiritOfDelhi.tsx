import { brand } from '../../data/brand';
import { useReveal } from '../../hooks/useReveal';
import { EditorialImage } from '../ui/EditorialImage';
import { DelhiSilhouette } from '../ui/DelhiSilhouette';
import './SpiritOfDelhi.css';

export function SpiritOfDelhi() {
  const ref = useReveal();

  return (
    <section className="section section--dark spirit" aria-labelledby="spirit-heading">
      <div className="spirit__silhouette-bg" aria-hidden="true">
        <DelhiSilhouette />
      </div>
      <div className="container">
        <div className="spirit__grid">
          <div className="spirit__image">
            <EditorialImage
              src="/images/noida/gallery/noida-01.jpeg"
              alt="Khidmat Noida dining area with Delhi heritage mural"
              objectPosition="center 30%"
            />
          </div>
          <div className="spirit__text reveal" ref={ref}>
            <h2 className="display-md" id="spirit-heading">
              {brand.spirit.title}
            </h2>
            <div className="separator" />
            <p className="body-lg">{brand.spirit.body}</p>
            <p className="body-lg spirit__body-secondary">{brand.spirit.bodySecondary}</p>
            <p className="spirit__closing">{brand.spirit.closing}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
