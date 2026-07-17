import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/ServiceDetailPage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getServicePage, servicePages } from "@/lib/service-pages";
import { businessInfo, nearbyServiceAreas, siteUrl } from "@/lib/local-seo";

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.description,
    alternates: { canonical: `${siteUrl}/services/${service.slug}/` },
    openGraph: {
      title: service.title,
      description: service.description,
      url: `${siteUrl}/services/${service.slug}/`,
      type: "website",
      images: [{ url: service.image, alt: service.imageAlt }],
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServicePage(slug);
  if (!service) notFound();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `${siteUrl}/services/${service.slug}/`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${siteUrl}/#business`,
      name: businessInfo.name,
      url: siteUrl,
      email: businessInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: businessInfo.streetAddress,
        postalCode: businessInfo.postalCode,
        addressLocality: businessInfo.locality,
        addressRegion: businessInfo.region,
        addressCountry: businessInfo.country,
      },
    },
    areaServed: nearbyServiceAreas.map((area) => ({ "@type": "City", name: area })),
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
      <Header />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <ServiceDetailPage service={service} />
      <Footer />
    </>
  );
}
