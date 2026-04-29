import { SectionHeader } from "@/components/SectionHeader";
import { StudentProjectCard } from "@/components/StudentProjectCard";
import { studentProjects } from "@/data/studentProjects";

export function TeachingSection() {
  return (
    <section id="teaching" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Teaching & Student Work"
          title="Wait till you meet my students."
          description="I’m proud of every game they build. Here are some of their projects."
        />

        <div className="mx-auto mt-7 max-w-2xl rounded-lg border border-accent/20 bg-accent/8 p-5 text-center text-sm leading-7 text-foreground/78">
          These students earned the spotlight through curiosity, practice, and the
          hard work of making something playable.
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {studentProjects.map((project) => (
            <StudentProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
