import Image from "next/image";

const visualItems = [
  {
    src: "/images/solar-film.svg",
    alt: "Illustration de films solaires pour vitrages",
    label: "Films solaires",
  },
  {
    src: "/images/covering.svg",
    alt: "Illustration covering véhicule",
    label: "Covering",
  },
  {
    src: "/images/signage.svg",
    alt: "Illustration marquage publicitaire",
    label: "Marquage",
  },
  {
    src: "/images/adhesive-window.svg",
    alt: "Illustration films adhésifs pour vitrages",
    label: "Vitrages",
  },
];

export function AnimatedImageColumns() {
  const left = [...visualItems, ...visualItems];
  const right = [...visualItems.slice().reverse(), ...visualItems.slice().reverse()];

  return (
    <div className="relative mx-auto h-[560px] max-w-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/40">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#070708] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#070708] to-transparent" />
      <div className="grid h-full grid-cols-2 gap-4">
        <div className="animate-column-up space-y-4">
          {left.map((item, index) => (
            <VisualCard key={`${item.src}-left-${index}`} {...item} />
          ))}
        </div>
        <div className="animate-column-down space-y-4 pt-16">
          {right.map((item, index) => (
            <VisualCard key={`${item.src}-right-${index}`} {...item} tall={index % 2 === 0} />
          ))}
        </div>
      </div>
    </div>
  );
}

function VisualCard({
  src,
  alt,
  label,
  tall = false,
}: {
  src: string;
  alt: string;
  label: string;
  tall?: boolean;
}) {
  return (
    <figure className={`group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-black/30 ${tall ? "h-80" : "h-64"}`}>
      <Image src={src} alt={alt} fill sizes="(max-width: 768px) 45vw, 260px" className="object-cover opacity-70 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <figcaption className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur">
        {label}
      </figcaption>
    </figure>
  );
}
