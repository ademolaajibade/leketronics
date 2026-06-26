import type { PricingTier, PricingComparisonRow } from '@/types';

const RESIDENTIAL_FEATURE_LABELS = [
  'Free site survey & supply-band assessment',
  'Tier-1 monocrystalline panels, 25-year warranty',
  'Hybrid inverter with real-time monitoring app',
  'Lithium battery backup',
  '2 years free maintenance',
  'Surge & lightning protection',
  'Priority 2-hour emergency response',
];

const COMMERCIAL_FEATURE_LABELS = [
  'Full load audit & three-phase system design',
  'Tier-1 panels, 25-year performance warranty',
  'Three-phase hybrid inverter with monitoring',
  'Lithium battery backup sized to your outage hours',
  '2 years free maintenance',
  'Grid-tie documentation support',
  'Dedicated account manager',
  'Custom phased rollout for multi-site operations',
];

function buildFeatures(labels: string[], includedFlags: boolean[]) {
  return labels.map((label, i) => ({ label, included: includedFlags[i] }));
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'essential',
    name: 'Essential',
    systemSize: '3kW',
    priceRange: '₦1.8M – ₦2.4M',
    monthlyFrom: '₦45,000',
    description:
      'A solid entry point for smaller homes and flats looking to cut their generator dependence without a full battery backup system. Covers daytime loads — fridge, fans, TV, lighting — directly off solar.',
    features: buildFeatures(RESIDENTIAL_FEATURE_LABELS, [true, true, true, false, true, true, false]),
    recommended: false,
    type: 'residential',
  },
  {
    id: 'standard',
    name: 'Standard',
    systemSize: '5kW',
    priceRange: '₦2.8M – ₦3.6M',
    monthlyFrom: '₦65,000',
    description:
      'Our most requested residential package, sized for a typical 3–4 bedroom Lagos home running AC units, a deep freezer and the usual evening load. Includes battery backup big enough to carry the house through most outages.',
    features: buildFeatures(RESIDENTIAL_FEATURE_LABELS, [true, true, true, true, true, true, false]),
    recommended: true,
    type: 'residential',
  },
  {
    id: 'premium',
    name: 'Premium',
    systemSize: '10kW',
    priceRange: '₦5.2M – ₦6.8M',
    monthlyFrom: '₦115,000',
    description:
      'Built for larger homes that simply will not tolerate downtime — multiple AC units, a borehole pump, home office equipment. The battery bank is sized to get you through a full night and into the next afternoon.',
    features: buildFeatures(RESIDENTIAL_FEATURE_LABELS, [true, true, true, true, true, true, true]),
    recommended: false,
    type: 'residential',
  },
  {
    id: 'business',
    name: 'Business',
    systemSize: '20kW',
    priceRange: '₦9.5M – ₦12M',
    monthlyFrom: '₦210,000',
    description:
      "For offices, retail outlets and light industrial units on a three-phase connection looking to cut diesel spend significantly. Designed around your actual load profile rather than a fixed package.",
    features: buildFeatures(COMMERCIAL_FEATURE_LABELS, [true, true, true, true, true, true, false, false]),
    recommended: false,
    type: 'commercial',
  },
  {
    id: 'industrial',
    name: 'Industrial',
    systemSize: '50kW+',
    priceRange: 'Custom Quote',
    monthlyFrom: 'Custom',
    description:
      'For factories, large commercial complexes and multi-building sites with energy demands above 50kW. Every Industrial system is custom-engineered after a full load audit, which is why we quote it individually.',
    features: buildFeatures(COMMERCIAL_FEATURE_LABELS, [true, true, true, true, true, true, true, true]),
    recommended: false,
    type: 'commercial',
  },
];

export const PRICING_COMPARISON: PricingComparisonRow[] = [
  { label: 'Panels', values: { essential: 'Jinko Solar Tier-1', standard: 'Jinko Solar Tier-1', premium: 'Canadian Solar Tier-1' } },
  { label: 'Inverter Brand', values: { essential: 'Growatt', standard: 'Growatt Hybrid', premium: 'Sungrow Hybrid' } },
  { label: 'Battery', values: { essential: false, standard: '5.3kWh Lithium', premium: '10.6kWh Lithium' } },
  { label: 'Wiring', values: { essential: true, standard: true, premium: true } },
  { label: 'Installation', values: { essential: true, standard: true, premium: true } },
  { label: 'Commissioning', values: { essential: true, standard: true, premium: true } },
  { label: 'Warranty', values: { essential: '10-year inverter', standard: '10-year inverter', premium: '12-year inverter' } },
  { label: 'Monitoring App', values: { essential: false, standard: true, premium: true } },
  { label: 'Maintenance Plan', values: { essential: '2 years', standard: '2 years', premium: '2 years priority' } },
];
