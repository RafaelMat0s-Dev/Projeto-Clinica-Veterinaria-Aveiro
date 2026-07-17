import { AlertTriangle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/lib/site-data";

export function UrgentCareStrip() {
  return (
    <div className="bg-deep-navy">
      <Container className="py-8">
        <Reveal className="flex flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="flex items-start gap-3.5 text-white">
          <span className="relative mt-0.5 shrink-0">
            <span className="absolute inset-0 animate-ping rounded-full bg-sunlit-yellow/30" aria-hidden="true" />
            <AlertTriangle className="relative h-6 w-6 text-sunlit-yellow" aria-hidden="true" />
          </span>
          <div>
            <p className="font-heading font-semibold">O seu animal precisa de atendimento urgente?</p>
            <p className="mt-1 text-sm text-white/70">
              Linha de urgência dedicada — atendimento dentro e em torno do nosso horário. Não somos hospital 24h.
            </p>
          </div>
        </div>
        <Button href={contact.urgencyPhoneHref} variant="primary" size="md" icon={<Phone className="h-4.5 w-4.5" aria-hidden="true" />} className="shrink-0 whitespace-nowrap">
          Urgências: {contact.urgencyPhone}
        </Button>
        </Reveal>
      </Container>
    </div>
  );
}
