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
            "Le site APEX LINER appartient à Romain. Le nom complet et les informations administratives définitives seront complétés ultérieurement.",
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
            "APEX LINER présente des prestations de pose de films solaires pour bâtiments, covering, films adhésifs pour vitrages et marquage publicitaire.",
            "Les informations présentes sur le site sont fournies à titre indicatif et peuvent être mises à jour.",
          ],
        },
      ]}
    />
  );
}
