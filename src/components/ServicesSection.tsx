import Image from "next/image";

const services = [
  {
    title: "Films solaires bâtiment",
    text: "Réduction de la chaleur, amélioration du confort intérieur, protection contre les UV et optimisation de la luminosité.",
    image: "/images/projects-web/IMG_0223.jpg",
    alt: "Vitrages de bâtiment équipés de film solaire",
  },
  {
    title: "Covering",
    text: "Habillage de surfaces, véhicules ou supports professionnels avec des films de qualité adaptés à chaque usage.",
    image: "/images/projects-web/IMG_0790.jpg",
    alt: "Covering moto violet brillant",
  },
  {
    title: "Marquage publicitaire",
    text: "Création et pose de marquages visibles, propres et durables pour renforcer l’image de votre entreprise.",
    image: "/images/projects-web/IMG_0397.jpg",
    alt: "Pose de marquage publicitaire grand format",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="section-heading">
        <p className="eyebrow">Expertises</p>
        <h2>Nos services</h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {services.map((service, index) => (
          <article key={service.title} className="group reveal rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.055]">
            <div className="relative mb-6 h-48 overflow-hidden rounded-[1.25rem] border border-white/10 bg-neutral-950">
              <Image src={service.image} alt={service.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover opacity-[0.78] saturate-[0.84] transition duration-700 group-hover:scale-105 group-hover:opacity-95 group-hover:saturate-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
            <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] font-display text-sm font-bold text-white/75">
              0{index + 1}
            </div>
            <h3 className="font-display text-2xl font-bold tracking-[-0.04em] text-white">{service.title}</h3>
            <p className="mt-4 leading-7 text-white/58">{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
