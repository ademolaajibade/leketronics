import { ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { InstallationVisual } from '@/components/ui/InstallationVisual';
import type { CaseStudy } from '@/types';

const TYPE_LABEL: Record<CaseStudy['type'], string> = {
  residential: 'Residential',
  commercial: 'Commercial',
  'off-grid': 'Off-Grid',
};

export function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card variant="outlined" className="flex flex-col overflow-hidden p-0">
      <div className="relative aspect-video w-full">
        <InstallationVisual seed={caseStudy.id} variant={caseStudy.type} className="absolute inset-0" />
        <Badge variant="default" className="absolute left-4 top-4 bg-white/90">
          {TYPE_LABEL[caseStudy.type]}
        </Badge>
      </div>
      <div className="flex flex-col gap-4 p-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{caseStudy.title}</h3>
          <p className="text-sm text-slate-500">{caseStudy.location}</p>
        </div>
        <div className="grid grid-cols-3 gap-3 rounded-xl bg-slate-50 p-4 text-center">
          <div>
            <p className="text-sm font-bold text-brand-700">{caseStudy.systemSize}</p>
            <p className="text-xs text-slate-500">System Size</p>
          </div>
          <div>
            <p className="text-sm font-bold text-brand-700">{caseStudy.annualOutput}</p>
            <p className="text-xs text-slate-500">Annual Output</p>
          </div>
          <div>
            <p className="text-sm font-bold text-brand-700">{caseStudy.billReduction}</p>
            <p className="text-xs text-slate-500">Bill Reduction</p>
          </div>
        </div>
        <p className="text-sm text-slate-600">{caseStudy.description}</p>
        <details className="group">
          <summary className="flex w-fit cursor-pointer list-none items-center gap-1 rounded text-sm font-semibold text-brand-600 hover:text-brand-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2">
            <span className="group-open:hidden">Read Full Case Study</span>
            <span className="hidden group-open:inline">Hide Details</span>
            <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden="true" />
          </summary>
          <dl className="mt-3 grid gap-2 border-t border-slate-100 pt-3 text-sm text-slate-600">
            <div className="flex justify-between gap-4">
              <dt className="font-medium text-slate-700">Panels</dt>
              <dd>{caseStudy.panelCount} panels</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-medium text-slate-700">Inverter</dt>
              <dd>{caseStudy.inverterBrand}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-medium text-slate-700">Battery</dt>
              <dd>{caseStudy.batteryCapacity}</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="font-medium text-slate-700">CO₂ Saved</dt>
              <dd>{caseStudy.co2Saved}</dd>
            </div>
          </dl>
        </details>
      </div>
    </Card>
  );
}
