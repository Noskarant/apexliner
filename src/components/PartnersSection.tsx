const partners = ["Solar Screen", "Techwrap", "3M", "Vitroconcept.ch"];

export function PartnersSection() {
  return (
    <section id="marques" className="section-shell scroll-mt-24 py-24 sm:py-32">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="section-heading reveal">
          <p className="eyebrow">Réseau</p>
          <h2>Des marques reconnues</h2>
        </div>
        <p className="reveal max-w-2xl text-lg leading-8 text-white/60">
          APEX LINER travaille avec des références reconnues du secteur afin de proposer des solutions fiables, durables et adaptées aux contraintes de chaque projet.
        </p>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {partners.map((partner) => (
          <div key={partner} className="reveal rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-6">
            <p className="font-display text-xl font-bold tracking-[-0.04em] text-white">{partner}</p>
            <p className="mt-3 text-sm leading-6 text-white/45">
              Marque ou partenaire mentionné par le client, à présenter sobrement selon le projet.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
