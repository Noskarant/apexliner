import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PartnersSection } from "@/components/PartnersSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolarFilmSection } from "@/components/SolarFilmSection";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#070708] text-white">
      <Header />
      <Hero />
      <ServicesSection />
      <SolarFilmSection />
      <PartnersSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
