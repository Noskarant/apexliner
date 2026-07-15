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
    <section className="section-shell py-16 sm:py-28">
      <div className="grid gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:gap-12">
        <div className="reveal">
          <p className="eyebrow">Partenaire</p>
          <h2 className="mt-3 font-display text-[2.7rem] font-bold leading-[0.94] tracking-[-0.07em] text-white min-[390px]:text-5xl sm:text-6xl">
            Swiss Clean Detailing
          </h2>
          <p className="mt-5 text-base leading-7 text-white/62 sm:mt-6 sm:text-lg sm:leading-8">
            APEX LINER collabore avec Swiss Clean Detailing, spécialiste de la préparation automobile, du polissage et de la protection céramique. Les visuels ci-dessous présentent leur travail en atelier, avec un haut niveau d’exigence sur la finition.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-2.5 text-xs font-semibold text-white/58 sm:mt-8 sm:gap-3 sm:text-sm">
            <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">Polissage céramique</span>
            <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">Préparation carrosserie</span>
            <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">Finition automobile</span>
            <span className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3">Partenaire mentionné</span>
          </div>
        </div>

        <div className="grid auto-rows-[170px] grid-cols-2 gap-3 sm:auto-rows-[210px] md:grid-cols-3 md:gap-4">
          {partnerImages.map((image) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelected(image)}
              className={`group reveal relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-neutral-950 shadow-2xl shadow-black/35 sm:rounded-[1.75rem] ${image.className}`}
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
          <button type="button" className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Fermer
          </button>
          <div className="relative h-[76vh] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-white/10 bg-black sm:rounded-[2rem]">
            <Image src={assetPath(selected.src)} alt={selected.alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </section>
  );
}
