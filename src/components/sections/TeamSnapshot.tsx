import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/lib/site-data";

export function TeamSnapshot() {
  return (
    <Section className="bg-soft-sky/30">
      <SectionHeading
        eyebrow="Equipa"
        title="As pessoas que vão conhecer o seu animal para a vida"
        description="Acreditamos que os primeiros cinco minutos de contacto definem a confiança — por isso lideramos com as pessoas, não só com credenciais."
      />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {team.map((member, i) => (
          <Reveal key={member.slug} delay={i * 110} variant="scale">
            <div className="group flex flex-col items-center rounded-2xl border border-soft-sky bg-white p-8 text-center shadow-sm shadow-deep-navy/3 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-vet-blue/10">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-vet-blue to-vet-blue-dark font-heading text-xl font-bold text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                {member.initials}
              </span>
              <h3 className="mt-4 font-heading text-lg font-semibold text-deep-navy">{member.name}</h3>
              <p className="text-sm font-medium text-vet-blue-dark">{member.role}</p>
              {member.since && <p className="mt-2 text-xs text-slate/60">{member.since}</p>}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <Link
          href="/equipa"
          className="group inline-flex items-center gap-2 rounded-full border-2 border-vet-blue bg-white px-6 py-3 text-base font-semibold text-vet-blue-dark transition-all hover:-translate-y-0.5 hover:bg-soft-sky hover:shadow-md"
        >
          Conhecer a equipa
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden="true" />
        </Link>
      </div>
    </Section>
  );
}
