export function truncateTitle(title: string, maxLength: number) {
  return title.length > maxLength ? `${title.substring(0, maxLength)}...` : title;
}
