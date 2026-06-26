import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { COMPANY, whatsappLink } from '@/lib/data/navigation';

export interface FinalCTASectionProps {
  title: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryHref?: string;
  whatsappMessage?: string;
}

export function FinalCTASection({
  title,
  subtitle,
  primaryLabel = 'Schedule a Free Assessment',
  primaryHref = '/contact',
  whatsappMessage = `Hi ${COMPANY.shortName}, I'd like to schedule a free site assessment.`,
}: FinalCTASectionProps) {
  return (
    <section aria-labelledby="final-cta-heading" className="bg-brand-900 py-20">
      <div className="container-width section-padding flex flex-col items-center gap-6 text-center">
        <h2 id="final-cta-heading" className="text-display-md font-bold text-balance text-white">
          {title}
        </h2>
        {subtitle && <p className="max-w-2xl text-brand-100">{subtitle}</p>}
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="xl" className="bg-white text-brand-900 hover:bg-brand-50">
            <Link href={primaryHref}>{primaryLabel}</Link>
          </Button>
          <Button
            asChild
            size="xl"
            variant="outline"
            className="border-emerald-400 text-emerald-300 hover:bg-emerald-400/10"
          >
            <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp Us Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
