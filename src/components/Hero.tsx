import { AnimatedImageColumns } from "@/components/AnimatedImageColumns";

export function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-32 sm:pt-36">
      <div className="absolute left-1/2 top-0 h-[680px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
      <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="section-shell relative grid min-h-[calc(100vh-6rem)] items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-3xl animate-fade-up">
          <p className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
            Pose professionnelle en Suisse
          </p>
          <h1 className="font-display text-5xl font-extrabold leading-[0.98] tracking-[-0.06em] text-white sm:text-6xl lg:text-7xl">
            Films solaires, covering & marquage publicitaire en Suisse
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
            APEX LINER accompagne les professionnels et particuliers dans la pose de films solaires pour bâtiments, de covering et de marquage publicitaire, avec des solutions durables, esthétiques et adaptées à chaque projet.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="mailto:Contact@apexliner.ch" className="btn-primary justify-center">
              Demander un devis
            </a>
            <a href="#services" className="btn-secondary justify-center">
              Voir les services
            </a>
          </div>
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {["Films solaires", "Covering", "Marquage"].map((item) => (
              <div key={item}>
                <p className="text-xs uppercase tracking-[0.22em] text-white/35">Service</p>
                <p className="mt-2 text-sm font-semibold text-white/78">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden animate-fade-up lg:block [animation-delay:160ms]">
          <AnimatedImageColumns />
        </div>

        <div className="lg:hidden">
          <div className="flex snap-x gap-4 overflow-x-auto pb-4">
            {["/images/solar-film.svg", "/images/covering.svg", "/images/signage.svg"].map((src) => (
              <div key={src} className="relative h-72 min-w-[72vw] snap-center overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="h-full w-full object-cover opacity-80 grayscale" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
