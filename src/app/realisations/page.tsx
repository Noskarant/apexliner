import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { GallerySection } from "@/components/GallerySection";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Réalisations | APEX LINER",
  description: "Références visuelles de poses de films solaires, covering, marquage et vitrages par APEX LINER.",
};

export default function RealisationsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#070708] pt-20 text-white">
      <Header />
      <GallerySection />
      <Footer />
    </main>
  );
}
