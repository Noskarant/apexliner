import { assetPath } from "@/lib/assetPath";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#accueil" className="group flex items-center" aria-label="APEX LINER accueil">
      <span className="relative block w-40 sm:w-56">
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 scale-150 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.14),transparent_70%)] blur-lg"
        />
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
