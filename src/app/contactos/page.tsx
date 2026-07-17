import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { IconBadge } from "@/components/ui/IconBadge";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/icons/social";
import { contact, hours } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contactos",
  description: "Morada, telefone, email, horário e mapa do Centro Veterinário de Aveiro, em Alagoas, Aveiro.",
  alternates: { canonical: "/contactos" },
};

export default function ContactosPage() {
  return (
    <>
      <div className="bg-soft-sky/60">
        <Container className="py-16 text-center sm:py-20">
          <Reveal>
            <span className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-vet-blue-dark shadow-sm">
              Contactos
            </span>
            <h1 className="mx-auto max-w-2xl text-4xl font-extrabold tracking-tight text-deep-navy sm:text-5xl">
              Fale connosco
            </h1>
          </Reveal>
        </Container>
      </div>

      <Section>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal variant="left" className="lg:col-span-2">
            <div className="space-y-5">
              <ContactCard icon={MapPin} title="Morada">
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <Button
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`}
                  external
                  variant="ghost"
                  size="sm"
                  className="mt-3 !px-0"
                >
                  Ver direções →
                </Button>
              </ContactCard>

              <ContactCard icon={Phone} title="Telefone">
                <a href={contact.phoneHref} className="block hover:text-vet-blue-dark">
                  Geral: {contact.phone}
                </a>
                <a href={contact.urgencyPhoneHref} className="mt-1 block hover:text-vet-blue-dark">
                  Urgências: {contact.urgencyPhone}
                </a>
              </ContactCard>

              <ContactCard icon={Mail} title="Email">
                <a href={contact.emailHref} className="hover:text-vet-blue-dark break-all">
                  {contact.email}
                </a>
              </ContactCard>

              <ContactCard icon={Clock} title="Horário">
                <dl className="space-y-1">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between gap-3">
                      <dt>{h.day}</dt>
                      <dd className={h.hours === "Encerrado" ? "text-slate/40" : "font-medium text-deep-navy"}>{h.hours}</dd>
                    </div>
                  ))}
                </dl>
              </ContactCard>

              <div className="rounded-2xl border border-soft-sky bg-white p-6">
                <p className="font-heading font-semibold text-deep-navy">Redes sociais</p>
                <div className="mt-3 flex gap-3">
                  <a
                    href={contact.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-sky text-vet-blue-dark transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-vet-blue hover:text-white"
                  >
                    <FacebookIcon className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-sky text-vet-blue-dark transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-vet-blue hover:text-white"
                  >
                    <InstagramIcon className="h-4.5 w-4.5" />
                  </a>
                  <a
                    href="https://wa.me/351969571573"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="flex h-10 w-10 items-center justify-center rounded-full bg-soft-sky text-vet-blue-dark transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-vet-blue-dark hover:text-white"
                  >
                    <WhatsAppIcon className="h-4.5 w-4.5" />
                  </a>
                </div>
              </div>

              <p className="text-xs leading-relaxed text-slate/50">
                Estacionamento na via pública, típico de rua residencial. Consulte-nos para informações de
                acessibilidade.
              </p>
            </div>
          </Reveal>

          <Reveal variant="right" delay={100} className="lg:col-span-3">
            <div className="h-96 w-full overflow-hidden rounded-2xl border border-soft-sky shadow-sm shadow-deep-navy/3 transition-colors duration-300 hover:border-vet-blue/30 lg:h-full lg:min-h-128">
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
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group rounded-2xl border border-soft-sky bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-vet-blue/30 hover:shadow-md">
      <div className="flex items-center gap-3 font-heading font-semibold text-deep-navy">
        <IconBadge size="sm">
          <Icon aria-hidden="true" />
        </IconBadge>
        {title}
      </div>
      <div className="mt-3 text-sm leading-relaxed text-slate/75">{children}</div>
    </div>
  );
}
