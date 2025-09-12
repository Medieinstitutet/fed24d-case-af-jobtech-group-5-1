export function formatDateTime(isoDate: string): string {
  const date = new Date(isoDate);
  const now = new Date();

  const isToday =
    date.getDate() === now.getDate() && date.getMonth() === now.getMonth() && date.getFullYear() === now.getFullYear();

  const isYesterday =
    date.getDate() === now.getDate() - 1 &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();

  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  if (isToday) return `Publicerad idag, kl. ${hours}:${minutes}`;
  if (isYesterday) return `Publicerad igår, kl. ${hours}:${minutes}`;

  const day = date.getDate();
  const monthNames = ["jan", "feb", "mar", "apr", "maj", "jun", "jul", "aug", "sep", "okt", "nov", "dec"];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  return `Publicerad ${day} ${month} ${year}, kl. ${hours}:${minutes}`;
}
