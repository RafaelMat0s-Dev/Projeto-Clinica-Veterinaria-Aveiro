import type { Metadata } from "next";
import { AlertTriangle, Info, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { hours, contact, urgentCare } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Urgências Veterinárias",
  description:
    "Atendimento urgente em Aveiro através da linha dedicada 969 571 573. Informação honesta: não somos hospital 24 horas.",
  alternates: { canonical: "/urgencias" },
};

export default function UrgenciasPage() {
  return (
    <>
      <div className="relative overflow-hidden bg-deep-navy">
        <span
          className="animate-ring pointer-events-none absolute left-1/2 top-24 h-16 w-16 -translate-x-1/2 rounded-full bg-coral/40"
          aria-hidden="true"
        />
        <Container className="relative py-16 text-center sm:py-20">
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-sunlit-yellow">
              <AlertTriangle className="h-4 w-4" aria-hidden="true" />
              Urgências
            </span>
            <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              {urgentCare.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">{urgentCare.intro}</p>
            <div className="mt-8">
              <Button
                href={contact.urgencyPhoneHref}
                size="lg"
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
              >
                Ligar agora: {contact.urgencyPhone}
              </Button>
            </div>
          </Reveal>
        </Container>
      </div>
      <SectionDivider from="navy" to="offwhite" />

      <Section className="pt-0">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Reveal variant="left">
            <h2 className="font-heading text-2xl font-bold text-deep-navy">Quando ligar para a linha de urgência</h2>
            <ul className="mt-5 space-y-3">
              {urgentCare.whatCounts.map((item, i) => (
                <li
                  key={item}
                  className="animate-fade-up flex items-start gap-2.5 rounded-xl bg-soft-sky/40 px-4 py-3 text-sm text-slate/80 transition-colors duration-300 hover:bg-soft-sky/70"
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  <AlertTriangle className="mt-0.5 h-4.5 w-4.5 shrink-0 text-coral" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal variant="right" delay={100}>
            <div className="h-full rounded-2xl border border-soft-sky bg-white p-7 transition-colors duration-300 hover:border-vet-blue/30">
              <div className="flex items-center gap-2.5 font-heading font-semibold text-deep-navy">
                <Info className="h-5 w-5 text-vet-blue-dark" aria-hidden="true" />
                Sejamos honestos consigo
              </div>
              <p className="mt-3 text-sm leading-relaxed text-slate/80">{urgentCare.honestyNote}</p>

              <div className="mt-6 border-t border-soft-sky pt-5">
                <p className="font-heading text-sm font-semibold text-deep-navy">Horário de funcionamento</p>
                <dl className="mt-3 space-y-1.5 text-sm">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between">
                      <dt className="text-slate/60">{h.day}</dt>
                      <dd className={h.hours === "Encerrado" ? "text-slate/40" : "font-medium text-deep-navy"}>{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button href={contact.urgencyPhoneHref} size="sm" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                  Urgências {contact.urgencyPhone}
                </Button>
                <Button href={contact.phoneHref} variant="outline" size="sm">
                  Linha geral {contact.phone}
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
