import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CtaBand } from "@/components/sections/CtaBand";
import { team } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Equipa",
  description:
    "Conheça a equipa do Centro Veterinário de Aveiro: Dr. Carlos Ribeiro, Dra. Dália Castro e Milene Soares.",
  alternates: { canonical: "/equipa" },
};

export default function EquipaPage() {
  return (
    <>
      <div className="bg-soft-sky/60">
        <Container className="py-16 text-center sm:py-20">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-vet-blue-dark shadow-sm">
              Equipa
            </span>
            <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-deep-navy sm:text-5xl">
              As pessoas que vão conhecer o seu animal para a vida
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate/80">
              Acreditamos que os primeiros cinco minutos de contacto definem a confiança de um cliente — por isso
              lideramos sempre com as pessoas.
            </p>
          </Reveal>
        </Container>
      </div>

      <SectionDivider from="soft" to="offwhite" />

      <Section className="pt-0">
        <div className="mx-auto max-w-4xl space-y-8">
          {team.map((member, i) => (
            <Reveal key={member.slug} delay={i * 100} variant={i % 2 === 0 ? "left" : "right"}>
              <div className="group flex flex-col gap-6 rounded-3xl border border-soft-sky bg-white p-8 shadow-sm shadow-deep-navy/3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-vet-blue/10 sm:flex-row sm:items-start">
                <span className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-vet-blue to-vet-blue-dark font-heading text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3">
                  {member.initials}
                </span>
                <div>
                  <h2 className="font-heading text-xl font-bold text-deep-navy">{member.name}</h2>
                  <p className="text-sm font-semibold text-vet-blue-dark">{member.role}</p>
                  {member.since && <p className="mt-1 text-xs text-slate/60">{member.since}</p>}
                  <p className="mt-4 leading-relaxed text-slate/80">{member.bio}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mx-auto mt-12 max-w-2xl rounded-2xl bg-soft-sky/40 p-6 text-center text-sm text-slate/70">
          Contamos ainda com apoio veterinário e de enfermagem adicional em regime de reforço, para garantir sempre o
          melhor atendimento em períodos de maior procura.
        </Reveal>
      </Section>

      <SectionDivider from="offwhite" to="blue" />
      <CtaBand />
    </>
  );
}
