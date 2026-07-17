import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { ChatWidget } from "@/components/layout/ChatWidget";
import { contact, hours, site } from "@/lib/site-data";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Veterinário em Aveiro`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "veterinário Aveiro",
    "clínica veterinária Aveiro",
    "centro veterinário Aveiro",
    "consulta veterinária Aveiro",
    "vacinação cão gato Aveiro",
    "urgências veterinárias Aveiro",
  ],
  openGraph: {
    title: `${site.name} | Veterinário em Aveiro`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "pt_PT",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

const openingHoursSpecification = hours
  .filter((h) => h.hours !== "Encerrado")
  .map((h) => {
    const dayMap: Record<string, string> = {
      "Segunda-feira": "Monday",
      "Terça-feira": "Tuesday",
      "Quarta-feira": "Wednesday",
      "Quinta-feira": "Thursday",
      "Sexta-feira": "Friday",
      Sábado: "Saturday",
      Domingo: "Sunday",
    };
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[h.day],
      opens: "10:00",
      closes: "19:30",
    };
  });

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  name: site.name,
  description: site.description,
  url: site.url,
  telephone: contact.phone.replace(/\s/g, ""),
  email: contact.email,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: contact.addressLines[0],
    addressLocality: "Aveiro",
    postalCode: "3810-495",
    addressCountry: "PT",
  },
  openingHoursSpecification,
  sameAs: [contact.facebook, contact.instagram],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-offwhite text-slate">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-vet-blue focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar para o conteúdo principal
        </a>
        <Header />
        <main id="conteudo-principal" className="flex-1 pb-16 lg:pb-0">
          {children}
        </main>
        <Footer />
        <StickyMobileCta />
        <ChatWidget />
      </body>
    </html>
  );
}
