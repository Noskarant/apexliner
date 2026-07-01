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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} scroll-smooth`}>
      <body>{children}</body>
    </html>
  );
}
