/**
 * Creates an attribute of given type and value and adds it to the element. If
 * the element already has that attribute set, nothing happens.
 * @param el Element to add the attribute to
 * @param type Type of the attribute (e.g. "slot")
 * @param value Value of the attribute (e.g. "footer")
 * @returns Returns element which has been modified in place (if attribute was added)
 */
export function setElAttr(el: HTMLElement, type: string, value: string) {
  const attr = document.createAttribute(type);
  attr.value = value;

  // Make sure that we're not overwriting an existing attribute
  if (!el.attributes.getNamedItem(type)) {
    el.attributes.setNamedItem(attr);
  }

  return el;
}
