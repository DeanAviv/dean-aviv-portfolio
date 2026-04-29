import { SectionHeader } from "@/components/SectionHeader";
import { StudentProjectsCarousel } from "@/components/StudentProjectsCarousel";
import { site } from "@/data/site";
import { studentProjects } from "@/data/studentProjects";

export function TeachingSection() {
  return (
    <section id="teaching" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={site.sections.teaching.eyebrow}
          title={site.sections.teaching.title}
          description={site.sections.teaching.description}
        />

        <div className="mx-auto mt-7 max-w-2xl rounded-lg border border-accent/20 bg-accent/8 p-5 text-center text-sm leading-7 text-foreground/78">
          {site.sections.teaching.note}
        </div>

        <StudentProjectsCarousel projects={studentProjects} />
      </div>
    </section>
  );
}
