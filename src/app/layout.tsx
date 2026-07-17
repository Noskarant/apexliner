import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import { businessInfo, nearbyServiceAreas, siteUrl } from "@/lib/local-seo";
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
  metadataBase: new URL(siteUrl),
  title: "APEX LINER | Films solaires, covering & marquage publicitaire à Bussigny",
  description:
    "Entreprise basée à Bussigny, dans le canton de Vaud, spécialisée dans la pose de films solaires, covering et marquage publicitaire.",
  openGraph: {
    title: "APEX LINER | Films solaires, covering & marquage publicitaire à Bussigny",
    description:
      "Entreprise basée à Bussigny, dans le canton de Vaud, spécialisée dans la pose de films solaires, covering et marquage publicitaire.",
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
  "@id": `${siteUrl}/#business`,
  name: businessInfo.name,
  url: `${siteUrl}/`,
  email: businessInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: businessInfo.streetAddress,
    postalCode: businessInfo.postalCode,
    addressLocality: businessInfo.locality,
    addressRegion: businessInfo.region,
    addressCountry: businessInfo.country,
  },
  areaServed: nearbyServiceAreas.map((area) => ({ "@type": "City", name: area })),
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
