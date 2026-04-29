import { SectionHeader } from "@/components/SectionHeader";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="border-y border-line bg-black/20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Services"
          title="Focused help for games, teams, and learners."
          description="A practical mix of development, instruction, and systems thinking for Unity projects."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-lg border border-line bg-panel p-6 transition hover:border-accent/45 hover:bg-panel-strong"
            >
              <h3 className="text-2xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-4 leading-7 text-muted">{service.description}</p>
              <ul className="mt-6 grid gap-3">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-foreground/78">
                    <span className="size-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
