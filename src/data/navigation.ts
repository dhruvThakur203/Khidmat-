export interface NavChild {
  label: string;
  path: string;
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
      { label: 'Catering Menu', path: '/catering-menu-noida' },
      { label: 'Catering by Guest Count', path: '/catering-by-guest-count' },
    ],
  },
  { label: 'Events & Gallery', path: '/events' },
  { label: 'About Khidmat', path: '/about-khidmat' },
  { label: 'Areas We Serve', path: '/areas-we-serve' },
  { label: 'Restaurant', path: '/restaurant' },
  { label: 'Contact', path: '/contact' },
];

export const footerNavigation = [
  { label: 'Noida Catering', path: '/noida-catering' },
  { label: 'Corporate Catering', path: '/corporate-catering-noida' },
  { label: 'Wedding Catering', path: '/wedding-catering-noida' },
  { label: 'About Khidmat', path: '/about-khidmat' },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Restaurant', path: '/restaurant' },
  { label: 'Locations', path: '/locations' },
  { label: 'Contact', path: '/contact' },
] as const;
