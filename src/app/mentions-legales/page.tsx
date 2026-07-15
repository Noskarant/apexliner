import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Mentions légales | APEX LINER",
  description: "Mentions légales du site APEX LINER.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPage
      title="Mentions légales"
      intro="Informations légales relatives au site vitrine APEX LINER."
      sections={[
        {
          title: "Éditeur du site",
          content: [
            "Raison sociale : APEX LINER Sàrl.",
            "Forme juridique : Société à responsabilité limitée (Sàrl).",
            "Date d'inscription : 24 juin 2026.",
            "Numéro d'identification IDE / UID : CHE-326.949.404.",
            "Registre du commerce : Canton de Vaud, Suisse.",
            "Siège : Bussigny.",
            "Adresse de domicile : Rue de l'Industrie 28, c/o AMAFINANCE SA, 1030 Bussigny, Suisse.",
            "Email de contact : Contact@apexliner.ch",
          ],
        },
        {
          title: "Hébergement",
          content: [
            "Le site est hébergé via GitHub Pages, service fourni par GitHub, Inc.",
            "GitHub, Inc. est situé au 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis.",
          ],
        },
        {
          title: "Activité présentée",
          content: [
            "APEX LINER présente des prestations de pose de films solaires, pose de films adhésifs sur tout véhicule, covering, marquage, vitrophanie et enseignes.",
            "L'activité couvre plus largement les prestations liées au domaine de la publicité visuelle, selon les besoins du projet.",
            "Les informations présentes sur le site sont fournies à titre indicatif et peuvent être mises à jour.",
          ],
        },
      ]}
    />
  );
}
