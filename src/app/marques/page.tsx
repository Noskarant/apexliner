import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PartnersSection } from "@/components/PartnersSection";
import { PartnerSpotlightSection } from "@/components/PartnerSpotlightSection";

export const metadata: Metadata = {
  title: "Marques et partenaires | APEX LINER",
  description: "Marques et partenaires mentionnés par APEX LINER pour les films solaires, covering et prestations automobiles.",
};

export default function MarquesPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070708] pt-20 text-white">
      <Header />
      <PartnersSection />
      <PartnerSpotlightSection />
      <Footer />
    </main>
  );
}
