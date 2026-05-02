import Link from "next/link";

type LinkButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function LinkButton({
  href,
  children,
  variant = "primary",
}: LinkButtonProps) {
  const className =
    variant === "primary"
      ? "border-accent/60 bg-accent-strong text-[#06100a] hover:bg-accent"
      : "border-line bg-white/[0.03] text-foreground hover:border-accent/50 hover:bg-white/[0.06]";

  return (
    <Link
      href={href}
      className={`inline-flex min-h-11 w-full items-center justify-center rounded-md border px-5 py-2.5 text-sm font-semibold transition sm:w-auto ${className}`}
    >
      {children}
    </Link>
  );
}
