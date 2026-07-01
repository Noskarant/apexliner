import Image from "next/image";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <a href="#accueil" className="group flex items-center gap-3" aria-label="APEX LINER accueil">
      <span className="grid h-10 w-10 place-items-center overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/30">
        <Image
          src="/images/logo-vertical.jpeg"
          alt=""
          width={80}
          height={80}
          className="h-10 w-10 object-cover opacity-90 grayscale"
        />
      </span>
      {!compact && (
        <span className="font-display text-sm font-extrabold uppercase tracking-[0.28em] text-white transition group-hover:text-white/80">
          APEX LINER
        </span>
      )}
    </a>
  );
}
