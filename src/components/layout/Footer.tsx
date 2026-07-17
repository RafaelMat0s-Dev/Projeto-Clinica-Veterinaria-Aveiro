import Link from "next/link";
import { Clock, Mail, MapPin, PawPrint, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FacebookIcon, InstagramIcon } from "@/components/icons/social";
import { contact, hours, navLinks, site } from "@/lib/site-data";

const legalLinks = [
  { href: "/privacidade", label: "Política de Privacidade" },
  { href: "https://www.livroreclamacoes.pt/", label: "Livro de Reclamações", external: true },
];

export function Footer() {
  return (
    <footer className="bg-deep-navy text-white/80">
      <Container className="grid grid-cols-1 gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:py-16">
        <div>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
              <PawPrint className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-heading text-lg font-bold text-white">{site.name}</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-white/60">{site.tagline}. Cuidados de confiança para cães, gatos e exóticos em Aveiro, desde {site.foundedYear}.</p>
          <div className="mt-5 flex gap-3">
            <a
              href={contact.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook do Centro Veterinário de Aveiro"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-vet-blue"
            >
              <FacebookIcon className="h-4.5 w-4.5" />
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do Centro Veterinário de Aveiro"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-vet-blue"
            >
              <InstagramIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Navegação</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-white/60 hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/marcacoes" className="text-white/60 hover:text-white">
                Marcações
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Contactos</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/60">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-sunlit-yellow" aria-hidden="true" />
              <span>
                {contact.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone className="h-4 w-4 shrink-0 text-sunlit-yellow" aria-hidden="true" />
              <a href={contact.phoneHref} className="hover:text-white">
                {contact.phone}
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail className="h-4 w-4 shrink-0 text-sunlit-yellow" aria-hidden="true" />
              <a href={contact.emailHref} className="hover:text-white break-all">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-sm font-semibold uppercase tracking-wide text-white">Horário</h3>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            {hours.slice(0, 6).map((h) => (
              <li key={h.day} className="flex justify-between gap-3">
                <span>{h.day.replace("-feira", "")}</span>
                <span className="text-right text-white/80">{h.hours}</span>
              </li>
            ))}
            <li className="flex justify-between gap-3">
              <span>Domingo</span>
              <span className="text-right text-white/40">Encerrado</span>
            </li>
          </ul>
          <div className="mt-4 flex items-start gap-2.5 rounded-xl bg-white/5 px-3 py-2.5 text-xs text-white/60">
            <Clock className="mt-0.5 h-4 w-4 shrink-0 text-sunlit-yellow" aria-hidden="true" />
            Urgências: linha dedicada {contact.urgencyPhone} — não somos hospital 24h.
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-white/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {legalLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Container>
      </div>
    </footer>
  );
}
