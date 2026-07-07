"use client";

import Image from "next/image";
import { useState } from "react";

const services = [
  {
    title: "Films solaires bâtiment",
    text: "Pose de films pour vitrages visant à réduire la chaleur solaire, limiter l’éblouissement, filtrer les UV et améliorer le confort intérieur sans remplacer les vitrages.",
    image: "/images/projects-web/IMG_0344.jpg",
    alt: "Vitrages de bâtiment équipés de film solaire",
    position: "object-[center_42%]",
  },
  {
    title: "Covering",
    text: "Habillage de véhicules et surfaces avec des films professionnels type 3M ou Techwrap, pensés pour l’esthétique, la protection légère et les finitions propres.",
    image: "/images/projects-web/IMG_0801.jpg",
    alt: "Détail de covering moto violet brillant",
    position: "object-center",
  },
  {
    title: "Marquage publicitaire",
    text: "Pose de marquages visibles sur vitrines, véhicules ou supports professionnels, avec une attention particulière portée à la lisibilité et à la finition.",
    image: "/images/projects-web/marquage-publicitaire-van.jpg",
    alt: "Marquage publicitaire posé sur véhicule utilitaire",
    position: "object-center",
  },
];

export function ServicesSection() {
  const [selected, setSelected] = useState<(typeof services)[number] | null>(null);

  return (
    <>
      <section id="services" className="section-shell scroll-mt-24 py-24 sm:py-32">
        <div className="section-heading">
          <p className="eyebrow">Expertises</p>
          <h2>Nos services</h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <article key={service.title} className="group reveal rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055]">
              <button type="button" onClick={() => setSelected(service)} className="relative mb-6 block h-48 w-full cursor-pointer overflow-hidden rounded-[1.25rem] border border-white/10 bg-neutral-950 text-left">
                <Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className={`object-cover ${service.position} opacity-[0.82] saturate-[0.86] transition duration-700 group-hover:scale-[1.05] group-hover:opacity-95 group-hover:saturate-100`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
              </button>
              <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-display text-sm font-bold text-white/75">
                0{index + 1}
              </div>
              <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-white/58">{service.text}</p>
            </article>
          ))}
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-[90] grid place-items-center bg-black/85 p-4 backdrop-blur-xl" onClick={() => setSelected(null)}>
          <button type="button" className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white">
            Fermer
          </button>
          <div className="relative h-[78vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black">
            <Image src={selected.image} alt={selected.alt} fill sizes="90vw" className="object-contain" />
          </div>
        </div>
      )}
    </>
  );
}
