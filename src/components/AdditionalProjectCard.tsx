import Image from "next/image";
import { AdditionalProject } from "@/data/projects";
import { Tag } from "./Tag";

type AdditionalProjectCardProps = {
  project: AdditionalProject;
};

export function AdditionalProjectCard({ project }: AdditionalProjectCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-line bg-panel/75 transition hover:border-accent/35 hover:bg-panel">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-black/30">
        <Image
          src={project.image}
          alt={`${project.title} project placeholder artwork`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
          {project.category}
        </p>
        <h3 className="mt-3 text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
        <details className="group/details mt-4">
          <summary className="cursor-pointer list-none text-sm font-semibold text-accent transition hover:text-accent-strong">
            <span className="group-open/details:hidden">Read more</span>
            <span className="hidden group-open/details:inline">Show less</span>
          </summary>
          <div className="mt-3 space-y-3 text-sm leading-7 text-foreground/68">
            {project.extendedDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </details>
        <div className="mt-auto flex flex-wrap gap-2 pt-5">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
