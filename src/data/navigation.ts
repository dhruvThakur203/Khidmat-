import { noidaDeliveryMenu, noidaDineInTableMenu } from './menus';

export interface NavChild {
  label: string;
  path: string;
  external?: boolean;
  ariaLabel?: string;
}

export interface NavItem {
  label: string;
  path?: string;
  children?: NavChild[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'Catering',
    path: '/noida-catering',
    children: [
      { label: 'Catering Services in Noida', path: '/noida-catering' },
      { label: 'Wedding Catering', path: '/wedding-catering-noida' },
      { label: 'Corporate Catering', path: '/corporate-catering-noida' },
      { label: 'Party Catering', path: '/party-catering-noida' },
      { label: 'Private Catering', path: '/private-party-catering-noida' },
    ],
  },
  {
    label: 'Menus',
    path: '/catering-menu-noida',
    children: [
      {
        label: noidaDineInTableMenu.label,
        path: noidaDineInTableMenu.href,
        external: true,
        ariaLabel: noidaDineInTableMenu.ariaLabel,
      },
      {
        label: 'Delivery Menu',
        path: noidaDeliveryMenu.href,
        external: true,
        ariaLabel: noidaDeliveryMenu.ariaLabel,
      },
      { label: 'Catering Menu', path: '/catering-menu-noida' },
      { label: 'Catering by Guest Count', path: '/catering-by-guest-count' },
    ],
  },
  { label: 'Events & Gallery', path: '/events' },
  { label: 'About Khidmat', path: '/about-khidmat' },
  { label: 'Areas We Serve', path: '/areas-we-serve' },
  { label: 'Restaurant', path: '/restaurant' },
];

export const footerNavigation = [
  { label: 'Noida Catering', path: '/noida-catering' },
  { label: 'Wedding Catering', path: '/wedding-catering-noida' },
  { label: 'Corporate Catering', path: '/corporate-catering-noida' },
  { label: 'Party Catering', path: '/party-catering-noida' },
  { label: 'Private Catering', path: '/private-party-catering-noida' },
  { label: 'Catering Menu', path: '/catering-menu-noida' },
  { label: 'Areas We Serve', path: '/areas-we-serve' },
  { label: 'About Khidmat', path: '/about-khidmat' },
  { label: 'Restaurant', path: '/restaurant' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Locations', path: '/locations' },
  { label: 'Contact', path: '/contact' },
] as const;
