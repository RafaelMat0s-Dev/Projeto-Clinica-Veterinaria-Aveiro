import { Calendar, Heart, Star, Stethoscope, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Container } from "@/components/ui/Container";
import { IconBadge } from "@/components/ui/IconBadge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { trustStats } from "@/lib/site-data";

const icons: Record<string, LucideIcon> = { calendar: Calendar, stethoscope: Stethoscope, star: Star, heart: Heart };

export function TrustBar() {
  return (
    <div className="border-y border-soft-sky bg-white">
      <Container>
        <dl className="grid grid-cols-2 gap-6 py-10 sm:grid-cols-4 sm:gap-4">
          {trustStats.map((stat, i) => {
            const Icon = icons[stat.icon];
            return (
              <Reveal key={stat.label} delay={i * 90} variant="scale">
                <div className="group flex flex-col items-center text-center">
                  <IconBadge size="sm" className="mb-2.5">
                    <Icon aria-hidden="true" />
                  </IconBadge>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="font-heading text-3xl font-extrabold text-vet-blue-dark sm:text-4xl">
                    <AnimatedCounter value={stat.value} />
                  </dd>
                  <dd className="mt-1 text-sm leading-snug text-slate/70">{stat.label}</dd>
                </div>
              </Reveal>
            );
          })}
        </dl>
      </Container>
    </div>
  );
}
