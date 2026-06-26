import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ServiceCardsGrid } from '@/components/sections/services/ServiceCardsGrid';
import { FinancingSection } from '@/components/sections/services/FinancingSection';
import { ServiceFAQ } from '@/components/sections/services/ServiceFAQ';
import { FinalCTASection } from '@/components/sections/FinalCTASection';

export const metadata: Metadata = {
  title: 'Solar Installation Services',
  description:
    'Residential and commercial solar installation, maintenance and financing across Lagos. Tier-1 panels, hybrid inverters and a 2-hour emergency response guarantee.',
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumb="Services"
        eyebrow="What We Do"
        title="Solar Systems Built for Lagos Power Conditions"
        subtitle="From a single residential rooftop to a multi-building commercial site, every system starts with a real load audit, not a guess."
      />
      <ServiceCardsGrid />
      <FinancingSection />
      <ServiceFAQ />
      <FinalCTASection
        title="Ready to Talk Through Your Options?"
        subtitle="Book a free site assessment and our engineers will recommend the right service for your property."
      />
    </>
  );
}
