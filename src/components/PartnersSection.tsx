const partners = [
  {
    name: "Solar Screen",
    text: "Marque spécialisée dans les films pour vitrages, avec des gammes orientées contrôle solaire, sécurité, décoration, intimité et protection UV.",
  },
  {
    name: "Techwrap",
    text: "Films de covering utilisés pour des rendus visuels marqués, notamment sur véhicules et surfaces nécessitant une finition esthétique.",
  },
  {
    name: "3M",
    text: "Référence reconnue des films graphiques et films de covering, avec des solutions destinées à l’habillage de véhicules, surfaces et supports publicitaires.",
  },
  {
    name: "Vitroconcept.ch",
    text: "Collaboration mentionnée par le client pour l’étude et l’obtention de devis détaillés selon les besoins du projet.",
  },
];

export function PartnersSection() {
  return (
    <section id="marques" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="section-heading reveal">
          <p className="eyebrow">Réseau</p>
          <h2>Des marques reconnues</h2>
        </div>
        <p className="reveal max-w-2xl text-lg leading-8 text-white/60">
          APEX LINER s’appuie sur des marques et partenaires mentionnés par le client afin de proposer des solutions adaptées aux vitrages, véhicules et supports professionnels. Le choix final dépend toujours du support, de l’usage et des contraintes du projet.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <div key={partner.name} className="reveal rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
            <p className="font-display text-xl font-bold tracking-[-0.04em] text-white">{partner.name}</p>
            <p className="mt-3 text-sm leading-6 text-white/45">
              {partner.text}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-6 text-white/35">
        Les marques citées servent à présenter les solutions travaillées ou mentionnées par le client. Les caractéristiques exactes, garanties et compatibilités doivent être confirmées selon la référence retenue et le support.
      </p>
    </section>
  );
}
