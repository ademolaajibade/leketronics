import type { Metadata } from 'next';
import Link from 'next/link';
import { Sun } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Page Not Found',
};

export default function NotFound() {
  return (
    <div className="container-width section-padding flex min-h-[70vh] flex-col items-center justify-center gap-6 py-20 text-center">
      <Sun className="size-12 text-solar-amber/60" aria-hidden="true" />
      <p className="text-display-2xl font-bold text-brand-600">404</p>
      <h1 className="text-display-sm font-bold text-slate-900">This page took a wrong turn.</h1>
      <p className="max-w-md text-slate-600">{`Let's get you back on track.`}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button asChild size="lg">
          <Link href="/">Go Home</Link>
        </Button>
        <Button asChild variant="outline" size="lg">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  );
}
