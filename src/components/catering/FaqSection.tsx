import type { FaqItem } from '../../data/faqs';
import { useReveal } from '../../hooks/useReveal';
import './FaqSection.css';

interface FaqSectionProps {
  faqs: FaqItem[];
  heading?: string;
}

export function FaqSection({ faqs, heading = 'Frequently Asked Questions' }: FaqSectionProps) {
  const ref = useReveal();

  if (faqs.length === 0) return null;

  return (
    <section className="section section--cream faq-section" aria-labelledby="faq-heading">
      <div className="container reveal" ref={ref}>
        <h2 className="display-md" id="faq-heading">{heading}</h2>
        <dl className="faq-list">
          {faqs.map((faq) => (
            <div key={faq.id} className="faq-item">
              <dt className="faq-item__question">{faq.question}</dt>
              <dd className="faq-item__answer body-lg">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
