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
      className={`group inline-flex items-center ${hero ? "pointer-events-none" : ""} ${muted ? "opacity-70 hover:opacity-100" : ""}`}
      aria-label="APEX LINER accueil"
    >
      <span
        className={`relative overflow-hidden transition duration-300 before:absolute before:inset-x-12 before:bottom-7 before:h-8 before:rounded-full before:bg-white/22 before:blur-2xl group-hover:before:bg-white/30 ${
          hero
            ? "h-28 w-[min(88vw,34rem)] sm:h-32"
            : muted
              ? "h-10 w-44"
              : "h-12 w-56 sm:w-64"
        }`}
        style={{
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 42%, rgba(0,0,0,0.86) 58%, transparent 76%)",
          maskImage:
            "radial-gradient(ellipse at center, black 42%, rgba(0,0,0,0.86) 58%, transparent 76%)",
        }}
      >
        <Image
          src="/images/logo-wordmark-crop.jpeg"
          alt="APEX LINER"
          fill
          sizes={hero ? "544px" : "256px"}
          className={`object-contain object-center grayscale contrast-125 saturate-0 drop-shadow-[0_0_18px_rgba(255,255,255,0.32)] ${
            muted ? "opacity-68" : hero ? "opacity-88" : "opacity-90 group-hover:opacity-100"
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
