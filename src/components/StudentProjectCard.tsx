import Link from "next/link";
import { StudentProject } from "@/data/studentProjects";

type StudentProjectCardProps = {
  project: StudentProject;
};

export function StudentProjectCard({ project }: StudentProjectCardProps) {
  const links = [
    { label: "View project", href: project.projectUrl },
    { label: "Watch video", href: project.videoUrl },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <article className="h-full overflow-hidden rounded-lg border border-line bg-panel transition hover:border-accent/45 hover:bg-panel-strong">
      <div className="aspect-video border-b border-line bg-black/30">
        <iframe
          className="h-full w-full"
          src={project.embedUrl}
          title={`${project.title} video`}
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <div className="p-5">
        <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
          Student spotlight
        </p>
        <h3 className="mt-3 text-xl font-semibold text-foreground">
          {project.title}
        </h3>
        <div className="mt-2 space-y-1 text-sm font-medium text-foreground/70">
          {project.students.map((student) => (
            <Link
              key={student.linkedInUrl}
              href={student.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block transition hover:text-accent"
            >
              {student.name}
            </Link>
          ))}
        </div>
        {links.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {links.map((link) => (
              <Link
                key={`${project.title}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
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
