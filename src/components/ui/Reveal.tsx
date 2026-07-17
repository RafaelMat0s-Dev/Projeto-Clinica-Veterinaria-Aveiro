import type { ReactNode } from "react";

const variantClass = {
  up: "animate-fade-up",
  left: "animate-fade-left",
  right: "animate-fade-right",
  scale: "animate-scale-in",
  fade: "animate-fade-in",
} as const;

/**
 * Pure-CSS entrance animation. No IntersectionObserver, no client JS
 * dependency — content is never gated behind script execution, so it
 * can't get stuck invisible on slow/blocked JS or during SSR/hydration.
 * `prefers-reduced-motion` is handled globally in globals.css.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: keyof typeof variantClass;
}) {
  return (
    <div className={`${variantClass[variant]} ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
