import type { ReactNode } from "react";

type Tone = "sky" | "navy" | "coral" | "green" | "white";
type Size = "sm" | "md" | "lg";

const toneClasses: Record<Tone, string> = {
  sky: "bg-soft-sky text-vet-blue-dark group-hover:bg-vet-blue group-hover:text-white",
  navy: "bg-white/10 text-white",
  coral: "bg-coral/10 text-coral group-hover:bg-coral group-hover:text-white",
  green: "bg-vet-blue-dark/10 text-vet-blue-dark group-hover:bg-vet-blue-dark group-hover:text-white",
  white: "bg-white text-vet-blue-dark shadow-sm",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-10 w-10 [&>svg]:h-4.5 [&>svg]:w-4.5",
  md: "h-12 w-12 [&>svg]:h-6 [&>svg]:w-6",
  lg: "h-14 w-14 [&>svg]:h-7 [&>svg]:w-7",
};

/**
 * Consistent icon container used across services, values, contact and
 * hours cards. Wrap the parent in `group` to get the hover color-swap +
 * playful rotate/scale on the icon for free.
 */
export function IconBadge({
  children,
  tone = "sky",
  size = "md",
  className = "",
  animated = true,
}: {
  children: ReactNode;
  tone?: Tone;
  size?: Size;
  className?: string;
  animated?: boolean;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-2xl transition-all duration-300 ${
        animated ? "group-hover:rotate-6 group-hover:scale-110" : ""
      } ${toneClasses[tone]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </span>
  );
}
