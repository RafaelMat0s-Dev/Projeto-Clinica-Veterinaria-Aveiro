import type { ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : "text-left"} mb-12`}>
      {eyebrow && (
        <span className="mb-3 inline-block rounded-full bg-soft-sky px-4 py-1.5 text-sm font-semibold text-vet-blue-dark">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-deep-navy sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg leading-relaxed text-slate/80">{description}</p>}
    </div>
  );
}
