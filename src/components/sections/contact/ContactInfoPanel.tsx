import { MapPin, Phone, Mail, Clock, AlertTriangle } from 'lucide-react';
import { COMPANY, whatsappLink } from '@/lib/data/navigation';

export interface ContactInfoPanelProps {
  whatsappMessage: string;
}

export function ContactInfoPanel({ whatsappMessage }: ContactInfoPanelProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
        <h2 className="text-lg font-semibold text-slate-900">Reach Us Directly</h2>
        <ul className="mt-5 flex flex-col gap-4 text-sm text-slate-700">
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
            {COMPANY.address}
          </li>
          <li>
            <a href={COMPANY.phoneHref} className="flex items-center gap-3 hover:text-brand-600">
              <Phone className="size-5 shrink-0 text-brand-600" aria-hidden="true" />
              {COMPANY.phone}
            </a>
          </li>
          <li>
            <a href={COMPANY.emailHref} className="flex items-center gap-3 hover:text-brand-600">
              <Mail className="size-5 shrink-0 text-brand-600" aria-hidden="true" />
              {COMPANY.email}
            </a>
          </li>
          <li className="flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-brand-600" aria-hidden="true" />
            <span>
              {COMPANY.hours.weekday}
              <br />
              {COMPANY.hours.saturday}
              <br />
              {COMPANY.hours.emergency}
            </span>
          </li>
        </ul>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 text-sm font-semibold text-white hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
        >
          Chat With Us on WhatsApp
        </a>
      </div>

      <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-5 text-sm text-red-800">
        <AlertTriangle className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
        <p>
          System outage or storm damage? Call our emergency line immediately:{' '}
          <a href={COMPANY.phoneHref} className="font-semibold underline">
            {COMPANY.phone}
          </a>
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200">
        <iframe
          title="SolarGenius Renewables office location map"
          src={`https://www.google.com/maps?q=${encodeURIComponent(COMPANY.address)}&output=embed`}
          className="h-64 w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
