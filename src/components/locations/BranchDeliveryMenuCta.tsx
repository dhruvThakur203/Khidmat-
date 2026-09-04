import type { BranchDeliveryMenu } from '../../data/menus';
import { externalLinkProps } from '../../data/menus';
import './BranchDeliveryMenuCta.css';

interface BranchDeliveryMenuCtaProps {
  menu: BranchDeliveryMenu;
}

export function BranchDeliveryMenuCta({ menu }: BranchDeliveryMenuCtaProps) {
  return (
    <div className="branch-menu-cta">
      <p className="branch-menu-cta__label eyebrow">{menu.label}</p>
      <a
        href={menu.href}
        {...externalLinkProps}
        className="btn btn--text branch-menu-cta__link"
        aria-label={menu.ariaLabel}
      >
        {menu.cta}
      </a>
    </div>
  );
}
