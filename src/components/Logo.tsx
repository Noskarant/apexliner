type LogoProps = {
  compact?: boolean;
  muted?: boolean;
  hero?: boolean;
};

export function Logo({ compact = false, muted = false, hero = false }: LogoProps) {
  const sizeClass = hero
    ? "text-5xl sm:text-6xl lg:text-7xl"
    : muted
      ? "text-2xl sm:text-3xl"
      : "text-2xl sm:text-3xl";

  return (
    <a
      href="#accueil"
      className={`group inline-flex items-center ${muted ? "opacity-70 hover:opacity-100" : ""}`}
      aria-label="APEX LINER accueil"
    >
      <span
        className={`relative font-display font-extrabold uppercase leading-none tracking-[0.22em] text-black transition duration-300 ${sizeClass}`}
        style={{
          WebkitTextStroke: hero ? "1px rgba(255,255,255,0.34)" : "0.55px rgba(255,255,255,0.36)",
          textShadow: hero
            ? "0 0 8px rgba(255,255,255,0.85), 0 0 26px rgba(255,255,255,0.45), 0 18px 28px rgba(0,0,0,0.85), 0 -2px 1px rgba(255,255,255,0.28)"
            : "0 0 7px rgba(255,255,255,0.75), 0 0 18px rgba(255,255,255,0.34), 0 10px 18px rgba(0,0,0,0.8), 0 -1px 1px rgba(255,255,255,0.22)",
        }}
      >
        APEX LINER
      </span>
      {!compact && !hero && (
        <span className="sr-only font-display text-sm font-extrabold uppercase tracking-[0.28em] text-white transition group-hover:text-white/80">
          APEX LINER
        </span>
      )}
    </a>
  );
}
