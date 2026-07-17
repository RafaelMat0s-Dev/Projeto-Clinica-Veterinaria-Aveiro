import type { Metadata } from "next";
import { CheckCircle2, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { ServiceIcon } from "@/components/icons/service-icon";
import { CtaBand } from "@/components/sections/CtaBand";
import { contact, services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Consultas, vacinação, cirurgia, diagnóstico, exóticos e mais — conheça todos os serviços veterinários do Centro Veterinário de Aveiro.",
  alternates: { canonical: "/servicos" },
};

export default function ServicosPage() {
  return (
    <>
      <div className="bg-soft-sky/60">
        <Container className="py-16 text-center sm:py-20">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-vet-blue-dark shadow-sm">
              Serviços
            </span>
            <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-deep-navy sm:text-5xl">
              Cuidados completos, numa só clínica de confiança
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate/80">
              Da consulta de rotina à cirurgia, passamos por todas as fases da vida do seu animal com a mesma equipa.
            </p>
          </Reveal>
        </Container>
      </div>
      <SectionDivider from="soft" to="offwhite" />

      <Section className="pt-0">
        <nav aria-label="Atalhos para serviços" className="mb-14 flex flex-wrap justify-center gap-2">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-soft-sky bg-white px-4 py-2 text-sm font-medium text-vet-blue-dark transition-all hover:-translate-y-0.5 hover:bg-soft-sky hover:shadow-sm"
            >
              {service.title}
            </a>
          ))}
        </nav>

        <div className="space-y-16">
          {services.map((service, i) => (
            <Reveal key={service.slug} variant={i % 2 === 0 ? "left" : "right"}>
              <div
                id={service.slug}
                className="grid scroll-mt-24 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14"
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <IconBadge size="lg">
                    <ServiceIcon icon={service.icon} />
                  </IconBadge>
                  <h2 className="mt-5 font-heading text-2xl font-bold text-deep-navy sm:text-3xl">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate/80">{service.description}</p>
                  <ul className="mt-5 space-y-2.5">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2.5 text-sm text-slate/80">
                        <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-vet-blue-dark" aria-hidden="true" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-3">
                    <Button href="/marcacoes" size="sm">
                      Marcar consulta
                    </Button>
                    <Button href={contact.phoneHref} variant="outline" size="sm" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                      {contact.phone}
                    </Button>
                  </div>
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <PlaceholderImage
                    label={`Foto: ${service.title}`}
                    tone={i % 2 === 0 ? "blue" : "green"}
                    className="aspect-4/3 w-full transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <SectionDivider from="offwhite" to="blue" />
      <CtaBand />
    </>
  );
}
