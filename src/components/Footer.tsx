import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-line pt-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            {site.contact.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
            {site.contact.title}
          </h2>
          <div className="mt-5 max-w-2xl space-y-4 leading-8 text-muted">
            {site.contact.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3 md:items-end md:justify-end">
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link
              href={site.contact.actions.email.href}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-accent/60 bg-accent px-5 py-2.5 text-sm font-semibold text-gray-950 transition hover:bg-accent-strong"
            >
              {site.contact.actions.email.label}
            </Link>
            <Link
              href={site.contact.actions.linkedIn.href}
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-line bg-white/[0.03] px-5 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:bg-accent/10"
            >
              {site.contact.actions.linkedIn.label}
            </Link>
          </div>
          <p className="text-sm leading-6 text-muted">{site.contact.helperText}</p>
        </div>
      </div>
    </footer>
  );
}
