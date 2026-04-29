import Image from "next/image";
import Link from "next/link";
import { MainProject } from "@/data/projects";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: MainProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-panel transition duration-300 hover:-translate-y-1 hover:border-accent/45 hover:bg-panel-strong">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-black/30">
        <Image
          src={project.image}
          alt={`${project.title} placeholder artwork`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
            {project.role}
          </p>
          <span className="rounded-full border border-line bg-white/[0.025] px-2.5 py-1 text-xs leading-5 text-muted">
            {project.context}
          </span>
        </div>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>
        <details className="group/details mt-5">
          <summary className="inline-flex cursor-pointer list-none rounded-md border border-accent/35 px-3 py-2 text-sm font-semibold text-accent transition hover:bg-accent/10 hover:text-accent-strong">
            <span className="group-open/details:hidden">Read more</span>
            <span className="hidden group-open/details:inline">Show less</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm leading-7 text-foreground/68">
            {project.extendedDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
        <div className="mt-auto pt-6">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
          {project.links.length > 0 ? (
            <div className="mt-5 flex flex-wrap gap-4 border-t border-line pt-4">
              {project.links.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-accent transition hover:text-accent-strong"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
