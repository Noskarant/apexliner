"use client";

import Image from "next/image";
import { assetPath } from "@/lib/assetPath";
import { useState } from "react";

const benefits = [
  "Contrôle solaire selon le vitrage",
  "Réduction de l’éblouissement",
  "Filtration des UV selon référence",
  "Confort thermique amélioré",
  "Finition discrète ou réfléchissante",
  "Pose sans travaux lourds",
];

const technicalPoints = [
  "Solar Screen structure ses films par familles d’usage : contrôle solaire, sécurité, décoration, intimité ou protection UV.",
  "Le choix du film dépend du vitrage existant, de l’exposition, de la surface vitrée et du rendu recherché.",
  "Les performances varient selon la référence : rejet d’énergie solaire, transmission lumineuse, réflexion et protection UV doivent être validés projet par projet.",
];

export function SolarFilmSection() {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <section className="border-y border-white/10 bg-white/[0.025] py-16 sm:py-32">
        <div className="section-shell grid gap-8 sm:gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            <p className="eyebrow">Confort thermique</p>
            <h2 className="mt-3 font-display text-[2.35rem] font-extrabold leading-[1] tracking-[-0.055em] text-white sm:mt-4 sm:text-5xl sm:leading-tight">
              Mettre en avant le film solaire
            </h2>
          </div>

          <div className="reveal rounded-[1.35rem] border border-white/10 bg-[#0d0d10] p-4 shadow-2xl shadow-black/30 sm:rounded-[2rem] sm:p-8">
            <button type="button" onClick={() => setSelected(true)} className="relative mb-5 block h-56 w-full cursor-pointer overflow-hidden rounded-[1rem] border border-white/10 bg-neutral-950 text-left sm:mb-7 sm:h-72 sm:rounded-[1.5rem]">
              <Image src={assetPath("/images/projects-web/IMG_0410.jpg")} alt="Films adhésifs d'intimité posés sur vitrages intérieurs" fill sizes="(max-width: 1024px) 100vw, 620px" className="object-cover opacity-[0.82] saturate-[0.84] transition duration-700 hover:scale-[1.03] hover:opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.15em] text-white/72 backdrop-blur sm:bottom-4 sm:left-4 sm:text-xs sm:tracking-[0.18em]">
                Film adhésif vitrage
              </span>
            </button>
            <p className="text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
              Le film solaire permet d’améliorer le confort thermique, de limiter l’éblouissement et de valoriser les vitrages existants sans travaux lourds. APEX LINER travaille avec des films professionnels adaptés aux besoins des particuliers, entreprises, commerces et bâtiments tertiaires.
            </p>
            <div className="mt-6 rounded-[1.2rem] border border-white/10 bg-white/[0.035] p-4 sm:mt-7 sm:rounded-[1.5rem] sm:p-5">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-white/42 sm:text-xs sm:tracking-[0.22em]">
                Informations techniques
              </p>
              <div className="mt-4 grid gap-3">
                {technicalPoints.map((point) => (
                  <p key={point} className="text-sm leading-6 text-white/58">
                    {point}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-2.5 sm:mt-8 sm:grid-cols-2 sm:gap-3">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold leading-5 text-white/75">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/85 p-4 backdrop-blur-xl" onClick={() => setSelected(false)}>
          <button type="button" className="absolute right-4 top-4 z-10 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Fermer
          </button>
          <div className="relative h-[76vh] w-full max-w-5xl overflow-hidden rounded-[1.25rem] border border-white/10 bg-black sm:rounded-[2rem]">
            <Image src={assetPath("/images/projects-web/IMG_0410.jpg")} alt="Films adhésifs d'intimité posés sur vitrages intérieurs" fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
