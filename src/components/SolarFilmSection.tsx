"use client";

import Image from "next/image";
import { useState } from "react";

const benefits = [
  "Réduction de la chaleur",
  "Protection UV",
  "Meilleur confort visuel",
  "Préservation de l’intimité",
  "Aspect esthétique discret",
  "Solution rapide à poser",
];

export function SolarFilmSection() {
  const [selected, setSelected] = useState(false);

  return (
    <>
      <section className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
        <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="reveal">
            <p className="eyebrow">Confort thermique</p>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl">
              Mettre en avant le film solaire
            </h2>
          </div>

          <div className="reveal rounded-[2rem] border border-white/10 bg-[#0d0d10] p-6 shadow-2xl shadow-black/30 sm:p-8">
            <button type="button" onClick={() => setSelected(true)} className="relative mb-7 block h-72 w-full cursor-pointer overflow-hidden rounded-[1.5rem] border border-white/10 bg-neutral-950 text-left">
              <Image src="/images/projects-web/IMG_0410.jpg" alt="Films adhésifs d'intimité posés sur vitrages intérieurs" fill sizes="(max-width: 1024px) 100vw, 620px" className="object-cover opacity-[0.82] saturate-[0.84] transition duration-700 hover:scale-[1.03] hover:opacity-95" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/72 backdrop-blur">
                Film adhésif vitrage
              </span>
            </button>
            <p className="text-lg leading-8 text-white/65">
              Le film solaire permet d’améliorer le confort thermique, de limiter l’éblouissement, de protéger les vitrages et de valoriser les bâtiments sans travaux lourds. APEX LINER travaille avec des films professionnels adaptés aux besoins des particuliers, entreprises, commerces et bâtiments tertiaires.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white/75">
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
          <button type="button" className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Fermer
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <Image src="/images/projects-web/IMG_0410.jpg" alt="Films adhésifs d'intimité posés sur vitrages intérieurs" fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
