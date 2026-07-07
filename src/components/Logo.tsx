import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  muted?: boolean;
  hero?: boolean;
};

export function Logo({ compact = false, muted = false, hero = false }: LogoProps) {
  return (
    <a
      href="#accueil"
      className={`group inline-flex items-center ${muted ? "opacity-70 hover:opacity-100" : ""}`}
      aria-label="APEX LINER accueil"
    >
      <span
        className={`relative overflow-hidden transition duration-300 before:absolute before:inset-x-8 before:bottom-3 before:h-5 before:rounded-full before:bg-white/18 before:blur-2xl group-hover:before:bg-white/28 ${
          hero
            ? "h-28 w-[min(92vw,34rem)] sm:h-32"
            : muted
              ? "h-10 w-44"
              : "h-12 w-56 sm:w-64"
        }`}
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 48%, rgba(0,0,0,0.92) 58%, transparent 78%)",
          maskImage:
            "radial-gradient(ellipse at center, black 48%, rgba(0,0,0,0.92) 58%, transparent 78%)",
        }}
      >
        <Image
          src="/images/logo-wide.jpeg"
          alt="APEX LINER"
          fill
          sizes={hero ? "544px" : "256px"}
          className={`object-contain object-center grayscale contrast-125 saturate-0 ${
            muted ? "opacity-70" : "opacity-90 group-hover:opacity-100"
          }`}
          priority={hero}
        />
      </span>
      {!compact && !hero && (
        <span className="sr-only font-display text-sm font-extrabold uppercase tracking-[0.28em] text-white transition group-hover:text-white/80">
          APEX LINER
        </span>
      )}
    </a>
  );
}
