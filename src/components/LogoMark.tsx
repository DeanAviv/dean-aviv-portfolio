import Image from "next/image";
import { site } from "@/data/site";

export function LogoMark() {
  if (site.logo.src) {
    return (
      <span className="relative block size-12 overflow-hidden rounded-md border border-accent/35 bg-accent/10">
        <Image
          src={site.logo.src}
          alt={site.logo.alt}
          fill
          className="object-contain p-1"
          sizes="48px"
          priority
        />
      </span>
    );
  }

  return (
    <span className="grid size-10 place-items-center rounded-md border border-accent/35 bg-accent/10 font-mono text-sm font-bold text-accent">
      {site.logo.fallbackText}
    </span>
  );
}
