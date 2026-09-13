/** Format large counts for display — e.g. 14000 → "14K", 800 → "800". */
export function formatCompactCount(value: number, compactFrom = 1000): string {
  if (value >= compactFrom) {
    const thousands = value / 1000;
    if (thousands >= 10) {
      return `${Math.round(thousands)}K`;
    }
    const rounded = Math.round(thousands * 10) / 10;
    return `${rounded}K`.replace(/\.0K$/, 'K');
  }
  return value.toLocaleString('en-IN');
}

export function formatRating(value: number): string {
  return value.toFixed(1);
}
