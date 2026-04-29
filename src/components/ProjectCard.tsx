import Image from "next/image";
import Link from "next/link";
import { Project } from "@/data/projects";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-panel-strong">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-black/30">
        <Image
          src={project.image}
          alt={`${project.title} placeholder artwork`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
            {project.role}
          </p>
          {project.company ? (
            <span className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              {project.company}
            </span>
          ) : null}
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>
        <p className="mt-3 text-sm leading-7 text-foreground/68">
          {project.extendedDescription}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
        {project.projectLink || project.caseStudyLink ? (
          <div className="mt-6 flex flex-wrap gap-3">
            {project.projectLink ? (
              <Link
                href={project.projectLink}
                className="rounded-md border border-accent/45 px-4 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10"
              >
                View project
              </Link>
            ) : null}
            {project.caseStudyLink ? (
              <Link
                href={project.caseStudyLink}
                className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:bg-white/[0.04]"
              >
                Case study
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </article>
  );
}
