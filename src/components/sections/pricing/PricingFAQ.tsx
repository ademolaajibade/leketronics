import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FAQS } from '@/lib/data/faqs';

const PRICING_FAQS = FAQS.filter((faq) => faq.category === 'pricing');

export function PricingFAQ() {
  return (
    <section aria-labelledby="pricing-faq-heading" className="container-width section-padding py-20">
      <SectionHeader
        align="center"
        eyebrow="Common Questions"
        titleId="pricing-faq-heading"
        title="Pricing Questions, Answered"
      />
      <div className="mx-auto mt-12 max-w-3xl">
        <FAQAccordion items={PRICING_FAQS} />
      </div>
    </section>
  );
}
