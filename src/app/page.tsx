import { MessageCircle, Calendar, PawPrint } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TeamSnapshot } from "@/components/sections/TeamSnapshot";
import { Testimonials } from "@/components/sections/Testimonials";
import { UrgentCareStrip } from "@/components/sections/UrgentCareStrip";
import { CampaignBanner } from "@/components/sections/CampaignBanner";
import { HoursMap } from "@/components/sections/HoursMap";
import { CtaBand } from "@/components/sections/CtaBand";
import { SectionDivider } from "@/components/ui/SectionDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesGrid compact />
      <WhyUs />
      <ProcessSteps
        eyebrow="Como funciona"
        title="Do primeiro contacto ao acompanhamento para a vida"
        description="Marcar uma consulta no CVA é simples — e a partir daí, a mesma equipa acompanha o seu animal em todas as visitas."
        steps={[
          {
            icon: MessageCircle,
            title: "Contacte-nos",
            description: "Ligue, envie WhatsApp ou preencha o formulário de marcações — o que for mais rápido para si.",
          },
          {
            icon: Calendar,
            title: "Marcamos ao seu ritmo",
            description: "Confirmamos data e hora consigo, com prioridade para urgências e primeiras consultas.",
          },
          {
            icon: PawPrint,
            title: "Cuidamos como família",
            description: "A mesma equipa acompanha o seu animal nesta e em todas as próximas visitas.",
          },
        ]}
      />
      <TeamSnapshot />
      <Testimonials />
      <SectionDivider from="soft" to="navy" />
      <UrgentCareStrip />
      <SectionDivider from="navy" to="offwhite" />
      <CampaignBanner />
      <HoursMap />
      <SectionDivider from="white" to="blue" />
      <CtaBand />
    </>
  );
}
