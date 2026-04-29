import { LinkButton } from "@/components/LinkButton";
import { site } from "@/data/site";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
        <div>
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

        <div className="relative min-h-[460px] overflow-hidden rounded-lg border border-line bg-panel p-5 shadow-2xl shadow-black/30">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(110,231,168,0.16),transparent_34%),linear-gradient(315deg,rgba(216,180,95,0.08),transparent_40%)]" />
          <div className="relative flex h-full min-h-[420px] flex-col rounded-md border border-white/10 bg-black/28 p-5">
            <div className="border-b border-line pb-5">
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
                Focus
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground">
                {site.heroPanel.title}
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-muted sm:text-base">
                {site.heroPanel.intro}
              </p>
            </div>

            <div className="mt-5 grid flex-1 gap-3 sm:grid-cols-2">
              {site.heroPanel.focusItems.map((item) => (
                <div
                  key={item.title}
                  className="rounded-md border border-line bg-white/[0.035] p-4 transition hover:border-accent/35 hover:bg-white/[0.055]"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    Area
                  </p>
                  <p className="mt-2 text-base font-semibold text-foreground">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-muted">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
