/** Format 1-based index as editorial number (01, 02, …). */
export function editorialIndex(index: number): string {
  return String(index + 1).padStart(2, '0');
}
