import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Conditions générales | APEX LINER",
  description: "Conditions générales d'utilisation du site APEX LINER.",
};

export default function CgvPage() {
  return (
    <LegalPage
      title="Conditions générales"
      intro="Conditions générales applicables à la consultation du site vitrine APEX LINER."
      sections={[
        {
          title: "Objet du site",
          content: [
            "Le site APEX LINER présente des prestations de pose de films solaires, pose de films adhésifs sur véhicules, covering, marquage, vitrophanie, enseignes et publicité visuelle.",
            "Il s'agit d'un site vitrine destiné à présenter l'activité et à faciliter la prise de contact.",
          ],
        },
        {
          title: "Demandes de devis",
          content: [
            "Les demandes envoyées via email ne constituent pas une commande ferme.",
            "Les conditions commerciales, délais, prix et modalités d'intervention sont précisés séparément lors des échanges avec APEX LINER.",
          ],
        },
        {
          title: "Informations du site",
          content: [
            "Les textes, visuels et informations sont fournis à titre indicatif.",
            "APEX LINER peut modifier le contenu du site à tout moment afin de le maintenir à jour.",
          ],
        },
        {
          title: "Propriété",
          content: [
            "Le site présente l'activité d'APEX LINER Sàrl, société à responsabilité limitée inscrite le 24 juin 2026, IDE / UID CHE-326.949.404, registre du commerce du Canton de Vaud.",
          ],
        },
      ]}
    />
  );
}
