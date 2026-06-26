import { SectionHeader } from '@/components/ui/SectionHeader';
import { FAQAccordion } from '@/components/sections/FAQAccordion';
import { FAQS } from '@/lib/data/faqs';

const INSTALLATION_FAQS = FAQS.filter((faq) => faq.category === 'installation');

export function ServiceFAQ() {
  return (
    <section aria-labelledby="service-faq-heading" className="container-width section-padding py-20">
      <SectionHeader
        align="center"
        eyebrow="Common Questions"
        titleId="service-faq-heading"
        title="Installation Questions, Answered"
      />
      <div className="mx-auto mt-12 max-w-3xl">
        <FAQAccordion items={INSTALLATION_FAQS} />
      </div>
    </section>
  );
}
