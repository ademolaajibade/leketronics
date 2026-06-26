import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  systemSize: string;
  monthlySavings: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  location: string;
  type: 'residential' | 'commercial' | 'off-grid';
  systemSize: string;
  panelCount: number;
  inverterBrand: string;
  batteryCapacity: string;
  annualOutput: string;
  co2Saved: string;
  billReduction: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  cta: string;
  slug: string;
}

export interface PricingFeature {
  label: string;
  included: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  systemSize: string;
  priceRange: string;
  monthlyFrom: string;
  description: string;
  features: PricingFeature[];
  recommended: boolean;
  type: 'residential' | 'commercial';
}

export interface PricingComparisonRow {
  label: string;
  values: Record<string, string | boolean>;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  linkedin?: string;
}

export type FAQCategory = 'pricing' | 'installation' | 'maintenance' | 'financing';

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface ValuePillar {
  title: string;
  description: string;
}

export interface TimelineMilestone {
  year: string;
  title: string;
}

export interface Certification {
  name: string;
  detail: string;
  year: string;
}

export interface FinancingOption {
  title: string;
  description: string;
  pros: string[];
}
