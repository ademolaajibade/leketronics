import { SectionHeader } from '@/components/ui/SectionHeader';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { TESTIMONIALS } from '@/lib/data/testimonials';

export function TestimonialsSection() {
  return (
    <section aria-labelledby="testimonials-heading" className="py-20">
      <div className="container-width section-padding">
        <SectionHeader
          align="center"
          titleId="testimonials-heading"
          title="What Lagos Homeowners and Business Owners Say"
        />
        <div className="mt-12">
          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>
      </div>
    </section>
  );
}
