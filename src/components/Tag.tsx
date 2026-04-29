type TagProps = {
  children: React.ReactNode;
};

export function Tag({ children }: TagProps) {
  return (
    <span className="rounded-full border border-line bg-white/[0.03] px-3 py-1 text-xs font-medium text-foreground/80">
      {children}
    </span>
  );
}
