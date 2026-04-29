"use client";

import { useEffect, useRef, useState } from "react";
import { AdditionalProject } from "@/data/projects";
import { site } from "@/data/site";
import { AdditionalProjectCard } from "./AdditionalProjectCard";

type AdditionalProjectsCarouselProps = {
  projects: AdditionalProject[];
};

export function AdditionalProjectsCarousel({
  projects,
}: AdditionalProjectsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  function updateScrollState() {
    const element = scrollRef.current;
    if (!element) return;

    setCanScrollLeft(element.scrollLeft > 4);
    setCanScrollRight(
      element.scrollLeft + element.clientWidth < element.scrollWidth - 4,
    );
  }

  function scrollByPage(direction: "left" | "right") {
    const element = scrollRef.current;
    if (!element) return;

    element.scrollBy({
      left: direction === "left" ? -element.clientWidth : element.clientWidth,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    updateScrollState();

    const element = scrollRef.current;
    if (!element) return;

    element.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      element.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  return (
    <div className="mt-12">
      <div className="mb-5 flex items-center justify-between gap-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
            {site.sections.additionalProjects.title}
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-muted sm:text-base">
            {site.sections.additionalProjects.description}
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={() => scrollByPage("left")}
            disabled={!canScrollLeft}
            aria-label="Show previous additional projects"
            className="grid size-10 place-items-center rounded-md border border-line bg-white/[0.03] text-lg font-semibold text-foreground transition hover:border-accent/50 hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-35"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => scrollByPage("right")}
            disabled={!canScrollRight}
            aria-label="Show next additional projects"
            className="grid size-10 place-items-center rounded-md border border-line bg-white/[0.03] text-lg font-semibold text-foreground transition hover:border-accent/50 hover:bg-accent/10 disabled:cursor-not-allowed disabled:opacity-35"
          >
            →
          </button>
        </div>
      </div>

      <div className="relative">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-background to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-background to-transparent"
          aria-hidden="true"
        />
        <div
          ref={scrollRef}
          className="scrollbar-hidden flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-3"
          aria-label="Additional projects carousel"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="min-w-full snap-start sm:min-w-[calc((100%_-_2.5rem)/3)]"
            >
              <AdditionalProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
