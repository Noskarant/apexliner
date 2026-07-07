import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  muted?: boolean;
};

export function Logo({ compact = false, muted = false }: LogoProps) {
  return (
    <a
      href="#accueil"
      className={`group flex items-center gap-3 ${muted ? "opacity-75 hover:opacity-100" : ""}`}
      aria-label="APEX LINER accueil"
    >
      <span
        className={`relative overflow-hidden rounded-xl transition duration-300 before:absolute before:inset-x-4 before:bottom-0 before:h-4 before:rounded-full before:bg-white/18 before:blur-xl group-hover:before:bg-white/28 ${
          muted
            ? "h-9 w-40 opacity-80 grayscale"
            : "h-11 w-52 shadow-[0_0_34px_rgba(255,255,255,0.10)] sm:w-60"
        }`}
      >
        <Image
          src="/images/logo-wide.jpeg"
          alt="APEX LINER"
          fill
          sizes={muted ? "160px" : "240px"}
          className={`object-cover object-center grayscale mix-blend-screen ${
            muted ? "opacity-75" : "opacity-90 group-hover:opacity-100"
          }`}
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
