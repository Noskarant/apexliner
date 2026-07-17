import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteUrl } from "@/lib/local-seo";

export const metadata: Metadata = {
  title: "Contact APEX LINER à Bussigny | Devis films, covering et marquage",
  description:
    "Contacter APEX LINER, entreprise basée à Bussigny dans le canton de Vaud, pour un devis de film solaire, covering ou marquage publicitaire.",
  alternates: { canonical: `${siteUrl}/contact/` },
  openGraph: {
    title: "Contact APEX LINER à Bussigny",
    description:
      "Demande de devis pour films solaires, covering, marquage publicitaire et vitrines à Bussigny et dans la région lausannoise.",
    url: `${siteUrl}/contact/`,
    type: "website",
    images: ["/images/logo-wide.jpeg"],
  },
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
