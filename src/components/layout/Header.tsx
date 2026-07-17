"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, PawPrint, Phone, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { contact, navLinks, site } from "@/lib/site-data";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [lastPathname, setLastPathname] = useState(pathname);

  if (pathname !== lastPathname) {
    setLastPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-soft-sky/80 bg-offwhite/95 backdrop-blur-sm">
      <Container className="flex h-18 items-center justify-between gap-4 py-3">
        <Link href="/" className="group flex items-center gap-2 shrink-0" aria-label={`${site.name} — página inicial`}>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-vet-blue text-white transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
            <PawPrint className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-heading text-base font-bold text-deep-navy sm:text-lg">Centro Veterinário</span>
            <span className="font-heading text-xs font-semibold uppercase tracking-wide text-vet-blue-dark sm:text-sm">
              de Aveiro
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active ? "bg-soft-sky text-vet-blue-dark" : "text-slate hover:bg-soft-sky/70 hover:text-vet-blue-dark"
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-4 -bottom-0.5 h-0.5 scale-x-0 rounded-full bg-coral transition-transform duration-300 group-hover:scale-x-100 ${
                    active ? "hidden" : ""
                  }`}
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={contact.phoneHref}
            className="group flex items-center gap-2 text-sm font-semibold text-vet-blue-dark hover:text-coral"
          >
            <Phone className="h-4 w-4 transition-transform duration-300 group-hover:animate-wiggle" aria-hidden="true" />
            {contact.phone}
          </a>
          <Button href="/marcacoes" size="sm">
            Marcar consulta
          </Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full text-deep-navy hover:bg-soft-sky lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
        </button>
      </Container>

      {open && (
        <div className="animate-fade-up border-t border-soft-sky bg-offwhite lg:hidden" style={{ animationDuration: "0.25s" }}>
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-xl px-4 py-3 text-base font-medium ${
                  pathname === link.href ? "bg-soft-sky text-vet-blue-dark" : "text-slate hover:bg-soft-sky/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-soft-sky pt-4">
              <Button href={contact.phoneHref} variant="outline">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Ligar {contact.phone}
              </Button>
              <Button href="/marcacoes">Marcar consulta</Button>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}
