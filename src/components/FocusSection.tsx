import { site } from "@/data/site";

export function FocusSection() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-lg border border-line bg-panel p-6 shadow-2xl shadow-black/30 sm:p-8">
          <div className="absolute inset-0 bg-[linear-gradient(130deg,rgba(110,231,168,0.13),transparent_34%),linear-gradient(315deg,rgba(216,180,95,0.06),transparent_42%)]" />
          <div className="relative">
            <div className="max-w-3xl">
              <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
                Focus
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
                {site.focus.title}
              </h2>
              <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
                {site.focus.intro}
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {site.focus.items.map((item) => (
                <article
                  key={item.title}
                  className="rounded-md border border-line bg-black/22 p-5 transition hover:border-accent/35 hover:bg-white/[0.045]"
                >
                  <h3 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
