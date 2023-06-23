/**
 * Get an array of non-empty HTMLElements from a slot change event.
 * @param e A slot change event.
 * @returns An array of non-empty HTMLElements.
 */
export function getElementsFromSlotChangeEvent(e: Event): HTMLElement[] {
  const slot = e.target as HTMLSlotElement | null;

  if (!slot) return [];

  // Sometimes we get node that are just newlines and empty text. These don't
  // matter as they dont inclunce the appearnace of the app so we can filter
  // them out before working with the slotted elements
  return slot
    .assignedNodes({ flatten: true })
    .filter((node): node is HTMLElement => {
      // Regex to detect text that's exclusively whitespace or newlines
      return node instanceof HTMLElement && !/^\s*$/.test(node.innerHTML);
    });
}
