"use client";

import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import { useState } from "react";

const images = [
  {
    src: "/images/projects-web/IMG_0344.jpg",
    alt: "Vitrages de bâtiment avec film solaire",
    label: "Films solaires",
    className: "md:col-span-2",
  },
  {
    src: "/images/projects-web/IMG_0323.jpg",
    alt: "Marquage commercial sur vitrine Louis Vuitton",
    label: "Marquage vitrine",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0397.jpg",
    alt: "Pose de visuel grand format Aqua Parc",
    label: "Grand format",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0410.jpg",
    alt: "Film d'intimité sur vitrages intérieurs",
    label: "Films vitrages",
    className: "md:col-span-2",
  },
  {
    src: "/images/projects-web/IMG_0223.jpg",
    alt: "Maison en béton avec vitrages traités",
    label: "Bâtiment",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0322.jpg",
    alt: "Façade commerciale avec vitrine habillée",
    label: "Signalétique",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0400-mirror-crop.jpg",
    alt: "Films adhésifs sur vitrages Aqua Parc",
    label: "Adhésifs vitrages",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0446.jpg",
    alt: "Vitrage extérieur avec film sombre réfléchissant",
    label: "Film solaire",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0490.jpg",
    alt: "Détail de finition covering automobile",
    label: "Détail covering",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0498.jpg",
    alt: "Vitrage extérieur avec film teinté",
    label: "Films vitrages",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0508.jpg",
    alt: "Entrée moderne avec vitrage traité",
    label: "Vitrage",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0789.jpg",
    alt: "Détail arrière de moto avec covering violet",
    label: "Détail moto",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0795.jpg",
    alt: "Réservoir de moto avec covering violet",
    label: "Covering moto",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0801.jpg",
    alt: "Détail brillant de covering sur moto Yamaha",
    label: "Finition covering",
    className: "",
  },
  {
    src: "/images/projects-web/IMG_0935.jpg",
    alt: "BMW gris mat devant bâtiment",
    label: "Covering auto",
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
              <Image src={assetPath(image.src)} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-[0.76] saturate-[0.82] transition duration-700 group-hover:scale-105 group-hover:opacity-95 group-hover:saturate-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
              <span className="absolute bottom-5 left-5 text-sm font-semibold uppercase tracking-[0.2em] text-white/65">
                {image.label}
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
            <Image src={assetPath(selected.src)} alt={selected.alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
