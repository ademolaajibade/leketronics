import { ShieldCheck, ReceiptText, LifeBuoy } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { VALUES } from '@/lib/data/about';

const ICONS = [ShieldCheck, ReceiptText, LifeBuoy];

export function ValuesSection() {
  return (
    <section aria-labelledby="values-heading" className="bg-slate-50 py-20">
      <div className="container-width section-padding">
        <SectionHeader align="center" titleId="values-heading" title="What We Won't Compromise On" />
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {VALUES.map((value, i) => {
            const Icon = ICONS[i];
            return (
              <div key={value.title} className="flex flex-col items-center gap-4 text-center">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-card">
                  <Icon className="size-7" aria-hidden="true" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
