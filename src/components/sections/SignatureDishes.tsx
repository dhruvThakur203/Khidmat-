import { Link } from 'react-router-dom';
import { featuredDishes } from '../../data/featuredDishes';
import { useReveal } from '../../hooks/useReveal';
import './SignatureDishes.css';

interface SignatureDishesProps {
  /** Homepage catering menu showcase */
  variant?: 'default' | 'catering';
}

export function SignatureDishes({ variant = 'default' }: SignatureDishesProps) {
  const ref = useReveal();
  const isCatering = variant === 'catering';

  return (
    <section
      className={`section dishes${isCatering ? ' dishes--catering' : ''}`}
      aria-labelledby="dishes-heading"
    >
      <div className="container">
        <div className="dishes__intro reveal" ref={ref}>
          <p className="eyebrow">{isCatering ? 'Catering Menu' : 'Our Food'}</p>
          <h2 className="display-lg dishes__title" id="dishes-heading">
            {isCatering ? 'The Khidmat Catering Menu' : 'Exceptional Food Begins with Experience'}
          </h2>
          <p className="dishes__subtitle body-lg">
            {isCatering
              ? 'Khidmat brings restaurant-quality North Indian and Mughlai food to your event — the same kitchen that has served guests since 1992.'
              : 'Slow-cooked classics, fragrant biryanis and rich North Indian flavours — prepared with the patience and care they deserve.'}
          </p>
        </div>

        <div className="dishes__editorial">
          {featuredDishes.map((dish, index) => {
            const reversed = index % 2 === 1;
            const fitClass =
              dish.imageFit === 'contain' ? ' dishes__visual--contain' : ' dishes__visual--cover';

            return (
              <article
                key={dish.id}
                className={`dishes__row${reversed ? ' dishes__row--reverse' : ''}`}
              >
                <div className={`dishes__visual${fitClass}`}>
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="dishes__image"
                    loading="lazy"
                    decoding="async"
                    style={{
                      objectPosition: dish.objectPosition ?? 'center center',
                      objectFit: dish.imageFit ?? 'cover',
                    }}
                  />
                </div>
                <div className="dishes__copy">
                  <h3 className="dishes__name">{dish.name}</h3>
                  <p className="dishes__description">{dish.description}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="dishes__cta">
          {isCatering ? (
            <>
              <Link to="/catering-menu-noida" className="btn btn--outline-dark">
                View Catering Menu
              </Link>
              <Link to="/catering-by-guest-count" className="btn btn--text">
                Plan by Guest Count
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </section>
  );
}
