import { assetPath } from "@/lib/assetPath";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#accueil" className="group flex items-center" aria-label="APEX LINER accueil">
      <span className="relative block w-40 overflow-hidden rounded-xl bg-gradient-to-b from-neutral-200 via-white to-neutral-300 px-2.5 py-1.5 shadow-md sm:w-56 sm:px-3.5 sm:py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/assets/apexliner-logo.png")}
          alt="APEX LINER"
          className="relative block h-auto w-full object-contain"
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
