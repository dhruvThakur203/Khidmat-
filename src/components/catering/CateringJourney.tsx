import { Link } from 'react-router-dom';
import type { JourneyStep } from '../../data/cateringJourney';
import { useReveal } from '../../hooks/useReveal';
import './CateringJourney.css';

interface CateringJourneyProps {
  steps: JourneyStep[];
  title?: string;
}

export function CateringJourney({ steps, title = 'Plan Your Catering' }: CateringJourneyProps) {
  const ref = useReveal<HTMLOListElement>();

  return (
    <nav className="catering-journey" aria-label={title}>
      <p className="eyebrow">{title}</p>
      <ol className="catering-journey__list reveal reveal-stagger" ref={ref}>
        {steps.map((step, index) => (
          <li key={step.path} className="catering-journey__item reveal-stagger__item">
            <Link to={step.path} className="catering-journey__link">
              <span className="catering-journey__step" aria-hidden="true">{index + 1}</span>
              <span>
                <span className="catering-journey__label">{step.label}</span>
                {step.description && (
                  <span className="catering-journey__desc">{step.description}</span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
