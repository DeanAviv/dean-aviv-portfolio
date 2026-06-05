import Link from "next/link";
import { LogoMark } from "@/components/LogoMark";
import { features } from "@/data/features";
import { site } from "@/data/site";

export function Header() {
  const navItems = site.navItems.filter(
    (item) => features.showCodeShowcase || item.href !== "#code",
  );

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/78 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="#" className="group flex items-center gap-3">
          <LogoMark />
          <span>
            <span className="block text-sm font-semibold text-foreground">
              {site.name}
            </span>
            <span className="block text-xs text-muted">{site.role}</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted transition hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          href="#contact"
          className="rounded-md border border-line px-4 py-2 text-sm font-semibold text-foreground transition hover:border-accent/60 hover:bg-accent/10"
        >
          Let&apos;s talk
        </Link>
      </nav>
    </header>
  );
}
