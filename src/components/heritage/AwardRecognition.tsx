import { khidmatAward } from '../../data/heritage';
import { useReveal } from '../../hooks/useReveal';
import './AwardRecognition.css';

export function AwardRecognition() {
  const ref = useReveal();

  return (
    <section
      className="section section--compact section--cream award-recognition"
      aria-labelledby="award-recognition-heading"
    >
      <div className="container">
        <div className="award-recognition__grid reveal" ref={ref}>
          <div className="award-recognition__image-wrap">
            <img
              src={khidmatAward.src}
              alt={khidmatAward.alt}
              className="award-recognition__image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="award-recognition__text">
            <p className="eyebrow">Recognition</p>
            <h2 className="display-md" id="award-recognition-heading">
              Recognised for Excellence
            </h2>
            <p className="body-lg award-recognition__copy">
              Khidmat Restaurant was recognised for its contribution to Indian food and hospitality.
            </p>
            <p className="body-lg award-recognition__copy">
              An honour celebrating our commitment to memorable dining experiences in Noida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
