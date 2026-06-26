import type { Metadata } from 'next';
import { HeroSection } from '@/components/sections/home/HeroSection';
import { TrustBar } from '@/components/sections/home/TrustBar';
import { ProblemSection } from '@/components/sections/home/ProblemSection';
import { StatsSection } from '@/components/sections/home/StatsSection';
import { ProcessSection } from '@/components/sections/home/ProcessSection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';
import { SavingsCalculatorTeaser } from '@/components/sections/home/SavingsCalculatorTeaser';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Solar Installation Lagos',
  description:
    "Cut your electricity bill by up to 90%. SolarGenius installs premium residential and commercial solar systems across Lagos, with battery backup and a 2-hour emergency response guarantee.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <StatsSection />
      <ProcessSection />
      <TestimonialsSection />
      <SavingsCalculatorTeaser />
      <FinalCTASection
        title="Ready to Stop Paying for Power You Don't Have?"
        subtitle="Book a free site assessment and get a written savings estimate within 4 business hours."
      />
    </>
  );
}
