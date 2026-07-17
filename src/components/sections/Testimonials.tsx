import { Quote, Star } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/site-data";

export function Testimonials() {
  return (
    <Section className="relative overflow-hidden bg-soft-sky/40">
      <div
        className="animate-float-slow pointer-events-none absolute -right-16 top-10 h-56 w-56 rounded-full bg-vet-blue/5 blur-3xl"
        aria-hidden="true"
      />
      <SectionHeading
        eyebrow="Testemunhos"
        title="O que dizem os tutores de Aveiro"
        description="4.8/5 no Facebook, com 96% dos avaliadores a recomendar — a nossa maior prova é a confiança de quem já nos visitou."
      />
      <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.author} delay={i * 100}>
            <figure className="group flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm shadow-deep-navy/3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-vet-blue/10">
              <Quote
                className="h-7 w-7 text-vet-blue-dark transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110"
                aria-hidden="true"
              />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate/80">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-deep-navy">{t.author}</span>
                <span className="flex items-center gap-0.5 text-sunlit-yellow">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} className="h-3.5 w-3.5 fill-current" aria-hidden="true" />
                  ))}
                </span>
              </figcaption>
              <span className="mt-1 text-xs text-slate/50">via {t.source}</span>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
