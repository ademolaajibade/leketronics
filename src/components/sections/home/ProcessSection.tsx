import { SectionHeader } from '@/components/ui/SectionHeader';
import { PROCESS_STEPS, PROCESS_ICONS } from '@/lib/data/homepage';

export function ProcessSection() {
  return (
    <section aria-labelledby="process-heading" className="bg-slate-50 py-20">
      <div className="container-width section-padding">
        <SectionHeader
          align="center"
          eyebrow="How It Works"
          titleId="process-heading"
          title="From First Call to First Power — In 5 Days."
        />
        <ol className="mt-12 grid gap-10 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = PROCESS_ICONS[i];
            return (
              <li key={step.step} className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-600 font-bold text-white">
                    {step.step}
                  </span>
                  <Icon className="size-6 text-brand-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
