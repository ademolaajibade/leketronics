import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { COMPANY } from '@/lib/data/navigation';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How SolarGenius Renewables collects, uses and protects the information you share with us.',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero breadcrumb="Privacy Policy" title="Privacy Policy" subtitle="Last updated: June 2026" />
      <div className="container-width section-padding mx-auto max-w-3xl py-16">
        <div className="flex flex-col gap-8 text-slate-700">
          <section>
            <h2 className="text-lg font-semibold text-slate-900">What We Collect</h2>
            <p className="mt-2">
              When you submit our contact form, we collect your name, email address, phone number,
              property address, and details about your energy usage (such as your average
              electricity bill, generator costs, and the appliances you want to power). We collect
              this so we can prepare an accurate site assessment and proposal — not for any
              unrelated purpose.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">How We Use Your Information</h2>
            <p className="mt-2">
              Your enquiry is used to contact you about your solar installation request, prepare a
              quote, and, where relevant, share your proposal with our financing partner if you ask
              to be considered for an instalment plan. We do not sell your information to third
              parties.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">How Long We Keep It</h2>
            <p className="mt-2">
              We retain enquiry information for as long as needed to respond to your request and,
              if you become a customer, for the duration of your warranty and maintenance plan
              afterward, in line with the Nigeria Data Protection Act 2023.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Your Rights</h2>
            <p className="mt-2">
              Under the Nigeria Data Protection Act 2023, you can ask us what information we hold
              about you, request a correction, or ask us to delete it where we are not legally
              required to keep it. Email {COMPANY.email} to make any of these requests.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Cookies</h2>
            <p className="mt-2">
              This site does not run third-party advertising or analytics scripts. Any cookies set
              are strictly limited to what is needed for the site to function correctly.
            </p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-slate-900">Contact Us</h2>
            <p className="mt-2">
              Questions about this policy can be sent to{' '}
              <a href={COMPANY.emailHref} className="font-medium text-brand-600 hover:text-brand-700">
                {COMPANY.email}
              </a>{' '}
              or to our office at {COMPANY.address}.
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
