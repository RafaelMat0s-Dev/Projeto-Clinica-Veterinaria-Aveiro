import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { contact, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade do Centro Veterinário de Aveiro.",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <Section>
      <Container className="max-w-3xl">
        <h1 className="text-3xl font-bold text-deep-navy sm:text-4xl">Política de Privacidade</h1>
        <p className="mt-3 text-sm text-slate/60">
          Última atualização: {new Date().toLocaleDateString("pt-PT", { year: "numeric", month: "long" })}
        </p>

        <div className="prose-content mt-8 space-y-6 leading-relaxed text-slate/80">
          <p>
            Este é um texto provisório. O {site.name} respeita a privacidade dos visitantes deste site e dos seus
            clientes. Esta página deve ser revista e validada por um profissional jurídico antes da publicação
            definitiva do site, em conformidade com o Regulamento Geral de Proteção de Dados (RGPD).
          </p>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deep-navy">Dados recolhidos</h2>
            <p className="mt-2">
              Quando utiliza o formulário de marcações, o nome, contacto telefónico, email e informação sobre o seu
              animal são utilizados exclusivamente para gerir o pedido de consulta.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deep-navy">Contacto</h2>
            <p className="mt-2">
              Para qualquer questão sobre os seus dados pessoais, contacte-nos através de{" "}
              <a href={contact.emailHref} className="font-medium text-vet-blue-dark underline">
                {contact.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-semibold text-deep-navy">Cookies</h2>
            <p className="mt-2">
              Este site utiliza apenas cookies essenciais ao seu funcionamento. Não são utilizados cookies de
              publicidade ou rastreio de terceiros nesta versão do site.
            </p>
          </section>
        </div>
      </Container>
    </Section>
  );
}
