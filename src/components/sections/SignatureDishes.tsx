import { brand } from '../../data/brand';
import { featuredDishes } from '../../data/featuredDishes';
import { externalLinkProps, noidaDeliveryMenu } from '../../data/menus';
import { useReveal } from '../../hooks/useReveal';
import './SignatureDishes.css';

export function SignatureDishes() {
  const ref = useReveal();

  return (
    <section className="section dishes" aria-labelledby="dishes-heading">
      <div className="container">
        <div className="dishes__intro reveal" ref={ref}>
          <h2 className="display-lg dishes__title" id="dishes-heading">
            {brand.food.heading}
          </h2>
          <p className="dishes__subtitle body-lg">{brand.food.subtitle}</p>
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
          <a
            href={noidaDeliveryMenu.href}
            {...externalLinkProps}
            className="btn btn--text"
            aria-label={noidaDeliveryMenu.ariaLabel}
          >
            {noidaDeliveryMenu.headerCta}
          </a>
        </div>
      </div>
    </section>
  );
}
