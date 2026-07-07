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
        className={`relative overflow-visible transition duration-300 before:absolute before:inset-x-10 before:bottom-8 before:h-8 before:rounded-full before:bg-white/18 before:blur-2xl group-hover:before:bg-white/28 ${
          hero
            ? "h-24 w-[min(86vw,30rem)] sm:h-28"
            : muted
              ? "h-10 w-44"
              : "h-12 w-56 sm:w-64"
        }`}
      >
        <Image
          src="/images/logo-transparent.png"
          alt=""
          fill
          sizes={hero ? "480px" : "256px"}
          className="object-contain object-center opacity-80 blur-[7px] brightness-0 invert"
          aria-hidden="true"
        />
        <Image
          src="/images/logo-transparent.png"
          alt="APEX LINER"
          fill
          sizes={hero ? "480px" : "256px"}
          className={`object-contain object-center drop-shadow-[0_8px_16px_rgba(255,255,255,0.18)] ${
            muted ? "opacity-75" : hero ? "opacity-95" : "opacity-90 group-hover:opacity-100"
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
