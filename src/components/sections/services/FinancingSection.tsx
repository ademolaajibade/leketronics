import Link from 'next/link';
import { Wallet, CreditCard, Handshake, Check } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Card } from '@/components/ui/Card';
import { FINANCING_OPTIONS } from '@/lib/data/services';

const ICONS = [Wallet, CreditCard, Handshake];

export function FinancingSection() {
  return (
    <section aria-labelledby="financing-heading" className="bg-slate-50 py-20">
      <div className="container-width section-padding">
        <SectionHeader
          align="center"
          titleId="financing-heading"
          title="Solar Without Paying It All Upfront"
        />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {FINANCING_OPTIONS.map((option, i) => {
            const Icon = ICONS[i];
            return (
              <Card key={option.title} variant="outlined" className="flex flex-col gap-4 p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{option.title}</h3>
                <p className="text-sm text-slate-600">{option.description}</p>
                <ul className="flex flex-col gap-2">
                  {option.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-600" aria-hidden="true" />
                      {pro}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?service=financing"
                  className="mt-auto text-sm font-semibold text-brand-600 hover:text-brand-700"
                >
                  Learn More →
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
