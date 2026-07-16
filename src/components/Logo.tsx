import { assetPath } from "@/lib/assetPath";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#accueil" className="group flex items-center" aria-label="APEX LINER accueil">
      <span className="block w-40 sm:w-56">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assetPath("/assets/apexliner-logo.png")}
          alt="APEX LINER"
          className="block h-auto w-full object-contain"
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
