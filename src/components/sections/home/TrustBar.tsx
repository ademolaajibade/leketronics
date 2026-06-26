import { Wordmark } from '@/components/ui/Wordmark';
import { TRUST_BADGES } from '@/lib/data/homepage';

export function TrustBar() {
  return (
    <section aria-label="Certifications and trusted brands" className="border-y border-slate-100 bg-slate-50">
      <div className="container-width section-padding flex flex-col items-center gap-4 py-6 sm:flex-row sm:gap-8">
        <p className="shrink-0 text-sm font-medium text-slate-500">
          Trusted by Lagos homeowners and businesses. Certified by:
        </p>
        <ul className="flex w-full gap-6 overflow-x-auto sm:w-auto sm:flex-wrap sm:overflow-visible">
          {TRUST_BADGES.map((name) => (
            <li key={name} className="shrink-0">
              <Wordmark name={name} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
