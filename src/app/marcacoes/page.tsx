import type { Metadata } from "next";
import { CalendarCheck, ClipboardList, MessageSquareText, Phone, PocketKnife, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { AppointmentForm } from "@/components/sections/AppointmentForm";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { contact } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Marcar Consulta",
  description: "Peça uma marcação de consulta veterinária em Aveiro por email, WhatsApp ou telefone.",
  alternates: { canonical: "/marcacoes" },
};

const tips = [
  {
    icon: ClipboardList,
    text: "Traga o boletim sanitário / cartão de vacinas do seu animal, se tiver.",
  },
  {
    icon: PocketKnife,
    text: "Faça uma lista da medicação atual ou de sintomas observados.",
  },
  {
    icon: ShieldCheck,
    text: "Gatos e exóticos devem viajar numa transportadora segura e fechada.",
  },
  {
    icon: CalendarCheck,
    text: "Chegue com 10 minutos de antecedência para o check-in.",
  },
];

export default function MarcacoesPage() {
  return (
    <>
      <div className="bg-soft-sky/60">
        <Container className="py-16 text-center sm:py-20">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-vet-blue-dark shadow-sm">
              Marcações
            </span>
            <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-deep-navy sm:text-5xl">
              Marque a consulta do seu animal
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate/80">
              Preencha o formulário abaixo ou ligue diretamente para {contact.phone}. Confirmamos a marcação
              assim que possível.
            </p>
          </Reveal>
        </Container>
      </div>

      <ProcessSteps
        eyebrow="Como funciona"
        title="Da marcação à consulta, em 3 passos"
        steps={[
          {
            icon: MessageSquareText,
            title: "Preencha o formulário",
            description: "Diga-nos o nome do seu animal, o serviço pretendido e a melhor data para si.",
          },
          {
            icon: Phone,
            title: "Confirmamos consigo",
            description: "Entramos em contacto por telefone ou WhatsApp para confirmar dia e hora.",
          },
          {
            icon: CalendarCheck,
            title: "Vemo-nos na consulta",
            description: "Chegue um pouco mais cedo e a nossa equipa trata do resto.",
          },
        ]}
      />

      <Section className="bg-white pt-0">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start">
          <Reveal className="lg:col-span-2">
            <AppointmentForm />
            <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate/60 lg:justify-start">
              <Phone className="h-4 w-4" aria-hidden="true" />
              Para urgências, ligue {contact.urgencyPhone}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-soft-sky bg-soft-sky/30 p-6">
              <h2 className="font-heading font-semibold text-deep-navy">Antes da primeira consulta</h2>
              <ul className="mt-4 space-y-4">
                {tips.map((tip) => (
                  <li key={tip.text} className="group flex items-start gap-3">
                    <IconBadge size="sm" tone="white">
                      <tip.icon aria-hidden="true" />
                    </IconBadge>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate/75">{tip.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
