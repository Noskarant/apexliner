"use client";

import Image from "next/image";
import { useState } from "react";
import { assetPath } from "@/lib/assetPath";

const partnerImages = [
  {
    src: "/images/partners/swiss-clean-detailing-polissage-01.jpeg",
    alt: "Polissage céramique automobile chez Swiss Clean Detailing",
    className: "md:row-span-2",
  },
  {
    src: "/images/partners/swiss-clean-detailing-polissage-02.jpeg",
    alt: "Préparation de surface avant protection céramique",
    className: "",
  },
  {
    src: "/images/partners/swiss-clean-detailing-polissage-03.jpeg",
    alt: "Détail de polissage céramique sur carrosserie",
    className: "",
  },
  {
    src: "/images/partners/swiss-clean-detailing-polissage-04.jpeg",
    alt: "Polissage professionnel sur véhicule sportif",
    className: "md:col-span-2",
  },
];

export function PartnerSpotlightSection() {
  const [selected, setSelected] = useState<(typeof partnerImages)[number] | null>(null);

  return (
    <section className="section-shell py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div className="reveal">
          <p className="eyebrow">Partenaire</p>
          <h2 className="font-display text-5xl font-bold leading-[0.92] tracking-[-0.07em] text-white sm:text-6xl">
            Swiss Clean Detailing
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/62">
            APEX LINER mentionne Swiss Clean Detailing parmi ses partenaires. Les visuels ci-dessous illustrent un travail de préparation automobile, polissage et protection céramique réalisé dans un environnement professionnel.
          </p>
          <div className="mt-8 grid gap-3 text-sm font-semibold text-white/58 sm:grid-cols-2">
            <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">Polissage céramique</span>
            <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">Préparation carrosserie</span>
            <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">Finition automobile</span>
            <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">Partenaire mentionné</span>
          </div>
        </div>

        <div className="grid auto-rows-[220px] gap-4 md:grid-cols-3">
          {partnerImages.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(image)}
              className={`group reveal relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-black/35 ${image.className}`}
            >
              <Image
                src={assetPath(image.src)}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover opacity-[0.82] saturate-[0.9] transition duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:saturate-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
            </button>
          ))}
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
    </section>
  );
}
