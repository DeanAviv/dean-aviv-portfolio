import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";
import { site } from "@/data/site";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-y border-line bg-black/20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={site.sections.services.eyebrow}
          title={site.sections.services.title}
          description={site.sections.services.description}
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-line bg-panel p-6 transition hover:border-accent/45 hover:bg-panel-strong"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-muted">{service.description}</p>
              <p className="mt-5 rounded-md border border-line bg-white/[0.03] p-3 text-sm leading-6 text-foreground/72">
                <span className="font-semibold text-foreground">Good for: </span>
                {service.suitableFor}
              </p>
              <ul className="mt-6 grid gap-3">
                {service.bullets.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-foreground/78"
                  >
                    <span className="size-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {service.callToAction}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
