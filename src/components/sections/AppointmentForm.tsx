"use client";

import { useState, type SubmitEvent } from "react";
import { Mail, MessageCircleMore, Send } from "lucide-react";
import { contact, services } from "@/lib/site-data";
import { WhatsAppIcon } from "@/components/icons/social";

const species = ["Cão", "Gato", "Coelho", "Cobaia", "Outro"];

export function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);

  function buildMessage(form: HTMLFormElement) {
    const data = new FormData(form);
    const get = (key: string) => (data.get(key) as string)?.trim() || "—";
    return {
      subject: `Pedido de marcação — ${get("petName")} (${get("tutorName")})`,
      body: [
        `Nome do tutor: ${get("tutorName")}`,
        `Telefone: ${get("phone")}`,
        `Email: ${get("email")}`,
        `Nome do animal: ${get("petName")}`,
        `Espécie: ${get("species")}`,
        `Serviço pretendido: ${get("service")}`,
        `Data/hora preferida: ${get("preferredTime")}`,
        `Observações: ${get("message")}`,
      ].join("\n"),
    };
  }

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    const { subject, body } = buildMessage(e.currentTarget);
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  function handleWhatsApp(form: HTMLFormElement | null) {
    if (!form) return;
    const { subject, body } = buildMessage(form);
    const text = `${subject}\n\n${body}`;
    window.open(`https://wa.me/351969571573?text=${encodeURIComponent(text)}`, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-soft-sky bg-white p-6 shadow-sm shadow-deep-navy/3 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="O seu nome" name="tutorName" required autoComplete="name" />
        <Field label="Telefone" name="phone" type="tel" required autoComplete="tel" />
        <Field label="Email" name="email" type="email" autoComplete="email" className="sm:col-span-2" />
        <Field label="Nome do animal" name="petName" required />
        <SelectField label="Espécie" name="species" options={species} />
        <SelectField
          label="Serviço pretendido"
          name="service"
          options={services.map((s) => s.title)}
          className="sm:col-span-2"
        />
        <Field label="Data/hora preferida" name="preferredTime" placeholder="Ex.: quinta-feira de manhã" className="sm:col-span-2" />
        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-deep-navy">
            Observações
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-xl border border-soft-sky bg-offwhite px-4 py-3 text-sm text-slate placeholder:text-slate/40 focus:border-vet-blue focus:outline-none focus:ring-2 focus:ring-vet-blue/20"
            placeholder="Descreva brevemente o motivo da consulta"
          />
        </div>
      </div>

      <p className="mt-5 text-xs text-slate/60">
        Este formulário abre o seu email ou WhatsApp com os dados pré-preenchidos — ainda não recebemos pedidos
        diretamente no site. Para pedidos urgentes, ligue {contact.phone}.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-coral px-6 py-3 font-semibold text-white transition-colors hover:bg-coral-dark"
        >
          <Mail className="h-4.5 w-4.5" aria-hidden="true" />
          Enviar por email
        </button>
        <button
          type="button"
          onClick={(e) => handleWhatsApp(e.currentTarget.closest("form"))}
          className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full bg-vet-blue-dark px-6 py-3 font-semibold text-white transition-colors hover:brightness-110"
        >
          <WhatsAppIcon className="h-4.5 w-4.5" />
          Enviar por WhatsApp
        </button>
      </div>

      {submitted && (
        <p className="mt-4 flex items-center gap-2 rounded-xl bg-soft-sky/50 px-4 py-3 text-sm text-vet-blue-dark">
          <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
          A abrir a sua aplicação de email/WhatsApp — confirme e envie o pedido. Entraremos em contacto assim que
          possível.
        </p>
      )}

      <p className="mt-4 flex items-center gap-2 text-xs text-slate/50">
        <MessageCircleMore className="h-4 w-4 shrink-0" aria-hidden="true" />
        Prefere falar diretamente? Ligue {contact.phone} durante o nosso horário.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  autoComplete,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-deep-navy">
        {label}
        {required && <span className="text-coral"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="min-h-11 w-full rounded-xl border border-soft-sky bg-offwhite px-4 py-2.5 text-sm text-slate placeholder:text-slate/40 focus:border-vet-blue focus:outline-none focus:ring-2 focus:ring-vet-blue/20"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  options,
  className = "",
}: {
  label: string;
  name: string;
  options: string[];
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-deep-navy">
        {label}
      </label>
      <select
        id={name}
        name={name}
        defaultValue=""
        className="min-h-11 w-full rounded-xl border border-soft-sky bg-offwhite px-4 py-2.5 text-sm text-slate focus:border-vet-blue focus:outline-none focus:ring-2 focus:ring-vet-blue/20"
      >
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
