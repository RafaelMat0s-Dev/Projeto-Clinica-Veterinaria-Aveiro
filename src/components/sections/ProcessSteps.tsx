import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { IconBadge } from "@/components/ui/IconBadge";

export type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function ProcessSteps({
  eyebrow,
  title,
  description,
  steps,
  className = "",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  steps: ProcessStep[];
  className?: string;
}) {
  return (
    <Section className={className}>
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 120} className="group relative">
            <div className="flex h-full flex-col items-center rounded-2xl border border-soft-sky bg-white p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-vet-blue/30 hover:shadow-lg hover:shadow-vet-blue/10">
              <span className="mb-1 font-heading text-xs font-bold tracking-wider text-coral">
                PASSO {i + 1}
              </span>
              <IconBadge size="lg" className="mt-2">
                <step.icon aria-hidden="true" />
              </IconBadge>
              <h3 className="mt-4 font-heading text-lg font-semibold text-deep-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate/70">{step.description}</p>
            </div>
            {i < steps.length - 1 && (
              <ArrowRight
                className="absolute top-1/2 -right-4 hidden h-6 w-6 -translate-y-1/2 text-soft-sky sm:block"
                aria-hidden="true"
              />
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
