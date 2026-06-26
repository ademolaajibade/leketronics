import Link from 'next/link';
import { Sun, Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY, NAV_ITEMS, whatsappLink } from '@/lib/data/navigation';
import { SERVICES } from '@/lib/data/services';

const SOCIAL_LINKS = [
  { label: 'Instagram', href: COMPANY.social.instagram },
  { label: 'LinkedIn', href: COMPANY.social.linkedin },
  { label: 'Facebook', href: COMPANY.social.facebook },
  { label: 'Twitter', href: COMPANY.social.twitter },
];

export function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="container-width section-padding grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 text-white">
            <Sun className="size-7 text-solar-amber" aria-hidden="true" />
            <span className="text-lg font-bold tracking-tight">SolarGenius</span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            SolarGenius Renewables Limited designs and installs residential and commercial solar
            systems across Lagos. Every installation is backed by Tier-1 components and a real
            local support line.
          </p>
          <ul className="flex flex-wrap items-center gap-2">
            {SOCIAL_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`SolarGenius on ${label}`}
                  className="flex h-9 items-center rounded-full bg-white/5 px-3.5 text-xs font-medium text-slate-300 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <p className="text-xs text-slate-500">{COMPANY.regNumber}</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-slate-400 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Services</h3>
          <ul className="mt-4 flex flex-col gap-3">
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link
                  href={`/contact?service=${service.slug}`}
                  className="text-sm text-slate-400 hover:text-white"
                >
                  {service.title.replace(' Solar Installation', '').replace(' & Repair', '')}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white">Contact</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <li>
              <a href={COMPANY.phoneHref} className="flex items-center gap-2 hover:text-white">
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {COMPANY.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappLink('Hi SolarGenius, I would like to enquire about solar installation.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white"
              >
                WhatsApp Us
              </a>
            </li>
            <li>
              <a href={COMPANY.emailHref} className="flex items-center gap-2 hover:text-white">
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {COMPANY.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
              <span>{COMPANY.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-width section-padding flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} {COMPANY.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms of Service
            </Link>
            <span>Made in Lagos 🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
