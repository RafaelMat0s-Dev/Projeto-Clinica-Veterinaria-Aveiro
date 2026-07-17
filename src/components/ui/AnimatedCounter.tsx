"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Renders `value` immediately (correct on first paint, no-JS safe),
 * then — once visible on screen — briefly counts up from 0 as a
 * cosmetic flourish. Never hides or delays the real content, and
 * always ends on the exact original string.
 */
export function AnimatedCounter({ value, className = "" }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);

  const match = value.match(/^(\d+(?:\.\d+)?)/);
  const numeric = match ? parseFloat(match[1]) : NaN;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const suffix = match ? value.slice(match[1].length) : "";

  useEffect(() => {
    if (Number.isNaN(numeric) || typeof IntersectionObserver === "undefined") return;
    const node = ref.current;
    if (!node) return;

    let frame: number;
    const duration = 1000;

    const animate = () => {
      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        if (progress >= 1) {
          setDisplay(value);
          return;
        }
        setDisplay(`${(numeric * eased).toFixed(decimals)}${suffix}`);
        frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          animate();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {display}
    </span>
  );
}
