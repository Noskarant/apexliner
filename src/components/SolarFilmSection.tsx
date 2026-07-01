const benefits = [
  "Réduction de la chaleur",
  "Protection UV",
  "Meilleur confort visuel",
  "Préservation de l’intimité",
  "Aspect esthétique discret",
  "Solution rapide à poser",
];

export function SolarFilmSection() {
  return (
    <section className="border-y border-white/10 bg-white/[0.025] py-24 sm:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="reveal">
          <p className="eyebrow">Confort thermique</p>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-tight tracking-[-0.05em] text-white sm:text-5xl">
            Mettre en avant le film solaire
          </h2>
        </div>

        <div className="reveal rounded-[2rem] border border-white/10 bg-[#0d0d10] p-6 shadow-2xl shadow-black/30 sm:p-8">
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
  );
}
