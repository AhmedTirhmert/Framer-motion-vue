import { type MotionProps } from 'motion-v';

export const itemsInitialState = {
  y: 40,
  opacity: 0,
};

export const itemsFinalState = {
  y: 0,
  opacity: 1,
};

export const resolveItemTransition = (
  index: number = 0,
  duration: number = 0.8,
) => {
  return {
    duration,
    delay: index * 0.2,
    ease: 'easeInOut',
    type: 'tween',
  };
};

export const featuredCollections = [
  {
    id: 1,
    name: 'Intérieur Moderne',
    description: 'Designs contemporains pour la maison moderne',
    image:
      'https://images.unsplash.com/photo-1605774337664-7a846e9cdf17?q=80&w=800',
    path: '/products/modern-living',
  },
  {
    id: 2,
    name: 'Élégance de la Salle à Manger',
    description: 'Collections sophistiquées pour salle à manger',
    image:
      'https://images.unsplash.com/photo-1617806118233-18e1de247200?q=80&w=800',
    path: '/products/dining-elegance',
  },
  {
    id: 3,
    name: 'Bureau de Luxe',
    description: 'Mobilier de bureau haut de gamme',
    image:
      'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800',
    path: '/products/office-luxury',
  },
];

export const heroImages = [
  '/images/HeroImage1.png',
  '/images/HeroImage2.png',
  '/images/HeroImage3.png',
  '/images/HeroImage4.png',
];

export const expertiseItems = [
  {
    icon: 'fa6-solid:layer-group',
    title: 'Expertise',
    description:
      "Fort d'une expérience de plus de 10 ans, ELITEMDF c'est créé à une entreprise d'expertise de haute-level dans la conception et la réalisation de cuisines et dressings.",
  },
  {
    icon: 'ri:contract-line',
    title: 'Engagement',
    description:
      "  ELITEMDF s'engage à vous offrir un service de qualité et à répondre à toutes vos attentes en termes de design, d'ergonomie et de fonctionnalité.",
  },
  {
    icon: 'mage:goals',
    title: 'Vision et Mission',
    description:
      "Notre vision est d'être le leader dans la conception et la réalisation de cuisines et dressings haut de gamme au Maroc.",
  },
];

export const realizationImages = [
  'https://images.unsplash.com/photo-1544691560-fc2053d97726?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1586208958839-06c17cacdf08?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1661877303180-19a028c21048?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://plus.unsplash.com/premium_photo-1681487131497-46b5abebf1b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  'https://images.unsplash.com/photo-1623050804066-42bcedb4e81d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fA%3D%3D',
];

export const statistics = [
  {
    value: 9000,
    label: 'Meilleurs Avis',
  },
  {
    value: 2000,
    label: 'Clients Satisfaits',
  },
  {
    value: 28000,
    label: 'Service après-vente',
  },
];

export const whyUsSection = [
  {
    icon: 'ruler',
    description: 'Besoin sur mesure',
    title: 'Sur Mesure',
  },
  {
    icon: 'light-bulb',
    description: 'Qualité et Précision',
    title: 'Précision',
  },
  {
    icon: 'chair',
    description: 'Cuisine Personnalisée',
    title: 'Personnalisée',
  },
  {
    icon: 'color-palette',
    description: 'Rapidité et bon goût garanti',
    title: 'Rapidité',
  },
];

export const sections = [
  {
    id: 'featured',
    class: 'py-20',
    title: 'Collections Vedettes',
  },
  {
    id: 'story',
    class: 'py-20 bg-primary-50 dark:bg-primary-800/50',
    title: 'Notre Histoire',
  },
  {
    id: 'stats',
    class: 'py-16 bg-white dark:bg-primary-900',
    title: 'Nos Chiffres',
  },
  {
    id: 'expertise',
    class: 'py-20 bg-primary-50 dark:bg-primary-800/50',
    title: 'Notre Expertise',
  },
  {
    id: 'realizations',
    class: 'py-20',
    title: 'Nos Réalisations',
  },
];
