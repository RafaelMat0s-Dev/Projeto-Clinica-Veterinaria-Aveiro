import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";
import { ServiceIcon } from "@/components/icons/service-icon";
import { services } from "@/lib/site-data";

export function ServicesGrid({
  compact = false,
  className = "",
}: {
  compact?: boolean;
  className?: string;
}) {
  const items = compact ? services.slice(0, 6) : services;

  return (
    <Section className={className}>
      <SectionHeading
        eyebrow="Serviços"
        title="Cuidados completos, numa clínica de bairro"
        description="Da consulta de rotina à cirurgia, tratamos o seu animal com a mesma equipa em todas as fases da vida."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((service, i) => (
          <Reveal key={service.slug} delay={(i % 3) * 90}>
            <Link
              href={`/servicos#${service.slug}`}
              className="group flex h-full flex-col rounded-2xl border border-soft-sky bg-white p-6 shadow-sm shadow-deep-navy/3 transition-all duration-300 hover:-translate-y-1.5 hover:border-vet-blue/30 hover:shadow-lg hover:shadow-vet-blue/10"
            >
              <IconBadge>
                <ServiceIcon icon={service.icon} />
              </IconBadge>
              <h3 className="mt-4 font-heading text-lg font-semibold text-deep-navy">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate/70">{service.shortDescription}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-vet-blue-dark">
                Saber mais
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
      {compact && (
        <div className="mt-10 text-center">
          <Link
            href="/servicos"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-vet-blue px-6 py-3 text-base font-semibold text-vet-blue-dark transition-all hover:-translate-y-0.5 hover:bg-soft-sky hover:shadow-md"
          >
            Ver todos os serviços
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
          </Link>
        </div>
      )}
    </Section>
  );
}
