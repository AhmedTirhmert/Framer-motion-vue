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

export const heroImages = [
  '/images/HeroImage1.avif',
  '/images/HeroImage2.avif',
  '/images/HeroImage3.avif',
  '/images/HeroImage4.avif',
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

export const collection = [
  {
    title: 'Salon',
    category: 'Salon',
    image: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c',
  },
  {
    title: 'Salon Marocaine',
    category: 'Salon',
    image:
      'https://images.unsplash.com/flagged/photo-1572018346951-32a7de3adcc7',
  },
  {
    title: 'Salle à manger',
    category: 'Salle à manger',
    image: 'https://images.unsplash.com/photo-1622653533660-a1538fe8424c',
  },
  {
    title: 'Chambre',
    category: 'Chambre',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a',
  },
  {
    title: 'Bureau',
    category: 'Bureau',
    image: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d',
  },
  {
    title: 'Dressing',
    category: 'Dressing',
    image: 'https://images.unsplash.com/photo-1672137233327-37b0c1049e77',
  },
  {
    title: 'Cuisine',
    category: 'cuisine',
    image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4',
  },
  {
    title: 'Terrasse',
    category: 'Terrasse',
    image: 'https://images.unsplash.com/photo-1613685302957-3a6fc45346ef',
  },
  {
    title: 'Salle de bain',
    category: 'Salle de bain',
    image: 'https://images.unsplash.com/photo-1629227339675-0cfb9b64dc10',
  },
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

export const socialLinks = [
  {
    name: 'facebook',
    icon: 'mdi:facebook',
    url: 'https://www.facebook.com/elitemdf',
  },
  {
    name: 'instagram',
    icon: 'mdi:instagram',
    url: 'https://www.instagram.com/elite_mdf1',
  },
  {
    name: 'whatsapp',
    icon: 'mdi:whatsapp',
    url: "https://wa.me/212661519950?text=Bonjour%20ELITE%20MDF%2C%20je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20vos%20services%20de%20mobilier%20sur%20mesure.%20Pouvez-vous%20me%20fournir%20plus%20d'informations%20s'il%20vous%20pla%C3%AEt%20%3F",
  },
  {
    name: 'phone',
    icon: 'mdi:phone',
    url: 'tel:+212661519950',
  },
];
