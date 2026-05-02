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

        <StudentProjectsCarousel projects={studentProjects} />
      </div>
    </section>
  );
}
