"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { codeShowcases } from "@/data/codeShowcases";
import { site } from "@/data/site";

export function CodeShowcase() {
  const [activeShowcaseId, setActiveShowcaseId] = useState(codeShowcases[0].id);

  const activeShowcase =
    codeShowcases.find((item) => item.id === activeShowcaseId) ?? codeShowcases[0];

  return (
    <section
      id="code"
      className="border-y border-line bg-black/20 px-5 py-20 sm:px-8 sm:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={site.sections.code.eyebrow}
          title={site.sections.code.title}
          description={site.sections.code.description}
        />

        {site.sections.code.intro ? (
          <p className="mx-auto mt-7 max-w-3xl rounded-lg border border-accent/20 bg-accent/8 p-5 text-center text-sm leading-7 text-foreground/78">
            {site.sections.code.intro}
          </p>
        ) : null}

        <div className="mt-5 flex justify-center">
          <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">
            Work in progress
          </span>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {codeShowcases.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveShowcaseId(item.id)}
              className={`rounded-md border px-4 py-2 text-sm font-semibold transition ${
                activeShowcase.id === item.id
                  ? "border-accent/60 bg-accent text-[#06100a]"
                  : "border-line bg-white/[0.03] text-foreground hover:border-accent/50 hover:bg-white/[0.06]"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-lg border border-line bg-[#090d0b]">
            <div className="border-b border-line bg-white/[0.025] p-4">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Scripts to display
              </p>
            </div>
            <ul className="grid gap-3 p-5 sm:grid-cols-2">
              {activeShowcase.scripts.map((script) => (
                <li
                  key={script}
                  className="rounded-md border border-line bg-white/[0.03] px-4 py-3 font-mono text-sm text-foreground/82"
                >
                  {script}
                </li>
              ))}
            </ul>
          </div>

          <aside className="rounded-lg border border-line bg-panel p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
              {activeShowcase.title}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">Key skills</h3>
            <p className="mt-4 leading-7 text-muted">{activeShowcase.description}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {activeShowcase.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>

            <div className="mt-6 border-t border-line pt-4">
              <Link
                href={activeShowcase.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-accent transition hover:text-accent-strong"
              >
                View on GitHub ↗
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
