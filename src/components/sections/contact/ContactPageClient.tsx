'use client';

import { useSearchParams } from 'next/navigation';
import { MultiStepForm } from '@/components/sections/contact/MultiStepForm';
import { ContactInfoPanel } from '@/components/sections/contact/ContactInfoPanel';
import { SERVICES } from '@/lib/data/services';
import { PRICING_TIERS } from '@/lib/data/pricing';
import { COMPANY } from '@/lib/data/navigation';

export function ContactPageClient() {
  const searchParams = useSearchParams();
  const serviceSlug = searchParams.get('service');
  const packageId = searchParams.get('package');

  const service = SERVICES.find((s) => s.slug === serviceSlug);
  const tier = PRICING_TIERS.find((t) => t.id === packageId);

  const defaultNotes = service
    ? `Enquiry regarding: ${service.title}.`
    : tier
      ? `Enquiry regarding the ${tier.name} package (${tier.systemSize}).`
      : '';

  const whatsappMessage = `Hi ${COMPANY.shortName}, I'd like to enquire about solar installation for my property.`;

  return (
    <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
      <MultiStepForm defaultNotes={defaultNotes} />
      <ContactInfoPanel whatsappMessage={whatsappMessage} />
    </div>
  );
}
