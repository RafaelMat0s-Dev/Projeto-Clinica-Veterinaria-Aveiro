import { CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

const reasons = [
  {
    title: "Independentes, não uma cadeia",
    description:
      "Não pertencemos a nenhum grupo internacional. As decisões sobre o seu animal são tomadas por quem o conhece, não por uma sede distante.",
  },
  {
    title: "A mesma equipa, ao longo de toda a vida do seu animal",
    description: "Continuidade de cuidados é o nosso pilar — conhecemos o historial clínico e a personalidade de cada paciente.",
  },
  {
    title: "Honestos sobre o que fazemos — e o que encaminhamos",
    description:
      "Praticamos medicina generalista de excelência e encaminhamos casos complexos para hospitais de referência, em vez de prometer o que não podemos garantir.",
  },
  {
    title: "Preços justos, não descontos agressivos",
    description: "Acreditamos em cobrar de forma justa pelo trabalho que fazemos — e nunca comprometer a qualidade do cuidado.",
  },
];

export function WhyUs() {
  return (
    <Section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-vet-blue/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal variant="left" className="relative">
          <span
            className="animate-float absolute -top-6 -right-6 hidden h-24 w-24 rounded-3xl bg-sunlit-yellow/25 sm:block"
            aria-hidden="true"
          />
          <PlaceholderImage
            label="Foto: equipa do CVA na receção"
            tone="green"
            className="relative aspect-4/3 w-full shadow-lg shadow-deep-navy/10"
          />
        </Reveal>
        <Reveal variant="right" delay={120}>
          <span className="mb-3 inline-block rounded-full bg-soft-sky px-4 py-1.5 text-sm font-semibold text-vet-blue-dark">
            Porquê o CVA
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">
            Uma clínica de bairro, com a experiência de um hospital
          </h2>
          <ul className="mt-8 space-y-2">
            {reasons.map((reason) => (
              <li
                key={reason.title}
                className="flex gap-3.5 rounded-xl p-2.5 transition-colors duration-300 hover:bg-soft-sky/50"
              >
                <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-vet-blue-dark" aria-hidden="true" />
                <div>
                  <h3 className="font-heading font-semibold text-deep-navy">{reason.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-slate/70">{reason.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
