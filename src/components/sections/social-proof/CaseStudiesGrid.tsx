import { SectionHeader } from '@/components/ui/SectionHeader';
import { CaseStudyCard } from '@/components/sections/social-proof/CaseStudyCard';
import { CASE_STUDIES } from '@/lib/data/case-studies';

export function CaseStudiesGrid() {
  return (
    <section aria-labelledby="case-studies-heading" className="container-width section-padding py-20">
      <SectionHeader
        align="center"
        titleId="case-studies-heading"
        title="Installations Across Lagos and Beyond"
      />
      <div className="mt-12 grid gap-8 sm:grid-cols-2">
        {CASE_STUDIES.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </section>
  );
}
