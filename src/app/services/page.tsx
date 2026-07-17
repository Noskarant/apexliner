import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { SolarFilmSection } from "@/components/SolarFilmSection";
import { localAreaLabel, siteUrl } from "@/lib/local-seo";
import { servicePages } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Services APEX LINER à Bussigny | Films, covering et marquage",
  description:
    "Films solaires, covering, marquage publicitaire, vitrophanie et enseignes par APEX LINER, entreprise basée à Bussigny dans le canton de Vaud.",
  alternates: { canonical: `${siteUrl}/services/` },
  openGraph: {
    title: "Services APEX LINER à Bussigny",
    description:
      "Films solaires, covering, marquage publicitaire et vitrines pour Bussigny, Crissier, Renens, Ecublens et Lausanne.",
    url: `${siteUrl}/services/`,
    type: "website",
    images: ["/images/logo-wide.jpeg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070708] pt-20 text-white">
      <Header />
      <ServicesSection />
      <SolarFilmSection />
      <section className="section-shell border-t border-white/10 py-16 sm:py-24">
        <div className="section-heading">
          <p className="eyebrow">Prestations dédiées</p>
          <h2>Des pages pour chaque besoin</h2>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-white/55">
            APEX LINER est basée à Bussigny. Les demandes locales concernent notamment {localAreaLabel}.
          </p>
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {servicePages.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm font-semibold text-white/75 transition hover:-translate-y-1 hover:bg-white/[0.07] hover:text-white">
              {service.shortName}
            </Link>
          ))}
        </div>
        <Link href="/zone-intervention-bussigny-lausanne" className="mt-8 inline-flex text-sm font-semibold text-white/60 underline decoration-white/20 underline-offset-8 transition hover:text-white hover:decoration-white">
          Voir la zone Bussigny-Lausanne
        </Link>
      </section>
      <Footer />
    </main>
  );
}
