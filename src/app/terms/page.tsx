import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { COMPANY } from '@/lib/data/navigation';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'The terms that apply to using the SolarGenius Renewables website and requesting a quote.',
};

export default function TermsOfServicePage() {
  return (
    <>
      <PageHero breadcrumb="Terms of Service" title="Terms of Service" subtitle="Last updated: June 2026" />
      <div className="container-width section-padding mx-auto max-w-3xl py-16">
        <div className="flex flex-col gap-8 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Website Content</h2>
            <p className="mt-2">
              Pricing, system specifications and savings figures shown on this site are estimates
              based on typical Lagos installations. Your actual quote will be confirmed after a
              free site assessment, since roof condition, wiring and energy usage vary from
              property to property.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Requesting a Quote</h2>
            <p className="mt-2">
              Submitting our contact form does not create a binding contract. A formal agreement is
              only in place once both parties sign a written proposal following your site
              assessment.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Intellectual Property</h2>
            <p className="mt-2">
              All text, layouts and graphics on this site belong to {COMPANY.name} unless otherwise
              stated, and may not be reproduced without our written permission.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Limitation of Liability</h2>
            <p className="mt-2">
              While we make every effort to keep information on this site accurate and current, we
              are not liable for decisions made solely on the basis of estimated figures shown here
              ahead of a formal site assessment.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Governing Law</h2>
            <p className="mt-2">
              These terms are governed by the laws of the Federal Republic of Nigeria, and any
              dispute will be subject to the jurisdiction of the courts of Lagos State.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Contact Us</h2>
            <p className="mt-2">
              Questions about these terms can be sent to{' '}
              <a href={COMPANY.emailHref} className="font-medium text-brand-600 hover:text-brand-700">
                {COMPANY.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
