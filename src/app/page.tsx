import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PartnersSection } from "@/components/PartnersSection";
import { PartnerSpotlightSection } from "@/components/PartnerSpotlightSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolarFilmSection } from "@/components/SolarFilmSection";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070708] text-white">
      <div className="ambient-orbs" aria-hidden="true">
        <span className="orb orb-one" />
        <span className="orb orb-two" />
        <span className="orb orb-three" />
        <span className="orb orb-four" />
        <span className="orb orb-five" />
      </div>
      <Header />
      <Hero />
      <ServicesSection />
      <SolarFilmSection />
      <PartnersSection />
      <PartnerSpotlightSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
