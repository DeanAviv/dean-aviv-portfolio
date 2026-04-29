import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

export function ProjectsSection() {
  const featuredProjects = projects.filter((project) => project.isFeatured);

  return (
    <section id="projects" className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={site.sections.projects.eyebrow}
          title={site.sections.projects.title}
          description={site.sections.projects.description}
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
