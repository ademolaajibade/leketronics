'use client';

import { Tooltip } from 'radix-ui';
import { Wordmark } from '@/components/ui/Wordmark';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { CERTIFICATIONS } from '@/lib/data/about';

export function CertificationsSection() {
  return (
    <section aria-labelledby="certifications-heading" className="container-width section-padding py-20">
      <SectionHeader align="center" titleId="certifications-heading" title="Licensed, Certified, Authorised" />
      <Tooltip.Provider delayDuration={150}>
        <ul className="mt-12 flex flex-wrap items-center justify-center gap-6">
          {CERTIFICATIONS.map((cert) => (
            <li key={cert.name}>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <button
                    type="button"
                    className="rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
                  >
                    <Wordmark name={cert.name} />
                  </button>
                </Tooltip.Trigger>
                <Tooltip.Portal>
                  <Tooltip.Content
                    sideOffset={6}
                    className="z-50 max-w-xs rounded-lg bg-slate-900 px-3 py-2 text-xs text-white shadow-card-lg"
                  >
                    {cert.detail} &middot; Obtained {cert.year}
                    <Tooltip.Arrow className="fill-slate-900" />
                  </Tooltip.Content>
                </Tooltip.Portal>
              </Tooltip.Root>
            </li>
          ))}
        </ul>
      </Tooltip.Provider>
    </section>
  );
}
