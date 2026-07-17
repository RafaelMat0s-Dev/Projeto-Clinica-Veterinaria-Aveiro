import { Calendar, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons/social";
import { contact } from "@/lib/site-data";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-soft-sky bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_16px_rgba(11,60,73,0.08)] backdrop-blur-sm lg:hidden">
      <a
        href={contact.phoneHref}
        className="flex flex-col items-center justify-center gap-1 py-2.5 text-vet-blue-dark active:bg-soft-sky"
      >
        <Phone className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-semibold">Ligar</span>
      </a>
      <a
        href="https://wa.me/351969571573"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center gap-1 border-x border-soft-sky py-2.5 text-vet-blue-dark active:bg-soft-sky"
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span className="text-[11px] font-semibold">WhatsApp</span>
      </a>
      <a
        href="/marcacoes"
        className="flex flex-col items-center justify-center gap-1 bg-coral py-2.5 text-white active:bg-coral-dark"
      >
        <Calendar className="h-5 w-5" aria-hidden="true" />
        <span className="text-[11px] font-semibold">Marcar</span>
      </a>
    </div>
  );
}
