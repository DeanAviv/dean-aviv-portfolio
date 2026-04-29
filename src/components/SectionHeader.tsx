type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-accent">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-foreground sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
