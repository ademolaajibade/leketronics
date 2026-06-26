import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { ImpactStats } from '@/components/sections/social-proof/ImpactStats';
import { CaseStudiesGrid } from '@/components/sections/social-proof/CaseStudiesGrid';
import { GallerySection } from '@/components/sections/social-proof/GallerySection';
import { TestimonialsSection } from '@/components/sections/home/TestimonialsSection';

export const metadata: Metadata = {
  title: 'Case Studies & Customer Reviews',
  description:
    'See real SolarGenius installations across Lagos — system specs, measured savings, and verified customer reviews from residential, commercial and off-grid projects.',
};

export default function SocialProofPage() {
  return (
    <>
      <PageHero
        breadcrumb="Case Studies"
        eyebrow="Proof, Not Promises"
        title="Real Systems. Real Results. Real Lagos."
        subtitle="Every installation here was completed by our team. Every number is verified."
      />
      <ImpactStats />
      <CaseStudiesGrid />
      <GallerySection />
      <TestimonialsSection />
    </>
  );
}
