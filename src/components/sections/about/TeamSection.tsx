import { ExternalLink } from 'lucide-react';
import { Avatar } from '@/components/ui/Avatar';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { TEAM } from '@/lib/data/team';

export function TeamSection() {
  return (
    <section aria-labelledby="team-heading" className="bg-slate-50 py-20">
      <div className="container-width section-padding">
        <SectionHeader align="center" titleId="team-heading" title="The People Behind the Installations" />
        <div className="mt-12 flex gap-6 overflow-x-auto pb-2 lg:grid lg:grid-cols-4 lg:overflow-visible">
          {TEAM.map((member) => (
            <div
              key={member.id}
              className="flex w-64 shrink-0 flex-col items-center gap-3 rounded-2xl bg-white p-6 text-center shadow-card lg:w-auto"
            >
              <Avatar name={member.name} size="lg" />
              <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
              <p className="text-sm font-medium text-brand-600">{member.role}</p>
              <p className="text-sm text-slate-600">{member.bio}</p>
              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"
                >
                  LinkedIn
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
