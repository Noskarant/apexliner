"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  {
    src: "/images/solar-film.svg",
    alt: "Illustration films solaires bâtiment",
    className: "md:col-span-2",
  },
  {
    src: "/images/covering.svg",
    alt: "Illustration covering",
    className: "md:row-span-2",
  },
  {
    src: "/images/signage.svg",
    alt: "Illustration marquage publicitaire",
    className: "",
  },
  {
    src: "/images/adhesive-window.svg",
    alt: "Illustration films adhésifs pour vitrages",
    className: "",
  },
];

export function GallerySection() {
  const [selected, setSelected] = useState<(typeof images)[number] | null>(null);

  return (
    <section id="realisations" className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
      <div className="section-shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Galerie</p>
          <h2>Réalisations & références visuelles</h2>
        </div>

        <div className="mt-12 grid auto-rows-[280px] gap-4 md:grid-cols-3">
          {images.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(image)}
              className={`group reveal relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950 text-left shadow-2xl shadow-black/30 ${image.className}`}
            >
              <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-68 grayscale transition duration-700 group-hover:scale-105 group-hover:opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute bottom-5 left-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
                Référence visuelle
              </span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-4 backdrop-blur-xl" onClick={() => setSelected(null)}>
          <button type="button" className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Fermer
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <Image src={selected.src} alt={selected.alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
