export type BranchDeliveryMenuType = 'delivery-takeaway';

export interface BranchDeliveryMenu {
  type: BranchDeliveryMenuType;
  label: string;
  cta: string;
  headerCta: string;
  href: string;
  ariaLabel: string;
}

export interface MenuPdfLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export const noidaDineInTableMenu: MenuPdfLink = {
  label: 'Dine-In / Table Menu',
  href: '/menus/khidmat table menu.pdf',
  ariaLabel: 'View Khidmat dine-in and table menu',
};

export const noidaDeliveryMenu: BranchDeliveryMenu = {
  type: 'delivery-takeaway',
  label: 'Delivery / Take Away Menu',
  cta: 'View Full Collection',
  headerCta: 'View Noida Menu',
  href: '/menus/noida-delivery-takeaway-menu.pdf',
  ariaLabel: 'View Noida delivery and take away menu',
};

export const externalLinkProps = {
  target: '_blank' as const,
  rel: 'noopener noreferrer',
};
