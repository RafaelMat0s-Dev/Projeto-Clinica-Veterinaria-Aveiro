import type { Metadata } from "next";
import { HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { faqs } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Perguntas Frequentes",
  description: "Respostas às perguntas mais comuns sobre marcações, urgências, preços, exóticos e visitas ao domicílio no Centro Veterinário de Aveiro.",
  alternates: { canonical: "/faq" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <div className="bg-soft-sky/60">
        <Container className="py-16 text-center sm:py-20">
          <Reveal>
            <IconBadge size="lg" className="mx-auto mb-4" animated={false}>
              <HelpCircle aria-hidden="true" />
            </IconBadge>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-vet-blue-dark shadow-sm">
              FAQ
            </span>
            <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-deep-navy sm:text-5xl">
              Perguntas frequentes
            </h1>
          </Reveal>
        </Container>
      </div>
      <SectionDivider from="soft" to="offwhite" />

      <Section className="pt-0">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <FaqAccordion items={faqs} />
          </Reveal>
          <Reveal delay={100} className="mt-10 rounded-2xl bg-soft-sky/40 p-6 text-center transition-colors duration-300 hover:bg-soft-sky/60">
            <p className="text-slate/80">Ainda tem dúvidas?</p>
            <div className="mt-4 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/contactos">Contacte-nos</Button>
              <Button href="/marcacoes" variant="outline">
                Marcar consulta
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
