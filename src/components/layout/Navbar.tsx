'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Dialog } from 'radix-ui';
import { Menu, X, Phone, Sun } from 'lucide-react';
import { NAV_ITEMS, COMPANY } from '@/lib/data/navigation';
import { Button } from '@/components/ui/Button';
import { useScrollY } from '@/lib/hooks/useScrollY';
import { cn } from '@/lib/utils';

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isScrolled = useScrollY(80);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const transparent = isHome && !isScrolled;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-200',
        transparent
          ? 'border-b border-transparent bg-transparent'
          : 'border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-sm'
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-width section-padding flex items-center justify-between py-4"
      >
        <Link
          href="/"
          aria-label="SolarGenius Renewables Limited — Home"
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
        >
          <Sun className="size-7 text-solar-amber" aria-hidden="true" />
          <span className="text-lg font-bold tracking-tight text-slate-900">SolarGenius</span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => {
            const active = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative py-2 text-sm font-medium text-slate-700 transition-colors hover:text-brand-600',
                    'after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-brand-600 after:transition-transform after:content-[""]',
                    active && 'font-semibold text-brand-600 after:scale-x-100'
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:flex">
          <Button asChild size="md">
            <Link href="/contact">Get a Free Quote</Link>
          </Button>
        </div>

        <Dialog.Root open={mobileOpen} onOpenChange={setMobileOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label="Open navigation menu"
              className="flex size-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-slate-900/40 data-[state=open]:animate-fade-in" />
            <Dialog.Content
              id="mobile-menu"
              aria-label="Navigation menu"
              className="fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-card-lg focus:outline-none"
            >
              <div className="flex items-center justify-between border-b border-slate-100 p-4">
                <Dialog.Title className="text-base font-semibold text-slate-900">Menu</Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    className="flex size-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100"
                  >
                    <X className="size-6" aria-hidden="true" />
                  </button>
                </Dialog.Close>
              </div>
              <ul className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {NAV_ITEMS.map((item) => {
                  const active = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'block rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50',
                          active && 'bg-brand-50 font-semibold text-brand-600'
                        )}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-col gap-3 border-t border-slate-100 p-4">
                <a
                  href={COMPANY.phoneHref}
                  className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  <Phone className="size-5 text-brand-600" aria-hidden="true" />
                  {COMPANY.phone}
                </a>
                <Button asChild size="lg" fullWidth onClick={() => setMobileOpen(false)}>
                  <Link href="/contact">Get a Free Quote</Link>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </nav>
    </header>
  );
}
