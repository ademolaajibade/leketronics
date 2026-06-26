import { Home, Building2, Wrench, Wallet } from 'lucide-react';
import type { ServiceItem, FinancingOption } from '@/types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'residential',
    slug: 'residential',
    icon: Home,
    title: 'Residential Solar Installation',
    description:
      "Custom-designed solar systems for Lagos homes, sized to your actual energy habits rather than a one-size-fits-all package. Every installation includes a site survey and a written savings projection before you commit to anything.",
    features: [
      'Free on-site energy audit and roof assessment',
      'Tier-1 panels from Jinko Solar, Canadian Solar or LONGi',
      'Hybrid inverter sized for your specific load, not guesswork',
      'Optional lithium battery backup for full blackout coverage',
      'Two years of free maintenance included on every installation',
    ],
    cta: 'Get a Quote for Residential Installation',
  },
  {
    id: 'commercial',
    slug: 'commercial',
    icon: Building2,
    title: 'Commercial Solar Installation',
    description:
      "For offices, factories and retail spaces where diesel is usually the single largest controllable cost on the books, regardless of which EKEDC supply band you're on. We design three-phase systems that work alongside your existing generator setup, not against it.",
    features: [
      'Load audit covering your highest-demand equipment and shift patterns',
      'Three-phase inverters from Sungrow, Huawei or Deye',
      'Battery sizing built around your actual outage hours, not a default spec',
      'Engineering documentation handled for grid-tied, export-capable systems',
      'Phased rollout available for multi-building or multi-branch sites',
    ],
    cta: 'Get a Quote for Commercial Installation',
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    icon: Wrench,
    title: 'Maintenance & Repair',
    description:
      "Solar systems in Lagos work hard through harmattan dust, heavy rains and constant cycling between grid, battery and generator. Our maintenance division checks panel output, inverter logs and battery health on a schedule, and we get to fault calls fast because our technicians are based across Lekki and Ikeja.",
    features: [
      'Quarterly panel cleaning and output inspection',
      'Inverter firmware updates and fault diagnostics',
      'Battery health checks to catch degradation before it costs you capacity',
      '2-hour emergency response guarantee within Lagos mainland and island',
      'Maintenance plans available even if we did not install your original system',
    ],
    cta: 'Book a Maintenance Visit',
  },
  {
    id: 'financing',
    slug: 'financing',
    icon: Wallet,
    title: 'Financing Options',
    description:
      "Most of our clients don't pay for their system in one transfer. Whether you'd rather spread the cost monthly through our Sterling Bank financing partnership or move to a ₦0-upfront lease, we structure the numbers around what you're already spending on diesel.",
    features: [
      'Outright purchase with full ownership and the strongest long-term return',
      'Instalment plans from 12 to 36 months through our banking partners',
      'Solar lease option with no upfront cost and a fixed monthly fee',
      'Financing pre-qualification completed within 48 hours',
      'No early repayment penalties on any of our instalment plans',
    ],
    cta: 'Discuss Financing Options',
  },
];

export const FINANCING_OPTIONS: FinancingOption[] = [
  {
    title: 'Outright Purchase',
    description: 'Pay once, own it fully. Best total return on investment over the life of the system.',
    pros: ['No interest or financing fees', 'Full ownership from day one', 'Highest long-term savings'],
  },
  {
    title: 'Monthly Instalments',
    description: 'Spread the cost over 12 to 36 months through our financing partners, including Sterling Bank.',
    pros: ['Pre-qualification within 48 hours', 'No early repayment penalty', 'Fixed monthly payments'],
  },
  {
    title: 'Solar Lease',
    description: 'Zero naira upfront. We own and maintain the system; you pay a fixed monthly fee lower than your current bills.',
    pros: ['No upfront cost at all', 'We handle all maintenance', 'Fee typically below current diesel spend'],
  },
];
