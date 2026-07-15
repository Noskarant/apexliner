import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Politique de confidentialité | APEX LINER",
  description: "Politique de confidentialité du site APEX LINER.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="Cette page explique les données pouvant être traitées lors de l'utilisation du site APEX LINER."
      sections={[
        {
          title: "Responsable du site",
          content: [
            "Responsable du site : APEX LINER Sàrl.",
            "IDE / UID : CHE-326.949.404.",
            "Adresse de domicile : Rue de l'Industrie 28, c/o AMAFINANCE SA, 1030 Bussigny, Suisse.",
            "Pour toute demande liée aux données personnelles : Contact@apexliner.ch",
          ],
        },
        {
          title: "Données collectées",
          content: [
            "Le site ne crée pas de compte utilisateur et ne dispose pas d'espace client.",
            "Lorsqu'un visiteur utilise le bouton de contact ou le formulaire mailto, les informations saisies peuvent être transmises volontairement par email : nom, adresse email et message.",
          ],
        },
        {
          title: "Finalité",
          content: [
            "Les données transmises servent uniquement à répondre aux demandes de contact, demandes d'information ou demandes de devis.",
            "Aucune donnée bancaire n'est collectée par ce site vitrine.",
          ],
        },
        {
          title: "Hébergement et tiers",
          content: [
            "Le site est hébergé via GitHub Pages.",
            "Aucune revente de données personnelles à des tiers n'est prévue.",
          ],
        },
        {
          title: "Droits",
          content: [
            "Vous pouvez demander l'accès, la rectification ou la suppression de vos données en écrivant à Contact@apexliner.ch.",
          ],
        },
      ]}
    />
  );
}
