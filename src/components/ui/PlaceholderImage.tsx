import { ImageIcon, PawPrint } from "lucide-react";
import type { ReactNode } from "react";

type Tone = "blue" | "green" | "navy" | "coral" | "sky";

const toneClasses: Record<Tone, string> = {
  blue: "from-vet-blue to-vet-blue-dark",
  green: "from-vet-blue-dark to-deep-navy",
  navy: "from-deep-navy to-vet-blue-dark",
  coral: "from-coral to-sunlit-yellow",
  sky: "from-soft-sky to-vet-blue/40",
};

/**
 * Stand-in for real clinic/pet photography. Swap for <Image> once the
 * client supplies photos — the `label` documents what should go here.
 */
export function PlaceholderImage({
  label,
  tone = "blue",
  icon,
  className = "",
  rounded = "rounded-3xl",
}: {
  label: string;
  tone?: Tone;
  icon?: ReactNode;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative isolate flex min-h-40 items-center justify-center overflow-hidden bg-linear-to-br ${toneClasses[tone]} ${rounded} ${className}`}
    >
      <div
        className="absolute inset-0 opacity-12"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          color: "white",
        }}
        aria-hidden="true"
      />
      <div className="relative flex flex-col items-center gap-2 text-white/90">
        {icon ?? <PawPrint className="h-10 w-10" strokeWidth={1.5} aria-hidden="true" />}
      </div>
      <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
        <ImageIcon className="h-3.5 w-3.5" aria-hidden="true" />
        {label}
      </span>
    </div>
  );
}
