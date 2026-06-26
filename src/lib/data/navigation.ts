import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Case Studies', href: '/social-proof' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const COMPANY = {
  name: 'SolarGenius Renewables Limited',
  shortName: 'SolarGenius',
  tagline: "Lagos's most trusted solar installation company",
  phone: '+234 810 234 5678',
  phoneHref: 'tel:+2348102345678',
  whatsapp: '2348102345678',
  email: 'hello@solargenius.ng',
  emailHref: 'mailto:hello@solargenius.ng',
  address: '14 Admiralty Way, Lekki Phase 1, Lagos 106104',
  regNumber: 'RC 1234567',
  founded: '2016',
  hours: {
    weekday: 'Mon – Fri: 8am – 6pm',
    saturday: 'Sat: 9am – 3pm',
    emergency: 'Emergency line: 24/7',
  },
  serviceArea: [
    'Lekki',
    'Victoria Island',
    'Ikoyi',
    'Ajah',
    'Ikeja',
    'Surulere',
    'Yaba',
    'Maryland',
    'Ojodu Berger',
    'Gbagada',
    'Magodo',
    'Oshodi',
  ],
  social: {
    instagram: 'https://instagram.com/solargeniusng',
    linkedin: 'https://linkedin.com/company/solargeniusng',
    facebook: 'https://facebook.com/solargeniusng',
    twitter: 'https://twitter.com/solargeniusng',
  },
} as const;

export function whatsappLink(message: string): string {
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(message)}`;
}
