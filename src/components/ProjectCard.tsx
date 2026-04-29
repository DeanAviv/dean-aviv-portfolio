import Image from "next/image";
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
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          {project.role}
        </p>
        <h3 className="mt-3 text-2xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 leading-7 text-muted">{project.description}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </article>
  );
}
