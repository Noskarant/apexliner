import { AnimatedImageColumns } from "@/components/AnimatedImageColumns";
import { assetPath } from "@/lib/assetPath";

const mobileImages = [
  {
    src: "/images/projects-web/IMG_0344.jpg",
    alt: "Film solaire sur vitrages de bâtiment",
  },
  {
    src: "/images/projects-web/IMG_0790.jpg",
    alt: "Covering moto violet",
  },
  {
    src: "/images/projects-web/IMG_0323.jpg",
    alt: "Marquage publicitaire sur vitrine",
  },
];

export function Hero() {
  return (
    <section id="accueil" className="relative pt-20 sm:pt-36">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[720px] w-[940px] -translate-x-1/2 rounded-full bg-white/[0.11] blur-3xl" />
        <div className="absolute right-0 top-36 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      </div>

      <div className="section-shell relative grid min-w-0 max-w-full items-center gap-10 pb-16 sm:gap-14 sm:pb-0 lg:min-h-[calc(100vh-22rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0 max-w-full animate-fade-up text-center sm:max-w-3xl sm:text-left">
          <p className="mx-auto mb-4 inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/60 sm:mx-0 sm:mb-6 sm:px-4 sm:text-left sm:text-xs sm:tracking-[0.24em]">
            Pose professionnelle en Suisse
          </p>
          <h1 className="mx-auto max-w-full text-balance font-display text-[1.86rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-white min-[390px]:text-[1.98rem] sm:mx-0 sm:text-6xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-7xl">
            <span className="block sm:inline">Films solaires,</span>{" "}
            <span className="block sm:inline">covering &</span>{" "}
            <span className="block sm:inline">marquage</span>{" "}
            <span className="block sm:inline">publicitaire</span>{" "}
            <span className="block sm:inline">en Suisse</span>
          </h1>
          <p className="mx-auto mt-4 max-w-full text-[0.96rem] leading-7 text-white/64 sm:mx-0 sm:mt-7 sm:max-w-2xl sm:text-xl sm:leading-8">
            APEX LINER accompagne les professionnels et particuliers dans la pose de films solaires pour bâtiments, de covering et de marquage publicitaire, avec des solutions durables, esthétiques et adaptées à chaque projet.
          </p>
          <div className="mx-auto mt-6 flex min-w-0 max-w-xs flex-col items-stretch gap-3 sm:mx-0 sm:mt-9 sm:max-w-full sm:flex-row">
            <a href="mailto:Contact@apexliner.ch" className="btn-primary min-w-0 justify-center text-center">
              Demander un devis
            </a>
            <a href="#services" className="btn-secondary min-w-0 justify-center text-center">
              Voir les services
            </a>
          </div>
          <div className="mx-auto mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:mx-0 sm:mt-12 sm:gap-4 sm:pt-8">
            {["Films solaires", "Covering", "Marquage"].map((item) => (
              <div key={item}>
                <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/35 sm:text-xs sm:tracking-[0.22em]">Service</p>
                <p className="mt-2 text-xs font-semibold text-white/78 sm:text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden animate-fade-up lg:block [animation-delay:160ms]">
          <AnimatedImageColumns />
        </div>
      </div>

      <div className="section-shell relative lg:hidden">
        <div className="mobile-snap-row -mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-4">
          {mobileImages.map((image) => (
            <a key={image.src} href={assetPath(image.src)} target="_blank" rel="noreferrer" className="relative h-64 w-[78vw] shrink-0 snap-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={assetPath(image.src)} alt={image.alt} className="h-full w-full object-cover opacity-[0.82] saturate-[0.85]" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
