import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ServicesSection } from "@/components/ServicesSection";
import { SolarFilmSection } from "@/components/SolarFilmSection";

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
      <Footer />
    </main>
  );
}
