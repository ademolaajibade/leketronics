import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { PricingSection } from '@/components/sections/pricing/PricingSection';
import { WhatsIncludedTable } from '@/components/sections/pricing/WhatsIncludedTable';
import { PricingFAQ } from '@/components/sections/pricing/PricingFAQ';
import { CustomQuoteCTA } from '@/components/sections/pricing/CustomQuoteCTA';

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Transparent solar installation pricing for Lagos homes and businesses. All packages include supply, installation, commissioning and 2 years of free maintenance.',
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        breadcrumb="Pricing"
        eyebrow="Transparent Pricing"
        title="Simple, Transparent Pricing. No Surprises."
        subtitle="All prices include supply, installation, commissioning, and 2 years of free maintenance."
      />
      <PricingSection />
      <WhatsIncludedTable />
      <PricingFAQ />
      <CustomQuoteCTA />
    </>
  );
}
