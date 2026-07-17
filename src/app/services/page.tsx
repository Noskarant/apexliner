import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { SolarFilmSection } from "@/components/SolarFilmSection";
import Link from "next/link";
import { servicePages } from "@/lib/service-pages";

export const metadata: Metadata = {
  title: "Services | APEX LINER",
  description: "Films solaires, covering, marquage publicitaire, vitrophanie et enseignes par APEX LINER en Suisse.",
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
        </div>
        <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {servicePages.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-5 text-sm font-semibold text-white/75 transition hover:-translate-y-1 hover:bg-white/[0.07] hover:text-white">
              {service.shortName}
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
