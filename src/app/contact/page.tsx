import type { Metadata } from 'next';
import { Suspense } from 'react';
import { PageHero } from '@/components/sections/PageHero';
import { ContactPageClient } from '@/components/sections/contact/ContactPageClient';
import { ContactFormSkeleton } from '@/components/sections/contact/ContactFormSkeleton';
import { ServiceAreaSection } from '@/components/sections/contact/ServiceAreaSection';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    "Book a free solar site assessment in Lagos. Fill in the form and we'll get back to you within 4 business hours with a preliminary estimate.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumb="Contact"
        eyebrow="Get In Touch"
        title="Let's Design Your Energy Independence."
        subtitle="Fill in the form and we'll get back to you within 4 business hours with a preliminary estimate."
      />
      <div className="container-width section-padding py-20">
        <Suspense fallback={<ContactFormSkeleton />}>
          <ContactPageClient />
        </Suspense>
      </div>
      <ServiceAreaSection />
    </>
  );
}
