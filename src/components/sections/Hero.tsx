import { Calendar, Phone, ShieldCheck, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Reveal } from "@/components/ui/Reveal";
import { contact, site } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-soft-sky/60">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 20%, rgba(76,175,136,0.18), transparent 40%), radial-gradient(circle at 85% 0%, rgba(31,122,140,0.18), transparent 45%)",
        }}
        aria-hidden="true"
      />
      <Container className="relative grid grid-cols-1 items-center gap-12 py-14 sm:py-20 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-vet-blue-dark shadow-sm">
            <ShieldCheck className="h-4 w-4 text-vet-blue-dark" aria-hidden="true" />
            Desde {site.foundedYear} em Aveiro
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-deep-navy sm:text-5xl lg:text-[3.25rem]">
            {site.tagline}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate/85">
            Cuidados veterinários próximos, honestos e experientes para cães, gatos e exóticos — a mesma equipa que
            acompanha o seu animal em todas as fases da vida.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/marcacoes" size="lg" icon={<Calendar className="h-5 w-5" aria-hidden="true" />}>
              Marcar consulta
            </Button>
            <Button href={contact.phoneHref} variant="outline" size="lg" icon={<Phone className="h-5 w-5" aria-hidden="true" />}>
              {contact.phone}
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-2 text-sm font-medium text-slate/70">
            <span className="flex items-center gap-0.5 text-sunlit-yellow">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
              ))}
            </span>
            4.8/5 no Facebook · mais de 60 avaliações de tutores em Aveiro
          </div>
        </Reveal>

        <Reveal delay={150}>
          <PlaceholderImage
            label="Foto: veterinário a examinar um cão na clínica"
            tone="blue"
            className="aspect-4/3 w-full shadow-xl shadow-deep-navy/10 lg:aspect-square"
          />
        </Reveal>
      </Container>
    </section>
  );
}
