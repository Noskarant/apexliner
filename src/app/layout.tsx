import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const display = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexliner.ch"),
  title: "APEX LINER | Films solaires, covering & marquage publicitaire",
  description:
    "Entreprise spécialisée dans la pose de films solaires, covering et marquage publicitaire en Suisse.",
  openGraph: {
    title: "APEX LINER | Films solaires, covering & marquage publicitaire",
    description:
      "Entreprise spécialisée dans la pose de films solaires, covering et marquage publicitaire en Suisse.",
    siteName: "APEX LINER",
    images: ["/images/logo-wide.jpeg"],
    type: "website",
  },
  icons: {
    icon: "/icon.jpg",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://apexliner.ch/#business",
  name: "APEX LINER Sàrl",
  url: "https://apexliner.ch/",
  email: "Contact@apexliner.ch",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rue de l’Industrie 28, c/o AMAFINANCE SA",
    postalCode: "1030",
    addressLocality: "Bussigny",
    addressRegion: "Vaud",
    addressCountry: "CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }} />
        {children}
      </body>
    </html>
  );
}
