export function getStatusBadgeClasses(status: string): string {
  const s = status.toLowerCase();

  if (s.includes("winner")) return "bg-forest/10 text-forest";
  if (s.includes("finalist") || s.includes("runner")) return "bg-navy/10 text-navy";
  if (s.includes("published") || s.includes("research")) return "bg-crimson/10 text-crimson";
  if (s.includes("incubat")) return "bg-gold/10 text-gold";
  if (s.includes("prototype") || s.includes("shortlist")) return "bg-text-muted/10 text-text-muted";

  return "bg-navy/10 text-navy";
}