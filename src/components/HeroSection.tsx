import { LinkButton } from "@/components/LinkButton";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-4xl">
          <p className="font-mono text-sm uppercase tracking-[0.28em] text-accent">
            {site.role}
          </p>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] text-foreground sm:text-7xl lg:text-8xl">
            {site.heroLines.map((line) => (
              <span key={line} className="typing-line">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-9 text-foreground/82">
            {site.heroKicker}
          </p>
          <p className="mt-4 max-w-2xl text-base leading-8 text-muted sm:text-lg">
            {site.heroIntro}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="#projects">View projects</LinkButton>
            <LinkButton href="#code" variant="secondary">
              Read code
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}
