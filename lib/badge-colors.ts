import { Trophy, Award, CheckCircle2, LucideIcon } from "lucide-react";

export function getStatusBadgeClasses(status: string): string {
  const s = status.toLowerCase();
  if (s.includes("winner")) return "bg-forest/10 text-forest";
  if (s.includes("finalist") || s.includes("runner")) return "bg-navy/10 text-navy";
  if (s.includes("published") || s.includes("research")) return "bg-crimson/10 text-crimson";
  if (s.includes("incubat")) return "bg-gold/10 text-gold";
  return "bg-text-muted/10 text-text-muted";
}

export function getAchievementIcon(achievement: string): {
  icon: LucideIcon;
  colorClass: string;
} {
  const a = achievement.toLowerCase();
  if (a.includes("winner")) return { icon: Trophy, colorClass: "text-forest" };
  if (a.includes("runner") || a.includes("finalist"))
    return { icon: Award, colorClass: "text-navy" };
  return { icon: CheckCircle2, colorClass: "text-text-muted" };
}