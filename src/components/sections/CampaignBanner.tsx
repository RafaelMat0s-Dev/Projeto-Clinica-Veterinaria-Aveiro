import { Scissors } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export function CampaignBanner() {
  return (
    <Section>
      <Reveal variant="scale">
        <div className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-vet-blue to-deep-navy px-6 py-10 text-white transition-shadow duration-300 hover:shadow-2xl hover:shadow-vet-blue/20 sm:px-12 sm:py-14">
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(white 1.5px, transparent 1.5px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />
          <span
            className="animate-float pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10"
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/15 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
                <Scissors className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <h2 className="font-heading text-2xl font-bold sm:text-3xl">Campanhas de esterilização</h2>
                <p className="mt-2 max-w-xl text-white/85">
                  Três vezes por ano organizamos campanhas de castração a preços reduzidos, para cães e gatos.
                  Contacte-nos para saber as próximas datas e valores.
                </p>
              </div>
            </div>
            <Button href="/contactos" variant="secondary" className="shrink-0 !bg-white !text-vet-blue-dark hover:!bg-soft-sky">
              Perguntar sobre a campanha
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
