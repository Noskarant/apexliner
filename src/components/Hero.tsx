import { AnimatedImageColumns } from "@/components/AnimatedImageColumns";
import { assetPath } from "@/lib/assetPath";
import Image from "next/image";

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
        <div className="absolute left-1/2 top-0 h-[680px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-3xl" />
        <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="section-shell relative">
        <div className="relative mx-auto mb-6 h-24 w-full overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#070708] shadow-[0_22px_56px_rgba(0,0,0,0.62),0_10px_24px_rgba(255,255,255,0.04),0_0_0_1px_rgba(255,255,255,0.05),inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-18px_44px_rgba(0,0,0,0.48)] [transform:perspective(1200px)_rotateX(1.2deg)] sm:mb-10 sm:h-60 sm:rounded-[2rem] lg:h-72">
          <div className="absolute inset-0 bg-[#070708]" />
          <div className="pointer-events-none absolute inset-x-8 top-0 z-10 h-px bg-white/35" />
          <div className="pointer-events-none absolute inset-x-10 bottom-0 z-10 h-px bg-black/80" />
          <Image
            src={assetPath("/images/apex-liner-hero-logo.jpeg")}
            alt="APEX LINER"
            fill
            sizes="1180px"
            className="object-cover object-center drop-shadow-[0_22px_26px_rgba(0,0,0,0.72)]"
            priority
          />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_32%,rgba(255,255,255,0.22),transparent_31%),linear-gradient(180deg,rgba(255,255,255,0.12),transparent_34%,rgba(0,0,0,0.34))]" />
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] shadow-[inset_18px_18px_44px_rgba(255,255,255,0.055),inset_-24px_-28px_70px_rgba(0,0,0,0.64)]" />
        </div>
      </div>

      <div className="section-shell relative grid min-w-0 max-w-full items-center gap-10 pb-16 sm:gap-14 sm:pb-0 lg:min-h-[calc(100vh-22rem)] lg:grid-cols-[1.05fr_0.95fr]">
        <div className="min-w-0 max-w-full animate-fade-up sm:max-w-3xl">
          <p className="mb-4 inline-flex max-w-full rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-white/60 sm:mb-6 sm:px-4 sm:text-xs sm:tracking-[0.24em]">
            Pose professionnelle en Suisse
          </p>
          <h1 className="max-w-full text-balance font-display text-[1.86rem] font-extrabold leading-[1.06] tracking-[-0.035em] text-white min-[390px]:text-[1.98rem] sm:text-6xl sm:leading-[0.98] sm:tracking-[-0.06em] lg:text-7xl">
            <span className="block sm:inline">Films solaires,</span>{" "}
            <span className="block sm:inline">covering &</span>{" "}
            <span className="block sm:inline">marquage</span>{" "}
            <span className="block sm:inline">publicitaire</span>{" "}
            <span className="block sm:inline">en Suisse</span>
          </h1>
          <p className="mt-4 max-w-full text-[0.96rem] leading-7 text-white/64 sm:mt-7 sm:max-w-2xl sm:text-xl sm:leading-8">
            APEX LINER accompagne les professionnels et particuliers dans la pose de films solaires pour bâtiments, de covering et de marquage publicitaire, avec des solutions durables, esthétiques et adaptées à chaque projet.
          </p>
          <div className="mt-6 flex min-w-0 max-w-full flex-col gap-3 sm:mt-9 sm:flex-row">
            <a href="mailto:Contact@apexliner.ch" className="btn-primary min-w-0 justify-center text-center">
              Demander un devis
            </a>
            <a href="#services" className="btn-secondary min-w-0 justify-center text-center">
              Voir les services
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-6 sm:mt-12 sm:gap-4 sm:pt-8">
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

        <div className="lg:hidden">
          <div className="mobile-snap-row flex w-full min-w-0 max-w-full snap-x snap-mandatory gap-3 overflow-x-auto pb-4">
            {mobileImages.map((image) => (
              <a key={image.src} href={assetPath(image.src)} target="_blank" rel="noreferrer" className="relative h-64 w-[78vw] shrink-0 snap-center overflow-hidden rounded-[1.35rem] border border-white/10 bg-white/[0.04]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assetPath(image.src)} alt={image.alt} className="h-full w-full object-cover opacity-[0.82] saturate-[0.85]" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
