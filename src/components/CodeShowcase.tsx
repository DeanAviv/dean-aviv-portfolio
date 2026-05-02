"use client";

import Link from "next/link";
import { useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { codeShowcases } from "@/data/codeShowcases";
import { site } from "@/data/site";

const keywordPattern =
  /\b(public|private|sealed|class|readonly|return|if|new|using|void|bool|int|string|null|true|false|get|set|foreach|static|interface|async|await|this)\b/g;

function highlightCode(code: string) {
  return code.split("\n").map((line, lineIndex) => {
    const parts = line.split(keywordPattern);

    return (
      <span key={`${line}-${lineIndex}`} className="block min-h-6">
        <span className="mr-5 inline-block w-8 select-none text-right text-foreground/24">
          {lineIndex + 1}
        </span>
        {parts.map((part, partIndex) => {
          if (keywordPattern.test(part)) {
            keywordPattern.lastIndex = 0;
            return (
              <span key={`${part}-${partIndex}`} className="text-steel">
                {part}
              </span>
            );
          }

          keywordPattern.lastIndex = 0;

          if (
            part.includes("Turn") ||
            part.includes("Sequence") ||
            part.includes("Card") ||
            part.includes("Deck") ||
            part.includes("Discard")
          ) {
            return (
              <span key={`${part}-${partIndex}`} className="text-accent">
                {part}
              </span>
            );
          }

          return <span key={`${part}-${partIndex}`}>{part}</span>;
        })}
      </span>
    );
  });
}

export function CodeShowcase() {
  const [activeShowcaseId, setActiveShowcaseId] = useState(codeShowcases[0].id);
  const [activeFileIndex, setActiveFileIndex] = useState(0);

  const activeShowcase =
    codeShowcases.find((item) => item.id === activeShowcaseId) ?? codeShowcases[0];
  const activeFile = activeShowcase.files[activeFileIndex] ?? activeShowcase.files[0];

  function selectShowcase(showcaseId: string) {
    setActiveShowcaseId(showcaseId);
    setActiveFileIndex(0);
  }

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

        <div className="mt-7 flex justify-center">
          <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-muted">
            Work in progress
          </span>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {codeShowcases.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => selectShowcase(item.id)}
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
            <div className="flex flex-wrap gap-2 border-b border-line bg-white/[0.025] p-3">
              {activeShowcase.files.map((file, index) => (
                <button
                  key={file.fileName}
                  type="button"
                  onClick={() => setActiveFileIndex(index)}
                  className={`rounded-md px-4 py-2 font-mono text-xs transition ${
                    activeFile.fileName === file.fileName
                      ? "bg-accent text-[#06100a]"
                      : "bg-white/[0.04] text-muted hover:bg-white/[0.08] hover:text-foreground"
                  }`}
                >
                  {file.fileName}
                </button>
              ))}
            </div>
            <pre className="overflow-x-auto p-5 text-sm leading-6 text-foreground/82">
              <code aria-label={`${activeFile.fileName} code sample`}>
                {highlightCode(activeFile.code)}
              </code>
            </pre>
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
