import { Check, X } from 'lucide-react';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { PRICING_COMPARISON } from '@/lib/data/pricing';

const COLUMNS = [
  { id: 'essential', label: 'Essential' },
  { id: 'standard', label: 'Standard' },
  { id: 'premium', label: 'Premium' },
];

function renderCell(value: string | boolean) {
  if (typeof value === 'boolean') {
    return value ? (
      <Check className="mx-auto size-4 text-emerald-600" aria-hidden="true" />
    ) : (
      <X className="mx-auto size-4 text-slate-300" aria-hidden="true" />
    );
  }
  return <span>{value}</span>;
}

export function WhatsIncludedTable() {
  return (
    <section aria-labelledby="included-heading" className="bg-slate-50 py-20">
      <div className="container-width section-padding">
        <SectionHeader align="center" titleId="included-heading" title="What's Included, Tier by Tier" />

        <table className="mt-12 hidden w-full border-collapse overflow-hidden rounded-2xl bg-white text-sm shadow-card sm:table">
          <caption className="sr-only">
            Comparison of what is included in the Essential, Standard and Premium residential packages
          </caption>
          <thead>
            <tr className="bg-slate-100 text-left">
              <th scope="col" className="p-4 font-semibold text-slate-700">
                Feature
              </th>
              {COLUMNS.map((col) => (
                <th key={col.id} scope="col" className="p-4 text-center font-semibold text-slate-700">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PRICING_COMPARISON.map((row) => (
              <tr key={row.label} className="border-t border-slate-100">
                <th scope="row" className="p-4 text-left font-medium text-slate-700">
                  {row.label}
                </th>
                {COLUMNS.map((col) => (
                  <td key={col.id} className="p-4 text-center text-slate-600">
                    {renderCell(row.values[col.id])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-12 flex flex-col gap-6 sm:hidden">
          {COLUMNS.map((col) => (
            <div key={col.id} className="rounded-2xl bg-white p-5 shadow-card">
              <h3 className="text-base font-bold text-slate-900">{col.label}</h3>
              <dl className="mt-3 flex flex-col gap-2">
                {PRICING_COMPARISON.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-3 border-t border-slate-100 py-2 text-sm"
                  >
                    <dt className="text-slate-600">{row.label}</dt>
                    <dd className="font-medium text-slate-800">{renderCell(row.values[col.id])}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
