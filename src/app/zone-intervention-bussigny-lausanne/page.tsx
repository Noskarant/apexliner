import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { businessInfo, nearbyServiceAreas, siteUrl } from "@/lib/local-seo";
import { servicePages } from "@/lib/service-pages";

const pageUrl = `${siteUrl}/zone-intervention-bussigny-lausanne/`;

const localFaq = [
  {
    question: "APEX LINER est-elle basée à Bussigny ?",
    answer:
      "Oui. APEX LINER Sàrl est basée à Bussigny, dans le canton de Vaud, à l’adresse Rue de l’Industrie 28, c/o AMAFINANCE SA, 1030 Bussigny.",
  },
  {
    question: "Quelles zones proches sont indiquées pour les demandes de devis ?",
    answer:
      "Les zones proches mises en avant sont Bussigny, Crissier, Renens, Ecublens et Lausanne. Elles correspondent à la région lausannoise proche de la base de l’entreprise.",
  },
  {
    question: "Quels types de projets peuvent être demandés localement ?",
    answer:
      "Les demandes peuvent concerner les films solaires pour vitrages, la protection solaire de bureaux, les vitrines de commerces, le covering automobile ou utilitaire, le marquage publicitaire de véhicules et le lettrage de vitrines.",
  },
  {
    question: "Comment préparer une demande de devis ?",
    answer:
      "Il est utile d’indiquer la commune, le type de support, les dimensions approximatives, l’usage du lieu ou du véhicule, ainsi que l’objectif recherché : chaleur, visibilité, identité visuelle ou covering.",
  },
];

export const metadata: Metadata = {
  title: "Films solaires, covering et marquage à Bussigny et Lausanne | APEX LINER",
  description:
    "APEX LINER est basée à Bussigny et présente ses services de films solaires, covering et marquage pour Bussigny, Crissier, Renens, Ecublens et Lausanne.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "APEX LINER à Bussigny et dans la région lausannoise",
    description:
      "Films solaires, covering automobile, marquage publicitaire et lettrage de vitrines autour de Bussigny, Crissier, Renens, Ecublens et Lausanne.",
    url: pageUrl,
    type: "website",
    images: ["/images/logo-wide.jpeg"],
  },
};

export default function LocalAreaPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#business`,
    name: businessInfo.name,
    url: `${siteUrl}/`,
    email: businessInfo.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: businessInfo.streetAddress,
      postalCode: businessInfo.postalCode,
      addressLocality: businessInfo.locality,
      addressRegion: businessInfo.region,
      addressCountry: businessInfo.country,
    },
    areaServed: nearbyServiceAreas.map((area) => ({ "@type": "City", name: area })),
  };

  const webpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Films solaires, covering et marquage à Bussigny et Lausanne",
    url: pageUrl,
    about: localBusinessJsonLd,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: servicePages.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.name,
        url: `${siteUrl}/services/${service.slug}/`,
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: localFaq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070708] pt-20 text-white">
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="section-shell pt-16 sm:pt-24">
        <p className="eyebrow">Zone locale</p>
        <h1 className="mt-4 max-w-4xl font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.05em] sm:text-6xl">
          Films solaires, covering et marquage à Bussigny et dans la région lausannoise
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-white/65">
          APEX LINER est basée à Bussigny, dans le canton de Vaud. Cette page regroupe les prestations proposées
          localement autour de Bussigny, Crissier, Renens, Ecublens et Lausanne, sans élargir la zone au-delà des
          communes proches confirmées.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/contact" className="btn-primary">
            Demander un devis
          </Link>
          <Link href="/services" className="btn-secondary">
            Voir les services
          </Link>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Une base à Bussigny, proche des communes de l’ouest lausannois
          </h2>
          <p className="mt-5 text-base leading-7 text-white/62">
            La localisation à Bussigny est pertinente pour les projets de vitrages, vitrines et véhicules situés à
            proximité immédiate. Les demandes locales peuvent concerner un commerce à Lausanne, un bureau à Renens,
            un utilitaire professionnel à Crissier, une vitrine à Ecublens ou un bâtiment à Bussigny.
          </p>
          <p className="mt-4 text-base leading-7 text-white/62">
            Le devis dépend du support, de l’état des surfaces, des dimensions, du type de film ou de marquage et de
            l’objectif : réduire la chaleur, améliorer la lisibilité, habiller un véhicule ou rendre une activité plus
            visible.
          </p>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Zones proches mentionnées</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {nearbyServiceAreas.map((area) => (
              <p key={area} className="rounded-2xl border border-white/10 bg-white/[0.035] px-4 py-4 text-sm font-semibold text-white/75">
                {area}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.025] py-16 sm:py-24">
        <div className="section-shell">
          <p className="eyebrow">Prestations</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">
            Services proposés autour de Bussigny et Lausanne
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicePages.map((service) => (
              <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-white/10 bg-black/30 p-5 transition hover:-translate-y-1 hover:bg-white/[0.05]">
                <h3 className="font-display text-lg font-bold leading-tight">{service.shortName}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell grid gap-10 py-16 sm:py-24 lg:grid-cols-2">
        <div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Préparer une demande de devis</h2>
          <p className="mt-5 text-base leading-7 text-white/62">
            Pour un bâtiment ou une vitrine, indiquez la commune, l’exposition, le type de vitrage, le nombre de
            surfaces et la gêne à traiter. Pour un véhicule, précisez le modèle, l’usage professionnel ou privé, les
            éléments à couvrir et les fichiers disponibles pour un marquage.
          </p>
          <Link href="/contact" className="btn-primary mt-7">
            Contacter APEX LINER
          </Link>
        </div>
        <div>
          <h2 className="font-display text-3xl font-bold tracking-[-0.04em] sm:text-4xl">Questions locales</h2>
          <div className="mt-7 space-y-3">
            {localFaq.map((item) => (
              <details key={item.question} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5">
                <summary className="cursor-pointer font-semibold">{item.question}</summary>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
