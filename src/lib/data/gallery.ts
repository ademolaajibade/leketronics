import { CASE_STUDIES } from '@/lib/data/case-studies';
import type { CaseStudy } from '@/types';

export interface GalleryItem {
  id: string;
  caseStudyId: string;
  label: string;
  type: CaseStudy['type'];
  location: string;
  systemSize: string;
}

const SHOT_LABELS = ['Panel Installation', 'Inverter & Battery Setup', 'Project Handover'];

export const GALLERY_ITEMS: GalleryItem[] = CASE_STUDIES.flatMap((cs) =>
  SHOT_LABELS.map((label, i) => ({
    id: `${cs.id}-${i + 1}`,
    caseStudyId: cs.id,
    label,
    type: cs.type,
    location: cs.location,
    systemSize: cs.systemSize,
  }))
);
