const fills: Record<string, string> = {
  white: "#ffffff",
  offwhite: "#fbfdfe",
  soft: "#dceef3",
  navy: "#0b3c49",
  blue: "#1f7a8c",
};

/**
 * A soft wave seam between two sections, so a background-color change
 * reads as one continuous surface instead of a hard horizontal cut.
 * `from` is the section above the divider, `to` is the section below.
 */
export function SectionDivider({
  from,
  to,
  className = "",
}: {
  from: keyof typeof fills;
  to: keyof typeof fills;
  className?: string;
}) {
  return (
    <div
      className={`relative h-10 w-full overflow-hidden sm:h-16 ${className}`}
      style={{ backgroundColor: fills[from] }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        <path
          d="M0 40 C 240 90, 480 0, 720 30 C 960 60, 1200 10, 1440 40 L1440 80 L0 80 Z"
          fill={fills[to]}
        />
      </svg>
    </div>
  );
}
