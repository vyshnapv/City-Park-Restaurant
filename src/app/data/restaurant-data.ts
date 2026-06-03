// =====================================================
// CITY PARK FAMILY RESTAURANT – Central Data File
// Update this file to change content site-wide
// =====================================================

export interface Dish {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  emoji: string;
  badge?: string;
  image: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  review: string;
  initials: string;
  avatarColor: string;
}

export interface WhyChooseCard {
  icon: string;
  title: string;
  description: string;
}

export interface SpecialFeature {
  icon: string;
  title: string;
  description: string;
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
}

// =====================================================
// RESTAURANT INFO
// =====================================================
export const RESTAURANT_INFO = {
  name: 'City Park Family Restaurant',
  tagline: 'Delicious Food, Warm Ambience, Memorable Moments',
  phone: '+91 9207045332',
  phoneRaw: '+9207045332',
  whatsapp: '9207045332',
  address: 'City Tower, Parappanangadi Road,\nChemmad, Malappuram, Kerala – 676306',
  addressOneLiner: 'City Tower, Parappanangadi Road, Chemmad, Malappuram',
  mapUrl: 'https://maps.app.goo.gl/pfe2jxHi2FzCr198A',
  mapEmbedSrc: 'https://maps.google.com/maps?q=Chemmad+Malappuram+Kerala&output=embed',
  hoursWeekday: 'Mon – Fri: 10:00 AM – 10:30 PM',
  hoursWeekend: 'Sat – Sun: 9:00 AM – 11:00 PM',
  openWeekdayStart: 10,
  openWeekdayEnd: 22.5,
  openWeekendStart: 9,
  openWeekendEnd: 23,
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    twitter: 'https://twitter.com',
  }
};

// =====================================================
// STATS (About Section)
// =====================================================
export const STATS: Stat[] = [
  { value: 8,  suffix: '+',  label: 'Years of Service' },
  { value: 50, suffix: 'K+', label: 'Happy Customers' },
  { value: 25, suffix: '+',  label: 'Menu Specialties' },
  { value: 100, suffix: '%', label: 'Quality Assured' },
];

// =====================================================
// WHY CHOOSE US
// =====================================================
export const WHY_CHOOSE: WhyChooseCard[] = [
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Friendly',
    description: 'Spacious seating, dedicated kids zone, and a warm welcoming atmosphere for the entire family'
  },
  {
    icon: '🍽️',
    title: 'Multi-Cuisine Menu',
    description: 'From authentic Kerala Sadya to Arabian Mandi and Chinese specials – a world of flavors in one place'
  },
  {
    icon: '✅',
    title: 'Hygienic Kitchen',
    description: 'FSSAI certified kitchen with the highest standards of cleanliness and food safety protocols'
  },
  {
    icon: '💰',
    title: 'Affordable Pricing',
    description: 'Premium dining experience at pocket-friendly prices. Great food shouldn\'t cost a fortune'
  },
  {
    icon: '⚡',
    title: 'Quick Service',
    description: 'Efficient, courteous service that respects your time without ever compromising on quality'
  },
  {
    icon: '📍',
    title: 'Prime Location',
    description: 'Conveniently located in the heart of Chemmad with easy access and ample parking space'
  },
];

// =====================================================
// SIGNATURE DISHES
// =====================================================
export const DISH_CATEGORIES = ['All', 'Biryani', 'Arabian', 'Chinese', 'Kerala', 'Grills & BBQ', 'Desserts'];

const IMG1 = 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyaXlhbml8ZW58MHx8MHx8fDA%3D';
const IMG2 = 'https://media.istockphoto.com/id/1407172002/photo/indian-spicy-mutton-biryani-with-raita-and-gulab-jamun-served-in-a-dish-side-view-on-grey.webp?a=1&b=1&s=612x612&w=0&k=20&c=fDaAnk_dIuN4JIzc3y91a3FFtf3XlWeOU1wrr5SdFis=';
const IMG3 = 'https://plus.unsplash.com/premium_photo-1726718443105-6f363d9b3ba7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const IMG4 = 'https://images.unsplash.com/photo-1719282431723-9d0f4370d4bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNoYXdhcm1hfGVufDB8fDB8fHww';
const IMG5 = 'https://images.unsplash.com/photo-1776729851079-686daa8ff9aa?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
const IMG6 = 'https://media.istockphoto.com/id/838927480/photo/onam-sadya-on-a-banana-leaf.webp?a=1&b=1&s=612x612&w=0&k=20&c=DifbHjpQKU2p_-53a5w5kDvL3X-RPkP5eUqrK0Fud78=';
const IMG7 = 'https://media.istockphoto.com/id/1345836958/photo/pomfret-fish-curry-pomfret-fish-moly-very-tasty-indian-spicy-fish-curry-with-coconut-milk.webp?a=1&b=1&s=612x612&w=0&k=20&c=-gcdpr478F9jUO5GfQM4ujKr6rWnf9j2-wLYrsqXF_g=';
const IMG8 = 'https://media.istockphoto.com/id/1305699663/photo/seafood-platter-grilled-lobster-shrimps-scallops-langoustines-octopus-squid-on-white-plate.webp?a=1&b=1&s=612x612&w=0&k=20&c=bXhr05Kx_DDdqFXcjZSqQ_3Wt2_kNAZ3oZ0U9k65EyA=';
const IMG9 = 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWl4ZWQlMjBncmlsbCUyMGJicXxlbnwwfHwwfHx8MA%3D%3D';
const IMG10 = 'https://images.unsplash.com/photo-1631718051263-c567dca19362?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZydWl0JTIwc2FsYWR8ZW58MHx8MHx8fDA%3D';
const IMG11 = 'https://images.unsplash.com/photo-1753775290758-bf6f5ab2cd43?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGJyZWFkJTIwcHVkZGluZ3xlbnwwfHwwfHx8MA%3D%3D';
const IMG12 = 'https://media.istockphoto.com/id/1097412142/photo/prawn-masala-curry-with-chapatti-and-basmati-rice.webp?a=1&b=1&s=612x612&w=0&k=20&c=KGhpik8EUkPA3sqTqWtUQ5EW6oTuEXSWGddBYEpd4XY=';

export const DISHES: Dish[] = [
  {
    id: 1,
    name: 'Malabar Dum Biryani',
    description: 'Aromatic basmati rice slow-cooked with tender chicken and authentic Malabar spices',
    price: '₹220',
    category: 'Biryani',
    emoji: '🍛',
    badge: 'Best Seller',
    image: IMG1
  },
  {
    id: 2,
    name: 'Mutton Dum Biryani',
    description: 'Slow-cooked tender mutton layered with fragrant saffron rice and caramelized onions',
    price: '₹280',
    category: 'Biryani',
    emoji: '🥘',
    badge: "Chef's Choice",
    image: IMG2
  },
  {
    id: 3,
    name: 'Arabian Mandi',
    description: 'Slow-roasted whole chicken over fragrant rice with authentic Arabian spices and dried fruits',
    price: '₹380',
    category: 'Arabian',
    emoji: '🍗',
    badge: 'Signature',
    image: IMG3
  },
  {
    id: 4,
    name: 'Shawarma Platter',
    description: 'Marinated grilled chicken wrapped in fresh bread with garlic sauce, pickles and fries',
    price: '₹120',
    category: 'Arabian',
    emoji: '🌯',
    image: IMG4
  },
  {
    id: 5,
    name: 'Kung Pao Chicken',
    description: 'Wok-tossed chicken with roasted peanuts, bell peppers in bold Szechuan sauce',
    price: '₹180',
    category: 'Chinese',
    emoji: '🥡',
    image: IMG5
  },
  {
    id: 6,
    name: 'Kerala Sadya',
    description: 'Traditional 20+ item vegetarian feast served on fresh banana leaf with authentic Kerala flavors',
    price: '₹150',
    category: 'Kerala',
    emoji: '🍃',
    badge: 'Traditional',
    image: IMG6
  },
  {
    id: 7,
    name: 'Fish Moilee',
    description: 'Delicate fish curry in coconut milk with turmeric and green chillies – a Kerala classic',
    price: '₹180',
    category: 'Kerala',
    emoji: '🐟',
    image: IMG7
  },
  {
    id: 8,
    name: 'Grilled Seafood Platter',
    description: 'Fresh catch of the day – prawns, fish and squid grilled with coastal Kerala spices',
    price: '₹320',
    category: 'Grills & BBQ',
    emoji: '🦐',
    badge: 'Fresh Daily',
    image: IMG8
  },
  {
    id: 9,
    name: 'Mixed Grill BBQ',
    description: 'Juicy chicken tikka, seekh kebab and paneer tikka marinated with aromatic spices',
    price: '₹260',
    category: 'Grills & BBQ',
    emoji: '🔥',
    image: IMG9
  },
  {
    id: 10,
    name: 'Special Fruit Salad',
    description: 'Fresh seasonal fruits with honey, cream and a hint of rose water – refreshing dessert',
    price: '₹80',
    category: 'Desserts',
    emoji: '🍓',
    image: IMG10
  },
  {
    id: 11,
    name: 'Umm Ali',
    description: 'Traditional Arabian bread pudding with nuts, raisins and warm cream – heavenly dessert',
    price: '₹90',
    category: 'Desserts',
    emoji: '🍮',
    badge: 'Arabian Special',
    image: IMG11
  },
  {
    id: 12,
    name: 'Prawn Masala',
    description: 'Plump prawns in rich spicy masala gravy – a seafood lover\'s delight with Kerala touch',
    price: '₹240',
    category: 'Kerala',
    emoji: '🦐',
    image: IMG12
  },
];

// =====================================================
// TESTIMONIALS
// =====================================================
export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Muhammed Aslam K',
    location: 'Chemmad, Malappuram',
    rating: 5,
    review: 'Best biryani in Chemmad! The Malabar Dum Biryani is absolutely authentic and reminds me of home cooking. The family dining area is spacious and very comfortable. We come here every weekend with family.',
    initials: 'MA',
    avatarColor: '#2a5c3f'
  },
  {
    id: 2,
    name: 'Fathima Beevi',
    location: 'Parappanangadi',
    rating: 5,
    review: 'Celebrated my daughter\'s birthday here and the entire experience was wonderful! The staff was so accommodating, the food was delicious, and the decoration they arranged was beautiful. Highly recommended!',
    initials: 'FB',
    avatarColor: '#c9a84c'
  },
  {
    id: 3,
    name: 'Suresh Kumar R',
    location: 'Tirur, Malappuram',
    rating: 5,
    review: 'The Kerala Sadya here is a masterpiece! 20+ items on a banana leaf, all perfectly cooked and authentic. The ambience is premium yet very affordable. Brought my entire office team here.',
    initials: 'SK',
    avatarColor: '#1a3a2a'
  },
  {
    id: 4,
    name: 'Zainab Rashid',
    location: 'Kottakkal',
    rating: 5,
    review: 'Tried their Arabian Mandi for the first time and I was blown away! The meat was so tender and the rice was perfectly flavored. The restaurant is clean, well-decorated and the service is very prompt.',
    initials: 'ZR',
    avatarColor: '#3d7a55'
  },
  {
    id: 5,
    name: 'Priya Nair',
    location: 'Malappuram',
    rating: 5,
    review: 'Came here for a family get-together and the experience exceeded all expectations. The fish moilee was outstanding – just like homemade. Great food, beautiful ambience, and excellent value for money.',
    initials: 'PN',
    avatarColor: '#a07830'
  },
];

// =====================================================
// SPECIAL FEATURES
// =====================================================
export const SPECIAL_FEATURES: SpecialFeature[] = [
  { icon: '👨‍👩‍👧', title: 'Family Dining',        description: 'Dedicated family-friendly zones with comfortable seating for all ages' },
  { icon: '🎂', title: 'Birthday Celebrations', description: 'Special decoration packages and personalized celebration arrangements' },
  { icon: '👥', title: 'Group Dining',          description: 'Private dining rooms and hall for groups of up to 50 people' },
  { icon: '🛵', title: 'Takeaway Available',    description: 'Quick takeaway service with fresh hygienic packaging, ready in minutes' },
  { icon: '🚗', title: 'Free Parking',          description: 'Ample free parking space available for cars and two-wheelers' },
  { icon: '❄️', title: 'AC Seating',            description: 'Fully air-conditioned, comfortable dining experience year round' },
];
