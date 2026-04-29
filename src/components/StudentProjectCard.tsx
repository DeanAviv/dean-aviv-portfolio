import Image from "next/image";
import Link from "next/link";
import { StudentProject } from "@/data/studentProjects";

type StudentProjectCardProps = {
  project: StudentProject;
};

export function StudentProjectCard({ project }: StudentProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-line bg-panel transition hover:border-accent/45 hover:bg-panel-strong">
      <div className="relative aspect-[4/3] border-b border-line bg-black/30">
        <Image
          src={project.image}
          alt={`${project.title} student project placeholder`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          Student spotlight
        </p>
        <h3 className="mt-3 text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-foreground/70">
          by {project.studentName}
        </p>
        <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
        {project.profileUrl ? (
          <Link
            href={project.profileUrl}
            className="mt-5 inline-flex text-sm font-semibold text-accent transition hover:text-accent-strong"
          >
            View profile
          </Link>
        ) : null}
      </div>
    </article>
  );
}
