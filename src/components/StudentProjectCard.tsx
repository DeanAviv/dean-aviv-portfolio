import Image from "next/image";
import Link from "next/link";
import { StudentProject } from "@/data/studentProjects";

type StudentProjectCardProps = {
  project: StudentProject;
};

export function StudentProjectCard({ project }: StudentProjectCardProps) {
  const links = [
    { label: "View profile", href: project.profileUrl },
    { label: "View project", href: project.projectUrl },
    { label: "LinkedIn", href: project.linkedInUrl },
    { label: "GitHub", href: project.githubUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="h-full overflow-hidden rounded-lg border border-line bg-panel transition hover:border-accent/45 hover:bg-panel-strong">
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
        {project.note ? (
          <p className="mt-4 rounded-md border border-line bg-white/[0.03] p-3 text-sm leading-6 text-foreground/72">
            {project.note}
          </p>
        ) : null}
        {links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={`${project.title}-${link.label}`}
                href={link.href}
                className="rounded-md border border-line px-3 py-2 text-xs font-semibold text-foreground transition hover:border-accent/50 hover:bg-accent/10 hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}
