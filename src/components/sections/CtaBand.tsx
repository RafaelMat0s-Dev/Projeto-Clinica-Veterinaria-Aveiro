import { Calendar, PawPrint, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { contact } from "@/lib/site-data";

export function CtaBand() {
  return (
    <Section className="relative overflow-hidden bg-vet-blue">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      <PawPrint
        className="animate-float pointer-events-none absolute -left-6 top-6 h-24 w-24 text-white/10"
        aria-hidden="true"
      />
      <PawPrint
        className="animate-float-slow pointer-events-none absolute -right-4 bottom-2 h-32 w-32 text-white/10"
        aria-hidden="true"
      />
      <Reveal variant="scale" className="relative flex flex-col items-center gap-6 text-center text-white">
        <h2 className="max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
          O seu animal merece um médico de família
        </h2>
        <p className="max-w-xl text-white/85">
          Marque uma consulta hoje e conheça a diferença de uma clínica que conhece o seu animal pelo nome.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button href="/marcacoes" variant="primary" size="lg" icon={<Calendar className="h-5 w-5" aria-hidden="true" />}>
            Marcar consulta
          </Button>
          <Button
            href={contact.phoneHref}
            size="lg"
            icon={<Phone className="h-5 w-5" aria-hidden="true" />}
            className="!bg-white/10 !text-white hover:!bg-white/20"
          >
            {contact.phone}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
