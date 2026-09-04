export interface MenuArtworkCategory {
  id: string;
  label: string;
  image: string;
  alt: string;
}

/** Categorized menu artwork — maps to public/images/Menu/ */
export const menuArtworkCategories: MenuArtworkCategory[] = [
  {
    id: 'vegetarian-curries',
    label: 'Vegetarian Curries',
    image: '/images/Menu/SHAHI VEGETARIAN CURRY FINAL.png',
    alt: 'Khidmat Shahi Vegetarian Curry menu',
  },
  {
    id: 'non-vegetarian-curries',
    label: 'Non-Vegetarian Curries',
    image: '/images/Menu/SHAHI NON-VEGETARIAN CURRY.png',
    alt: 'Khidmat Shahi Non-Vegetarian Curry menu',
  },
  {
    id: 'basmati-ka-khazana',
    label: 'Basmati Ka Khazana',
    image: '/images/Menu/BASMATI KA KHAZNA.png',
    alt: 'Khidmat Basmati Ka Khazana menu',
  },
];
