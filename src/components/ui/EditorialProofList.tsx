import { editorialIndex } from '../../utils/editorialIndex';
import './EditorialProofList.css';

import { useReveal } from '../../hooks/useReveal';

interface EditorialProofListProps {
  items: readonly string[];
  variant?: 'light' | 'dark';
}

export function EditorialProofList({ items, variant = 'dark' }: EditorialProofListProps) {
  const ref = useReveal<HTMLOListElement>();

  return (
    <ol
      className={`editorial-proof-list editorial-proof-list--${variant} reveal reveal-stagger`}
      ref={ref}
    >
      {items.map((item, index) => (
        <li key={item} className="editorial-proof-list__item reveal-stagger__item">
          <span className="editorial-proof-list__index" aria-hidden="true">
            {editorialIndex(index)}
          </span>
          <span className="editorial-proof-list__text">{item}</span>
        </li>
      ))}
    </ol>
  );
}
