export interface FeaturedDish {
  id: string;
  name: string;
  description: string;
  image: string;
  objectPosition?: string;
  imageFit?: 'cover' | 'contain';
}

export const featuredDishes: FeaturedDish[] = [
  {
    id: 'dal-khidmat',
    name: 'Dal Khidmat',
    description:
      'Our signature dal, slow-cooked until rich, silky and deeply flavoured.',
    image: '/images/food/Dal makhni.jpeg',
    objectPosition: 'center center',
    imageFit: 'cover',
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    description:
      'Tender chicken in a rich tomato and butter gravy, finished with aromatic spices.',
    image: '/images/food/butter-chicken.jpeg',
    objectPosition: 'center 35%',
    imageFit: 'cover',
  },
  {
    id: 'mutton-biryani',
    name: 'Mutton Biryani',
    description:
      'Fragrant basmati rice layered with tender mutton and warming spices, sealed and slow-cooked.',
    image: '/images/food/mutton biryani.jpeg',
    objectPosition: 'center center',
    imageFit: 'cover',
  },
  {
    id: 'paneer-lababdar',
    name: 'Paneer Lababdar',
    description:
      'Soft cottage cheese in a rich, creamy tomato gravy with aromatic spices.',
    image: '/images/food/paneer lababdar.jpeg',
    objectPosition: 'center center',
    imageFit: 'contain',
  },
];
