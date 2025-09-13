export function formatDateTime(dateString: string): string {
  const date = new Date(dateString);
  // Exempel: 2025-09-12 14:30
  return date.toLocaleString("sv-SE", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}
