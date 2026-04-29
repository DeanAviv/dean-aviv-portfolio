import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer id="contact" className="px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 border-t border-line pt-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
            Let&apos;s build something playable.
          </h2>
          <p className="mt-5 max-w-2xl leading-8 text-muted">
            Available for Unity development, technical instruction, and focused
            consulting. Replace this contact copy with your preferred call to action.
          </p>
          <Link
            href={`mailto:${site.email}`}
            className="mt-7 inline-flex text-lg font-semibold text-accent transition hover:text-accent-strong"
          >
            {site.email}
          </Link>
        </div>

        <div className="flex gap-4 md:justify-end">
          {site.socials.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent/50 hover:bg-accent/10"
            >
              {social.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
