import {
  Stethoscope,
  Syringe,
  Scissors,
  Scan,
  HeartPulse,
  Home,
  Bone,
  Rabbit,
  ShieldPlus,
  Activity,
  Sparkles,
  Tractor,
  type LucideIcon,
} from "lucide-react";
import type { ServiceCategory } from "@/lib/site-data";

const iconMap: Record<ServiceCategory["icon"], LucideIcon> = {
  stethoscope: Stethoscope,
  syringe: Syringe,
  scissors: Scissors,
  scan: Scan,
  "heart-pulse": HeartPulse,
  home: Home,
  bone: Bone,
  rabbit: Rabbit,
  "shield-plus": ShieldPlus,
  activity: Activity,
  sparkles: Sparkles,
  tractor: Tractor,
};

export function ServiceIcon({
  icon,
  className,
}: {
  icon: ServiceCategory["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden="true" />;
}
