import { Clock, MapPin, Phone } from "lucide-react";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { contact, hours } from "@/lib/site-data";

export function HoursMap() {
  return (
    <Section className="bg-white">
      <SectionHeading eyebrow="Visite-nos" title="Horário e localização" align="left" />
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        <Reveal variant="left" className="group lg:col-span-2">
          <div className="h-full rounded-2xl border border-soft-sky bg-soft-sky/30 p-7 transition-colors duration-300 hover:border-vet-blue/30">
            <div className="flex items-center gap-3 font-heading font-semibold text-deep-navy">
              <IconBadge size="sm" animated={false}>
                <Clock aria-hidden="true" />
              </IconBadge>
              Horário de funcionamento
            </div>
            <dl className="mt-4 space-y-2 text-sm">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between border-b border-soft-sky/80 py-2 last:border-0">
                  <dt className="text-slate/70">{h.day}</dt>
                  <dd className={h.hours === "Encerrado" ? "text-slate/40" : "font-medium text-deep-navy"}>{h.hours}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 flex items-start gap-2.5 text-sm text-slate/70">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-vet-blue-dark" aria-hidden="true" />
              <span>{contact.addressFull}</span>
            </div>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <Button href={contact.phoneHref} variant="outline" size="sm" icon={<Phone className="h-4 w-4" aria-hidden="true" />}>
                {contact.phone}
              </Button>
              <Button
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`}
                external
                variant="ghost"
                size="sm"
              >
                Ver direções
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal variant="right" delay={100} className="lg:col-span-3">
          <div className="h-80 w-full overflow-hidden rounded-2xl border border-soft-sky shadow-sm shadow-deep-navy/3 transition-colors duration-300 hover:border-vet-blue/30 lg:h-full lg:min-h-96">
            <iframe
              title={`Mapa — ${contact.addressFull}`}
              src={`https://www.google.com/maps?q=${encodeURIComponent(contact.mapsQuery)}&output=embed`}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
