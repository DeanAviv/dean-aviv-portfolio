"use client";

import { useMemo, useState } from "react";
import { SectionHeader } from "@/components/SectionHeader";
import { Tag } from "@/components/Tag";
import { codeShowcases } from "@/data/codeShowcases";

const keywordPattern =
  /\b(public|private|sealed|class|event|readonly|return|if|new|using|void|bool|int|null|true|false)\b/g;

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
          if (part.includes("Inventory") || part.includes("Item")) {
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
  const showcase = codeShowcases[0];
  const [activeFileName, setActiveFileName] = useState(showcase.files[0].fileName);

  const activeFile = useMemo(
    () =>
      showcase.files.find((file) => file.fileName === activeFileName) ??
      showcase.files[0],
    [activeFileName, showcase.files],
  );

  return (
    <section id="code" className="border-y border-line bg-black/20 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Code Showcase"
          title="Readable systems with room to grow."
          description={showcase.summary}
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
          <div className="overflow-hidden rounded-lg border border-line bg-[#090d0b]">
            <div className="flex flex-wrap gap-2 border-b border-line bg-white/[0.025] p-3">
              {showcase.files.map((file) => (
                <button
                  key={file.fileName}
                  type="button"
                  onClick={() => setActiveFileName(file.fileName)}
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
            <pre className="max-h-[620px] overflow-auto p-5 text-sm leading-6 text-foreground/82">
              <code aria-label={`${activeFile.fileName} code sample`}>
                {highlightCode(activeFile.code)}
              </code>
            </pre>
          </div>

          <aside className="rounded-lg border border-line bg-panel p-6">
            <p className="font-mono text-xs uppercase tracking-[0.24em] text-accent">
              {showcase.title}
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-foreground">
              {showcase.explanation.title}
            </h3>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-muted">
              {showcase.explanation.points.map((point) => (
                <li key={point} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-2">
              {showcase.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
