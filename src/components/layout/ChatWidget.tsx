"use client";

import { useState } from "react";
import { MessageCircle, PawPrint, Send, X } from "lucide-react";
import { contact } from "@/lib/site-data";

export function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          role="dialog"
          aria-label="Assistente virtual do Centro Veterinário de Aveiro"
          className="fixed bottom-[calc(6.5rem+env(safe-area-inset-bottom))] right-4 z-50 flex h-[28rem] max-h-[70vh] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl border border-soft-sky bg-white shadow-2xl shadow-deep-navy/20 animate-fade-up lg:bottom-24 lg:right-6"
        >
          <div className="flex items-center justify-between gap-3 bg-vet-blue px-5 py-4 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <PawPrint className="h-4.5 w-4.5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-heading text-sm font-semibold leading-tight">Assistente CVA</p>
                <p className="text-xs text-white/70 leading-tight">Normalmente responde em breve</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar chat"
              className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/15"
            >
              <X className="h-4.5 w-4.5" aria-hidden="true" />
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-soft-sky/40 px-4 py-4">
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-relaxed text-slate shadow-sm">
              Olá! 👋 Este assistente vai ajudá-lo em breve com dúvidas rápidas sobre a nossa clínica.
              <br />
              <br />
              Por agora, para questões urgentes ligue{" "}
              <a href={contact.phoneHref} className="font-semibold text-vet-blue-dark underline">
                {contact.phone}
              </a>{" "}
              ou marque uma consulta.
            </div>
          </div>

          <form
            className="flex items-center gap-2 border-t border-soft-sky bg-white p-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="text"
              placeholder="Assistente em breve — use o telefone por agora"
              disabled
              className="min-h-11 flex-1 rounded-full border border-soft-sky bg-soft-sky/30 px-4 text-sm text-slate placeholder:text-slate/50 disabled:cursor-not-allowed"
            />
            <button
              type="submit"
              disabled
              aria-label="Enviar mensagem"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-vet-blue text-white disabled:opacity-40"
            >
              <Send className="h-4.5 w-4.5" aria-hidden="true" />
            </button>
          </form>
        </div>
      )}

      <div className="fixed bottom-[calc(4.5rem+env(safe-area-inset-bottom))] right-4 z-50 lg:bottom-6 lg:right-6">
        {!open && (
          <span className="absolute inset-0 -z-10 animate-ring rounded-full bg-coral" aria-hidden="true" />
        )}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar assistente virtual" : "Abrir assistente virtual"}
          aria-expanded={open}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-coral text-white shadow-lg shadow-coral/40 transition-transform hover:scale-105 active:scale-95"
        >
          {open ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
    </>
  );
}
