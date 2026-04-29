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
          <div className="relative flex h-full min-h-[420px] flex-col justify-between rounded-md border border-white/10 bg-black/28 p-5">
            <div className="flex items-center justify-between border-b border-line pb-4 font-mono text-xs text-muted">
              <span>{site.heroPanel.fileName}</span>
              <span className="text-accent">{site.heroPanel.status}</span>
            </div>
            <div className="space-y-4 font-mono text-sm leading-7 text-foreground/84">
              <p>
                <span className="text-steel">public sealed class</span>{" "}
                <span className="text-accent">{site.heroPanel.lineOneClass}</span>
              </p>
              <p className="pl-5 text-muted">{site.heroPanel.body}</p>
              <p>
                <span className="text-amber">Update</span>() =&gt;{" "}
                {site.heroPanel.updateLine};
              </p>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {site.heroPanel.focusItems.map((item) => (
                <div
                  key={item}
                  className="rounded-md border border-line bg-white/[0.035] p-4"
                >
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                    Focus
                  </p>
                  <p className="mt-2 text-sm font-semibold text-foreground">
                    {item}
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
