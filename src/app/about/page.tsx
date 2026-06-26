import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/PageHero';
import { MissionSection } from '@/components/sections/about/MissionSection';
import { ValuesSection } from '@/components/sections/about/ValuesSection';
import { TimelineSection } from '@/components/sections/about/TimelineSection';
import { TeamSection } from '@/components/sections/about/TeamSection';
import { CertificationsSection } from '@/components/sections/about/CertificationsSection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    "The story behind SolarGenius Renewables — founded in Lekki in 2016, now 28 staff and over 450 installations across Lagos.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumb="About Us"
        eyebrow="Our Story"
        title="Built by a Lagos Blackout. Run on Lagos Reliability."
        subtitle="Eight years, 450-plus installations, and a team that still answers the phone after the sale is done."
      />
      <MissionSection />
      <ValuesSection />
      <TimelineSection />
      <TeamSection />
      <CertificationsSection />
    </>
  );
}
