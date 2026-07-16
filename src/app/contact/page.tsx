import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Contact | APEX LINER",
  description: "Contacter APEX LINER pour une demande de devis ou une première prise de contact.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070708] pt-20 text-white">
      <Header />
      <ContactSection />
      <Footer />
    </main>
  );
}
