 "use client";

import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import { useState } from "react";

const visualItems = [
  {
    src: "/images/projects-web/IMG_0344.jpg",
    alt: "Pose de film solaire sur vitrages de bâtiment",
    label: "Films solaires",
  },
  {
    src: "/images/projects-web/IMG_0790.jpg",
    alt: "Covering moto violet sur Yamaha",
    label: "Covering",
  },
  {
    src: "/images/projects-web/IMG_0323.jpg",
    alt: "Marquage publicitaire sur vitrine commerciale",
    label: "Marquage",
  },
  {
    src: "/images/projects-web/IMG_0410.jpg",
    alt: "Films adhésifs d'intimité sur vitrages intérieurs",
    label: "Vitrages",
  },
  {
    src: "/images/projects-web/IMG_0750.jpg",
    alt: "Covering automobile sur véhicule gris mat",
    label: "Automobile",
  },
  {
    src: "/images/projects-web/IMG_0397.jpg",
    alt: "Pose de marquage grand format sur bâtiment",
    label: "Grand format",
  },
];

export function AnimatedImageColumns() {
  const [selected, setSelected] = useState<(typeof visualItems)[number] | null>(null);
  const left = [...visualItems, ...visualItems];
  const right = [...visualItems.slice().reverse(), ...visualItems.slice().reverse()];

  return (
    <>
      <div className="relative mx-auto h-[560px] max-w-[560px] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-4 shadow-2xl shadow-black/40">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-[#070708] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-[#070708] to-transparent" />
        <div className="grid h-full grid-cols-2 gap-4">
          <div className="animate-column-up space-y-4">
            {left.map((item, index) => (
              <VisualCard key={`${item.src}-left-${index}`} {...item} onSelect={() => setSelected(item)} />
            ))}
          </div>
          <div className="animate-column-down space-y-4 pt-16">
            {right.map((item, index) => (
              <VisualCard key={`${item.src}-right-${index}`} {...item} tall={index % 2 === 0} onSelect={() => setSelected(item)} />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/85 p-4 backdrop-blur-xl" onClick={() => setSelected(null)}>
          <button type="button" className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Fermer
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <Image src={assetPath(selected.src)} alt={selected.alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}

function VisualCard({
  src,
  alt,
  label,
  onSelect,
  tall = false,
}: {
  src: string;
  alt: string;
  label: string;
  onSelect: () => void;
  tall?: boolean;
}) {
  return (
    <button type="button" onClick={onSelect} className={`group relative block w-full cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-950 text-left shadow-2xl shadow-black/30 ${tall ? "h-80" : "h-64"}`}>
      <Image src={assetPath(src)} alt={alt} fill sizes="(max-width: 768px) 45vw, 260px" className="object-cover opacity-[0.75] saturate-[0.82] transition duration-700 group-hover:scale-105 group-hover:opacity-95 group-hover:saturate-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
      <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/75 backdrop-blur">
        {label}
      </span>
    </button>
  );
}
