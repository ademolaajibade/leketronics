import { Fuel, PlugZap, Clock3, ClipboardCheck, Ruler, HardHat, BadgeCheck } from 'lucide-react';
import type { StatItem, ProcessStep } from '@/types';
import type { LucideIcon } from 'lucide-react';

export const HOMEPAGE_STATS: StatItem[] = [
  { value: '450', label: 'Installations Completed', suffix: '+' },
  { value: '2.1', label: 'Saved in Electricity Bills', suffix: 'B Naira' },
  { value: '99.2', label: 'System Uptime Rate', suffix: '%' },
  { value: '8', label: 'Years Serving Lagos', suffix: '' },
];

export interface ProblemItem {
  icon: LucideIcon;
  headline: string;
  body: string;
}

export const PROBLEM_ITEMS: ProblemItem[] = [
  {
    icon: Fuel,
    headline: 'Diesel costs that never go down',
    body: '₦80,000 or more a month on generator fuel, and it still cuts at 2am when the tank runs dry.',
  },
  {
    icon: PlugZap,
    headline: 'A grid you can\'t plan around',
    body: "EKEDC gives you a few hours a day if you're lucky, and never at the times you actually need it.",
  },
  {
    icon: Clock3,
    headline: 'Hours lost every single week',
    body: 'Generator changeovers, fuel runs and outages quietly eat into the productivity of your home or business.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Free Site Assessment',
    description: 'We visit your property, study your energy usage, and design the right system for your roof and budget.',
  },
  {
    step: 2,
    title: 'Custom System Design',
    description: 'Our engineers create a detailed proposal with panel layout, inverter spec, and projected savings.',
  },
  {
    step: 3,
    title: 'Professional Installation',
    description: 'Our certified team handles everything — panels, wiring, inverter, battery — with zero damage to your property.',
  },
  {
    step: 4,
    title: 'Commissioning & Handover',
    description: 'We test every component, handle EKEDC documentation where applicable, and walk you through how to monitor your power in real time.',
  },
];

export const PROCESS_ICONS: LucideIcon[] = [ClipboardCheck, Ruler, HardHat, BadgeCheck];

export const TRUST_BADGES = [
  'Jinko Solar',
  'Canadian Solar',
  'LONGi Green Energy',
  'NERC Licensed',
  'SON Certified',
] as const;
