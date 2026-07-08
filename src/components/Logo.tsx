import Image from "next/image";
import { assetPath } from "@/lib/assetPath";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#accueil" className="group flex items-center gap-3" aria-label="APEX LINER accueil">
      <span className="relative h-16 w-52 overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30 sm:h-20 sm:w-64">
        <span className="absolute inset-0 bg-[#070708]" />
        <Image
          src={assetPath("/images/apex-liner-hero-logo.jpeg")}
          alt="APEX LINER"
          fill
          sizes="256px"
          className="object-cover object-center opacity-80 mix-blend-screen"
        />
      </span>
      {!compact && (
        <span className="sr-only font-display text-sm font-extrabold uppercase tracking-[0.28em] text-white transition group-hover:text-white/80">
          APEX LINER
        </span>
      )}
    </a>
  );
}
