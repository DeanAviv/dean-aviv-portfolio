import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section id="projects" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Featured Projects"
          title="Production work, tools, and playable experiments."
          description="A first pass at Dean's project shelf. Replace the placeholder images and expand the text as the portfolio grows."
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
