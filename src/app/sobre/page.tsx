import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck, Stethoscope, Users } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { SectionDivider } from "@/components/ui/SectionDivider";
import { CtaBand } from "@/components/sections/CtaBand";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história do Centro Veterinário de Aveiro: mais de 25 anos de medicina de família para animais, fundado pelo Dr. Carlos Ribeiro em 2001.",
  alternates: { canonical: "/sobre" },
};

const values = [
  {
    icon: HeartHandshake,
    title: "Continuidade de cuidados",
    description: "A mesma equipa acompanha o seu animal em todas as fases da vida — como um médico de família faria.",
  },
  {
    icon: ShieldCheck,
    title: "Honestidade acima do desconto",
    description: "Cobramos de forma justa pelo trabalho que fazemos, sem competir com preços insustentáveis.",
  },
  {
    icon: Stethoscope,
    title: "Rigor clínico",
    description: "Investimos em equipamento de diagnóstico e numa rede de encaminhamento para casos que exigem especialização.",
  },
  {
    icon: Users,
    title: "Bem-estar animal em primeiro lugar",
    description: "Tratamos cada animal como parte da família — porque, para quem o traz até nós, é mesmo.",
  },
];

export default function SobrePage() {
  return (
    <>
      <div className="bg-soft-sky/60">
        <Container className="py-16 sm:py-20">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-vet-blue-dark shadow-sm">
              Sobre nós
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight text-deep-navy sm:text-5xl">
              25 anos a cuidar dos animais de Aveiro
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate/80">
              Desde 2001, o Centro Veterinário de Aveiro é a clínica de bairro que trata o seu animal como família —
              com a experiência clínica e cirúrgica de quem está na profissão desde 1979.
            </p>
          </Reveal>
        </Container>
      </div>
      <SectionDivider from="soft" to="offwhite" />

      <Section>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="left">
            <span className="mb-3 inline-block rounded-full bg-soft-sky px-4 py-1.5 text-sm font-semibold text-vet-blue-dark">
              A nossa história
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
              Uma clínica pensada de raiz para cuidar bem
            </h2>
            <div className="mt-6 space-y-4 text-slate/80 leading-relaxed">
              <p>
                O Dr. Carlos Ribeiro iniciou a sua carreira como veterinário em 1979, começando por acompanhar
                explorações de produção animal e gado leiteiro na região de Lisboa, e mais tarde no distrito de
                Aveiro.
              </p>
              <p>
                Em {site.foundedYear}, fundou o Centro Veterinário de Aveiro num espaço de cerca de 160 m² concebido
                de raiz para o diagnóstico e tratamento médico e cirúrgico de animais de companhia — mantendo, ao
                mesmo tempo, a assistência a animais de produção que já prestava.
              </p>
              <p>
                Ao longo de mais de duas décadas, o CVA cresceu de uma clínica de bairro para uma referência
                reconhecida em toda a cidade e localidades vizinhas — sem nunca perder o espírito de proximidade que
                a fez nascer.
              </p>
            </div>
          </Reveal>
          <Reveal variant="right" delay={120} className="relative">
            <span
              className="animate-float absolute -bottom-6 -left-6 hidden h-28 w-28 rounded-3xl bg-sunlit-yellow/20 sm:block"
              aria-hidden="true"
            />
            <PlaceholderImage
              label="Foto: Dr. Carlos Ribeiro na clínica"
              tone="navy"
              className="relative aspect-4/3 w-full shadow-lg shadow-deep-navy/10"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-white">
        <Reveal variant="scale" className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-soft-sky bg-soft-sky/30 p-8 text-center sm:p-12">
          <p className="font-heading text-xl italic leading-relaxed text-deep-navy sm:text-2xl">
            &ldquo;Acreditamos numa medicina generalista feita com excelência — e num encaminhamento honesto para
            hospitais de referência sempre que um caso o exige.&rdquo;
          </p>
          <p className="mt-4 text-sm font-semibold text-vet-blue-dark">Dr. Carlos Ribeiro, Fundador &amp; Diretor Clínico</p>
        </Reveal>
      </Section>

      <Section>
        <SectionHeading eyebrow="Valores" title="O que nos guia todos os dias" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 90} variant="scale">
              <div className="group h-full rounded-2xl border border-soft-sky bg-white p-6 shadow-sm shadow-deep-navy/3 transition-all duration-300 hover:-translate-y-1.5 hover:border-vet-blue/30 hover:shadow-lg hover:shadow-vet-blue/10">
                <IconBadge>
                  <value.icon aria-hidden="true" />
                </IconBadge>
                <h3 className="mt-4 font-heading font-semibold text-deep-navy">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate/70">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/equipa" variant="outline">
            Conheça a nossa equipa
          </Button>
        </div>
      </Section>

      <SectionDivider from="offwhite" to="blue" />
      <CtaBand />
    </>
  );
}
